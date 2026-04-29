import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios Web | Ediloaz – Sitios que venden para tu negocio",
  description:
    "Construimos máquinas de venta digitales para tu negocio. Landing pages, sitios corporativos y webs con automatizaciones. Entrega en 1-2 semanas desde ₡80,000.",
  openGraph: {
    title: "Servicios Web | Ediloaz",
    description:
      "Sitios web profesionales, ultrarrápidos y diseñados para convertir. Landing pages desde ₡80,000.",
    type: "website",
    url: "https://www.ediloaz.com/servicios",
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios Web | Ediloaz",
    description: "Sitios web profesionales para tu negocio. Entrega en 1-2 semanas.",
  },
};

export default function ServiciosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
