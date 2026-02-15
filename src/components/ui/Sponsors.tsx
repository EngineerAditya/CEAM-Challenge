'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const sponsors = [
  {
    name: 'ARTPARK',
    logo: '/sponsor-logo/ARTPARK primary logo.png',
  },
  {
    name: 'Harman',
    logo: '/sponsor-logo/Harman Primary Corporate Logo CMYK.png',
  },
];

export default function Sponsors() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      className="section"
      style={{
        position: 'relative',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          marginBottom: '1.5rem',
          justifyContent: 'center',
        }}
      >
        <div style={{ width: '40px', height: '1px', background: 'rgba(235,107,38,0.25)' }} />
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
          Our Partners
        </span>
        <div style={{ width: '40px', height: '1px', background: 'rgba(235,107,38,0.25)' }} />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(1.75rem, 5vw, 3rem)',
          fontWeight: 600,
          lineHeight: 1.2,
          letterSpacing: '-0.02em',
          color: '#fff',
          marginBottom: '3rem',
        }}
      >
        Sponsors &{' '}
        <span style={{ color: 'rgba(235,107,38,0.6)', fontWeight: 300 }}>Partners</span>
      </motion.h2>

      {/* Sponsor logos */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'clamp(2rem, 5vw, 4rem)',
          flexWrap: 'wrap',
          marginBottom: '3rem',
        }}
      >
        {sponsors.map((sponsor, i) => (
          <motion.div
            key={sponsor.name}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.3 + i * 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="glass-card"
            style={{
              padding: '2rem 2.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: '220px',
              cursor: 'default',
            }}
          >
            <Image
              src={sponsor.logo}
              alt={sponsor.name}
              width={160}
              height={60}
              style={{
                objectFit: 'contain',
                filter: 'brightness(0) invert(1)',
                opacity: 0.8,
                transition: 'opacity 0.4s cubic-bezier(0.4,0,0.2,1)',
                maxWidth: '160px',
                height: 'auto',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLImageElement).style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLImageElement).style.opacity = '0.8';
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* More sponsors coming soon note */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.8rem',
          fontWeight: 300,
          color: 'var(--fg-muted)',
          marginBottom: '2rem',
        }}
      >
        More partners to be announced soon.
      </motion.p>

      {/* Interested CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
      >
        <a
          href="mailto:ceam@manipal.edu?subject=Sponsorship%20Inquiry"
          style={{
            textDecoration: 'none',
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            fontWeight: 400,
            color: 'var(--fg-muted)',
            border: '1px solid rgba(255,255,255,0.08)',
            padding: '0.625rem 1.5rem',
            borderRadius: '9999px',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
            display: 'inline-block',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(235,107,38,0.3)';
            e.currentTarget.style.color = '#fff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
            e.currentTarget.style.color = 'var(--fg-muted)';
          }}
        >
          Interested in Sponsoring?
        </a>
      </motion.div>
    </section>
  );
}
