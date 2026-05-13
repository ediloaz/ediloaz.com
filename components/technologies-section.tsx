"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  technologies,
  TECHNOLOGY_CATEGORY_ORDER,
  MASTERY_OPTIONS,
  MASTERY_ORDER,
  type TechnologyMastery,
  type Technology,
} from "@/constants/technologies";
import { technologyDetails } from "@/constants/technology-details";

type TechnologiesSectionProps = { sectionId?: string };

const MASTERY_COLOR: Record<TechnologyMastery, string> = {
  domino: "var(--accent)",
  llegue_a_dominar: "#7c3aed",
  llegue_a_usar: "var(--fg-muted)",
};

const MASTERY_GLOW: Record<TechnologyMastery, string> = {
  domino: "rgba(79,142,247,0.18)",
  llegue_a_dominar: "rgba(124,58,237,0.18)",
  llegue_a_usar: "rgba(122,132,153,0.12)",
};

// ─── Category tab with animated active underline ──────────────────────────────

function CategoryTab({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative px-3.5 py-2 text-xs font-medium transition-colors shrink-0"
      style={{ color: isActive ? "var(--fg)" : "var(--fg-muted)" }}
    >
      {label}
      {isActive && (
        <motion.div
          layoutId="tech-tab-indicator"
          className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
          style={{ background: "var(--accent)" }}
          transition={{ type: "spring", stiffness: 500, damping: 35 }}
        />
      )}
    </button>
  );
}

// ─── Mastery filter pill ──────────────────────────────────────────────────────

function MasteryPill({
  masteryKey,
  isActive,
  onClick,
}: {
  masteryKey: TechnologyMastery;
  isActive: boolean;
  onClick: () => void;
}) {
  const { label, icon, tooltip } = MASTERY_OPTIONS[masteryKey];
  const color = MASTERY_COLOR[masteryKey];

  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      title={tooltip}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors"
      style={{
        border: `1px solid ${isActive ? color : "var(--border-strong)"}`,
        background: isActive ? `color-mix(in srgb, ${color} 12%, var(--surface))` : "transparent",
        color: isActive ? color : "var(--fg-muted)",
      }}
    >
      <span className="font-mono text-[10px]">{icon}</span>
      <span className="hidden sm:inline">{label}</span>
    </motion.button>
  );
}

// ─── Individual tech card with Framer Motion flip ─────────────────────────────

function TechCard({
  tech,
  index,
  isFlipped,
  onFlip,
}: {
  tech: Technology;
  index: number;
  isFlipped: boolean;
  onFlip: () => void;
}) {
  const details = technologyDetails[tech.name] ?? {
    tecnologia: tech.description,
    usadaPara: "Resolver necesidades funcionales en productos digitales.",
  };
  const color = MASTERY_COLOR[tech.mastery];
  const glow = MASTERY_GLOW[tech.mastery];
  const { icon: masteryIcon, tooltip } = MASTERY_OPTIONS[tech.mastery];

  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.38, delay: index * 0.038, ease: "easeOut" }}
    >
      <motion.button
        type="button"
        onClick={onFlip}
        aria-pressed={isFlipped}
        aria-label={`${tech.name}. ${isFlipped ? "Ver frente" : "Ver detalle"}`}
        className="relative block h-36 w-full cursor-pointer rounded-2xl text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        style={{ perspective: 1400, focusRingColor: color } as React.CSSProperties}
        whileHover={{
          y: -5,
          boxShadow: `0 8px 32px ${glow}, 0 0 0 1px color-mix(in srgb, ${color} 25%, transparent)`,
        }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 380, damping: 22 }}
      >
        <motion.div
          className="relative h-full w-full rounded-2xl"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.55, type: "spring", bounce: 0.2 }}
        >
          {/* ── Front ── */}
          <div
            className="absolute inset-0 flex flex-col rounded-2xl p-3"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              background: "var(--surface)",
              border: "1px solid var(--border)",
            }}
          >
            {/* Mastery badge */}
            <span
              className="absolute top-2 right-2 flex h-5 w-5 items-center justify-center rounded border text-[10px] font-mono"
              title={tooltip}
              style={{
                background: `color-mix(in srgb, ${color} 10%, var(--surface))`,
                borderColor: `color-mix(in srgb, ${color} 30%, transparent)`,
                color,
              }}
            >
              {masteryIcon}
            </span>

            {/* Icon */}
            <motion.div
              className="mb-2 text-2xl leading-none"
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {tech.icon}
            </motion.div>

            {/* Name */}
            <h5
              className="pr-4 text-sm font-semibold leading-tight"
              style={{ color: "var(--fg)" }}
            >
              {tech.name}
            </h5>

            {/* Description */}
            <p
              className="mt-1 line-clamp-2 text-[11px] leading-snug"
              style={{ color: "var(--fg-muted)" }}
            >
              {tech.description}
            </p>

            {/* Colored bottom accent line */}
            <div
              className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ background: color }}
            />
          </div>

          {/* ── Back ── */}
          <div
            className="absolute inset-0 flex flex-col rounded-2xl p-3 overflow-hidden"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              background: "var(--bg)",
              border: `1px solid color-mix(in srgb, ${color} 35%, var(--border))`,
            }}
          >
            {/* Accent glow in corner */}
            <div
              className="absolute -top-6 -right-6 w-20 h-20 rounded-full blur-2xl pointer-events-none"
              style={{ background: `color-mix(in srgb, ${color} 25%, transparent)` }}
            />

            <p
              className="text-[11px] leading-snug mb-3 relative z-10"
              style={{ color: "var(--fg-muted)" }}
            >
              {details.tecnologia}
            </p>
            <p
              className="text-[10px] font-semibold uppercase tracking-widest mb-1 relative z-10"
              style={{ color }}
            >
              Usada para
            </p>
            <p
              className="text-[11px] leading-snug relative z-10"
              style={{ color: "var(--fg-muted)" }}
            >
              {details.usadaPara}
            </p>
          </div>
        </motion.div>
      </motion.button>
    </motion.div>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────

