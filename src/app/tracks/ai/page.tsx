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
                  className="h-12 md:h-15 w-auto"
                />
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-white mb-8">
              AI IN <br />
              <span className="text-[rgb(235,107,38)]">MOBILITY.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed font-light">
              Reimagine the connected cockpit. Build advanced AI models for <span className="text-white font-medium">trajectory prediction</span>, <span className="text-white font-medium">drivable space segmentation</span>, and <span className="text-white font-medium">Bird's-Eye-View mapping</span>.
            </p>
          </motion.div>
        </div>
      </header>

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
                    <span className="font-mono text-xs text-[rgb(235,107,38)] tracking-widest">TRACK 1</span>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Intent & Trajectory Prediction</h3>
                    <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
                      <p><strong className="text-white font-mono tracking-widest text-xs block mb-1">FOCUS</strong> Behavioral AI & Temporal Modeling</p>
                      <p><strong className="text-white font-mono tracking-widest text-xs block mb-1">PROBLEM STATEMENT</strong> In an L4 urban environment, reacting to where a pedestrian is isn't enough; the vehicle must predict where they will be. Participants must develop a model that predicts the future coordinates (next 3 seconds) of pedestrians and cyclists based on 2 seconds of past motion.</p>
                      <p><strong className="text-white font-mono tracking-widest text-xs block mb-1">KEY FOCUS AREAS</strong> LSTMs/GRUs, Transformers, Social-Pooling layers, and Goal-conditioned prediction.</p>
                      <p><strong className="text-[rgb(235,107,38)] font-mono text-xs block mb-1">DATASET (will be released soon)</strong> nuScenes.</p>
                    </div>
                  </div>
                </div>

                {/* Right side: Challenge & Outcomes */}
                <div className="flex-1 lg:border-l border-white/5 lg:pl-12 space-y-8 flex flex-col justify-center">
                  <div>
                    <span className="text-xs font-bold text-white uppercase tracking-wider block mb-2">Objectives</span>
                    <ul className="text-sm text-gray-300 leading-relaxed font-medium space-y-2">
                      <li className="flex items-start gap-2"><span className="text-[rgb(235,107,38)] mt-0.5">▹</span> Process temporal sequence data (coordinates/velocity).</li>
                      <li className="flex items-start gap-2"><span className="text-[rgb(235,107,38)] mt-0.5">▹</span> Account for "Social Context" (how pedestrians avoid each other).</li>
                      <li className="flex items-start gap-2"><span className="text-[rgb(235,107,38)] mt-0.5">▹</span> Generate a multi-modal prediction (e.g., the 3 most likely paths).</li>
                    </ul>
                  </div>
                  <div className="pt-6 border-t border-white/5">
                    <span className="text-xs font-bold text-white uppercase tracking-wider block mb-3">Expected Outcomes & Metrics</span>
                    <ul className="text-sm text-gray-400 space-y-2">
                      <li className="flex flex-col gap-1 mb-2"><strong className="text-white">Outcome:</strong> A model that inputs a history of (x, y) coordinates and outputs a sequence of predicted future (x, y) points.</li>
                      <li className="flex flex-col gap-1"><strong className="text-white">ADE:</strong> Mean Euclidean distance between predicted and ground truth points.</li>
                      <li className="flex flex-col gap-1"><strong className="text-white">FDE:</strong> Distance between the final predicted point and the actual final position.</li>
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
                      <Map size={24} />
                    </div>
                    <span className="font-mono text-xs text-[rgb(235,107,38)] tracking-widest">TRACK 2</span>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Real-time Drivable Space Segmentation</h3>
                    <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
                      <p><strong className="text-white font-mono tracking-widest text-xs block mb-1">FOCUS</strong> Semantic Perception & Edge Cases</p>
                      <p><strong className="text-white font-mono tracking-widest text-xs block mb-1">PROBLEM STATEMENT</strong> Level 4 vehicles must identify "Free Space"; areas where the car can physically move; regardless of whether lane markings exist. This track focuses on segmenting the road vs. everything else (curbs, construction barriers, sidewalks) in complex urban settings.</p>
                      <p><strong className="text-white font-mono tracking-widest text-xs block mb-1">KEY FOCUS AREAS</strong> Encoder-Decoder architectures (U-Net, DeepLabV3+), Real-time backbones (MobileNet/EfficientNet), and Loss functions for class imbalance.</p>
                      <p><strong className="text-[rgb(235,107,38)] font-mono text-xs block mb-1">DATASET (will be released soon)</strong> nuScenes.</p>
                    </div>
                  </div>
                </div>

                {/* Right side: Challenge & Outcomes */}
                <div className="flex-1 lg:border-l border-white/5 lg:pl-12 space-y-8 flex flex-col justify-center">
                  <div>
                    <span className="text-xs font-bold text-white uppercase tracking-wider block mb-2">Objectives</span>
                    <ul className="text-sm text-gray-300 leading-relaxed font-medium space-y-2">
                      <li className="flex items-start gap-2"><span className="text-[rgb(235,107,38)] mt-0.5">▹</span> Perform pixel-wise semantic segmentation of the drivable area.</li>
                      <li className="flex items-start gap-2"><span className="text-[rgb(235,107,38)] mt-0.5">▹</span> Ensure high-frequency performance (inference speed is critical).</li>
                      <li className="flex items-start gap-2"><span className="text-[rgb(235,107,38)] mt-0.5">▹</span> Handle "boundary" cases like road-to-grass transitions or water puddles.</li>
                    </ul>
                  </div>
                  <div className="pt-6 border-t border-white/5">
                    <span className="text-xs font-bold text-white uppercase tracking-wider block mb-3">Expected Outcomes & Metrics</span>
                    <ul className="text-sm text-gray-400 space-y-2">
                      <li className="flex flex-col gap-1 mb-2"><strong className="text-white">Outcome:</strong> A real-time inference pipeline that outputs a binary or multi-class mask representing "Drivable" vs. "Non-Drivable."</li>
                      <li className="flex flex-col gap-1"><strong className="text-white">mIoU:</strong> The primary accuracy metric for segmentation.</li>
                      <li className="flex flex-col gap-1"><strong className="text-white">FPS:</strong> To ensure the model is viable for real-time hardware.</li>
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
                      <Navigation size={24} />
                    </div>
                    <span className="font-mono text-xs text-[rgb(235,107,38)] tracking-widest">TRACK 3</span>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Bird’s-Eye-View (BEV) 2D Occupancy</h3>
                    <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
                      <p><strong className="text-white font-mono tracking-widest text-xs block mb-1">FOCUS</strong> Geometric Transformation & Spatial Representation</p>
                      <p><strong className="text-white font-mono tracking-widest text-xs block mb-1">PROBLEM STATEMENT</strong> Standard front-view cameras suffer from perspective distortion. For planning, L4 systems convert camera images into a 2D top-down "Occupancy Grid." Participants must transform front-facing camera features into a Bird's-Eye-View (BEV) map showing occupied (obstacles) and empty space.</p>
                      <p><strong className="text-white font-mono tracking-widest text-xs block mb-1">KEY FOCUS AREAS</strong> Homography, Spatial Transformers, BEV-Former architectures, and Multi-View fusion.</p>
                      <p><strong className="text-[rgb(235,107,38)] font-mono text-xs block mb-1">DATASET (will be released soon)</strong> nuScenes.</p>
                    </div>
                  </div>
                </div>

                {/* Right side: Challenge & Outcomes */}
                <div className="flex-1 lg:border-l border-white/5 lg:pl-12 space-y-8 flex flex-col justify-center">
                  <div>
                    <span className="text-xs font-bold text-white uppercase tracking-wider block mb-2">Objectives</span>
                    <ul className="text-sm text-gray-300 leading-relaxed font-medium space-y-2">
                      <li className="flex items-start gap-2"><span className="text-[rgb(235,107,38)] mt-0.5">▹</span> Implement an "Image-to-BEV" transformation (e.g., Inverse Perspective Mapping or View Transformers).</li>
                      <li className="flex items-start gap-2"><span className="text-[rgb(235,107,38)] mt-0.5">▹</span> Map 3D obstacles (cars, poles) onto a 2D ground plane.</li>
                      <li className="flex items-start gap-2"><span className="text-[rgb(235,107,38)] mt-0.5">▹</span> Maintain spatial consistency (objects shouldn't "stretch" in the BEV view).</li>
                    </ul>
                  </div>
                  <div className="pt-6 border-t border-white/5">
                    <span className="text-xs font-bold text-white uppercase tracking-wider block mb-3">Expected Outcomes & Metrics</span>
                    <ul className="text-sm text-gray-400 space-y-2">
                      <li className="flex flex-col gap-1 mb-2"><strong className="text-white">Outcome:</strong> A 2D grid/heatmap where each pixel represents a fixed area (e.g., 10cm x 10cm) and its probability of being occupied.</li>
                      <li className="flex flex-col gap-1"><strong className="text-white">Occupancy IoU:</strong> How well the top-down occupancy matches the ground truth derived from LiDAR.</li>
                      <li className="flex flex-col gap-1"><strong className="text-white">Distance-weighted Error:</strong> Errors closer to the ego-vehicle are penalized more heavily.</li>
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
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-8">Ready to <span className="text-[rgb(235,107,38)]">Submit?</span></h2>
          <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
            Design your problem statement, architecture, and proposal. Download the official PPTX template below, fill in your idea for Round 01, and save to upload.
          </p>
          <div className="inline-flex flex-col md:flex-row items-center justify-center gap-6">
            <a href="/ppt-format/aicomputervision.pptx" download className="px-10 py-5 bg-white text-black font-bold text-sm tracking-[0.2em] uppercase hover:bg-gray-200 transition-all duration-300 inline-block text-center"
              style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}>
              Download PPTX Template
            </a>
            <div className="px-10 py-5 bg-white/5 text-gray-400 font-bold text-sm tracking-[0.2em] uppercase text-center inline-block cursor-not-allowed border border-white/10"
              style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}>
              Submissions Opening Soon
            </div>
          </div>
          <span className="block mt-6 font-mono text-[10px] text-gray-600 uppercase tracking-[0.2em]">PPTX format only (Max 10MB)</span>
        </div>
      </section>

    </main>
  );
}