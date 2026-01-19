"use client";

import { useState } from "react";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email."),
  phone: z.string().min(7, "Please enter a valid phone number."),
  service: z.string().min(1, "Select a service."),
  budget: z.string().min(1, "Select a budget range."),
  message: z.string().min(10, "Tell us a bit more about your project."),
});

const serviceOptions = [
  "Website Design",
  "Web/App Development",
  "Graphic Design & Branding",
  "Cybersecurity",
  "AI Automation",
];

const budgetOptions = ["Under R…", "R… - R…", "R… - R…", "R…+"];

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const result = formSchema.safeParse(formState);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((error) => {
        if (error.path[0]) {
          fieldErrors[error.path[0].toString()] = error.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setIsSuccess(true);
      setFormState({
        name: "",
        email: "",
        phone: "",
        service: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      setErrors({
        form: "Something went wrong. Please email us directly or try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            placeholder="Your full name"
            value={formState.name}
            onChange={(event) => handleChange("name", event.target.value)}
          />
          {errors.name ? <p className="text-xs text-red-400">{errors.name}</p> : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@email.com"
            value={formState.email}
            onChange={(event) => handleChange("email", event.target.value)}
          />
          {errors.email ? <p className="text-xs text-red-400">{errors.email}</p> : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            placeholder="+27"
            value={formState.phone}
            onChange={(event) => handleChange("phone", event.target.value)}
          />
          {errors.phone ? <p className="text-xs text-red-400">{errors.phone}</p> : null}
        </div>
        <div className="space-y-2">
          <Label>Service needed</Label>
          <Select value={formState.service} onValueChange={(value) => handleChange("service", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {serviceOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.service ? <p className="text-xs text-red-400">{errors.service}</p> : null}
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label>Budget range</Label>
          <Select value={formState.budget} onValueChange={(value) => handleChange("budget", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select a range" />
            </SelectTrigger>
            <SelectContent>
              {budgetOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.budget ? <p className="text-xs text-red-400">{errors.budget}</p> : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="Tell us about your project goals"
            value={formState.message}
            onChange={(event) => handleChange("message", event.target.value)}
          />
          {errors.message ? <p className="text-xs text-red-400">{errors.message}</p> : null}
        </div>
      </div>

      {errors.form ? <p className="text-sm text-red-400">{errors.form}</p> : null}
      {isSuccess ? (
        <div className="rounded-2xl border border-gold/30 bg-gold/10 p-4 text-sm text-white/80">
          Thank you! Your request has been submitted. We’ll reply within 1-2 business days.
        </div>
      ) : null}
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Send Request"}
      </Button>
    </form>
  );
}
