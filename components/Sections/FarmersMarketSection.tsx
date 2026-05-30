import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { MapPin, Calendar, ShoppingBag, Camera } from "lucide-react";

const highlights = [
  {
    icon: Calendar,
    label: "Every [Day TBD]",
    detail: "Weekly at the farmers market — rain or shine",
  },
  {
    icon: MapPin,
    label: "[Location TBD]",
    detail: "Come find our sunshine yellow tent",
  },
  {
    icon: ShoppingBag,
    label: "Fresh Bouquets",
    detail: "Seasonal stems, hand-selected each week",
  },
  {
    icon: Camera,
    label: "Photo Moments",
    detail: "Mirror, string lights & a vibe you'll want to capture",
  },
];

export function FarmersMarketSection() {
  return (
    <section id="market" className="bg-warm-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="flex flex-col gap-12 lg:flex-row-reverse lg:items-center lg:gap-16">
          {/* Image */}
          <div className="flex-shrink-0 w-full max-w-md mx-auto lg:mx-0 lg:w-2/5">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-border">
              <Image
                src="/concepts/tent.png"
                alt="Just Because Flowers market tent"
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
              find us
            </p>
            <h2
              className="text-4xl font-bold text-warm-charcoal sm:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Come Say Hi at the Market
            </h2>
            <p className="mt-4 text-lg leading-8 text-warm-gray">
              Our sunshine yellow tent is hard to miss. Come smell the blooms, build your own
              bouquet, and bring a little warmth home — for yourself or someone you love.
            </p>

            {/* Highlights */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {highlights.map(({ icon: Icon, label, detail }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sunshine-yellow/30">
                    <Icon className="h-5 w-5 text-warm-charcoal" />
                  </div>
                  <div>
                    <p
                      className="font-semibold text-warm-charcoal text-sm"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {label}
                    </p>
                    <p className="text-xs leading-5 text-warm-gray">{detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="#email"
                className={buttonVariants({
                  size: "lg",
                  className: "px-8 shadow-md",
                })}
              >
                Get Market Updates
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
