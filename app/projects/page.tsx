import { Metadata } from "next";
import PageLayout from "@/components/page-layout";
import { PROJECTS } from "./projects-data";
import { technologies } from "@/constants/technologies";
import ProjectsAnimatedPage from "./projects-animated-page";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Explora mi portafolio de proyectos web desarrollados con tecnologías modernas como React, Next.js, TypeScript y más. Aplicaciones web, calculadoras, juegos educativos y plataformas de gestión.",
  keywords: [
    "proyectos web",
    "portafolio",
    "React",
    "Next.js",
    "TypeScript",
    "aplicaciones web",
    "desarrollo full stack",
    "Edisson López",
    "ediloaz",
  ],
  openGraph: {
    title: "Proyectos · ediloaz",
    description:
      "Explora mi portafolio de proyectos web desarrollados con tecnologías modernas.",
    url: "https://www.ediloaz.com/projects",
    type: "website",
    siteName: "ediloaz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Proyectos · ediloaz",
    description:
      "Explora mi portafolio de proyectos web desarrollados con tecnologías modernas.",
    creator: "@ediloaz",
  },
  alternates: {
    canonical: "https://www.ediloaz.com/projects",
  },
};

export default function Projects() {
  const techCount = technologies.filter((t) => t.mastery === "domino").length;

  return (
    <PageLayout>
      <section className="min-h-screen px-4 py-20" style={{ background: "var(--bg)" }}>
        <div className="max-w-7xl mx-auto">
          <ProjectsAnimatedPage projects={PROJECTS} techCount={techCount} />
        </div>
      </section>
    </PageLayout>
  );
}
