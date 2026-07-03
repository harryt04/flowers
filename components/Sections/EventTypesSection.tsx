import {
  ShoppingBasket,
  Coffee,
  Cake,
  Sparkles,
  Baby,
  Building2,
  GraduationCap,
  HeartHandshake,
} from 'lucide-react'

const eventTypes = [
  {
    icon: ShoppingBasket,
    title: 'Farmers Markets',
  },
  {
    icon: Coffee,
    title: 'Coffee Shop Pop-Ups',
  },
  {
    icon: Cake,
    title: 'Birthdays',
  },
  {
    icon: Sparkles,
    title: 'Bridal Showers',
  },
  {
    icon: Baby,
    title: 'Baby Showers',
  },
  {
    icon: Building2,
    title: 'Corporate Events',
  },
  {
    icon: GraduationCap,
    title: 'Schools',
  },
  {
    icon: HeartHandshake,
    title: 'Nonprofits',
  },
]

export function EventTypesSection() {
  return (
    <section id="event-types" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {eventTypes.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="bg-background border-border/60 flex flex-col items-center gap-3 rounded-2xl border p-6 shadow-sm"
            >
              <div className="bg-accent/15 flex h-12 w-12 items-center justify-center rounded-full">
                <Icon className="text-accent h-6 w-6" />
              </div>
              <p
                className="text-foreground text-center text-sm font-semibold"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
