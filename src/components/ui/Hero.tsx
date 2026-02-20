'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

// Scramble Text Component
const ScrambleText = ({ text, className, delay = 0 }: { text: string, className?: string, delay?: number }) => {
  const [displayedText, setDisplayedText] = useState('');
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';

  useEffect(() => {
    let iteration = 0;
    let interval: NodeJS.Timeout;
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
        if (iteration >= text.length) clearInterval(interval);
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

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#020202] py-20 md:py-0"
    >
      {/* ── Background: Flashy Tech Elements ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Scanning Line Animation */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgb(235,107,38)]/10 to-transparent h-[200%] w-full animate-scan z-10" style={{ animationDuration: '8s' }} />

        {/* Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.05] z-20 mix-blend-overlay"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}
        />

        {/* High-Contrast Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(235,107,38,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(235,107,38,0.2) 1px, transparent 1px)`,
            backgroundSize: '4rem 4rem',
            maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
          }}
        />

        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[800px] md:h-[800px] bg-[rgb(235,107,38)]/20 rounded-full blur-[100px] md:blur-[180px]" />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="container mx-auto relative z-30 flex flex-col items-center px-4"
      >
        {/* ── Top Bar: Date & Critical Deadline ── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full flex justify-between items-center border-b-2 border-[rgb(235,107,38)]/30 pb-4 mb-16 md:mb-24"
        >
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[rgb(235,107,38)] rounded-full animate-ping" />
              <span className="font-mono text-[10px] md:text-xs text-[rgb(235,107,38)] tracking-widest uppercase font-bold">System Online</span>
            </div>
            <span className="font-mono text-[9px] md:text-[10px] text-gray-500 uppercase tracking-tighter">Round 01 Deadline: 31 March 2026</span>
          </div>
          <div className="text-right">
            <span className="block font-mono text-[8px] md:text-[10px] text-gray-500 uppercase">Final Phase</span>
            <span className="font-mono text-[11px] md:text-sm text-white font-black tracking-widest uppercase">
              Apr 17-19 • 2026
            </span>
          </div>
        </motion.div>

        {/* ── Main Typography ── */}
        <div className="flex flex-col items-center text-center w-full space-y-6 md:space-y-10">

          {/* Institutional Branding */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="px-3 py-1 border border-[rgb(235,107,38)]/50 bg-[rgb(235,107,38)]/10 font-mono text-[9px] md:text-sm text-[rgb(235,107,38)] tracking-[0.3em] uppercase">
              Manipal Institute of Technology
            </span>
            <span className="font-mono text-[8px] md:text-xs text-gray-400 uppercase tracking-widest">
              Dept. of ECE & Centre of Excellence in Autonomous Mobility
            </span>
          </motion.div>

          {/* Glitch Title */}
          <div className="relative font-heading font-black tracking-tighter leading-[0.9] text-white select-none">
            <div
              className="text-[16vw] md:text-[10rem] lg:text-[12rem] flex flex-col items-center drop-shadow-[0_0_30px_rgba(235,107,38,0.3)]"
            >
              <ScrambleText text="MAHE" delay={0.0} />
              <ScrambleText text="MOBILITY" className="text-[rgb(235,107,38)]" delay={0.3} />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            animate={{ opacity: 1, letterSpacing: '0.4em' }}
            transition={{ duration: 1.5, delay: 1.2 }}
            className="font-mono text-[10px] md:text-2xl text-white font-light uppercase border-y border-white/10 py-2 w-full max-w-4xl"
          >
            Challenge 2026
          </motion.div>
        </div>

        {/* ── Flashy CTA ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-16 md:mt-24 w-full flex justify-center"
        >
          <Link
            href="/login"
            className="group relative px-10 py-6 md:px-16 md:py-8 bg-white text-black font-black text-sm md:text-xl tracking-tighter overflow-hidden transition-all hover:scale-105 active:scale-95"
            style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 75%, 85% 100%, 0 100%, 0 25%)' }}
          >
            <div className="absolute inset-0 bg-[rgb(235,107,38)] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
            <span className="relative z-10 group-hover:text-white transition-colors uppercase">Registrations Close on 15th March</span>
          </Link>
        </motion.div>

      </motion.div>

      {/* ── Footer Metadata ── */}
      <div className="absolute bottom-6 left-6 hidden md:flex flex-col font-mono text-[10px] text-gray-600 gap-1 border-l border-[rgb(235,107,38)] pl-4">
        <span>PROJECT: AUTONOMOUS_HACKATHON</span>
        <span>STATUS: UPLINK_STABLE</span>
      </div>

      <footer className="absolute bottom-0 w-full py-3 px-6 border-t border-white/5 bg-black/50 backdrop-blur-sm flex justify-between items-center font-mono text-[8px] md:text-[10px] text-gray-500">
        <span>&copy; 2026 MAHE Mobility Challenge</span>
        <span className="animate-pulse text-[rgb(235,107,38)] uppercase tracking-widest font-bold">Waiting for Uplink</span>
      </footer>

      <style jsx global>{`
        @keyframes scan {
          from { transform: translateY(-100%); }
          to { transform: translateY(100%); }
        }
        .animate-scan {
          animation: scan linear infinite;
        }
      `}</style>
    </section>
  );
}