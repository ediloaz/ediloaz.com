import Link from "next/link";
import PageLayout from "@/components/page-layout";
import { PROJECTS } from "./projects-data";

export default function Projects() {
  return (
    <PageLayout>
      <section className="min-h-screen px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Mis Proyectos
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-12">
            Aquí encontrarás una selección de mis proyectos más destacados.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project) => (
              <article
                key={project.slug}
                className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-lg border border-zinc-200 dark:border-zinc-700 flex flex-col gap-4"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 dark:from-blue-500/30 dark:via-purple-500/30 dark:to-pink-500/30 rounded-lg" />

                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">
                      {project.name}
                    </h3>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-blue-600 dark:text-blue-300 hover:underline"
                    >
                      GitHub
                    </a>
                  </div>

                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={`${project.slug}-${tech}`}
                        className="px-3 py-1 bg-blue-100/70 dark:bg-blue-900/50 text-blue-700 dark:text-blue-200 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center justify-center rounded-full bg-zinc-900 text-white px-4 py-2 text-sm font-medium hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white transition-colors"
                    >
                      Ver demo
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
