import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV",
  description:
    "CV completo de Edisson López, Desarrollador Full Stack. Experiencia profesional, educación, certificaciones y habilidades técnicas en React, Next.js, .NET, C# y más.",
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

