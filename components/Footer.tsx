export function Footer() {
  return (
    <footer className="border-t border-border bg-warm-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-6 sm:px-6 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-warm-gray">
          © {new Date().getFullYear()} Just Because Flowers. Spreading sunshine one bouquet at a
          time.
        </p>

        <div className="flex flex-wrap items-center gap-4 text-sm">
          <a href="#" className="text-warm-gray hover:text-warm-charcoal">
            Privacy
          </a>
          <a href="#" className="text-warm-gray hover:text-warm-charcoal">
            Terms
          </a>
          <a href="#" className="text-warm-gray hover:text-warm-charcoal">
            Instagram
          </a>
          <a href="#" className="text-warm-gray hover:text-warm-charcoal">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}
