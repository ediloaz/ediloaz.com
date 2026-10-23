export type Experience = {
  company: string;
  role: string;
  period: string;
  context: string;
  /** Resumen de una línea para el timeline compacto */
  summary: string;
  highlights: string[];
  stack: string[];
  /** Sitios públicos en los que trabajé */
  sites?: string[];
  color: string;
  current?: boolean;
};

/** Año de inicio profesional, base del "X+ años de experiencia" */
export const CAREER_START_YEAR = 2018;

export const getYearsOfExperience = () => new Date().getFullYear() - CAREER_START_YEAR;

export const EXPERIENCE: Experience[] = [
  {
    company: "Ibylit",
    role: "Senior Fullstack Engineer",
    period: "2024 — Actualidad",
    context: "Startup SaaS B2B fintech · San José, Costa Rica",
    summary: "Plataformas B2B seguras y soluciones de alto tráfico para clientes corporativos.",
    highlights: [
      "Extiendo plataformas white-label B2B con servicios backend en C# y frontends en React, asegurando cumplimiento normativo.",
      "Encabecé la integración de notificaciones y personalizaciones clave para clientes estratégicos.",
      "Entregué funcionalidades críticas antes del calendario previsto, acelerando la adopción de la plataforma.",
    ],
    stack: ["React", "C#", "AWS", "SQL Server"],
    color: "#4f8ef7",
    current: true,
  },
  {
    company: "Advision Development",
    role: "Frontend Engineer",
    period: "2021 — 2023",
    context: "Proyectos web deportivos",
    summary: "Desarrollo de experiencias digitales y sistemas de gestión a medida.",
    highlights: [
      "Reconocido como top performer del departamento de software dos años consecutivos.",
      "Lancé la primera versión de bookmakersreview.com un 15% antes de lo planificado.",
      "Implementé funcionalidades en React desde diseños de Figma y di mentoría y pair-programming al equipo.",
    ],
    stack: ["React", "JavaScript", "Node.js", "AWS", "Docker"],
    sites: ["therx.com", "oddstrader.com", "bookmakersreview.com", "sportsbookreview.com"],
    color: "#7c3aed",
  },
  {
    company: "Data GIS",
    role: "Full Stack Engineer",
    period: "2019 — 2021",
    context: "SaaS de inteligencia geoespacial inmobiliaria",
    summary: "Herramientas web para valuadores inmobiliarios con integración de datos geoespaciales.",
    highlights: [
      "Diseñé herramientas para peritos valuadores combinando React y Python.",
      "Optimicé los tiempos de carga e interacción en un 40%.",
      "Participé en todo el ciclo del producto: descubrimiento, prototipos, bases de datos, QA y despliegue.",
    ],
    stack: ["React", "Python", "MySQL", "AWS"],
    color: "#06b6d4",
  },
  {
    company: "Workana",
    role: "Freelance Software Engineer",
    period: "2017 — 2019",
    context: "Plataforma freelance internacional",
    summary: "Aplicaciones web, de escritorio y móviles para clientes internacionales.",
    highlights: [
      "15 proyectos completados con calificación perfecta y múltiples recomendaciones.",
      "Clasificado como el desarrollador #1 de Costa Rica en la plataforma el 90% del tiempo.",
    ],
    stack: ["React", "ASP.NET", "Python"],
    color: "#f59e0b",
  },
  {
    company: "Tecnológico de Costa Rica",
    role: "Web Developer",
    period: "2018 — 2019",
    context: "Sistema interno de la universidad",
    summary: "Sistema de Gestión de Movilidad Internacional en ASP.NET y SQL Server.",
    highlights: [
      "Diseñé y desarrollé el Sistema de Gestión de Movilidad Internacional, reconocido oficialmente por el TEC.",
      "Optimicé consultas en un 25% mediante el rediseño de la base de datos.",
    ],
    stack: ["ASP.NET", "SQL Server"],
    color: "#10b981",
  },
];
