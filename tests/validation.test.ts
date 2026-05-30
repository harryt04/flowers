import { describe, expect, it } from "vitest";

import { contactSchema, subscribeSchema } from "@/lib/validation";

describe("subscribeSchema", () => {
  it("accepts a valid email", () => {
    const parsed = subscribeSchema.safeParse({ email: "hello@example.com" });
    expect(parsed.success).toBe(true);
  });

  it("rejects an invalid email", () => {
    const parsed = subscribeSchema.safeParse({ email: "not-an-email" });
    expect(parsed.success).toBe(false);
  });
});

describe("contactSchema", () => {
  it("accepts a complete valid contact payload", () => {
    const parsed = contactSchema.safeParse({
      name: "Jane Doe",
      email: "jane@example.com",
      inquiryType: "corporate",
      message: "I'd love to learn more about a recurring flower program.",
    });

    expect(parsed.success).toBe(true);
  });

  it("rejects missing message details", () => {
    const parsed = contactSchema.safeParse({
      name: "Jane Doe",
      email: "jane@example.com",
      inquiryType: "other",
      message: "short",
    });

    expect(parsed.success).toBe(false);
  });
});
