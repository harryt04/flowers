import { Resend } from 'resend'

import type { BookingInput } from '@/lib/validation'

const resendApiKey = process.env.RESEND_API_KEY
const resend = resendApiKey ? new Resend(resendApiKey) : null

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

export async function sendBookingNotification(
  booking: BookingInput,
): Promise<void> {
  const to = process.env.CONTACT_NOTIFICATION_EMAIL

  if (!resend || !to) {
    console.warn(
      '[sendBookingNotification] RESEND_API_KEY or CONTACT_NOTIFICATION_EMAIL not configured; skipping email.',
    )
    return
  }

  const from =
    process.env.RESEND_FROM_EMAIL ??
    'Sunshine Flower Bar <onboarding@resend.dev>'

  const rows: Array<[string, string | undefined]> = [
    ['Name', booking.name],
    ['Email', booking.email],
    ['Phone', booking.phone],
    ['Event date', booking.eventDate],
    ['Location', booking.location],
    ['Estimated guests', booking.estimatedGuests],
    ['Message', booking.message],
    ['SMS consent', booking.smsConsent ? 'Yes' : 'No'],
    ['Email marketing consent', booking.emailMarketingConsent ? 'Yes' : 'No'],
  ]

  const html = `
    <h2>New booking request</h2>
    <table>
      ${rows
        .filter(([, value]) => value)
        .map(
          ([label, value]) =>
            `<tr><td><strong>${escapeHtml(label)}</strong></td><td>${escapeHtml(
              value ?? '',
            )}</td></tr>`,
        )
        .join('')}
    </table>
  `

  try {
    await resend.emails.send({
      from,
      to,
      replyTo: booking.email,
      subject: `New booking request from ${booking.name}`,
      html,
    })
  } catch (error) {
    console.error('[sendBookingNotification] Resend error:', error)
  }
}
