export function HowItWorksSection() {
  const steps = [
    { step: 1, title: "Pick Your Flowers" },
    { step: 2, title: "Build Your Bouquet" },
    { step: 3, title: "Choose Your Wrap" },
    { step: 4, title: "Spread the Joy" },
  ];

  return (
    <section id="how-it-works" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2
            className="text-4xl font-bold text-warm-charcoal sm:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            How It Works
          </h2>
          <p className="mt-4 text-lg text-warm-gray">
            Four simple steps to spreading sunshine
          </p>
        </div>

        <div className="relative flex flex-col gap-8 md:flex-row md:gap-0 md:items-center">
          {/* Connecting lines background (desktop only) */}
          <div className="hidden md:block absolute left-0 right-0 top-1/3 h-px bg-warm-charcoal/10" />

          {steps.map((item) => (
            <div
              key={item.step}
              className="flex flex-col items-center flex-1 relative z-10"
            >
              {/* Step Number and Title */}
              <div className="text-center">
                <div
                  className="mb-3 text-xl font-bold text-warm-charcoal"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.step}
                </div>
                <h3
                  className="text-lg font-semibold text-warm-charcoal"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
