import React from "react";
import Link from "next/link";
import { Cpu, ShieldAlert, Layers, Rocket, FileText, ArrowUpRight, CheckCircle2, ChevronRight, Activity } from "lucide-react";

export const metadata = {
  title: "FactoryVibe AI — Edge Industrial Intelligence | Investor Pitch",
  description: "Edge Multimodal AI & Predictive Maintenance for Manufacturing. AI Impact Summit 2026 Pitch Submission.",
};

export default function FactoryVibeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-cyan-950 via-slate-900 to-blue-950 border-b border-cyan-500/20 py-2.5 px-4 text-center text-xs font-medium">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 mx-auto md:mx-0">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-cyan-500/20 text-cyan-400 border border-cyan-500/40">
              SUMMIT PITCH READY
            </span>
            <span className="text-slate-300 hidden sm:inline">
              Selected Idea for <strong>AI Impact Summit 2026</strong> (AIC Prestige Inspire Foundation, Indore)
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-slate-400 text-xs font-mono">
            <span>Stage: Pre-Seed / Idea Validation</span>
            <span>•</span>
            <span className="text-cyan-400 font-bold">Target Ask: $150K / ₹1.2 Cr</span>
          </div>
        </div>
      </div>

      {/* Main Header / Navigation */}
      <header className="sticky top-0 z-50 bg-[#020617]/90 backdrop-blur-md border-b border-slate-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo & Brand */}
          <Link href="/factoryvibe" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <Activity className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black tracking-tight text-white">FactoryVibe</span>
                <span className="text-xs font-black text-cyan-400 font-mono bg-cyan-950 px-1.5 py-0.5 rounded border border-cyan-800">
                  AI
                </span>
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                Edge Industrial Intelligence
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/80 p-1.5 rounded-2xl border border-slate-800 text-xs font-bold text-slate-300">
            <Link
              href="/factoryvibe"
              className="px-4 py-2 rounded-xl hover:bg-slate-800 hover:text-white transition"
            >
              Executive Pitch
            </Link>
            <Link
              href="/factoryvibe/solution"
              className="px-4 py-2 rounded-xl hover:bg-slate-800 hover:text-white transition"
            >
              Hardware & AI Stack
            </Link>
            <Link
              href="/factoryvibe/hardware"
              className="px-4 py-2 rounded-xl hover:bg-slate-800 hover:text-white transition"
            >
              IoT Sourcing & BOM
            </Link>
            <Link
              href="/factoryvibe/roadmap"
              className="px-4 py-2 rounded-xl hover:bg-slate-800 hover:text-white transition"
            >
              Phased Roadmap & Financials
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Link
              href="/factoryvibe/roadmap#investor-deck"
              className="hidden sm:inline-flex bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider transition-all shadow-lg shadow-cyan-500/25 items-center gap-1.5 hover:scale-105"
            >
              Investor Deck <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Mobile Nav Bar */}
        <div className="lg:hidden flex items-center justify-around mt-3 pt-3 border-t border-slate-800 text-[11px] font-bold text-slate-400">
          <Link href="/factoryvibe" className="hover:text-cyan-400">Pitch</Link>
          <Link href="/factoryvibe/solution" className="hover:text-cyan-400">AI Solution</Link>
          <Link href="/factoryvibe/hardware" className="hover:text-cyan-400">IoT Sourcing</Link>
          <Link href="/factoryvibe/roadmap" className="hover:text-cyan-400">Roadmap</Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 py-10">{children}</main>

      {/* Shared Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-12 px-6 mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-cyan-500 flex items-center justify-center text-slate-950 font-black">
                <Activity className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="text-lg font-black text-white">FactoryVibe AI</span>
            </div>
            <p className="text-slate-400 text-xs max-w-md leading-relaxed">
              FactoryVibe AI is an Edge Multimodal Industrial Intelligence platform designed to eliminate unplanned machinery downtime in analog & modern manufacturing plants. Selected idea for AI Impact Summit 2026.
            </p>
            <div className="text-[11px] text-slate-500 font-mono">
              Designed for AIC Prestige Inspire Foundation Summit Pitching | Indore, MP
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/factoryvibe" className="hover:text-cyan-400">Executive Pitch & ROI</Link></li>
              <li><Link href="/factoryvibe/solution" className="hover:text-cyan-400">Hardware & AI Architecture</Link></li>
              <li><Link href="/factoryvibe/hardware" className="hover:text-cyan-400">IoT Sensors & Procurement</Link></li>
              <li><Link href="/factoryvibe/roadmap" className="hover:text-cyan-400">Phased Execution & Ask</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">Target Impact Tracks</h4>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="bg-slate-900 border border-slate-800 px-3 py-1 rounded-lg text-slate-300">Core Industry 4.0</span>
              <span className="bg-slate-900 border border-slate-800 px-3 py-1 rounded-lg text-slate-300">NVIDIA Jetson Edge AI</span>
              <span className="bg-slate-900 border border-slate-800 px-3 py-1 rounded-lg text-slate-300">Acoustic & Thermal Sensing</span>
              <span className="bg-slate-900 border border-slate-800 px-3 py-1 rounded-lg text-slate-300">Agentic Maintenance</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-slate-900 flex justify-between items-center text-xs text-slate-500 font-mono">
          <div>© 2026 FactoryVibe AI. All Rights Reserved.</div>
          <div>Pre-Seed Investor Pitch Deck Edition</div>
        </div>
      </footer>
    </div>
  );
}
