'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

/* ─────────── DATA ─────────── */

const detection = [
  { name: 'Dr Sravani Vemulapalli', role: 'Centre Coordinator', photo: null },
  { name: 'Dr S Ramasamy', role: 'HOD - ECE Dept', photo: '/team/Ramasamy.jpg' },
  { name: 'Dr Ashish Sharma', role: 'Faculty', photo: '/team/Ashish.jpg' },
  { name: 'Dr R Sowmya', role: 'Faculty', photo: '/team/R sowmya.png' },
];

const algorithms = [
  { name: 'Dr Megha Arakeri', role: 'Team Head', photo: '/team/Dr Megha.jpg' },
  { name: 'Dr Vishnu Yarlagadda', role: 'Faculty', photo: '/team/Vishnu.jpg' },
];

/* ─────────── COMPONENTS ─────────── */

function Fade({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Card({
  m,
  i,
}: {
  m: { name: string; role: string; photo: string | null };
  i: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-30px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="tc"
    >
      <div className="tc-photo">
        {m.photo ? (
          <Image
            src={m.photo}
            alt={m.name}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 480px) 44vw, 220px"
          />
        ) : (
          <span className="tc-initials">
            {m.name
              .replace(/Dr\.?/g, '')
              .trim()
              .split(' ')
              .slice(0, 2)
              .map((w) => w[0])
              .join('')}
          </span>
        )}
      </div>
      <div className="tc-info">
        <div className="tc-name">{m.name}</div>
        <div className="tc-role">{m.role}</div>
      </div>
    </motion.div>
  );
}

/* ─────────── PAGE ─────────── */

export default function AboutUsPage() {
  return (
    <main className="au">
      {/* ── Header ── */}
      <header className="au-wrap au-header">
        <Fade>
          <p className="au-eyebrow">CEAM &middot; MIT Bengaluru</p>
          <h1 className="au-title">
            About <span className="accent">Us</span>
          </h1>
          <div className="au-bar" />
        </Fade>
      </header>

      {/* ── Vision & Mission ── */}
      <section className="au-wrap">
        <div className="vm-grid">
          <Fade>
            <div className="vm-block">
              <h2 className="vm-label">Vision</h2>
              <p className="vm-text">
                Excellence in autonomous mobility through research, innovation,
                and teamwork — fostering the next generation of leaders in
                autonomous systems.
              </p>
            </div>
          </Fade>
          <Fade delay={0.06}>
            <div className="vm-block">
              <h2 className="vm-label">Mission</h2>
              <p className="vm-text">
                Driving advancements in autonomous mobility through
                collaboration, groundbreaking technology, and empowering
                students to lead the future of transportation.
              </p>
            </div>
          </Fade>
        </div>
      </section>

      {/* ── The Centre ── */}
      <section className="au-wrap au-centre">
        <Fade>
          <h2 className="sec-heading">The Centre</h2>
          <p className="body-text">
            The Centre of Excellence in Autonomous Vehicle Technology at MIT
            Bengaluru is a platform for research in sensor technologies,
            algorithm development, and cybersecurity in connected vehicles —
            shaping the next generation of self-driving systems.
          </p>
        </Fade>
      </section>

      {/* ── Faculty Mentors ── */}
      <section className="au-wrap au-faculty">
        <Fade>
          <h2 className="sec-heading">
            Faculty <span className="accent-dim">Mentors</span>
          </h2>
        </Fade>

        {/* Sub: Detection */}
        <div className="sub">
          <Fade>
            <h3 className="sub-label">Sensors &amp; Computer Vision</h3>
          </Fade>
          <div className="card-row">
            {detection.map((m, i) => (
              <Card key={m.name} m={m} i={i} />
            ))}
          </div>
        </div>

        {/* Sub: Algorithms */}
        <div className="sub">
          <Fade>
            <h3 className="sub-label">Autonomous Software Development</h3>
          </Fade>
          <div className="card-row">
            {algorithms.map((m, i) => (
              <Card key={m.name} m={m} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Student Team ── */}
      <section className="au-wrap au-students">
        <Fade>
          <h2 className="sec-heading">
            Student <span className="accent-dim">Team</span>
          </h2>
        </Fade>
        <Fade delay={0.08}>
          <div className="stu-photo">
            <Image
              src="/team/student-team.jpeg"
              alt="CEAM Student Team"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 1100px"
              priority
            />
          </div>
        </Fade>
      </section>

      {/* ─── Styles ─── */}
      <style jsx global>{`
        /* ── Base ── */
        .au {
          background: var(--bg);
          min-height: 100vh;
          padding: 5.5rem 0 4rem;
        }
        .au-wrap {
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 1.25rem;
        }
        .accent { color: rgb(235, 107, 38); }
        .accent-dim { color: rgba(235,107,38,0.5); font-weight: 300; }

        /* ── Header ── */
        .au-header { margin-bottom: 4rem; }
        .au-eyebrow {
          font-family: var(--font-body);
          font-size: 0.6rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--fg-muted);
          margin: 0 0 0.6rem;
        }
        .au-title {
          font-family: var(--font-heading);
          font-size: clamp(2.25rem, 8vw, 3.5rem);
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.03em;
          line-height: 1.05;
          margin: 0 0 1rem;
        }
        .au-bar {
          width: 48px;
          height: 2px;
          background: rgb(235,107,38);
          border-radius: 2px;
        }

        /* ── Vision / Mission ── */
        .vm-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          margin-bottom: 4rem;
        }
        .vm-label {
          font-family: var(--font-heading);
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgb(235,107,38);
          margin: 0 0 0.5rem;
        }
        .vm-text {
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 300;
          color: var(--fg-muted);
          line-height: 1.75;
          margin: 0;
        }

        /* ── Section headings ── */
        .sec-heading {
          font-family: var(--font-heading);
          font-size: clamp(1.4rem, 4vw, 2rem);
          font-weight: 600;
          color: #fff;
          letter-spacing: -0.02em;
          margin: 0 0 1rem;
        }
        .body-text {
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 300;
          color: var(--fg-muted);
          line-height: 1.8;
          margin: 0;
          max-width: 720px;
        }

        /* ── Centre / Faculty / Students spacing ── */
        .au-centre { margin-bottom: 5rem; }
        .au-faculty { margin-bottom: 5rem; }
        .au-students { margin-bottom: 0; }

        /* ── Sub-sections ── */
        .sub { margin-top: 2.5rem; }
        .sub-label {
          font-family: var(--font-body);
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--fg-muted);
          margin: 0 0 1.25rem;
          padding-bottom: 0.6rem;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        /* ── Card row — uniform sizing ── */
        .card-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
        }

        /* ── Card ── */
        .tc {
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.05);
          background: rgba(255,255,255,0.02);
          transition: border-color 0.3s;
        }
        .tc:hover { border-color: rgba(235,107,38,0.15); }
        .tc-photo {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          background: rgba(235,107,38,0.03);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .tc-initials {
          font-family: var(--font-heading);
          font-size: 2rem;
          font-weight: 700;
          color: rgba(235,107,38,0.15);
          user-select: none;
        }
        .tc-info { padding: 0.75rem 0.85rem; }
        .tc-name {
          font-family: var(--font-heading);
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--fg);
          line-height: 1.3;
        }
        .tc-role {
          font-family: var(--font-body);
          font-size: 0.6rem;
          font-weight: 500;
          color: rgba(235,107,38,0.6);
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-top: 0.15rem;
        }

        /* ── Student photo ── */
        .stu-photo {
          position: relative;
          aspect-ratio: 16 / 9;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.05);
          margin-top: 1.5rem;
        }

        /* ── Tablet (≥600px) ── */
        @media (min-width: 600px) {
          .au-wrap { padding: 0 2rem; }
          .vm-grid { grid-template-columns: 1fr 1fr; gap: 3rem; }
          .card-row {
            grid-template-columns: repeat(4, 1fr);
            gap: 1rem;
          }
        }

        /* ── Desktop (≥1024px) ── */
        @media (min-width: 1024px) {
          .au-wrap { padding: 0 3rem; }
          .card-row { gap: 1.25rem; }
          .tc-photo { aspect-ratio: 3 / 3.5; }
          .tc-info { padding: 0.85rem 1rem; }
          .tc-name { font-size: 0.85rem; }
        }
      `}</style>
    </main>
  );
}
