"use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import {
  technologies,
  TECHNOLOGY_CATEGORY_ORDER,
  MASTERY_OPTIONS,
  MASTERY_ORDER,
} from "@/constants/technologies";

type TechnologiesSectionProps = {
  /** Id del section para enlaces de ancla (ej. #tecnologias). Opcional. */
  sectionId?: string;
};

export default function TechnologiesSection({ sectionId = "tecnologias" }: TechnologiesSectionProps) {
  return (
    <section
      id={sectionId}
      className="py-20 px-4 bg-white dark:bg-zinc-800"
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-4 text-zinc-800 dark:text-zinc-200">
            Tecnologías
          </h3>
          <p className="text-center text-zinc-600 dark:text-zinc-400 mb-6 max-w-2xl mx-auto">
            Organizadas por área. El icono en cada tarjeta indica el nivel de dominio.
          </p>
          <p className="text-center text-xs font-medium text-zinc-500 dark:text-zinc-500 uppercase tracking-wider mb-3">
            Simbología
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm text-zinc-600 dark:text-zinc-400">
            {MASTERY_ORDER.map((key) => {
              const { label, icon, tooltip } = MASTERY_OPTIONS[key];
              return (
                <span
                  key={key}
                  className="inline-flex items-center gap-2"
                  title={tooltip}
                >
                  <span
                    className="inline-flex h-6 w-6 items-center justify-center rounded border border-zinc-300 dark:border-zinc-600 font-medium"
                    aria-hidden
                  >
                    {icon}
                  </span>
                  <span>{label}</span>
                </span>
              );
            })}
          </div>
        </ScrollReveal>
        <div className="space-y-14">
          {TECHNOLOGY_CATEGORY_ORDER.map((category) => {
            const categoryTechs = technologies.filter((t) => t.category === category);
            if (categoryTechs.length === 0) return null;
            return (
              <ScrollReveal key={category}>
                <h4 className="text-xl font-semibold text-zinc-700 dark:text-zinc-300 mb-6 pb-2 border-b border-zinc-200 dark:border-zinc-600">
                  {category}
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {categoryTechs.map((tech, index) => {
                    const { icon: masteryIcon, tooltip } = MASTERY_OPTIONS[tech.mastery];
                    return (
                      <ScrollReveal key={tech.name} delay={index * 40}>
                        <div
                          className="bg-zinc-50 dark:bg-zinc-800/80 p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-zinc-200 dark:border-zinc-700 group relative"
                        >
                          <span
                            className="absolute top-3 right-3 flex h-6 w-6 items-center justify-center rounded border border-zinc-300 dark:border-zinc-600 text-xs font-medium text-zinc-500 dark:text-zinc-400 cursor-help"
                            title={tooltip}
                          >
                            {masteryIcon}
                          </span>
                          <div
                            className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300"
                            title={tooltip}
                          >
                            {tech.icon}
                          </div>
                          <h5 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-1 pr-8">
                            {tech.name}
                          </h5>
                          <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-snug">
                            {tech.description}
                          </p>
                        </div>
                      </ScrollReveal>
                    );
                  })}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
