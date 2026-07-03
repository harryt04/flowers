import Image from 'next/image'
import { Heart, Sun, Sparkles, Users } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Made with Care',
    description: 'Every bouquet is chosen with intention, not just assembled.',
  },
  {
    icon: Sun,
    title: 'Everyday Sunshine',
    description: "Flowers don't need a reason. That's kind of the whole point.",
  },
  {
    icon: Sparkles,
    title: 'Joyful Moments',
    description:
      "We're here to spark something — a smile, a memory, a feeling.",
  },
  {
    icon: Users,
    title: 'Real Connection',
    description:
      "Gifting flowers says 'I was thinking of you' without a single word.",
  },
]

export function OurStorySection() {
  return (
    <section id="about" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        {/* Mobile layout: stack vertically */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
          {/* Bio Text - Left on desktop, top on mobile */}
          <div className="flex-1 lg:order-1">
            <h2
              className="text-foreground text-4xl font-bold sm:text-5xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Hi, I&apos;m Elisabeth
            </h2>
            <p className="text-muted-foreground mt-6 text-lg leading-8">
              I believe flowers are a love language. For years, I watched people
              light up when they received unexpected blooms &mdash; and I
              realized that moment of joy was something the world needed more
              of.
            </p>
            <p className="text-muted-foreground mt-4 text-lg leading-8">
              Sunshine Flower Bar started as a simple idea: make it easy for
              people to spread sunshine to anyone, anytime. Whether it&apos;s
              celebrating a win, offering comfort, or just saying &quot;I&apos;m
              thinking of you&quot; &mdash; every bouquet is handpicked with
              intention and wrapped with care.
            </p>
            <p className="text-muted-foreground mt-4 text-lg leading-8">
              Each stem is sourced from local growers and arranged to celebrate
              the season. And with every order, you&apos;ll include a
              handwritten Kindness Card &mdash; because the real gift isn&apos;t
              just flowers, it&apos;s the message behind them.
            </p>

            {/* Values grid */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {values.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="bg-background border-border/60 flex items-start gap-3 rounded-2xl border p-4 shadow-sm"
                >
                  <div className="bg-primary/30 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl">
                    <Icon className="text-foreground h-5 w-5" />
                  </div>
                  <div>
                    <p
                      className="text-foreground text-sm font-semibold"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {title}
                    </p>
                    <p className="text-muted-foreground mt-0.5 text-xs leading-5">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Grid - Right on desktop, bottom on mobile */}
          <div className="flex-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4">
              {/* Top left - larger aspect ratio */}
              <div className="col-span-1 row-span-2">
                <div className="relative h-full overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/images/about/elisabeth-1.jpeg"
                    alt="Elisabeth with fresh flowers"
                    width={300}
                    height={500}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Top right - portrait */}
              <div className="col-span-1">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/images/about/elisabeth-3.jpeg"
                    alt="Elisabeth portrait"
                    width={250}
                    height={350}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Bottom right - landscape */}
              <div className="col-span-1">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/images/about/elisabeth-6.jpeg"
                    alt="Elisabeth with flower arrangements"
                    width={280}
                    height={210}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
