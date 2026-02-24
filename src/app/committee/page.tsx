'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import Footer from '@/components/ui/Footer';

// ─── Data ──────────────────────────────────────────────────────────────────────

const faculty = [
  { name: 'Dr. S Ramasamy', role: 'HoD ECE', linkedin: 'https://www.linkedin.com/in/s-ramasamy-phd-78120a21/' },
  { name: 'Dr. Sravani Vemulapalli', role: 'Centre Coordinator', linkedin: 'https://www.linkedin.com/in/sravani-vemulapalli-19b73929/' },
  { name: 'Dr.  Ashish Sharma', role: 'Detection (Sensors & Computer Vision)', linkedin: 'https://www.linkedin.com/in/ashish-sharma-smieee-48188314/' },
  { name: 'Dr. R Sowmya', role: 'Detection (Sensors & Computer Vision)', linkedin: 'https://www.linkedin.com/in/sowmya-r-3a030763/' },
  { name: 'Dr. Megha Arakeri', role: 'Algorithms (Autonomous Software Development)', linkedin: 'https://www.linkedin.com/in/dr-megha-arakeri/' },
  { name: 'Dr. Vishnu Yarlagadda', role: 'Algorithms (Autonomous Software Development)', linkedin: 'https://www.linkedin.com/in/dr-vishnu-yarlagadda-b8a199a9/' },
];

const students = [
  { name: 'Jhagruth Palakonda', linkedin: 'https://www.linkedin.com/in/jhagruth/' },
  { name: 'Mohan Sai Koushik Mandava', linkedin: 'https://www.linkedin.com/in/mmskoushik007/' },
  { name: 'Sooryan Olikara', linkedin: 'https://www.linkedin.com/in/sooryan-olikara-231528285/' },
  { name: 'Chaitanya Neeraj Dindore', linkedin: '' },
  { name: 'Akshat G', linkedin: 'https://www.linkedin.com/in/akshat-gururaj/' },
  { name: 'Tushar S Chillal', linkedin: 'https://www.linkedin.com/in/tushar-s-chillal-59146b334/' },
  { name: 'Aditya Sinha', linkedin: 'https://www.linkedin.com/in/adityasinha2006/' },
  { name: 'Arnab Ranjan Sikdar', linkedin: 'https://www.linkedin.com/in/arnab-ranjan-sikdar-0a634933a/' },
  { name: 'Paul Samuel', linkedin: 'https://www.linkedin.com/in/paulsamuel10/' },
  { name: 'Uttam Vishnumahanthi', linkedin: 'https://www.linkedin.com/in/uttam-vishnumahanthi-13b90b335/' },
];

const specialThanks = [
  {
    name: 'Dr. Iven Jose',
    affiliation: 'Director, MIT Bengaluru',
    context: 'Institutional Support & Leadership',
    linkedin: 'https://www.linkedin.com/in/dr-iven-jose-06201917/',
  },
  {
    name: 'Dr. Josephine Ruth D',
    affiliation: 'ArtPark · IISc Bengaluru',
    context: 'Robotics Track — Industry Partner',
    linkedin: 'https://www.linkedin.com/in/josephine-selvarani-ruth/',
  },
];

// ─── Sub-components ────────────────────────────────────────────────────────────

