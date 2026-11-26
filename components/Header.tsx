'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import {
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
} from '@ui-sdk/react/collapsible'

import { NavigationLink } from '@/components/ui/button'
import { navItems } from '@/lib/navigation'

const SCROLL_THRESHOLD = 120

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Collapsible
      open={menuOpen}
      onOpenChange={setMenuOpen}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && menuOpen) setMenuOpen(false)
      }}
      render={<header />}
      className="border-border/70 bg-background/95 sticky top-0 z-50 border-b backdrop-blur-sm"
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="/"
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
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-4 md:flex lg:gap-6"
        >
          {navItems.map((item) => (
            <NavigationLink
              key={item.href}
              href={item.href}
              className="font-body text-muted-foreground hover:text-foreground text-xs font-semibold whitespace-nowrap transition-colors sm:text-sm"
            >
              {item.label}
            </NavigationLink>
          ))}
        </nav>

        <CollapsibleTrigger
          aria-label="Menu"
          className="text-foreground relative flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`bg-foreground block h-0.5 w-6 transition-transform duration-200 ${
              menuOpen ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`bg-foreground block h-0.5 w-6 transition-opacity duration-200 ${
              menuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`bg-foreground block h-0.5 w-6 transition-transform duration-200 ${
              menuOpen ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </CollapsibleTrigger>
      </div>

      <CollapsiblePanel
        render={<nav aria-label="Mobile" />}
        className="border-border/70 bg-background/95 h-(--collapsible-panel-height) overflow-hidden border-t backdrop-blur-sm transition-[height] duration-300 ease-out data-ending-style:h-0 data-starting-style:h-0 md:hidden"
      >
        <div className="flex flex-col px-4 py-2 sm:px-6">
          {navItems.map((item) => (
            <NavigationLink
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="font-body text-muted-foreground hover:text-foreground border-border/50 border-b py-3 text-sm font-semibold last:border-b-0"
            >
              {item.label}
            </NavigationLink>
          ))}
        </div>
      </CollapsiblePanel>
    </Collapsible>
  )
}
