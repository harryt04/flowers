import { NextResponse } from "next/server";

import { contactSchema } from "@/lib/validation";

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const parsed = contactSchema.safeParse(json);

    if (!parsed.success) {
      const issue = parsed.error.issues[0];
      return NextResponse.json(
        {
          success: false,
          error: issue ? `Validation failed: ${issue.message}` : "Validation failed",
        },
        { status: 400 },
      );
    }

    const mongoUri = process.env.MONGODB_URI;

    if (mongoUri) {
      try {
        const { getDb } = await import("@/app/lib/mongodb");
        const db = await getDb();
        await db.collection("corporate_leads").insertOne({
          email: parsed.data.email,
          submittedAt: new Date(),
        });
      } catch (dbError) {
        console.error("[POST /api/contact] MongoDB error:", dbError);
        return NextResponse.json(
          {
            success: false,
            error: "Couldn't save your info right now. Please try again soon.",
          },
          { status: 502 },
        );
      }
    }

    return NextResponse.json({
      success: true,
      message: "You're on our radar! We'll reach out soon to chat about your team.",
    });
  } catch (error) {
    console.error("[POST /api/contact] ERROR:", error);
    return NextResponse.json(
      {
        success: false,
        error: "We couldn't process your request right now. Please try again.",
      },
      { status: 500 },
    );
  }
}
