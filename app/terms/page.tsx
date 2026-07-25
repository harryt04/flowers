import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Sunshine Flower Bar',
  description:
    'Terms for using the Sunshine Flower Bar website and submitting booking inquiries for our mobile flower bar services.',
}

export default function TermsOfService() {
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
          Terms of Service
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
              Agreement to terms
            </h2>
            <p className="text-foreground mt-3">
              By using this website or submitting an inquiry, you agree to these
              Terms of Service. If you do not agree, please do not use the site
              or submit information.
            </p>
          </section>

          <section>
            <h2
              className="text-foreground text-xl font-semibold"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Services
            </h2>
            <p className="text-foreground mt-3">
              Sunshine Flower Bar provides a mobile, interactive flower bar
              experience. Visitors build their own bouquets at events including
              markets, pop-ups, weddings, showers, corporate gatherings, and
              private celebrations. Our site lets you send booking inquiries.
            </p>
          </section>

          <section>
            <h2
              className="text-foreground text-xl font-semibold"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Inquiries are requests, not contracts
            </h2>
            <p className="text-foreground mt-3">
              Submitting an inquiry through our contact form is a request for
              information and a non-binding proposal. No contract is formed
              until we confirm availability and terms in writing and you
              explicitly agree to proceed.
            </p>
          </section>

          <section>
            <h2
              className="text-foreground text-xl font-semibold"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              SMS terms
            </h2>
            <p className="text-foreground mt-3">
              By providing your phone number and opting in (smsConsent), you
              agree to receive SMS messages from Sunshine Flower Bar regarding
              your booking or event follow-up. Message frequency varies.
            </p>
            <p className="text-foreground mt-3">
              Message and data rates may apply.
            </p>
            <p className="text-foreground mt-3">
              Reply STOP to opt out at any time. Reply HELP for assistance.
            </p>
            <p className="text-foreground mt-3">
              Your consent is not a condition of purchase or booking.
            </p>
            <p className="text-foreground mt-3">
              Carriers are not liable for delayed or undelivered messages.
            </p>
          </section>

          <section>
            <h2
              className="text-foreground text-xl font-semibold"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Acceptable use
            </h2>
            <p className="text-foreground mt-3">
              You agree not to use the site or submit false information, send
              spam, or engage in any activity that is illegal, harmful, or
              disruptive to our services or other users.
            </p>
          </section>

          <section>
            <h2
              className="text-foreground text-xl font-semibold"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Intellectual property
            </h2>
            <p className="text-foreground mt-3">
              All content on this site, including text, images, and design, is
              owned by or licensed to Sunshine Flower Bar. You may not copy or
              use it without permission except as needed to use the site for its
              intended purpose.
            </p>
          </section>

          <section>
            <h2
              className="text-foreground text-xl font-semibold"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Disclaimers and limitation of liability
            </h2>
            <p className="text-foreground mt-3">
              We provide the site and services “as is.” To the fullest extent
              permitted by law, we are not liable for any indirect, incidental,
              or consequential damages arising from your use of the site or our
              services. Our total liability for any claim will not exceed the
              amount you paid us for the relevant service, or $100 if none.
            </p>
          </section>

          <section>
            <h2
              className="text-foreground text-xl font-semibold"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Governing law
            </h2>
            <p className="text-foreground mt-3">
              These terms are governed by the laws of the State of Utah, without
              regard to its conflict of laws principles.
            </p>
          </section>

          <section>
            <h2
              className="text-foreground text-xl font-semibold"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Contact
            </h2>
            <p className="text-foreground mt-3">
              Questions about these terms? Email us at{' '}
              <a
                href="mailto:sunshineflowerbar@gmail.com"
                className="text-foreground hover:text-primary underline"
              >
                sunshineflowerbar@gmail.com
              </a>
              .
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
          <span className="text-muted-foreground mx-2">•</span>
          <a
            href="/privacy"
            className="text-muted-foreground hover:text-foreground text-sm underline"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </main>
  )
}
