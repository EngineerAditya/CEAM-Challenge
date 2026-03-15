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
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-24 overflow-hidden border-b border-white/5">
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
              <span className="font-mono text-[10px] md:text-xs text-[rgb(235,107,38)] tracking-[0.4em] uppercase font-bold flex items-center gap-3">
                Track_03 in Collaboration with
                <img
                  src="/sponsor-logo/cyber.svg"
                  alt="Cybersecurity Partner"
                  className="h-12 md:h-16 w-auto"
                />
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-white mb-8">
              CYBER<br />
              <span className="text-[rgb(235,107,38)]">SECURITY.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed font-light">
              Defend the connected fleet. Develop novel security mechanisms or detection frameworks addressing vulnerabilities in the <span className="text-white font-medium">Software-Defined Vehicle (SDV)</span> ecosystem.
            </p>
            <div className="mt-8 p-6 bg-[rgb(235,107,38)]/[0.05] border border-[rgb(235,107,38)]/20 rounded-xl inline-block max-w-2xl">
              <span className="font-mono text-[10px] text-[rgb(235,107,38)] uppercase tracking-widest flex items-center gap-2 mb-2">
                <AlertTriangle size={14} /> Round 01 vs Round 02
              </span>
              <p className="text-sm text-gray-300">
                <strong className="text-white">Round 01:</strong> Participants must write a detailed proposal addressing their chosen theme. <br />
                <strong className="text-white mt-1 block">Round 02:</strong> Shortlisted teams will develop and build working prototypes during the offline hackathon.
              </p>
            </div>
          </motion.div>
        </div>
      </header>

      {/* ── THEMES ── */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Themes</h2>
            <div className="w-16 h-1 bg-[rgb(235,107,38)]" />
            <p className="text-gray-400 mt-4">Teams will select one of the following domains to design a problem statement, architecture, and proof-of-concept.</p>
          </div>

          <div className="flex flex-col gap-8">

            {/* Theme 1 */}
            <div className="group relative bg-white/[0.02] border border-white/5 hover:border-[rgb(235,107,38)]/50 transition-colors duration-500 overflow-hidden">
              <div className="p-8 md:p-10 flex flex-col lg:flex-row gap-12">
                <div className="flex-1 space-y-6">
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-[rgb(235,107,38)]/10 text-[rgb(235,107,38)] rounded-lg">
                      <Terminal size={24} />
                    </div>
                    <span className="font-mono text-xs text-[rgb(235,107,38)] tracking-widest">THEME 01</span>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Vehicle Control System Intrusion Detection</h3>
                    <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
                      <p>Software-defined vehicles rely on electronic control units and software-driven actuators to control steering, braking, torque delivery, and energy management. Malicious manipulation of control signals could compromise vehicle safety or propagate across fleets.</p>
                    </div>
                  </div>
                </div>

                <div className="flex-1 lg:border-l border-white/5 lg:pl-12 space-y-8 flex flex-col justify-center">
                  <div>
                    <span className="text-xs font-bold text-white uppercase tracking-wider block mb-2">Focus Areas</span>
                    <ul className="text-sm text-gray-300 leading-relaxed font-medium space-y-2">
                      <li className="flex items-start gap-2"><span className="text-[rgb(235,107,38)] mt-0.5">▹</span> Detection of malicious actuator commands.</li>
                      <li className="flex items-start gap-2"><span className="text-[rgb(235,107,38)] mt-0.5">▹</span> Intrusion detection in CAN/Ethernet vehicle networks.</li>
                      <li className="flex items-start gap-2"><span className="text-[rgb(235,107,38)] mt-0.5">▹</span> Edge-AI anomaly detection models.</li>
                      <li className="flex items-start gap-2"><span className="text-[rgb(235,107,38)] mt-0.5">▹</span> Distinguishing abnormal driving patterns from cyber attacks.</li>
                    </ul>
                  </div>
                  <div className="pt-6 border-t border-white/5">
                    <span className="text-xs font-bold text-white uppercase tracking-wider block mb-3">Example Directions</span>
                    <ul className="text-sm text-gray-400 space-y-2">
                      <li>- AI models detecting unauthorized torque/brake commands</li>
                      <li>- Behavioral anomaly detection on actuator signals</li>
                      <li>- Lightweight IDS deployed on vehicle control units</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Theme 2 */}
            <div className="group relative bg-white/[0.02] border border-white/5 hover:border-[rgb(235,107,38)]/50 transition-colors duration-500 overflow-hidden">
              <div className="p-8 md:p-10 flex flex-col lg:flex-row gap-12">
                <div className="flex-1 space-y-6">
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-[rgb(235,107,38)]/10 text-[rgb(235,107,38)] rounded-lg">
                      <Server size={24} />
                    </div>
                    <span className="font-mono text-xs text-[rgb(235,107,38)] tracking-widest">THEME 02</span>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Secure Vehicle–Infrastructure Interaction</h3>
                    <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
                      <p>Vehicles increasingly interact with external infrastructure such as EV charging stations, roadside units, and cloud services. These interactions introduce potential attack vectors including malware injection, identity spoofing, and billing fraud.</p>
                    </div>
                  </div>
                </div>

                <div className="flex-1 lg:border-l border-white/5 lg:pl-12 space-y-8 flex flex-col justify-center">
                  <div>
                    <span className="text-xs font-bold text-white uppercase tracking-wider block mb-2">Focus Areas</span>
                    <ul className="text-sm text-gray-300 leading-relaxed font-medium space-y-2">
                      <li className="flex items-start gap-2"><span className="text-[rgb(235,107,38)] mt-0.5">▹</span> Secure authentication between EVs and charging stations.</li>
                      <li className="flex items-start gap-2"><span className="text-[rgb(235,107,38)] mt-0.5">▹</span> Detection of malicious charging infrastructure.</li>
                      <li className="flex items-start gap-2"><span className="text-[rgb(235,107,38)] mt-0.5">▹</span> Secure V2X communication mechanisms.</li>
                      <li className="flex items-start gap-2"><span className="text-[rgb(235,107,38)] mt-0.5">▹</span> Identity protection and transaction security.</li>
                    </ul>
                  </div>
                  <div className="pt-6 border-t border-white/5">
                    <span className="text-xs font-bold text-white uppercase tracking-wider block mb-3">Example Directions</span>
                    <ul className="text-sm text-gray-400 space-y-2">
                      <li>- Secure Plug-and-Charge authentication frameworks</li>
                      <li>- Detection of compromised charging stations</li>
                      <li>- Cryptographic identity validation for EV infrastructure</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Theme 3 */}
            <div className="group relative bg-white/[0.02] border border-white/5 hover:border-[rgb(235,107,38)]/50 transition-colors duration-500 overflow-hidden">
              <div className="p-8 md:p-10 flex flex-col lg:flex-row gap-12">
                <div className="flex-1 space-y-6">
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-[rgb(235,107,38)]/10 text-[rgb(235,107,38)] rounded-lg">
                      <FileCode size={24} />
                    </div>
                    <span className="font-mono text-xs text-[rgb(235,107,38)] tracking-widest">THEME 03</span>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Secure Software Lifecycle & OTA Updates</h3>
                    <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
                      <p>Software-defined vehicles depend on frequent over-the-air updates to deliver new features, patches, and improvements. Ensuring the authenticity and integrity of these updates is critical to prevent large-scale compromise.</p>
                    </div>
                  </div>
                </div>

                <div className="flex-1 lg:border-l border-white/5 lg:pl-12 space-y-8 flex flex-col justify-center">
                  <div>
                    <span className="text-xs font-bold text-white uppercase tracking-wider block mb-2">Focus Areas</span>
                    <ul className="text-sm text-gray-300 leading-relaxed font-medium space-y-2">
                      <li className="flex items-start gap-2"><span className="text-[rgb(235,107,38)] mt-0.5">▹</span> Cryptographic verification of OTA updates.</li>
                      <li className="flex items-start gap-2"><span className="text-[rgb(235,107,38)] mt-0.5">▹</span> Blockchain-based update validation.</li>
                      <li className="flex items-start gap-2"><span className="text-[rgb(235,107,38)] mt-0.5">▹</span> Secure firmware distribution frameworks.</li>
                      <li className="flex items-start gap-2"><span className="text-[rgb(235,107,38)] mt-0.5">▹</span> Post-quantum update authentication.</li>
                    </ul>
                  </div>
                  <div className="pt-6 border-t border-white/5">
                    <span className="text-xs font-bold text-white uppercase tracking-wider block mb-3">Example Directions</span>
                    <ul className="text-sm text-gray-400 space-y-2">
                      <li>- Distributed ledger-based OTA verification</li>
                      <li>- Secure firmware trust chains</li>
                      <li>- Detection of tampered update packages</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION / DOWNLOAD ── */}
      <section className="py-32 border-t border-white/5 bg-gradient-to-b from-transparent to-[rgb(235,107,38)]/[0.02]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-8">Ready to <span className="text-[rgb(235,107,38)]">Submit?</span></h2>
          <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
            Design your problem statement, architecture, and proposal. Download the official PPTX template below, fill in your idea for Round 01, and save to upload.
          </p>
          <div className="inline-flex flex-col md:flex-row items-center justify-center gap-6">
            <a href="/ppt-format/cybersecurity.pptx" download className="px-10 py-5 bg-white text-black font-bold text-sm tracking-[0.2em] uppercase hover:bg-gray-200 transition-all duration-300 inline-block text-center"
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
