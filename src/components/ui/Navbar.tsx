'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '/#about', num: '01' },
  { label: 'Tracks', href: '/#tracks', num: '02' },
  { label: 'Timeline', href: '/#timeline', num: '03' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
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
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`site-nav ${scrolled ? 'scrolled' : ''} ${open ? 'menu-open' : ''}`}
      >
        <div className="nav-container">
          <a href="/" className="nav-logo" onClick={(e) => handleNav(e, '/')}>
            <img
              src="/manipal/manipal-logo.png"
              alt="MAHE"
              className="nav-logo-img"
            />
          </a>

          <div className="nav-links-desktop">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="nav-link-desktop"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#register"
              onClick={(e) => handleNav(e, '/#register')}
              className="nav-cta-desktop"
            >
              Registrations Starting Soon
            </a>
          </div>

          <button
            className="nav-hamburger"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <div className={`hamburger-box ${open ? 'open' : ''}`}>
              <div className="hamburger-inner" />
            </div>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3, delay: 0.2 } }}
            transition={{ duration: 0.3 }}
            className="mobile-menu-overlay"
          >
            {/* Explicit Close Button inside Overlay */}
            <button
              onClick={() => setOpen(false)}
              className="mobile-close-btn"
              aria-label="Close menu"
            >
              <X size={32} strokeWidth={1} />
            </button>

            <div className="mobile-menu-content">
              <div className="mobile-links-container">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{
                      delay: 0.1 + i * 0.08,
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="mobile-link-wrapper"
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleNav(e, link.href)}
                      className="mobile-link"
                    >
                      <span className="mobile-link-num">{link.num}</span>
                      <span className="mobile-link-text">{link.label}</span>
                    </a>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{
                  delay: 0.45,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mobile-cta-container"
              >
                <a
                  href="/#register"
                  onClick={(e) => handleNav(e, '/#register')}
                  className="mobile-cta-button"
                >
                  Registrations Starting Soon
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.55, duration: 0.5 }}
                className="mobile-footer-info"
              >
                MAHE Mobility Challenge 2026
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        :root {
          --nav-height: 90px; /* Increased height for larger logo */
          --nav-bg-scrolled: rgba(5, 5, 5, 0.9);
          --nav-border-scrolled: rgba(255, 255, 255, 0.06);
        }

        .site-nav {
          position: fixed;
          top: 1rem;
          /* Mobile-first: fixed */
          left: 1rem;
          right: 1rem;
          width: auto;
          transform: none; 
          z-index: 1000;
          height: 80px; /* Increased mobile height */
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9999px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          background: rgba(5, 5, 5, 0.7);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.04);
        }

        @media (min-width: 900px) {
          .site-nav {
            left: 50%;
            right: auto;
            transform: translateX(-50%);
            width: calc(100% - 4rem);
            max-width: 900px;
          }
        }

        .site-nav.scrolled {
           background: rgba(5, 5, 5, 0.9);
           backdrop-filter: blur(16px);
           -webkit-backdrop-filter: blur(16px);
           border-color: rgba(255, 255, 255, 0.1);
           box-shadow: 0 10px 30px -10px rgba(0,0,0,0.5);
        }
        
        .nav-container {
          width: 100%;
          padding: 0 1.5rem; /* Increased padding */
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
        }

        .nav-logo {
          text-decoration: none;
          z-index: 1002;
          position: relative; 
          display: flex;
          align-items: center;
        }

        .nav-logo-img {
          height: 60px; /* Increased mobile logo size */
          width: auto;
          transition: opacity 0.3s;
        }
        
        @media (min-width: 768px) {
          .nav-logo-img {
             height: 70px; /* Increased desktop logo size */
          }
        }

        .nav-links-desktop {
          display: none;
          align-items: center;
          gap: 2.5rem;
        }

        .nav-link-desktop {
          text-decoration: none;
          font-family: var(--font-body);
          font-size: 0.75rem; /* Reduced text size */
          font-weight: 500;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.6);
          transition: color 0.3s;
          position: relative;
        }

        .nav-link-desktop:hover {
          color: #fff;
        }
        
        .nav-link-desktop::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 50%;
            transform: translateX(-50%);
            width: 0;
            height: 1px;
            background: rgb(235, 107, 38);
            transition: width 0.3s ease;
        }

        .nav-link-desktop:hover::after {
            width: 12px;
        }

        .nav-cta-desktop {
          text-decoration: none;
          font-family: var(--font-body);
          font-size: 0.7rem; /* Reduced cta text size */
          font-weight: 600;
          color: #050505;
          background: #fff;
          padding: 0.5rem 1.2rem; /* Adjusted pill size */
          border-radius: 99px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          transition: all 0.3s ease;
        }

        .nav-cta-desktop:hover {
          background: rgb(235, 107, 38);
          color: #fff;
          transform: translateY(-1px);
        }

        .nav-hamburger {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          width: 40px;
          height: 40px;
          background: none;
          border: none;
          cursor: pointer;
          z-index: 1002; 
          color: #fff;
          padding: 0;
        }
        
        .site-nav.menu-open .nav-hamburger {
            opacity: 0;
            pointer-events: none;
        }

        .hamburger-box {
          width: 18px;
          height: 12px;
          position: relative;
        }

        .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {
            width: 18px;
            height: 1.5px;
            background-color: currentColor;
            position: absolute;
            transition: transform 0.25s ease;
        }
        .hamburger-inner { top: 50%; margin-top: -0.75px; }
        .hamburger-inner::before { content: ""; top: -5px; }
        .hamburger-inner::after { content: ""; bottom: -5px; }

        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: #050505;
          z-index: 1001;
          display: flex;
          align-items: center;
          padding: 2rem 1.5rem;
        }

        .mobile-close-btn {
            position: absolute;
            top: 2rem;
            right: 2rem;
            background: none;
            border: none;
            color: rgba(255,255,255,0.6);
            cursor: pointer;
            z-index: 1005;
            transition: color 0.3s;
        }
        .mobile-close-btn:hover {
            color: #fff;
        }

        .mobile-menu-content {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-bottom: 2rem; 
        }

        .mobile-links-container {
            display: flex;
            flex-direction: column;
            gap: 1.75rem;
            margin-bottom: 3rem;
        }

        .mobile-link {
          text-decoration: none;
          display: flex;
          align-items: flex-start; 
        }

        .mobile-link-num {
          font-family: var(--font-heading);
          font-size: 0.8rem;
          color: rgb(235, 107, 38);
          margin-right: 1rem;
          margin-top: 0.4rem;
          font-weight: 400;
        }

        .mobile-link-text {
          font-family: var(--font-heading);
          font-size: 2.5rem;
          line-height: 0.9;
          font-weight: 400;
          color: #fff;
          text-transform: uppercase;
          transition: color 0.3s;
        }

        .mobile-link:active .mobile-link-text {
            color: rgba(255,255,255,0.5);
        }

        .mobile-cta-button {
            display: block;
            width: 100%;
            padding: 1rem;
            text-align: center;
            background: transparent;
            border: 1px solid rgba(255,255,255,0.2);
            color: #fff;
            font-family: var(--font-body);
            font-size: 0.8rem;
            font-weight: 500;
            text-transform: uppercase;
            text-decoration: none;
            border-radius: 99px;
            letter-spacing: 0.1em;
            transition: all 0.3s;
        }
        .mobile-cta-button:hover {
            background: #fff;
            color: #000;
            border-color: #fff;
        }
        
        .mobile-footer-info {
            position: absolute;
            bottom: 2rem;
            left: 1.5rem;
            font-family: var(--font-body);
            font-size: 0.65rem;
            color: rgba(255, 255, 255, 0.25);
            letter-spacing: 0.05em;
        }

        @media (min-width: 768px) {
          .nav-hamburger { display: none; }
          .nav-links-desktop { display: flex; }
          .mobile-menu-overlay { display: none; }
          .nav-container { padding: 0 2rem; }
        }
      `}</style>
    </>
  );
}
