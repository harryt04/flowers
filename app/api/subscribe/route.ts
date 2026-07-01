import { NextResponse } from "next/server";

import { subscribeSchema } from "@/lib/validation";
import { getDb, mongoDBConfig } from "@/lib/mongo-client";

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

    try {
      const db = await getDb();
      await db.collection(mongoDBConfig.collections.emailSubscribers).insertOne({
        email: parsed.data.email,
        submittedAt: new Date(),
      });
    } catch (dbError) {
      // Handle duplicate-key error (MongoDB error code 11000)
      if (
        dbError &&
        typeof dbError === "object" &&
        "code" in dbError &&
        dbError.code === 11000
      ) {
        return NextResponse.json({
          success: true,
          message: "You’re already on our sunshine list!",
        });
      }

      console.error("[POST /api/subscribe] MongoDB error:", dbError);
      return NextResponse.json(
        {
          success: false,
          error: "Couldn’t save your email right now. Please try again soon.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "You’ve been added to our sunshine list!",
    });
  } catch (error) {
    console.error("[POST /api/subscribe] ERROR:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong. Please try one more time.",
      },
      { status: 500 },
    );
  }
}
