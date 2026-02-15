'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, Trophy, Users, Layers } from 'lucide-react';

const stats = [
  { value: '36', unit: 'hrs', label: 'Hackathon', icon: Clock },
  { value: '₹3L+', unit: '', label: 'Prize Pool', icon: Trophy },
  { value: '2-4', unit: 'members', label: 'Team Size', icon: Users },
  { value: '3', unit: 'domains', label: 'Tracks', icon: Layers },
];


export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="section relative overflow-hidden py-24 md:py-32 lg:py-40" style={{ scrollMarginTop: '80px' }}>

      {/* Mobile Decorative Scan Line */}
      <div className="md:hidden absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[rgb(235,107,38)]/50 to-transparent" />

      {/* ── Grid Layout ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">

        {/* Left Column: Content */}
        <div className="lg:col-span-7 flex flex-col justify-center">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-3 mb-4 md:mb-8"
          >
            <div className="w-10 h-[2px] bg-[rgb(235,107,38)]" />
            <span className="font-mono text-xs md:text-sm text-gray-400 tracking-widest uppercase">
              About the Challenge
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-10 leading-[1.1]"
          >
            <span className="text-white" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>Where Research Meets</span> <br />
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(235,107,38)] via-orange-400 to-[rgb(235,107,38)]"
              style={{ textShadow: '0 0 30px rgba(235,107,38,0.3)' }}
            >
              the Road Ahead
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-body text-base md:text-lg lg:text-xl text-gray-400 font-light leading-[1.8] md:leading-[2] max-w-2xl"
          >
            Organized by the <strong className="text-white font-medium">CEAM Research Lab</strong> and the <strong className="text-white font-medium">Student Autonomous Vehicle Project</strong> at MAHE, this challenge invites bold engineers and innovators to push the boundaries of autonomous mobility.
            <br /><br />
            Join us on <span className="text-[rgb(235,107,38)] font-medium">April 17, 18, 19 — 2026</span> for a 36-hour sprint to define the future of transportation.
          </motion.p>



        </div>

        {/* Right Column: Stats Grid */}
        <div className="lg:col-span-5 relative">
          <div className="grid grid-cols-2 gap-5">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + (i * 0.1) }}
                whileTap={{ scale: 0.95 }}
                className="relative flex flex-col items-center justify-center p-6 md:p-8 aspect-square border border-white/10 bg-white/5 backdrop-blur-sm group hover:border-[rgb(235,107,38)]/50 active:border-[rgb(235,107,38)]/70 transition-all duration-500"
                style={{ clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)' }}
              >
                {/* Animated Corner Brackets (Mobile) */}
                <motion.div
                  className="md:hidden absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[rgb(235,107,38)]/40"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + (i * 0.1) }}
                />
                <motion.div
                  className="md:hidden absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[rgb(235,107,38)]/40"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + (i * 0.1) }}
                />

                {/* Decoration Corner */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/20 group-hover:border-[rgb(235,107,38)]/50 transition-colors" />

                <motion.div
                  animate={isInView ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 2, delay: 0.8 + (i * 0.1), repeat: Infinity, repeatDelay: 3 }}
                >
                  <stat.icon className="w-7 h-7 md:w-8 md:h-8 text-[rgb(235,107,38)] mb-3 md:mb-4 opacity-80 group-hover:scale-110 transition-transform duration-500" />
                </motion.div>
                <div className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 tracking-tight">
                  {stat.value}
                </div>
                <div className="font-mono text-[10px] md:text-xs text-gray-400 uppercase tracking-widest text-center">
                  <span className="block text-[10px] opacity-50 mb-1">{stat.unit}</span>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Decorative Elements behind stats */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[rgb(235,107,38)]/5 blur-[80px] rounded-full" />
        </div>

      </div>

    </section>
  );
}
