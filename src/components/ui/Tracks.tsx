'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Cpu, Bot, Shield, ArrowUpRight } from 'lucide-react';

const tracks = [
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    num: '01',
    description:
      'Build perception, decision-making, and path-planning systems that power autonomous vehicles. From computer vision to reinforcement learning.',
    icon: <Cpu size={22} />,
    color: 'var(--track-ai)',
    tags: ['Computer Vision', 'Deep Learning', 'Path Planning'],
  },
  {
    id: 'robotics',
    title: 'Robotics',
    num: '02',
    description:
      'Design hardware-software integration, sensor fusion, and control systems. Bridge the physical world with intelligent automation.',
    icon: <Bot size={22} />,
    color: 'var(--track-robotics)',
    tags: ['Sensor Fusion', 'Control Systems', 'SLAM'],
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    num: '03',
    description:
      'Secure connected vehicles from attacks. Build resilient V2X communication protocols and intrusion detection for autonomous fleets.',
    icon: <Shield size={22} />,
    color: 'var(--track-cyber)',
    tags: ['V2X Security', 'Intrusion Detection', 'Secure OTA'],
  },
];

export default function Tracks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="tracks"
      ref={ref}
      className="section"
      style={{ position: 'relative' }}
    >
      {/* Header row */}
      <div className="tracks-header">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1rem',
            }}
          >
            <div style={{ width: '40px', height: '2px', background: 'rgb(235,107,38)' }} />
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.7rem',
                fontWeight: 500,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--fg-muted)',
              }}
            >
              Challenge Tracks
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
              fontWeight: 600,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              color: '#fff',
            }}
          >
            Choose Your{' '}
            <span style={{ color: 'rgba(235,107,38,0.7)', fontWeight: 400 }}>Lane</span>
          </motion.h2>
        </div>
      </div>

      {/* Cards grid */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="tracks-grid"
      >
        {tracks.map((track, i) => (
          <motion.div
            key={track.id}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: 0.3 + i * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="glass-card track-card"
            style={{
              padding: '2rem',
              position: 'relative',
              overflow: 'hidden',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = `${track.color}33`;
              el.style.background = `${track.color}05`;
              el.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = 'var(--border)';
              el.style.background = 'rgba(255,255,255,0.02)';
              el.style.transform = 'translateY(0)';
            }}
          >
            {/* Track number + icon */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1.5rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
              >
                <div
                  style={{
                    color: track.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: `${track.color}10`,
                    border: `1px solid ${track.color}20`,
                  }}
                >
                  {track.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.6rem',
                      fontWeight: 600,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: track.color,
                      marginBottom: '0.1rem',
                    }}
                  >
                    Track {track.num}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      color: '#fff',
                    }}
                  >
                    {track.title}
                  </div>
                </div>
              </div>
              <ArrowUpRight
                size={16}
                color="rgba(255,255,255,0.15)"
                style={{ flexShrink: 0 }}
              />
            </div>

            {/* Description */}
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                fontWeight: 300,
                color: 'var(--fg-muted)',
                lineHeight: 1.7,
                marginBottom: '1.5rem',
              }}
            >
              {track.description}
            </p>

            {/* Tags */}
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              {track.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.65rem',
                    fontWeight: 400,
                    padding: '0.25rem 0.7rem',
                    borderRadius: '6px',
                    border: '1px solid rgba(255,255,255,0.06)',
                    color: 'var(--fg-muted)',
                    letterSpacing: '0.03em',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <style jsx global>{`
        .tracks-header {
          margin-bottom: 2.5rem;
        }
        .tracks-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        @media (min-width: 768px) {
          .tracks-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.25rem;
          }
        }
      `}</style>
    </section>
  );
}
