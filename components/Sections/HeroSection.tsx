import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-[#fffbe6] to-cream border-b border-border/60">
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <p
              className="mb-4 inline-block rounded-full bg-sunshine-yellow/40 px-4 py-1.5 text-sm font-semibold tracking-widest text-warm-charcoal uppercase"
              style={{ fontFamily: "var(--font-accent)" }}>
              sunshine flower bar
            </p>
            <h1
              className="text-5xl font-bold leading-tight text-warm-charcoal sm:text-6xl lg:text-7xl"
              style={{ fontFamily: "var(--font-display)" }}>
              Share Kindness. Brighten Someone&apos;s Day.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-warm-gray">
              A mobile flower bar for markets, pop-ups, showers, birthdays,
              corporate events, and just-because moments.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <a
                href="#contact"
                className={buttonVariants({
                  size: "lg",
                  className: "px-8 py-6 text-lg shadow-md",
                })}
                style={{ fontFamily: "var(--font-cta)" }}>
                Book an Event
              </a>
              <a
                href="#pop-ups"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "px-8 py-6 text-base border-warm-charcoal/30",
                })}>
                Find Upcoming Pop-Ups
              </a>
            </div>
          </div>

          {/* Banner image */}
          <div className="flex-shrink-0 w-full max-w-sm lg:max-w-md">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-sunshine-yellow/50">
              <Image
                src="/logo.png"
                alt="Sunshine Flower Bar mobile flower stand with fresh bouquets"
                width={700}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
