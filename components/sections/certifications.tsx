"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const certifications = [
  {
    date: "MAR 2026",
    title: "Google Cloud Certified: Cloud Digital Leader",
    issuer: "Google Cloud",
    href: "", // Add your actual credential URL
  },
  {
    date: "APR 2026",
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    href: "", // Add your actual credential URL
  },
  {
    date: "MAR 2026",
    title: "Civil Service Eligibility – Professional Level",
    issuer: "Civil Service Commission",
    href: "",
  },
];

const trainings = [
  {
    date: "AUG 27, 2026",
    title: "Exit Conference and Job Hunting Seminar",
    issuer: "DOST – Region 1",
    href: "",
  },
  {
    date: "JUL 7–11, 2026",
    title: "Web Content Management with WordPress",
    issuer: "DICT – Cordillera Administrative Region",
    href: "",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

function CredentialLink({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  if (!href) {
    return (
      <h3
        className="
          text-lg
          font-black
          leading-tight
          tracking-[-0.03em]
          text-foreground
          sm:text-xl
        "
      >
        {title}
      </h3>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View credential for ${title}`}
      className="
        group/link
        inline-flex
        flex-wrap
        items-center
        gap-x-3
        gap-y-1
        text-lg
        font-black
        leading-tight
        tracking-[-0.03em]
        text-foreground
        sm:text-xl
      "
    >
      <span
        className="
          underline
          decoration-transparent
          underline-offset-4
          transition-all
          duration-300
          group-hover/link:decoration-current
        "
      >
        {title}
      </span>

      <span
        className="
          inline-flex
          items-center
          gap-1
          border
          border-foreground/30
          px-1.5
          py-0.5
          text-[8px]
          font-bold
          tracking-[0.08em]
          text-foreground/70
          transition-all
          duration-300
          group-hover/link:border-foreground
          group-hover/link:text-foreground
        "
      >
        CREDENTIAL

        <ArrowUpRight
          size={10}
          strokeWidth={2}
          className="
            transition-transform
            duration-300
            group-hover/link:translate-x-0.5
            group-hover/link:-translate-y-0.5
          "
        />
      </span>
    </a>
  );
}

function CertificationItem({
  item,
  index,
}: {
  item: (typeof certifications)[number];
  index: number;
}) {
  return (
    <motion.article
      className="
        grid
        gap-3
        py-5
        sm:grid-cols-[150px_1fr]
        sm:gap-8
      "
      initial={{
        opacity: 0,
        y: 18,
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
        duration: 0.55,
        delay: index * 0.08,
        ease,
      }}
    >
      <p
        className="
          text-xs
          font-semibold
          tracking-wide
          text-foreground
          sm:text-sm
        "
      >
        {item.date}
      </p>

      <div>
        <CredentialLink
          title={item.title}
          href={item.href}
        />

        <p
          className="
            mt-1
            text-sm
            font-medium
            text-foreground/70
          "
        >
          {item.issuer}
        </p>
      </div>
    </motion.article>
  );
}

function TrainingItem({
  item,
  index,
}: {
  item: (typeof trainings)[number];
  index: number;
}) {
  return (
    <motion.article
      className="
        grid
        gap-3
        py-5
        sm:grid-cols-[150px_1fr]
        sm:gap-8
      "
      initial={{
        opacity: 0,
        y: 18,
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
        duration: 0.55,
        delay: index * 0.08,
        ease,
      }}
    >
      <p
        className="
          text-xs
          font-semibold
          tracking-wide
          text-foreground
          sm:text-sm
        "
      >
        {item.date}
      </p>

      <div>
        <CredentialLink
          title={item.title}
          href={item.href}
        />

        <p
          className="
            mt-1
            text-sm
            font-medium
            text-foreground/70
          "
        >
          {item.issuer}
        </p>
      </div>
    </motion.article>
  );
}

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="border-t border-border"
    >
      <div className="mx-auto max-w-[1540px]">
        <div
          className="
            bg-background
            px-6 py-14
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
            TRAININGS AND CERTIFICATIONS
          </motion.p>

          {/* Yellow rule */}
          <motion.div
            className="
              mt-4
              h-[14px]
              w-full
              max-w-[800px]
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
            Continuous learning.
          </motion.h2>

          {/* Certifications */}
          <div className="mt-10">
            <motion.h3
              className="
                border-b
                border-foreground/25
                pb-2
                text-sm
                font-black
                tracking-wide
                text-accent
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
                delay: 0.3,
              }}
            >
              CERTIFICATIONS
            </motion.h3>

            <div>
              {certifications.map((item, index) => (
                <div
                  key={item.title}
                  className="border-b border-foreground/10"
                >
                  <CertificationItem
                    item={item}
                    index={index}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Trainings */}
          <div className="mt-8">
            <motion.h3
              className="
                border-b
                border-foreground/25
                pb-2
                text-sm
                font-black
                tracking-wide
                text-accent
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
                delay: 0.35,
              }}
            >
              TRAININGS
            </motion.h3>

            <div>
              {trainings.map((item, index) => (
                <div
                  key={`${item.title}-${item.date}`}
                  className="border-b border-foreground/10 last:border-b-0"
                >
                  <TrainingItem
                    item={item}
                    index={index}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}