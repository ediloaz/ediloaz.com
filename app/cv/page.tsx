"use client";

import PageLayout from "@/components/page-layout";
import Link from "next/link";
import { useRef, useState } from "react";

const certifications = [
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

export default function CV() {
  const [openCertification, setOpenCertification] = useState<string | null>(certifications[0]?.id ?? null);
  const contentRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const handleToggle = (id: string) => {
    setOpenCertification((prev) => (prev === id ? null : id));
  };

  return (
    <PageLayout>
      <section className="min-h-screen px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                Edisson López
              </h1>
              <p className="text-xl text-zinc-600 dark:text-zinc-300">
                Desarrollador Full Stack
              </p>
            </div>
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Descargar CV
            </button>
          </div>

          {/* Información Personal */}
          <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-8 mb-8 border border-zinc-200 dark:border-zinc-700">
            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200 mb-4 flex items-center gap-3">
              <span>👨‍💻</span>
              Perfil Profesional
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Desarrollador Full Stack con experiencia en crear aplicaciones web robustas y escalables. 
              Especializado en React, Next.js, Node.js, C#, .NET y bases de datos tanto relacionales como NoSQL. 
              Apasionado por la calidad del código, las mejores prácticas y el aprendizaje continuo.
            </p>
          </div>

          {/* Experiencia Laboral */}
          <div id="experiencia-profesional" className="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-8 mb-8 border border-zinc-200 dark:border-zinc-700">
            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200 mb-6 flex items-center gap-3">
              <span>💼</span>
              Experiencia Laboral
            </h2>
            
            <div className="space-y-10">
              <div className="border-l-4 border-blue-600 pl-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                  <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">
                    Senior Fullstack Engineer · Ibylit
                  </h3>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    enero 2024 - Presente · San José, Costa Rica
                  </p>
                </div>
                <p className="text-sm uppercase tracking-wide text-blue-600 dark:text-blue-300 font-semibold mb-2">
                  RESPONSABILIDADES
                </p>
                <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-300 space-y-1 mb-4">
                  <li>Extendí plataformas white-label B2B asegurando cumplimiento normativo al trabajar con servicios backend en C# y frontends en React.</li>
                  <li>Encabecé la integración de notificaciones y personalizaciones clave, alineando las soluciones a los requisitos de clientes estratégicos.</li>
                </ul>
                <p className="text-sm uppercase tracking-wide text-blue-600 dark:text-blue-300 font-semibold mb-2">
                  LOGROS
                </p>
                <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-300 space-y-1 mb-4">
                  <li>Entregué funcionalidades críticas antes del calendario previsto, acelerando la adopción de la plataforma.</li>
                  <li>Mejoré la UX/UI logrando mayor satisfacción y eficiencia operativa.</li>
                </ul>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Tecnologías: React · C# · AWS · SQL Server
                </p>
              </div>

              <div className="border-l-4 border-purple-600 pl-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                  <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">
                    Frontend Engineer · Advision Development
                  </h3>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    enero 2021 - octubre 2023 · Costa Rica
                  </p>
                </div>
                <p className="text-sm uppercase tracking-wide text-purple-600 dark:text-purple-300 font-semibold mb-2">
                  RESPONSABILIDADES
                </p>
                <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-300 space-y-1 mb-4">
                  <li>Implementé nuevas funcionalidades en React siguiendo diseños en Figma y estándares de arquitectura.</li>
                  <li>Brindé mentoría técnica, soporte y sesiones de pair-programming al equipo.</li>
                  <li>Lideré ceremonias y gestión de proyectos para asegurar entregas puntuales y dentro de presupuesto.</li>
                </ul>
                <p className="text-sm uppercase tracking-wide text-purple-600 dark:text-purple-300 font-semibold mb-2">
                  LOGROS
                </p>
                <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-300 space-y-1 mb-4">
                  <li>Reconocido como top performer del departamento de software dos años consecutivos.</li>
                  <li>Lancé la primera versión de www.bookmakersreview.com un 15% antes del plan.</li>
                </ul>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">
                  Tecnologías: React · JavaScript · HTML · CSS · Docker
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Proyectos: therx.com · oddstrader.com · bookmakersreview.com · sportsbookreview.com
                </p>
              </div>

              <div className="border-l-4 border-green-600 pl-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                  <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">
                    Full Stack Engineer · Data GIS S.A.
                  </h3>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    agosto 2019 - enero 2021 · Costa Rica
                  </p>
                </div>
                <p className="text-sm uppercase tracking-wide text-green-600 dark:text-green-300 font-semibold mb-2">
                  RESPONSABILIDADES
                </p>
                <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-300 space-y-1 mb-4">
                  <li>Diseñé herramientas innovadoras para peritos valuadores combinando React y Python-Django.</li>
                  <li>Participé en todo el ciclo de vida del producto: descubrimiento, prototipos, bases de datos, QA y despliegue.</li>
                  <li>Reporté avances semanales a CEO y clientes incorporando retroalimentación temprana.</li>
                </ul>
                <p className="text-sm uppercase tracking-wide text-green-600 dark:text-green-300 font-semibold mb-2">
                  LOGROS
                </p>
                <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-300 space-y-1 mb-4">
                  <li>Optimicé tiempos de carga e interacción en un 40%.</li>
                  <li>Mejoré los procesos de interacción con clientes, manteniendo alcances claros y entregas puntuales.</li>
                </ul>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Tecnologías: React · Python · MySQL · AWS · herramientas propietarias (raporto-uploader, valoro-advanced)
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                  <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">
                    Freelance Software Engineer · Workana
                  </h3>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    diciembre 2017 - noviembre 2019 · Costa Rica
                  </p>
                </div>
                <p className="text-sm uppercase tracking-wide text-orange-500 dark:text-orange-300 font-semibold mb-2">
                  RESPONSABILIDADES
                </p>
                <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-300 space-y-1 mb-4">
                  <li>Diseñé aplicaciones de escritorio para aprendizaje de idiomas y traducción geográfica en tiempo real.</li>
                  <li>Construí y mantuve sitios web modernos enfocados en React.</li>
                </ul>
                <p className="text-sm uppercase tracking-wide text-orange-500 dark:text-orange-300 font-semibold mb-2">
                  LOGROS
                </p>
                <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-300 space-y-1 mb-4">
                  <li>Completar 15 proyectos con calificación perfecta y múltiples recomendaciones.</li>
                  <li>Clasificado como el desarrollador #1 de Costa Rica durante el 90% del tiempo en la plataforma.</li>
                </ul>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Tecnologías: React · ASP.NET · Python · Integraciones personalizadas
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                  <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">
                    Web Developer · Tecnológico de Costa Rica
                  </h3>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    febrero 2018 - agosto 2019 · Costa Rica
                  </p>
                </div>
                <p className="text-sm uppercase tracking-wide text-red-500 dark:text-red-300 font-semibold mb-2">
                  RESPONSABILIDADES
                </p>
                <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-300 space-y-1 mb-4">
                  <li>Diseñé y desarrollé el Sistema de Gestión de Movilidad Internacional conforme a los estándares de DATIC.</li>
                  <li>Documenté requisitos, prototipos y lideré el desarrollo completo con ASP.NET y SQL Server.</li>
                </ul>
                <p className="text-sm uppercase tracking-wide text-red-500 dark:text-red-300 font-semibold mb-2">
                  LOGROS
                </p>
                <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-300 space-y-1 mb-4">
                  <li>Reconocido oficialmente por el TEC por el impacto del sistema.</li>
                  <li>Optimicé consultas en un 25% mediante rediseño de la base de datos.</li>
                </ul>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Tecnologías: ASP.NET · SQL Server · HTML · CSS
                </p>
              </div>
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
                  Tecnológico de Costa Rica
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400">
                  Bachelor of Engineering (Computing Engineering) · 2013 - 2018
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wide text-green-600 dark:text-green-300 font-semibold mb-2">
                  Experiencia Académica Destacada
                </p>
                <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-300 space-y-1">
                  <li>[2017-2018] Full Stack Developer (.NET) para el Sistema de Gestión de Movilidad Internacional.</li>
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
                const contentHeight = contentRefs.current[cert.id]?.scrollHeight ?? 0;
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
                            {cert.provider} · {cert.year}
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
                    <div
                      id={`cert-content-${cert.id}`}
                      ref={(el) => {
                        contentRefs.current[cert.id] = el;
                      }}
                      style={{
                        maxHeight: isOpen ? contentHeight : 0,
                      }}
                      className={`px-6 py-2 text-zinc-600 dark:text-zinc-300 overflow-hidden transition-all duration-300 ease-out ${
                        isOpen ? "opacity-100 pb-6" : "opacity-0 pb-0"
                      }`}
                    >
                      <p className="mb-6 mt-1">
                        Certificado emitido por <span className="font-medium">{cert.provider}</span> en {cert.year}.
                      </p>
                      {cert.credentialUrl ? (
                        <Link
                          href={cert.credentialUrl}
                          target="_blank"
                          className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-full transition-colors duration-200 shadow-sm"
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
                );
              })}
            </div>
          </div>

          {/* Habilidades Técnicas */}
          <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-8 border border-zinc-200 dark:border-zinc-700">
            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200 mb-6 flex items-center gap-3">
              <span>🛠️</span>
              Habilidades Técnicas
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-3">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">TypeScript</span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">HTML/CSS</span>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-3">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm">C#</span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm">.NET</span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm">Python</span>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-3">Bases de Datos</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full text-sm">SQL Server</span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full text-sm">PostgreSQL</span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full text-sm">MongoDB</span>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-3">Herramientas</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300 rounded-full text-sm">Git</span>
                  <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300 rounded-full text-sm">Docker</span>
                  <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300 rounded-full text-sm">AWS</span>
                </div>
              </div>
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
