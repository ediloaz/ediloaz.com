import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar, Footer } from "@/components";
import { ScrollReveal } from "@/components/scroll-reveal";
import { PROJECTS } from "./projects/projects-data";
import TechnologiesSection from "@/components/technologies-section";
import { NeuralNetworkBg } from "@/components/neural-network-bg";
import { TechFlowSection } from "@/components/tech-flow-section";
import { EXPERIENCE, getYearsOfExperience } from "@/constants/experience";
import { HOME_TITLE, SITE_URL } from "@/lib/metadata";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${SITE_URL}/#webpage`,
  url: SITE_URL,
  name: HOME_TITLE,
  inLanguage: "es-CR",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  mainEntity: { "@id": `${SITE_URL}/#person` },
};

// ===== ICON PRIMITIVES =====

function IconEmail({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function IconLinkedIn({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconGitHub({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function IconMedium({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  );
}

function IconArrow({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function IconUser({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}


function IconGlobe({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  );
}

function IconCode({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function IconDatabase({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  );
}

function IconLayers({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

function IconCloud({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
    </svg>
  );
}

function IconCheck({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function IconFile({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}

function IconMessage({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  );
}

function IconRocket({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

// ===== SECTION HEADING =====
function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-12">
      <span
        className="text-xs font-semibold tracking-widest uppercase mb-3 block"
        style={{ color: "var(--accent)" }}
      >
        {eyebrow}
      </span>
      <h2
        className="text-3xl md:text-4xl font-bold tracking-tight"
        style={{ color: "var(--fg)" }}
      >
        {title}
        <span
          className="block h-[3px] w-12 rounded-full mt-3 bg-gradient-to-r from-blue-500 to-violet-500"
        />
      </h2>
    </div>
  );
}

// ===== HOME PAGE =====
export default function Home() {
  const yearsOfExperience = getYearsOfExperience();
  const featuredProjects = PROJECTS.filter((project) => project.featured);

  const stats = [
    { value: `${yearsOfExperience}+`, label: "Años de experiencia" },
    { value: "Senior", label: "Full Stack en Ibylit" },
    { value: "2×", label: "Top performer en Advision" },
    { value: "#1", label: "Dev de Costa Rica en Workana" },
  ];

  const facts = [
    { label: "Formación", value: "Ingeniería en Computación · TEC" },
    { label: "Idiomas", value: "Español nativo · Inglés B2+" },
    { label: "Modalidad", value: "Remoto desde Costa Rica (GMT-6)" },
  ];

  const specialties = [
    { label: "Frontend con React, Next.js y TypeScript", Icon: IconGlobe },
    { label: "APIs REST y GraphQL con .NET y Node.js", Icon: IconCode },
    { label: "Bases de datos relacionales y NoSQL", Icon: IconDatabase },
    { label: "Arquitectura de software", Icon: IconLayers },
    { label: "Cloud y despliegue en AWS", Icon: IconCloud },
    { label: "Testing y calidad de código", Icon: IconCheck },
  ];

  const navCards = [
    {
      href: "/about-me",
      label: "Sobre Mí",
      desc: "Trayectoria y experiencia profesional",
      Icon: IconUser,
      colorClass: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40",
    },
    {
      href: "/projects",
      label: "Proyectos",
      desc: "Portafolio de aplicaciones",
      Icon: IconRocket,
      colorClass: "text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-950/40",
    },
    {
      href: "/cv",
      label: "Mi CV",
      desc: "Currículum vitae completo",
      Icon: IconFile,
      colorClass: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40",
    },
    {
      href: "/contact",
      label: "Contacto",
      desc: "¿Tienes una idea? Hablemos",
      Icon: IconMessage,
      colorClass: "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40",
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
      />
      <Navbar />

      {/* ===== HERO ===== */}
      <section
        className="relative min-h-screen flex items-center px-5 pt-24 pb-20 overflow-hidden hero-grid"
      >
        {/* Code-driven SVG particle network — zero-latency, interactive */}
        <NeuralNetworkBg />

        {/* Soft fade over grid at bottom */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, color-mix(in srgb, var(--bg) 30%, transparent) 0%, transparent 30%, var(--bg) 100%)",
            zIndex: 1,
          }}
        />
        {/* Ambient glow */}
        <div
          className="absolute top-1/3 right-1/3 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none"
          style={{ background: "var(--accent-glow)", zIndex: 1 }}
        />

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-[1fr_400px] gap-16 items-center">

            {/* Left: Content */}
            <div>
              <ScrollReveal>
                {/* Available badge */}
                <div
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium mb-8 shadow-sm"
                  style={{
                    border: "1px solid var(--border)",
                    background: "var(--surface)",
                    color: "var(--fg-muted)",
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"
                    style={{ animation: "pulse-glow 2.5s ease infinite" }}
                  />
                  Disponible para freelance
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h1
                  className="font-bold leading-[1.0] tracking-tight mb-5"
                  style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)" }}
                >
                  <span className="block" style={{ color: "var(--fg)" }}>
                    Edisson
                  </span>
                  <span className="block gradient-text-animated">López</span>
                  <span
                    className="block mt-5 text-xl md:text-2xl font-semibold leading-snug tracking-normal"
                    style={{ color: "var(--fg)" }}
                  >
                    Desarrollador Full Stack Senior · React y .NET
                  </span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p
                  className="text-lg leading-relaxed max-w-lg mb-8"
                  style={{ color: "var(--fg-muted)" }}
                >
                  {yearsOfExperience}+ años construyendo productos web en empresas de
                  software. Hoy desarrollo plataformas{" "}
                  <strong style={{ color: "var(--fg)", fontWeight: 600 }}>
                    SaaS B2B en Ibylit
                  </strong>{" "}
                  con React, C# y AWS; antes, frontends en React para sitios como
                  sportsbookreview.com.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="flex flex-wrap gap-3 mb-12">
                  <a
                    href="#experiencia"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-200 shadow-md hover:opacity-85 hover:-translate-y-0.5"
                    style={{ background: "var(--fg)", color: "var(--bg)" }}
                  >
                    Ver experiencia
                    <IconArrow className="w-4 h-4" />
                  </a>
                  <a
                    href="/cv/cv.pdf"
                    download
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
                    style={{
                      border: "1px solid var(--border-strong)",
                      color: "var(--fg)",
                      background: "transparent",
                    }}
                    aria-label="Descargar curriculum vitae en PDF"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Descargar CV
                  </a>
                </div>
              </ScrollReveal>

              {/* Inline stats */}
              <ScrollReveal delay={400}>
                <div
                  className="flex flex-wrap gap-8 pt-8"
                  style={{ borderTop: "1px solid var(--border)" }}
                >
                  {stats.map(({ value, label }) => (
                    <div key={label}>
                      <div
                        className="text-2xl font-bold tracking-tight leading-none mb-1"
                        style={{ color: "var(--fg)" }}
                      >
                        {value}
                      </div>
                      <div className="text-xs" style={{ color: "var(--fg-muted)" }}>
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Photo (desktop only) */}
            <ScrollReveal delay={150} className="hidden lg:block">
              <div className="relative mx-auto" style={{ width: "380px" }}>
                {/* Wide ambient halo */}
                <div
                  className="absolute -inset-8 rounded-full blur-[80px] pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 60%, rgba(79,142,247,0.22) 0%, rgba(124,58,237,0.12) 50%, transparent 75%)",
                  }}
                />
                {/* Floor glow — accent pool under the photo */}
                <div
                  className="absolute bottom-0 left-4 right-4 h-24 blur-3xl pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 100%, rgba(79,142,247,0.35) 0%, transparent 70%)",
                  }}
                />

                {/* Photo — no container, transparent PNG floats freely */}
                <img
                  src="/images/profile-photo.png"
                  alt="Edisson López - Desarrollador Full Stack"
                  className="relative z-10 w-full object-contain object-bottom"
                  style={{ maxHeight: "420px" }}
                />

                {/* Floating code tag */}
                <div
                  className="absolute -bottom-4 -right-5 z-20 px-3 py-2 rounded-xl shadow-xl text-xs font-mono"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    color: "var(--fg-muted)",
                  }}
                >
                  <span style={{ color: "#4ade80" }}>const</span>{" "}
                  dev{" "}
                  <span style={{ color: "var(--fg-muted)" }}>=</span>{" "}
                  <span style={{ color: "var(--accent)" }}>&quot;fullstack&quot;</span>
                  <span style={{ color: "var(--fg-muted)" }}>;</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Scroll indicator — anclado al fondo del hero para no pisar las stats */}
        <div
          className="absolute z-10 bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 scroll-indicator"
          aria-hidden="true"
        >
          <span
            className="text-[10px] tracking-widest uppercase"
            style={{ color: "var(--fg-muted)" }}
          >
            Scroll
          </span>
          <svg
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            style={{ color: "var(--fg-muted)" }}
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* ===== EXPERIENCE ===== */}
      <section
        id="experiencia"
        className="py-24 px-5 scroll-mt-16"
        style={{ background: "var(--bg)" }}
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[300px_1fr] gap-12 lg:gap-16">
          {/* Intro (sticky on desktop) */}
          <div className="lg:sticky lg:top-28 self-start">
            <ScrollReveal>
              <SectionHeading eyebrow="Trayectoria" title="Experiencia profesional" />
              <p
                className="text-base leading-relaxed -mt-6 mb-8"
                style={{ color: "var(--fg-muted)" }}
              >
                {yearsOfExperience}+ años construyendo productos web en equipos ágiles:
                frontend en React, backend en C#/.NET y Node.js, y nube en AWS.
              </p>
              <dl className="space-y-4 mb-8">
                {facts.map(({ label, value }) => (
                  <div key={label}>
                    <dt
                      className="text-xs font-semibold tracking-widest uppercase mb-1"
                      style={{ color: "var(--fg-muted)" }}
                    >
                      {label}
                    </dt>
                    <dd className="text-sm font-medium" style={{ color: "var(--fg)" }}>
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
              <Link
                href="/cv"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200 hover:opacity-75"
                style={{
                  color: "var(--accent)",
                  border: "1px solid var(--border-strong)",
                  background: "transparent",
                }}
              >
                Ver CV completo
                <IconArrow className="w-4 h-4" />
              </Link>
            </ScrollReveal>
          </div>

          {/* Roles */}
          <ol className="space-y-5">
            {EXPERIENCE.map((job, index) => (
              <li key={job.company}>
                <ScrollReveal delay={index * 80}>
                  <article className="surface-card rounded-2xl p-6 md:p-7">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1.5">
                      <h3
                        className="text-lg font-semibold tracking-tight"
                        style={{ color: "var(--fg)" }}
                      >
                        {job.role}
                      </h3>
                      <span className="text-xs font-mono" style={{ color: "var(--fg-muted)" }}>
                        {job.period}
                      </span>
                    </div>
                    <p className="text-sm mb-4" style={{ color: "var(--fg-muted)" }}>
                      <span className="font-semibold" style={{ color: "var(--accent)" }}>
                        {job.company}
                      </span>
                      {" · "}
                      {job.context}
                      {job.current && (
                        <span
                          className="inline-flex items-center gap-1.5 ml-2 px-2 py-0.5 rounded-full text-[11px] font-medium align-middle"
                          style={{ border: "1px solid var(--border)" }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          Actual
                        </span>
                      )}
                    </p>
                    <ul className="space-y-2 mb-5">
                      {job.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-3 text-sm leading-relaxed"
                          style={{ color: "var(--fg-muted)" }}
                        >
                          <span
                            className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ background: job.color }}
                            aria-hidden="true"
                          />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    {job.sites && (
                      <p className="text-xs mb-4" style={{ color: "var(--fg-muted)" }}>
                        Sitios: {job.sites.join(" · ")}
                      </p>
                    )}
                    <ul className="flex flex-wrap gap-1.5" aria-label={`Tecnologías en ${job.company}`}>
                      {job.stack.map((tech) => (
                        <li
                          key={tech}
                          className="px-2 py-1 rounded-md text-[11px] font-medium"
                          style={{
                            background: "var(--bg-subtle)",
                            border: "1px solid var(--border)",
                            color: "var(--fg-muted)",
                          }}
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </article>
                </ScrollReveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== TECH FLOW (code-driven SVG architecture animation) ===== */}
      <TechFlowSection />

      {/* ===== ABOUT ===== */}
      <section
        id="sobre-mi"
        className="py-24 px-5"
        style={{ background: "var(--bg)" }}
      >
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <SectionHeading eyebrow="Acerca de mí" title="¿Quién soy?" />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-14 items-start">
            {/* Bio */}
            <ScrollReveal>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "var(--fg-muted)" }}
              >
                Soy Edisson López, ingeniero en Computación del Tecnológico de Costa
                Rica y desarrollador Full Stack con foco en frontend: React, Next.js y
                TypeScript del lado del cliente; C#/.NET y Node.js del lado del
                servidor.
              </p>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "var(--fg-muted)" }}
              >
                Mi enfoque se centra en escribir{" "}
                <mark
                  className="not-italic font-semibold px-1 py-0.5 rounded"
                  style={{
                    background: "rgba(250,204,21,0.2)",
                    color: "var(--fg)",
                  }}
                >
                  código limpio
                </mark>
                , mantenible y escalable, siempre buscando las mejores prácticas.
              </p>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "var(--fg-muted)" }}
              >
                <mark
                  className="not-italic font-semibold px-1 py-0.5 rounded"
                  style={{
                    background: "rgba(250,204,21,0.2)",
                    color: "var(--fg)",
                  }}
                >
                  &quot;Done is better than perfect&quot;
                </mark>
                : equilibro tiempos para entregar funcionalidad sólida en plazos
                razonables y favorecer el avance del proyecto.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--fg-muted)" }}
              >
                Trabajo con equipos ágiles (Scrum y Kanban), hablo inglés a nivel B2+ y
                disfruto la mentoría y el pair-programming.
              </p>
            </ScrollReveal>

            {/* Specialties + photo (mobile only) */}
            <ScrollReveal delay={100}>
              <h3
                className="text-sm font-semibold tracking-wide uppercase mb-4"
                style={{ color: "var(--fg-muted)" }}
              >
                Especialidades
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {specialties.map(({ label, Icon }) => (
                  <div
                    key={label}
                    className="surface-card flex items-center gap-3 p-3 rounded-xl"
                  >
                    <div
                      className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center"
                      style={{ background: "var(--accent-glow)", color: "var(--accent)" }}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span
                      className="text-xs font-medium leading-snug"
                      style={{ color: "var(--fg-muted)" }}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              <div
                className="relative overflow-hidden rounded-2xl mt-6 lg:hidden"
                style={{
                  border: "1px solid var(--border)",
                  background: "var(--surface)",
                }}
              >
                <img
                  src="/images/profile-photo.png"
                  alt="Edisson López"
                  className="w-full aspect-[4/3] object-cover object-top"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <TechnologiesSection />

      {/* ===== SIDE PROJECTS ===== */}
      <section
        id="proyectos"
        className="py-24 px-5 scroll-mt-16"
        style={{ background: "var(--bg)" }}
      >
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <SectionHeading eyebrow="Side projects" title="Proyectos personales" />
            <p
              className="text-base leading-relaxed max-w-xl -mt-6 mb-10"
              style={{ color: "var(--fg-muted)" }}
            >
              Hechos en tiempo libre para explorar tecnologías.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {featuredProjects.map((project, index) => (
              <ScrollReveal key={project.slug} delay={index * 80} className="h-full">
                <Link
                  href={`/projects/${project.slug}`}
                  className="surface-card group flex h-full items-center gap-4 p-4 rounded-2xl"
                >
                  {project.imageUrl && (
                    <Image
                      src={project.imageUrl}
                      alt=""
                      width={112}
                      height={70}
                      className="shrink-0 rounded-lg object-cover object-top"
                      style={{ border: "1px solid var(--border)" }}
                    />
                  )}
                  <div className="min-w-0">
                    <h3 className="font-semibold text-sm mb-1 transition-colors duration-200 group-hover:text-[var(--accent)]">
                      {project.name}
                    </h3>
                    <p
                      className="text-xs leading-relaxed mb-1.5 line-clamp-2"
                      style={{ color: "var(--fg-muted)" }}
                    >
                      {project.shortDescription}
                    </p>
                    <p className="text-[11px] font-mono" style={{ color: "var(--fg-muted)" }}>
                      {project.technologies.join(" · ")}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={200}>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200 hover:opacity-75"
              style={{
                color: "var(--accent)",
                border: "1px solid var(--border-strong)",
                background: "transparent",
              }}
            >
              Ver todos los proyectos
              <IconArrow className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== QUICK NAV ===== */}
      <section
        className="py-24 px-5"
        style={{ background: "var(--bg-subtle)" }}
      >
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2
              className="text-2xl font-bold tracking-tight text-center mb-10"
              style={{ color: "var(--fg)" }}
            >
              Explora más
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {navCards.map(({ href, label, desc, Icon, colorClass }, i) => (
              <ScrollReveal key={href} delay={i * 70}>
                <Link
                  href={href}
                  className="group flex flex-col p-5 rounded-2xl glow-card transition-all duration-200 hover:-translate-y-1"
                  style={{
                    border: "1px solid var(--border)",
                    background: "var(--surface)",
                  }}
                  aria-label={`Ir a ${label}`}
                >
                  <div className={`w-10 h-10 rounded-xl mb-4 flex items-center justify-center ${colorClass}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-sm mb-1.5 transition-colors duration-200 group-hover:text-[var(--accent)]">
                    {label}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                    {desc}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT CTA ===== */}
      <section
        id="contacto"
        className="py-24 px-5"
        style={{ background: "var(--bg)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <span
              className="text-xs font-semibold tracking-widest uppercase mb-4 block"
              style={{ color: "var(--accent)" }}
            >
              Disponible ahora
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight mb-5"
              style={{ color: "var(--fg)" }}
            >
              ¿Tienes un proyecto o una vacante?
            </h2>
            <p
              className="leading-relaxed mb-10 max-w-md mx-auto"
              style={{ color: "var(--fg-muted)" }}
            >
              Trabajo en remoto para empresas y equipos que necesitan desarrollo web.
              Si tienes un proyecto con alcance definido o buscas sumar a alguien
              a tu equipo, escríbeme y vemos si hacemos match.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-xl transition-all duration-200 shadow-md hover:opacity-85 hover:-translate-y-0.5 mb-10"
              style={{ background: "var(--fg)", color: "var(--bg)" }}
              aria-label="Ir a la página de contacto"
            >
              Ir a Página de Contacto
              <IconArrow className="w-4 h-4" />
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="mailto:ediloaz@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-150 hover:opacity-75"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--fg-muted)",
                  background: "transparent",
                }}
                aria-label="Enviar un correo electrónico"
              >
                <IconEmail className="w-4 h-4" />
                Email
              </a>
              <a
                href="https://linkedin.com/in/ediloaz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-150 hover:opacity-75"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--fg-muted)",
                  background: "transparent",
                }}
                aria-label="Visitar mi perfil de LinkedIn"
              >
                <IconLinkedIn className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="https://github.com/ediloaz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-150 hover:opacity-75"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--fg-muted)",
                  background: "transparent",
                }}
                aria-label="Visitar mi perfil de GitHub"
              >
                <IconGitHub className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://medium.com/@ediloaz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-150 hover:opacity-75"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--fg-muted)",
                  background: "transparent",
                }}
                aria-label="Visitar mi perfil de Medium"
              >
                <IconMedium className="w-4 h-4" />
                Medium
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}

