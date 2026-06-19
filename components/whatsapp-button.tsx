"use client";

import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "918109745019";
const DEFAULT_MESSAGE =
  "Hi WebVoyant! I'm interested in your services. Can we discuss my project?";

export function WhatsAppButton() {
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="no-print fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40 active:scale-95"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={2} />
    </a>
  );
}