function SectionHeader({ tag, title, isInView }: { tag: string; title: string; isInView: boolean }) {
  return (
    <div className="mb-14">
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-5"
      >
        <div className="w-10 h-px bg-[rgb(235,107,38)]" />
        <span className="font-mono text-[10px] text-gray-500 tracking-[0.4em] uppercase">{tag}</span>
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

function FacultyCard({ member, index, isInView }: {
  member: { name: string; role: string; linkedin: string; highlight?: boolean };
  index: number;
  isInView: boolean;
}) {
  const isHighlight = member.highlight;
  return (
    <motion.a
      href={member.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.05 * index }}
      className={`group flex items-center justify-between gap-4 rounded-xl px-6 py-5 transition-all duration-300 no-underline border ${isHighlight
        ? 'border-[rgb(235,107,38)]/30 hover:border-[rgb(235,107,38)]/60 bg-[rgb(235,107,38)]/5 hover:bg-[rgb(235,107,38)]/10'
        : 'border-white/[0.07] hover:border-[rgb(235,107,38)]/30 bg-white/[0.02] hover:bg-[rgb(235,107,38)]/5'
        }`}
    >
      <div className="flex flex-col gap-0.5 min-w-0">
        <span className={`font-body text-base font-light tracking-tight transition-colors duration-300 truncate ${isHighlight ? 'text-[rgb(235,107,38)]' : 'text-white group-hover:text-[rgb(235,107,38)]'
          }`}>
          {member.name}
        </span>
        <span className="font-mono text-[10px] text-gray-600 uppercase tracking-widest group-hover:text-gray-500 transition-colors duration-300">
          {member.role}
        </span>
      </div>
      <Linkedin
        size={16}
        className={`flex-shrink-0 transition-colors duration-300 ${isHighlight ? 'text-[rgb(235,107,38)] opacity-70 group-hover:opacity-100' : 'text-gray-600 group-hover:text-[rgb(235,107,38)]'
          }`}
      />
    </motion.a>
  );
}

function StudentCard({ member, index, isInView }: {
  member: { name: string; linkedin: string };
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
      className="group flex items-center justify-between gap-4 border border-white/[0.07] hover:border-[rgb(235,107,38)]/30 bg-white/[0.02] hover:bg-[rgb(235,107,38)]/5 rounded-xl px-6 py-5 transition-all duration-300 no-underline"
    >
      <span className="font-body text-white text-base font-light tracking-tight group-hover:text-[rgb(235,107,38)] transition-colors duration-300 truncate">
        {member.name}
      </span>
      <Linkedin size={16} className="text-gray-600 group-hover:text-[rgb(235,107,38)] flex-shrink-0 transition-colors duration-300" />
    </motion.a>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function CommitteePage() {
  const heroRef = useRef(null);
  const facultyRef = useRef(null);
  const studentsRef = useRef(null);
  const thanksRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const facultyInView = useInView(facultyRef, { once: true, margin: '-8%' });
  const studentsInView = useInView(studentsRef, { once: true, margin: '-8%' });
  const thanksInView = useInView(thanksRef, { once: true, margin: '-8%' });

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
        <div className="absolute -bottom-6 right-0 pointer-events-none select-none opacity-[0.025] font-black text-[15vw] text-white leading-none">
          CEAM
        </div>
      </section>

      <div className="border-t border-[rgb(235,107,38)]/10 mx-6 md:mx-12" />

      {/* ── Faculty ── */}
      <section ref={facultyRef} className="py-24 md:py-36 px-6">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader tag="01 — Mentors" title="Faculty" isInView={facultyInView} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl">
            {faculty.map((member, i) => (
              <FacultyCard key={member.name} member={member} index={i} isInView={facultyInView} />
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-white/5 mx-6 md:mx-12" />

      {/* ── Student Members ── */}
      <section ref={studentsRef} className="py-24 md:py-36 px-6">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader tag="02 — Core Team" title="Student Members" isInView={studentsInView} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {students.map((member, i) => (
              <StudentCard key={member.name} member={member} index={i} isInView={studentsInView} />
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-white/5 mx-6 md:mx-12" />

      {/* ── Special Thanks ── */}
      <section ref={thanksRef} className="py-24 md:py-36 px-6">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader tag="03 — Acknowledgements" title="Special Thanks" isInView={thanksInView} />
          <div className="flex flex-col gap-4 max-w-2xl">
            {specialThanks.map((person, i) => (
              <motion.a
                key={person.name}
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={thanksInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className="group relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border border-white/10 hover:border-white/20 bg-white/[0.025] hover:bg-white/[0.05] rounded-2xl px-8 py-7 transition-all duration-300 no-underline overflow-hidden"
              >
                {/* Left accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[rgb(235,107,38)]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex flex-col gap-1.5 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-mono text-[9px] text-[rgb(235,107,38)]/70 uppercase tracking-[0.3em]">
                      {person.affiliation}
                    </span>
                  </div>
                  <span className="font-body text-white text-xl md:text-2xl font-light tracking-tight group-hover:text-white transition-colors duration-300">
                    {person.name}
                  </span>
                  <span className="font-mono text-[10px] text-gray-600 uppercase tracking-widest group-hover:text-gray-400 transition-colors duration-300">
                    {person.context}
                  </span>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <Linkedin size={18} className="text-gray-600 group-hover:text-white flex-shrink-0 transition-colors duration-300" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
