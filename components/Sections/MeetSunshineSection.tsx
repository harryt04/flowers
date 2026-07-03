import Image from 'next/image'

export function MeetSunshineSection() {
  return (
    <section
      id="meet-sunshine"
      className="bg-accent text-accent-foreground py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Content */}
          <div className="flex flex-1 flex-col justify-center">
            <p className="text-accent-foreground/80 mb-4 text-base font-semibold tracking-wide uppercase">
              The Beginning
            </p>
            <p className="text-accent-foreground/90 mb-8 text-lg leading-relaxed">
              Before Sunshine Flower Bar existed, there was Sunshine—our beloved
              yellow truck that served as the heart of our early days. It
              reminded us that happiness can be simple.
            </p>
            <blockquote
              className="text-accent-foreground text-3xl leading-tight font-bold italic sm:text-4xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              &ldquo;Before Sunshine Flower Bar existed, there was
              Sunshine&mdash;the yellow truck that reminded me happiness can be
              simple.&rdquo;
            </blockquote>
          </div>

          {/* Image */}
          <div className="mx-auto w-full max-w-md flex-shrink-0 lg:mx-0 lg:w-2/5">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/about/yellow-truck.png"
                alt="Sunshine—the yellow truck, the origins of Sunshine Flower Bar"
                width={500}
                height={400}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
