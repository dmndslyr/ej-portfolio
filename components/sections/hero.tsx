import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative h-screen w-full overflow-hidden bg-[#071426]"
    >
      {/* =========================================================
          LAYER 0 — BACKGROUND IMAGE
          Right-side visual area
      ========================================================= */}
      <div className="absolute inset-y-0 right-0 z-0 hidden w-[48%] lg:block">
        <img
          src="/images/profile/hero_bg.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Dark treatment */}
        <div className="absolute inset-0 bg-[#071426]/55" />

        {/* Blue atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_35%,rgba(37,99,235,0.3),transparent_55%)]" />
      </div>

      {/* =========================================================
          LAYER 10 — FULL-WIDTH GRID
          Grid sits ABOVE background image
      ========================================================= */}
      <div
        className="pointer-events-none absolute inset-0 z-10 tech-grid-fade"
        aria-hidden="true"
      />

      {/* =========================================================
          LAYER 20 — FOREGROUND IMAGE
          SAME SIZE AS BACKGROUND IMAGE
      ========================================================= */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 hidden w-[48%] lg:block">
        <img
          src="/images/profile/hero_fg.png"
          alt="Edriene Jay Cabanela"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Blend foreground into left side
        <div className="absolute inset-0 bg-gradient-to-r from-[#071426] via-[#071426]/20 to-transparent" /> */}

        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071426] via-transparent to-transparent" />
      </div>

      {/* =========================================================
          LAYER 30 — CONTENT
      ========================================================= */}
      <div className="relative z-30 flex h-full w-full items-center px-6 pt-28 pb-10 sm:px-10 lg:px-16">
        <div className="w-full lg:w-[52%]">
          <div className="max-w-[680px]">
            <p className="text-base font-bold tracking-tight text-white sm:text-lg">
              EDRIENE JAY CABANELA
            </p>

            <p className="mt-1 text-sm font-bold tracking-wide text-primary-bright sm:text-base">
              COMPUTER ENGINEER.
            </p>

            <h1 className="mt-7 text-[clamp(3rem,4.1vw,4.8rem)] font-black leading-[0.91] tracking-[-0.055em] text-white">
              I build software,
              <br />
              systems, and
              <br />
              connected
              <br />
              technology.
            </h1>

            <div className="mt-6 h-2.5 w-60 bg-accent" />

            <p className="mt-5 max-w-[620px] text-sm leading-[1.35] text-white/85 sm:text-base">
              Computer Engineering graduate specializing in System and
              Network Administration, with hands-on experience across web,
              mobile, cloud, and IoT application development.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group flex items-center gap-2 bg-primary px-4 py-2.5 text-sm font-bold text-white transition hover:bg-primary-bright sm:text-base"
              >
                PROJECTS

                <ArrowUpRight
                  size={20}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href="/cv/Edriene_Jay_Cabanela_CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 border border-white/60 px-4 py-2.5 text-sm font-bold text-white transition hover:border-white hover:bg-white/10 sm:text-base"
              >
                GET CV

                <ArrowDown
                  size={20}
                  className="transition-transform group-hover:translate-y-1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          LAYER 40 — BOTTOM FADE
          Fades the grid and hero into the next section
      ========================================================= */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-20 bg-gradient-to-t from-[#071426] via-[#071426]/70 to-transparent"
        aria-hidden="true"
      />

      {/* =========================================================
          LAYER 50 — SCROLL INDICATOR
      ========================================================= */}
      <a
        href="#projects"
        aria-label="Scroll to projects"
        className="absolute bottom-6 left-1/2 z-50 hidden -translate-x-1/2 text-white/70 transition hover:text-white lg:block"
      >
        <ArrowDown size={22} strokeWidth={1.8} />
      </a>
    </section>
  );
}