"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const ITEMS = [
  {
    color: "#4f8ef7",
    tag: "Actual",
    company: "Ibylit",
    role: "Desarrollador Full Stack Senior",
    desc: "Plataformas B2B seguras y soluciones de alto tráfico para clientes corporativos.",
    link: "/cv#experiencia-profesional",
  },
  {
    color: "#7c3aed",
    tag: "Experiencia",
    company: "Advision Development",
    role: "Full Stack Developer",
    desc: "Desarrollo de experiencias digitales y sistemas de gestión a medida.",
    link: "/cv#experiencia-profesional",
  },
  {
    color: "#06b6d4",
    tag: "Experiencia",
    company: "Data GIS",
    role: "Desarrollador Web",
    desc: "Herramientas web para valuadores inmobiliarios con integración de datos geoespaciales.",
    link: "/cv#experiencia-profesional",
  },
  {
    color: "#10b981",
    tag: "Formación",
    company: "TEC — Costa Rica",
    role: "Ingeniería en Computación",
    desc: "Sistema de Movilidad Internacional en ASP.NET. Electivas en desarrollo web y recuperación de información.",
    link: "/cv#educacion",
  },
];

const LINE_HEIGHT = 340; // approximate px for the SVG viewBox

export function ExperienceTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="relative">
      {/* SVG vertical line */}
      <div className="absolute left-3.5 top-0 bottom-0 pointer-events-none" aria-hidden>
        <svg
          width={2}
          height="100%"
          style={{ overflow: "visible" }}
        >
          <motion.line
            x1={1}
            y1={0}
            x2={1}
            y2="100%"
            stroke="var(--border-strong)"
            strokeWidth={2}
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={inView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
          />
        </svg>
      </div>

      {/* Timeline items */}
      <div className="space-y-6 pl-10">
        {ITEMS.map((item, i) => (
          <motion.div
            key={item.company}
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.25 + i * 0.18, ease: "easeOut" }}
            className="relative"
          >
            {/* Dot on the line */}
            <motion.div
              className="absolute -left-[2.125rem] top-3 w-3.5 h-3.5 rounded-full border-2"
              style={{ borderColor: item.color, background: "var(--bg)" }}
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.35 + i * 0.18, type: "spring", bounce: 0.5 }}
            >
              {/* Inner fill */}
              <div
                className="absolute inset-0.5 rounded-full"
                style={{ background: item.color, opacity: 0.7 }}
              />
            </motion.div>

            {/* Card */}
            <div
              className="p-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              style={{
                border: "1px solid var(--border)",
                background: "var(--surface)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  `color-mix(in srgb, ${item.color} 35%, transparent)`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              }}
            >
              {/* Tag + company */}
              <div className="flex items-center gap-2 mb-1.5">
                <span
                  className="text-[10px] font-semibold px-1.5 py-0.5 rounded-md"
                  style={{
                    background: `color-mix(in srgb, ${item.color} 12%, var(--bg))`,
                    color: item.color,
                  }}
                >
                  {item.tag}
                </span>
                <span
                  className="text-xs font-semibold"
                  style={{ color: item.color }}
                >
                  {item.company}
                </span>
              </div>

              {/* Role */}
              <h4
                className="text-sm font-semibold mb-1 leading-snug"
                style={{ color: "var(--fg)" }}
              >
                {item.role}
              </h4>

              {/* Description */}
              <p
                className="text-[12px] leading-relaxed mb-2.5"
                style={{ color: "var(--fg-muted)" }}
              >
                {item.desc}
              </p>

              {/* Link */}
              <Link
                href={item.link}
                className="inline-flex items-center gap-1 text-[11px] font-semibold transition-opacity hover:opacity-60"
                style={{ color: item.color }}
              >
                Ver en detalle
                <svg
                  className="w-2.5 h-2.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
