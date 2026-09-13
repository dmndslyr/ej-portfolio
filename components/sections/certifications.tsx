const certifications = [
  {
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "2026",
  },
  {
    name: "Cloud Digital Leader",
    issuer: "Google Cloud",
    date: "2026",
  },
  {
    name: "Civil Service Eligibility",
    issuer: "Professional Level",
    date: "2026",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="border-t border-border"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

        {/* Section heading */}
        <div className="mb-16">
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            Certifications
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Continuous learning.
          </h2>
        </div>

        {/* Certifications */}
        <div className="grid gap-6 md:grid-cols-3">
          {certifications.map((certification) => (
            <article
              key={certification.name}
              className="rounded-xl border border-border bg-surface p-7 transition-colors hover:border-primary"
            >
              <p className="text-xs text-muted">
                {certification.date}
              </p>

              <h3 className="mt-5 text-lg font-semibold leading-7">
                {certification.name}
              </h3>

              <p className="mt-2 text-sm text-primary">
                {certification.issuer}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}