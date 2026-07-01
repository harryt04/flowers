import { Check } from "lucide-react";

export function PricingSection() {
  const tiers = [
    {
      name: "Mini",
      price: 12,
      stems: 5,
      popular: false,
      features: ["5 hand-selected stems", "Choice of wrap", "Kindness card"],
    },
    {
      name: "Signature",
      price: 18,
      stems: 8,
      popular: true,
      features: ["8 hand-selected stems", "Choice of wrap", "Kindness card"],
    },
    {
      name: "Deluxe",
      price: 25,
      stems: 12,
      popular: false,
      features: ["12 hand-selected stems", "Choice of wrap", "Kindness card"],
    },
  ];

  return (
    <section id="pricing" className="bg-warm-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2
            className="text-4xl font-bold text-warm-charcoal sm:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Simple Pricing
          </h2>
          <p className="mt-4 text-lg text-warm-gray">
            Choose your perfect bouquet
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border-2 p-8 transition-all ${
                tier.popular
                  ? "border-sunshine-yellow bg-white shadow-lg scale-105"
                  : "border-border bg-white hover:shadow-md"
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span
                    className="inline-block rounded-full bg-sunshine-yellow/10 px-3 py-1 text-sm font-semibold text-warm-charcoal border border-sunshine-yellow/30"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Most Popular
                  </span>
                </div>
              )}

              {/* Tier Name */}
              <h3
                className="text-2xl font-bold text-warm-charcoal"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {tier.name}
              </h3>

              {/* Price */}
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-warm-charcoal">
                  ${tier.price}
                </span>
                <span className="text-warm-gray">per bouquet</span>
              </div>

              {/* Stems */}
              <p className="mt-2 text-sm text-warm-gray">
                {tier.stems} hand-selected stems
              </p>

              {/* Features */}
              <ul className="mt-8 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="h-5 w-5 flex-shrink-0 text-soft-green" />
                    <span className="text-warm-charcoal">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
