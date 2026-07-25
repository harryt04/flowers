import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Sunshine Flower Bar',
  description:
    'How Sunshine Flower Bar collects, uses, and protects information from booking inquiries and SMS/email consents.',
}

export default function PrivacyPolicy() {
  return (
    <main className="bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-4 py-12">
        <a
          href="/"
          className="text-muted-foreground hover:text-foreground mb-8 inline-block text-sm"
        >
          ← Back to home
        </a>

        <h1
          className="text-3xl font-bold tracking-tight sm:text-4xl"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Privacy Policy
        </h1>
        <p className="text-muted-foreground mt-2 text-sm">
          Effective July 25, 2026
        </p>

        <div className="mt-8 space-y-8 text-sm leading-relaxed">
          <section>
            <h2
              className="text-foreground text-xl font-semibold"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Who we are
            </h2>
            <p className="text-foreground mt-3">
              Sunshine Flower Bar is a small, mobile flower bar experience based
              in Utah. We create joyful, hands-on bouquet-building moments at
              markets, events, weddings, and celebrations. This policy explains
              how we handle information when you contact us.
            </p>
          </section>

          <section>
            <h2
              className="text-foreground text-xl font-semibold"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Information we collect
            </h2>
            <p className="text-foreground mt-3">
              When you submit an inquiry through our contact form, we collect:
            </p>
            <ul className="text-foreground mt-2 list-disc pl-5">
              <li>Your name</li>
              <li>Your email address</li>
              <li>
                Optional details: phone number, event date, location, estimated
                number of guests, and your message about the event
              </li>
              <li>
                Whether you chose to get booking follow-up texts, and whether
                you chose to get occasional emails about pop-ups and updates
              </li>
            </ul>
          </section>

          <section>
            <h2
              className="text-foreground text-xl font-semibold"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              How we use information
            </h2>
            <p className="text-foreground mt-3">
              We use the information to respond to your inquiry, coordinate your
              event or booking, send relevant follow-up texts (only if you
              consented), and occasionally share updates by email (only if you
              opted in). We may also use it to improve how we serve future
              guests.
            </p>
          </section>

          <section>
            <h2
              className="text-foreground text-xl font-semibold"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Text messages
            </h2>
            <p className="text-foreground mt-3">
              If you opt in, we send SMS messages related to booking and event
              follow-ups only. These are practical updates—not marketing blasts.
            </p>
            <p className="text-foreground mt-3">
              Message frequency varies depending on your inquiry and how your
              booking progresses.
            </p>
            <p className="text-foreground mt-3">
              Message and data rates may apply.
            </p>
            <p className="text-foreground mt-3">
              Reply STOP to opt out of SMS messages at any time. Reply HELP for
              assistance.
            </p>
            <p className="text-foreground mt-3">
              Your consent to receive SMS messages is not a condition of
              purchase or booking.
            </p>
            <p className="text-foreground mt-3">
              See our{' '}
              <a
                href="/terms"
                className="text-foreground hover:text-primary underline"
              >
                Terms of Service
              </a>{' '}
              for complete SMS program terms.
            </p>
          </section>

          <section>
            <h2
              className="text-foreground text-xl font-semibold"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Email marketing
            </h2>
            <p className="text-foreground mt-3">
              We send marketing emails or newsletters only when you have
              explicitly opted in through our contact form or subscribe form.
              Every email includes an easy unsubscribe link.
            </p>
          </section>

          <section>
            <h2
              className="text-foreground text-xl font-semibold"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Sharing
            </h2>
            <p className="text-foreground mt-3">
              We share the minimum information necessary with service providers
              who help us operate:
            </p>
            <ul className="text-foreground mt-2 list-disc pl-5">
              <li>Website hosting (Vercel)</li>
              <li>Email delivery provider</li>
              <li>SMS carriers (for text messages)</li>
            </ul>
            <p className="text-foreground mt-3">
              We do not sell your personal information.
            </p>
          </section>

          <section>
            <h2
              className="text-foreground text-xl font-semibold"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Retention &amp; security
            </h2>
            <p className="text-foreground mt-3">
              We retain your information only as long as needed to respond to
              your inquiry, support a booking, or comply with legal obligations.
              We use reasonable safeguards to protect the data we hold.
            </p>
          </section>

          <section>
            <h2
              className="text-foreground text-xl font-semibold"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Your choices
            </h2>
            <p className="text-foreground mt-3">
              You can stop SMS messages anytime by replying STOP to any text
              from us. You can unsubscribe from emails using the link provided
              or by emailing us. To request access, correction, or deletion of
              your information, email sunshineflowerbar@gmail.com.
            </p>
          </section>

          <section>
            <h2
              className="text-foreground text-xl font-semibold"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Children
            </h2>
            <p className="text-foreground mt-3">
              Our website and services are not directed at children under 13. We
              do not knowingly collect personal information from children under
              13. If you believe we have, contact us and we will delete the
              information.
            </p>
          </section>

          <section>
            <h2
              className="text-foreground text-xl font-semibold"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Changes + contact
            </h2>
            <p className="text-foreground mt-3">
              We may update this policy occasionally. The effective date above
              will reflect the current version. For questions or requests,
              please email us at{' '}
              <a
                href="mailto:sunshineflowerbar@gmail.com"
                className="text-foreground hover:text-primary underline"
              >
                sunshineflowerbar@gmail.com
              </a>
              . We read every message.
            </p>
          </section>
        </div>

        <div className="border-border mt-12 border-t pt-6">
          <a
            href="/"
            className="text-muted-foreground hover:text-foreground text-sm"
          >
            ← Back to home
          </a>
        </div>
      </div>
    </main>
  )
}
