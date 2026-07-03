'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const navItems = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Pop-Ups', href: '#pop-ups' },
  { label: 'Corporate', href: '#corporate' },
  { label: 'Contact', href: '#contact' },
]

const SCROLL_THRESHOLD = 120

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="border-border/70 sticky top-0 z-50 border-b bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a
          href="#top"
          className={`flex flex-col items-center gap-1 overflow-hidden transition-all duration-300 ease-out ${
            scrolled
              ? 'w-[70px] scale-100 opacity-100'
              : 'pointer-events-none w-0 scale-75 opacity-0'
          }`}
        >
          <Image
            src="/concepts/logo.png"
            alt="Sunshine Flower Bar"
            width={120}
            height={120}
            className="h-auto w-[70px] object-contain"
            priority
          />
        </a>

        <nav aria-label="Primary" className="flex items-center gap-3 sm:gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-muted-foreground hover:text-foreground text-xs font-semibold whitespace-nowrap transition-colors sm:text-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
