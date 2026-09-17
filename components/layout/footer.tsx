"use client";

import { motion } from "motion/react";
import { ArrowUp, ArrowUpRight } from "lucide-react";

const footerLinks = [
  {
    label: "GITHUB",
    href: "https://github.com/dmndslyr",
  },
  {
    label: "LINKEDIN",
    href: "https://linkedin.com/in/edriene-jay-cabanela",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1540px] px-6 sm:px-10 lg:px-16">
        <div className="py-10 sm:py-12 lg:py-14">

          {/* Main footer row */}
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">

            {/* Identity */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease }}
            >
              <a
                href="#top"
                className="group inline-flex items-center gap-3"
              >
                <span
                  className="
                    text-3xl font-black
                    tracking-[-0.06em]
                    text-foreground
                    transition-colors duration-300
                    group-hover:text-primary-bright
                  "
                >
                  EJC
                </span>

                <span
                  className="
                    h-2 w-2
                    bg-accent
                    transition-transform duration-300
                    group-hover:scale-125
                  "
                />
              </a>

              <p className="mt-3 text-xs font-bold tracking-[0.08em] text-foreground/60">
                EDRIENE JAY O. CABANELA
              </p>

              <p className="mt-1 text-xs font-medium text-muted">
                Computer Engineer
              </p>
            </motion.div>

            {/* Links + Back to top */}
            <motion.div
              className="flex flex-col gap-5 sm:items-end"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
            >
              <div className="flex items-center gap-6">
                {footerLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group inline-flex items-center gap-1.5
                      text-[10px] font-bold
                      tracking-[0.08em]
                      text-foreground/60
                      transition-colors duration-300
                      hover:text-foreground
                    "
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span>{link.label}</span>

                    <ArrowUpRight
                      size={12}
                      strokeWidth={2}
                      className="
                        transition-transform duration-300
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                      "
                    />
                  </motion.a>
                ))}
              </div>

              <motion.a
                href="#top"
                className="
                  group inline-flex items-center gap-3
                  text-[10px] font-bold
                  tracking-[0.08em]
                  text-foreground
                "
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="transition-colors duration-300 group-hover:text-primary-bright">
                  BACK TO TOP
                </span>

                <span
                  className="
                    flex h-7 w-7
                    items-center justify-center
                    border border-foreground/20
                    transition-all duration-300
                    group-hover:border-foreground
                    group-hover:bg-foreground
                    group-hover:text-background
                  "
                >
                  <ArrowUp size={14} strokeWidth={2} />
                </span>
              </motion.a>
            </motion.div>
          </div>

          {/* Yellow divider */}
          <motion.div
            className="mt-9 h-[3px] w-full origin-left bg-accent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.8, ease }}
          />

        </div>
      </div>
    </footer>
  );
}