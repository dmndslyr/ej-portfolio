"use client";

import { useEffect, useState } from "react";
import { Download, Menu, Moon, Sun, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Graphic Design", href: "#graphic-design" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      setDark(false);
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  function toggleTheme() {
    const nextDark = !dark;

    document.documentElement.classList.toggle("dark", nextDark);
    document.documentElement.classList.toggle("light", !nextDark);

    localStorage.setItem("theme", nextDark ? "dark" : "light");
    setDark(nextDark);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-10">
      <nav
        className="
          liquid-glass
          relative mx-auto flex h-[54px] max-w-[1540px]
          items-center rounded-full
          px-4 sm:px-5
        "
        aria-label="Main navigation"
      >
        {/* Top glass reflection */}
        <div
          className="
            pointer-events-none absolute inset-x-1 top-1 h-1/2
            rounded-full
            bg-gradient-to-b
            from-white/[0.12]
            to-transparent
          "
          aria-hidden="true"
        />

        {/* Blue refraction */}
        <div
          className="
            pointer-events-none absolute inset-0 rounded-full
            bg-[radial-gradient(
              ellipse_at_72%_-30%,
              rgba(96,165,250,0.22),
              transparent 48%
            )]
          "
          aria-hidden="true"
        />

        {/* Subtle inner bottom edge */}
        <div
          className="
            pointer-events-none absolute inset-x-10 bottom-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-white/20
            to-transparent
          "
          aria-hidden="true"
        />

        {/* Logo */}
        <a
          href="#top"
          onClick={closeMenu}
          className="
            relative z-10 shrink-0
            text-[20px] font-black
            tracking-[-0.075em]
            text-white
            transition-all duration-300
            hover:text-white
            hover:[text-shadow:0_0_18px_rgba(255,255,255,0.65)]
          "
        >
          EJC
        </a>

        {/* Desktop navigation */}
        <div className="relative z-10 ml-auto hidden items-center lg:flex">
          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="
                  whitespace-nowrap
                  px-2.5 py-2
                  text-[13px] font-medium
                  tracking-[-0.01em]
                  text-white/75
                  transition-all duration-300
                  hover:text-white
                  hover:[text-shadow:0_0_14px_rgba(255,255,255,0.75)]
                "
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div
            className="
              mx-3 h-6 w-px
              bg-white/15
            "
            aria-hidden="true"
          />

          {/* Theme */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            className="
              relative flex h-9 w-9 shrink-0
              items-center justify-center
              rounded-full
              border border-white/20
              bg-white/[0.055]
              text-white/80
              shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]
              transition-all duration-300
              hover:border-white/35
              hover:bg-white/[0.09]
              hover:text-white
              hover:shadow-[0_0_18px_rgba(96,165,250,0.25),inset_0_1px_0_rgba(255,255,255,0.2)]
            "
          >
            {dark ? <Sun size={17} strokeWidth={1.8} /> : <Moon size={17} strokeWidth={1.8} />}
          </button>

          {/* CV */}
          <a
            href="/cv/Edriene_Jay_Cabanela_CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="
              ml-2 flex shrink-0 items-center gap-1.5
              rounded-full
              border border-blue-300/20
              bg-blue-500
              px-4 py-2
              text-[13px] font-bold
              text-white
              shadow-[0_4px_18px_rgba(37,99,235,0.32)]
              transition-all duration-300
              hover:bg-blue-400
              hover:shadow-[0_0_22px_rgba(59,130,246,0.5)]
            "
          >
            Get CV
            <Download size={14} strokeWidth={2} />
          </a>
        </div>

        {/* Mobile controls */}
        <div className="relative z-10 ml-auto flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            className="
              flex h-9 w-9 items-center justify-center
              rounded-full
              border border-white/20
              bg-white/[0.055]
              text-white/80
              transition-all duration-300
              hover:border-white/35
              hover:text-white
              hover:shadow-[0_0_18px_rgba(96,165,250,0.25)]
            "
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="
              flex h-9 w-9 items-center justify-center
              rounded-full
              border border-white/20
              bg-white/[0.055]
              text-white/80
              transition-all duration-300
              hover:border-white/35
              hover:text-white
            "
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="
            liquid-glass
            mx-1 mt-2 rounded-2xl
            p-3
            lg:hidden
          "
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              className="
                block px-3 py-2.5
                text-sm font-medium
                text-white/75
                transition-all duration-300
                hover:text-white
                hover:[text-shadow:0_0_14px_rgba(255,255,255,0.7)]
              "
            >
              {item.label}
            </a>
          ))}

          <a
            href="/cv/Edriene_Jay_Cabanela_CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="
              mt-2 flex items-center justify-center gap-2
              rounded-full
              bg-primary
              px-4 py-2.5
              text-sm font-bold text-white
              transition
              hover:bg-primary-bright
            "
          >
            Get CV
            <Download size={15} />
          </a>
        </div>
      )}
    </header>
  );
}