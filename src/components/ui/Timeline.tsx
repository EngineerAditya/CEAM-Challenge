'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform, useInView } from 'framer-motion';

const events = [
  { title: 'Registrations Open', desc: 'Team formation and registration has begun.' },
  { title: 'Registration Deadline', desc: 'Last date to register your team is 15th March 2026.' },
  { title: 'Round 01 Submission', desc: 'Submit your innovative ideas and solutions by 31st March 2026.' },
  { title: 'Round 01 Results Announcement', desc: 'Shortlisted teams results will be announced on 5th April 2026.' },
  { title: 'Round 02 Kickoff', desc: 'Offline Development Round begins on 17th April 2026.' },
];

export default function CurvyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  // High-performance scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 25,
    restDelta: 0.001
  });

  return (
    <section id="timeline" className="timeline-section">
      <div className="container">
        {/* Header Logic stays the same as your original style */}
        <div className="timeline-header-group">
          <span className="label">The Journey</span>
          <h2 className="timeline-main-title">Event <span className="highlight">Timeline</span></h2>
        </div>

        <div className="timeline-wrapper" ref={containerRef}>
          {/* SVG Road - Desktop (Curvy) */}
          <svg className="road-svg desktop-only" viewBox="0 0 400 1000" fill="none" preserveAspectRatio="none">
            <path
              d="M200,0 Q200,100 350,200 T200,400 T50,600 T200,800 T200,1000"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="4"
            />
            <motion.path
              d="M200,0 Q200,100 350,200 T200,400 T50,600 T200,800 T200,1000"
              stroke="rgb(235, 107, 38)"
              strokeWidth="4"
              strokeLinecap="round"
              style={{ pathLength }}
            />
          </svg>

          {/* SVG Road - Mobile (Subtle Wave) */}
          <svg className="road-svg mobile-only" viewBox="0 0 100 1000" fill="none" preserveAspectRatio="none">
            <path d="M10,0 Q30,100 10,200 T10,400 T10,600 T10,800 T10,1000" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
            <motion.path
              d="M10,0 Q30,100 10,200 T10,400 T10,600 T10,800 T10,1000"
              stroke="rgb(235, 107, 38)"
              strokeWidth="4"
              style={{ pathLength }}
            />
          </svg>

          <div className="timeline-items-list">
            {events.map((event, i) => (
              <TimelineItem key={i} event={event} index={i} total={events.length} progress={scrollYProgress} />
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .timeline-section {
          padding: 100px 0;
          background: #000;
          overflow: hidden;
        }
        .container { max-width: 1100px; margin: 0 auto; padding: 0 2rem; }
        
        .timeline-header-group { text-align: center; margin-bottom: 80px; }
        .label { color: var(--fg-muted); letter-spacing: 0.2em; text-transform: uppercase; font-size: 0.75rem; }
        .timeline-main-title { font-size: 3rem; color: #fff; margin-top: 1rem; }
        .highlight { color: rgba(235, 107, 38, 0.8); }

        .timeline-wrapper { position: relative; padding: 40px 0; }

        /* Road SVG Styling */
        .road-svg {
          position: absolute;
          top: 0;
          height: 100%;
          width: 100%;
          pointer-events: none;
        }

        .desktop-only { display: block; left: 50%; transform: translateX(-50%); width: 100%; }
        .mobile-only { display: none; left: 0; width: 60px; }

        .timeline-item {
          position: relative;
          display: flex;
          margin-bottom: 120px;
          z-index: 2;
        }

        .timeline-content { width: 45%; }
        .tl-left { text-align: right; margin-right: auto; }
        .tl-right { text-align: left; margin-left: auto; }

        .timeline-title { color: #fff; font-size: 1.5rem; margin-bottom: 0.5rem; }
        .timeline-desc { color: #888; font-size: 0.95rem; line-height: 1.6; }

        @media (max-width: 768px) {
          .desktop-only { display: none; }
          .mobile-only { display: block; }
          .timeline-item { margin-bottom: 80px; padding-left: 50px; }
          .timeline-content { width: 100%; }
          .tl-left { text-align: left; }
        }
      `}</style>
    </section>
  );
}

function TimelineItem({ event, index, total, progress }: any) {
  const isLeft = index % 2 === 0;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div ref={ref} className={`timeline-item ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
      <motion.div
        className={`timeline-content ${isLeft ? 'tl-left' : 'tl-right'}`}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <span style={{ color: 'rgb(235, 107, 38)', fontWeight: 600 }}>0{index + 1}</span>
        <h3 className="timeline-title">{event.title}</h3>
        <p className="timeline-desc">{event.desc}</p>
      </motion.div>
    </div>
  );
}