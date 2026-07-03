import Image from 'next/image'

export function SeasonalMenuSection() {
  return (
    <section id="seasonal-menu" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2
          className="text-foreground mb-8 text-center text-4xl font-bold sm:text-5xl"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Fresh Blooms, Every Season
        </h2>

        <div className="relative w-full">
          <Image
            src="/images/seasonal/seasonal-menu.png"
            alt="Seasonal menu showcasing spring, summer, fall, and winter flower selections"
            width={1536}
            height={1024}
            sizes="100vw"
            className="h-auto w-full"
            priority
          />
        </div>
      </div>
    </section>
  )
}
