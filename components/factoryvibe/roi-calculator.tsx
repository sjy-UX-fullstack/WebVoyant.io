"use client";

import React, { useState } from "react";
import { ShieldCheck, TrendingUp, AlertTriangle } from "lucide-react";

export function RoiCalculator() {
  const [machines, setMachines] = useState(25);
  const [downtimeCost, setDowntimeCost] = useState(50000); // INR per hour
  const [downtimeHours, setDowntimeHours] = useState(120); // hours per year per plant

  // Calculations
  const totalDowntimeLoss = downtimeHours * downtimeCost;
  const savedDowntimeLoss = totalDowntimeLoss * 0.85; // 85% prevented
  const annualPodCostPerMachine = 25000; // INR per machine/year (Hardware amortized + SaaS)
  const totalFactoryVibeInvestment = machines * annualPodCostPerMachine;
  const netAnnualSavings = savedDowntimeLoss - totalFactoryVibeInvestment;
  const roiPercentage = ((netAnnualSavings / totalFactoryVibeInvestment) * 100).toFixed(0);
  const paybackDays = Math.max(12, Math.round((totalFactoryVibeInvestment / savedDowntimeLoss) * 365));

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-800 pb-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
              <TrendingUp className="w-3.5 h-3.5" /> Interactive Financial Model
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-white">
              Factory Financial ROI Calculator
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              Adjust variables to see how FactoryVibe prevents catastrophic production loss.
            </p>
          </div>
          <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl px-5 py-3 text-right">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">Projected Net ROI</span>
            <span className="text-2xl md:text-3xl font-black text-cyan-400">+{roiPercentage}%</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls Column */}
          <div className="lg:col-span-6 space-y-6">
            {/* Control 1: Machine Count */}
            <div className="bg-slate-950/60 border border-slate-800/80 rounded-2xl p-5">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-bold text-slate-300 flex items-center gap-2">
                  <span>Number of Critical Machinery Assets</span>
                </label>
                <span className="text-cyan-400 font-mono font-bold text-lg bg-cyan-950/60 px-3 py-1 rounded-lg border border-cyan-800/40">
                  {machines} Machines
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="200"
                step="5"
                value={machines}
                onChange={(e) => setMachines(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-2 font-mono">
                <span>5 (Small Plant)</span>
                <span>50 (Mid Auto OEM)</span>
                <span>200 (Large Complex)</span>
              </div>
            </div>

            {/* Control 2: Downtime Cost Per Hour */}
            <div className="bg-slate-950/60 border border-slate-800/80 rounded-2xl p-5">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-bold text-slate-300 flex items-center gap-2">
                  <span>Hourly Cost of Unplanned Downtime (₹)</span>
                </label>
                <span className="text-cyan-400 font-mono font-bold text-lg bg-cyan-950/60 px-3 py-1 rounded-lg border border-cyan-800/40">
                  ₹{downtimeCost.toLocaleString("en-IN")}/hr
                </span>
              </div>
              <input
                type="range"
                min="10000"
                max="250000"
                step="5000"
                value={downtimeCost}
                onChange={(e) => setDowntimeCost(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-2 font-mono">
                <span>₹10,000 (Standard Mill)</span>
                <span>₹50,000 (Auto Parts)</span>
                <span>₹2,50,000 (Pharma/Steel)</span>
              </div>
            </div>

            {/* Control 3: Unplanned Hours / Year */}
            <div className="bg-slate-950/60 border border-slate-800/80 rounded-2xl p-5">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-bold text-slate-300 flex items-center gap-2">
                  <span>Annual Unplanned Downtime Hours</span>
                </label>
                <span className="text-cyan-400 font-mono font-bold text-lg bg-cyan-950/60 px-3 py-1 rounded-lg border border-cyan-800/40">
                  {downtimeHours} Hours/Yr
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="300"
                step="10"
                value={downtimeHours}
                onChange={(e) => setDowntimeHours(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-2 font-mono">
                <span>20 hrs (Low)</span>
                <span>120 hrs (Industry Avg)</span>
                <span>300 hrs (High Risk)</span>
              </div>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-700/80 rounded-3xl p-6 md:p-8 space-y-6 shadow-xl relative">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Financial Impact Comparison</span>
              <h4 className="text-xl font-bold text-white mt-1">Annual Plant Bottom-Line</h4>
            </div>

            <div className="space-y-4">
              {/* Without FactoryVibe */}
              <div className="flex justify-between items-center p-4 rounded-2xl bg-red-950/20 border border-red-900/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-red-400 uppercase tracking-wider block">Current Breakdown Loss</span>
                    <span className="text-slate-300 text-xs">Without Predictive Monitoring</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xl md:text-2xl font-black text-red-400 font-mono">
                    ₹{(totalDowntimeLoss / 100000).toFixed(2)}L
                  </span>
                  <span className="text-xs text-slate-500 block">per year</span>
                </div>
              </div>

              {/* With FactoryVibe */}
              <div className="flex justify-between items-center p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">Prevented Production Loss</span>
                    <span className="text-slate-300 text-xs">85% Fault Prevention Rate</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xl md:text-2xl font-black text-emerald-400 font-mono">
                    ₹{(savedDowntimeLoss / 100000).toFixed(2)}L
                  </span>
                  <span className="text-xs text-emerald-400/80 block font-bold">Saved/Yr</span>
                </div>
              </div>
            </div>

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">FactoryVibe Annual Cost</span>
                <span className="text-lg md:text-xl font-black text-white font-mono">
                  ₹{(totalFactoryVibeInvestment / 100000).toFixed(2)}L
                </span>
                <span className="text-xs text-slate-500 block mt-1">({machines} Pods @ ₹25k/yr)</span>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Full Payback Period</span>
                <span className="text-lg md:text-xl font-black text-cyan-400 font-mono">
                  {paybackDays} Days
                </span>
                <span className="text-xs text-slate-500 block mt-1">Capital Recovered</span>
              </div>
            </div>

            {/* Net Value Hero Pill */}
            <div className="bg-gradient-to-r from-cyan-950 via-blue-950 to-cyan-950 border border-cyan-500/40 rounded-2xl p-4 flex justify-between items-center shadow-lg">
              <div>
                <span className="text-xs font-extrabold text-cyan-300 uppercase tracking-widest block">Net Plant Profit Added</span>
                <span className="text-xs text-slate-400">After paying FactoryVibe subscription</span>
              </div>
              <div className="text-right">
                <span className="text-2xl font-black text-cyan-300 font-mono">
                  +₹{(netAnnualSavings / 100000).toFixed(2)} Lakhs
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
