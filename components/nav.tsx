"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-page items-center justify-between px-6 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-7 md:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-ink-muted transition hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-accent px-4 py-2 text-sm font-medium text-bg shadow-glow transition hover:bg-accent-soft"
          >
            Book a discovery call
          </Link>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-line bg-bg md:hidden",
          open ? "max-h-[420px]" : "max-h-0",
          "transition-[max-height] duration-300 ease-out",
        )}
      >
        <nav className="mx-auto flex w-full max-w-page flex-col gap-1 px-6 py-4 sm:px-8">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-sm text-ink-muted hover:bg-white/[0.04] hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-accent px-4 py-2.5 text-sm font-medium text-bg shadow-glow"
          >
            Book a discovery call
          </Link>
        </nav>
      </div>
    </header>
  );
}
