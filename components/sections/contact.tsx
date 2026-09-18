"use client";

import { FormEvent, useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, FileText, Mail } from "lucide-react";

const contactLinks = [
  {
    label: "EMAIL",
    value: "edrienecabanela@gmail.com",
    href: "mailto:edrienecabanela@gmail.com",
    icon: "mail",
  },
  {
    label: "GITHUB",
    value: "github.com/dmndslyr",
    href: "https://github.com/dmndslyr",
    icon: "github",
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/edrienejaycabanela",
    href: "https://linkedin.com/in/edrienejaycabanela",
    icon: "linkedin",
  },
  {
    label: "GET CV",
    value: "Download my Curriculum Vitae",
    href: "/cv/Edriene_Jay_Cabanela_CV.pdf",
    icon: "cv",
  },
] as const;

const ease = [0.22, 1, 0.36, 1] as const;

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-[23px] w-[23px] fill-current"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.85 10.91.57.1.78-.25.78-.55v-2.14c-3.19.69-3.86-1.35-3.86-1.35-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.07.78 2.16v3.2c0 .31.21.66.79.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-[23px] w-[23px] fill-current"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V8.98h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.61 0 4.28 2.38 4.28 5.48v6.28ZM5.34 7.42a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.56 20.45h3.57V8.98H3.56v11.47ZM20.45 0H3.55A3.55 3.55 0 0 0 0 3.55v16.9A3.55 3.55 0 0 0 3.55 24h16.9A3.55 3.55 0 0 0 24 20.45V3.55A3.55 3.55 0 0 0 20.45 0Z" />
    </svg>
  );
}

