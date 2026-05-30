"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { contactSchema, type ContactInput } from "@/lib/validation";

export function ContactForm() {
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);

  const form = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = form.handleSubmit(async (values) => {
    setServerMessage(null);
    setIsError(false);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const data = (await response.json()) as {
      success: boolean;
      message?: string;
      error?: string;
    };

    if (!response.ok || !data.success) {
      setIsError(true);
      setServerMessage(data.error ?? "Something went wrong. Please try again.");
      return;
    }

    form.reset();
    setServerMessage(data.message ?? "Thank you! We'll be in touch soon.");
  });

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-4" noValidate>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Work Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="you@yourcompany.com"
                  autoComplete="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          size="lg"
          disabled={form.formState.isSubmitting}
          className="w-full gap-2 text-sm"
          style={{ fontFamily: "var(--font-cta)" }}
        >
          <Send className="h-4 w-4" />
          {form.formState.isSubmitting ? "Sending..." : "Get Your Team Started"}
        </Button>

        {serverMessage ? (
          <p className={`text-sm text-center ${isError ? "text-destructive" : "text-soft-green"}`}>
            {serverMessage}
          </p>
        ) : null}
      </form>
    </Form>
  );
}
