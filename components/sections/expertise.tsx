const categories = [
  {
    title: "Software",
    items: ["Python", "PHP", "Java", "Kotlin", "C++"],
  },
  {
    title: "Web",
    items: [
      "Django",
      "Laravel",
      "Flask",
      "React",
      "Tailwind CSS",
      "REST APIs",
    ],
  },
  {
    title: "Systems & Infrastructure",
    items: [
      "Linux",
      "Windows",
      "Docker",
      "NGINX",
      "Apache",
      "Gunicorn",
    ],
  },
  {
    title: "Cloud",
    items: [
      "AWS EC2",
      "Google Cloud",
      "Microsoft Azure",
      "Cloudflare",
    ],
  },
  {
    title: "IoT & Embedded",
    items: [
      "Raspberry Pi",
      "Arduino",
      "ESP32",
      "ESP8266",
      "NRF24L01",
      "ARCore",
    ],
  },
];

export default function Expertise() {
  return (
    <section id="about" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Heading */}
          <div>
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              What I Work With
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              From application code to infrastructure.
            </h2>
          </div>

          {/* Skills */}
          <div className="divide-y divide-border border-y border-border">
            {categories.map((category) => (
              <div
                key={category.title}
                className="grid gap-4 py-7 sm:grid-cols-[180px_1fr]"
              >
                <h3 className="text-sm font-semibold">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-x-5 gap-y-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}