export default function TechnologiesSection({ sectionId = "tecnologias" }: TechnologiesSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const [selectedMasteries, setSelectedMasteries] = useState<TechnologyMastery[]>(["domino"]);
  const [flippedTechs, setFlippedTechs] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState(TECHNOLOGY_CATEGORY_ORDER[0]);

  const toggleMastery = (mastery: TechnologyMastery) => {
    setSelectedMasteries((prev) => {
      if (prev.includes(mastery)) return prev.length === 1 ? prev : prev.filter((m) => m !== mastery);
      return [...prev, mastery];
    });
  };

  const toggleFlip = (techName: string) => {
    setFlippedTechs((prev) =>
      prev.includes(techName) ? prev.filter((n) => n !== techName) : [...prev, techName]
    );
  };

  const availableCategories = TECHNOLOGY_CATEGORY_ORDER.filter((cat) =>
    technologies.some((t) => t.category === cat && selectedMasteries.includes(t.mastery))
  );

  const effectiveCategory = availableCategories.includes(activeCategory)
    ? activeCategory
    : (availableCategories[0] ?? TECHNOLOGY_CATEGORY_ORDER[0]);

  const visibleTechs = technologies.filter(
    (t) => t.category === effectiveCategory && selectedMasteries.includes(t.mastery)
  );

  return (
    <section
      id={sectionId}
      ref={ref}
      className="py-16 px-4"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* ─── Header ─── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6"
        >
          <div>
            <h3
              className="text-2xl md:text-3xl font-bold"
              style={{ color: "var(--fg)" }}
            >
              Tecnologías
            </h3>
            <p className="text-xs mt-1" style={{ color: "var(--fg-muted)" }}>
              Clic en una tarjeta para ver más detalle.
            </p>
          </div>

          {/* Mastery filters */}
          <motion.div
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0, x: 16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            {MASTERY_ORDER.map((key) => (
              <MasteryPill
                key={key}
                masteryKey={key}
                isActive={selectedMasteries.includes(key)}
                onClick={() => toggleMastery(key)}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* ─── Category tabs with sliding indicator ─── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="relative flex flex-wrap gap-0 mb-8 overflow-x-auto"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          {availableCategories.map((cat) => (
            <CategoryTab
              key={cat}
              label={cat}
              isActive={effectiveCategory === cat}
              onClick={() => {
                setActiveCategory(cat);
                setFlippedTechs([]);
              }}
            />
          ))}
        </motion.div>

        {/* ─── Cards grid with category transition ─── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={effectiveCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
          >
            {visibleTechs.map((tech, index) => (
              <TechCard
                key={tech.name}
                tech={tech}
                index={index}
                isFlipped={flippedTechs.includes(tech.name)}
                onFlip={() => toggleFlip(tech.name)}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ─── Mastery legend ─── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="flex flex-wrap gap-5 mt-8 pt-6"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          {MASTERY_ORDER.map((key) => {
            const { label, icon, tooltip } = MASTERY_OPTIONS[key];
            const color = MASTERY_COLOR[key];
            return (
              <div key={key} className="flex items-center gap-2" title={tooltip}>
                <span
                  className="font-mono text-xs w-4 h-4 flex items-center justify-center rounded border"
                  style={{
                    color,
                    borderColor: `color-mix(in srgb, ${color} 30%, transparent)`,
                    background: `color-mix(in srgb, ${color} 8%, var(--surface))`,
                  }}
                >
                  {icon}
                </span>
                <span className="text-xs" style={{ color: "var(--fg-muted)" }}>
                  {label}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
