'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const partners = [
  {
    name: 'ARTPARK',
    logo: '/sponsor-logo/ARTPARK primary logo.png',
    role: 'Hardware & Knowledge Partner',
  },
  {
    name: 'Harman',
    logo: '/sponsor-logo/Harman Primary Corporate Logo CMYK.png',
    role: 'Industry Partner',
  },
];

export default function Sponsors() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section
      ref={ref}
      className="relative py-32 md:py-64 bg-[#050505] overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-[1400px]">

        {/* ── Header Area ── */}
        <div className="flex flex-col items-center text-center mb-24 md:mb-40">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-px bg-[rgb(235,107,38)]" />
            <span className="font-mono text-xs text-[rgb(235,107,38)] tracking-[0.4em] uppercase">
              Strategic Alliance
            </span>
            <div className="w-12 h-px bg-[rgb(235,107,38)]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl lg:text-9xl font-bold text-white tracking-tighter leading-none"
          >
            Sponsors & <br />
            <span className="text-white/20">Partners.</span>
          </motion.h2>
        </div>

        {/* ── Partners Grid (Blueprint Style) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 mb-20">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: i * 0.2 }}
              className="group relative bg-[#050505] p-16 md:p-24 flex flex-col items-center justify-center overflow-hidden"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-[rgb(235,107,38)]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10 flex flex-col items-center gap-12">
                <div className="relative h-20 w-48 md:h-24 md:w-64">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain brightness-0 invert opacity-60 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100"
                  />
                </div>

                <div className="flex flex-col items-center gap-2">
                  <span className="font-mono text-[10px] text-gray-600 tracking-[0.3em] uppercase group-hover:text-[rgb(235,107,38)] transition-colors">
                    {partner.role}
                  </span>
                  <div className="w-0 h-px bg-[rgb(235,107,38)] group-hover:w-full transition-all duration-500" />
                </div>
              </div>

              {/* Technical corner accents */}
              <div className="absolute top-4 right-4 w-1 h-1 bg-white/10 group-hover:bg-[rgb(235,107,38)]" />
            </motion.div>
          ))}
        </div>

        {/* ── CTA / Information Footer ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 pt-12"
        >
          <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">
            More partners to be decrypted soon // 2026_ALLIANCE
          </span>

          <a
            href="mailto:ceam@manipal.edu?subject=Sponsorship%20Inquiry"
            className="group relative px-8 py-4 border border-white/10 font-mono text-[10px] text-white uppercase tracking-[0.2em] overflow-hidden hover:border-[rgb(235,107,38)]/50 transition-colors"
          >
            <div className="absolute inset-0 bg-[rgb(235,107,38)] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10 group-hover:text-black transition-colors">
              Interested in Sponsoring?
            </span>
          </a>
        </motion.div>

      </div>

      {/* Decorative background text */}
      <div className="absolute bottom-10 -right-20 pointer-events-none select-none opacity-[0.02] font-black text-[15vw] text-white rotate-90 uppercase">
        Alliance
      </div>
    </section>
  );
}