import Image from 'next/image'

const navItems = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Pop-Ups', href: '#pop-ups' },
  { label: 'Corporate', href: '#corporate' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  return (
    <header className="border-border/70 sticky top-0 z-50 border-b bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="flex flex-col items-center gap-1">
          <Image
            src="/logo.png"
            alt="Sunshine Flower Bar"
            width={80}
            height={80}
            className="h-10 w-auto object-contain"
            priority
          />
          <span
            className="text-warm-charcoal text-xs font-medium"
            style={{ fontFamily: 'var(--font-accent)' }}
          >
            just because
          </span>
        </a>

        <nav aria-label="Primary" className="flex items-center gap-3 sm:gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-warm-gray hover:text-warm-charcoal text-xs font-semibold whitespace-nowrap transition-colors sm:text-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
