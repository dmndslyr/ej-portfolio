"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      return;
    }

    if (savedTheme === "light") {
      setDark(false);
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      return;
    }

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    setDark(prefersDark);

    document.documentElement.classList.toggle(
      "dark",
      prefersDark
    );

    document.documentElement.classList.toggle(
      "light",
      !prefersDark
    );
  }, []);

  const toggleTheme = () => {
    const nextDark = !dark;

    setDark(nextDark);

    document.documentElement.classList.toggle(
      "dark",
      nextDark
    );

    document.documentElement.classList.toggle(
      "light",
      !nextDark
    );

    localStorage.setItem(
      "theme",
      nextDark ? "dark" : "light"
    );
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">

        <a
          href="#"
          className="text-sm font-bold tracking-[0.2em]"
        >
          EJC
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              dark
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            className="rounded-md border border-border p-2 transition hover:border-primary hover:text-primary"
          >
            {dark ? (
              <Sun size={17} />
            ) : (
              <Moon size={17} />
            )}
          </button>

          <a
            href="/cv/Edriene_Jay_Cabanela_CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            CV
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          className="md:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-border px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}

            <button
            type="button"
            onClick={toggleTheme}
            className="rounded-md border border-border p-2"
            >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            <a
              href="/cv/Edriene_Jay_Cabanela_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-primary"
            >
              Download CV
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}