"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const VW = 880;
const VH = 260;
const NW = 130;
const NH = 90;

interface NodeDef {
  id: string;
  cx: number;
  cy: number;
  label: string;
  sub: string;
  iconPath: string;
  color: string;
}

interface NodeDetail {
  title: string;
  emoji: string;
  description: string;
  technologies: string[];
  insight: string;
}

const NODES: NodeDef[] = [
  {
    id: "client",
    cx: 115,
    cy: 130,
    label: "Client",
    sub: "React / Browser",
    color: "#4f8ef7",
    iconPath:
      "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 0v20M2 12h20M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z",
  },
  {
    id: "frontend",
    cx: 330,
    cy: 130,
    label: "Frontend",
    sub: "SSR / Next.js",
    color: "#7c3aed",
    iconPath: "M16 18l6-6-6-6M8 6l-6 6 6 6",
  },
  {
    id: "api",
    cx: 545,
    cy: 130,
    label: "Backend",
    sub: "Node.js / REST",
    color: "#06b6d4",
    iconPath:
      "M12 2l10 6.5v7L12 22l-10-6.5v-7L12 2zM12 22v-7M22 8.5l-10 6.5L2 8.5",
  },
  {
    id: "db",
    cx: 760,
    cy: 130,
    label: "Database",
    sub: "PostgreSQL / Redis",
    color: "#10b981",
    iconPath:
      "M12 3c-4.97 0-9 1.34-9 3s4.03 3 9 3 9-1.34 9-3-4.03-3-9-3zM3 12c0 1.66 4.03 3 9 3s9-1.34 9-3M3 6v6c0 1.66 4.03 3 9 3s9-1.34 9-3V6",
  },
];

const NODE_DETAILS: Record<string, NodeDetail> = {
  client: {
    title: "Capa de Cliente",
    emoji: "🖥️",
    description:
      "Donde el usuario vive la experiencia. Construyo interfaces rápidas, accesibles y visualmente precisas — como este mismo sitio que estás viendo ahora mismo.",
    technologies: ["React 19", "TypeScript", "Tailwind CSS v4", "Framer Motion", "SVG Animado"],
    insight:
      "Una UI rápida no es solo técnica: es respeto por el tiempo del usuario.",
  },
  frontend: {
    title: "Frontend",
    emoji: "⚡",
    description:
      "El núcleo del stack moderno. Uso App Router, Server Components e ISR para máximo SEO y performance sin sacrificar interactividad ni dinamismo.",
    technologies: ["Next.js 16", "App Router", "Server Components", "ISR / SSG", "Edge Runtime"],
    insight:
      "Server Components eliminan hasta el 90% del JS enviado al cliente.",
  },
  api: {
    title: "Backend",
    emoji: "🔌",
    description:
      "El puente entre interfaz y datos. Diseño APIs RESTful limpias, tipadas y seguras — con validación en cada punto de entrada y contratos claros.",
    technologies: ["Node.js", "API Routes", "JWT / OAuth", "Zod Validation", "Rate Limiting"],
    insight:
      "Una buena API es una promesa pública: contratos claros, errores descriptivos, versionado explícito.",
  },
  db: {
    title: "Base de Datos",
    emoji: "🗄️",
    description:
      "Donde viven los datos. Modelo relacional sólido, índices optimizados y queries que escalan sin misterios ni cuellos de botella inesperados.",
    technologies: ["PostgreSQL", "Redis Cache", "SQL Server", "Prisma ORM", "Supabase"],
    insight:
      "El 80% de los cuellos de botella viven aquí. Identificarlos y resolverlos es lo que marca la diferencia.",
  },
};

const ARROWS = [
  { x1: 180, y1: 130, x2: 265, y2: 130, color: "#4f8ef7", delay: 0.7 },
  { x1: 395, y1: 130, x2: 480, y2: 130, color: "#7c3aed", delay: 0.95 },
  { x1: 610, y1: 130, x2: 695, y2: 130, color: "#06b6d4", delay: 1.2 },
];

const PACKETS = [
  { x1: 180, x2: 265, y: 130, color: "#4f8ef7", startDelay: 1.4, duration: 0.55 },
  { x1: 395, x2: 480, y: 130, color: "#7c3aed", startDelay: 1.7, duration: 0.55 },
  { x1: 610, x2: 695, y: 130, color: "#06b6d4", startDelay: 2.0, duration: 0.55 },
];

