import { Mail } from "lucide-react";
import { EmailSubscribeForm } from "@/components/EmailSubscribeForm";

export function EmailSection() {
  return (
    <section id="email" className="bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sunshine-yellow/40">
              <Mail className="h-7 w-7 text-warm-charcoal" />
            </div>
          </div>
          <p
            className="mb-3 font-semibold text-sunshine-yellow"
            style={{ fontFamily: "var(--font-accent)", fontSize: "1.25rem" }}
          >
            stay in the loop
          </p>
          <h2
            className="text-4xl font-bold text-warm-charcoal sm:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Join Our Sunshine List
          </h2>
          <p className="mt-4 text-lg leading-8 text-warm-gray">
            Be the first to hear about upcoming pop-ups, seasonal bouquet drops, and little
            joyful surprises. We keep it light, warm, and full of heart.
          </p>

          <div className="mt-8 rounded-3xl border border-border bg-background p-6 shadow-sm sm:p-8">
            <EmailSubscribeForm />
          </div>
        </div>
      </div>
    </section>
  );
}
