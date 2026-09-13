import { ArrowUpRight, Mail } from "lucide-react";

const links = [
  {
    label: "Email",
    value: "edrienecabanela@gmail.com",
    href: "mailto:edrienecabanela@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/dmndslyr",
    href: "https://github.com/dmndslyr",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/edrienejaycabanela",
    href: "https://linkedin.com/in/edrienejaycabanela",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-border"
    >
      <div className="mx-auto max-w-7xl px-6 py-32 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1fr_0.7fr]">

          {/* Heading */}
          <div>
            <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              Contact
            </p>

            <h2 className="max-w-3xl text-5xl font-black tracking-tight sm:text-7xl">
              Let&apos;s build something useful.
            </h2>

            <p className="mt-8 max-w-xl text-base leading-7 text-muted">
              Whether you&apos;re looking for a developer,
              collaborating on a project, or simply want to
              connect, feel free to reach out.
            </p>
          </div>

          {/* Contact links */}
          <div className="border-t border-border">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={
                  link.label === "Email"
                    ? undefined
                    : "_blank"
                }
                rel={
                  link.label === "Email"
                    ? undefined
                    : "noreferrer"
                }
                className="group flex items-center justify-between border-b border-border py-6"
              >
                <div className="flex items-center gap-4">

                  {/* Icon / Brand Mark */}
                  {link.label === "Email" ? (
                    <Mail
                      size={19}
                      className="text-primary"
                    />
                  ) : (
                    <span className="w-[19px] text-center text-xs font-bold text-primary">
                      {link.label === "GitHub"
                        ? "GH"
                        : "in"}
                    </span>
                  )}

                  <div>
                    <p className="text-xs text-muted">
                      {link.label}
                    </p>

                    <p className="mt-1 text-sm font-medium">
                      {link.value}
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={17}
                  className="text-muted transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary"
                />
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}