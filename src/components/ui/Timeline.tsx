'use client';

import { useRef, useEffect, useState, useCallback } from "react";

const events = [
  { title: "Registrations Starting Soon", desc: "Team formation and registration begins." },
  { title: "Registration Deadline", desc: "Last date to register your team." },
  { title: "Problem Statements Released", desc: "Track-specific challenges go live." },
  { title: "Hackathon Kickoff", desc: "36 hours of building begins." },
  { title: "Demo Day & Awards", desc: "Live demonstrations and prize ceremony." },
];

const PATH_D =
  "M 500 60 C 500 160, 120 200, 120 360 C 120 520, 880 520, 880 680 C 880 840, 120 840, 120 1000 C 120 1140, 500 1160, 500 1260";

const VIEWBOX = { w: 1000, h: 1320 };
const CHECKPOINT_T = [0.08, 0.27, 0.50, 0.72, 0.92];

export default function Timeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const trailRef = useRef<SVGPathElement>(null);

  const [progress, setProgress] = useState(0);
  const [points, setPoints] = useState<{ x: number; y: number }[]>([]);

  /* ---------- Calculate Path Points ---------- */
  const calculatePoints = useCallback(() => {
    const path = pathRef.current;
    if (!path) return;

    const total = path.getTotalLength();

    const newPoints = CHECKPOINT_T.map((t) => {
      const pt = path.getPointAtLength(t * total);
      return { x: pt.x, y: pt.y };
    });

    setPoints(newPoints);
  }, []);

  useEffect(() => {
    calculatePoints();
    window.addEventListener("resize", calculatePoints);
    return () => window.removeEventListener("resize", calculatePoints);
  }, [calculatePoints]);

  /* ---------- Scroll Progress ---------- */
  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewport = window.innerHeight;

      const start = viewport * 0.8;
      const end = viewport * 0.2;

      const raw = (start - rect.top) / (rect.height + start - end);
      const clamped = Math.max(0, Math.min(1, raw));

      setProgress(clamped);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------- Animate Trail ---------- */
  useEffect(() => {
    const path = pathRef.current;
    const trail = trailRef.current;
    if (!path || !trail) return;

    const total = path.getTotalLength();
    const drawn = progress * total;

    trail.style.strokeDasharray = `${total}`;
    trail.style.strokeDashoffset = `${total - drawn}`;
  }, [progress]);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-[#050505] text-white overflow-hidden"
    >
      <div className="max-w-[1100px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            The Journey
          </h2>
        </div>

        {/* Path Wrapper */}
        <div className="relative w-full aspect-[1000/1320] mx-auto">

          <svg
            viewBox={`0 0 ${VIEWBOX.w} ${VIEWBOX.h}`}
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Base Path */}
            <path
              d={PATH_D}
              fill="none"
              stroke="#1a1a1a"
              strokeWidth="2"
            />

            {/* Dashed Line */}
            <path
              d={PATH_D}
              fill="none"
              stroke="#222"
              strokeWidth="1"
              strokeDasharray="10 20"
            />

            {/* Active Trail */}
            <path
              ref={trailRef}
              d={PATH_D}
              fill="none"
              stroke="rgb(235,107,38)"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Hidden Calculation Path */}
            <path ref={pathRef} d={PATH_D} fill="none" stroke="none" />
          </svg>

          {/* Floating Text Blocks */}
          {points.map((pt, i) => {
            const isLeft = i % 2 === 0;
            const topPct = (pt.y / VIEWBOX.h) * 100;
            const active = progress >= CHECKPOINT_T[i] - 0.05;

            return (
              <div
                key={i}
                className="absolute w-[42%] md:w-[40%]"
                style={{
                  top: `${topPct}%`,
                  left: isLeft ? "0%" : "auto",
                  right: isLeft ? "auto" : "0%",
                  transform: "translateY(-50%)",
                  textAlign: isLeft ? "right" : "left",
                  opacity: active ? 1 : 0.35,
                  transition: "opacity 0.4s ease",
                }}
              >
                <span className="text-[rgb(235,107,38)] text-xs tracking-widest block mb-2">
                  0{i + 1}
                </span>

                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  {events[i].title}
                </h3>

                <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
                  {events[i].desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
