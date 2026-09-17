"use client";

import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section
      id="top"
      className="
        relative h-screen w-full overflow-hidden
        bg-background
      "
    >
      {/* =========================================================
          LAYER 0 — BACKGROUND IMAGE
      ========================================================= */}
      <motion.div
        className="absolute inset-y-0 right-0 z-0 hidden w-[48%] lg:block"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease }}
      >
        <img
          src="/images/profile/hero_bg.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Theme-aware treatment */}
        <div className="absolute inset-0 bg-background/55" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_35%,rgba(37,99,235,0.3),transparent_55%)] dark:bg-[radial-gradient(circle_at_60%_35%,rgba(37,99,235,0.3),transparent_55%)]" />
      </motion.div>

      {/* =========================================================
          LAYER 10 — GRID
      ========================================================= */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-10 tech-grid-fade"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.15 }}
      />

      {/* =========================================================
          LAYER 20 — FOREGROUND IMAGE
      ========================================================= */}
      <motion.div
        className="pointer-events-none absolute inset-y-0 right-0 z-20 hidden w-[48%] lg:block"
        initial={{ opacity: 0, x: 45 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.1, delay: 0.25, ease }}
      >
        <img
          src="/images/profile/hero_fg.png"
          alt="Edriene Jay Cabanela"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
      </motion.div>

      {/* =========================================================
          LAYER 30 — CONTENT
      ========================================================= */}
      <div className="relative z-30 flex h-full w-full items-center px-6 pt-28 pb-10 sm:px-10 lg:px-16">
        <div className="w-full lg:w-[52%]">
          <div className="max-w-[680px]">

            {/* Name */}
            <motion.p
              className="text-base font-bold tracking-tight text-foreground sm:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease }}
            >
              EDRIENE JAY CABANELA
            </motion.p>

            {/* Profession */}
            <motion.p
              className="mt-0 text-sm font-bold tracking-wide text-primary-bright sm:text-base"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease }}
            >
              COMPUTER ENGINEER.
            </motion.p>

            {/* Main headline */}
            <motion.h1
              className="
                mt-7
                text-[clamp(3rem,4.1vw,4.8rem)]
                font-black
                leading-[0.91]
                tracking-[-0.055em]
                text-foreground
              "
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.55, ease }}
            >
              I build software,
              <br />
              systems, and
              <br />
              connected
              <br />
              technology.
            </motion.h1>

            {/* Yellow accent */}
            <motion.div
              className="mt-4 h-2 w-100 max-w-full bg-accent"
              initial={{ scaleX: 0, transformOrigin: "left" }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.85, ease }}
            />

            {/* Description */}
            <motion.p
              className="
                mt-5 max-w-[620px]
                text-sm leading-[1.35]
                text-muted
                sm:text-base
              "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.95, ease }}
            >
              Computer Engineering graduate specializing in System and
              Network Administration, with hands-on experience across web,
              mobile, cloud, and IoT application development.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="mt-6 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.05, ease }}
            >
              {/* Projects */}
              <motion.a
                href="#projects"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="
                  group flex items-center gap-2
                  bg-primary
                  px-4 py-2.5
                  text-sm font-bold
                  text-white
                  transition-colors
                  hover:bg-primary-bright
                "
              >
                PROJECTS

                <ArrowUpRight
                  size={20}
                  className="
                    transition-transform duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </motion.a>

              {/* CV */}
              <motion.a
                href="/cv/Edriene_Jay_Cabanela_CV.pdf"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="
                  group flex items-center gap-2
                  border border-foreground/40
                  px-4 py-2.5
                  text-sm font-bold
                  text-foreground
                  transition-all
                  hover:border-foreground
                  hover:bg-foreground/[0.06]
                "
              >
                GET CV

                <ArrowDown
                  size={20}
                  className="
                    transition-transform duration-300
                    group-hover:translate-y-1
                  "
                />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* =========================================================
          LAYER 40 — BOTTOM FADE
      ========================================================= */}
      <div
        className="
          pointer-events-none
          absolute inset-x-0 bottom-0 z-40
          h-24
          bg-gradient-to-t
          from-background
          via-background/70
          to-transparent
        "
        aria-hidden="true"
      />

      {/* =========================================================
          LAYER 50 — SCROLL INDICATOR
      ========================================================= */}
      <motion.a
        href="#projects"
        aria-label="Scroll to projects"
        className="
          absolute bottom-6 left-1/2 z-50
          hidden -translate-x-1/2
          text-foreground/60
          transition-colors
          hover:text-foreground
          lg:block
        "
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: [0, 5, 0],
        }}
        transition={{
          opacity: {
            duration: 0.6,
            delay: 1.5,
          },
          y: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <ArrowDown size={22} strokeWidth={1.8} />
      </motion.a>
    </section>
  );
}