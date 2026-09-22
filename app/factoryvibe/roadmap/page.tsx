import React from "react";
import Link from "next/link";
import { Rocket, TrendingUp, DollarSign, Target, Award, ShieldCheck, CheckCircle2, ArrowRight, Building, FileText } from "lucide-react";

export const metadata = {
  title: "Phased Execution Roadmap & Pre-Seed Investment Ask — FactoryVibe AI",
  description: "4-Phase execution roadmap from Idea stage to commercial scale, unit economics, and $150K / ₹1.2 Cr pre-seed ask.",
};

export default function FactoryVibeRoadmapPage() {
  const phases = [
    {
      quarter: "Phase 1: Months 1 - 3",
      title: "Idea Validation, Prototyping & Summit Pitch",
      status: "CURRENT STAGE (AI Impact Summit 2026)",
      active: true,
      items: [
        "Finalize 10 bench-prototype sensor pods using NVIDIA Jetson Developer Kits.",
        "Submit complete pitch deck & prototype demo to AI Impact Summit 2026 (AIC Prestige Inspire Foundation).",
        "Sign Letter of Intent (LOI) with initial 3 factory pilot partners in Pithampur Industrial Zone, Indore.",
        "File provisional patent on multimodal acoustic-thermal physics feature extraction algorithm.",
      ],
    },
    {
      quarter: "Phase 2: Months 4 - 8",
      title: "Hardware Beta & 50-Pod Factory Pilots",
      status: "UPCOMING (Post Pre-Seed Funding)",
      active: false,
      items: [
        "Design custom carrier PCB & die-cast aluminum IP67 magnetic enclosure tooling.",
        "Deploy 50 beta sensor pods across 5 manufacturing plants (Auto OEMs, Textile, Pharma).",
        "Collect 10,000+ hours of physical machine failure vibration datasets for model fine-tuning.",
        "Validate 85% fault prevention rate and benchmark &lt; 45-day payback period for plant owners.",
      ],
    },
    {
      quarter: "Phase 3: Months 9 - 15",
      title: "Commercial Launch & SaaS Engine",
      status: "SCALING PHASE",
      active: false,
      items: [
        "Transition to domestic SMT batch manufacturing (500 units batch at ₹35,000 COGS target).",
        "Launch Hardware-Enabled B2B SaaS pricing model (₹25,000 pod fee + ₹15,000/yr recurring SaaS).",
        "Establish regional sales channel with Industrial MSME Associations across MP, Gujarat & Maharashtra.",
        "Reach ₹1.5 Cr ARR (Annual Recurring Revenue) with 500 active pod subscriptions.",
      ],
    },
    {
      quarter: "Phase 4: Months 16 - 24",
      title: "National Scale & MENA Expansion",
      status: "SERIES A READY",
      active: false,
      items: [
        "Scale active deployment to 5,000 pods across 100+ enterprise manufacturing facilities.",
        "Expand to Middle East (UAE / Saudi industrial corridors) and South-East Asia.",
        "Introduce automated predictive spare-parts procurement marketplace integration.",
        "Raise Seed / Series A funding round ($2M - $5M) for global expansion.",
      ],
    },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Header */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 md:p-12 relative overflow-hidden backdrop-blur-xl">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Rocket className="w-4 h-4" /> Execution Masterplan & Financial Strategy
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">
            Phased Roadmap & Investment Ask
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Transitioning FactoryVibe from validated idea stage to 5,000 active sensor deployments across Indian and global manufacturing plants.
          </p>
        </div>
      </div>

      {/* 4-Phase Timeline Execution Grid */}
      <section className="space-y-8">
        <div className="border-b border-slate-800 pb-4">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block">Phase-Wise Execution</span>
          <h2 className="text-2xl md:text-3xl font-black text-white mt-1">24-Month Rollout Timeline</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {phases.map((phase, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-6 md:p-8 border flex flex-col justify-between relative overflow-hidden transition-all ${
                phase.active
                  ? "bg-gradient-to-b from-cyan-950/60 to-slate-950 border-cyan-500/50 shadow-xl shadow-cyan-950/30"
                  : "bg-slate-900/70 border-slate-800 hover:border-slate-700"
              }`}
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950 px-3 py-1 rounded-full border border-cyan-800 uppercase tracking-wider">
                    {phase.quarter}
                  </span>
                  <span
                    className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border ${
                      phase.active
                        ? "bg-emerald-950 text-emerald-400 border-emerald-800 animate-pulse"
                        : "bg-slate-950 text-slate-500 border-slate-800"
                    }`}
                  >
                    {phase.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-4">{phase.title}</h3>

                <ul className="space-y-3 mb-6">
                  {phase.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${phase.active ? "text-cyan-400" : "text-slate-500"}`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Unit Economics & Business Model */}
      <section className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 md:p-12 space-y-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-2">Financial Architecture</span>
          <h2 className="text-3xl font-black text-white">
            Hardware-Enabled SaaS Business Model
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Combining upfront hardware deployment fees with high-margin recurring annual SaaS software subscriptions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Initial Setup Fee</span>
            <span className="text-3xl font-black text-white font-mono">₹25,000</span>
            <span className="text-xs text-slate-500 block">per pod (Covers hardware & installation)</span>
            <p className="text-slate-400 text-xs pt-2">
              Provides immediate capital payback on sensor pod COGS (₹35,000 scale target).
            </p>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-2">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">Annual Recurring SaaS</span>
            <span className="text-3xl font-black text-cyan-400 font-mono">₹15,000/yr</span>
            <span className="text-xs text-cyan-500/80 block font-bold">per pod recurring</span>
            <p className="text-slate-400 text-xs pt-2">
              Grants ongoing Edge AI model updates, automated technician alerts, and web analytics dashboard access.
            </p>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-2">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">Software Gross Margin</span>
            <span className="text-3xl font-black text-emerald-400 font-mono">82%</span>
            <span className="text-xs text-emerald-500/80 block font-bold">Local Edge Execution</span>
            <p className="text-slate-400 text-xs pt-2">
              Near-zero server bandwidth cloud costs because AI inference executes offline inside the pod.
            </p>
          </div>
        </div>
      </section>

      {/* Pre-Seed Investment Ask Box */}
      <section id="investor-deck" className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-cyan-500/40 rounded-3xl p-8 md:p-12 space-y-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-slate-800 pb-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Award className="w-3.5 h-3.5" /> Funding Round Structure
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white">Pre-Seed Investment Ask</h2>
            <p className="text-slate-400 text-sm mt-1">
              Seeking pre-seed capital & incubator support to execute 50-pod factory pilots.
            </p>
          </div>

          <div className="bg-cyan-950/80 border border-cyan-500/50 rounded-2xl px-6 py-4 text-right">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">Target Pre-Seed Capital</span>
            <span className="text-3xl md:text-4xl font-black text-cyan-400 font-mono">$150,000</span>
            <span className="text-xs font-bold text-cyan-300 block font-mono">₹1.20 Crore (INR)</span>
          </div>
        </div>

        {/* Use of Funds Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-10">
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5">
            <span className="text-2xl font-black text-cyan-400 font-mono">40%</span>
            <h4 className="text-sm font-bold text-white mt-1">R&D & Sensor Engineering</h4>
            <p className="text-slate-400 text-xs mt-1">Custom carrier PCB design & Jetson Edge AI model tuning.</p>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5">
            <span className="text-2xl font-black text-teal-400 font-mono">30%</span>
            <h4 className="text-sm font-bold text-white mt-1">50-Pod Factory Pilots</h4>
            <p className="text-slate-400 text-xs mt-1">Deploying beta pods across 5 Pithampur manufacturing plants.</p>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5">
            <span className="text-2xl font-black text-blue-400 font-mono">15%</span>
            <h4 className="text-sm font-bold text-white mt-1">Patent & IP Protection</h4>
            <p className="text-slate-400 text-xs mt-1">Filing core physics-AI feature extraction patents in India & US.</p>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5">
            <span className="text-2xl font-black text-emerald-400 font-mono">15%</span>
            <h4 className="text-sm font-bold text-white mt-1">GTM & Industrial Sales</h4>
            <p className="text-slate-400 text-xs mt-1">Channel partner setup with MSME industrial clusters.</p>
          </div>
        </div>

        {/* Founder Pitch Submission Banner */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
          <div>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">AI Impact Summit 2026 Submission Ready</span>
            <h3 className="text-xl font-bold text-white mt-1">Connect with the Founders</h3>
            <p className="text-slate-400 text-xs mt-1">
              Building in stealth for AIC Prestige Inspire Foundation summit presentation.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="mailto:pitch@factoryvibe.ai"
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-6 py-3 rounded-xl font-black text-xs uppercase tracking-wider transition flex items-center gap-2"
            >
              <FileText className="w-4 h-4" /> Contact Founders / Request Pitch Deck
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
