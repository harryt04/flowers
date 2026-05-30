import { buttonVariants } from "@/components/ui/button";

export function FarmersMarketSection() {
  return (
    <section id="market" className="bg-warm-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <h2 className="text-3xl font-semibold tracking-tight text-warm-charcoal">
          Find Us at the Market
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-warm-gray">
          Join us every [day] at [location] for fresh bouquet bundles, seasonal stems, and sweet
          surprises. We love helping you pick the perfect arrangement for your table, a friend, or
          a little treat for yourself.
        </p>
        <p className="mt-3 max-w-3xl text-base leading-7 text-warm-gray">
          Come say hi, smell the blooms, and bring a little sunshine home.
        </p>
        <div className="mt-8">
          <a
            href="#email"
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className: "border-sunshine-yellow",
            })}
          >
            Get Weekly Market Updates
          </a>
        </div>
      </div>
    </section>
  );
}
