import Image from "next/image";

export function AboutElisabethSection() {
  return (
    <section id="about-elisabeth" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Mobile layout: stack vertically */}
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16 lg:items-start">
          {/* Bio Text - Left on desktop, top on mobile */}
          <div className="flex-1 lg:order-1">
            <h2
              className="text-4xl font-bold text-warm-charcoal sm:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Hi, I&apos;m Elisabeth
            </h2>
            <p className="mt-6 text-lg leading-8 text-warm-gray">
              I believe flowers are a love language. For years, I watched people light up when
              they received unexpected blooms &mdash; and I realized that moment of joy was something
              the world needed more of.
            </p>
            <p className="mt-4 text-lg leading-8 text-warm-gray">
              Sunshine Flower Bar started as a simple idea: make it easy for people to spread
              sunshine to anyone, anytime. Whether it&apos;s celebrating a win, offering comfort, or
              just saying &quot;I&apos;m thinking of you&quot; &mdash; every bouquet is handpicked with intention and
              wrapped with care.
            </p>
            <p className="mt-4 text-lg leading-8 text-warm-gray">
              Each stem is sourced from local growers and arranged to celebrate the season. And
              with every order, you&apos;ll include a handwritten Kindness Card &mdash; because the real gift
              isn&apos;t just flowers, it&apos;s the message behind them.
            </p>
          </div>

          {/* Image Grid - Right on desktop, bottom on mobile */}
          <div className="flex-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4">
              {/* Top left - larger aspect ratio */}
              <div className="col-span-1 row-span-2">
                <div className="relative h-full rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/about/bouquets.png"
                    alt="Elisabeth with fresh flower bouquets"
                    width={300}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Top right - portrait */}
              <div className="col-span-1">
                <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[3/4]">
                  <Image
                    src="/images/about/elisabeth.jpeg"
                    alt="Elisabeth portrait"
                    width={250}
                    height={350}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Bottom right - landscape */}
              <div className="col-span-1">
                <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                  <Image
                    src="/images/about/flower-stand.png"
                    alt="Elisabeth at the flower stand with arrangements"
                    width={280}
                    height={210}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
