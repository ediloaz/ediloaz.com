"use client";

import PageLayout from "@/components/page-layout";
import Link from "next/link";
import { useState } from "react";
import { CAREER_HIGHLIGHTS, EXPERIENCE, getYearsOfExperience } from "@/constants/experience";

type Certification = {
  id: string;
  title: string;
  provider: string;
  year?: string;
  logo: string;
  credentialUrl: string;
};

const certifications: Certification[] = [
  {
    id: "aws-ai-practitioner",
    title: "AWS Certified AI Practitioner",
    provider: "Amazon Web Services",
    year: "2026",
    logo: "https://images.credly.com/images/4d4693bb-530e-4bca-9327-de07f3aa2348/image.png",
    credentialUrl: "https://www.credly.com/badges/622f33e9-ecbe-47cc-87c4-298faa32953f",
  },
  {
    id: "aws-cloud-practitioner",
    title: "AWS Certified Cloud Practitioner",
    provider: "Amazon Web Services",
    logo: "",
    credentialUrl: "",
  },
  {
    id: "software-architect",
    title: "Complete Guide to Becoming a Software Architect",
    provider: "Udemy",
    year: "2024",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHjz1PdbSuZ2f743KrdrQybzdH1EbwtVg2HQ&s",
    credentialUrl: "https://www.udemy.com/certificate/UC-7bf1ef2b-13b8-4abc-b338-b1ad9d9a3abb/",
  },
  {
    id: "scrum-soylider",
    title: "SCRUM aplicado a cualquier industria",
    provider: "soylider.net",
    year: "2023",
    logo: "https://www.soylider.net/cdn/shop/files/soylider.net_0e6d19d1-ed6b-4c3d-b580-235b61710105.png?v=1720915055&width=220",
    credentialUrl:
      "https://c.certifyem.com/?e=bgbcb2x1%60DrMlBw%7B%7BMZzerZ%5Bj1iVzeFKJtdp3ib-bdbcbQSJQRT.DF111932b-bobcbFEJTTPO!M%C3%94QF%5B!E%C3%8EB%5Bb-bjbcb32.21.3134b-b%3BbcbtpzmjefsofuAhn%23jm%2Fdpnb&h=fef8c11e0784&v=1",
  },
  {
    id: "scrum-avanzado",
    title: "Scrum avanzado",
    provider: "LinkedIn Learning",
    year: "2022",
    logo: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/05f3961576b01a57ea8ec1a153a0ea08664bc354224c26d81c054a04dd592844?trk=share_certificate",
  },
  {
    id: "chrome-devtools",
    title: "Chrome Web Developer Tools",
    provider: "LinkedIn Learning",
    year: "2021",
    logo: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/f089df9cfc561ef316ba64d423c03b9fb29986ae94c3bf2f4899c587bfd4b2ec?trk=share_certificate",
  },
  {
    id: "fullstack-linkedin",
    title: "Desarrollo Web Full Stack",
    provider: "LinkedIn Learning",
    year: "2020",
    logo: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg",
    credentialUrl: "https://drive.google.com/file/d/1Fu0v8QonQHC17gcCSLl5EFAnupISXoON/view?usp=sharing",
  },
  {
    id: "equipos-virtuales",
    title: "Liderar y dinamizar equipos virtuales",
    provider: "LinkedIn Learning",
    year: "2020",
    logo: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg",
    credentialUrl: "https://drive.google.com/file/d/1b9QJFhw1cEJ4V6T0EV0cxuPn91WV74Gt/view?usp=sharing",
  },
  {
    id: "lenguaje-no-verbal",
    title: "Lenguaje no verbal para líderes",
    provider: "LinkedIn Learning",
    year: "2019",
    logo: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg",
    credentialUrl: "https://drive.google.com/file/d/1O2zLAGp871WOO2jmKBLl7brD1oKOKNs7/view?usp=sharing",
  },
  {
    id: "linux-ieee",
    title: "Introducción a Linux, Nivel Intermedio",
    provider: "IEEE Computer Society",
    year: "2018",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9pFwvD5_NH_bzsmiNGhmjalH95Xc25tb6_w&s",
    credentialUrl: "",
  },
];

