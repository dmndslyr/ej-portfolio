"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 85%)",
          }}
        />
      </div>

      <div className="mx-auto flex min-h-[calc(100vh-72px)] max-w-7xl items-center px-6 py-24 lg:px-8">
        <div className="max-w-5xl">

          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-sm font-semibold tracking-[0.2em] text-primary"
          >
            COMPUTER ENGINEER
          </motion.p>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-5xl text-5xl font-black tracking-tight sm:text-6xl lg:text-8xl"
          >
            I build software,
            <br />
            systems, and
            <br />

            <span className="relative inline-block">
              connected technology.

              <span className="absolute -bottom-1 left-0 h-2 w-1/3 bg-accent lg:h-3" />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-8 max-w-2xl text-base leading-7 text-muted sm:text-lg"
          >
            Computer Engineering graduate specializing in
            System and Network Administration, with hands-on
            experience across web, mobile, cloud, and IoT
            application development.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              View Projects

              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <a
              href="/cv/Edriene_Jay_Cabanela_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium transition hover:border-primary hover:text-primary"
            >
              Download CV
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <a
            href="#projects"
            className="mt-20 inline-flex items-center gap-2 text-xs font-medium tracking-widest text-muted uppercase"
          >
            Scroll to explore
            <ArrowDown size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}