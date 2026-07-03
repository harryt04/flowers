import { ContactForm } from '@/components/ContactForm'
import { Flower2 } from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contact" className="bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-xl text-center">
          <div className="mb-4 flex justify-center">
            <div className="bg-primary/40 flex h-14 w-14 items-center justify-center rounded-full">
              <Flower2 className="text-foreground h-7 w-7" />
            </div>
          </div>
          <p
            className="text-primary mb-3 font-semibold"
            style={{ fontFamily: 'var(--font-accent)', fontSize: '1.25rem' }}
          >
            let&apos;s connect
          </p>
          <h2
            className="text-foreground text-4xl font-bold sm:text-5xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Tell Us About Your Event
          </h2>
          <p className="text-muted-foreground mt-4 text-lg leading-8">
            Help us understand what you&apos;re celebrating. We&apos;ll bring
            flowers to the occasion.
          </p>

          <div className="border-border bg-background mt-8 rounded-3xl border p-6 shadow-sm sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
