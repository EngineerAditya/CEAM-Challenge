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
                  src="/sponsor-logo/artpark.svg"
                  alt="ARTPARK IISc"
                  className="h-12 md:h-15 w-auto"
                />
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-white mb-8">
              ROBOTICS <br />
              <span className="text-[rgb(235,107,38)]">ROUND 01.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed font-light">
              Participants must write a concrete <span className="text-white font-medium">proposal</span> on how robots can help in warehouses, campuses, farms, or industrial environments.
            </p>
          </motion.div>
        </div>
      </header>

      {/* ── ROUND 1 REQUIREMENTS ── */}
      <section className="bg-white/[0.02] border-b border-white/5 py-16">
        <div className="container mx-auto px-6 max-w-[1000px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Proposal Detail */}
            <div className="p-10 md:p-12 space-y-6 bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-xl">
              <span className="font-mono text-xs text-[rgb(235,107,38)] uppercase tracking-widest flex items-center gap-3">
                <Lightbulb size={20} /> The Idea
              </span>
              <p className="text-gray-300 text-base leading-relaxed">
                Describe the specific problem your robot solves in <strong className="text-white">warehouses, campuses, farms, or industrial environments.</strong> Focus on practical applications and clear use-cases.
              </p>
            </div>

            {/* Hardware */}
            <div className="p-10 md:p-12 space-y-6 bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-xl">
              <span className="font-mono text-xs text-[rgb(235,107,38)] uppercase tracking-widest flex items-center gap-3">
                <Cpu size={20} /> Hardware Required
              </span>
              <p className="text-gray-300 text-base leading-relaxed">
                Clearly mention all the <strong className="text-white">hardware components, sensors, and microcontrollers</strong> you will require to build your robot. Be specific about your technical needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION / UPLOAD ── */}
      <section className="py-32 border-t border-white/5 bg-gradient-to-b from-transparent to-[rgb(235,107,38)]/[0.02]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-8">Ready to <span className="text-[rgb(235,107,38)]">Submit?</span></h2>
          <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
            Once you have completed the official PPTX template with your Round 01 proposal, upload it below.
          </p>
          <div className="inline-flex flex-col md:flex-row items-center justify-center gap-6">
            <a href="/ppt-format/robotics.pptx" download className="px-10 py-5 bg-white text-black font-bold text-sm tracking-[0.2em] uppercase hover:bg-gray-200 transition-all duration-300 inline-block text-center"
              style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}>
              Download PPTX Template
            </a>
            <label className="px-10 py-5 bg-[rgb(235,107,38)] text-white font-bold text-sm tracking-[0.2em] uppercase hover:bg-[rgb(235,107,38)]/90 transition-all duration-300 cursor-pointer text-center inline-block"
              style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}>
              <input type="file" accept=".pptx" className="hidden" />
              Upload Proposal
            </label>
          </div>
          <span className="block mt-6 font-mono text-[10px] text-gray-600 uppercase tracking-[0.2em]">PPTX format only (Max 50MB)</span>
        </div>
      </section>

    </main>
  );
}