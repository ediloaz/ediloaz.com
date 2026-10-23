import type { NextConfig } from "next";

// Posts generados desde una plantilla (mismo cuerpo en todos), retirados en oct 2026.
// Redirigen para no romper enlaces viejos; Google los irá sacando del índice.
const RETIRED_BLOG_POSTS = [
  "arquitectura-antifragil-para-equipos-remotos-hibridos",
  "estrategia-seo-tecnico-nextjs-para-blogs-especializados",
  "frontend-accesible-sin-perder-identidad-de-marca",
  "gobernanza-de-datos-producto-para-startups-latam",
  "cloud-cost-guardrails-finops-practico-para-pymes",
  "carrera-tecnica-como-evitar-estancarte-despues-de-senior",
  "arquitectura-event-driven-para-productos-legales-digitales",
  "sistemas-de-diseno-vivos-para-equipos-pequenos",
  "documentacion-de-arquitectura-que-si-se-actualiza",
  "roadmaps-tecnicos-que-conectan-con-negocio",
  "dx-para-plugins-internos-y-herramientas-de-equipo",
  "frontend-performance-en-proyectos-de-contenido-largo",
  "pruebas-end-to-end-con-enfoque-de-riesgo-negocio",
  "microfrontends-con-sentido-cuando-si-y-cuando-no",
  "cloud-observabilidad-pragmatica-para-equipo-sin-sre",
  "habilidades-de-comunicacion-tecnica-para-ascender",
  "automatizacion-editorial-para-blog-tecnico-sostenible",
  "arquitectura-modular-monolito-bien-hecho",
  "ux-writing-para-productos-tecnicos-de-alta-complejidad",
  "cultura-de-postmortems-sin-culpas-con-aprendizaje-real",
  "gestion-de-deuda-tecnica-con-metrica-y-negociacion",
  "seo-semantic-clusters-para-temas-tecnicos-nicho",
  "cloud-disaster-recovery-realista-para-saas-pequeno",
  "mentoria-tecnica-para-juniors-sin-microgestion",
  "arquitectura-de-apis-claras-para-consumidores-internos",
  "frontend-estado-global-sin-caer-en-sobrecomplejidad",
  "estrategia-de-contenido-tecnico-para-marca-personal",
  "observabilidad-de-negocio-con-eventos-del-producto",
  "cloud-seguridad-practica-para-apps-de-negocio",
  "feedback-tecnico-que-eleva-la-madurez-del-equipo",
  "arquitectura-para-ciclos-rapidos-de-experimentos-producto",
];

// Retirados que sí tienen un reemplazo directo
const REPLACED_BLOG_POSTS: Record<string, string> = {
  "frontend-formularios-complejos-con-buena-experiencia": "formularios-react-19-server-actions-useactionstate",
};

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "ediloaz.com",
          },
        ],
        destination: "https://www.ediloaz.com/:path*",
        permanent: true,
      },
      ...Object.entries(REPLACED_BLOG_POSTS).map(([slug, replacement]) => ({
        source: `/blog/${slug}`,
        destination: `/blog/${replacement}`,
        permanent: true,
      })),
      ...RETIRED_BLOG_POSTS.map((slug) => ({
        source: `/blog/${slug}`,
        destination: "/blog",
        permanent: true,
      })),
    ];
  },
  async headers() {
    return [
      {
        source: "/_next/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
      {
        source: "/api/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