function NodeCard({
  node,
  index,
  inView,
  isSelected,
  anySelected,
  onSelect,
}: {
  node: NodeDef;
  index: number;
  inView: boolean;
  isSelected: boolean;
  anySelected: boolean;
  onSelect: () => void;
}) {
  const x = node.cx - NW / 2;
  const y = node.cy - NH / 2;

  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.82, y: 12 }}
      animate={
        inView
          ? {
              opacity: anySelected && !isSelected ? 0.45 : 1,
              scale: 1,
              y: 0,
            }
          : { opacity: 0, scale: 0.82, y: 12 }
      }
      transition={{ duration: 0.55, delay: index * 0.18, ease: "easeOut" }}
      onClick={onSelect}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      style={{ cursor: "pointer" }}
    >
      {/* Selected ring / outer glow */}
      <motion.rect
        x={x - 4}
        y={y - 4}
        width={NW + 8}
        height={NH + 8}
        rx={18}
        fill="none"
        stroke={node.color}
        strokeWidth={isSelected ? 2 : 1}
        animate={{ opacity: isSelected ? 0.7 : 0.25 }}
        transition={{ duration: 0.25 }}
        style={{ filter: `drop-shadow(0 0 ${isSelected ? 14 : 8}px ${node.color})` }}
      />
      {/* Card background */}
      <rect
        x={x}
        y={y}
        width={NW}
        height={NH}
        rx={14}
        fill="var(--surface)"
        stroke={isSelected ? node.color : "var(--border-strong)"}
        strokeWidth={isSelected ? 1.5 : 1}
      />
      {/* Color accent top bar */}
      <rect x={x} y={y} width={NW} height={3} rx={2} fill={node.color} opacity={0.85} />
      {/* Icon */}
      <g transform={`translate(${node.cx - 10}, ${node.cy - 26})`}>
        <svg
          width={20}
          height={20}
          viewBox="0 0 24 24"
          fill="none"
          stroke={node.color}
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d={node.iconPath} />
        </svg>
      </g>
      {/* Label */}
      <text
        x={node.cx}
        y={node.cy + 12}
        textAnchor="middle"
        fontFamily="var(--font-geist-sans, system-ui)"
        fontSize={11}
        fontWeight={600}
        fill="var(--fg)"
      >
        {node.label}
      </text>
      {/* Sub label */}
      <text
        x={node.cx}
        y={node.cy + 27}
        textAnchor="middle"
        fontFamily="var(--font-geist-sans, system-ui)"
        fontSize={9}
        fill="var(--fg-muted)"
      >
        {node.sub}
      </text>
      {/* "Tap" hint when nothing is selected */}
      {!anySelected && index === 0 && (
        <motion.text
          x={node.cx}
          y={node.cy + 43}
          textAnchor="middle"
          fontFamily="var(--font-geist-sans, system-ui)"
          fontSize={8}
          fill={node.color}
          animate={{ opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          ↑ explorar
        </motion.text>
      )}
    </motion.g>
  );
}

function Arrow({
  x1, y1, x2, y2, color, delay,
}: {
  x1: number; y1: number; x2: number; y2: number;
  color: string; delay: number;
}) {
  const id = `arrow-${x1}-${x2}`;
  return (
    <g>
      <defs>
        <marker id={id} markerWidth={7} markerHeight={7} refX={5} refY={3.5} orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill={color} opacity={0.75} />
        </marker>
      </defs>
      <motion.path
        d={`M ${x1} ${y1} L ${x2} ${y2}`}
        stroke={color}
        strokeWidth={1.5}
        strokeOpacity={0.65}
        fill="none"
        markerEnd={`url(#${id})`}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay, ease: "easeOut" }}
      />
    </g>
  );
}

function DataPacket({
  x1, x2, y, color, startDelay, duration,
}: {
  x1: number; x2: number; y: number;
  color: string; startDelay: number; duration: number;
}) {
  return (
    <motion.circle
      cx={0}
      cy={y}
      r={4}
      fill={color}
      style={{ filter: `drop-shadow(0 0 5px ${color})` }}
      initial={{ x: x1, opacity: 0 }}
      animate={{ x: [x1, x2], opacity: [0, 1, 1, 0] }}
      transition={{
        x: { duration, ease: "easeInOut", repeat: Infinity, repeatDelay: 2.2, delay: startDelay },
        opacity: {
          duration,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 2.2,
          delay: startDelay,
          times: [0, 0.1, 0.85, 1],
        },
      }}
    />
  );
}