const skillGroups = [
  {
    title: "Lenguajes",
    items: ["JavaScript", "TypeScript", "C#", "Python", "PHP", "SQL"],
    chip: "bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-200",
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "React Native", "Redux", "HTML5", "CSS3", "SASS", "Accesibilidad (WCAG)", "UX"],
    chip: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300",
  },
  {
    title: "Backend",
    items: ["ASP.NET Core", ".NET", "ASP.NET", "Node.js", "Flask", "REST APIs", "GraphQL", "SOAP", "Microservicios"],
    chip: "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300",
  },
  {
    title: "Bases de datos",
    items: ["SQL Server", "PostgreSQL", "MySQL"],
    chip: "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300",
  },
  {
    title: "Cloud y DevOps",
    items: ["AWS (S3, EC2, Lambda, Cognito)", "Docker", "Jenkins", "CI/CD"],
    chip: "bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300",
  },
  {
    title: "IA y LLMs",
    items: ["OpenAI API", "Claude", "Gemini", "Integración de LLMs", "Automatización con IA"],
    chip: "bg-fuchsia-100 dark:bg-fuchsia-900 text-fuchsia-600 dark:text-fuchsia-300",
  },
  {
    title: "Testing y calidad",
    items: ["Jest", "React Testing Library", "Playwright", "Code review", "Sentry"],
    chip: "bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-300",
  },
  {
    title: "Herramientas y prácticas",
    items: ["Git", "GitHub", "Bitbucket", "JIRA", "Trello", "Webpack", "Arquitectura de software", "WordPress", "Scrum y Kanban"],
    chip: "bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300",
  },
];

