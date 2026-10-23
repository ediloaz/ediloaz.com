import { Metadata } from "next";
import { OG_IMAGE } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "CV — Desarrollador Full Stack Senior",
  description:
    "CV de Edisson López, Desarrollador Full Stack Senior con experiencia en Ibylit, Advision Development y Data GIS. React, Next.js, TypeScript, C#/.NET, AWS y más.",
  keywords: [
    "CV",
    "curriculum vitae",
    "Edisson López",
    "desarrollador full stack",
    "React",
    "Next.js",
    ".NET",
    "C#",
    "experiencia profesional",
    "certificaciones",
  ],
  openGraph: {
    title: "CV · ediloaz",
    description:
      "CV completo de Edisson López, Desarrollador Full Stack con experiencia en React, Next.js, .NET y más.",
    url: "https://www.ediloaz.com/cv",
    type: "profile",
    siteName: "ediloaz",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary",
    title: "CV · ediloaz",
    description:
      "CV completo de Edisson López, Desarrollador Full Stack.",
    creator: "@ediloaz",
  },
  alternates: {
    canonical: "https://www.ediloaz.com/cv",
  },
};

export default function CVLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