function DetailPanel({
  detail,
  color,
  onClose,
}: {
  detail: NodeDetail;
  color: string;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -16, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.97 }}
      transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
      className="relative mt-5 rounded-2xl overflow-hidden"
      style={{
        border: `1px solid color-mix(in srgb, ${color} 30%, var(--border))`,
        background: "var(--surface)",
        boxShadow: `0 4px 40px color-mix(in srgb, ${color} 15%, transparent)`,
      }}
    >
      {/* Gradient left accent */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
        style={{ background: `linear-gradient(to bottom, ${color}, color-mix(in srgb, ${color} 30%, transparent))` }}
      />

      <div className="px-6 py-5 pl-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <span
              className="text-2xl w-10 h-10 flex items-center justify-center rounded-xl shrink-0"
              style={{ background: `color-mix(in srgb, ${color} 12%, var(--bg))` }}
            >
              {detail.emoji}
            </span>
            <div>
              <h3 className="font-bold text-base" style={{ color: "var(--fg)" }}>
                {detail.title}
              </h3>
              <p className="text-xs mt-0.5" style={{ color: color || "var(--accent)" }}>
                Parte de mi stack
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-colors hover:opacity-70"
            style={{ background: "var(--bg)", color: "var(--fg-muted)", border: "1px solid var(--border)" }}
            aria-label="Cerrar"
          >
            <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--fg-muted)" }}>
          {detail.description}
        </p>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-2 mb-5">
          {detail.technologies.map((tech) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="px-2.5 py-1 rounded-lg text-xs font-medium"
              style={{
                background: `color-mix(in srgb, ${color} 12%, var(--bg))`,
                color: color,
                border: `1px solid color-mix(in srgb, ${color} 25%, transparent)`,
              }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Insight */}
        <div
          className="flex items-start gap-2.5 px-4 py-3 rounded-xl"
          style={{ background: `color-mix(in srgb, ${color} 6%, var(--bg))`, borderLeft: `2px solid ${color}` }}
        >
          <span className="text-sm shrink-0 mt-0.5" style={{ color }}>💡</span>
          <p className="text-xs leading-relaxed italic" style={{ color: "var(--fg-muted)" }}>
            &ldquo;{detail.insight}&rdquo;
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function TechFlowSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedNode = NODES.find((n) => n.id === selectedId);
  const selectedDetail = selectedId ? NODE_DETAILS[selectedId] : null;

  function handleSelect(id: string) {
    setSelectedId((prev) => (prev === id ? null : id));
  }

  return (
    <section
      ref={ref}
      className="py-20 px-5 overflow-hidden"
      style={{ background: "var(--bg-subtle)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "var(--accent)" }}
          >
            Cómo construyo
          </p>
          <h2
            className="font-bold tracking-tight mb-3"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "var(--fg)" }}
          >
            Full Stack de extremo a extremo
          </h2>
          <p className="text-sm leading-relaxed max-w-md" style={{ color: "var(--fg-muted)" }}>
            Cada capa diseñada, construida y desplegada por mí. Haz clic en
            cualquier nodo para explorar qué hay detrás.
          </p>
        </motion.div>

        {/* SVG Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full overflow-x-auto"
        >
          <div style={{ minWidth: 560 }}>
            <svg
              viewBox={`0 0 ${VW} ${VH}`}
              width="100%"
              preserveAspectRatio="xMidYMid meet"
              role="img"
              aria-label="Diagrama de arquitectura Full Stack interactivo — haz clic en cada nodo"
            >
              <defs>
                <pattern
                  id="grid-flow"
                  x={0}
                  y={0}
                  width={40}
                  height={40}
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="var(--border)"
                    strokeWidth={0.5}
                  />
                </pattern>
              </defs>
              <rect width={VW} height={VH} fill="url(#grid-flow)" rx={16} opacity={0.5} />

              {inView && ARROWS.map((a, i) => <Arrow key={i} {...a} />)}

              {NODES.map((node, i) => (
                <NodeCard
                  key={node.id}
                  node={node}
                  index={i}
                  inView={inView}
                  isSelected={selectedId === node.id}
                  anySelected={selectedId !== null}
                  onSelect={() => handleSelect(node.id)}
                />
              ))}

              {inView && PACKETS.map((p, i) => <DataPacket key={i} {...p} />)}
            </svg>
          </div>
        </motion.div>

        {/* Detail panel */}
        <AnimatePresence mode="wait">
          {selectedDetail && selectedNode && (
            <DetailPanel
              key={selectedId}
              detail={selectedDetail}
              color={selectedNode.color}
              onClose={() => setSelectedId(null)}
            />
          )}
        </AnimatePresence>

        {/* Legend */}
        {!selectedId && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 1.6 }}
            className="mt-6 flex flex-wrap gap-5"
          >
            {NODES.map((n) => (
              <button
                key={n.id}
                onClick={() => handleSelect(n.id)}
                className="flex items-center gap-1.5 transition-opacity hover:opacity-70"
              >
                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: n.color }} />
                <span className="text-xs" style={{ color: "var(--fg-muted)" }}>
                  {n.label}
                </span>
              </button>
            ))}
            <div className="flex items-center gap-1.5">
              <span
                className="w-2.5 h-2.5 rounded-full shrink-0 animate-pulse"
                style={{ background: "#4f8ef7" }}
              />
              <span className="text-xs" style={{ color: "var(--fg-muted)" }}>
                Flujo de datos en tiempo real
              </span>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
