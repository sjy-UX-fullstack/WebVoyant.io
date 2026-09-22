import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RoiCalculator } from "@/components/factoryvibe/roi-calculator";
import { ShieldCheck, TrendingUp, AlertOctagon, Cpu, ArrowRight, Zap, Factory, CheckCircle2, DollarSign, Award, Layers } from "lucide-react";

export default function FactoryVibePitchPage() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative pt-6 pb-12 overflow-hidden">
        {/* Background Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4" /> AI Impact Summit 2026 Submission
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500">Apple Watch</span> for Industrial Machinery.
            </h1>

            <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl font-normal">
              An offline Edge AI sensor pod that magnetically snaps onto any factory machine in 30 seconds—listening to ultrasonic acoustics, sensing heat, and predicting catastrophic mechanical failure 3 weeks before it happens.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-y border-slate-800/80 py-6">
              <div>
                <span className="text-2xl lg:text-3xl font-black text-white font-mono">$12B+</span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mt-0.5">Annual Downtime Loss</span>
              </div>
              <div>
                <span className="text-2xl lg:text-3xl font-black text-cyan-400 font-mono">85%</span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mt-0.5">Fault Prevention</span>
              </div>
              <div>
                <span className="text-2xl lg:text-3xl font-black text-emerald-400 font-mono">&lt; 45 Days</span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mt-0.5">Full Payback</span>
              </div>
              <div>
                <span className="text-2xl lg:text-3xl font-black text-white font-mono">100%</span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mt-0.5">Air-Gapped Edge AI</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/factoryvibe/solution"
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-7 py-3.5 rounded-2xl font-black text-xs uppercase tracking-wider transition-all shadow-xl shadow-cyan-500/20 flex items-center gap-2 hover:scale-105"
              >
                Explore Hardware & AI Solution <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/factoryvibe/hardware"
                className="bg-slate-900 hover:bg-slate-800 text-white border border-slate-800 px-7 py-3.5 rounded-2xl font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
              >
                IoT Procurement Strategy
              </Link>
            </div>
          </div>

          {/* Hero Sensor Pod Display Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl shadow-cyan-950/40 group">
              <Image
                src="/factoryvibe/sensor_pod.jpg"
                alt="FactoryVibe Industrial Sensor Pod"
                width={800}
                height={450}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 border border-slate-800 p-4 rounded-2xl backdrop-blur-md flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">Model: EAIS-01 Sensor Pod</span>
                  <span className="text-slate-300 text-xs">Magnetic Mount • IP67 Sealed • NVIDIA Jetson Inside</span>
                </div>
                <span className="bg-emerald-950 border border-emerald-800 text-emerald-400 font-mono text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                  ACTIVE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The $12B Unplanned Downtime Problem */}
      <section className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 md:p-12 space-y-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold text-red-400 uppercase tracking-widest block mb-2">Market Pain & Structural Gap</span>
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
            The Hidden Industrial Crisis: Unmonitored Analog Machinery
          </h2>
          <p className="text-slate-400 text-sm md:text-base mt-3 leading-relaxed">
            Over 85% of machines across 500,000+ manufacturing units in India run completely blind. Factories rely on subjective human listening or wait for total catastrophic breakdown.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
              <AlertOctagon className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Catastrophic Downtime</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              When a CNC spindle bearing or motor fails unannounced, entire assembly lines freeze for days, ruining delivery commitments and burning thousands of dollars per hour.
            </p>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <DollarSign className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Legacy SCADA Barrier</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Traditional SCADA monitoring costs $100k+, requires months of complex internal PLC wiring, and only works on high-end modern digital machines.
            </p>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Cloud AI Security Fear</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Factories refuse to stream live machine data to cloud servers due to strict IP secrecy, bandwidth costs, and poor industrial connectivity.
            </p>
          </div>
        </div>
      </section>

      {/* The 3-Pillar Solution & Product Feature */}
      <section className="space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block">Product Architecture</span>
          <h2 className="text-3xl md:text-5xl font-black text-white">
            The FactoryVibe Edge AI Solution
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            Combining multi-spectral physics hardware with local Edge AI inference and agentic maintenance workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 font-bold text-xs flex items-center justify-center border border-cyan-500/40">1</span>
                <h3 className="text-lg font-bold text-white">Ultrasonic Acoustic Listening (20Hz - 100kHz)</h3>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed pl-10">
                MEMS microphone arrays capture micro-frictional noise invisible to human ears—detecting race-way pitting and roller chatter 3 weeks before breakdown.
              </p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-teal-500/20 text-teal-400 font-bold text-xs flex items-center justify-center border border-teal-500/40">2</span>
                <h3 className="text-lg font-bold text-white">FLIR Thermal IR & 3-Axis Vibration Fusion</h3>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed pl-10">
                Correlates acoustic chatter with thermal heat signatures and harmonic vibration peaks to prevent false alarms and pinpoint exact fault causes.
              </p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 font-bold text-xs flex items-center justify-center border border-blue-500/40">3</span>
                <h3 className="text-lg font-bold text-white">Air-Gapped NVIDIA Jetson Edge AI Engine</h3>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed pl-10">
                Inference runs 100% locally inside the sensor pod. Generates automated plain-language work orders directly for plant maintenance teams.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
              <Image
                src="/factoryvibe/ai_dashboard.jpg"
                alt="FactoryVibe AI Dashboard"
                width={800}
                height={450}
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-4 right-4 bg-slate-950/90 border border-slate-800 px-3 py-1.5 rounded-xl backdrop-blur-md text-xs font-mono text-cyan-400 font-bold">
                Live Sensor Telemetry Feed
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Financial ROI Calculator */}
      <section>
        <RoiCalculator />
      </section>

      {/* Market Opportunity & TAM/SAM/SOM */}
      <section className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 md:p-12 space-y-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-2">Market Opportunity & Scalability</span>
          <h2 className="text-3xl md:text-4xl font-black text-white">
            $34 Billion Global Machinery Intelligence Market
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Targeting manufacturing industrial hubs across India, South-East Asia, and the Middle East.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">TAM (Global)</span>
            <span className="text-3xl font-black text-white font-mono">$34.8B</span>
            <p className="text-slate-400 text-xs pt-2">
              Global Condition Monitoring & Predictive Industrial Maintenance Market by 2030.
            </p>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-2">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">SAM (India & SEA)</span>
            <span className="text-3xl font-black text-cyan-400 font-mono">$4.2B</span>
            <p className="text-slate-400 text-xs pt-2">
              500,000+ Manufacturing Plants across India (Auto, Pharma, Textile, Steel, Packaging).
            </p>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-2">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">SOM (Initial 3-Year Target)</span>
            <span className="text-3xl font-black text-emerald-400 font-mono">₹45 Cr</span>
            <p className="text-slate-400 text-xs pt-2">
              Deploying 15,000 active sensor pods across 300 industrial clusters in India.
            </p>
          </div>
        </div>
      </section>

      {/* Next Steps CTA */}
      <section className="bg-gradient-to-r from-cyan-950 via-slate-900 to-blue-950 border border-cyan-500/40 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-6 shadow-2xl">
        <div>
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-1">Deep-Tech Deep Dive</span>
          <h3 className="text-2xl md:text-3xl font-black text-white">Review Hardware Specs & AI Architecture</h3>
          <p className="text-slate-300 text-xs md:text-sm mt-1">
            See the exact BOM, edge signal processing pipeline, and live interactive audio waveform simulator.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 shrink-0">
          <Link
            href="/factoryvibe/solution"
            className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-6 py-3.5 rounded-xl font-black text-xs uppercase tracking-wider transition shadow-lg flex items-center gap-2"
          >
            Deep-Tech Solution Page <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/factoryvibe/roadmap"
            className="bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition"
          >
            Phased Roadmap & Ask
          </Link>
        </div>
      </section>
    </div>
  );
}
