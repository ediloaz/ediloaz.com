import { Metadata } from "next";
import PageLayout from "@/components/page-layout";
import TechnologiesSection from "@/components/technologies-section";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { getYearsOfExperience } from "@/constants/experience";
import { OG_IMAGE } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Sobre Mí",
  description:
    "Conoce más sobre Edisson López, desarrollador Full Stack apasionado por crear soluciones tecnológicas innovadoras. Experiencia en React, Next.js, .NET y más.",
  keywords: [
    "sobre mí",
    "Edisson López",
    "desarrollador full stack",
    "Costa Rica",
    "React",
    "Next.js",
    ".NET",
    "portafolio",
  ],
  openGraph: {
    title: "Sobre Mí · ediloaz",
    description:
      "Conoce más sobre Edisson López, desarrollador Full Stack apasionado por crear soluciones tecnológicas innovadoras.",
    url: "https://www.ediloaz.com/about-me",
    type: "profile",
    siteName: "ediloaz",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary",
    title: "Sobre Mí · ediloaz",
    description: "Conoce más sobre Edisson López, desarrollador Full Stack.",
    creator: "@ediloaz",
  },
  alternates: {
    canonical: "https://www.ediloaz.com/about-me",
  },
};

export default function AboutMe() {
  return (
    <PageLayout>
      <section className="min-h-screen px-4 py-20" style={{ background: "var(--bg)" }}>
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <h1 className="text-4xl md:text-5xl font-bold gradient-text-animated mb-6">
            Sobre Mí
          </h1>

          {/* Bio card */}
          <div
            className="rounded-2xl p-8 mb-8"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
            }}
          >
            <h2 className="text-2xl font-semibold mb-4" style={{ color: "var(--fg)" }}>
              ¿Quién soy?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "var(--fg-muted)" }}>
              Soy Edisson López, desarrollador Full Stack Senior con {getYearsOfExperience()}+ años
              llevando aplicaciones web a producción en fintech, deportes y SaaS geoespacial.
              Me especializo en frontend con React, Next.js y TypeScript, y tengo experiencia
              sólida de backend en C# / ASP.NET Core, SQL, Node.js y Python.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--fg-muted)" }}>
              Mi enfoque se centra en escribir código limpio, mantenible y escalable, y en
              llevar cada feature de punta a punta: de los requerimientos al deploy.
            </p>
          </div>

          {/* Timeline card */}
          <div
            className="rounded-2xl p-8 mb-8"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
            }}
          >
            <h2 className="text-2xl font-semibold mb-8" style={{ color: "var(--fg)" }}>
              Mi Trayectoria
            </h2>
            <ExperienceTimeline />
          </div>

          <TechnologiesSection sectionId="tecnologias" />
        </div>
      </section>
    </PageLayout>
  );
}
