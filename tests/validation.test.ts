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
  it("accepts a valid email", () => {
    const parsed = contactSchema.safeParse({ email: "jane@company.com" });
    expect(parsed.success).toBe(true);
  });

  it("rejects an invalid email", () => {
    const parsed = contactSchema.safeParse({ email: "not-valid" });
    expect(parsed.success).toBe(false);
  });

  it("rejects missing email", () => {
    const parsed = contactSchema.safeParse({});
    expect(parsed.success).toBe(false);
  });
});