function ContactIcon({
  type,
}: {
  type: (typeof contactLinks)[number]["icon"];
}) {
  if (type === "github") {
    return <GithubIcon />;
  }

  if (type === "linkedin") {
    return <LinkedinIcon />;
  }

  if (type === "cv") {
    return <FileText size={23} strokeWidth={1.6} />;
  }

  return <Mail size={23} strokeWidth={1.6} />;
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    setIsSubmitting(true);
    setStatus("idle");

    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      subject: String(data.get("subject") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
      website: String(data.get("website") ?? "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Failed to send the message.",
        );
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        border-t
        border-border
        bg-[#0b2555]
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      {/* Technical grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.065]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,0.7) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.7) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "44px 44px",
        }}
      />

      {/* Main blue glow */}
      <motion.div
        className="
          pointer-events-none
          absolute
          -left-[18%]
          -top-[30%]
          h-[700px]
          w-[700px]
          rounded-full
          bg-blue-500/20
          blur-[140px]
        "
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 1.2,
          ease,
        }}
      />

      {/* Secondary glow */}
      <motion.div
        className="
          pointer-events-none
          absolute
          -right-[15%]
          top-[10%]
          h-[550px]
          w-[550px]
          rounded-full
          bg-blue-400/10
          blur-[130px]
        "
        initial={{
          opacity: 0,
          scale: 0.85,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.2,
          delay: 0.15,
          ease,
        }}
      />

      {/* Soft bottom fade */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-48
          bg-gradient-to-t
          from-[#071426]/30
          to-transparent
        "
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-[1540px]">
        <div
          className="
            px-6
            py-14
            sm:px-10 sm:py-16
            lg:px-16 lg:py-20
          "
        >
          {/* =================================================
              TOP
          ================================================== */}

          <div
            className="
              grid
              gap-12
              lg:grid-cols-[1fr_1fr]
              lg:gap-20
            "
          >
            {/* LEFT */}
            <div>
              {/* Label */}
              <motion.p
                className="
                  text-sm
                  font-bold
                  tracking-wide
                  text-primary-bright
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
                CONTACT ME
              </motion.p>

              {/* Yellow rule */}
              <motion.div
                className="
                  mt-4
                  h-[14px]
                  w-full
                  max-w-[630px]
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
                  max-w-[620px]
                  text-5xl
                  font-black
                  leading-[0.92]
                  tracking-[-0.055em]
                  text-white
                  sm:text-6xl
                  lg:text-[4rem]
                  xl:text-[4.5rem]
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
                Let&apos;s build
                <br />
                something
                <br />
                useful.
              </motion.h2>

              {/* Description */}
              <motion.p
                className="
                  mt-5
                  max-w-[390px]
                  text-sm
                  font-medium
                  leading-relaxed
                  text-white
                  sm:text-base
                "
                initial={{
                  opacity: 0,
                  y: 15,
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
                  delay: 0.3,
                  ease,
                }}
              >
                Whether you&apos;re looking for a developer,
                collaborating on a project, or simply want
                to connect, feel free to reach out.
              </motion.p>
            </div>

            {/* =================================================
                RIGHT — CONTACT LINKS
            ================================================== */}

            <div>
              {/* Name */}
              <motion.div
                className="
                  border-b
                  border-white/35
                  pb-4
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
                  delay: 0.2,
                  ease,
                }}
              >
                <p
                  className="
                    text-xs
                    font-black
                    tracking-[-0.01em]
                    text-white
                  "
                >
                  EDRIENE JAY O. CABANELA
                </p>
              </motion.div>

              {/* Contact links */}
              <div>
                {contactLinks.map((contact, index) => (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    target={
                      contact.href.startsWith("http")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      contact.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="
                      group
                      flex
                      items-center
                      gap-4
                      border-b
                      border-white/30
                      py-4
                      sm:gap-5
                    "
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.3,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.28 + index * 0.08,
                      ease,
                    }}
                    whileHover={{
                      x: 5,
                    }}
                  >
                    {/* Icon */}
                    <motion.div
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        text-white
                        transition-colors
                        duration-300
                        group-hover:text-accent
                      "
                      whileHover={{
                        scale: 1.08,
                      }}
                    >
                      <ContactIcon type={contact.icon} />
                    </motion.div>

                    {/* Text */}
                    <div className="min-w-0 flex-1">
                      <p
                        className="
                          text-xs
                          font-black
                          tracking-wide
                          text-white
                        "
                      >
                        {contact.label}
                      </p>

                      <p
                        className="
                          mt-0.5
                          truncate
                          text-sm
                          font-medium
                          text-white
                          sm:text-base
                        "
                      >
                        {contact.value}
                      </p>
                    </div>

                    {/* Clickable indicator */}
                    <div
                      className="
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        border
                        border-white/30
                        text-white
                        transition-all
                        duration-300
                        group-hover:border-accent
                        group-hover:bg-accent
                        group-hover:text-[#0b2555]
                      "
                    >
                      <ArrowUpRight
                        size={15}
                        strokeWidth={2.2}
                      />
                    </div>
                  </motion.a>
                  
                ))}
              </div>
            </div>
          </div>

          {/* =================================================
              CONTACT FORM
          ================================================== */}

          <motion.div
            className="
              mt-12
              lg:mt-14
              lg:ml-[50%]
              lg:w-[calc(50%-1rem)]
            "
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
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
              delay: 0.25,
              ease,
            }}
          >
            <h3
              className="
                text-xs
                font-black
                tracking-wide
                text-white
              "
            >
              YOU CAN ALSO REACH ME HERE:
            </h3>

            <form
              onSubmit={handleSubmit}
              className="mt-6"
            >

              {/* Honeypot — hidden from real users */}
              <div
                className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
                aria-hidden="true"
              >
                <label htmlFor="website">
                  Website
                </label>

                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
              {/* NAME + EMAIL */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="
                      mb-2
                      block
                      text-[9px]
                      font-bold
                      tracking-wide
                      text-white
                    "
                  >
                    NAME
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="
                      h-10
                      w-full
                      border
                      border-white/40
                      bg-white/[0.08]
                      px-3
                      text-sm
                      font-medium
                      text-white
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-white/40
                      focus:border-accent
                      focus:bg-white/[0.12]
                    "
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="
                      mb-2
                      block
                      text-[9px]
                      font-bold
                      tracking-wide
                      text-white
                    "
                  >
                    EMAIL ADDRESS
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="
                      h-10
                      w-full
                      border
                      border-white/40
                      bg-white/[0.08]
                      px-3
                      text-sm
                      font-medium
                      text-white
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-white/40
                      focus:border-accent
                      focus:bg-white/[0.12]
                    "
                  />
                </div>
              </div>

              {/* SUBJECT */}
              <div className="mt-4">
                <label
                  htmlFor="subject"
                  className="
                    mb-2
                    block
                    text-[9px]
                    font-bold
                    tracking-wide
                    text-white
                  "
                >
                  SUBJECT
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  className="
                    h-10
                    w-full
                    border
                    border-white/40
                    bg-white/[0.08]
                    px-3
                    text-sm
                    font-medium
                    text-white
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-white/40
                    focus:border-accent
                    focus:bg-white/[0.12]
                  "
                />
              </div>

              {/* MESSAGE */}
              <div className="mt-4">
                <label
                  htmlFor="message"
                  className="
                    mb-2
                    block
                    text-[9px]
                    font-bold
                    tracking-wide
                    text-white
                  "
                >
                  MESSAGE
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="
                    w-full
                    resize-none
                    border
                    border-white/40
                    bg-white/[0.08]
                    px-3
                    py-3
                    text-sm
                    font-medium
                    text-white
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-white/40
                    focus:border-accent
                    focus:bg-white/[0.12]
                  "
                />
              </div>

              {/* SUBMIT */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="
                  mt-4
                  inline-flex
                  items-center
                  gap-1.5
                  bg-white
                  px-2.5
                  py-1.5
                  text-xs
                  font-black
                  tracking-[-0.01em]
                  text-[#0b2555]
                  transition-colors
                  duration-300
                  hover:bg-accent
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
                whileHover={
                  isSubmitting
                    ? undefined
                    : {
                        x: 3,
                      }
                }
                whileTap={
                  isSubmitting
                    ? undefined
                    : {
                        scale: 0.97,
                      }
                }
              >
                {isSubmitting ? "SENDING..." : "SUBMIT"}

                <ArrowUpRight
                  size={15}
                  strokeWidth={2.2}
                />
              </motion.button>

              {/* SUCCESS */}
              {status === "success" && (
                <motion.p
                  className="
                    mt-4
                    text-xs
                    font-bold
                    tracking-wide
                    text-white
                  "
                  initial={{
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                >
                  MESSAGE SENT. I&apos;LL GET BACK TO YOU SOON.
                </motion.p>
              )}

              {/* ERROR */}
              {status === "error" && (
                <motion.p
                  className="
                    mt-4
                    text-xs
                    font-bold
                    tracking-wide
                    text-accent
                  "
                  initial={{
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                >
                  SOMETHING WENT WRONG. PLEASE TRY AGAIN.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}