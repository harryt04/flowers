'use client'

import { useEffect, useState } from 'react'

const KINDNESS_QUOTES = [
  "Flowers don't ask who deserves kindness—they simply bloom.",
  'Be the reason someone believes there are still good people.',
  'Carry sunshine with you. You never know who needs it.',
  'Kindness is contagious. Pass it on.',
  'Sometimes the smallest bouquet carries the biggest message.',
]

export function Footer() {
  const [quote, setQuote] = useState<string | null>(null)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time client-only randomization; no external store to derive this from
    setQuote(
      KINDNESS_QUOTES[Math.floor(Math.random() * KINDNESS_QUOTES.length)],
    )
  }, [])

  return (
    <footer className="border-border bg-secondary border-t">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-6 sm:px-6">
        {quote && (
          <p className="text-muted-foreground text-center text-sm italic">
            &quot;{quote}&quot;
          </p>
        )}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Sunshine Flower Bar. &quot;just
            because&quot; &mdash; spreading kindness one bouquet at a time.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Terms
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Instagram
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
