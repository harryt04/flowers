import { describe, expect, it } from 'vitest'

import { bookingSchema, subscribeSchema } from '@/lib/validation'

describe('subscribeSchema', () => {
  it('accepts a valid email', () => {
    const parsed = subscribeSchema.safeParse({ email: 'hello@example.com' })
    expect(parsed.success).toBe(true)
  })

  it('rejects an invalid email', () => {
    const parsed = subscribeSchema.safeParse({ email: 'not-an-email' })
    expect(parsed.success).toBe(false)
  })
})

describe('bookingSchema', () => {
  it('accepts valid input with only required fields', () => {
    const parsed = bookingSchema.safeParse({
      name: 'John Doe',
      email: 'john@example.com',
      smsConsent: false,
      emailMarketingConsent: false,
    })
    expect(parsed.success).toBe(true)
  })

  it('accepts valid input with all fields populated', () => {
    const parsed = bookingSchema.safeParse({
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '555-1234',
      eventDate: '2026-12-25',
      location: 'Downtown Hall',
      estimatedGuests: '150',
      message: "We'd love flowers for our event!",
      smsConsent: true,
      emailMarketingConsent: false,
    })
    expect(parsed.success).toBe(true)
  })

  it('rejects missing name', () => {
    const parsed = bookingSchema.safeParse({
      email: 'test@example.com',
    })
    expect(parsed.success).toBe(false)
  })

  it('rejects empty name', () => {
    const parsed = bookingSchema.safeParse({
      name: '',
      email: 'test@example.com',
    })
    expect(parsed.success).toBe(false)
  })

  it('rejects missing email', () => {
    const parsed = bookingSchema.safeParse({
      name: 'John Doe',
    })
    expect(parsed.success).toBe(false)
  })

  it('rejects invalid email', () => {
    const parsed = bookingSchema.safeParse({
      name: 'John Doe',
      email: 'not-an-email',
    })
    expect(parsed.success).toBe(false)
  })

  it('allows optional event fields to be omitted', () => {
    const parsed = bookingSchema.safeParse({
      name: 'Minimal Contact',
      email: 'minimal@example.com',
      smsConsent: false,
      emailMarketingConsent: false,
    })
    expect(parsed.success).toBe(true)
    if (parsed.success) {
      expect(parsed.data.phone).toBeUndefined()
      expect(parsed.data.eventDate).toBeUndefined()
      expect(parsed.data.location).toBeUndefined()
      expect(parsed.data.estimatedGuests).toBeUndefined()
      expect(parsed.data.message).toBeUndefined()
      expect(parsed.data.smsConsent).toBe(false)
      expect(parsed.data.emailMarketingConsent).toBe(false)
    }
  })

  it('rejects missing consent fields', () => {
    const parsed = bookingSchema.safeParse({
      name: 'Minimal Contact',
      email: 'minimal@example.com',
    })
    expect(parsed.success).toBe(false)
  })

  it('accepts true/false for consent fields', () => {
    const parsedTrue = bookingSchema.safeParse({
      name: 'Test',
      email: 'test@example.com',
      smsConsent: true,
      emailMarketingConsent: true,
    })
    expect(parsedTrue.success).toBe(true)
    if (parsedTrue.success) {
      expect(parsedTrue.data.smsConsent).toBe(true)
      expect(parsedTrue.data.emailMarketingConsent).toBe(true)
    }

    const parsedFalse = bookingSchema.safeParse({
      name: 'Test',
      email: 'test@example.com',
      smsConsent: false,
      emailMarketingConsent: false,
    })
    expect(parsedFalse.success).toBe(true)
    if (parsedFalse.success) {
      expect(parsedFalse.data.smsConsent).toBe(false)
      expect(parsedFalse.data.emailMarketingConsent).toBe(false)
    }
  })

  it('can submit with both consents false', () => {
    const parsed = bookingSchema.safeParse({
      name: 'Test',
      email: 'test@example.com',
      smsConsent: false,
      emailMarketingConsent: false,
    })
    expect(parsed.success).toBe(true)
  })

  it('can submit with both consents true', () => {
    const parsed = bookingSchema.safeParse({
      name: 'Test',
      email: 'test@example.com',
      smsConsent: true,
      emailMarketingConsent: true,
    })
    expect(parsed.success).toBe(true)
  })

  it('allows phone when sms consent is true', () => {
    const parsed = bookingSchema.safeParse({
      name: 'Test',
      email: 'test@example.com',
      phone: '555-1234',
      smsConsent: true,
      emailMarketingConsent: false,
    })
    expect(parsed.success).toBe(true)
  })

  it('does not require sms consent for blank phone', () => {
    const parsed = bookingSchema.safeParse({
      name: 'Test',
      email: 'test@example.com',
      phone: '   ',
      smsConsent: false,
      emailMarketingConsent: false,
    })
    expect(parsed.success).toBe(true)
  })
})
