'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface SectionDividerProps {
  variant?: 'line' | 'gradient' | 'dots' | 'technical';
  spacing?: 'sm' | 'md' | 'lg' | 'none';
}

export default function SectionDivider({
  variant = 'gradient',
  spacing = 'md'
}: SectionDividerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });

  // Map spacing to vertical margins/padding
  const spacingClasses = {
    none: 'py-0',
    sm: 'py-12 md:py-20',
    md: 'py-24 md:py-32',
    lg: 'py-32 md:py-48',
  };

  return (
    <div
      ref={ref}
      className={`w-full max-w-[1400px] mx-auto px-6 overflow-hidden ${spacingClasses[spacing]}`}
    >
      {variant === 'dots' && (
        <div className="flex justify-center items-center gap-6">
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="flex-1 h-px bg-gradient-to-r from-transparent to-[rgb(235,107,38)]/10"
          />
          <div className="flex gap-3">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="w-1 h-1 rounded-full bg-[rgb(235,107,38)]/30"
              />
            ))}
          </div>
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="flex-1 h-px bg-gradient-to-l from-transparent to-[rgb(235,107,38)]/10"
          />
        </div>
      )}

      {variant === 'line' && (
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="h-px bg-white/5"
        />
      )}

      {variant === 'gradient' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 2 }}
          className="h-px bg-gradient-to-r from-transparent via-[rgb(235,107,38)]/20 to-transparent"
        />
      )}

      {variant === 'technical' && (
        <div className="relative flex items-center justify-between">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            className="h-px w-full bg-white/5 origin-left"
          />
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="absolute right-0 font-mono text-[8px] text-gray-700 tracking-tighter uppercase"
          >
            SCT_ID // 0{Math.floor(Math.random() * 9)}
          </motion.span>
        </div>
      )}
    </div>
  );
}