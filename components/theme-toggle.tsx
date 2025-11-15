 "use client";

import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label={`Cambiar a modo ${isDark ? "claro" : "oscuro"}`}
      aria-pressed={isDark}
      onClick={toggleTheme}
      title={`Cambiar a modo ${isDark ? "claro" : "oscuro"}`}
      className="relative inline-flex h-10 w-24 items-center rounded-full border border-zinc-200 bg-white px-2 text-sm font-medium text-zinc-600 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
    >
      <span className="flex w-full items-center justify-between">
        <span>☀️</span>
        <span>🌙</span>
      </span>
      <span
        className={`pointer-events-none absolute inset-y-1 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white transition-all duration-300 ${
          isDark
            ? "translate-x-12 bg-blue-500 text-white"
            : "translate-x-0 bg-yellow-400 text-zinc-950"
        }`}
      >
        {isDark ? "🌙" : "☀️"}
      </span>
      <span className="sr-only">Tema</span>
    </button>
  );
}

