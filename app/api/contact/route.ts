import { NextResponse } from 'next/server'

import { bookingSchema } from '@/lib/validation'
import { getDb, mongoDBConfig } from '@/lib/mongo-client'
import { sendBookingNotification } from '@/lib/email'

export async function POST(req: Request) {
  try {
    const json = await req.json()
    const parsed = bookingSchema.safeParse(json)

    if (!parsed.success) {
      const issue = parsed.error.issues[0]
      return NextResponse.json(
        {
          success: false,
          error: issue
            ? `Validation failed: ${issue.message}`
            : 'Validation failed',
        },
        { status: 400 },
      )
    }

    try {
      const db = await getDb()
      await db.collection(mongoDBConfig.collections.bookingRequests).insertOne({
        ...parsed.data,
        submittedAt: new Date(),
      })
    } catch (dbError) {
      console.error('[POST /api/contact] MongoDB error:', dbError)
      return NextResponse.json(
        {
          success: false,
          error: "Couldn't save your info right now. Please try again soon.",
        },
        { status: 502 },
      )
    }

    await sendBookingNotification(parsed.data)

    return NextResponse.json({
      success: true,
      message:
        "Thanks! We'll be in touch within 1-2 business days to talk about your event.",
    })
  } catch (error) {
    console.error('[POST /api/contact] ERROR:', error)
    return NextResponse.json(
      {
        success: false,
        error: "We couldn't process your request right now. Please try again.",
      },
      { status: 500 },
    )
  }
}
