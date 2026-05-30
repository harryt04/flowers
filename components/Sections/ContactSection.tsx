import { ContactForm } from "@/components/ContactForm";
import { Flower2 } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="bg-warm-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-xl text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sunshine-yellow/40">
              <Flower2 className="h-7 w-7 text-warm-charcoal" />
            </div>
          </div>
          <p
            className="mb-3 font-semibold text-sunshine-yellow"
            style={{ fontFamily: "var(--font-accent)", fontSize: "1.25rem" }}
          >
            let&apos;s connect
          </p>
          <h2
            className="text-4xl font-bold text-warm-charcoal sm:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Bring Flowers to Your Office
          </h2>
          <p className="mt-4 text-lg leading-8 text-warm-gray">
            Drop your email and we&apos;ll reach out to learn about your team and put together a
            program that fits. No pressure — just flowers, sunshine, and good vibes.
          </p>

          <div className="mt-8 rounded-3xl border border-border bg-background p-6 shadow-sm sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
