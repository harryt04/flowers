import { z } from 'zod'

export const subscribeSchema = z.object({
  email: z.string().email('Please enter a valid email address.'),
})

export const bookingSchema = z
  .object({
    name: z.string().min(1, 'Name is required.'),
    email: z.string().email('Please enter a valid email address.'),
    phone: z.string().optional(),
    eventDate: z.string().optional(),
    location: z.string().optional(),
    estimatedGuests: z.string().optional(),
    message: z
      .string()
      .max(1500, 'Message must be less than 1500 characters.')
      .optional(),
    smsConsent: z.boolean(),
    emailMarketingConsent: z.boolean(),
  })
  .superRefine((data, ctx) => {
    if (data.phone?.trim() && !data.smsConsent) {
      ctx.addIssue({
        code: 'custom',
        message:
          'Please agree to receive SMS texts when providing a phone number.',
        path: ['smsConsent'],
      })
    }
  })

export type SubscribeInput = z.infer<typeof subscribeSchema>
export type BookingInput = z.infer<typeof bookingSchema>

export const contactSchema = bookingSchema
export type ContactInput = BookingInput
