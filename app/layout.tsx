import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ediloaz.com"),
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
    url: "https://ediloaz.com",
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
  alternates: { canonical: "https://ediloaz.com" },
  robots: { index: true, follow: true },
  manifest: "/manifest.json",
  themeColor: "#000000",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: "cover",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "ediloaz — Edisson López",
    // startupImage: [{ url: "/apple-splash-1170-2532.png", media: "(device-width: 390px)" }], // opcional
  },
  authors: [{ name: "Edisson López", url: "https://ediloaz.com" }],
  creator: "Edisson López",
  publisher: "Edisson López",
  applicationName: "ediloaz",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
