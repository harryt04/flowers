import { z } from "zod";

export const subscribeSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
});

export const contactSchema = z.object({
  name: z.string().min(2, "Please share your name."),
  email: z.string().email("Please enter a valid email address."),
  inquiryType: z.enum(["corporate", "market", "other"]),
  message: z
    .string()
    .min(10, "Please include a short message so we can help thoughtfully."),
});

export type SubscribeInput = z.infer<typeof subscribeSchema>;
export type ContactInput = z.infer<typeof contactSchema>;
