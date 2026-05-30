import { NextResponse } from "next/server";

import { getDb } from "@/app/lib/mongodb";
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

    if (process.env.MONGODB_URI) {
      const db = await getDb();

      await db.collection("contacts").insertOne({
        ...parsed.data,
        submittedAt: new Date(),
      });
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! We'll get back to you soon.",
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: "We couldn't send your message right now. Please try again.",
      },
      { status: 500 },
    );
  }
}
