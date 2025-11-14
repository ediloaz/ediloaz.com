import { ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
  showFooter?: boolean;
}

export default function PageLayout({
  children,
  className = "",
  showFooter = true,
}: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-black">
      <Navbar />
      <main className={`pt-20 ${className}`}>
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
}

