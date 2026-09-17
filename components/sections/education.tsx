"use client";

import Image from "next/image";
import { motion } from "motion/react";

const coursework = [
  "System and Network Administration",
  "Computer Networks and Security",
  "Operating Systems and Virtualization",
  "Cloud Computing and Infrastructure",
  "Embedded Systems",
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Education() {
  return (
    <section id="education" className="border-t border-border">
      <div className="mx-auto max-w-[1540px]">
        <div className="grid min-h-[500px] lg:grid-cols-[22%_78%]">
          {/* LEFT — UNIVERSITY LOGO */}
          <motion.div
            className="
              relative
              flex items-center justify-center
              overflow-hidden
              bg-[#0b1b32]
              px-8 py-14
              lg:min-h-[500px]
            "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease }}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: `
                  linear-gradient(
                    rgba(255,255,255,0.6) 1px,
                    transparent 1px
                  ),
                  linear-gradient(
                    90deg,
                    rgba(255,255,255,0.6) 1px,
                    transparent 1px
                  )
                `,
                backgroundSize: "44px 44px",
              }}
            />

            <motion.div
              className="
                relative z-10
                h-40 w-40
                sm:h-44 sm:w-44
                lg:h-48 lg:w-48
              "
              initial={{
                opacity: 0,
                scale: 0.75,
                rotate: -8,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              viewport={{
                once: true,
                amount: 0.4,
              }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease,
              }}
            >
              <Image
                src="/images/education/psu-logo.png"
                alt="Pangasinan State University"
                fill
                sizes="192px"
                className="object-contain"
              />
            </motion.div>
          </motion.div>

          {/* RIGHT — EDUCATION */}
          <div
            className="
              flex items-center
              bg-background
              px-6 py-14
              sm:px-10 sm:py-16
              lg:px-10 lg:py-20
              xl:px-11
            "
          >
            <div className="w-full">
              {/* Section label */}
              <motion.p
                className="
                  text-sm font-bold
                  tracking-wide
                  text-foreground
                "
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, ease }}
              >
                EDUCATION
              </motion.p>

              {/* Yellow rule */}
              <motion.div
                className="
                  mt-4 h-[14px]
                  w-full
                  origin-left
                  bg-accent
                "
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.85,
                  delay: 0.08,
                  ease,
                }}
              />

              {/* Degree */}
              <motion.h2
                className="
                  mt-6
                  text-4xl font-black
                  leading-none
                  tracking-[-0.045em]
                  text-foreground
                  sm:text-5xl
                  lg:text-[3rem]
                  xl:text-[3.25rem]
                "
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.65,
                  delay: 0.18,
                  ease,
                }}
              >
                BS Computer Engineering
              </motion.h2>

              {/* Major */}
              <motion.p
                className="
                  mt-2
                  text-base font-black
                  leading-tight
                  tracking-[-0.02em]
                  text-foreground
                  sm:text-lg
                  lg:text-xl
                "
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.55,
                  delay: 0.26,
                  ease,
                }}
              >
                MAJOR IN SYSTEM AND NETWORK ADMINISTRATION
              </motion.p>

              {/* University */}
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.55,
                  delay: 0.34,
                  ease,
                }}
              >
                <p
                  className="
                    text-lg font-medium
                    leading-[1.05]
                    tracking-[-0.025em]
                    text-foreground
                    sm:text-xl
                  "
                >
                  PANGASINAN STATE UNIVERSITY
                  <br />
                  URDANETA CITY CAMPUS
                </p>
              </motion.div>

              {/* Class */}
              <motion.p
                className="
                  mt-6
                  text-base font-black
                  tracking-[-0.02em]
                  text-foreground
                "
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.55,
                  delay: 0.42,
                  ease,
                }}
              >
                CLASS OF 2026
              </motion.p>

              {/* Relevant Coursework */}
              <motion.div
                className="mt-8 border-t border-foreground/20 pt-5"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.55,
                  delay: 0.5,
                  ease,
                }}
              >
                <p className="text-xs font-black tracking-wide text-foreground">
                  RELEVANT COURSEWORK
                </p>

                <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                  {coursework.map((course, index) => (
                    <motion.span
                      key={course}
                      className="
                        text-sm
                        font-medium
                        text-foreground/80
                      "
                      initial={{
                        opacity: 0,
                        y: 8,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.3,
                      }}
                      transition={{
                        duration: 0.4,
                        delay: 0.55 + index * 0.06,
                        ease,
                      }}
                    >
                      {course}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}