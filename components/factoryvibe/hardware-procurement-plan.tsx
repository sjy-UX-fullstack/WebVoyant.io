"use client";

import React from "react";
import { Cpu, ShieldCheck, Wrench, Package, Truck, Layers, Zap, CheckCircle2, Factory } from "lucide-react";

export function HardwareProcurementPlan() {
  const bomItems = [
    {
      category: "Compute & AI Module",
      component: "NVIDIA Jetson Orin Nano System-on-Module (SOM)",
      spec: "40 TOPS AI, 6-core Arm Cortex-A78AE, 8GB LPDDR5",
      supplier: "NVIDIA Authorized Distributor (Arrow / Avnet India)",
      costEst: "₹18,500 / unit",
      status: "Phase 1 Off-the-shelf | Phase 3 Custom Carrier Board",
    },
    {
      category: "Acoustic Sensing",
      component: "Industrial MEMS Ultrasonic Microphone Array",
      spec: "Frequency response 20Hz - 100kHz, High SNR 65dB",
      supplier: "Knowles Electronics / TDK InvenSense (India Stockists)",
      costEst: "₹1,200 / unit",
      status: "Direct SMT component for Custom PCB",
    },
    {
      category: "Thermal Imaging",
      component: "FLIR Lepton 3.5 Long-Wave Infrared (LWIR) Core",
      spec: "160x120 radiometric thermal resolution, SPI interface",
      supplier: "Teledyne FLIR India / Digikey India",
      costEst: "₹14,000 / unit",
      status: "Module plug-in with custom germanium lens housing",
    },
    {
      category: "Vibration & Accelerometer",
      component: "Industrial 3-Axis High-Frequency Accelerometer",
      spec: "±16g range, 10kHz bandwidth, SPI output",
      supplier: "Analog Devices (ADXL356) / STMicroelectronics",
      costEst: "₹1,800 / unit",
      status: "Board mount with mechanical dampening mount",
    },
    {
      category: "Enclosure & Mount",
      component: "IP67 Die-Cast Aluminum & Neodymium Base",
      spec: "80kg pull-force magnetic mount, thermal heatsink casing",
      supplier: "Custom Tooling via Local CNC / Plastic Injection Manufacturer (Indore Industrial Zone)",
      costEst: "₹2,500 / unit",
      status: "Local Tooling & Assembly in MP Industrial Cluster",
    },
    {
      category: "Power & Connectivity",
      component: "Power Supply & Air-gapped Relay Block",
      spec: "9V-36V Industrial DC input + 3000mAh backup LiFePO4 battery",
      supplier: "MeanWell / local PCB Assembly partner",
      costEst: "₹1,500 / unit",
      status: "Off-the-shelf module integrated into power board",
    },
  ];

  const executionSteps = [
    {
      step: "01",
      title: "Phase 1: Rapid Prototyping & Off-the-Shelf Assembly (Months 1-3)",
      desc: "Assemble initial 10 Prototype Pods using NVIDIA Jetson Developer Kits, FLIR Breakout boards, and 3D-printed enclosure prototypes for bench testing and initial plant demonstration.",
      deliverable: "10 Working Prototype Sensor Pods & Initial FFT AI model baseline.",
    },
    {
      step: "02",
      title: "Phase 2: Custom Carrier PCB Design & Enclosure Tooling (Months 4-6)",
      desc: "Design proprietary compact carrier PCB integrating power regulators, MEMS micro-phone array, and Jetson SOM connector. Commission aluminum die-cast tooling with Indore CNC partners.",
      deliverable: "Gerber PCB files, IP67 certified prototype enclosure & 50 Pilot Pods.",
    },
    {
      step: "03",
      title: "Phase 3: SMT Production & Local Assembly Line (Months 7-12)",
      desc: "Partner with domestic EMS (Electronics Manufacturing Services) in India (e.g., Syrma SGS / Dixon / local MP EMS units) for SMT component placement, quality testing, and BIS certification.",
      deliverable: "500 Batch Production Units @ Target COGS under ₹35,000 per pod.",
    },
    {
      step: "04",
      title: "Phase 4: Scaling & Automated Factory Deployment (Months 13-24)",
      desc: "Establish standardized 30-minute technician deployment workflow: Magnetic snap-on mount -> QR Code pairing -> Automatic baseline calibration via local Jetson AI engine.",
      deliverable: "5,000 Active Pods deployed across 100+ manufacturing plants.",
    },
  ];

  return (
    <div className="space-y-12">
      {/* Header Overview */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 md:p-10 relative overflow-hidden backdrop-blur-xl">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Factory className="w-4 h-4" /> Hardware Sourcing & Production Blueprint
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white">
            Sensor Procurement & IoT Devices Execution Plan
          </h2>
          <p className="text-slate-400 text-base mt-3 leading-relaxed">
            A practical, phase-wise manufacturing roadmap detailing how FactoryVibe transitions from off-the-shelf rapid prototyping components to proprietary custom-engineered IP67 industrial sensor pods assembled in India.
          </p>
        </div>
      </div>

      {/* Bill of Materials Table */}
      <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-800 pb-4">
          <div>
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block">Hardware Component Breakdown</span>
            <h3 className="text-2xl font-bold text-white mt-1">Bill of Materials (BOM) & Sourcing Strategy</h3>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-2 text-xs font-mono text-slate-300">
            Target Prototype Unit COGS: <span className="text-cyan-400 font-bold">~₹39,500</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300 border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-900/60 font-mono text-slate-400 uppercase tracking-wider">
                <th className="p-3">Category</th>
                <th className="p-3">Component & Model</th>
                <th className="p-3">Technical Specification</th>
                <th className="p-3">Supplier / Procurement Channel</th>
                <th className="p-3 text-right">Est. Unit Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {bomItems.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-900/40 transition">
                  <td className="p-3 font-bold text-cyan-400 whitespace-nowrap">{item.category}</td>
                  <td className="p-3 font-bold text-white">{item.component}</td>
                  <td className="p-3 text-slate-400">{item.spec}</td>
                  <td className="p-3 text-slate-300">{item.supplier}</td>
                  <td className="p-3 font-mono font-bold text-emerald-400 text-right whitespace-nowrap">{item.costEst}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Phase-wise Manufacturing Execution Steps */}
      <div className="space-y-6">
        <div className="border-b border-slate-800 pb-4">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block">Step-by-Step Production Roadmap</span>
          <h3 className="text-2xl font-black text-white mt-1">From Prototype Sourcing to Scale Manufacturing</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {executionSteps.map((step, idx) => (
            <div key={idx} className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 relative flex flex-col justify-between hover:border-cyan-500/40 transition">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-3xl font-black text-cyan-500/30 font-mono">{step.step}</span>
                  <span className="bg-slate-950 border border-slate-800 text-slate-400 text-[10px] font-mono px-3 py-1 rounded-full font-bold uppercase">
                    Execution Phase
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed mb-6">{step.desc}</p>
              </div>

              <div className="bg-slate-950 border border-slate-800/80 rounded-2xl p-4 flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">
                  <strong className="text-white block text-[11px]">Phase Key Milestone:</strong> {step.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
