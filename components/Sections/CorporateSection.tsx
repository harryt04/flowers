import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { Building2, Users, Repeat2, Star } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Office-Ready Deliveries",
    description:
      "Fresh bouquets dropped off weekly — no coordination needed from your team.",
  },
  {
    icon: Users,
    title: "Employee Appreciation",
    description:
      "A simple, meaningful perk that says 'we see you' — and employees take home to their families.",
  },
  {
    icon: Repeat2,
    title: "Recurring Programs",
    description:
      "Weekly or bi-weekly subscriptions. Set it, forget it, enjoy it.",
  },
  {
    icon: Star,
    title: "Flexible & Personal",
    description:
      "From 10-person startups to large offices — we scale to fit your team and budget.",
  },
];

export function CorporateSection() {
  return (
    <section id="corporate" className="bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Image */}
          <div className="flex-shrink-0 w-full max-w-md mx-auto lg:mx-0 lg:w-2/5">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-border">
              <Image
                src="/concepts/trailer.png"
                alt="Just Because Flowers mobile trailer"
                width={480}
                height={560}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <p
              className="mb-3 font-semibold text-sunshine-yellow"
              style={{ fontFamily: "var(--font-accent)", fontSize: "1.25rem" }}
            >
              for your team
            </p>
            <h2
              className="text-4xl font-bold text-warm-charcoal sm:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Bring Sunshine to Your Workplace
            </h2>
            <p className="mt-4 text-lg leading-8 text-warm-gray">
              Your company isn&apos;t just buying flowers. You&apos;re investing in the moments that
              make employees feel genuinely valued — and that ripple outward to their homes, their
              families, and their attitude every Wednesday morning.
            </p>

            {/* Features */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {features.map(({ icon: Icon, title, description }) => (
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

            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
              <a
                href="#contact"
                className={buttonVariants({ size: "lg", className: "px-8 shadow-md text-lg" })}
                style={{ fontFamily: "var(--font-cta)" }}
              >
                Get Your Team Started
              </a>
              <p className="self-center text-sm text-warm-gray italic">
                No commitment — we&apos;d love to chat first.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
