import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios Adicionales | Ediloaz – Branding, SEO Local y Correo Corporativo",
  description:
    "Complementá tu web con identidad visual profesional, posicionamiento en Google Maps y correo corporativo. Servicios rápidos desde ₡25,000.",
  openGraph: {
    title: "Servicios Adicionales | Ediloaz",
    description:
      "Kit de Identidad Visual, Posicionamiento Google Maps y Correo Corporativo para tu negocio.",
    type: "website",
    url: "https://www.ediloaz.com/servicios/adicionales",
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios Adicionales | Ediloaz",
    description: "Branding, SEO local y correo profesional desde ₡25,000.",
  },
};

export default function AdicionalesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
