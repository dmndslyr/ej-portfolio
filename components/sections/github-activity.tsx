"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

type ContributionLevel =
  | "NONE"
  | "FIRST_QUARTILE"
  | "SECOND_QUARTILE"
  | "THIRD_QUARTILE"
  | "FOURTH_QUARTILE";

type ContributionDay = {
  date: string;
  contributionCount: number;
  contributionLevel: ContributionLevel;
};

type ContributionWeek = {
  firstDay: string;
  contributionDays: ContributionDay[];
};

type ContributionMonth = {
  name: string;
  year: number;
  firstDay: string;
  totalWeeks: number;
};

type ContributionCalendar = {
  totalContributions: number;
  months: ContributionMonth[];
  weeks: ContributionWeek[];
};

type GithubData = {
  username: string;
  profileUrl: string;
  calendar: ContributionCalendar;
};

const ease = [0.22, 1, 0.36, 1] as const;

const levelStyles: Record<ContributionLevel, string> = {
  NONE: "bg-foreground/[0.055]",
  FIRST_QUARTILE: "bg-primary/25",
  SECOND_QUARTILE: "bg-primary/45",
  THIRD_QUARTILE: "bg-primary/70",
  FOURTH_QUARTILE: "bg-primary",
};

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-[17px] w-[17px] fill-current"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.85 10.91.57.1.78-.25.78-.55v-2.14c-3.19.69-3.86-1.35-3.86-1.35-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.07.78 2.16v3.2c0 .31.21.66.79.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}

