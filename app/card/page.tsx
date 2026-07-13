import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  Globe,
  Mail,
  Download,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Sanjay Thakur — Digital Card",
  description:
    "Sanjay Thakur, Founder of WebVoyant Tech. Websites in 7 days, apps and AI products for growing businesses. Save my contact.",
  path: "/card",
});

const WHATSAPP =
  "https://wa.me/918109745019?text=Hi%20Sanjay!%20Got%20your%20digital%20card.%20Let%27s%20talk%20about%20my%20business.";

export default function CardPage() {
  return (
    <div className="mx-auto max-w-md px-5 py-10">
      {/* Identity */}
      <div className="rounded-3xl border border-line bg-bg-raised p-7 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 font-display text-2xl font-bold text-accent">
          ST
        </div>
        <h1 className="mt-4 font-display text-2xl font-bold text-ink">
          Sanjay Thakur
        </h1>
        <p className="mt-1 text-sm text-ink-muted">
          Founder, WebVoyant Tech
        </p>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">
          We build websites, apps &amp; AI products for growing businesses —
          in days, not months.
        </p>

        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {["11 live products", "Websites in 7 days", "India · US · GCC"].map(
            (chip) => (
              <span
                key={chip}
                className="rounded-full border border-line bg-white/[0.03] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted"
              >
                {chip}
              </span>
            ),
          )}
        </div>

        {/* Primary actions */}
        <div className="mt-6 grid gap-3">
          <a
            href="/sanjay-thakur.vcf"
            download
            className="flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3.5 text-sm font-medium text-bg shadow-glow transition hover:bg-accent-soft"
          >
            <Download className="h-4 w-4" />
            Save my contact
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-5 py-3.5 text-sm font-medium text-[#25D366] transition hover:bg-[#25D366]/20"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp me
          </a>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-3">
          <a
            href="tel:+918109745019"
            className="flex flex-col items-center gap-1 rounded-xl border border-line bg-bg p-3 text-ink-muted transition hover:text-ink"
          >
            <Phone className="h-4 w-4" />
            <span className="text-[10px]">Call</span>
          </a>
          <a
            href="mailto:team@webvoyant.io"
            className="flex flex-col items-center gap-1 rounded-xl border border-line bg-bg p-3 text-ink-muted transition hover:text-ink"
          >
            <Mail className="h-4 w-4" />
            <span className="text-[10px]">Email</span>
          </a>
          <Link
            href="/"
            className="flex flex-col items-center gap-1 rounded-xl border border-line bg-bg p-3 text-ink-muted transition hover:text-ink"
          >
            <Globe className="h-4 w-4" />
            <span className="text-[10px]">Website</span>
          </Link>
        </div>
      </div>

      {/* Offer */}
      <div className="mt-5 rounded-2xl border border-teal/30 bg-teal/5 p-5 text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-teal">
          Limited-time offer
        </p>
        <p className="mt-2 text-sm leading-relaxed text-ink">
          Free AI business growth consultation worth{" "}
          <span className="font-semibold">₹25,000</span> — for businesses that
          connect through this card.
        </p>
      </div>

      {/* AI Scan hook */}
      <Link
        href="/scan"
        className="mt-5 flex items-center justify-between rounded-2xl border border-accent/30 bg-accent/5 p-5 transition hover:bg-accent/10"
      >
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15">
            <Sparkles className="h-5 w-5 text-accent" />
          </span>
          <div>
            <p className="text-sm font-semibold text-ink">
              Try the AI Business Scan
            </p>
            <p className="text-xs text-ink-muted">
              3 questions → instant growth plan for your brand
            </p>
          </div>
        </div>
        <ArrowRight className="h-4 w-4 flex-shrink-0 text-accent" />
      </Link>

      {/* QR for sharing */}
      <div className="mt-5 rounded-2xl border border-line bg-white p-6 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://api.qrserver.com/v1/create-qr-code/?size=480x480&data=https%3A%2F%2Fwww.webvoyant.io%2Fcard"
          alt="QR code for webvoyant.io/card"
          className="mx-auto h-52 w-52"
          width={208}
          height={208}
        />
        <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[#0b1224]/60">
          Scan to save this card
        </p>
      </div>

      <p className="mt-6 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-ink-subtle">
        webvoyant.io · Indore, India
      </p>
    </div>
  );
}
