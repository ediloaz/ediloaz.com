"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import type { Project } from "./projects-data";
import ProjectCard from "./project-card";

// ─── Animated counter ─────────────────────────────────────────────────────────

function Counter({
  to,
  suffix = "+",
  label,
  delay = 0,
}: {
  to: number;
  suffix?: string;
  label: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, {
      duration: 1.6,
      delay,
      ease: "easeOut",
    });
    return controls.stop;
  }, [inView, to, delay, count]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="text-center"
    >
      <div
        className="text-4xl md:text-5xl font-bold tracking-tight leading-none mb-1"
        style={{ color: "var(--fg)" }}
      >
        <motion.span>{rounded}</motion.span>
        <span style={{ color: "var(--accent)" }}>{suffix}</span>
      </div>
      <p className="text-xs font-medium uppercase tracking-widest" style={{ color: "var(--fg-muted)" }}>
        {label}
      </p>
    </motion.div>
  );
}

// ─── Decorative SVG lines ─────────────────────────────────────────────────────

function DecorLines({ inView }: { inView: boolean }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden
      preserveAspectRatio="none"
    >
      {/* Left diagonal */}
      <motion.line
        x1="0%" y1="50%" x2="25%" y2="50%"
        stroke="var(--border-strong)"
        strokeWidth={1}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
      />
      {/* Right diagonal */}
      <motion.line
        x1="75%" y1="50%" x2="100%" y2="50%"
        stroke="var(--border-strong)"
        strokeWidth={1}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
      />
      {/* Center diamond */}
      <motion.polygon
        points="50%,30% 53%,50% 50%,70% 47%,50%"
        fill="none"
        stroke="var(--accent)"
        strokeWidth={1}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 0.5 } : {}}
        transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
      />
    </svg>
  );
}

// ─── Main animated page component ────────────────────────────────────────────

export default function ProjectsAnimatedPage({
  projects,
  techCount,
}: {
  projects: Project[];
  techCount: number;
}) {
  const statsRef = useRef<HTMLDivElement>(null);
  const inView = useInView(statsRef, { once: true, margin: "-40px" });

  return (
    <>
      {/* ─── Animated header ─── */}
      <div className="text-center mb-14 space-y-3">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-xs font-semibold tracking-widest uppercase"
          style={{ color: "var(--accent)" }}
        >
          Portafolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight gradient-text-animated"
        >
          Mis Proyectos
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18, ease: "easeOut" }}
          className="text-lg max-w-2xl mx-auto leading-relaxed"
          style={{ color: "var(--fg-muted)" }}
        >
          Una selección de mis proyectos más destacados, desarrollados con
          tecnologías modernas y mejores prácticas de desarrollo.
        </motion.p>
      </div>

      {/* ─── Stats row ─── */}
      <div ref={statsRef} className="relative flex justify-center gap-12 md:gap-20 mb-16 py-8">
        <DecorLines inView={inView} />
        <Counter to={projects.length} suffix="+" label="Proyectos" delay={0.2} />
        <Counter to={techCount} suffix="+" label="Tecnologías" delay={0.35} />
        <Counter to={8} suffix="+" label="Años exp." delay={0.5} />
      </div>

      {/* ─── Staggered project cards ─── */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 + index * 0.09, ease: "easeOut" }}
          >
            <ProjectCard project={project} index={index} />
          </motion.div>
        ))}
      </div>
    </>
  );
}
