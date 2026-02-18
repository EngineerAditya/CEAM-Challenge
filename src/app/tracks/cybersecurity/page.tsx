'use client';

import { motion } from 'framer-motion';
import { Shield, ArrowLeft, Database, Lock, Server, FileCode, Terminal, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import { SHOW_TRACK_DETAILS } from '@/lib/constants';

export default function CybersecurityTrackPage() {
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

      {/* ── Fixed Navigation (Hidden, using flow) ── */}
      {/* We use in-flow navigation for better compatibility with global nav */}

      {/* ── HERO SECTION ── */}
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-white/5">
        {/* Background FX */}
        <div className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(rgba(235,107,38,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(235,107,38,0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
          }}
        />

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
                Track_03 // Vehicle Security
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-white mb-8">
              CYBER<br />
              <span className="text-[rgb(235,107,38)]">SECURITY.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed font-light">
              Defend the connected fleet. From <span className="text-white font-medium">intrusion detection</span> on standard datasets to countering complex threats in a live autonomous ecosystem.
            </p>
          </motion.div>
        </div>
      </header>

      {/* ── ROUND 1: ONLINE (DATASET DRIVEN) ── */}
      <section className="py-24 border-b border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="font-mono text-xs text-[rgb(235,107,38)] uppercase tracking-widest mb-4 block">Round 01 // Online Qualifier</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Dataset-Driven <br />Evaluation</h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                To ensure objective scoring, the screening round focuses on quantitative metrics. Teams will be provided with standardized datasets containing vehicle network logs (CAN, Ethernet, V2X).
              </p>
              <div className="p-6 border-l-2 border-[rgb(235,107,38)] bg-[rgb(235,107,38)]/[0.03]">
                <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-2">Deliverable</h4>
                <p className="text-xs text-gray-500 font-mono uppercase leading-relaxed">
                  Submit model inference results on a hidden test set. Rankings based on Accuracy, F1-Score, and False Positive Rate.
                </p>
              </div>
            </div>

            <div className="lg:col-span-1 hidden lg:block"></div>

            <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#050505] p-8 border border-white/10 group hover:border-[rgb(235,107,38)]/30 transition-colors">
                <Database className="text-[rgb(235,107,38)] mb-6" size={24} />
                <h3 className="text-xl font-bold text-white mb-3">CAN Bus Logs</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Detect injected anomalies (replay, spoofing) in high-frequency Controller Area Network traffic.
                </p>
              </div>
              <div className="bg-[#050505] p-8 border border-white/10 group hover:border-[rgb(235,107,38)]/30 transition-colors">
                <Shield className="text-[rgb(235,107,38)] mb-6" size={24} />
                <h3 className="text-xl font-bold text-white mb-3">Intrusion Detection</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Identify signature-less attacks using unsupervised learning or statistical modeling on provided datasets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ROUND 2: OFFLINE (CONCEPTUAL) ── */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="mb-16 md:mb-24">
            <span className="font-mono text-xs text-white uppercase tracking-widest mb-4 block">Round 02 // On-Site Finals</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">Advanced Threats</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Problem 1 */}
            <div className="group border-t border-white/10 pt-8 hover:border-[rgb(235,107,38)] transition-colors duration-500">
              <span className="font-mono text-2xl text-[rgb(235,107,38)]/50 group-hover:text-[rgb(235,107,38)] transition-colors mb-4 block">01</span>
              <h3 className="text-2xl font-bold text-white mb-4">Cross-Domain Intrusion Detection</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Software-Defined Autonomous Vehicles (SDAVs) expose new attack surfaces. Detect complex threats that span across IVN, OTA updates, and external interfaces.
              </p>
            </div>

            {/* Problem 2 */}
            <div className="group border-t border-white/10 pt-8 hover:border-[rgb(235,107,38)] transition-colors duration-500">
              <span className="font-mono text-2xl text-[rgb(235,107,38)]/50 group-hover:text-[rgb(235,107,38)] transition-colors mb-4 block">02</span>
              <h3 className="text-2xl font-bold text-white mb-4">Trust & Auth Validation</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                In a Connected Vehicle Ecosystem, trust is paramount. Validate the authenticity of V2X messages and ensure secure identity management for fleet operations.
              </p>
            </div>

            {/* Problem 3 */}
            <div className="group border-t border-white/10 pt-8 hover:border-[rgb(235,107,38)] transition-colors duration-500">
              <span className="font-mono text-2xl text-[rgb(235,107,38)]/50 group-hover:text-[rgb(235,107,38)] transition-colors mb-4 block">03</span>
              <h3 className="text-2xl font-bold text-white mb-4">Compromised Agent Detection</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Detect if an autonomous agent (vehicle) has been subverted by an adversary. Analyze decision-making deviations and behavioral anomalies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── EVALUATION CRITERIA ── */}
      <section className="py-24 border-t border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white uppercase tracking-wider flex items-center gap-3">
                <Terminal size={20} className="text-[rgb(235,107,38)]" />
                Evaluation: Round 1
              </h3>
              <ul className="space-y-4 text-gray-500 font-mono text-xs uppercase tracking-wide">
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Metric 01</span>
                  <span className="text-white">Classification Accuracy</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Metric 02</span>
                  <span className="text-white">F1-Score (Anomaly Class)</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Constraint</span>
                  <span className="text-white">Low False Positive Rate</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white uppercase tracking-wider flex items-center gap-3">
                <FileCode size={20} className="text-[rgb(235,107,38)]" />
                Evaluation: Round 2
              </h3>
              <ul className="space-y-4 text-gray-500 font-mono text-xs uppercase tracking-wide">
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Metric 01</span>
                  <span className="text-white">Innovation & Novelty</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Metric 02</span>
                  <span className="text-white">Real-time Performance</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Context</span>
                  <span className="text-white">Defense Depth & Robustness</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION ── */}
      <section className="py-32 border-t border-white/5 bg-gradient-to-b from-transparent to-[rgb(235,107,38)]/[0.02]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-8">Secure the <span className="text-[rgb(235,107,38)]">Network.</span></h2>

          <div className="inline-flex flex-col items-center gap-4">
            <button className="px-10 py-5 bg-white text-black font-bold text-sm tracking-[0.2em] uppercase hover:bg-[rgb(235,107,38)] hover:text-white transition-all duration-300"
              style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}>
              Download Sample Datasets
            </button>
            <span className="font-mono text-[10px] text-gray-600 uppercase tracking-[0.2em] mt-8">Training Data Release: Coming Soon</span>
          </div>
        </div>
      </section>

    </main>
  );
}
