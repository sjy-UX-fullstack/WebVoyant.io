import React from "react";
import Link from "next/link";
import { HardwareProcurementPlan } from "@/components/factoryvibe/hardware-procurement-plan";
import { Wrench, ShieldCheck, ArrowRight, PackageCheck, Factory, Cpu } from "lucide-react";

export const metadata = {
  title: "IoT Sourcing & Hardware Procurement Plan — FactoryVibe AI",
  description: "Complete Bill of Materials (BOM), supplier sourcing, IP67 enclosure tooling, and local SMT assembly roadmap in India.",
};

export default function FactoryVibeHardwarePage() {
  return (
    <div className="space-y-16">
      {/* Embedded Component */}
      <HardwareProcurementPlan />

      {/* Certification & Quality Testing Strategy */}
      <section className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 md:p-12 space-y-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-2">Quality Assurance & Compliance</span>
          <h2 className="text-3xl font-black text-white">
            Industrial Certification & Environmental Testing
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Ensuring ruggedized operation in high-vibration, high-dust, and humid factory environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">
              IP67
            </div>
            <h3 className="text-base font-bold text-white">Dust & Water Ingress Protection</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Die-cast aluminum casing with custom silicone gasket seals protecting sensitive MEMS mics and thermal camera optics against coolant spray and metal dust.
            </p>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 font-bold">
              IEC
            </div>
            <h3 className="text-base font-bold text-white">IEC 60068 Vibration Endurance</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Internal PCB mounted on silicone mechanical dampeners to isolate board solder joints from continuous 10g high-amplitude heavy machine shockwaves.
            </p>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold">
              BIS
            </div>
            <h3 className="text-base font-bold text-white">Domestic BIS & CE Mark Compliance</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Standardized power management circuitry designed for Bureau of Indian Standards (BIS) and CE compliance for immediate deployment across Indian and global plants.
            </p>
          </div>
        </div>
      </section>

      {/* Next Steps CTA */}
      <section className="bg-gradient-to-r from-cyan-950 via-slate-900 to-blue-950 border border-cyan-500/40 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-6 shadow-2xl">
        <div>
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-1">Financial Masterplan</span>
          <h3 className="text-2xl md:text-3xl font-black text-white">Review Phased Execution & Investment Ask</h3>
          <p className="text-slate-300 text-xs md:text-sm mt-1">
            See our 4-phase rollout timeline, 82% SaaS gross margin unit economics, and $150K pre-seed use of funds.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 shrink-0">
          <Link
            href="/factoryvibe/roadmap"
            className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-6 py-3.5 rounded-xl font-black text-xs uppercase tracking-wider transition shadow-lg flex items-center gap-2"
          >
            Phased Roadmap & Financials <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
