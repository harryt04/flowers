import { NextResponse } from "next/server";

import { contactSchema } from "@/lib/validation";

export async function POST(req: Request) {
  try {
    console.log("[POST /api/contact] Request received");
    
    const json = await req.json();
    console.log("[POST /api/contact] Parsed JSON:", json);
    
    const parsed = contactSchema.safeParse(json);

    if (!parsed.success) {
      console.log("[POST /api/contact] Validation failed:", parsed.error.issues);
      const issue = parsed.error.issues[0];

      return NextResponse.json(
        {
          success: false,
          error: issue ? `Validation failed: ${issue.message}` : "Validation failed",
        },
        { status: 400 },
      );
    }

    console.log("[POST /api/contact] Validation passed:", parsed.data);

    const webhookUrl = process.env.GOOGLE_APPS_SCRIPT_WEBHOOK_URL;

    if (webhookUrl) {
      console.log("[POST /api/contact] Sending to Google Apps Script webhook");
      const webhookResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: parsed.data.email }),
      });

      const webhookBody = await webhookResponse.text();
      console.log("[POST /api/contact] Webhook status:", webhookResponse.status);
      console.log("[POST /api/contact] Webhook response body:", webhookBody);

      if (!webhookResponse.ok) {
        console.error("[POST /api/contact] Webhook returned non-ok status:", webhookResponse.status);
        return NextResponse.json(
          {
            success: false,
            error: "Couldn't save your message right now. Please try again soon.",
          },
          { status: 502 },
        );
      }
      console.log("[POST /api/contact] Webhook response successful");
    } else {
      console.log("[POST /api/contact] GOOGLE_APPS_SCRIPT_WEBHOOK_URL not set, skipping webhook");
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! We'll get back to you soon.",
    });
  } catch (error) {
    console.error("[POST /api/contact] ERROR:", error);
    if (error instanceof Error) {
      console.error("[POST /api/contact] Error message:", error.message);
      console.error("[POST /api/contact] Error stack:", error.stack);
    }
    
    return NextResponse.json(
      {
        success: false,
        error: "We couldn't send your message right now. Please try again.",
      },
      { status: 500 },
    );
  }
}
