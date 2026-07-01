import { z } from "zod";

export const subscribeSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
});

export const bookingSchema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  eventDate: z.string().optional(),
  location: z.string().optional(),
  estimatedGuests: z.string().optional(),
  message: z.string().optional(),
});

export type SubscribeInput = z.infer<typeof subscribeSchema>;
export type BookingInput = z.infer<typeof bookingSchema>;

// Alias for ContactForm backwards compatibility
export const contactSchema = bookingSchema;
export type ContactInput = BookingInput;
