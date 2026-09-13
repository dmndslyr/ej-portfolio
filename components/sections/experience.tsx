export default function Experience() {
  return (
    <section id="experience" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        
        {/* Section heading */}
        <div className="mb-16">
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            Experience
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Professional experience.
          </h2>
        </div>

        {/* Experience item */}
        <div className="border-t border-border">
          <div className="grid gap-6 border-b border-border py-8 md:grid-cols-[180px_1fr_160px]">
            
            <span className="text-sm text-muted">
              Jun – Jul 2025
            </span>

            <div>
              <h3 className="text-xl font-semibold">
                Web Development Intern
              </h3>

              <p className="mt-1 text-sm text-primary">
                DILG-CAR
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
                Developed frontend and backend modules for a
                Recruitment and Placement Portal using Laravel
                and MySQL, including applicant, administrator,
                examination, PDS, WES, and authentication
                workflows.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "Laravel",
                  "PHP",
                  "MySQL",
                  "Tailwind CSS",
                  "REST APIs",
                ].map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <span className="text-sm text-muted md:text-right">
              Baguio City
            </span>

          </div>
        </div>
      </div>
    </section>
  );
}