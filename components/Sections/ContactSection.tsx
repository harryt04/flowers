import { ContactForm } from "@/components/ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="bg-warm-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <h2 className="text-3xl font-semibold tracking-tight text-warm-charcoal">Get In Touch</h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-warm-gray">
          We’d love to hear from you. Share your question, idea, or event details and we’ll be in
          touch soon.
        </p>

        <div className="mt-8 max-w-2xl rounded-2xl border border-border bg-background p-5 shadow-sm sm:p-6">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
