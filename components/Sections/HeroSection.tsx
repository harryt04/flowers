import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-[#fffbe6] to-cream border-b border-border/60">
      {/* Decorative background circles */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-sunshine-yellow/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-72 w-72 rounded-full bg-soft-green/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <p
              className="mb-4 inline-block rounded-full bg-sunshine-yellow/40 px-4 py-1.5 text-sm font-semibold tracking-widest text-warm-charcoal uppercase"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              just because flowers
            </p>
            <h1
              className="text-5xl font-bold leading-tight text-warm-charcoal sm:text-6xl lg:text-7xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Spreading Sunshine,{" "}
              <span className="italic text-[#b8860b]">One Bouquet</span>{" "}
              at a Time
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-warm-gray">
              Fresh, heartfelt bouquets that help people feel seen, celebrated,
              and connected — just because.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <a href="#market" className={buttonVariants({ size: "lg", className: "px-8 py-6 text-base shadow-md" })}>
                Find Us at the Market
              </a>
              <a
                href="#corporate"
                className={buttonVariants({ variant: "outline", size: "lg", className: "px-8 py-6 text-base border-warm-charcoal/30" })}
              >
                Corporate Programs
              </a>
            </div>
          </div>

          {/* Banner image */}
          <div className="flex-shrink-0 w-full max-w-sm lg:max-w-md">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-sunshine-yellow/50">
              <Image
                src="/concepts/banner.png"
                alt="Just Because Flowers — Spreading Sunshine, One Bouquet at a Time"
                width={500}
                height={380}
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
