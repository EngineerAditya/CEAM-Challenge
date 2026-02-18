'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <footer
      ref={ref}
      className="site-footer"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Top section — 3-column on desktop */}
        <div className="footer-top">
          {/* Brand */}
          <div style={{ maxWidth: '400px' }}>
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.25rem',
                fontWeight: 700,
                color: '#fff',
                letterSpacing: '0.05em',
                marginBottom: '0.75rem',
              }}
            >
              MAHE Mobility Challenge
            </div>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.8rem',
                fontWeight: 300,
                color: 'var(--fg-muted)',
                lineHeight: 1.7,
              }}
            >
              A national hackathon by CEAM Research Lab & the Student Autonomous
              Vehicle Project at Manipal Academy of Higher Education.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.65rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--fg-muted)',
                marginBottom: '0.75rem',
              }}
            >
              Quick Links
            </div>
            {['About', 'Tracks', 'Timeline', 'Registrations Starting Soon'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                style={{
                  display: 'block',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8rem',
                  fontWeight: 300,
                  color: 'var(--fg-muted)',
                  padding: '0.3rem 0',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--fg-muted)')}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.65rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--fg-muted)',
                marginBottom: '0.75rem',
              }}
            >
              Contact
            </div>
            <a
              href="mailto:coeam.mitblr@manipal.edu"
              style={{
                display: 'block',
                textDecoration: 'none',
                fontFamily: 'var(--font-body)',
                fontSize: '0.8rem',
                fontWeight: 300,
                color: 'var(--fg-muted)',
                padding: '0.3rem 0',
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--fg-muted)')}
            >
              coeam.mitblr@manipal.edu
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.7rem',
              fontWeight: 300,
              color: 'rgba(255,255,255,0.2)',
            }}
          >
            © 2026 CEAM Research Lab, MAHE. All rights reserved.
          </span>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.7rem',
              fontWeight: 300,
              color: 'rgba(255,255,255,0.15)',
            }}
          >
            Built for the future of mobility
          </span>
        </div>
      </motion.div>

      <style jsx global>{`
        .site-footer {
          border-top: 1px solid rgba(235,107,38,0.1);
          padding: 4rem 1.25rem 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }
        .footer-top {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          margin-bottom: 3rem;
        }
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid rgba(235,107,38,0.08);
          padding-top: 1.5rem;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        @media (min-width: 600px) {
          .site-footer {
            padding: 4rem 2rem 2rem;
          }
        }
        @media (min-width: 768px) {
          .footer-top {
            grid-template-columns: 2fr 1fr 1fr;
            gap: 4rem;
          }
        }
        @media (min-width: 1024px) {
          .site-footer {
            padding: 4rem 2.5rem 2rem;
          }
        }
      `}</style>
    </footer >
  );
}
