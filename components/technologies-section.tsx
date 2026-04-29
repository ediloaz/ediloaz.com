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
  sectionId?: string;
};

export default function TechnologiesSection({ sectionId = "tecnologias" }: TechnologiesSectionProps) {
  const [selectedMasteries, setSelectedMasteries] = useState<TechnologyMastery[]>(["domino"]);
  const [flippedTechs, setFlippedTechs] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState(TECHNOLOGY_CATEGORY_ORDER[0]);

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
      prev.includes(techName) ? prev.filter((n) => n !== techName) : [...prev, techName]
    );
  };

  const availableCategories = TECHNOLOGY_CATEGORY_ORDER.filter((cat) =>
    technologies.some((t) => t.category === cat && selectedMasteries.includes(t.mastery))
  );

  const effectiveCategory = availableCategories.includes(activeCategory)
    ? activeCategory
    : (availableCategories[0] ?? TECHNOLOGY_CATEGORY_ORDER[0]);

  const visibleTechs = technologies.filter(
    (t) => t.category === effectiveCategory && selectedMasteries.includes(t.mastery)
  );

  return (
    <section id={sectionId} className="py-10 px-4 bg-white dark:bg-zinc-800">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-zinc-800 dark:text-zinc-200">
                Tecnologías
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                Haz click en una tarjeta para ver más detalle.
              </p>
            </div>

            {/* Mastery filters */}
            <div className="flex flex-wrap gap-1.5">
              {MASTERY_ORDER.map((key) => {
                const { label, icon, tooltip } = MASTERY_OPTIONS[key];
                const isActive = selectedMasteries.includes(key);
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => toggleMastery(key)}
                    aria-pressed={isActive}
                    title={tooltip}
                    className={[
                      "inline-flex cursor-pointer items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-colors",
                      isActive
                        ? "border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900"
                        : "border-zinc-300 bg-transparent text-zinc-600 hover:bg-zinc-100 dark:border-zinc-600 dark:text-zinc-400 dark:hover:bg-zinc-700/50",
                    ].join(" ")}
                  >
                    <span className="font-mono">{icon}</span>
                    <span className="hidden sm:inline">{label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {availableCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveCategory(cat);
                  setFlippedTechs([]);
                }}
                className={[
                  "cursor-pointer rounded-full px-3 py-1 text-xs font-medium transition-all",
                  effectiveCategory === cat
                    ? "bg-zinc-900 text-white shadow-sm dark:bg-zinc-100 dark:text-zinc-900"
                    : "bg-zinc-100 text-zinc-500 hover:bg-zinc-200 hover:text-zinc-700 dark:bg-zinc-700/60 dark:text-zinc-400 dark:hover:bg-zinc-700",
                ].join(" ")}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {visibleTechs.map((tech, index) => {
            const { icon: masteryIcon, tooltip } = MASTERY_OPTIONS[tech.mastery];
            const isFlipped = flippedTechs.includes(tech.name);
            const details = technologyDetails[tech.name] ?? {
              tecnologia: tech.description,
              usadaPara: "Resolver necesidades funcionales en productos digitales.",
            };
            return (
              <ScrollReveal key={tech.name} delay={index * 35}>
                <button
                  type="button"
                  onClick={() => toggleTechCard(tech.name)}
                  className="group relative block h-36 w-full cursor-pointer rounded-2xl text-left [perspective:1400px] focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 dark:focus-visible:ring-zinc-300 dark:focus-visible:ring-offset-zinc-800"
                  aria-pressed={isFlipped}
                  aria-label={`${tech.name}. ${isFlipped ? "Mostrar vista frontal" : "Mostrar más información"}`}
                >
                  <div
                    className={[
                      "relative h-full w-full rounded-2xl transition-transform duration-700 [transform-style:preserve-3d]",
                      isFlipped ? "[transform:rotateY(180deg)]" : "",
                    ].join(" ")}
                  >
                    {/* Front */}
                    <div className="absolute inset-0 flex flex-col rounded-2xl border border-zinc-200 bg-zinc-50 p-3 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900/40 [backface-visibility:hidden]">
                      <span
                        className="absolute top-2 right-2 flex h-4 w-4 items-center justify-center rounded border border-zinc-300 text-[10px] text-zinc-400 dark:border-zinc-600"
                        title={tooltip}
                      >
                        {masteryIcon}
                      </span>
                      <div className="mb-2 text-2xl leading-none transition-transform duration-300 group-hover:scale-110">
                        {tech.icon}
                      </div>
                      <h5 className="pr-4 text-sm font-semibold leading-tight text-zinc-800 dark:text-zinc-200">
                        {tech.name}
                      </h5>
                      <p className="mt-1 line-clamp-2 text-[11px] leading-snug text-zinc-500 dark:text-zinc-400">
                        {tech.description}
                      </p>
                    </div>

                    {/* Back */}
                    <div className="absolute inset-0 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 p-3 [backface-visibility:hidden] [transform:rotateY(180deg)] dark:border-zinc-400 dark:bg-zinc-100">
                      <p className="mb-2 text-[11px] leading-snug text-zinc-300 dark:text-zinc-700">
                        {details.tecnologia}
                      </p>
                      <p className="mb-0 text-[10px] font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                        Usada para
                      </p>
                      <p className="text-[11px] leading-snug text-zinc-300 dark:text-zinc-700">
                        {details.usadaPara}
                      </p>
                    </div>
                  </div>
                </button>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
