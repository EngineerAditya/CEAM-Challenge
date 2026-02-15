'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface SectionDividerProps {
  variant?: 'line' | 'gradient' | 'dots';
}

export default function SectionDivider({ variant = 'gradient' }: SectionDividerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-30px' });

  if (variant === 'dots') {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0.75rem',
          padding: '2.5rem 0',
          maxWidth: '1400px',
          margin: '0 auto',
        }}
      >
        <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(235,107,38,0.1))' }} />
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            style={{
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              background: 'rgba(235,107,38,0.3)',
            }}
          />
        ))}
        <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(235,107,38,0.1), transparent)' }} />
      </motion.div>
    );
  }

  if (variant === 'line') {
    return (
      <motion.div
        ref={ref}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 1.25rem',
        }}
      >
        <div
          style={{
            height: '1px',
            background: 'rgba(235,107,38,0.1)',
          }}
        />
      </motion.div>
    );
  }

  // gradient (default) — wider and more visible
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
      style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 1.25rem',
      }}
    >
      <div
        style={{
          height: '1px',
          background:
            'linear-gradient(90deg, transparent 5%, rgba(235,107,38,0.15) 50%, transparent 95%)',
        }}
      />
    </motion.div>
  );
}
