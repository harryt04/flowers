import { Ruler, Flower2, Heart, Gift, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'

export function HowItWorksSection() {
  const steps = [
    { step: 1, title: 'Choose your bouquet size', icon: Ruler },
    { step: 2, title: 'Build your bouquet', icon: Flower2 },
    { step: 3, title: 'Pick a kindness card', icon: Heart },
    { step: 4, title: 'Wrap it beautifully', icon: Gift },
    { step: 5, title: "Brighten someone's day", icon: Sun },
  ]

  return (
    <section id="how-it-works" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2
            className="text-foreground text-4xl font-bold sm:text-5xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            How It Works
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Five simple steps to spreading sunshine
          </p>
        </div>

        <div className="relative grid grid-cols-2 gap-x-6 gap-y-10 md:flex md:items-center md:gap-0">
          {/* Connecting lines background (desktop only) */}
          <div className="bg-foreground/10 absolute top-1/3 right-0 left-0 hidden h-px md:block" />

          {steps.map((item, index) => {
            const IconComponent = item.icon
            const isLast = index === steps.length - 1
            return (
              <div
                key={item.step}
                className={cn(
                  'relative z-10 flex flex-col items-center md:flex-1',
                  isLast && 'col-span-2 justify-self-center md:col-span-1 md:justify-self-auto'
                )}
              >
                {/* Step Icon */}
                <div className="bg-accent/15 mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                  <IconComponent className="text-accent h-8 w-8" />
                </div>
                {/* Step Number and Title */}
                <div className="text-center">
                  <div
                    className="text-foreground mb-3 text-xl font-bold"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {item.step}
                  </div>
                  <h3
                    className="text-foreground text-lg font-semibold"
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
