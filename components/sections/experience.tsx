"use client";

import { motion } from "motion/react";

const experience = {
  period: "JUN – JUL 2025",
  role: "Web Development Intern",
  company:
    "Department of the Interior and Local Government – CAR",
  location: "Baguio City",
  description:
    "Developed frontend and backend modules for a Recruitment and Placement Portal using Laravel and MySQL, including applicant, administrator, examination, PDS, WES, and authentication workflows.",
  technologies: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-border"
    >
      <div className="mx-auto max-w-[1540px]">
        <div
          className="
            bg-background
            px-6
            py-14
            sm:px-10 sm:py-16
            lg:px-16 lg:py-20
          "
        >
          {/* Section label */}
          <motion.p
            className="
              text-sm
              font-bold
              tracking-wide
              text-primary
            "
            initial={{
              opacity: 0,
              y: 12,
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
              duration: 0.5,
              ease,
            }}
          >
            REAL-WORLD EXPERIENCE
          </motion.p>

          {/* Yellow rule */}
          <motion.div
            className="
              mt-4
              h-[14px]
              w-full
              max-w-[980px]
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
              amount: 0.5,
            }}
            transition={{
              duration: 0.85,
              delay: 0.08,
              ease,
            }}
          />

          {/* Heading */}
          <motion.h2
            className="
              mt-6
              text-4xl
              font-black
              leading-none
              tracking-[-0.05em]
              text-foreground
              sm:text-5xl
              lg:text-[3.5rem]
            "
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.7,
              delay: 0.18,
              ease,
            }}
          >
            Professional Experience.
          </motion.h2>

          {/* Experience entry */}
          <div className="mt-8 border-t border-foreground/25">
            <motion.article
              className="py-5 sm:py-6"
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease,
              }}
            >
              {/* Date + Location */}
              <motion.div
                className="
                  flex
                  items-center
                  justify-between
                  gap-6
                "
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.45,
                  delay: 0.38,
                }}
              >
                <span
                  className="
                    text-xs
                    font-bold
                    tracking-[0.08em]
                    text-foreground
                    sm:text-sm
                  "
                >
                  {experience.period}
                </span>

                <span
                  className="
                    text-xs
                    font-medium
                    text-foreground
                    sm:text-sm
                  "
                >
                  {experience.location}
                </span>
              </motion.div>

              {/* Role */}
              <motion.h3
                className="
                  mt-3
                  text-2xl
                  font-black
                  leading-tight
                  tracking-[-0.04em]
                  text-foreground
                  sm:text-3xl
                "
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.42,
                  ease,
                }}
              >
                {experience.role}
              </motion.h3>

              {/* Company */}
              <motion.p
                className="
                  mt-1
                  text-sm
                  font-medium
                  leading-relaxed
                  text-foreground
                  sm:text-base
                "
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.48,
                  ease,
                }}
              >
                {experience.company}
              </motion.p>

              {/* Description */}
              <motion.p
                className="
                  mt-5
                  max-w-[800px]
                  text-sm
                  font-medium
                  leading-relaxed
                  text-foreground
                  sm:text-base
                "
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.55,
                  delay: 0.54,
                  ease,
                }}
              >
                {experience.description}
              </motion.p>

              {/* Technologies */}
              <motion.div
                className="
                  mt-5
                  flex
                  flex-wrap
                  gap-x-6
                  gap-y-2
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
                }}
                transition={{
                  duration: 0.45,
                  delay: 0.6,
                  ease,
                }}
              >
                {experience.technologies.map(
                  (technology, index) => (
                    <motion.span
                      key={technology}
                      className="
                        text-[10px]
                        font-bold
                        tracking-[0.12em]
                        text-foreground
                      "
                      initial={{
                        opacity: 0,
                        x: -6,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.3,
                        delay: 0.62 + index * 0.05,
                        ease,
                      }}
                    >
                      {technology.toUpperCase()}
                    </motion.span>
                  ),
                )}
              </motion.div>
            </motion.article>

            {/* Bottom rule */}
            <div className="border-t border-foreground/25" />
          </div>
        </div>
      </div>
    </section>
  );
}