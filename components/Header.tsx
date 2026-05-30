const navItems = [
  { href: "#market", label: "Market" },
  { href: "#email", label: "Email" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-cream/95 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="text-base font-semibold tracking-tight text-warm-charcoal sm:text-lg">
          Just Because Flowers
        </a>

        <nav aria-label="Primary" className="flex items-center gap-3 sm:gap-5">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-warm-gray transition-colors hover:text-warm-charcoal"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
