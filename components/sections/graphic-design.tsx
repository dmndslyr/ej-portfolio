"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const tools = ["CANVA", "FIGMA", "INDESIGN", "PHOTOSHOP"];

const ease = [0.22, 1, 0.36, 1] as const;

export default function GraphicDesign() {
  return (
    <section
      id="graphic-design"
      className="border-t border-border"
    >
      <div className="mx-auto max-w-[1540px]">
        <motion.div
          className="
            relative
            overflow-hidden
            bg-[#0b2555]
            px-6 py-14
            sm:px-10 sm:py-16
            lg:px-16 lg:py-20
          "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
            ease,
          }}
        >
          {/* Subtle grid */}
          <div
            className="
              pointer-events-none
              absolute inset-0
              opacity-[0.07]
            "
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

          <div className="relative z-10">
            {/* Label */}
            <motion.p
              className="
                text-sm
                font-bold
                tracking-wide
                text-white
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
              GRAPHIC DESIGNER
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
                text-white
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
              I also do Graphic Design.
            </motion.h2>

            {/* Tools */}
            <div className="mt-5 flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <motion.span
                  key={tool}
                  className="
                    border
                    border-white/40
                    px-3
                    py-1.5
                    text-[10px]
                    font-bold
                    tracking-[0.08em]
                    text-white
                    transition-colors
                    duration-300
                    hover:border-white
                    hover:bg-white
                    hover:text-[#0b2555]
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
                    duration: 0.4,
                    delay: 0.35 + index * 0.07,
                    ease,
                  }}
                >
                  {tool}
                </motion.span>
              ))}
            </div>

            {/* Portfolio link */}
            <motion.a
              href="https://bit.ly/portfolio-commisions"
              className="
                mt-4
                inline-flex
                items-center
                gap-2
                bg-white
                px-3
                py-2
                text-xs
                font-black
                tracking-[-0.01em]
                text-[#0b2555]
                transition-all
                duration-300
                hover:bg-accent
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
                delay: 0.55,
                ease,
              }}
              whileHover={{
                x: 4,
              }}
              whileTap={{
                scale: 0.98,
              }}
            >
              VISIT MY GRAPHIC DESIGN PORTFOLIO
              <ArrowUpRight
                size={15}
                strokeWidth={2.2}
              />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}