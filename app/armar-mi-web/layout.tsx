import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arma tu Sitio Web a tu Medida | Ediloaz – Costa Rica",
  description:
    "Armá tu sitio web profesional en Costa Rica. Paga solo por lo que necesitas, sin suscripciones mensuales. Cotizá al instante por WhatsApp desde ₡50,000.",
  openGraph: {
    title: "Arma tu Sitio Web Profesional en Costa Rica | Ediloaz",
    description:
      "Configurá tu web modular: landing page, dominio, páginas extra y funcionalidades. Presupuesto instantáneo por WhatsApp.",
    type: "website",
    url: "https://www.ediloaz.com/armar-mi-web",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arma tu Sitio Web a tu Medida | Ediloaz",
    description:
      "Paga solo por lo que necesitas. Cotizá tu web profesional al instante por WhatsApp.",
  },
};

export default function ArmarMiWebLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
