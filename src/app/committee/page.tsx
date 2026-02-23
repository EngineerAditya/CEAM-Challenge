'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import Footer from '@/components/ui/Footer';

// ─── Committee Data ────────────────────────────────────────────────────────────
// Replace linkedin values with actual profile URLs

const faculty = [
  { name: 'Dr Sravani Vemulapalli', role: 'Centre Coordinator', linkedin: 'https://www.linkedin.com/in/sravani-vemulapalli-19b73929/' },
  { name: 'Dr S Ramasamy', role: 'HoD ECE', linkedin: 'https://www.linkedin.com/in/s-ramasamy-phd-78120a21/' },
  { name: 'Dr Ashish Sharma', role: 'Detection(Sensors & Computer Vision)', linkedin: 'https://www.linkedin.com/in/ashish-sharma-smieee-48188314/' },
  { name: 'Dr R Sowmya', role: 'Detection(Sensors & Computer Vision)', linkedin: 'https://www.linkedin.com/in/sowmya-r-3a030763/' },
  { name: 'Dr Megha Arakeri', role: 'Algorithms(Autonomous Software Development)', linkedin: 'https://www.linkedin.com/in/dr-megha-arakeri/' },
  { name: 'Dr Vishnu Yarlagadda', role: 'Algorithms(Autonomous Software Development)', linkedin: 'https://www.linkedin.com/in/dr-vishnu-yarlagadda-b8a199a9/' },
];

const students = [
  { name: 'Jhagruth Palakonda', role: '', linkedin: 'https://www.linkedin.com/in/jhagruth/' },
  { name: 'Mohan Sai Koushik Mandava', role: '', linkedin: 'https://www.linkedin.com/in/mmskoushik007/' },
  { name: 'Akshat G', role: '', linkedin: 'https://www.linkedin.com/in/akshat-gururaj/' },
  { name: 'Tushar S Chillal', role: '', linkedin: 'https://www.linkedin.com/in/tushar-s-chillal-59146b334/' },
  { name: 'Aditya Sinha', role: '', linkedin: 'https://www.linkedin.com/in/adityasinha2006/' },
  { name: 'Arnab Ranjan Sikdar', role: '', linkedin: 'https://www.linkedin.com/in/arnab-ranjan-sikdar-0a634933a/' },
  { name: 'Paul Samuel', role: '', linkedin: 'https://www.linkedin.com/in/paulsamuel10/' },
  { name: 'Uttam Vishnumahanthi', role: '', linkedin: 'https://www.linkedin.com/in/uttam-vishnumahanthi-13b90b335/' },
];

// ─── Sub-components ────────────────────────────────────────────────────────────

function SectionHeader({
  tag,
  title,
  isInView,
}: {
  tag: string;
  title: string;
  isInView: boolean;
}) {
  return (
    <div className="mb-14">
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-5"
      >
        <div className="w-10 h-px bg-[rgb(235,107,38)]" />
        <span className="font-mono text-[10px] text-gray-500 tracking-[0.4em] uppercase">
          {tag}
        </span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-4xl md:text-5xl font-bold text-white tracking-tighter leading-none"
      >
        {title}
      </motion.h2>
    </div>
  );
}

function MemberCard({
  member,
  index,
  isInView,
}: {
  member: { name: string; role: string; linkedin: string };
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.a
      href={member.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.05 * index }}
      className="group flex items-center justify-between gap-4 border border-white/[0.07] hover:border-[rgb(235,107,38)]/40 bg-white/[0.02] hover:bg-[rgb(235,107,38)]/5 rounded-xl px-6 py-5 transition-all duration-300 no-underline"
    >
      <div className="flex flex-col gap-0.5 min-w-0">
        <span className="font-body text-white text-base font-light tracking-tight group-hover:text-[rgb(235,107,38)] transition-colors duration-300 truncate">
          {member.name}
        </span>
        <span className="font-mono text-[10px] text-gray-600 uppercase tracking-widest group-hover:text-gray-500 transition-colors duration-300">
          {member.role}
        </span>
      </div>
      <Linkedin
        size={16}
        className="text-gray-600 group-hover:text-[rgb(235,107,38)] flex-shrink-0 transition-colors duration-300"
      />
    </motion.a>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function CommitteePage() {
  const heroRef = useRef(null);
  const facultyRef = useRef(null);
  const studentsRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const facultyInView = useInView(facultyRef, { once: true, margin: '-8%' });
  const studentsInView = useInView(studentsRef, { once: true, margin: '-8%' });

  return (
    <main className="min-h-screen bg-[#050505]">
      {/* ── Hero ── */}
      <section ref={heroRef} className="relative pt-40 pb-28 md:pt-52 md:pb-36 px-6 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-px bg-[rgb(235,107,38)]" />
            <span className="font-mono text-[10px] text-gray-500 tracking-[0.4em] uppercase">
              MAHE Mobility Challenge 2026
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-6xl md:text-8xl lg:text-[9rem] font-bold leading-[0.9] tracking-tighter text-white mb-8"
          >
            Organizing{' '}
            <span className="text-[rgb(235,107,38)]">Committee</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-gray-500 text-base md:text-lg font-light max-w-xl leading-relaxed"
          >
            The people behind the MAHE Mobility Challenge — faculty mentors and student leaders driving autonomous innovation.
          </motion.p>
        </div>

        {/* Decorative bg text */}
        <div className="absolute -bottom-6 right-0 pointer-events-none select-none opacity-[0.025] font-black text-[15vw] text-white leading-none">
          CEAM
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[rgb(235,107,38)]/10 mx-6 md:mx-12" />

      {/* ── Faculty ── */}
      <section ref={facultyRef} className="py-24 md:py-36 px-6">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader tag="01 — Mentors" title="Faculty" isInView={facultyInView} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 max-w-3xl">
            {faculty.map((member, i) => (
              <MemberCard key={member.name} member={member} index={i} isInView={facultyInView} />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-white/5 mx-6 md:mx-12" />

      {/* ── Student Members ── */}
      <section ref={studentsRef} className="py-24 md:py-36 px-6">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader tag="02 — Core Team" title="Student Members" isInView={studentsInView} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {students.map((member, i) => (
              <MemberCard key={member.name} member={member} index={i} isInView={studentsInView} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
