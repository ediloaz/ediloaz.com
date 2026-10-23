import Script from "next/script";

// AdSense solo se carga en el blog: el resto del sitio es el portafolio y no lleva anuncios.
export default function BlogLayout({ children }: { children: React.ReactNode }) {
  const adsenseClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

  return (
    <>
      {adsenseClientId && (
        <Script
          id="adsense-init"
          strategy="afterInteractive"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClientId}`}
          crossOrigin="anonymous"
        />
      )}
      {children}
    </>
  );
}
