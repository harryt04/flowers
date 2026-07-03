import Image from 'next/image'
import { buttonVariants } from '@/components/ui/button'
import { Building2, Users, Repeat2, Star } from 'lucide-react'

const features = [
  {
    icon: Building2,
    title: 'Office-Ready Deliveries',
    description:
      'Fresh bouquets dropped off weekly — no coordination needed from your team.',
  },
  {
    icon: Users,
    title: 'Employee Appreciation',
    description:
      "A simple, meaningful perk that says 'we see you' — and employees take home to their families.",
  },
  {
    icon: Repeat2,
    title: 'Recurring Programs',
    description:
      'Weekly or bi-weekly subscriptions. Set it, forget it, enjoy it.',
  },
  {
    icon: Star,
    title: 'Flexible & Personal',
    description:
      'From 10-person startups to large offices — we scale to fit your team and budget.',
  },
]

export function CorporateSection() {
  return (
    <section id="corporate" className="bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Image */}
          <div className="mx-auto w-full max-w-md flex-shrink-0 lg:mx-0 lg:w-2/5">
            <div className="border-border relative overflow-hidden rounded-3xl border-2 shadow-xl">
              <Image
                src="/concepts/trailer.png"
                alt="Sunshine Flower Bar mobile flower trailer at corporate event"
                width={480}
                height={560}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <p
              className="text-sunshine-yellow mb-3 font-semibold"
              style={{ fontFamily: 'var(--font-accent)', fontSize: '1.25rem' }}
            >
              for your team
            </p>
            <h2
              className="text-warm-charcoal text-4xl font-bold sm:text-5xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Bring Sunshine to Your Workplace
            </h2>
            <p className="text-warm-gray mt-4 text-lg leading-8">
              Bring unexpected joy to your team. Fresh flowers boost morale,
              spark conversation, and show your people they matter. From weekly
              deliveries to pop-up events, we help you celebrate your workplace
              culture with thoughtful, memorable moments.
            </p>

            {/* Features */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {features.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="bg-background border-border/60 flex items-start gap-3 rounded-2xl border p-4 shadow-sm"
                >
                  <div className="bg-sunshine-yellow/30 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl">
                    <Icon className="text-warm-charcoal h-5 w-5" />
                  </div>
                  <div>
                    <p
                      className="text-warm-charcoal text-sm font-semibold"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {title}
                    </p>
                    <p className="text-warm-gray mt-0.5 text-xs leading-5">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
              <a
                href="#contact"
                className={buttonVariants({
                  size: 'lg',
                  className: 'px-8 text-lg shadow-md',
                })}
                style={{ fontFamily: 'var(--font-cta)' }}
              >
                Book Your Event
              </a>
              <p className="text-warm-gray self-center text-sm italic">
                No commitment — we&apos;d love to chat first.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
