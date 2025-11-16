export interface Project {
  slug: string;
  name: string;
  shortDescription: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  imageUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "world-flags-quiz",
    name: "World Flags Quiz",
    shortDescription: "Videojuego web educativo para adivinar el país de una bandera",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/ediloaz/world-flags-quiz",
    demoUrl: "https://world-flags-quiz.ediloaz.com",
    imageUrl: "/.og.png",
  },
  {
    slug: "plataforma-de-registro-y-listado-de-usuarios",
    name: "Plataforma de registro y listado de usuarios",
    shortDescription: "Es una aplicación web para registro y listado de usuarios, te permite crear, editar y eliminar usuarios",
    technologies: ["React", "Next.js", "TypeScript"],
    githubUrl: "https://github.com/ediloaz/Plataforma-de-registro-y-listado-de-usuarios",
    demoUrl: "https://plataforma-de-registro-y-listado-de-usuarios.vercel.app/",
    imageUrl: "/.og.png",
  },
  {
    slug: "nutri-counter",
    name: "Nutri Counter",
    shortDescription: "Es una aplicación web para tracker alimentos macros, te calcula automáticamente las calorías y te lleva un registro e historial",
    technologies: ["React", "Next.js", "TypeScript"],
    githubUrl: "https://github.com/ediloaz/nutri-counter",
    demoUrl: "https://nutri-counter.vercel.app/",
    imageUrl: "/.og.png",
  },
  {
    slug: "tienda-de-perfumes",
    name: "Tienda de perfumes",
    shortDescription: "Es una aplicación web para tienda de perfumes, te permite ver los perfumes y agregarlos al carrito",
    technologies: ["React", "Next.js", "TypeScript"],
    githubUrl: "https://github.com/ediloaz/nextjs-fragrance-hub",
    demoUrl: "https://react-market-pi.vercel.app/",
    imageUrl: "/.og.png",
  },
];

export const getProjectBySlug = (slug: string) =>
  PROJECTS.find((project) => project.slug === slug);

