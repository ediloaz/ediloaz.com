import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Github, Sparkles, ExternalLink } from "lucide-react";
import PageLayout from "@/components/page-layout";
import { PROJECTS, getProjectBySlug } from "../projects-data";
import DemoFrame from "../components/demo-frame";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

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

export default async function ProjectDemoPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <PageLayout showFooter={false} className="flex flex-col min-h-screen">
      <section className="w-full px-4 py-10 md:py-14">
        <div className="max-w-5xl mx-auto flex flex-col gap-6">
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

          <div className="w-full md:w-auto">
            <div className="rounded-2xl border border-zinc-200/80 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur px-4 py-4 shadow-lg shadow-zinc-900/5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                <Sparkles className="h-4 w-4 text-amber-500" strokeWidth={1.5} />
                Explora más
              </div>
              <div className="mt-4 flex flex-col gap-3 md:flex-row">
                <Link
                  href="/projects"
                  className="group relative flex flex-1 items-center justify-center overflow-hidden rounded-xl border border-zinc-200/80 dark:border-white/15 bg-gradient-to-r from-zinc-50 to-white dark:from-white/5 dark:to-white/10 px-5 py-3 text-center font-semibold text-zinc-900 dark:text-white transition-all hover:-translate-y-0.5 hover:shadow-xl"
                >
                  <div className="pointer-events-none absolute inset-x-0 -top-6 h-12 bg-gradient-to-b from-amber-200/40 via-amber-200/0 to-transparent blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="flex items-center justify-center gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    <span>Volver al catálogo</span>
                  </div>
                </Link>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-center gap-3 rounded-xl border border-transparent bg-zinc-900 text-white px-5 py-3 text-center font-semibold transition-all hover:-translate-y-0.5 hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-50"
                >
                  <Github className="h-5 w-5" />
                  <div className="leading-tight">
                    <p className="text-sm font-semibold">Ver en GitHub</p>
                    <p className="text-[11px] text-white/70 dark:text-zinc-500">
                      Código abierto y documentación
                    </p>
                  </div>
                </a>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative flex flex-1 items-center justify-center overflow-hidden rounded-xl border border-transparent bg-gradient-to-r from-blue-600 to-blue-500 text-white px-5 py-3 text-center font-semibold transition-all hover:-translate-y-0.5 hover:shadow-xl hover:from-blue-700 hover:to-blue-600"
                >
                  <div className="pointer-events-none absolute inset-x-0 -top-6 h-12 bg-gradient-to-b from-blue-300/40 via-blue-300/0 to-transparent blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="flex items-center justify-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    <span>Visitar aplicación</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 flex-1 w-full">
        <div className="max-w-6xl mx-auto">
          <DemoFrame demoUrl={project?.demoUrl} name={project?.name} />
        </div>
      </section>
    </PageLayout>
  );
}

