"use client";

import { motion, AnimatePresence } from "motion/react";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Graphic Design", href: "#graphic-design" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Header() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      setDark(false);
    } else if (savedTheme === "dark") {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      setDark(true);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      document.documentElement.classList.remove("dark", "light");
      document.documentElement.classList.add(
        prefersDark ? "dark" : "light"
      );

      setDark(prefersDark);
    }

    setMounted(true);
  }, []);

  function toggleTheme() {
    const nextDark = !dark;

    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(
      nextDark ? "dark" : "light"
    );

    localStorage.setItem("theme", nextDark ? "dark" : "light");
    setDark(nextDark);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      {/* =========================================================
          DESKTOP HEADER
      ========================================================= */}
      <motion.header
  className="fixed inset-x-0 top-0 z-[100] px-4 pt-7 sm:px-8 lg:px-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.1,
          ease,
        }}
      >
        <nav
          className="
            liquid-glass
            mx-auto flex h-[54px] max-w-[1540px]
            items-center rounded-full
            px-3 sm:px-4
          "
        >
          {/* Logo */}
          <motion.a
            href="#top"
            className="
              shrink-0
              px-2
              text-base font-black tracking-[-0.04em]
              text-foreground
              transition-colors
              hover:text-primary-bright
            "
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
          >
            EJC
          </motion.a>

          {/* Divider */}
          <div className="mx-3 hidden h-5 w-px bg-foreground/15 lg:block" />

          {/* Desktop navigation */}
          <div className="hidden flex-1 items-center gap-0.5 lg:flex">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="
                  relative px-3 py-2
                  text-[11px] font-semibold tracking-wide
                  text-foreground/65
                  transition-colors duration-300
                  hover:text-foreground
                "
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: 0.25 + index * 0.045,
                  ease,
                }}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.97 }}
              >
                {item.label}

                {/* Text glow only — no highlighted div */}
                <span
                  className="
                    pointer-events-none
                    absolute inset-0
                    opacity-0
                    transition-opacity duration-300
                    group-hover:opacity-100
                  "
                />

                <span
                  className="
                    pointer-events-none
                    absolute inset-x-3 bottom-0
                    h-px
                    scale-x-0
                    bg-primary-bright
                    shadow-[0_0_8px_rgba(59,130,246,0.8)]
                    transition-transform duration-300
                    hover:scale-x-100
                  "
                />
              </motion.a>
            ))}
          </div>

          {/* Right controls */}
          <div className="ml-auto flex items-center gap-1">
            {/* Theme toggle */}
            {mounted && (
              <motion.button
                type="button"
                onClick={toggleTheme}
                aria-label={
                  dark ? "Switch to light mode" : "Switch to dark mode"
                }
                className="
                  flex h-9 w-9 items-center justify-center
                  rounded-full
                  text-foreground/65
                  transition-colors duration-300
                  hover:text-foreground
                "
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={dark ? "moon" : "sun"}
                    initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 30, scale: 0.7 }}
                    transition={{ duration: 0.2 }}
                  >
                    {dark ? (
                      <Moon size={16} strokeWidth={1.8} />
                    ) : (
                      <Sun size={17} strokeWidth={1.8} />
                    )}
                  </motion.span>
                </AnimatePresence>
              </motion.button>
            )}

            {/* Divider */}
            <div className="mx-2 hidden h-5 w-px bg-foreground/15 sm:block" />

            {/* CV */}
            <motion.a
              href="/cv/Edriene_Jay_Cabanela_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="
                hidden items-center gap-2
                px-3 py-2
                text-[11px] font-bold tracking-wide
                text-foreground
                transition-colors duration-300
                hover:text-primary-bright
                sm:flex
              "
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              GET CV
              <Download size={14} strokeWidth={2} />
            </motion.a>

            {/* Mobile menu button */}
            <motion.button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="
                flex h-9 w-9 items-center justify-center
                rounded-full
                text-foreground
                lg:hidden
              "
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={menuOpen ? "close" : "menu"}
                  initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
                  transition={{ duration: 0.2 }}
                >
                  {menuOpen ? (
                    <X size={20} strokeWidth={1.8} />
                  ) : (
                    <Menu size={20} strokeWidth={1.8} />
                  )}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>

        {/* =========================================================
            MOBILE MENU
        ========================================================= */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="
                liquid-glass
                mx-auto mt-2 max-w-[1540px]
                rounded-3xl p-3
                lg:hidden
              "
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.25, ease }}
            >
              <div className="flex flex-col">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="
                      rounded-2xl px-4 py-3
                      text-sm font-semibold
                      text-foreground/70
                      transition-colors duration-300
                      hover:text-primary-bright
                    "
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.035,
                      ease,
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.a>
                ))}

                <div className="my-2 h-px bg-foreground/10" />

                <motion.a
                  href="/cv/Edriene_Jay_Cabanela_CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                  onClick={closeMenu}
                  className="
                    flex items-center justify-between
                    px-4 py-3
                    text-sm font-bold
                    text-foreground
                    transition-colors
                    hover:text-primary-bright
                  "
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: navItems.length * 0.035,
                    ease,
                  }}
                >
                  GET CV
                  <Download size={16} />
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}