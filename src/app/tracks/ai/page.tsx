'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Signal, Bell, AlertTriangle, Map, Smartphone, Navigation } from 'lucide-react';
import Link from 'next/link';

export default function AITrackPage() {
  return (
    <main className="bg-[#050505] min-h-screen text-white font-sans selection:bg-[rgb(235,107,38)]/30">

      {/* ── HERO SECTION ── */}
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at center, rgba(235,107,38,0.08) 0%, transparent 70%)',
          }}
        />

        {/* Animated Grid Background */}
        <div className="absolute inset-0 z-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
          <Link href="/#tracks" className="group flex items-center gap-3 text-gray-500 hover:text-white transition-colors w-fit mb-8 md:mb-12">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Back to Tracks</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-[rgb(235,107,38)]" />
              <span className="font-mono text-[10px] md:text-xs text-[rgb(235,107,38)] tracking-[0.4em] uppercase font-bold">
                Track_01 // Harman Automotive
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-white mb-8">
              AI IN <br />
              <span className="text-[rgb(235,107,38)]">MOBILITY.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed font-light">
              Reimagine the connected cockpit. From <span className="text-white font-medium">network-aware routing</span> to <span className="text-white font-medium">predictive safety</span>, build the next generation of automotive experiences.
            </p>
          </motion.div>
        </div>
      </header>

      {/* ── PROBLEM STATEMENTS ── */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">

            {/* Proposal 1 */}
            <div className="group relative bg-white/[0.02] border border-white/5 hover:border-[rgb(235,107,38)]/50 transition-colors duration-500 overflow-hidden">
              <div className="p-8 md:p-10 space-y-6">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-[rgb(235,107,38)]/10 text-[rgb(235,107,38)] rounded-lg">
                    <Signal size={24} />
                  </div>
                  <span className="font-mono text-xs text-gray-500">PROPOSAL 01</span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Cellular Network-Aware Routing</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Most routing optimizes for time but overlooks cellular reliability. Build a system that scores and visualizes connectivity along candidate routes.
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 space-y-4">
                  <div>
                    <span className="text-xs font-bold text-white uppercase tracking-wider block mb-2">Deliverables</span>
                    <ul className="text-xs text-gray-500 space-y-1 font-mono">
                      <li>• Connectivity heat overlays</li>
                      <li>• Connectivity-vs-ETA slider</li>
                      <li>• Route Connectivity Score algorithm</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Proposal 2 */}
            <div className="group relative bg-white/[0.02] border border-white/5 hover:border-[rgb(235,107,38)]/50 transition-colors duration-500 overflow-hidden">
              <div className="p-8 md:p-10 space-y-6">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-[rgb(235,107,38)]/10 text-[rgb(235,107,38)] rounded-lg">
                    <Bell size={24} />
                  </div>
                  <span className="font-mono text-xs text-gray-500">PROPOSAL 02</span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Geo-Deferred Notifications</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Non-urgent alerts during poor coverage waste data and distract users. Create a system that queues messages and releases them in high-coverage zones.
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 space-y-4">
                  <div>
                    <span className="text-xs font-bold text-white uppercase tracking-wider block mb-2">Deliverables</span>
                    <ul className="text-xs text-gray-500 space-y-1 font-mono">
                      <li>• Pending vs Delivered UI</li>
                      <li>• Signal-based release logic</li>
                      <li>• Priority override ruleset</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Proposal 3 */}
            <div className="group relative bg-white/[0.02] border border-white/5 hover:border-[rgb(235,107,38)]/50 transition-colors duration-500 overflow-hidden">
              <div className="p-8 md:p-10 space-y-6">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-[rgb(235,107,38)]/10 text-[rgb(235,107,38)] rounded-lg">
                    <AlertTriangle size={24} />
                  </div>
                  <span className="font-mono text-xs text-gray-500">PROPOSAL 03</span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Wrong-Way Driver Detection</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Identify external vehicles moving opposite to traffic flow using heading vs. road geometry (OSM), without expensive sensors.
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 space-y-4">
                  <div>
                    <span className="text-xs font-bold text-white uppercase tracking-wider block mb-2">Deliverables</span>
                    <ul className="text-xs text-gray-500 space-y-1 font-mono">
                      <li>• Visual playback (Normal vs Intruder)</li>
                      <li>• Bearing comparison logic model</li>
                      <li>• False positive mitigation analysis</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SUMMARY / IMPACT ── */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="bg-[#050505] border border-white/10 p-8 md:p-12 relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Consumer Experiences.<br /><span className="text-[rgb(235,107,38)]">Automotive Grade.</span></h2>
                <p className="text-gray-400 mb-8 max-w-md">
                  These challenges tackle real-world friction points in connected mobility: reliability, distraction, and safety.
                </p>
                <button className="px-8 py-4 bg-white text-black font-bold text-sm tracking-[0.2em] uppercase hover:bg-[rgb(235,107,38)] hover:text-white transition-all duration-300">
                  Start Building
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-white/[0.03] border border-white/5">
                  <Navigation className="text-[rgb(235,107,38)] mb-4" size={24} />
                  <h4 className="text-white font-bold text-sm mb-1">Reliance</h4>
                  <p className="text-xs text-gray-500">Trust in connected features.</p>
                </div>
                <div className="p-6 bg-white/[0.03] border border-white/5">
                  <Smartphone className="text-[rgb(235,107,38)] mb-4" size={24} />
                  <h4 className="text-white font-bold text-sm mb-1">Experience</h4>
                  <p className="text-xs text-gray-500">Context-aware interactions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
