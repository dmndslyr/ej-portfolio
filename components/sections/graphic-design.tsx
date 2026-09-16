import { ArrowUpRight } from "lucide-react";

export default function GraphicDesign() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              Graphic Designer
            </p>

            <h2 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              I also do
              <br className="sm:hidden" /> Graphic Design.
            </h2>
          </div>

          <a
            href="#"
            className="group flex w-fit items-center gap-2 bg-primary px-4 py-2.5 text-sm font-bold text-white transition hover:bg-primary-bright"
          >
            VISIT MY GRAPHIC DESIGN PORTFOLIO
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}