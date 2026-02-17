export type TechnologyMastery =
  | "domino"
  | "llegue_a_usar"
  | "llegue_a_dominar";

export type Technology = {
  name: string;
  description: string;
  category: TechnologyCategory;
  icon: string;
  mastery: TechnologyMastery;
};

export type TechnologyCategory =
  | "Frontend"
  | "Backend"
  | "Bases de datos"
  | "DevOps y cloud"
  | "Control de versiones"
  | "Herramientas de trabajo"
  | "Metodologías y calidad";

/** Opciones de nivel de dominio: etiqueta, icono y texto para tooltip/leyenda */
export const MASTERY_OPTIONS: Record<
  TechnologyMastery,
  { label: string; icon: string; tooltip: string }
> = {
  domino: {
    label: "Domino",
    icon: "✓",
    tooltip: "Actualmente domino esta tecnología",
  },
  llegue_a_dominar: {
    label: "La llegué a dominar",
    icon: "◐",
    tooltip: "La llegué a dominar en el pasado",
  },
  llegue_a_usar: {
    label: "La llegué a usar",
    icon: "○",
    tooltip: "La llegué a usar o ver en proyectos",
  },
};

/** Orden en que se muestra la leyenda de dominio en la UI */
export const MASTERY_ORDER: TechnologyMastery[] = [
  "domino",
  "llegue_a_dominar",
  "llegue_a_usar",
];

/** Orden en que se muestran las categorías en la UI */
export const TECHNOLOGY_CATEGORY_ORDER: TechnologyCategory[] = [
  "Frontend",
  "Backend",
  "Bases de datos",
  "DevOps y cloud",
  "Control de versiones",
  "Herramientas de trabajo",
  "Metodologías y calidad",
];

