"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Loader2,
  MessageCircle,
  CheckCircle2,
  Wrench,
  ArrowLeft,
} from "lucide-react";

type ScanResult = {
  headline: string;
  quick_wins: { title: string; detail: string }[];
  what_to_build: {
    item: string;
    why: string;
    price_range: string;
    timeline: string;
  }[];
  closing_line: string;
};

const industries = [
  "Food & Beverage / Restaurant",
  "Retail / Fashion",
  "Education / Coaching",
  "Health / Wellness / Gym",
  "Beauty / Salon",
  "Real Estate",
  "Automotive",
  "Services / Consulting",
  "Manufacturing / D2C",
  "Other",
];

const goals = [
  "More leads / enquiries",
  "More walk-in customers",
  "Online orders / bookings",
  "Build brand online",
  "Automate with AI",
];

export default function ScanPage() {
  const [business, setBusiness] = useState("");
  const [industry, setIndustry] = useState("");
  const [goal, setGoal] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<ScanResult | null>(null);

  async function runScan(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);
    try {
      const res = await fetch("/api/scan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ business, industry, goal }),
      });
      const data = await res.json();
      if (!res.ok || data.error) {
        setError(data.error || "Something went wrong. Try again.");
      } else {
        setResult(data);
      }
    } catch {
      setError("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  }

  const waLink = `https://wa.me/918109745019?text=${encodeURIComponent(
    `Hi Sanjay! I ran the AI scan for ${business || "my business"} — let's claim the free consultation.`,
  )}`;

  return (
    <div className="mx-auto max-w-md px-5 py-10">
      <Link
        href="/card"
        className="inline-flex items-center gap-1.5 text-xs text-ink-muted hover:text-ink"
      >
        <ArrowLeft className="h-3.5 w-3.5" /> Back to card
      </Link>

      <div className="mt-4 text-center">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
          <Sparkles className="h-6 w-6 text-accent" />
        </span>
        <h1 className="mt-3 font-display text-2xl font-bold text-ink">
          AI Business Growth Scan
        </h1>
        <p className="mt-2 text-sm text-ink-muted">
          3 questions. 10 seconds. A digital growth plan built for your
          business by AI.
        </p>
      </div>

      {!result && (
        <form
          onSubmit={runScan}
          className="mt-6 space-y-4 rounded-2xl border border-line bg-bg-raised p-6"
        >
          <div>
            <label
              htmlFor="business"
              className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.18em] text-ink-subtle"
            >
              Business / brand name
            </label>
            <input
              id="business"
              required
              value={business}
              onChange={(e) => setBusiness(e.target.value)}
              placeholder="e.g. Chai Junction"
              className="w-full rounded-lg border border-line bg-bg px-4 py-3 text-sm text-ink placeholder:text-ink-subtle focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            />
          </div>

          <div>
            <label
              htmlFor="industry"
              className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.18em] text-ink-subtle"
            >
              Industry
            </label>
            <select
              id="industry"
              required
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="w-full rounded-lg border border-line bg-bg px-4 py-3 text-sm text-ink focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            >
              <option value="" disabled>
                Select industry
              </option>
              {industries.map((i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="goal"
              className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.18em] text-ink-subtle"
            >
              What do you want most?
            </label>
            <select
              id="goal"
              required
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full rounded-lg border border-line bg-bg px-4 py-3 text-sm text-ink focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            >
              <option value="" disabled>
                Select goal
              </option>
              {goals.map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
          </div>

          {error && (
            <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3.5 text-sm font-medium text-bg shadow-glow transition hover:bg-accent-soft disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Analysing your business...
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4" />
                Run my free scan
              </>
            )}
          </button>
        </form>
      )}

      {result && (
        <div className="mt-6 space-y-4">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-5">
            <p className="font-display text-lg font-semibold leading-snug text-ink">
              {result.headline}
            </p>
          </div>

          <div className="rounded-2xl border border-line bg-bg-raised p-5">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-teal">
              Quick wins
            </p>
            <ul className="space-y-3">
              {result.quick_wins.map((w) => (
                <li key={w.title} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal" />
                  <div>
                    <p className="text-sm font-semibold text-ink">{w.title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-ink-muted">
                      {w.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-line bg-bg-raised p-5">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              What we&rsquo;d build for you
            </p>
            <ul className="space-y-4">
              {result.what_to_build.map((b) => (
                <li key={b.item} className="flex gap-3">
                  <Wrench className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                  <div>
                    <p className="text-sm font-semibold text-ink">{b.item}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-ink-muted">
                      {b.why}
                    </p>
                    <p className="mt-1 font-mono text-[11px] text-accent">
                      {b.price_range} · {b.timeline}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-teal/30 bg-teal/5 p-5 text-center">
            <p className="text-sm leading-relaxed text-ink">
              {result.closing_line}
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" />
              Claim free ₹25,000 consultation
            </a>
          </div>

          <button
            onClick={() => {
              setResult(null);
              setBusiness("");
              setIndustry("");
              setGoal("");
            }}
            className="w-full rounded-full border border-line px-5 py-3 text-sm text-ink-muted transition hover:text-ink"
          >
            Scan another business
          </button>
        </div>
      )}

      <p className="mt-8 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-ink-subtle">
        Powered by WebVoyant Tech · webvoyant.io
      </p>
    </div>
  );
}
