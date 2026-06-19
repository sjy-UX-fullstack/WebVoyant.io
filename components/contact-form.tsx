"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { cn } from "@/lib/cn";

const WHATSAPP_NUMBER = "918109745019";

const serviceOptions = [
  "Business Website (₹25K–₹80K)",
  "E-Commerce Store (₹50K–₹1.5L)",
  "Web / Mobile App (₹1L–₹3L)",
  "AI-Powered Product (₹3L+)",
  "Community Platform",
  "Other / Not sure yet",
];

const budgetOptions = [
  "Under ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000 – ₹3,00,000",
  "₹3,00,000+",
  "Let's discuss",
];

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);

    // Build the WhatsApp message
    const lines = [
      `🔔 *New Lead — WebVoyant*`,
      ``,
      `*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      form.email ? `*Email:* ${form.email}` : null,
      `*Service:* ${form.service}`,
      `*Budget:* ${form.budget}`,
      form.message ? `*Details:* ${form.message}` : null,
      ``,
      `_Sent from webvoyant.io contact form_`,
    ]
      .filter(Boolean)
      .join("\n");

    const waUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(lines)}`;

    // Open WhatsApp in background to send the lead
    window.open(waUrl, "_blank", "noopener,noreferrer");

    // Show success state
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 800);
  }

  if (submitted) {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-line bg-bg-raised px-6 py-16 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-teal/10">
          <CheckCircle2 className="h-8 w-8 text-teal" strokeWidth={1.5} />
        </span>
        <h2 className="mt-6 font-display text-2xl font-bold text-ink">
          We got your details!
        </h2>
        <p className="mt-3 max-w-sm text-sm text-ink-muted">
          Our team will review your requirements and get back to you within 24
          hours with a free quote. Check your WhatsApp — we&rsquo;ll reach out
          there first.
        </p>
        <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-subtle">
          Average response time: 2 hours
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-line bg-bg-raised"
    >
      <div className="flex items-center justify-between border-b border-line px-6 py-4">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal shadow-[0_0_8px_rgba(45,212,191,0.7)]" />
          Get a free quote
        </div>
        <span className="font-mono text-[10px] text-ink-subtle">
          Response in 24 hrs
        </span>
      </div>

      <div className="space-y-4 p-6">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.18em] text-ink-subtle"
          >
            Your name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Rajesh Sharma"
            className="w-full rounded-lg border border-line bg-bg px-4 py-3 text-sm text-ink placeholder:text-ink-subtle focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.18em] text-ink-subtle"
          >
            WhatsApp / Phone *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className="w-full rounded-lg border border-line bg-bg px-4 py-3 text-sm text-ink placeholder:text-ink-subtle focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.18em] text-ink-subtle"
          >
            Email (optional)
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@company.com"
            className="w-full rounded-lg border border-line bg-bg px-4 py-3 text-sm text-ink placeholder:text-ink-subtle focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>

        {/* Service */}
        <div>
          <label
            htmlFor="service"
            className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.18em] text-ink-subtle"
          >
            What do you need? *
          </label>
          <select
            id="service"
            name="service"
            required
            value={form.service}
            onChange={handleChange}
            className="w-full rounded-lg border border-line bg-bg px-4 py-3 text-sm text-ink focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          >
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        {/* Budget */}
        <div>
          <label
            htmlFor="budget"
            className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.18em] text-ink-subtle"
          >
            Budget range *
          </label>
          <select
            id="budget"
            name="budget"
            required
            value={form.budget}
            onChange={handleChange}
            className="w-full rounded-lg border border-line bg-bg px-4 py-3 text-sm text-ink focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          >
            <option value="" disabled>
              Select budget
            </option>
            {budgetOptions.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.18em] text-ink-subtle"
          >
            Tell us more (optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={form.message}
            onChange={handleChange}
            placeholder="Brief about your project, timeline, or any specific requirements..."
            className="w-full resize-none rounded-lg border border-line bg-bg px-4 py-3 text-sm text-ink placeholder:text-ink-subtle focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={sending}
          className={cn(
            "flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3.5 text-sm font-medium text-bg shadow-glow transition hover:bg-accent-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
            sending && "cursor-not-allowed opacity-70",
          )}
        >
          {sending ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Get a free quote
            </>
          )}
        </button>
      </div>
    </form>
  );
}
