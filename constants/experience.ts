export type Experience = {
  company: string;
  role: string;
  period: string;
  context: string;
  /** Resumen de una línea para el timeline compacto */
  summary: string;
  highlights: string[];
  stack: string[];
  color: string;
  current?: boolean;
};

/** Inicio en Data GIS (dic 2018): base del "X+ años de experiencia" del CV */
const CAREER_START = { year: 2018, month: 11 };

export const getYearsOfExperience = () => {
  const now = new Date();
  const years = now.getFullYear() - CAREER_START.year;
  return now.getMonth() < CAREER_START.month ? years - 1 : years;
};

export const CAREER_HIGHLIGHTS = [
  "Bajé la carga de facturas de 30 s a ~300 ms (~100× más rápido) en una plataforma fintech B2B optimizando consultas SQL y endpoints de la API.",
  "Construí y mantuve los frontends de 4 plataformas de datos deportivos en tiempo real con ~400K visitas mensuales combinadas.",
  "Llevé IA a producción: lancé una funcionalidad basada en la API de OpenAI y automaticé flujos del equipo con Claude.",
  "Elevo la calidad del equipo como mentor, revisor de código y compañero de pair-programming que desbloquea a otros.",
];

export const EXPERIENCE: Experience[] = [
  {
    company: "Ibylit",
    role: "Senior Full Stack Engineer",
    period: "Ene 2024 — Actualidad",
    context: "Startup SaaS fintech B2B",
    summary: "Plataforma fintech B2B: APIs en C# / ASP.NET Core, frontend en React e IA en producción.",
    highlights: [
      "Diseño y construyo APIs REST en C# / ASP.NET Core y esquemas de SQL Server para una plataforma fintech B2B con clientes financieros internacionales, incluyendo Argentina.",
      "Bajé la carga de facturas de 30 s a ~300 ms (~100× más rápido) optimizando consultas SQL y endpoints de la API.",
      "Integré la API de OpenAI para lanzar una nueva funcionalidad de producto basada en IA.",
      "Mejoré la confiabilidad con alertas de Sentry + Slack y reduje trabajo manual del equipo con automatizaciones basadas en Claude.",
    ],
    stack: ["React", "C#", "ASP.NET Core", "SQL Server", "AWS"],
    color: "#4f8ef7",
    current: true,
  },
  {
    company: "Advision Development",
    role: "Mid-Senior Frontend Engineer",
    period: "Ene 2021 — Oct 2023",
    context: "Plataformas de datos deportivos en vivo para sportsbooks de EE. UU.",
    summary: "Frontends de 4 plataformas deportivas en tiempo real con ~400K visitas al mes.",
    highlights: [
      "Construí y mantuve los frontends de 4 plataformas en tiempo real (OddsTrader, TheRX, Bookmakers Review y Sportsbook Review) con ~400K visitas mensuales combinadas.",
      "Entregué features y hotfixes en una organización grande: 7 equipos de desarrollo, más QA y diseño dedicados.",
      "Desarrollé endpoints en Node.js y PHP/WordPress que servían cuotas en vivo, marcadores y contenido editorial a los frontends en React.",
    ],
    stack: ["React", "Node.js", "PHP", "WordPress", "AWS"],
    color: "#7c3aed",
  },
  {
    company: "Data GIS",
    role: "Full Stack Engineer",
    period: "Dic 2018 — Ene 2021",
    context: "SaaS de inteligencia geoespacial inmobiliaria",
    summary: "Herramienta de valoración geoespacial para peritos, con mapas interactivos y ArcGIS.",
    highlights: [
      "Construí una herramienta de valoración geoespacial para peritos: mapas interactivos y valoración automatizada.",
      "La integré con sistemas internos y con ArcGIS (una dependencia central), centralizando los datos de valoración.",
      "Alimenté una base de datos compartida que se reutilizó en otros proyectos de la empresa, haciendo a los peritos más rápidos y precisos.",
    ],
    stack: ["React", "JavaScript", "Python", "Flask", "MySQL"],
    color: "#06b6d4",
  },
  {
    company: "Tecnológico de Costa Rica",
    role: "Web Developer (pasantía)",
    period: "Jul 2017 — Ago 2019",
    context: "Sistema web interno de la universidad",
    summary: "Sistema web interno desarrollado de punta a punta junto a un órgano directivo.",
    highlights: [
      "Lideré de punta a punta el desarrollo de un sistema web interno, trabajando directamente con un órgano directivo de la universidad.",
    ],
    stack: ["ASP.NET", "SQL", "jQuery", "Bootstrap"],
    color: "#10b981",
  },
  {
    company: "Workana",
    role: "Software Developer",
    period: "Ene 2017 — Dic 2018",
    context: "Plataforma freelance",
    summary: "Aplicaciones de escritorio, móviles y web para clientes internacionales.",
    highlights: [
      "Entregué aplicaciones de escritorio, apps móviles y funcionalidades web para clientes internacionales.",
      "Completé 15 proyectos con las mejores calificaciones, con excelentes reseñas y recomendaciones.",
    ],
    stack: [],
    color: "#f59e0b",
  },
];
