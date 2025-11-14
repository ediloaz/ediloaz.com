import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageLayout from "@/components/page-layout";
import { PROJECTS, getProjectBySlug } from "../projects-data";

interface ProjectPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Proyecto no encontrado",
      description: "No pudimos encontrar este proyecto.",
    };
  }

  return {
    title: `${project.name} · Demo`,
    description: project.shortDescription,
  };
}

export default function ProjectDemoPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <PageLayout showFooter={false} className="flex flex-col min-h-screen">
      <section className="w-full px-4 py-10 md:py-14">
        <div className="max-w-5xl mx-auto flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              Demo del proyecto
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold text-zinc-900 dark:text-white">
              {project.name}
            </h1>
            <p className="text-base text-zinc-600 dark:text-zinc-300">
              {project.shortDescription}
            </p>
          </div>

          <div className="flex flex-col w-full gap-3 md:w-auto md:flex-row">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 px-4 py-2.5 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
            >
              ← Volver a proyectos
            </Link>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-zinc-900 text-white px-4 py-2.5 text-sm font-medium hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white transition-colors"
            >
              &lt;/&gt; Ver código
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 flex-1 w-full">
        <div className="max-w-6xl mx-auto h-[90vh] md:h-[80vh] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden">
          <iframe
            src={project.demoUrl}
            title={`Demo de ${project.name}`}
            loading="lazy"
            className="w-full h-full"
            allowFullScreen
          />
        </div>
      </section>
    </PageLayout>
  );
}

