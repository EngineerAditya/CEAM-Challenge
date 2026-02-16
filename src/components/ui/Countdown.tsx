'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const TARGET_DATE = new Date('2026-04-17T00:00:00+05:30').getTime();

function BigDigit({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      {/* Massive Digit Container */}
      <div className="relative group">
        {/* Ambient Glow behind each digit */}
        <div className="absolute inset-0 bg-[rgb(235,107,38)]/5 blur-3xl rounded-full scale-0 group-hover:scale-100 transition-transform duration-700" />

        <div className="relative w-24 h-32 sm:w-32 sm:h-44 md:w-48 md:h-64 flex items-center justify-center">
          <AnimatePresence mode="popLayout">
            <motion.span
              key={value}
              initial={{ y: 40, opacity: 0, filter: 'blur(10px)' }}
              animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              exit={{ y: -40, opacity: 0, filter: 'blur(10px)' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl sm:text-8xl md:text-[10rem] lg:text-[12rem] font-bold text-white tracking-tighter"
            >
              {value}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      {/* Label with heavy letter spacing */}
      <motion.span
        className="mt-4 md:mt-8 font-mono text-[10px] md:text-sm text-gray-500 tracking-[0.5em] uppercase border-t border-white/5 pt-4 w-full text-center"
      >
        {label}
      </motion.span>
    </div>
  );
}

export default function Countdown() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-10%' });

  const [time, setTime] = useState({
    days: '00', hours: '00', minutes: '00', seconds: '00',
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      const diff = Math.max(0, TARGET_DATE - now);
      setTime({
        days: String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0'),
        hours: String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
        minutes: String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0'),
        seconds: String(Math.floor((diff / 1000) % 60)).padStart(2, '0'),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-40 md:py-64 lg:py-80 bg-[#050505] overflow-hidden flex flex-col items-center justify-center"
    >
      {/* ── Expansive Technical Background ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large subtle grid */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }}
        />
        {/* Giant Radial Accents */}
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[rgb(235,107,38)]/[0.02] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-white/[0.01] rounded-full blur-[150px]" />
      </div>

      <div className="container relative z-10 px-6 max-w-[1400px] flex flex-col items-center">

        {/* ── Large Scale Heading ── */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end mb-24 md:mb-40 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="space-y-4"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-[rgb(235,107,38)]" />
              <span className="font-mono text-xs text-[rgb(235,107,38)] tracking-[0.4em] uppercase">
                System Chronometer
              </span>
            </div>
            <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-none">
              The Grand <br /> Finale.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="md:text-right font-mono text-[10px] md:text-xs text-gray-600 leading-relaxed uppercase"
          >
            Mission: MAHE Mobility 2026 <br />
            Target: 17.04.2026 // 09:00 IST <br />
            Status: Synchronizing clock cycles...
          </motion.div>
        </div>

        {/* ── Massive Timer Display ── */}
        <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-x-8 gap-y-16 md:gap-x-12 lg:gap-x-20">
          <BigDigit value={time.days} label="Days" />
          <div className="hidden md:block text-white/10 text-6xl lg:text-8xl font-thin self-center mt-[-4rem]">:</div>
          <BigDigit value={time.hours} label="Hours" />
          <div className="hidden md:block text-white/10 text-6xl lg:text-8xl font-thin self-center mt-[-4rem]">:</div>
          <BigDigit value={time.minutes} label="Minutes" />
          <div className="hidden md:block text-white/10 text-6xl lg:text-8xl font-thin self-center mt-[-4rem]">:</div>
          <BigDigit value={time.seconds} label="Seconds" />
        </div>

        {/* ── Stage Breakdown (Spaced Out) ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-32 md:mt-56 w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 border-t border-white/5 pt-16"
        >
          <div className="group space-y-4">
            <span className="font-mono text-[10px] text-[rgb(235,107,38)] tracking-widest uppercase">Stage 01 // Online</span>
            <h3 className="text-2xl md:text-4xl text-white font-semibold tracking-tight">Technical Proposals</h3>
            <p className="text-gray-500 text-sm md:text-lg leading-relaxed max-w-md">
              Submit your autonomous algorithms and hardware architecture by March 31.
            </p>
          </div>
          <div className="group space-y-4">
            <span className="font-mono text-[10px] text-[rgb(235,107,38)] tracking-widest uppercase">Stage 02 // On-Site</span>
            <h3 className="text-2xl md:text-4xl text-white font-semibold tracking-tight">Final Prototype Run</h3>
            <p className="text-gray-500 text-sm md:text-lg leading-relaxed max-w-md">
              Deploy your intelligence on our custom-built track in the heart of MIT Bengaluru.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Extreme Background Decor */}
      <div className="absolute -left-20 top-1/2 -rotate-90 pointer-events-none select-none opacity-[0.02] font-black text-[12vw] text-white">
        TIMELINE
      </div>
    </section>
  );
}