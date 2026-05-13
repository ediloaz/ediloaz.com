import { Metadata } from "next";
import PageLayout from "@/components/page-layout";
import TechnologiesSection from "@/components/technologies-section";
import AdSenseBanner from "@/components/adsense/AdSenseBanner";
import AdSenseInFeed from "@/components/adsense/AdSenseInFeed";
import { ExperienceTimeline } from "@/components/experience-timeline";

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
              Soy Edisson López, un desarrollador Full Stack apasionado por crear soluciones
              tecnológicas innovadoras que mejoren la vida de las personas. Con experiencia
              en múltiples lenguajes y frameworks, me especializo en desarrollar aplicaciones
              web completas desde el frontend hasta el backend.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--fg-muted)" }}>
              Mi enfoque se centra en escribir código limpio, mantenible y escalable, siempre
              buscando las mejores prácticas y las tecnologías más actuales del mercado.
            </p>
          </div>

          {process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID &&
            process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG_POST && (
              <AdSenseBanner
                clientId={process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}
                slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG_POST}
                className="mb-8"
              />
            )}

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

        {process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID &&
          process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG_LIST && (
            <div
              className="w-full mt-16 pt-12 pb-4"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              <div className="max-w-7xl mx-auto px-4 w-full">
                <AdSenseInFeed
                  clientId={process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || ""}
                  slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG_LIST || ""}
                />
              </div>
            </div>
          )}
      </section>
    </PageLayout>
  );
}