export default function CV() {
  const [openCertification, setOpenCertification] = useState<string | null>(certifications[0]?.id ?? null);

  const handleToggle = (id: string) => {
    setOpenCertification((prev) => (prev === id ? null : id));
  };

  return (
    <PageLayout>
      <section className="min-h-screen px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                Edisson López
              </h1>
              <p className="text-xl text-zinc-600 dark:text-zinc-300">
                Desarrollador Full Stack Senior
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                Costa Rica (UTC-6) · Remoto · Español nativo · Inglés B2+
              </p>
            </div>
            <a
              href="/cv/cv.pdf"
              download="Edisson-Lopez-CV.pdf"
              className="inline-flex shrink-0 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Descargar CV (inglés)
            </a>
          </div>

          {/* Información Personal */}
          <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-8 mb-8 border border-zinc-200 dark:border-zinc-700">
            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200 mb-4 flex items-center gap-3">
              <span>👨‍💻</span>
              Perfil Profesional
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {/* suppressHydrationWarning: la página es estática y el año puede cambiar entre build y visita */}
              Senior Full Stack Software Engineer y AWS Certified AI Practitioner con{" "}
              <span suppressHydrationWarning>{getYearsOfExperience()}</span>+ años
              llevando aplicaciones web a producción en fintech, deportes y SaaS geoespacial. Especialista frontend en
              React, Next.js, TypeScript y JavaScript, con experiencia sólida de backend en C# / ASP.NET Core, SQL,
              Node.js y Python: llevo features de punta a punta, desde el levantamiento de requerimientos hasta el
              deploy. Me comunico bien con clientes y aporto español nativo e inglés profesional (B2+) a equipos
              distribuidos e internacionales.
            </p>
          </div>

          {/* Logros destacados */}
          <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-8 mb-8 border border-zinc-200 dark:border-zinc-700">
            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200 mb-4 flex items-center gap-3">
              <span>⭐</span>
              Logros Destacados
            </h2>
            <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-300 space-y-2">
              {CAREER_HIGHLIGHTS.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>

          {/* Experiencia Laboral */}
          <div id="experiencia-profesional" className="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-8 mb-8 border border-zinc-200 dark:border-zinc-700">
            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200 mb-6 flex items-center gap-3">
              <span>💼</span>
              Experiencia Laboral
            </h2>

            <div className="space-y-10">
              {EXPERIENCE.map((job) => (
                <div key={job.company} className="border-l-4 pl-6" style={{ borderLeftColor: job.color }}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-1">
                    <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">
                      {job.role} · {job.company}
                    </h3>
                    <p className="text-zinc-500 dark:text-zinc-400 shrink-0">{job.period}</p>
                  </div>
                  <p className="text-sm font-semibold mb-3" style={{ color: job.color }}>
                    {job.context}
                  </p>
                  <ul
                    className={`list-disc list-inside text-zinc-600 dark:text-zinc-300 space-y-1 ${
                      job.stack.length > 0 ? "mb-4" : ""
                    }`}
                  >
                    {job.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  {job.stack.length > 0 && (
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      Tecnologías: {job.stack.join(" · ")}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Educación */}
          <div id="educacion" className="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-8 mb-8 border border-zinc-200 dark:border-zinc-700">
            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200 mb-6 flex items-center gap-3">
              <span>🎓</span>
              Educación
            </h2>

            <div className="border-l-4 border-green-600 pl-6 space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">
                  Tecnológico de Costa Rica (TEC)
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400">
                  Bachillerato en Ingeniería en Computación · 2013 - 2019
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                  Una de las principales universidades de ingeniería de Centroamérica.
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wide text-green-600 dark:text-green-300 font-semibold mb-2">
                  Experiencia Académica Destacada
                </p>
                <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-300 space-y-1">
                  <li>[2014-2017] Estudiante asistente del curso de Administración de Proyectos.</li>
                </ul>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wide text-green-600 dark:text-green-300 font-semibold mb-2">
                  Cursos Electivos Finales
                </p>
                <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-300 space-y-1">
                  <li>Recuperación automatizada de información textual (Dr. José Enrique Araya).</li>
                  <li>Desarrollo de aplicaciones web.</li>
                  <li>Diseño de interfaces gráficas de usuario.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Certificaciones */}
          <div id="certificaciones" className="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-8 mb-8 border border-zinc-200 dark:border-zinc-700">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🎖️</span>
              <div>
                <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200">Certificaciones</h2>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Explora los cursos y programas que respaldan mi crecimiento continuo.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {certifications.map((cert) => {
                const isOpen = openCertification === cert.id;
                return (
                  <div
                    key={cert.id}
                    className="group border border-zinc-200 dark:border-zinc-700 rounded-2xl overflow-hidden bg-gradient-to-r from-white via-white to-zinc-50 dark:from-zinc-800 dark:via-zinc-800 dark:to-zinc-900 shadow-sm transition-shadow duration-300 hover:shadow-lg"
                  >
                    <button
                      className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left cursor-pointer transition-colors duration-300 group-hover:bg-zinc-50/80 dark:group-hover:bg-zinc-900/70"
                      onClick={() => handleToggle(cert.id)}
                      aria-expanded={isOpen}
                      aria-controls={`cert-content-${cert.id}`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center p-2">
                          {cert.logo ? (
                            <img
                              src={cert.logo}
                              alt={`Logo de ${cert.provider}`}
                              className="max-h-8"
                              loading="lazy"
                            />
                          ) : (
                            <span className="text-2xl">📜</span>
                          )}
                        </div>
                        <div>
                          <p className="font-semibold text-zinc-800 dark:text-zinc-100">{cert.title}</p>
                          <p className="text-sm text-zinc-500 dark:text-zinc-400">
                            {cert.provider}
                            {cert.year && ` · ${cert.year}`}
                          </p>
                        </div>
                      </div>
                      <span
                        className={`text-2xl font-light transition-transform duration-300 ${
                          isOpen ? "rotate-45 text-blue-600" : "text-zinc-400"
                        }`}
                        aria-hidden
                      >
                        +
                      </span>
                    </button>
                    {/* grid-rows 0fr → 1fr anima la altura sin medir el DOM */}
                    <div
                      id={`cert-content-${cert.id}`}
                      inert={!isOpen}
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 pt-3 pb-6 text-zinc-600 dark:text-zinc-300">
                          <p className="mb-6">
                            Certificado emitido por <span className="font-medium">{cert.provider}</span>
                            {cert.year && ` en ${cert.year}`}.
                          </p>
                          {cert.credentialUrl ? (
                            <Link
                              href={cert.credentialUrl}
                              target="_blank"
                              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-full transition-colors duration-200 shadow-sm"
                            >
                              Ver credencial
                              <span aria-hidden>↗</span>
                            </Link>
                          ) : (
                            <p className="text-sm text-zinc-500 dark:text-zinc-400">
                              Credencial disponible bajo solicitud.
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href="https://www.credly.com/users/ediloaz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-6 text-sm font-semibold text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Ver todos mis badges verificados en Credly <span aria-hidden>↗</span>
            </a>
          </div>

          {/* Habilidades Técnicas */}
          <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-8 border border-zinc-200 dark:border-zinc-700">
            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200 mb-6 flex items-center gap-3">
              <span>🛠️</span>
              Habilidades Técnicas
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-3">{group.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className={`px-3 py-1 rounded-full text-sm ${group.chip}`}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              <span className="text-2xl">💬</span>
              ¿Hablamos sobre tu proyecto?
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
