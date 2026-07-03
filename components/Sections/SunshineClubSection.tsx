import { Flower, Lightbulb, MapPin, Sparkles } from 'lucide-react'
import { EmailSubscribeForm } from '@/components/EmailSubscribeForm'

const communityBullets = [
  {
    icon: Flower,
    label: 'Flower Tips',
    description: 'Insider secrets for keeping your blooms fresh longer',
  },
  {
    icon: Lightbulb,
    label: 'Kindness Ideas',
    description: "Thoughtful ways to brighten someone's day",
  },
  {
    icon: MapPin,
    label: 'Pop-Up Locations',
    description: "First to know where we'll be next",
  },
  {
    icon: Sparkles,
    label: 'Special Events',
    description: 'Exclusive previews and seasonal celebrations',
  },
]

export function SunshineClubSection() {
  return (
    <section id="sunshine-club" className="bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 flex justify-center">
            <div className="bg-sunshine-yellow/40 flex h-14 w-14 items-center justify-center rounded-full">
              <Sparkles className="text-warm-charcoal h-7 w-7" />
            </div>
          </div>
          <p
            className="text-sunshine-yellow mb-3 font-semibold"
            style={{ fontFamily: 'var(--font-accent)', fontSize: '1.25rem' }}
          >
            stay in the loop
          </p>
          <h2
            className="text-warm-charcoal text-4xl font-bold sm:text-5xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Join the Sunshine Club
          </h2>

          {/* Community Bullets */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {communityBullets.map(({ icon: Icon, label, description }) => (
              <div key={label} className="flex items-start gap-3 text-left">
                <div className="bg-sunshine-yellow/30 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                  <Icon className="text-warm-charcoal h-5 w-5" />
                </div>
                <div>
                  <p
                    className="text-warm-charcoal font-semibold"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {label}
                  </p>
                  <p className="text-warm-gray text-sm leading-5">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-border bg-background mt-8 rounded-3xl border p-6 shadow-sm sm:p-8">
            <EmailSubscribeForm />
          </div>
        </div>
      </div>
    </section>
  )
}
