export type TechnologyDetails = {
  tecnologia: string;
  usadaPara: string;
};

export const technologyDetails: Record<string, TechnologyDetails> = {
  React: {
    tecnologia: "Biblioteca para construir interfaces con componentes reutilizables.",
    usadaPara: "Crear UIs modernas, escalables y mantenibles en web.",
  },
  JavaScript: {
    tecnologia: "Lenguaje principal de la web para lógica en cliente y servidor.",
    usadaPara: "Agregar interactividad, validaciones y comportamiento dinámico.",
  },
  "React Native": {
    tecnologia: "Framework basado en React para apps móviles multiplataforma.",
    usadaPara: "Desarrollar apps iOS/Android con una sola base de código.",
  },
  "Next.js": {
    tecnologia: "Framework de React orientado a rendimiento y SEO.",
    usadaPara: "Construir sitios y apps full-stack con render híbrido.",
  },
  Redux: {
    tecnologia: "Patrón y librería para gestión de estado global predecible.",
    usadaPara: "Centralizar estado complejo en aplicaciones grandes.",
  },
  TypeScript: {
    tecnologia: "Superset tipado de JavaScript que mejora robustez.",
    usadaPara: "Reducir errores en desarrollo y mantener código escalable.",
  },
  HTML5: {
    tecnologia: "Lenguaje de marcado semántico para estructurar contenido web.",
    usadaPara: "Definir la base de páginas accesibles y bien organizadas.",
  },
  CSS3: {
    tecnologia: "Lenguaje de estilos para diseño visual y responsive.",
    usadaPara: "Maquetar interfaces atractivas y adaptables a dispositivos.",
  },
  SASS: {
    tecnologia: "Preprocesador CSS con variables, mixins y módulos.",
    usadaPara: "Organizar estilos complejos con mayor productividad.",
  },
  Bootstrap: {
    tecnologia: "Framework CSS con componentes y grilla listos.",
    usadaPara: "Acelerar prototipos y layouts responsive consistentes.",
  },
  Webpack: {
    tecnologia: "Empaquetador de módulos y recursos frontend.",
    usadaPara: "Optimizar bundles, assets y rendimiento en producción.",
  },
  "Node.js": {
    tecnologia: "Runtime de JavaScript para ejecutar código en servidor.",
    usadaPara: "Crear APIs, servicios y herramientas backend.",
  },
  "C#": {
    tecnologia: "Lenguaje multipropósito del ecosistema .NET.",
    usadaPara: "Desarrollar APIs, lógica de negocio y aplicaciones empresariales.",
  },
  ".NET": {
    tecnologia: "Plataforma para construir soluciones backend robustas.",
    usadaPara: "Implementar servicios, APIs y aplicaciones de alto rendimiento.",
  },
  "ASP.NET": {
    tecnologia: "Framework web de .NET para backend y APIs.",
    usadaPara: "Crear aplicaciones web seguras y mantenibles.",
  },
  Python: {
    tecnologia: "Lenguaje versátil y legible para múltiples dominios.",
    usadaPara: "Automatizar procesos y desarrollar servicios de backend.",
  },
  Flask: {
    tecnologia: "Microframework de Python minimalista y flexible.",
    usadaPara: "Levantar APIs livianas y servicios rápidamente.",
  },
  PHP: {
    tecnologia: "Lenguaje backend ampliamente usado en web.",
    usadaPara: "Construir sitios dinámicos y lógica de servidor.",
  },
  WordPress: {
    tecnologia: "CMS para gestión y publicación de contenido web.",
    usadaPara: "Crear sitios administrables con rápida salida a producción.",
  },
  "REST API": {
    tecnologia: "Estilo arquitectónico para servicios HTTP.",
    usadaPara: "Comunicar frontend y backend de forma estándar.",
  },
  GraphQL: {
    tecnologia: "Lenguaje de consulta para APIs orientado a esquemas.",
    usadaPara: "Pedir exactamente los datos necesarios al backend.",
  },
  SOAP: {
    tecnologia: "Protocolo de servicios web basado en XML.",
    usadaPara: "Integrar sistemas legacy o corporativos.",
  },
  Microservicios: {
    tecnologia: "Arquitectura distribuida en servicios independientes.",
    usadaPara: "Escalar sistemas por dominio y desplegar con autonomía.",
  },
  JSON: {
    tecnologia: "Formato ligero de intercambio de datos estructurados.",
    usadaPara: "Transportar información entre APIs y aplicaciones.",
  },
  XML: {
    tecnologia: "Formato de marcado estructurado para datos.",
    usadaPara: "Integrar servicios y documentos con reglas formales.",
  },
  "SQL Server": {
    tecnologia: "Motor de base de datos relacional de Microsoft.",
    usadaPara: "Persistir datos transaccionales con consistencia.",
  },
  PostgreSQL: {
    tecnologia: "Base de datos relacional avanzada y open source.",
    usadaPara: "Modelar datos robustos con consultas complejas.",
  },
  MySQL: {
    tecnologia: "Base de datos relacional popular en aplicaciones web.",
    usadaPara: "Gestionar información estructurada de forma eficiente.",
  },
  MongoDB: {
    tecnologia: "Base NoSQL orientada a documentos JSON.",
    usadaPara: "Guardar datos flexibles con alta velocidad de iteración.",
  },
  AWS: {
    tecnologia: "Plataforma cloud con servicios de infraestructura.",
    usadaPara: "Desplegar, escalar y operar aplicaciones en la nube.",
  },
  Docker: {
    tecnologia: "Contenedores para empaquetar software y dependencias.",
    usadaPara: "Estandarizar entornos y simplificar despliegues.",
  },
  Jenkins: {
    tecnologia: "Servidor de automatización para CI/CD.",
    usadaPara: "Ejecutar builds, tests y pipelines de despliegue.",
  },
  Git: {
    tecnologia: "Sistema de control de versiones distribuido.",
    usadaPara: "Versionar código y colaborar con ramas de trabajo.",
  },
  GitHub: {
    tecnologia: "Plataforma para hospedar repositorios Git.",
    usadaPara: "Revisar código, gestionar PRs y colaborar en equipo.",
  },
  Bitbucket: {
    tecnologia: "Plataforma de repositorios y colaboración de código.",
    usadaPara: "Administrar repositorios privados y flujos de revisión.",
  },
  JIRA: {
    tecnologia: "Herramienta de gestión de proyectos e incidencias.",
    usadaPara: "Planificar sprints y seguimiento de trabajo.",
  },
  Trello: {
    tecnologia: "Tableros Kanban para organización visual de tareas.",
    usadaPara: "Coordinar actividades y estado de entregables.",
  },
  Testing: {
    tecnologia: "Conjunto de prácticas para validar calidad de software.",
    usadaPara: "Detectar regresiones y asegurar comportamiento esperado.",
  },
  WCAG: {
    tecnologia: "Estándares internacionales de accesibilidad web.",
    usadaPara: "Diseñar interfaces inclusivas y compatibles.",
  },
  Scrum: {
    tecnologia: "Marco ágil de trabajo iterativo e incremental.",
    usadaPara: "Entregar valor continuo y mejorar colaboración.",
  },
  Kanban: {
    tecnologia: "Método visual para gestionar flujo de trabajo.",
    usadaPara: "Optimizar capacidad del equipo y tiempos de entrega.",
  },
};
