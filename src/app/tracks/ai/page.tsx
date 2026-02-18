'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Signal, Bell, AlertTriangle, Map, Smartphone, Navigation, Calendar, Clock, MapPin, Lock } from 'lucide-react';
import Link from 'next/link';
import { SHOW_TRACK_DETAILS } from '@/lib/constants';

export default function AITrackPage() {
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
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-24 overflow-hidden">
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
              <span className="font-mono text-[10px] md:text-xs text-[rgb(235,107,38)] tracking-[0.4em] uppercase font-bold flex items-center gap-3">
                Track_01 in Collaboration with
                <img
                  src="/sponsor-logo/Harman.svg"
                  alt="Harman Automotive"
                  className="h-8 md:h-10 w-auto invert brightness-0"
                />
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

      {/* ── TIMELINE SECTION ── */}
      <section className="py-12 border-y border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

            {/* Round 1 */}
            <div className="flex flex-col md:flex-row gap-6 items-start group">
              <div className="p-4 bg-[rgb(235,107,38)]/10 text-[rgb(235,107,38)] rounded-xl shrink-0 group-hover:scale-110 transition-transform">
                <Clock size={32} />
              </div>
              <div>
                <span className="font-mono text-[10px] tracking-[0.2em] text-gray-500 uppercase mb-2 block">Online Phase</span>
                <h3 className="text-xl font-bold text-white mb-2">Round 1: Ideation & Architecture</h3>
                <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                  Submit your conceptual framework, proposed architecture, and execution plan for tackling the Harman Automotive challenge.
                </p>
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-md">
                  <span className="w-2 h-2 rounded-full bg-[rgb(235,107,38)] animate-pulse" />
                  <span className="font-mono text-xs text-white">Deadline: March 31, 2026</span>
                </div>
              </div>
            </div>

            {/* Round 2 */}
            <div className="flex flex-col md:flex-row gap-6 items-start group">
              <div className="p-4 bg-white/5 text-white rounded-xl shrink-0 group-hover:bg-[rgb(235,107,38)]/10 group-hover:text-[rgb(235,107,38)] transition-colors">
                <Calendar size={32} />
              </div>
              <div>
                <span className="font-mono text-[10px] tracking-[0.2em] text-gray-500 uppercase mb-2 block">Offline Phase</span>
                <h3 className="text-xl font-bold text-white mb-2">Round 2: The Hackathon</h3>
                <p className="text-sm text-gray-400 mb-4 leading-relaxed flex flex-col gap-1">
                  <span>Intensive in-person prototyping and development.</span>
                  <span className="flex items-center gap-1 text-gray-300 mt-1"><MapPin size={14} /> Manipal Institute of Technology, BLR</span>
                </p>
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-md">
                  <span className="font-mono text-xs text-white">Dates: 17, 18, 19 [Month] 2026</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── PROBLEM STATEMENTS ── */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Problem Statements</h2>
            <div className="w-16 h-1 bg-[rgb(235,107,38)]" />
          </div>

          <div className="flex flex-col gap-8">

            {/* Problem Statement 1 */}
            <div className="group relative bg-white/[0.02] border border-white/5 hover:border-[rgb(235,107,38)]/50 transition-colors duration-500 overflow-hidden">
              <div className="p-8 md:p-10 flex flex-col lg:flex-row gap-12">

                {/* Left side: Context & Significance */}
                <div className="flex-1 space-y-6">
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-[rgb(235,107,38)]/10 text-[rgb(235,107,38)] rounded-lg">
                      <Signal size={24} />
                    </div>
                    <span className="font-mono text-xs text-[rgb(235,107,38)] tracking-widest">PROBLEM STATEMENT 01</span>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Cellular Network-Aware Routing</h3>
                    <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
                      <p><strong className="text-white font-mono tracking-widest text-xs block mb-1">CONTEXT</strong> Most routing optimizes for time/distance, overlooking cellular reliability that affects navigation, SOS, and connected features. Coverage varies with tower density, terrain, and weather, making some routes more dependable than others.</p>
                      <p><strong className="text-white font-mono tracking-widest text-xs block mb-1">SIGNIFICANCE</strong> Reduces drop-outs and failures for apps that rely on live data (navigation, telematics, ride-hailing). Benefits Emergency Vehicles & fleet use cases and improves user trust in connected mobility.</p>
                    </div>
                  </div>
                </div>

                {/* Right side: Challenge & Outcomes */}
                <div className="flex-1 lg:border-l border-white/5 lg:pl-12 space-y-8 flex flex-col justify-center">
                  <div>
                    <span className="text-xs font-bold text-white uppercase tracking-wider block mb-2">Specific Challenge</span>
                    <p className="text-sm text-gray-300 leading-relaxed font-medium">
                      Build a routing prototype that scores and visualizes connectivity along candidate routes. Let users compare fastest vs most-connected paths with a simple weighting control.
                    </p>
                  </div>
                  <div className="pt-6 border-t border-white/5">
                    <span className="text-xs font-bold text-white uppercase tracking-wider block mb-3">Expected Outcomes</span>
                    <ul className="text-sm text-gray-400 space-y-2">
                      <li className="flex items-start gap-2"><span className="text-[rgb(235,107,38)] mt-0.5">▹</span> Map UI with connectivity heat overlays and a route Connectivity Score.</li>
                      <li className="flex items-start gap-2"><span className="text-[rgb(235,107,38)] mt-0.5">▹</span> Side-by-side comparison of two routes with a connectivity-vs-ETA trade-off slider.</li>
                      <li className="flex items-start gap-2"><span className="text-[rgb(235,107,38)] mt-0.5">▹</span> Brief write-up of assumptions/heuristics and data sources used.</li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>

            {/* Problem Statement 2 */}
            <div className="group relative bg-white/[0.02] border border-white/5 hover:border-[rgb(235,107,38)]/50 transition-colors duration-500 overflow-hidden">
              <div className="p-8 md:p-10 flex flex-col lg:flex-row gap-12">

                {/* Left side: Context & Significance */}
                <div className="flex-1 space-y-6">
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-[rgb(235,107,38)]/10 text-[rgb(235,107,38)] rounded-lg">
                      <Bell size={24} />
                    </div>
                    <span className="font-mono text-xs text-[rgb(235,107,38)] tracking-widest">PROBLEM STATEMENT 02</span>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Geo-Deferred Notifications</h3>
                    <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
                      <p><strong className="text-white font-mono tracking-widest text-xs block mb-1">CONTEXT</strong> Many alerts are non-urgent and can be delivered later without harming user experience. Sending during poor coverage wastes data, fails often, and distracts users from important notifications.</p>
                      <p><strong className="text-white font-mono tracking-widest text-xs block mb-1">SIGNIFICANCE</strong> Cuts failed deliveries/retries and saves data while improving perceived responsiveness. Demonstrates a practical step toward context-aware connected services.</p>
                    </div>
                  </div>
                </div>

                {/* Right side: Challenge & Outcomes */}
                <div className="flex-1 lg:border-l border-white/5 lg:pl-12 space-y-8 flex flex-col justify-center">
                  <div>
                    <span className="text-xs font-bold text-white uppercase tracking-wider block mb-2">Specific Challenge</span>
                    <p className="text-sm text-gray-300 leading-relaxed font-medium">
                      Build a client/server or client-only prototype that queues messages and releases them in high-coverage zones along a trip. Support simple priority rules so urgent items bypass deferral.
                    </p>
                  </div>
                  <div className="pt-6 border-t border-white/5">
                    <span className="text-xs font-bold text-white uppercase tracking-wider block mb-3">Expected Outcomes</span>
                    <ul className="text-sm text-gray-400 space-y-2">
                      <li className="flex items-start gap-2"><span className="text-[rgb(235,107,38)] mt-0.5">▹</span> UI showing pending vs delivered notifications with timestamps.</li>
                      <li className="flex items-start gap-2"><span className="text-[rgb(235,107,38)] mt-0.5">▹</span> Simulated "drive" where non-urgent items release only inside green (good-signal) segments.</li>
                      <li className="flex items-start gap-2"><span className="text-[rgb(235,107,38)] mt-0.5">▹</span> A simple decision-logic diagram or ruleset explaining defer/deliver behavior.</li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>

            {/* Problem Statement 3 */}
            <div className="group relative bg-white/[0.02] border border-white/5 hover:border-[rgb(235,107,38)]/50 transition-colors duration-500 overflow-hidden">
              <div className="p-8 md:p-10 flex flex-col lg:flex-row gap-12">

                {/* Left side: Context & Significance */}
                <div className="flex-1 space-y-6">
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-[rgb(235,107,38)]/10 text-[rgb(235,107,38)] rounded-lg">
                      <AlertTriangle size={24} />
                    </div>
                    <span className="font-mono text-xs text-[rgb(235,107,38)] tracking-widest">PROBLEM STATEMENT 03</span>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Wrong-Way Driver Detection</h3>
                    <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
                      <p><strong className="text-white font-mono tracking-widest text-xs block mb-1">CONTEXT</strong> Wrong-way detection today is limited to entry and exit of freeways using ramp cameras. But wrong way events can occur not just highways but also on urban grids, undivided roads, etc. There are also temporary situations like road works which cause wrong way diversions.</p>
                      <p><strong className="text-white font-mono tracking-widest text-xs block mb-1">SIGNIFICANCE</strong> Enables timely alerts to surrounding road users and connected mobility apps, reducing risk of collisions in dense, chaotic environments. Provides a foundation for fleet safety, rider apps, micromobility, and campus-security systems without needing expensive sensors.</p>
                    </div>
                  </div>
                </div>

                {/* Right side: Challenge & Outcomes */}
                <div className="flex-1 lg:border-l border-white/5 lg:pl-12 space-y-8 flex flex-col justify-center">
                  <div>
                    <span className="text-xs font-bold text-white uppercase tracking-wider block mb-2">Specific Challenge</span>
                    <p className="text-sm text-gray-300 leading-relaxed font-medium">
                      Build a lightweight system that identifies external vehicles moving opposite to the allowed direction using heading vs. road geometry from open-data sources (e.g., OSM). Demonstrate detection using simulated multi-vehicle GPS traces, including injected wrong-way intruders.
                    </p>
                  </div>
                  <div className="pt-6 border-t border-white/5">
                    <span className="text-xs font-bold text-white uppercase tracking-wider block mb-3">Expected Outcomes</span>
                    <ul className="text-sm text-gray-400 space-y-2">
                      <li className="flex items-start gap-2"><span className="text-[rgb(235,107,38)] mt-0.5">▹</span> A visual playback showing normal vehicles vs wrong-way intruders with clear danger indicators.</li>
                      <li className="flex items-start gap-2"><span className="text-[rgb(235,107,38)] mt-0.5">▹</span> A concise logic model (bearing comparison, road direction, noise handling) explaining how non-ego wrong-way motion is flagged.</li>
                      <li className="flex items-start gap-2"><span className="text-[rgb(235,107,38)] mt-0.5">▹</span> Short analysis of potential false positives (e.g., temporary diversions) and simple mitigation heuristics.</li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION ── */}
      <section className="py-32 border-t border-white/5 bg-gradient-to-b from-transparent to-[rgb(235,107,38)]/[0.02]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-8">Ready to <span className="text-[rgb(235,107,38)]">Build?</span></h2>
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