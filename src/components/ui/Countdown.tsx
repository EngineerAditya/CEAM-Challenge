'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const TARGET_DATE = new Date('2026-04-17T00:00:00+05:30').getTime();

interface TimeUnit {
  value: number;
  label: string;
}

function FlipDigit({ value, label }: { value: string; label: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
      <div
        style={{
          position: 'relative',
          width: 'clamp(56px, 14vw, 96px)',
          height: 'clamp(64px, 16vw, 110px)',
          borderRadius: '12px',
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Center divider line */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            right: 0,
            height: '1px',
            background: 'rgba(255,255,255,0.04)',
            zIndex: 2,
          }}
        />
        {/* Subtle top shadow */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '50%',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.02), transparent)',
            pointerEvents: 'none',
          }}
        />
        <motion.span
          key={value}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.75rem, 5vw, 3rem)',
            fontWeight: 700,
            color: '#fff',
            letterSpacing: '-0.02em',
          }}
        >
          {value}
        </motion.span>
      </div>
      <span
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.6rem',
          fontWeight: 500,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--fg-muted)',
        }}
      >
        {label}
      </span>
    </div>
  );
}

function Separator() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '1.5rem',
      }}
    >
      <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
      <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
    </div>
  );
}

export default function Countdown() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [timeLeft, setTimeLeft] = useState<TimeUnit[]>([
    { value: 0, label: 'Days' },
    { value: 0, label: 'Hours' },
    { value: 0, label: 'Minutes' },
    { value: 0, label: 'Seconds' },
  ]);

  useEffect(() => {
    function calc() {
      const now = Date.now();
      const diff = Math.max(0, TARGET_DATE - now);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft([
        { value: days, label: 'Days' },
        { value: hours, label: 'Hours' },
        { value: minutes, label: 'Minutes' },
        { value: seconds, label: 'Seconds' },
      ]);
    }

    calc();
    const interval = setInterval(calc, 1000);
    return () => clearInterval(interval);
  }, []);

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
      {/* Ambient glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(235,107,38,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.75rem',
          marginBottom: '1.5rem',
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
          Mark Your Calendar
        </span>
        <div style={{ width: '40px', height: '1px', background: 'rgba(235,107,38,0.25)' }} />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
          fontWeight: 600,
          lineHeight: 1.2,
          letterSpacing: '-0.02em',
          color: '#fff',
          marginBottom: '0.5rem',
        }}
      >
        April 17, 2026
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.85rem',
          fontWeight: 300,
          color: 'var(--fg-muted)',
          marginBottom: '3rem',
        }}
      >
        The countdown to launch has begun.
      </motion.p>

      {/* Timer */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          gap: 'clamp(0.5rem, 2vw, 1.25rem)',
        }}
      >
        {timeLeft.map((unit, i) => (
          <div key={unit.label} style={{ display: 'flex', alignItems: 'flex-start', gap: 'clamp(0.5rem, 2vw, 1.25rem)' }}>
            <FlipDigit
              value={String(unit.value).padStart(2, '0')}
              label={unit.label}
            />
            {i < timeLeft.length - 1 && <Separator />}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