export const technologies: Technology[] = [
  // Frontend
  {
    name: "React",
    description: "Librería de JavaScript para interfaces de usuario",
    category: "Frontend",
    icon: "⚛️",
    mastery: "domino",
  },
  {
    name: "JavaScript",
    description: "Lenguaje de programación para la web",
    category: "Frontend",
    icon: "🟨",
    mastery: "domino",
  },
  {
    name: "React Native",
    description: "Framework para aplicaciones móviles multiplataforma",
    category: "Frontend",
    icon: "📱",
    mastery: "llegue_a_usar",
  },
  {
    name: "Next.js",
    description: "Framework de React con SSR y SSG",
    category: "Frontend",
    icon: "▲",
    mastery: "llegue_a_dominar",
  },
  {
    name: "Redux",
    description: "Gestión de estado para aplicaciones JavaScript",
    category: "Frontend",
    icon: "📦",
    mastery: "llegue_a_dominar",
  },
  {
    name: "TypeScript",
    description: "Superset de JavaScript con tipado estático",
    category: "Frontend",
    icon: "🔷",
    mastery: "llegue_a_dominar",
  },
  {
    name: "HTML5",
    description: "Lenguaje de marcado para la web",
    category: "Frontend",
    icon: "🌐",
    mastery: "domino",
  },
  {
    name: "CSS3",
    description: "Estilos y diseño responsive",
    category: "Frontend",
    icon: "🎨",
    mastery: "domino",
  },
  {
    name: "SASS",
    description: "Preprocesador CSS con variables y anidación",
    category: "Frontend",
    icon: "💅",
    mastery: "llegue_a_usar",
  },
  {
    name: "Bootstrap",
    description: "Framework CSS para diseño responsive",
    category: "Frontend",
    icon: "🅱️",
    mastery: "llegue_a_usar",
  },
  {
    name: "Webpack",
    description: "Empaquetador de módulos para frontend",
    category: "Frontend",
    icon: "📦",
    mastery: "llegue_a_usar",
  },
  // Backend
  {
    name: "Node.js",
    description: "Runtime de JavaScript en el servidor",
    category: "Backend",
    icon: "🟢",
    mastery: "llegue_a_dominar",
  },
  {
    name: "C#",
    description: "Lenguaje de programación de Microsoft",
    category: "Backend",
    icon: "🔵",
    mastery: "domino",
  },
  {
    name: ".NET",
    description: "Plataforma de desarrollo de Microsoft",
    category: "Backend",
    icon: "🟣",
    mastery: "llegue_a_dominar",
  },
  {
    name: "ASP.NET",
    description: "Framework web para .NET",
    category: "Backend",
    icon: "🌐",
    mastery: "llegue_a_dominar",
  },
  {
    name: "Python",
    description: "Lenguaje de programación multipropósito",
    category: "Backend",
    icon: "🐍",
    mastery: "domino",
  },
  {
    name: "Flask",
    description: "Framework web ligero de Python",
    category: "Backend",
    icon: "🧪",
    mastery: "llegue_a_dominar",
  },
  {
    name: "PHP",
    description: "Lenguaje para desarrollo web del lado del servidor",
    category: "Backend",
    icon: "🐘",
    mastery: "llegue_a_usar",
  },
  {
    name: "WordPress",
    description: "CMS basado en PHP",
    category: "Backend",
    icon: "📝",
    mastery: "llegue_a_usar",
  },
  {
    name: "REST API",
    description: "Arquitectura para APIs basada en HTTP",
    category: "Backend",
    icon: "🔌",
    mastery: "domino",
  },
  {
    name: "GraphQL",
    description: "Lenguaje de consultas para APIs",
    category: "Backend",
    icon: "📊",
    mastery: "llegue_a_dominar",
  },
  {
    name: "SOAP",
    description: "Protocolo para servicios web",
    category: "Backend",
    icon: "📬",
    mastery: "llegue_a_usar",
  },
  {
    name: "Microservicios",
    description: "Arquitectura de sistemas en servicios independientes",
    category: "Backend",
    icon: "🧩",
    mastery: "domino",
  },
  {
    name: "JSON",
    description: "Formato de intercambio de datos",
    category: "Backend",
    icon: "📄",
    mastery: "domino",
  },
  {
    name: "XML",
    description: "Lenguaje de marcado para datos",
    category: "Backend",
    icon: "📋",
    mastery: "domino",
  },
  // Bases de datos
  {
    name: "SQL Server",
    description: "Sistema de bases de datos relacional de Microsoft",
    category: "Bases de datos",
    icon: "🗄️",
    mastery: "domino",
  },
  {
    name: "PostgreSQL",
    description: "Base de datos relacional open source",
    category: "Bases de datos",
    icon: "🐘",
    mastery: "domino",
  },
  {
    name: "MySQL",
    description: "Base de datos relacional muy utilizada",
    category: "Bases de datos",
    icon: "🐬",
    mastery: "domino",
  },
  {
    name: "MongoDB",
    description: "Base de datos NoSQL orientada a documentos",
    category: "Bases de datos",
    icon: "🍃",
    mastery: "llegue_a_dominar",
  },
  // DevOps y cloud
  {
    name: "AWS",
    description: "Cloud: S3, EC2, Lambda, Cognito",
    category: "DevOps y cloud",
    icon: "☁️",
    mastery: "domino",
  },
  {
    name: "Docker",
    description: "Contenedores para empaquetar y desplegar aplicaciones",
    category: "DevOps y cloud",
    icon: "🐳",
    mastery: "llegue_a_dominar",
  },
  {
    name: "Jenkins",
    description: "Automatización de integración y despliegue (CI/CD)",
    category: "DevOps y cloud",
    icon: "🔧",
    mastery: "llegue_a_usar",
  },
  // Control de versiones
  {
    name: "Git",
    description: "Sistema de control de versiones distribuido",
    category: "Control de versiones",
    icon: "📂",
    mastery: "domino",
  },
  {
    name: "GitHub",
    description: "Plataforma de hospedaje y colaboración con Git",
    category: "Control de versiones",
    icon: "🐙",
    mastery: "domino",
  },
  {
    name: "Bitbucket",
    description: "Repositorios Git y Mercurial en la nube",
    category: "Control de versiones",
    icon: "🪣",
    mastery: "domino",
  },
  // Herramientas de trabajo
  {
    name: "JIRA",
    description: "Gestión de proyectos y seguimiento de incidencias",
    category: "Herramientas de trabajo",
    icon: "📋",
    mastery: "domino",
  },
  {
    name: "Trello",
    description: "Tableros Kanban para organización de tareas",
    category: "Herramientas de trabajo",
    icon: "📌",
    mastery: "domino",
  },
  // Metodologías y calidad
  {
    name: "Testing",
    description: "Pruebas unitarias, integración y E2E",
    category: "Metodologías y calidad",
    icon: "✅",
    mastery: "llegue_a_usar",
  },
  {
    name: "WCAG",
    description: "Accesibilidad web (estándares)",
    category: "Metodologías y calidad",
    icon: "♿",
    mastery: "llegue_a_usar",
  },
  {
    name: "Scrum",
    description: "Metodología ágil de desarrollo",
    category: "Metodologías y calidad",
    icon: "🏃",
    mastery: "domino",
  },
  {
    name: "Kanban",
    description: "Gestión visual del flujo de trabajo",
    category: "Metodologías y calidad",
    icon: "📊",
    mastery: "domino",
  },
];
