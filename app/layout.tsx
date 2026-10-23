import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import CursorSpotlight from "@/components/cursor-spotlight";
import { WhatsAppLeadTracking } from "@/components/whatsapp-lead-tracking";
import Script from "next/script";
import { getYearsOfExperience } from "@/constants/experience";
import { HOME_DESCRIPTION, HOME_TITLE, SITE_URL } from "@/lib/metadata";

const FACEBOOK_PIXEL_ID = "859892180038418";

const facebookPixelScript = `
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${FACEBOOK_PIXEL_ID}');
fbq('track', 'PageView');
`;

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: "%s · Edisson López",
  },
  description: HOME_DESCRIPTION,
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
  // La imagen OG sale de app/opengraph-image.tsx; el canonical lo define cada página
  // (si se pusiera acá, todas las páginas heredarían el del inicio).
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "ediloaz",
    locale: "es_CR",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    site: "@ediloaz",
    creator: "@ediloaz",
  },
  robots: { index: true, follow: true },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Edisson López",
    // startupImage: [{ url: "/apple-splash-1170-2532.png", media: "(device-width: 390px)" }], // opcional
  },
  authors: [{ name: "Edisson López", url: "https://www.ediloaz.com" }],
  creator: "Edisson López",
  publisher: "Edisson López",
  applicationName: "ediloaz",
  other: {
    "google-adsense-account": "ca-pub-7409361152440830",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: facebookPixelScript }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
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
                  image: "https://www.ediloaz.com/images/profile-photo.png",
                  email: "mailto:ediloaz@gmail.com",
                  jobTitle: "Desarrollador Full Stack Senior",
                  description:
                    `Edisson López es un desarrollador Full Stack Senior en Costa Rica con ${getYearsOfExperience()}+ años de experiencia, especializado en React, Next.js, TypeScript y .NET.`,
                  worksFor: {
                    "@type": "Organization",
                    name: "Ibylit"
                  },
                  alumniOf: {
                    "@type": "CollegeOrUniversity",
                    name: "Instituto Tecnológico de Costa Rica",
                    sameAs: "https://www.tec.ac.cr"
                  },
                  hasCredential: [
                    {
                      "@type": "EducationalOccupationalCredential",
                      name: "AWS Certified AI Practitioner",
                      credentialCategory: "certification",
                      url: "https://www.credly.com/badges/622f33e9-ecbe-47cc-87c4-298faa32953f",
                      recognizedBy: { "@type": "Organization", name: "Amazon Web Services" }
                    },
                    {
                      "@type": "EducationalOccupationalCredential",
                      name: "AWS Certified Cloud Practitioner",
                      credentialCategory: "certification",
                      recognizedBy: { "@type": "Organization", name: "Amazon Web Services" }
                    }
                  ],
                  knowsLanguage: ["es", "en"],
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
                    "Desarrollo frontend",
                    "Full Stack Development",
                    "React",
                    "Next.js",
                    "TypeScript",
                    "JavaScript",
                    "Node.js",
                    "C#",
                    ".NET",
                    "ASP.NET Core",
                    "AWS",
                    "Inteligencia artificial aplicada",
                    "Arquitectura de software",
                    "APIs REST",
                    "SQL Server"
                  ],
                  sameAs: [
                    "https://www.linkedin.com/in/ediloaz",
                    "https://github.com/ediloaz",
                    "https://www.credly.com/users/ediloaz",
                    "https://medium.com/@ediloaz",
                    "https://dev.to/ediloaz",
                    "https://twitter.com/ediloaz"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.ediloaz.com/#website",
                  url: "https://www.ediloaz.com",
                  name: "Edisson López — Desarrollador Full Stack Senior",
                  description:
                    "Portafolio y sitio personal de Edisson López, desarrollador Full Stack Senior en Costa Rica especializado en React, Next.js y .NET.",
                  inLanguage: "es-CR",
                  publisher: {
                    "@id": "https://www.ediloaz.com/#person"
                  }
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
        <ThemeProvider>
          <CursorSpotlight />
          <WhatsAppLeadTracking />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
