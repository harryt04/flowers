'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Send } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { contactSchema, type ContactInput } from '@/lib/validation'

export function ContactForm() {
  const [serverMessage, setServerMessage] = useState<string | null>(null)
  const [isError, setIsError] = useState(false)

  const form = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      eventDate: '',
      location: '',
      estimatedGuests: '',
      message: '',
      smsConsent: false,
      emailMarketingConsent: false,
    },
  })

  const onSubmit = form.handleSubmit(async (values) => {
    setServerMessage(null)
    setIsError(false)

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })

    const result = await response.json()

    if (!response.ok) {
      setIsError(true)
      setServerMessage(
        result.error || 'Something went wrong. Please try again.',
      )
      return
    }

    const hasPhone = Boolean(values.phone?.trim())
    form.reset()
    setServerMessage(
      hasPhone
        ? result.message || "Thank you! We'll be in touch soon."
        : "Thank you! We'll email you soon. If you don't see it, please check your spam folder.",
    )
  })

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-4" noValidate>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Name</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Jane Doe"
                  autoComplete="name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="jane@example.com"
                  autoComplete="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone (optional)</FormLabel>
              <FormControl>
                <Input
                  type="tel"
                  placeholder="(555) 123-4567"
                  autoComplete="tel"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="eventDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Event Date (optional)</FormLabel>
              <FormControl>
                <Input type="date" placeholder="YYYY-MM-DD" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location (optional)</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Highland, UT" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="estimatedGuests"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Estimated Guests (optional)</FormLabel>
              <FormControl>
                <Input type="text" placeholder="10–20" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tell Us About Your Event (optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Help us understand the vibe..."
                  rows={4}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-3">
          <FormField
            control={form.control}
            name="smsConsent"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-start gap-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                   <p className="text-muted-foreground text-sm leading-snug">
                     I agree to receive SMS texts from Sunshine Flower Bar about
                     my booking inquiry and event coordination. Message frequency
                     varies. Message and data rates may apply. Reply STOP to opt
                     out or HELP for help. Consent is not a condition of
                     purchase. See our{' '}
                     <a
                       href="/terms"
                       className="hover:text-foreground underline"
                     >
                       terms
                     </a>{' '}
                     and{' '}
                     <a
                       href="/privacy"
                       className="hover:text-foreground underline"
                     >
                       privacy policy
                     </a>
                     .
                   </p>
                 </div>
                 <FormMessage />
               </FormItem>
             )}
           />

          <FormField
            control={form.control}
            name="emailMarketingConsent"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-start gap-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <p className="text-muted-foreground text-sm leading-snug">
                    I'd like to get occasional email updates about pop-ups,
                    seasonal offerings, and kindness-forward news from Sunshine
                    Flower Bar. Unsubscribe anytime. Not required to submit this
                    form.
                  </p>
                </div>
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={form.formState.isSubmitting}
          className="w-full gap-2 text-sm"
          style={{ fontFamily: 'var(--font-cta)' }}
        >
          <Send className="h-4 w-4" />
          {form.formState.isSubmitting ? 'Sending...' : 'Send Booking Request'}
        </Button>

        {serverMessage ? (
          <p
            className={`text-center text-sm ${isError ? 'text-destructive' : 'text-accent'}`}
            aria-live="polite"
            role="status"
          >
            {serverMessage}
          </p>
        ) : null}
      </form>
    </Form>
  )
}
