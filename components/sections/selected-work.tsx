"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { projects } from "@/data/projects";

export default function SelectedWork() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  return (
    <section id="projects" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

        {/* Section heading */}
        <div className="mb-16 flex items-end justify-between gap-8">
          <div>
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              Selected Work
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Projects with purpose.
            </h2>
          </div>

          <p className="hidden max-w-sm text-sm leading-6 text-muted md:block">
            A selection of software, infrastructure, mobile,
            and embedded systems projects.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-6">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="group grid overflow-hidden rounded-xl border border-border bg-surface md:grid-cols-[1.2fr_1fr]"
            >
              {/* Project visual */}
              <div className="flex min-h-[360px] items-center justify-center bg-surface-muted p-10">
                <div className="text-center">
                  <span className="text-xs font-medium tracking-[0.2em] text-muted uppercase">
                    Project Preview
                  </span>

                  <div className="mt-4 text-5xl font-black tracking-tight">
                    {project.title}
                  </div>
                </div>
              </div>

              {/* Project information */}
              <div className="flex flex-col justify-between p-8 lg:p-10">
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-xs font-medium text-primary">
                      {project.category}
                    </span>

                    <span className="text-xs text-muted">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold">
                    {project.subtitle}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-muted">
                    {project.description}
                  </p>
                </div>

                <div className="mt-10">
                  {/* Technologies */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Case study */}
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-opacity hover:opacity-70"
                  >
                    View case study
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}