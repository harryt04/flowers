import { buttonVariants } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="top" className="border-b border-border/60 bg-gradient-to-b from-cream to-warm-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-warm-gray">
          Just Because Flowers
        </p>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-warm-charcoal sm:text-5xl">
          Spreading Sunshine, One Bouquet at a Time
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-warm-gray sm:text-lg">
          Welcome in. We create fresh, heartfelt bouquets that help people feel seen, celebrated,
          and connected—just because.
        </p>
        <div className="mt-8">
          <a href="#market" className={buttonVariants({ size: "lg", className: "px-6" })}>
            Find Us at the Market
          </a>
        </div>
      </div>
    </section>
  );
}
