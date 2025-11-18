"use client";

import Link from "next/link";
import type { Project } from "./projects-data";

// Componentes de iconos
const ExternalLinkIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const GitHubIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LockIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isPrivateRepo =
    !project.githubUrl || project.githubUrl.trim() === "";

  return (
    <article
      className="group relative bg-white/90 dark:bg-zinc-800/90 backdrop-blur-sm rounded-2xl border border-zinc-200/60 dark:border-zinc-700/60 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-200 hover:-translate-y-2 flex flex-col cursor-pointer"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Link principal - todo el card es clickeable */}
      <Link
        href={`/projects/${project.slug}`}
        className="absolute inset-0 z-10"
        aria-label={`Ver detalles de ${project.name}`}
      />

      {/* Imagen con efecto hover */}
      <div className="relative aspect-video bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 dark:from-blue-500/30 dark:via-purple-500/30 dark:to-pink-500/30 overflow-hidden">
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-5xl opacity-30 group-hover:scale-110 transition-transform duration-300">
              🚀
            </div>
          </div>
        )}
        {/* Overlay gradient al hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {/* Indicador de click */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/90 dark:bg-zinc-800/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
            <ArrowRightIcon className="text-blue-600 dark:text-blue-400" />
          </div>
        </div>
      </div>

      {/* Contenido del card */}
      <div className="p-6 flex-1 flex flex-col gap-4">
        {/* Título y descripción */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {project.name}
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed line-clamp-2">
            {project.shortDescription}
          </p>
        </div>

        {/* Tecnologías con mejor diseño */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={`${project.slug}-${tech}`}
              className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/40 dark:to-purple-900/40 text-blue-700 dark:text-blue-300 rounded-lg text-xs font-medium border border-blue-200/60 dark:border-blue-700/60 backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Botones de acción - z-index alto para que funcionen */}
        <div className="flex gap-3 pt-2 relative z-20">
          {/* Botón Ver Código (solo si no es privado) */}
          {!isPrivateRepo ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-xl text-sm font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
              aria-label={`Ver código fuente de ${project.name} en GitHub`}
            >
              <GitHubIcon />
              <span>Código</span>
            </a>
          ) : (
            <button
              disabled
              onClick={(e) => e.stopPropagation()}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-zinc-200 dark:bg-zinc-700 text-zinc-500 dark:text-zinc-400 rounded-xl text-sm font-semibold cursor-not-allowed opacity-70"
              aria-label="Repositorio privado"
              title="Repositorio privado"
            >
              <LockIcon />
              <span>Privado</span>
            </button>
          )}

          {/* Botón Ver Sitio Web */}
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
            aria-label={`Visitar sitio web de ${project.name}`}
          >
            <ExternalLinkIcon />
            <span>Ver sitio</span>
          </a>
        </div>
      </div>

      {/* Efecto de brillo sutil al hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5" />
      </div>

      {/* Borde animado al hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-xl" />
      </div>
    </article>
  );
}

