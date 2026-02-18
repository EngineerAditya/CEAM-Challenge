'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, Trophy, Users, Layers } from 'lucide-react';

const stats = [
  { value: '36', unit: 'HOURS', label: 'SPRINT DURATION', icon: Clock },
  { value: '₹3L+', unit: 'INR', label: 'TOTAL PRIZE POOL', icon: Trophy },
  { value: '2-4', unit: 'MEMBERS', label: 'TEAM SIZE', icon: Users },
  { value: '03', unit: 'DOMAINS', label: 'CHALLENGE TRACKS', icon: Layers },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 md:py-56 bg-[#050505] overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-[1400px]">

        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-24 md:mb-32">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-px bg-[rgb(235,107,38)]" />
              <span className="font-mono text-xs text-gray-500 tracking-[0.4em] uppercase">
                Mission Briefing
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] text-white tracking-tighter"
            >
              Engineering <br />
              <span className="text-[rgb(235,107,38)]">Autonomy.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="md:text-right"
          >
            <p className="font-mono text-[10px] text-gray-600 uppercase tracking-widest leading-loose">
              Location: MIT Bengaluru <br />
              Lab: CEAM Research <br />
              Status: System Initializing
            </p>
          </motion.div>
        </div>

        {/* ── Main Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">

          {/* Narrative Content */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-8"
            >
              <p className="font-body text-xl md:text-3xl text-gray-400 leading-tight font-light">
                MAHE Mobility Challenge is a high-stakes arena where the next generation of <span className="text-white border-b border-[rgb(235,107,38)]/30">Autonomous Vehicle</span> technology is forged.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
                <div className="space-y-4">
                  <h4 className="font-mono text-xs text-white uppercase tracking-wider">The Vision</h4>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                    Bridging the gap between theoretical research and real-world deployment. We provide the hardware and the environment; you provide the solution to the challenge.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-mono text-xs text-white uppercase tracking-wider">The Collaboration</h4>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                    A joint initiative by the CEAM Research Lab (MIT Bengaluru's autonomous vehicle research centre) and the Department of ECE.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Technical Stats Block */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/10">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5 + (i * 0.1) }}
                  className="bg-[#050505] p-10 flex flex-col items-start group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-[rgb(235,107,38)]/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  <stat.icon className="w-5 h-5 text-[rgb(235,107,38)] mb-8 opacity-50 group-hover:opacity-100 transition-opacity" />

                  <div className="flex flex-col">
                    <span className="text-5xl md:text-6xl font-bold text-white tracking-tighter">
                      {stat.value}
                    </span>
                    <span className="font-mono text-[9px] text-[rgb(235,107,38)] tracking-widest mt-1">
                      {stat.unit}
                    </span>
                  </div>

                  <span className="font-mono text-[10px] text-gray-600 tracking-[0.2em] uppercase mt-8 group-hover:text-gray-400 transition-colors">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative background text */}
      <div className="absolute -bottom-10 left-10 pointer-events-none select-none opacity-[0.02] font-black text-[15vw] text-white">
        AUTONOMY
      </div>
    </section>
  );
}