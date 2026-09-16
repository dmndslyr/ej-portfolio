export default function Education() {
  return (
    <section id="education" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
        {/* Section heading */}
        <div className="mb-10 flex items-end justify-between gap-8 border-b border-border pb-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              Education
            </p>

            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
              Academic background.
            </h2>
          </div>

          <div className="hidden h-1 w-40 bg-accent sm:block" />
        </div>

        {/* Education entry */}
        <div className="grid gap-6 lg:grid-cols-[180px_1fr]">
          <div>
            <p className="text-sm font-medium text-muted">
              CLASS OF 2026
            </p>
          </div>

          <div className="border-l border-border pl-6">
            <p className="text-xs font-semibold tracking-[0.15em] text-primary uppercase">
              Pangasinan State University
            </p>

            <h3 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
              BS Computer Engineering
            </h3>

            <p className="mt-2 text-sm font-semibold text-muted uppercase">
              Major in System and Network Administration
            </p>

            <p className="mt-4 text-sm text-muted">
              Urdaneta City Campus
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}