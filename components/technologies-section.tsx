"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";
import {
  technologies,
  TECHNOLOGY_CATEGORY_ORDER,
  MASTERY_OPTIONS,
  MASTERY_ORDER,
  type TechnologyMastery,
} from "@/constants/technologies";
import { technologyDetails } from "@/constants/technology-details";

type TechnologiesSectionProps = {
  /** Id del section para enlaces de ancla (ej. #tecnologias). Opcional. */
  sectionId?: string;
};

export default function TechnologiesSection({ sectionId = "tecnologias" }: TechnologiesSectionProps) {
  const [selectedMasteries, setSelectedMasteries] = useState<TechnologyMastery[]>(["domino"]);
  const [flippedTechs, setFlippedTechs] = useState<string[]>([]);

  const toggleMastery = (mastery: TechnologyMastery) => {
    setSelectedMasteries((prev) => {
      const isSelected = prev.includes(mastery);
      if (!isSelected) return [...prev, mastery];
      if (prev.length === 1) return prev;
      return prev.filter((item) => item !== mastery);
    });
  };

  const toggleTechCard = (techName: string) => {
    setFlippedTechs((prev) =>
      prev.includes(techName) ? prev.filter((name) => name !== techName) : [...prev, techName]
    );
  };

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
            Organizadas por area. Filtra por nivel para ver solo las tecnologias de esa categoria.
          </p>
          <p className="text-center text-xs font-medium text-zinc-500 dark:text-zinc-500 uppercase tracking-wider mb-3">
            Filtrar por dominio
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-12 text-sm text-zinc-600 dark:text-zinc-400">
            {MASTERY_ORDER.map((key) => {
              const { label, icon, tooltip } = MASTERY_OPTIONS[key];
              const isActive = selectedMasteries.includes(key);
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => toggleMastery(key)}
                  aria-pressed={isActive}
                  className={[
                    "inline-flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 transition-colors",
                    isActive
                      ? "border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900"
                      : "border-zinc-300 bg-white text-zinc-700 hover:bg-zinc-100 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700",
                  ].join(" ")}
                  title={tooltip}
                >
                  <span
                    className="inline-flex h-6 w-6 items-center justify-center rounded border border-current font-medium"
                    aria-hidden
                  >
                    {icon}
                  </span>
                  <span>{label}</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>
        <div className="space-y-14">
          {TECHNOLOGY_CATEGORY_ORDER.map((category) => {
            const categoryTechs = technologies.filter(
              (t) => t.category === category && selectedMasteries.includes(t.mastery)
            );
            if (categoryTechs.length === 0) return null;
            return (
              <ScrollReveal key={category}>
                <h4 className="text-xl font-semibold text-zinc-700 dark:text-zinc-300 mb-6 pb-2 border-b border-zinc-200 dark:border-zinc-600">
                  {category}
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {categoryTechs.map((tech, index) => {
                    const { icon: masteryIcon, tooltip, label } = MASTERY_OPTIONS[tech.mastery];
                    const isFlipped = flippedTechs.includes(tech.name);
                    const details = technologyDetails[tech.name] ?? {
                      tecnologia: tech.description,
                      usadaPara: "Resolver necesidades funcionales en productos digitales.",
                    };
                    return (
                      <ScrollReveal key={tech.name} delay={index * 40}>
                        <button
                          type="button"
                          onClick={() => toggleTechCard(tech.name)}
                          className="group relative block h-56 w-full cursor-pointer rounded-2xl text-left [perspective:1400px] focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 dark:focus-visible:ring-zinc-300 dark:focus-visible:ring-offset-zinc-800"
                          aria-pressed={isFlipped}
                          aria-label={`${tech.name}. ${isFlipped ? "Mostrar vista frontal" : "Mostrar más información"}`}
                        >
                          <div
                            className={[
                              "relative h-full w-full rounded-2xl transition-transform duration-700 [transform-style:preserve-3d]",
                              isFlipped ? "[transform:rotateY(180deg)]" : "",
                            ].join(" ")}
                          >
                            <div className="absolute inset-0 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 shadow-md transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl dark:border-zinc-700 dark:bg-zinc-800/80 [backface-visibility:hidden]">
                              <span
                                className="absolute top-3 right-3 flex h-6 w-6 items-center justify-center rounded border border-zinc-300 text-xs font-medium text-zinc-500 dark:border-zinc-600 dark:text-zinc-400"
                                title={tooltip}
                              >
                                {masteryIcon}
                              </span>
                              <div className="mb-2 text-2xl transition-transform duration-300 group-hover:scale-110" title={tooltip}>
                                {tech.icon}
                              </div>
                              <h5 className="mb-1 pr-8 font-semibold text-zinc-800 dark:text-zinc-200">{tech.name}</h5>
                              <p className="line-clamp-3 text-sm leading-snug text-zinc-500 dark:text-zinc-400">
                                {tech.description}
                              </p>
                              <p className="mt-4 text-xs font-medium uppercase tracking-wider text-zinc-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 dark:text-zinc-400">
                                Click para más detalle
                              </p>
                            </div>

                            <div className="absolute inset-0 rounded-2xl border border-zinc-300 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 p-5 text-zinc-100 shadow-xl [backface-visibility:hidden] [transform:rotateY(180deg)] dark:border-zinc-500 dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-300 dark:text-zinc-900">
                              <h5 className="mb-2 text-base font-semibold">{tech.name}</h5>
                              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-300 dark:text-zinc-700">
                                Tecnología
                              </p>
                              <p className="mb-4 text-sm leading-snug text-zinc-200 dark:text-zinc-800">
                                {details.tecnologia}
                              </p>
                              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-300 dark:text-zinc-700">
                                Usada para
                              </p>
                              <p className="mb-4 text-sm leading-snug text-zinc-200 dark:text-zinc-800">
                                {details.usadaPara}
                              </p>
                              <div className="space-y-1 text-xs">
                                <p>
                                  <span className="font-semibold">Área:</span> {tech.category}
                                </p>
                                <p>
                                  <span className="font-semibold">Nivel:</span> {label}
                                </p>
                              </div>
                              <p className="mt-4 text-xs uppercase tracking-wider text-zinc-300 dark:text-zinc-700">
                                Click para volver
                              </p>
                            </div>
                          </div>
                        </button>
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
