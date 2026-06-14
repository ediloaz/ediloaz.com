import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ad 01 · Ediloaz",
  description: "Creativo publicitario Ediloaz — Tu competencia ya tiene web.",
  robots: { index: false, follow: false },
};

export default function Ad01Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        background: "#050a30",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
}