export default function GithubActivity() {
  const [data, setData] = useState<GithubData | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadContributions() {
      try {
        const response = await fetch("/api/github-contributions");

        if (!response.ok) {
          throw new Error("Failed to fetch contributions.");
        }

        const result = await response.json();

        if (result.error) {
          throw new Error(result.error);
        }

        setData(result);
      } catch {
        setError(true);
      }
    }

    loadContributions();
  }, []);

  const weeks = data?.calendar.weeks ?? [];

  const monthPositions = useMemo(() => {
    if (!data) return [];

    return data.calendar.months.map((month) => {
      const monthDate = new Date(`${month.firstDay}T00:00:00`);

      const position = weeks.findIndex((week) => {
        const firstDay = new Date(`${week.firstDay}T00:00:00`);
        const lastDay = new Date(firstDay);

        lastDay.setDate(lastDay.getDate() + 6);

        return monthDate >= firstDay && monthDate <= lastDay;
      });

      return {
        ...month,
        position: position === -1 ? 0 : position,
      };
    });
  }, [data, weeks]);

  return (
    <section id="github" className="border-t border-border">
      <div className="mx-auto max-w-[1540px]">
        <div className="px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">

          {/* Section label */}
          <motion.p
            className="text-sm font-bold tracking-wide text-primary"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{
              duration: 0.5,
              ease,
            }}
          >
            GITHUB ACTIVITY
          </motion.p>

          {/* Yellow rule */}
          <motion.div
            className="mt-4 h-[14px] w-full max-w-[980px] origin-left bg-accent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{
              duration: 0.8,
              delay: 0.05,
              ease,
            }}
          />

          {/* Heading */}
          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.7,
                delay: 0.12,
                ease,
              }}
            >
              <h2
                className="
                  text-4xl font-black
                  leading-[0.95]
                  tracking-[-0.055em]
                  text-foreground
                  sm:text-5xl
                  lg:text-[3.5rem]
                "
              >
                What I&apos;ve been building.
              </h2>

              <p
                className="
                  mt-4 max-w-[650px]
                  text-sm font-medium
                  leading-relaxed
                  text-muted
                  sm:text-base
                "
              >
                A snapshot of my development activity on GitHub over the past
                year.
              </p>
            </motion.div>

            {/* GitHub profile */}
            <motion.a
              href="https://github.com/dmndslyr"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group inline-flex w-fit shrink-0
                items-center gap-2
                text-xs font-bold
                tracking-[0.08em]
                text-foreground/70
                transition-colors duration-300
                hover:text-foreground
              "
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: 0.25,
                ease,
              }}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              <GithubIcon />

              <span>GITHUB / @dmndslyr</span>

              <ArrowUpRight
                size={14}
                strokeWidth={2}
                className="
                  transition-transform duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </motion.a>
          </div>

          {/* Contribution graph */}
          <motion.div
            className="
              mt-10
              border-y border-foreground/20
              sm:mt-12
            "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease,
            }}
          >
            {error ? (
              <div className="flex min-h-[180px] items-center justify-center">
                <p className="text-sm font-semibold text-muted">
                  GitHub activity is temporarily unavailable.
                </p>
              </div>
            ) : !data ? (
              /* Loading */
              <div className="overflow-hidden py-8">
                <div className="mx-auto h-3 w-36 bg-foreground/10" />

                <div className="mx-auto mt-7 flex w-fit gap-[5px]">
                  {Array.from({ length: 53 }).map((_, week) => (
                    <div
                      key={week}
                      className="flex shrink-0 flex-col gap-[5px]"
                    >
                      {Array.from({ length: 5 }).map((__, day) => (
                        <motion.div
                          key={day}
                          className="
                            h-[12px] w-[12px]
                            rounded-[2px]
                            bg-foreground/[0.07]
                          "
                          animate={{
                            opacity: [0.35, 0.7, 0.35],
                          }}
                          transition={{
                            duration: 1.6,
                            delay: (week % 10) * 0.05,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="py-7 sm:py-8">

                {/* Centered graph */}
                <div className="overflow-x-auto pb-2">
                  <motion.div
                    className="mx-auto w-fit min-w-[860px]"
                    initial={{
                      opacity: 0,
                      scale: 0.98,
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
                      duration: 0.65,
                      delay: 0.25,
                      ease,
                    }}
                  >
                    {/* Month labels */}
                    <div className="relative ml-10 h-6">
                      {monthPositions.map((month) => (
                        <span
                          key={`${month.name}-${month.year}`}
                          className="
                            absolute top-0
                            text-[9px] font-semibold
                            tracking-wide text-muted
                          "
                          style={{
                            left: `${month.position * 17}px`,
                          }}
                        >
                          {month.name.slice(0, 3)}
                        </span>
                      ))}
                    </div>

                   <div className="flex justify-center">

                    {/* Monday → Friday indicator */}
                    <div
                        className="
                        mr-3 flex w-7 shrink-0
                        flex-col items-center
                        pt-[5px]
                        "
                    >
                        <span
                        className="
                            text-[8px] font-bold
                            leading-[12px]
                            text-muted
                        "
                        >
                        M
                        </span>

                        <span
                        className="
                            my-[5px]
                            h-[38px] w-px
                            bg-foreground/20
                        "
                        />

                        <span
                        className="
                            text-[8px] font-bold
                            leading-[12px]
                            text-muted
                        "
                        >
                        F
                        </span>
                    </div>

                      {/* Contribution weeks */}
                      <div className="flex gap-[5px]">
                        {weeks.map((week) => {
                          const weekdays = week.contributionDays
                            .filter((day) => {
                              const weekday = new Date(
                                `${day.date}T00:00:00`
                              ).getDay();

                              return weekday >= 1 && weekday <= 5;
                            })
                            .sort((a, b) => {
                              return (
                                new Date(`${a.date}T00:00:00`).getDay() -
                                new Date(`${b.date}T00:00:00`).getDay()
                              );
                            });

                          return (
                            <div
                              key={week.firstDay}
                              className="
                                flex shrink-0
                                flex-col gap-[5px]
                              "
                            >
                              {weekdays.map((day) => (
                                <motion.div
                                  key={day.date}
                                  title={`${day.contributionCount} ${
                                    day.contributionCount === 1
                                      ? "contribution"
                                      : "contributions"
                                  } on ${formatDate(day.date)}`}
                                  aria-label={`${day.contributionCount} ${
                                    day.contributionCount === 1
                                      ? "contribution"
                                      : "contributions"
                                  } on ${formatDate(day.date)}`}
                                  className={`
                                    h-[12px] w-[12px]
                                    rounded-[2px]
                                    ${levelStyles[day.contributionLevel]}
                                    cursor-default
                                    transition-[filter]
                                    duration-200
                                    hover:brightness-125
                                  `}
                                  whileHover={{
                                    scale: 1.35,
                                  }}
                                />
                              ))}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Graph footer */}
                <div
                  className="
                    mx-auto mt-7
                    flex max-w-[900px]
                    flex-col gap-5
                    border-t border-foreground/10
                    pt-5
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                  "
                >
                  {/* Legend */}
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-semibold tracking-wide text-muted">
                      LESS
                    </span>

                    <div className="flex items-center gap-[4px]">
                      <span className="h-[10px] w-[10px] rounded-[2px] bg-foreground/[0.055]" />
                      <span className="h-[10px] w-[10px] rounded-[2px] bg-primary/25" />
                      <span className="h-[10px] w-[10px] rounded-[2px] bg-primary/45" />
                      <span className="h-[10px] w-[10px] rounded-[2px] bg-primary/70" />
                      <span className="h-[10px] w-[10px] rounded-[2px] bg-primary" />
                    </div>

                    <span className="text-[9px] font-semibold tracking-wide text-muted">
                      MORE
                    </span>
                  </div>

                  {/* Contribution total */}
                  <div className="flex items-baseline gap-2">
                    <span
                      className="
                        text-2xl font-black
                        tracking-[-0.05em]
                        text-foreground
                        sm:text-3xl
                      "
                    >
                      {data.calendar.totalContributions}
                    </span>

                    <span
                      className="
                        text-[9px] font-bold
                        tracking-[0.08em]
                        text-muted
                        sm:text-[10px]
                      "
                    >
                      CONTRIBUTIONS IN THE LAST YEAR
                    </span>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {/* View GitHub */}
          {data && (
            <motion.div
              className="mt-6 flex justify-end"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.3,
                ease,
              }}
            >
              <motion.a
                href={data.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group inline-flex
                  items-center gap-2
                  border border-foreground/20
                  px-3 py-2
                  text-[10px] font-bold
                  tracking-[0.08em]
                  text-foreground
                  transition-all duration-300
                  hover:border-foreground
                  hover:bg-foreground
                  hover:text-background
                "
                whileHover={{ x: 3 }}
                whileTap={{ scale: 0.97 }}
              >
                VIEW GITHUB

                <ArrowUpRight
                  size={13}
                  strokeWidth={2}
                  className="
                    transition-transform duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </motion.a>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}