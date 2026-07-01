import Image from "next/image";
import { Heart, Sun, Sparkles, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Made with Care",
    description: "Every bouquet is chosen with intention, not just assembled.",
  },
  {
    icon: Sun,
    title: "Everyday Sunshine",
    description: "Flowers don't need a reason. That's kind of the whole point.",
  },
  {
    icon: Sparkles,
    title: "Joyful Moments",
    description: "We're here to spark something — a smile, a memory, a feeling.",
  },
  {
    icon: Users,
    title: "Real Connection",
    description: "Gifting flowers says 'I was thinking of you' without a single word.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Image */}
          <div className="flex-shrink-0 w-full max-w-md mx-auto lg:mx-0 lg:w-2/5">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-border">
              <Image
                src="/concepts/brand.png"
                alt="Sunshine Flower Bar founder with bouquets and floral arrangements"
                width={480}
                height={560}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <p
              className="mb-3 text-base font-semibold text-sunshine-yellow"
              style={{ fontFamily: "var(--font-accent)", fontSize: "1.25rem" }}
            >
              our story
            </p>
            <h2
              className="text-4xl font-bold text-warm-charcoal sm:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              We&apos;re not just selling flowers
            </h2>
            <p className="mt-4 text-lg leading-8 text-warm-gray">
              We&apos;re selling thoughtfulness. Connection. The feeling of someone seeing you and
              saying — you matter. Every stem we hand you carries that intention.
            </p>
            <p className="mt-3 text-base leading-7 text-warm-gray">
              Whether it&apos;s for celebration, comfort, or simply &quot;just because,&quot; we want each
              bouquet to feel like a little burst of sunshine in your day.
            </p>

            {/* Values grid */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {values.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="flex items-start gap-3 rounded-2xl bg-background p-4 border border-border/60 shadow-sm"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sunshine-yellow/30">
                    <Icon className="h-5 w-5 text-warm-charcoal" />
                  </div>
                  <div>
                    <p
                      className="font-semibold text-warm-charcoal text-sm"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {title}
                    </p>
                    <p className="text-xs leading-5 text-warm-gray mt-0.5">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
