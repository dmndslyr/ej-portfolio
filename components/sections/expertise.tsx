"use client";

import { motion } from "motion/react";
import { Code2, Globe2, Server, Cpu } from "lucide-react";

const skills = [
  {
    label: "SOFTWARE",
    value: "Python · Java · Kotlin · PHP · C++",
    icon: Code2,
  },
  {
    label: "WEB",
    value: "Laravel · Django · Flask · React · Tailwind CSS",
    icon: Globe2,
  },
  {
    label: "SYSTEMS & CLOUD",
    value: "Linux · Windows · AWS EC2 · Docker · NGINX",
    icon: Server,
  },
  {
    label: "NETWORKING & IOT",
    value: "Cisco · Raspberry Pi · Arduino · ESP8266 · ESP32",
    icon: Cpu,
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Expertise() {
  return (
    <section
      id="about"
      className="border-t border-border"
    >
      <div className="mx-auto max-w-[1540px]">
        <div className="grid lg:grid-cols-[42%_58%]">
          {/* LEFT PANEL */}
          <motion.div
            className="
              relative overflow-hidden
              bg-[#0b2555]
              px-6 py-16
              sm:px-10 sm:py-20
              lg:min-h-[560px]
              lg:px-16 lg:py-20
            "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease }}
          >
            {/* Grid */}
            <motion.div
              className="pointer-events-none absolute inset-0 opacity-[0.08]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.08 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div
                className="h-full w-full"
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
            </motion.div>

            <div className="relative z-10">
              {/* Label */}
              <motion.p
                className="
                  text-sm font-bold
                  tracking-wide
                  text-white
                "
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.5,
                  ease,
                }}
              >
                WHAT I WORK WITH
              </motion.p>

              {/* Yellow rule */}
              <motion.div
                className="
                  mt-4 h-[14px]
                  w-full
                  bg-accent
                "
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.8,
                  delay: 0.08,
                  ease,
                }}
                style={{
                  transformOrigin: "left",
                }}
              />

              {/* Heading */}
              <motion.h2
                className="
                  mt-7
                  max-w-[560px]
                  text-4xl font-black
                  leading-[0.95]
                  tracking-[-0.05em]
                  text-white
                  sm:text-5xl
                  lg:text-[3.5rem]
                  xl:text-[3.8rem]
                "
                initial={{
                  opacity: 0,
                  y: 28,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.5,
                }}
                transition={{
                  duration: 0.75,
                  delay: 0.18,
                  ease,
                }}
              >
                From application
                <br />
                code to
                <br />
                infrastructure.
              </motion.h2>
            </div>
          </motion.div>

          {/* RIGHT PANEL */}
          <div
            className="
              flex items-center
              bg-background
              px-6 py-14
              sm:px-10 sm:py-16
              lg:px-14 lg:py-20
              xl:px-16
            "
          >
            <div className="w-full">
              {skills.map((skill, index) => {
                const Icon = skill.icon;

                return (
                  <motion.div
                    key={skill.label}
                    className="
                      group relative
                      border-t border-foreground/25
                      py-6
                      last:border-b
                      sm:py-7
                    "
                    initial={{
                      opacity: 0,
                      y: 35,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.35,
                    }}
                    transition={{
                      duration: 0.65,
                      delay: index * 0.12,
                      ease,
                    }}
                  >
                    {/* Animated top line */}
                    <motion.div
                      className="
                        absolute left-0 top-0
                        h-px w-full
                        origin-left
                        bg-accent
                      "
                      initial={{
                        scaleX: 0,
                      }}
                      whileInView={{
                        scaleX: 1,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.35,
                      }}
                      transition={{
                        duration: 0.7,
                        delay: index * 0.12 + 0.15,
                        ease,
                      }}
                    />

                    <div
                      className="
                        flex items-center
                        gap-4
                        sm:gap-6
                      "
                    >
                      {/* Category icon */}
                      <motion.div
                        className="
                          flex h-10 w-10
                          shrink-0
                          items-center justify-center
                          rounded-full
                          border border-foreground/25
                          text-foreground
                          transition-colors
                          duration-300
                          group-hover:border-accent
                          group-hover:text-accent
                          sm:h-11 sm:w-11
                        "
                        initial={{
                          opacity: 0,
                          scale: 0.7,
                          rotate: -15,
                        }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                          rotate: 0,
                        }}
                        viewport={{
                          once: true,
                          amount: 0.35,
                        }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.12 + 0.2,
                          ease,
                        }}
                        whileHover={{
                          scale: 1.08,
                          rotate: 5,
                        }}
                      >
                        <Icon
                          size={18}
                          strokeWidth={1.7}
                        />
                      </motion.div>

                      {/* Category */}
                      <motion.span
                        className="
                          w-[115px]
                          shrink-0
                          text-xs
                          font-black
                          tracking-[-0.01em]
                          text-foreground
                          sm:w-[145px]
                        "
                        initial={{
                          opacity: 0,
                          x: -10,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        viewport={{
                          once: true,
                          amount: 0.35,
                        }}
                        transition={{
                          duration: 0.45,
                          delay: index * 0.12 + 0.28,
                          ease,
                        }}
                      >
                        {skill.label}
                      </motion.span>

                      {/* Technologies */}
                      <motion.span
                        className="
                          text-sm
                          font-medium
                          leading-relaxed
                          text-foreground
                          sm:text-base
                        "
                        initial={{
                          opacity: 0,
                          x: -12,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        viewport={{
                          once: true,
                          amount: 0.35,
                        }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.12 + 0.34,
                          ease,
                        }}
                      >
                        {skill.value}
                      </motion.span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}