import { NextResponse } from "next/server";

import { subscribeSchema } from "@/lib/validation";

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const parsed = subscribeSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: parsed.error.issues[0]?.message ?? "Invalid email address",
        },
        { status: 400 },
      );
    }

    const webhookUrl = process.env.GOOGLE_APPS_SCRIPT_WEBHOOK_URL;

    if (webhookUrl) {
      const webhookResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: parsed.data.email }),
      });

      if (!webhookResponse.ok) {
        return NextResponse.json(
          {
            success: false,
            error: "Couldn’t save your email right now. Please try again soon.",
          },
          { status: 502 },
        );
      }
    }

    return NextResponse.json({
      success: true,
      message: "You've been added to our sunshine list!",
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong. Please try one more time.",
      },
      { status: 500 },
    );
  }
}
