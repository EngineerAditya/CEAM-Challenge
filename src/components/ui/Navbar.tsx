'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';
import { X, Menu, User } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';

const navLinks = [
  { label: 'About', href: '/#about', num: '01' },
  { label: 'Tracks', href: '/#tracks', num: '02' },
  { label: 'Timeline', href: '/#timeline', num: '03' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<{ email?: string } | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  const supabase = createClient();

  // Check auth state
  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, [supabase]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll logic
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      // We rely on global CSS for overflow-x: hidden now
    }
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const handleNav = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setOpen(false);

      if (href === '/') {
        if (pathname === '/') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          router.push('/');
        }
        return;
      }

      if (href.startsWith('/#')) {
        const hash = href.slice(1);
        if (pathname === '/') {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          router.push(href);
        }
      } else {
        router.push(href);
      }
    },
    [pathname, router],
  );

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 w-full ${scrolled ? 'pt-4' : 'pt-6'
          }`}
      >
        <div
          className={`relative flex items-center justify-between transition-all duration-500 ease-out
          ${scrolled
              ? 'bg-[#050505]/80 border-white/10 shadow-2xl shadow-black/50 md:max-w-[800px]'
              : 'bg-transparent border-transparent md:max-w-[1200px]'
            }
          /* FIX: Use calc(100% - 2rem) instead of vw to respect scrollbars */
          w-[calc(100%-2rem)]
          backdrop-blur-xl border rounded-full px-5 py-3 md:py-4`}
        >
          {/* Logo Section */}
          <a
            href="/"
            onClick={(e) => handleNav(e, '/')}
            className="flex items-center gap-2 z-50 relative group shrink-0"
          >
            <img
              src="/manipal/manipal-logo.svg"
              alt="MAHE"
              className="h-8 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 ml-auto">
            <div className="flex items-center bg-white/[0.03] border border-white/5 rounded-full px-2 py-1.5 mr-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNav(e, link.href)}
                  className="relative px-5 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <a
              href={user ? '/dashboard' : '/login'}
              onClick={(e) => handleNav(e, user ? '/dashboard' : '/login')}
              className="group relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-medium text-black transition duration-300 ease-out rounded-full shadow-md"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-white via-gray-200 to-gray-400"></span>
              <span className="absolute top-0 right-0 block w-64 h-64 -mr-16 -mt-16 bg-white opacity-20 transform rotate-45 translate-x-full group-hover:translate-x-0 transition-all duration-700 ease-in-out"></span>
              <span className="relative flex items-center gap-2 text-xs font-bold tracking-widest uppercase">
                {user ? (
                  <><User size={14} /> Dashboard</>
                ) : (
                  <>Register <span className="w-1.5 h-1.5 rounded-full bg-[rgb(235,107,38)] animate-pulse" /></>
                )}
              </span>
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden relative z-50 p-2 text-white hover:text-[rgb(235,107,38)] transition-colors"
          >
            <Menu size={28} strokeWidth={1.5} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-[#050505]/95 backdrop-blur-2xl flex flex-col items-center justify-center overscroll-none touch-none"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-8 right-8 p-2 text-gray-400 hover:text-white transition-colors"
            >
              <X size={32} strokeWidth={1} />
            </button>

            <div className="w-full max-w-md px-8 flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleNav(e, link.href)}
                      className="group flex items-center gap-4 text-3xl md:text-4xl font-light text-white tracking-tight"
                    >
                      <span className="text-xs font-mono text-[rgb(235,107,38)] pt-2">
                        {link.num}
                      </span>
                      <span className="group-hover:translate-x-2 transition-transform duration-300">
                        {link.label}
                      </span>
                    </a>
                    <div className="h-px w-full bg-white/5 mt-6" />
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <a
                  href={user ? '/dashboard' : '/login'}
                  onClick={(e) => handleNav(e, user ? '/dashboard' : '/login')}
                  className="flex items-center justify-center gap-2 w-full py-4 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-lg hover:bg-[rgb(235,107,38)] hover:text-white transition-colors duration-300"
                >
                  {user ? (<><User size={16} /> Dashboard</>) : 'Sign In to Register'}
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}