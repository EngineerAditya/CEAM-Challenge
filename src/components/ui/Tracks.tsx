'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { Cpu, Bot, Shield, ArrowUpRight } from 'lucide-react';

const tracks = [
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    num: '01',
    description:
      'Architect the neural cores of autonomy. Build perception, decision-making, and path-planning systems that process the world in real-time.',
    icon: <Cpu size={24} />,
    color: 'rgb(235, 107, 38)',
    tags: ['Computer Vision', 'Reinforcement Learning', 'SLAM'],
    href: '/tracks/ai',
  },
  {
    id: 'robotics',
    title: 'Robotics & Control',
    num: '02',
    description:
      'Where the code meets the chassis. Bridge hardware-software integration, sensor fusion, and high-fidelity control systems.',
    icon: <Bot size={24} />,
    color: 'rgb(235, 107, 38)',
    tags: ['Sensor Fusion', 'Actuation', 'Hardware-in-loop'],
    href: '/tracks/robotics',
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    num: '03',
    description:
      'Defend the connected fleet. Secure V2X protocols and develop intrusion detection systems for the next generation of autonomous mobility.',
    icon: <Shield size={24} />,
    color: 'rgb(235, 107, 38)',
    tags: ['V2X Security', 'Encryption', 'Fleet Defense'],
    href: '/tracks/cybersecurity',
  },
];

export default function Tracks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section id="tracks" ref={ref} className="relative py-32 md:py-64 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[rgb(235,107,38)]/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1400px]">

        {/* ── Header ── */}
        <div className="mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-px bg-[rgb(235,107,38)]" />
            <span className="font-mono text-xs text-gray-500 tracking-[0.4em] uppercase">
              Mission Selection
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="font-heading text-5xl md:text-8xl font-bold text-white tracking-tighter leading-none"
          >
            Choose Your <span className="text-[rgb(235,107,38)]">Lane.</span>
          </motion.h2>
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {tracks.map((track, i) => (
            <Link key={track.id} href={track.href} className="group block">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="relative h-full p-8 md:p-12 bg-white/[0.02] border border-white/5 group-hover:border-[rgb(235,107,38)]/30 transition-all duration-500 overflow-hidden"
              >
                {/* Hover Fill Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[rgb(235,107,38)]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Track Number Background */}
                <span className="absolute -right-4 -top-4 font-heading text-9xl font-bold text-white/[0.02] group-hover:text-[rgb(235,107,38)]/[0.04] transition-colors duration-500 select-none">
                  {track.num}
                </span>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-12">
                    <div className="p-3 bg-white/5 border border-white/10 text-[rgb(235,107,38)] group-hover:scale-110 transition-transform duration-500">
                      {track.icon}
                    </div>
                    <ArrowUpRight className="text-gray-700 group-hover:text-[rgb(235,107,38)] transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1 duration-300" />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                    {track.title}
                  </h3>

                  <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 flex-grow">
                    {track.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                    {track.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[9px] md:text-[10px] text-gray-600 uppercase tracking-widest px-2 py-1 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}