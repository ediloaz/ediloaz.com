"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/80">
      <div className="mx-auto max-w-6xl px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="text-xl font-bold text-transparent transition-opacity hover:opacity-80 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text"
            onClick={closeMenu}
          >
            Edisson López
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            <Link
              href="/"
              className="font-medium text-zinc-600 transition-colors hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400"
            >
              Inicio
            </Link>
            <Link
              href="/about-me"
              className="font-medium text-zinc-600 transition-colors hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400"
            >
              Sobre Mí
            </Link>
            <Link
              href="/projects"
              className="font-medium text-zinc-600 transition-colors hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400"
            >
              Proyectos
            </Link>
            <Link
              href="/contact"
              className="font-medium text-zinc-600 transition-colors hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400"
            >
              Contacto
            </Link>
            <Link
              href="/cv"
              className="transform rounded-full bg-blue-600 px-4 py-2 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700"
            >
              Ver CV
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile actions */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <svg
                className="w-6 h-6 text-zinc-700 dark:text-zinc-300"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-zinc-200 dark:border-zinc-800 pt-4">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="font-medium text-zinc-600 transition-colors hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400 py-2"
                onClick={closeMenu}
              >
                Inicio
              </Link>
              <Link
                href="/about-me"
                className="font-medium text-zinc-600 transition-colors hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400 py-2"
                onClick={closeMenu}
              >
                Sobre Mí
              </Link>
              <Link
                href="/projects"
                className="font-medium text-zinc-600 transition-colors hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400 py-2"
                onClick={closeMenu}
              >
                Proyectos
              </Link>
              <Link
                href="/contact"
                className="font-medium text-zinc-600 transition-colors hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400 py-2"
                onClick={closeMenu}
              >
                Contacto
              </Link>
              <Link
                href="/cv"
                className="transform rounded-full bg-blue-600 px-4 py-2 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700 text-center"
                onClick={closeMenu}
              >
                Ver CV
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

