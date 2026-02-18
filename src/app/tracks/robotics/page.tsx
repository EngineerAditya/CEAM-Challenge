'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Users, Activity, Lightbulb, Cpu, Lock } from 'lucide-react';
import Link from 'next/link';
import { SHOW_TRACK_DETAILS } from '@/lib/constants';

export default function RoboticsTrack() {
  if (!SHOW_TRACK_DETAILS) {
    return (
      <main className="bg-[#050505] min-h-screen text-white font-sans flex flex-col items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-lg"
        >
          <div className="mx-auto w-16 h-16 bg-[rgb(235,107,38)]/10 rounded-full flex items-center justify-center mb-6">
            <Lock className="text-[rgb(235,107,38)]" size={32} />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter">Content Locked</h1>
          <p className="text-gray-400 mb-8 leading-relaxed">
            The details for this track are currently under wraps. Please check back later when the mission parameters are revealed.
          </p>
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-mono tracking-widest uppercase text-[rgb(235,107,38)] hover:text-white transition-colors">
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="bg-[#050505] min-h-screen text-white font-sans selection:bg-[rgb(235,107,38)]/30">

      {/* ── HERO SECTION ── */}
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(235,107,38,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }} />

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
              <span className="font-mono text-[10px] md:text-xs text-[rgb(235,107,38)] tracking-[0.4em] uppercase font-bold flex items-center gap-3">
                Track_02 in Collaboration with
                <img
                  src="/sponsor-logo/ARTPARK%20primary%20logo.png"
                  alt="ARTPARK IISc"
                  className="h-8 md:h-10 w-auto"
                />
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-white mb-8">
              AUTONOMOUS <br />
              <span className="text-[rgb(235,107,38)]">NAVIGATION.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed font-light">
              Develop a complete <span className="text-white font-medium">perception-to-control pipeline</span>. Your robot must interpret visual cues and markers to navigate complex environments without human intervention.
            </p>
          </motion.div>
        </div>
      </header>

      {/* ── CORE DETAILS GRID ── */}
      <section className="bg-white/[0.02] border-b border-white/5">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/5">
            {/* Team Info */}
            <div className="p-8 md:p-10 space-y-4">
              <span className="font-mono text-[10px] text-[rgb(235,107,38)] uppercase tracking-widest flex items-center gap-2">
                <Users size={14} /> Team Structure
              </span>
              <p className="text-gray-300 text-sm leading-relaxed">
                Max <strong className="text-white">4 members</strong> per team. No specific constraints currently; check official docs for updates.
              </p>
            </div>

            {/* Deliverables */}
            <div className="p-8 md:p-10 space-y-4">
              <span className="font-mono text-[10px] text-[rgb(235,107,38)] uppercase tracking-widest flex items-center gap-2">
                <Activity size={14} /> Submission
              </span>
              <p className="text-gray-300 text-sm leading-relaxed">
                For evaluation, teams must submit a <strong className="text-white">video simulation</strong> of their solution in action.
              </p>
            </div>

            {/* IP & Eval */}
            <div className="p-8 md:p-10 space-y-4">
              <span className="font-mono text-[10px] text-[rgb(235,107,38)] uppercase tracking-widest flex items-center gap-2">
                <Lightbulb size={14} /> Evaluation
              </span>
              <p className="text-gray-300 text-sm leading-relaxed">
                Judged on <strong className="text-white">societal impact</strong> and <strong className="text-white">market value</strong> potential. Code is joint IP of ARTPARK & MAHE.
              </p>
            </div>

            {/* Hardware */}
            <div className="p-8 md:p-10 space-y-4 bg-[rgb(235,107,38)]/[0.03]">
              <span className="font-mono text-[10px] text-[rgb(235,107,38)] uppercase tracking-widest flex items-center gap-2">
                <Cpu size={14} /> Hardware
              </span>
              <p className="text-gray-300 text-sm leading-relaxed">
                Standard kits provided. <strong className="text-white">No external sensors allowed.</strong> Must use documentation-specified sensors only.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PHASES BREAKDOWN ── */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

            {/* Phase 1 */}
            <div className="group relative">
              <div className="absolute -inset-4 bg-gradient-to-b from-white/[0.02] to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative space-y-8">
                <div className="flex items-start justify-between border-b border-white/10 pb-6">
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Phase 01: <br />Simulation</h3>
                  <span className="font-mono text-[10px] text-[rgb(235,107,38)] px-3 py-1 bg-[rgb(235,107,38)]/10 border border-[rgb(235,107,38)]/20 rounded uppercase tracking-wider">Gazebo</span>
                </div>

                <p className="text-gray-400 leading-relaxed">
                  Develop algorithms in a Gazebo environment containing visual symbols, markers, and directional indicators.
                </p>

                <ul className="space-y-4 font-mono text-xs md:text-sm text-gray-500 uppercase tracking-wide">
                  <li className="flex gap-4">
                    <span className="text-[rgb(235,107,38)]">01. Detection</span>
                    <span>Interpret symbols using computer vision.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-[rgb(235,107,38)]">02. Decision</span>
                    <span>Translate symbols into actions (Left, Stop, Slow).</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-[rgb(235,107,38)]">03. Control</span>
                    <span>Use ROS2 to navigate the virtual path.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="group relative">
              <div className="absolute -inset-4 bg-gradient-to-b from-[rgb(235,107,38)]/[0.02] to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative space-y-8">
                <div className="flex items-start justify-between border-b border-white/10 pb-6">
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Phase 02: <br />Hardware</h3>
                  <span className="font-mono text-[10px] text-white px-3 py-1 bg-white/10 border border-white/20 rounded uppercase tracking-wider">Finals</span>
                </div>

                <p className="text-gray-400 leading-relaxed">
                  Shortlisted teams will port their simulation code to a physical differential-drive ground robot provided by ARTPARK.
                </p>

                <ul className="space-y-4 font-mono text-xs md:text-sm text-gray-500 uppercase tracking-wide">
                  <li className="flex gap-4">
                    <span className="text-white">01. Optimization</span>
                    <span>Adjust CV for real-world lighting & sensor noise.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-white">02. Integration</span>
                    <span>Deploy ROS2 stack onto physical hardware.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-white">03. Execution</span>
                    <span>Smooth navigation through physical course with real markers.</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION ── */}
      <section className="py-32 border-t border-white/5 bg-gradient-to-b from-transparent to-[rgb(235,107,38)]/[0.02]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-8">Ready to <span className="text-[rgb(235,107,38)]">Deploy?</span></h2>
          <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
            Review the problem statement carefully and prepare your proposal. Submissions opening soon.
          </p>
          <div className="inline-flex flex-col items-center gap-4">
            <button className="px-10 py-5 bg-white text-black font-bold text-sm tracking-[0.2em] uppercase hover:bg-[rgb(235,107,38)] hover:text-white transition-all duration-300"
              style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}>
              Download Rulebook (Coming Soon)
            </button>
            <span className="font-mono text-[10px] text-gray-600 uppercase tracking-[0.2em]">Check website for updates</span>
          </div>
        </div>
      </section>

    </main>
  );
}