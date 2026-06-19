"use client";

import { Download } from "lucide-react";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-bg shadow-glow transition hover:bg-accent-soft"
    >
      <Download className="h-4 w-4" strokeWidth={2} />
      Download as PDF
    </button>
  );
}
