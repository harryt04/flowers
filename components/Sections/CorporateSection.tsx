import { buttonVariants } from "@/components/ui/button";

export function CorporateSection() {
  return (
    <section id="corporate" className="bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <h2 className="text-3xl font-semibold tracking-tight text-warm-charcoal">
          Brighten Your Workplace
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-warm-gray">
          Our corporate flower programs are designed to help teams feel appreciated and energized.
          From recurring desk drops to celebration bundles, we’ll help you create moments your
          people remember.
        </p>
        <div className="mt-8">
          <a href="#contact" className={buttonVariants({ variant: "secondary", size: "lg" })}>
            Ask About Corporate Programs
          </a>
        </div>
      </div>
    </section>
  );
}
