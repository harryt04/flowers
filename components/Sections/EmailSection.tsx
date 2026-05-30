import { EmailSubscribeForm } from "@/components/EmailSubscribeForm";

export function EmailSection() {
  return (
    <section id="email" className="bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <h2 className="text-3xl font-semibold tracking-tight text-warm-charcoal">
          Join Our Sunshine List
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-warm-gray">
          Be the first to hear market updates, bouquet drops, and joyful little seasonal offerings.
          We keep it light, helpful, and full of heart.
        </p>

        <div className="mt-8 max-w-xl rounded-2xl border border-border bg-background p-5 shadow-sm sm:p-6">
          <EmailSubscribeForm />
        </div>
      </div>
    </section>
  );
}
