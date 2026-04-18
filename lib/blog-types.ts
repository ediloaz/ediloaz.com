import type { ReactNode } from "react";

export type BlogCategory =
  | "arquitectura"
  | "frontend"
  | "cultura"
  | "producto"
  | "carrera"
  | "cloud";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  /** Meta description SEO (~150–160 caracteres ideal; puede extenderse con keywords naturales) */
  seoDescription: string;
  /** Palabras clave para SEO on-page y consistencia temática */
  keywords?: string[];
  publishDate: string;
  category: BlogCategory;
  tags: string[];
  content: ReactNode;
  /** Tiempo estimado de lectura en minutos */
  readingTime: number;
};

export const blogCategories: Record<BlogCategory, string> = {
  arquitectura: "Arquitectura & sistemas",
  frontend: "Frontend & UX",
  cultura: "Cultura de equipo",
  producto: "Producto & Legal-Tech",
  carrera: "Carrera & aprendizaje",
  cloud: "Cloud & infraestructura",
};
