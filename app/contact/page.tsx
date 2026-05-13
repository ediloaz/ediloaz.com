import { Metadata } from "next";
import PageLayout from "@/components/page-layout";
import AdSenseBanner from "@/components/adsense/AdSenseBanner";
import ContactClient from "@/components/contact-client";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta con Edisson López para proyectos de desarrollo web, colaboraciones o consultoría. Email, LinkedIn, GitHub y más formas de contacto.",
  keywords: [
    "contacto",
    "Edisson López",
    "desarrollador full stack",
    "contratar desarrollador",
    "colaboración",
    "consultoría",
  ],
  openGraph: {
    title: "Contacto · ediloaz",
    description:
      "Contacta con Edisson López para proyectos de desarrollo web, colaboraciones o consultoría.",
    url: "https://www.ediloaz.com/contact",
    type: "website",
    siteName: "ediloaz",
  },
  twitter: {
    card: "summary",
    title: "Contacto · ediloaz",
    description:
      "Contacta con Edisson López para proyectos de desarrollo web.",
    creator: "@ediloaz",
  },
  alternates: {
    canonical: "https://www.ediloaz.com/contact",
  },
};

export default function Contact() {
  return (
    <PageLayout>
      {process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID &&
        process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG_POST && (
          <div className="px-4 pt-8">
            <AdSenseBanner
              clientId={process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}
              slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG_POST}
            />
          </div>
        )}
      <ContactClient />
    </PageLayout>
  );
}
