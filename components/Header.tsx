import Image from "next/image";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#market", label: "Market" },
  { href: "#corporate", label: "Corporate" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-cream/95 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-2 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <Image
            src="/concepts/logo.png"
            alt="Just Because Flowers"
            width={140}
            height={52}
            className="h-12 w-auto object-contain"
            priority
          />
        </a>

        <nav aria-label="Primary" className="flex items-center gap-4 sm:gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-sm font-semibold text-warm-gray transition-colors hover:text-warm-charcoal"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
