import { Ruler, Flower2, Heart, Gift, Sun } from 'lucide-react'

export function HowItWorksSection() {
  const steps = [
    { step: 1, title: 'Choose your bouquet size', icon: Ruler },
    { step: 2, title: 'Build your bouquet', icon: Flower2 },
    { step: 3, title: 'Pick a kindness card', icon: Heart },
    { step: 4, title: 'Wrap it beautifully', icon: Gift },
    { step: 5, title: "Brighten someone's day", icon: Sun },
  ]

  return (
    <section id="how-it-works" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2
            className="text-warm-charcoal text-4xl font-bold sm:text-5xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            How It Works
          </h2>
          <p className="text-warm-gray mt-4 text-lg">
            Five simple steps to spreading sunshine
          </p>
        </div>

        <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:gap-0">
          {/* Connecting lines background (desktop only) */}
          <div className="bg-warm-charcoal/10 absolute top-1/3 right-0 left-0 hidden h-px md:block" />

          {steps.map((item) => {
            const IconComponent = item.icon
            return (
              <div
                key={item.step}
                className="relative z-10 flex flex-1 flex-col items-center"
              >
                {/* Step Icon */}
                <div className="bg-accent/15 mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                  <IconComponent className="text-accent h-8 w-8" />
                </div>
                {/* Step Number and Title */}
                <div className="text-center">
                  <div
                    className="text-warm-charcoal mb-3 text-xl font-bold"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {item.step}
                  </div>
                  <h3
                    className="text-warm-charcoal text-lg font-semibold"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {item.title}
                  </h3>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
