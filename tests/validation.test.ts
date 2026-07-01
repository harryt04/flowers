import { describe, expect, it } from "vitest";

import { bookingSchema, subscribeSchema } from "@/lib/validation";

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

describe("bookingSchema", () => {
  it("accepts valid input with only required fields", () => {
    const parsed = bookingSchema.safeParse({
      name: "John Doe",
      email: "john@example.com",
    });
    expect(parsed.success).toBe(true);
  });

  it("accepts valid input with all fields populated", () => {
    const parsed = bookingSchema.safeParse({
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "555-1234",
      eventDate: "2026-12-25",
      location: "Downtown Hall",
      estimatedGuests: "150",
      message: "We'd love flowers for our event!",
    });
    expect(parsed.success).toBe(true);
  });

  it("rejects missing name", () => {
    const parsed = bookingSchema.safeParse({
      email: "test@example.com",
    });
    expect(parsed.success).toBe(false);
  });

  it("rejects empty name", () => {
    const parsed = bookingSchema.safeParse({
      name: "",
      email: "test@example.com",
    });
    expect(parsed.success).toBe(false);
  });

  it("rejects missing email", () => {
    const parsed = bookingSchema.safeParse({
      name: "John Doe",
    });
    expect(parsed.success).toBe(false);
  });

  it("rejects invalid email", () => {
    const parsed = bookingSchema.safeParse({
      name: "John Doe",
      email: "not-an-email",
    });
    expect(parsed.success).toBe(false);
  });

  it("allows all optional fields to be omitted", () => {
    const parsed = bookingSchema.safeParse({
      name: "Minimal Contact",
      email: "minimal@example.com",
    });
    expect(parsed.success).toBe(true);
    if (parsed.success) {
      expect(parsed.data.phone).toBeUndefined();
      expect(parsed.data.eventDate).toBeUndefined();
      expect(parsed.data.location).toBeUndefined();
      expect(parsed.data.estimatedGuests).toBeUndefined();
      expect(parsed.data.message).toBeUndefined();
    }
  });
});
