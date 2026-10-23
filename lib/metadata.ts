import { getYearsOfExperience } from "@/constants/experience";

export const SITE_URL = "https://www.ediloaz.com";

export const HOME_TITLE = "Edisson López — Desarrollador Full Stack Senior (React) · Costa Rica";

export const HOME_DESCRIPTION = `Desarrollador Full Stack Senior con ${getYearsOfExperience()}+ años en empresas de software: React, Next.js y TypeScript en el frontend; C#/.NET, Node.js y AWS en el backend. Costa Rica, remoto.`;

/**
 * Imagen generada por app/opengraph-image.tsx. Next no hereda las imágenes del layout
 * cuando una página define su propio `openGraph`, así que esas páginas la referencian.
 */
export const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Edisson López — Desarrollador Full Stack Senior (React, Next.js, .NET)",
};
