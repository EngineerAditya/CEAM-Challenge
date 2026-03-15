'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { Cpu, Bot, Shield, ArrowRight, Lock } from 'lucide-react';

const tracks = [
  {
    id: 'ai',
    title: 'AI in Mobility',
    num: '01',
    subtitle: 'In collaboration with Harman Automotive',
    sponsorLogo: '/sponsor-logo/Harman.svg',
    sponsorAlt: 'Harman Automotive',
    description:
      'Build the future of smart, connected vehicles.',
    details:
      'Solve real-world problems like finding the best routes based on network strength, smartly delaying non-urgent notifications, and detecting wrong-way drivers to improve road safety.',
    icon: <Cpu size={28} />,
    color: 'rgb(235, 107, 38)',
    tags: ['Smart Routing', 'Safety', 'Context Awareness', 'Connectivity'],
    href: '/tracks/ai',
    phases: ['Online Ideation', 'In-Person Hackathon'],
  },
  {
    id: 'robotics',
    title: 'Robotics',
    num: '02',
    subtitle: 'In collaboration with ARTPARK, IISc',
    sponsorLogo: '/sponsor-logo/artpark.svg',
    sponsorAlt: 'ARTPARK IISc',
    description:
      'Build a self-driving robot. Write code that helps a robot "see" its environment and drive itself.',
    details:
      'Round 1: Submit your proposal. Round 2: After an online workshop by ARTPARK, test your code in a virtual simulation. Round 3: Run your code on a physical robot during the offline event!',
    icon: <Bot size={28} />,
    color: 'rgb(235, 107, 38)',
    tags: ['Simulation', 'Computer Vision', 'ROS2', 'Robotics'],
    href: '/tracks/robotics',
    phases: ['Proposal', 'Online Simulation', 'Hardware Tests'],
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    num: '03',
    subtitle: 'Vehicle Security & Fleet Defense',
    sponsorLogo: '/sponsor-logo/cyber-sec.png',
    sponsorAlt: 'Cybersecurity Partner',
    description:
      'Protect self-driving cars from hackers. Find and stop cyber attacks on vehicle networks.',
    details:
      'Analyze vehicle data logs to spot unusual activity. Build systems that can detect and prevent attacks on car networks (like CAN bus) and inter-vehicle communication (V2X).',
    icon: <Shield size={28} />,
    color: 'rgb(235, 107, 38)',
    tags: ['CAN Bus', 'Intrusion Detection', 'V2X Security', 'Fleet Defense'],
    href: '/tracks/cybersecurity',
    phases: ['Dataset Challenge', 'On-Site Finals'],
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

        {/* ── Track Sections ── */}
        <div className="flex flex-col gap-0">
          {tracks.map((track, i) => (
            <Link key={track.id} href={track.href} className="group block">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.8 }}
                className="relative border-t border-white/5 transition-all duration-500 hover:bg-white/[0.02]"
              >
                {/* Hover glow accent */}
                <div className="absolute inset-0 bg-gradient-to-r from-[rgb(235,107,38)]/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10 py-14 md:py-20 px-6 md:px-12">
                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">

                    {/* ── Left: Number + Title + Description ── */}
                    <div className="flex-1 space-y-6">
                      {/* Track number + subtitle row */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                        <span className="font-mono text-sm text-[rgb(235,107,38)] tracking-[0.3em] uppercase font-bold">
                          Track_{track.num}
                        </span>
                        <div className="flex items-center gap-3">
                          {track.sponsorLogo && (
                            <img
                              src={track.sponsorLogo}
                              alt={track.sponsorAlt}
                              className="h-8 md:h-10 w-auto opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                            />
                          )}
                          <span className="font-mono text-[10px] md:text-xs text-gray-600 tracking-[0.2em] uppercase">
                            {track.subtitle}
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <div className="flex items-center gap-6">
                        <div className="p-3 bg-white/5 border border-white/10 text-[rgb(235,107,38)] group-hover:scale-110 group-hover:bg-[rgb(235,107,38)]/10 transition-all duration-500">
                          {track.icon}
                        </div>
                        <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter group-hover:text-[rgb(235,107,38)] transition-colors duration-500">
                          {track.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl">
                        {track.description}
                      </p>

                      {/* Extended details */}
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl">
                        {track.details}
                      </p>
                    </div>

                    {/* ── Right: Tags + Phase + CTA ── */}
                    <div className="lg:w-[380px] flex flex-col justify-between gap-8">
                      {/* Phases */}
                      <div className="space-y-3">
                        <span className="font-mono text-[10px] text-gray-500 tracking-[0.3em] uppercase block">
                          Competition Phases
                        </span>
                        <div className="space-y-2">
                          {track.phases.map((phase, pi) => (
                            <div
                              key={phase}
                              className="flex items-center gap-3 p-3 bg-white/[0.02] border border-white/5 group-hover:border-white/10 transition-colors duration-300"
                            >
                              <span className="font-mono text-xs text-[rgb(235,107,38)] font-bold w-6">
                                {String(pi + 1).padStart(2, '0')}
                              </span>
                              <span className="text-sm text-gray-300 font-medium">{phase}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {track.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-[9px] md:text-[10px] text-gray-600 uppercase tracking-widest px-3 py-1.5 border border-white/5 group-hover:border-white/10 group-hover:text-gray-400 transition-all duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-xs text-[rgb(235,107,38)] font-medium">
                          <span>Details Revealed</span>
                        </span>
                        <span className="flex items-center gap-2 text-sm text-gray-600 group-hover:text-[rgb(235,107,38)] font-medium transition-colors duration-300">
                          Explore Track
                          <ArrowRight
                            size={16}
                            className="group-hover:translate-x-1 transition-transform duration-300"
                          />
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            </Link>
          ))}

          {/* Bottom border for the last item */}
          <div className="border-t border-white/5" />
        </div>
      </div>
    </section>
  );
}