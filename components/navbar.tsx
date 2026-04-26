"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/about-me", label: "Sobre mí" },
  { href: "/projects", label: "Proyectos" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contacto" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass shadow-sm"
          : "bg-transparent"
      }`}
      style={scrolled ? { borderBottom: "1px solid var(--border)" } : {}}
    >
      <div className="mx-auto max-w-6xl px-5 py-3.5">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 shrink-0"
            aria-label="Inicio - Edisson López"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center text-white text-xs font-bold tracking-tight shadow-md group-hover:shadow-blue-500/30 transition-shadow duration-300">
              EL
            </div>
            <span
              className="font-semibold text-sm tracking-tight hidden sm:block transition-colors duration-200"
              style={{ color: "var(--fg)" }}
            >
              Edisson López
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className="relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-150"
                  style={{
                    color: isActive ? "var(--accent)" : "var(--fg-muted)",
                    background: isActive ? "var(--accent-glow)" : "transparent",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.color = "var(--fg)";
                      (e.currentTarget as HTMLElement).style.background = "var(--border)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.color = "var(--fg-muted)";
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                    }
                  }}
                >
                  {label}
                  {isActive && (
                    <span
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-3 h-0.5 rounded-full"
                      style={{ background: "var(--accent)" }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* <Link
              href="/cv"
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg transition-all duration-150 shadow-sm hover:opacity-80"
              style={{ background: "var(--fg)", color: "var(--bg)" }}
              aria-label="Ver curriculum vitae"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              Ver CV
            </Link> */}

            <ThemeToggle />

            {/* Hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex flex-col justify-center gap-[5px] p-2 rounded-lg transition-colors duration-150"
              style={{ background: isMenuOpen ? "var(--border)" : "transparent" }}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMenuOpen}
            >
              <span
                className="block h-px w-5 rounded-full origin-center transition-all duration-300"
                style={{
                  background: "var(--fg)",
                  transform: isMenuOpen ? "rotate(45deg) translateY(7px)" : "none",
                }}
              />
              <span
                className="block h-px rounded-full transition-all duration-300"
                style={{
                  background: "var(--fg)",
                  width: isMenuOpen ? "0" : "20px",
                  opacity: isMenuOpen ? 0 : 1,
                }}
              />
              <span
                className="block h-px w-5 rounded-full origin-center transition-all duration-300"
                style={{
                  background: "var(--fg)",
                  transform: isMenuOpen ? "rotate(-45deg) translateY(-7px)" : "none",
                }}
              />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className="md:hidden overflow-hidden transition-all duration-300"
          style={{
            maxHeight: isMenuOpen ? "400px" : "0",
            opacity: isMenuOpen ? 1 : 0,
          }}
        >
          <div
            className="py-3 mt-3 space-y-0.5"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center px-3 py-2.5 rounded-xl text-sm font-medium transition-colors"
                  style={{
                    color: isActive ? "var(--accent)" : "var(--fg-muted)",
                    background: isActive ? "var(--accent-glow)" : "transparent",
                  }}
                >
                  {label}
                </Link>
              );
            })}
            {/* <Link
              href="/cv"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center gap-2 mx-1 mt-3 py-2.5 text-sm font-semibold rounded-xl transition-opacity hover:opacity-80"
              style={{ background: "var(--fg)", color: "var(--bg)" }}
            >
              Ver CV
            </Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
