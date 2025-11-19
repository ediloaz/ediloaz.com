import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const themeInitScript = `
(function() {
  try {
    const storageKey = "ediloaz-theme";
    const prefersDarkQuery = "(prefers-color-scheme: dark)";
    const root = document.documentElement;
    const stored = window.localStorage.getItem(storageKey);
    const prefersDark = window.matchMedia(prefersDarkQuery).matches;
    const theme = stored === "light" || stored === "dark" ? stored : (prefersDark ? "dark" : "light");
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    root.classList.toggle("dark", theme === "dark");
  } catch (error) {
    console.warn("No se pudo inicializar el tema", error);
  }
})();
`;

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ediloaz.com"),
  title: {
    default: "ediloaz — Edisson López",
    template: "%s · ediloaz",
  },
  description: "Edisson López — Desarrollador Full-Stack",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: "https://www.ediloaz.com",
    title: "ediloaz — Edisson López",
    description: "Portafolio, proyectos y contacto.",
    images: [
      {
        url: "/og.png",
        width:  512, // Recommended: 1200x630
        height: 512,
        alt: "ediloaz — Portafolio de Edisson López",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ediloaz — Edisson López",
    description: "Portafolio, proyectos y contacto.",
    images: ["/og.png"],
    site: "@ediloaz",
    creator: "@ediloaz",
  },
  alternates: { canonical: "https://www.ediloaz.com" },
  robots: { index: true, follow: true },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "ediloaz — Edisson López",
    // startupImage: [{ url: "/apple-splash-1170-2532.png", media: "(device-width: 390px)" }], // opcional
  },
  authors: [{ name: "Edisson López", url: "https://www.ediloaz.com" }],
  creator: "Edisson López",
  publisher: "Edisson López",
  applicationName: "ediloaz",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://www.ediloaz.com/#person",
                  name: "Edisson López",
                  alternateName: "ediloaz",
                  url: "https://www.ediloaz.com",
                  image: "https://www.ediloaz.com/og.png",
                  jobTitle: "Full Stack Developer",
                  description:
                    "Edisson López es un desarrollador Full Stack en Costa Rica especializado en React, Next.js, .NET y arquitecturas modernas.",
                  worksFor: {
                    "@type": "Organization",
                    name: "Ibylit"
                  },
                  nationality: {
                    "@type": "Country",
                    name: "Costa Rica"
                  },
                  homeLocation: {
                    "@type": "Place",
                    address: {
                      "@type": "PostalAddress",
                      addressCountry: "CR",
                      addressLocality: "Costa Rica"
                    }
                  },
                  knowsAbout: [
                    "Desarrollo web",
                    "Full Stack Development",
                    "React",
                    "Next.js",
                    ".NET",
                    "Arquitectura de software",
                    "APIs REST",
                    "SQL Server"
                  ],
                  sameAs: [
                    "https://www.linkedin.com/in/ediloaz",
                    "https://github.com/ediloaz",
                    "https://medium.com/@ediloaz",
                    "https://dev.to/ediloaz",
                    "https://twitter.com/ediloaz"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.ediloaz.com/#website",
                  url: "https://www.ediloaz.com",
                  name: "ediloaz — Edisson López",
                  description:
                    "Portafolio y sitio personal de Edisson López, desarrollador Full Stack en Costa Rica especializado en React, Next.js y .NET.",
                  inLanguage: "es-CR",
                  publisher: {
                    "@id": "https://www.ediloaz.com/#person"
                  }
                },
                {
                  "@type": "WebPage",
                  "@id": "https://www.ediloaz.com/#webpage",
                  url: "https://www.ediloaz.com",
                  name: "Inicio — ediloaz",
                  isPartOf: {
                    "@id": "https://www.ediloaz.com/#website"
                  },
                  about: {
                    "@id": "https://www.ediloaz.com/#person"
                  },
                  description:
                    "Página principal del portafolio de Edisson López, desarrollador Full Stack en Costa Rica.",
                  inLanguage: "es-CR"
                }
              ]
            })
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: themeInitScript,
          }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
