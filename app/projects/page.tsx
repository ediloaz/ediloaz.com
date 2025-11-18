import { Metadata } from "next";
import PageLayout from "@/components/page-layout";
import { PROJECTS } from "./projects-data";
import ProjectCard from "./project-card";

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
  return (
    <PageLayout>
      <section className="min-h-screen px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header mejorado */}
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 animate-fade-in">
              Mis Proyectos
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Una selección de mis proyectos más destacados, desarrollados con
              tecnologías modernas y mejores prácticas de desarrollo.
            </p>
          </div>

          {/* Grid de proyectos mejorado */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
