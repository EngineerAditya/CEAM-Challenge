'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, MapPin, Calendar, Clock } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

// Scramble Text Component
const ScrambleText = ({ text, className, delay = 0 }: { text: string, className?: string, delay?: number }) => {
  const [displayedText, setDisplayedText] = useState('');
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';

  useEffect(() => {
    let iteration = 0;
    let interval: NodeJS.Timeout;

    // Start after delay
    const startTimeout = setTimeout(() => {
      interval = setInterval(() => {
        setDisplayedText(
          text
            .split('')
            .map((letter, index) => {
              if (index < iteration) return text[index];
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('')
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }
        iteration += 1 / 3;
      }, 30);
    }, delay * 1000);

    return () => {
      clearTimeout(startTimeout);
      clearInterval(interval);
    };
  }, [text, delay]);

  return <span className={className}>{displayedText}</span>;
}

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050505] pt-20 md:pt-20"
    >

      {/* ── Background: Tech Grid + Scanning Line + Noise ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">

        {/* Mobile Radial Gradient Overlay */}
        <div className="md:hidden absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40" />

        {/* Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.03] z-50 pointer-events-none mix-blend-overlay"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}
        />

        {/* Base Grid - Animated Entrance */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
            backgroundSize: '4rem 4rem',
            maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
          }}
        />

        {/* Scanning Line Animation */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgb(235,107,38)]/5 to-transparent h-[200%] w-full animate-scan" style={{ animationDuration: '8s' }} />

        {/* Glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[rgb(235,107,38)] rounded-full blur-[100px] md:blur-[150px]"
        />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center w-full max-w-[1400px]"
      >

        {/* ── Top Bar: Date & Status (Mobile Optimized) ── */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full flex justify-between items-start md:items-center border-b border-white/10 pb-4 md:pb-6 mb-8 md:mb-20"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[rgb(235,107,38)] rounded-full animate-pulse" />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="font-mono text-[10px] md:text-xs text-gray-400 tracking-widest uppercase"
            >
              System Online
            </motion.span>
          </div>
          <div className="hidden md:flex font-mono text-xs text-gray-500 gap-6">
            <ScrambleText text="MITO-ID: 2026-X" delay={0.6} />
            <ScrambleText text="SECURE-CONNECTION" delay={0.8} />
          </div>
          {/* Mobile: Vertical Date Pill */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:hidden flex flex-col items-end gap-0.5 px-2 py-1.5 border border-[rgb(235,107,38)]/20 bg-[rgb(235,107,38)]/5 rounded-sm"
            style={{ boxShadow: '0 0 10px rgba(235,107,38,0.1)' }}
          >
            <span className="font-mono text-[8px] text-[rgb(235,107,38)] tracking-wider">APR</span>
            <span className="font-mono text-[10px] text-[rgb(235,107,38)] font-bold tracking-tight">17-19</span>
            <span className="font-mono text-[7px] text-gray-500 tracking-wider">2026</span>
          </motion.div>
          {/* Desktop: Horizontal Date */}
          <div className="hidden md:block font-mono text-xs text-[rgb(235,107,38)] tracking-widest uppercase">
            Apr 17-19 • 2026
          </div>
        </motion.div>

        {/* ── Main Typography ── */}
        <div className="flex flex-col items-center text-center mb-6 md:mb-12 w-full gap-2 md:gap-6">

          {/* Institution Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-4 md:mb-14 mt-2 md:mt-0"
          >
            <span className="inline-block px-3 py-1 rounded border border-white/10 bg-white/5 font-mono text-[10px] md:text-sm text-gray-300 tracking-wider uppercase backdrop-blur-md">
              Manipal Institute of Technology Bengaluru
            </span>
          </motion.div>

          {/* Glitch Title */}
          <div className="relative font-heading font-black tracking-tighter leading-[0.9] md:leading-[0.85] text-white select-none mb-3 md:mb-10">
            <div
              className="text-[12vw] md:text-[9rem] lg:text-[11rem] mix-blend-difference z-20 relative flex flex-col items-center"
              style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5), 0 0 40px rgba(235,107,38,0.15)' }}
            >
              <ScrambleText text="MAHE" delay={0.0} />
              <ScrambleText text="MOBILITY" className="text-[rgb(235,107,38)]" delay={0.3} />
            </div>

            {/* Outline Echo (Decor) - Hidden on mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 0.3, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
              className="hidden md:block absolute top-0 left-0 w-full h-full text-[9rem] lg:text-[11rem] text-transparent z-10 select-none pointer-events-none"
              style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)', transform: 'translate(4px, 4px)' }}
            >
              MAHE<br />MOBILITY
            </motion.div>
          </div>

          <motion.h2
            initial={{ opacity: 0, letterSpacing: '0em' }}
            animate={{ opacity: 1, letterSpacing: '0.2em' }}
            transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
            className="font-mono text-[9px] md:text-lg text-gray-400 mt-1 md:mt-4 uppercase text-center px-4 leading-relaxed max-w-4xl"
          >
            National Autonomous Vehicle Challenge
          </motion.h2>

        </div>

        {/* ── Action Grid (Centered CTA) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
          className="flex flex-col items-center justify-center w-full max-w-2xl mt-4 md:mt-10"
        >
          {/* Primary CTA */}
          <a
            href="#register"
            className="group relative flex items-center justify-center px-8 py-4 md:px-10 md:py-6 bg-[rgb(235,107,38)] text-white overflow-visible w-full md:w-auto min-w-[280px] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}
          >
            {/* Animated Border Scan (Mobile) */}
            <div className="md:hidden absolute inset-0 border-2 border-white/20 animate-pulse" style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)', animationDuration: '2s' }} />

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white/40" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white/40" />

            <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out z-0" />
            <span className="relative z-10 font-bold text-lg md:text-2xl tracking-tight group-hover:text-black transition-colors">REGISTRATIONS STARTING SOON</span>
          </a>
        </motion.div>

      </motion.div>

      {/* ── Footer Status Bar ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-0 left-0 w-full border-t border-white/5 bg-[#050505]/80 backdrop-blur text-[10px] text-gray-600 py-2 px-6 flex justify-between font-mono uppercase"
      >
        <span>v2.0.26</span>
        <span className="hidden md:inline">CEAM Research Lab</span>
        <span>Scroll for Intel</span>
      </motion.div>

    </section>
  );
}
