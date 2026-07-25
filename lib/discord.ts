import type { BookingInput } from '@/lib/validation'

export async function sendBookingDiscordNotification(
  booking: BookingInput,
): Promise<void> {
  const url = process.env.DISCORD_CONTACT_WEBHOOK_URL

  if (!url) {
    console.warn(
      '[sendBookingDiscordNotification] DISCORD_CONTACT_WEBHOOK_URL not configured; skipping Discord notification.',
    )
    return
  }

  const sms = booking.smsConsent ? 'yes' : 'no'
  const emailMarketing = booking.emailMarketingConsent ? 'yes' : 'no'

  const content = `<@1529663756488151081> <@1288596095185715210> someone filled out the new contact form on sunshineflowerbar.com, here is their message:

**Name:** ${booking.name}
**Email:** ${booking.email}
**Phone:** ${booking.phone || '(not provided)'}
**Event Date:** ${booking.eventDate || '(not provided)'}
**Location:** ${booking.location || '(not provided)'}
**Estimated Guests:** ${booking.estimatedGuests || '(not provided)'}
**Message:** ${booking.message || '(not provided)'}
**SMS consent:** ${sms}
**Email marketing consent:** ${emailMarketing}

Lily, please reach out to this person by text if phone number is available, by email if not. The goal of the contact should be to follow up on their inquiry here, and to get more information about what they need, then relay that back to Elisabeth here on this thread. If the customer asks for the business owner's phone number, you may give it to them.`

  try {
    const response = await fetch(`${url}?wait=true`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content,
        allowed_mentions: {
          users: ['1529663756488151081', '1288596095185715210'],
        },
      }),
    })

    if (!response.ok) {
      console.error(
        '[sendBookingDiscordNotification] Discord webhook error:',
        response.status,
        await response.text().catch(() => ''),
      )
    }
  } catch (error) {
    console.error('[sendBookingDiscordNotification] Error:', error)
  }
}
