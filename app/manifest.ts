import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Edisson López — Desarrollador Full Stack Senior",
    short_name: "ediloaz",
    description: "Portafolio de Edisson López, desarrollador Full Stack Senior (React, Next.js, .NET).",
    start_url: "/",
    display: "standalone",
    background_color: "#080b12",
    theme_color: "#080b12",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
