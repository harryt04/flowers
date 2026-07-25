import Image from 'next/image'
import { buttonVariants } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section
      id="top"
      className="from-secondary to-background dark:from-primary/10 dark:via-background dark:to-background border-border/60 relative overflow-hidden border-b bg-gradient-to-b"
    >
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <Image
              src="/concepts/logo.png"
              alt="Sunshine Flower Bar"
              width={220}
              height={139}
              className="mb-4 inline-block h-auto w-40 sm:w-48"
              priority
            />
            <h1
              className="text-foreground text-5xl leading-tight font-bold sm:text-6xl lg:text-7xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Build a Bouquet. Share Kindness. Brighten Someone&apos;s Day.
            </h1>
            <p className="text-muted-foreground mt-6 max-w-xl text-lg leading-8">
              Sunshine Flower Bar is a mobile flower experience bringing
              beautiful blooms, meaningful moments, and kindness to markets,
              parties, weddings, and corporate events.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <a
                href="/#contact"
                className={buttonVariants({
                  size: 'lg',
                  className: 'px-8 py-6 text-lg shadow-md',
                })}
                style={{ fontFamily: 'var(--font-cta)' }}
              >
                Book a Flower Bar
              </a>
              <a
                href="/#pop-ups"
                className={buttonVariants({
                  variant: 'outline',
                  size: 'lg',
                  className:
                    'border-accent text-accent hover:bg-accent/10 px-8 py-6 text-base',
                })}
              >
                See Upcoming Pop-Ups
              </a>
            </div>
          </div>

          {/* Banner image */}
          <div className="w-full max-w-sm flex-shrink-0 lg:max-w-md">
            <div className="border-primary/50 relative overflow-hidden rounded-3xl border-4 shadow-2xl">
              <Image
                src="/images/about/collage/flower-bar-cart.png"
                alt="Sunshine Flower Bar's flower cart set up at an outdoor pop-up"
                width={700}
                height={500}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
