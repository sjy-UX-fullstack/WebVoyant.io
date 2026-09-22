"use client";

import React, { useState, useEffect } from "react";
import { Activity, AlertTriangle, ShieldCheck, Cpu, Zap, Radio, RefreshCw, FileText } from "lucide-react";

type MachineState = "nominal" | "bearing_fault" | "thermal_overheat";

export function SensorSimulator() {
  const [state, setState] = useState<MachineState>("nominal");
  const [bars, setBars] = useState<number[]>([]);
  const [logs, setLogs] = useState<{ id: string; time: string; level: string; msg: string }[]>([]);

  // Generate real-time frequency spectrum bars
  useEffect(() => {
    const interval = setInterval(() => {
      const newBars = Array.from({ length: 32 }, (_, i) => {
        if (state === "nominal") {
          // Low steady frequencies, no high-pitch harmonic spikes
          return Math.floor(Math.sin(i * 0.5) * 15 + Math.random() * 20 + 15);
        } else if (state === "bearing_fault") {
          // Micro chatter high-frequency acoustic spikes around index 20-28
          if (i >= 20 && i <= 26) {
            return Math.floor(Math.random() * 40 + 55);
          }
          return Math.floor(Math.random() * 25 + 20);
        } else {
          // Thermal overheat - broad high-energy vibration across spectrum
          return Math.floor(Math.random() * 50 + 40);
        }
      });
      setBars(newBars);
    }, 120);

    return () => clearInterval(interval);
  }, [state]);

  // Generate live AI agent diagnostics
  useEffect(() => {
    const timestamp = new Date().toLocaleTimeString();
    if (state === "nominal") {
      setLogs([
        { id: "1", time: timestamp, level: "INFO", msg: "MEMS Acoustic Array: Signal frequency nominal (40Hz - 2.1kHz)." },
        { id: "2", time: timestamp, level: "INFO", msg: "FLIR Thermal: Spindle temp baseline 38.4°C." },
        { id: "3", time: timestamp, level: "OK", msg: "NVIDIA Jetson Edge Inference: Machine Health 98.4%. Zero anomalies." },
      ]);
    } else if (state === "bearing_fault") {
      setLogs([
        { id: "1", time: timestamp, level: "WARN", msg: "Ultrasonic Anomaly Detected: Micro-chatter spike at 4.2kHz (Magnitude +14dB)." },
        { id: "2", time: timestamp, level: "AI_AGENT", msg: "DeepSeek Edge Agent: Diagnosed early race-way pitting in Spindle Bearing #3." },
        { id: "3", time: timestamp, level: "ACTION", msg: "Auto Work-Order Generated: Scheduled replacement in 72h window. Part SKU #SKF-6204." },
      ]);
    } else {
      setLogs([
        { id: "1", time: timestamp, level: "CRITICAL", msg: "Thermal Overheat Triggered: Motor housing temperature reached 74.8°C (+28°C baseline)." },
        { id: "2", time: timestamp, level: "CRITICAL", msg: "Vibration FFT: Severe 3-axis resonance misalignment detected." },
        { id: "3", time: timestamp, level: "ACTION", msg: "Emergency Relay Signal Sent: Recommended immediate automatic shutdown sequence." },
      ]);
    }
  }, [state]);

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
      {/* Visual Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-800 pb-6 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Activity className="w-3.5 h-3.5 animate-pulse text-cyan-400" /> Interactive Edge AI Hardware Simulator
          </div>
          <h3 className="text-2xl font-black text-white">
            Live Telemetry & Acoustic Waveform Engine
          </h3>
          <p className="text-slate-400 text-xs mt-1">
            Simulate physical machine health states and observe real-time local Jetson AI inference.
          </p>
        </div>

        {/* State Toggle Buttons */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setState("nominal")}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 border ${
              state === "nominal"
                ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/50 shadow-lg shadow-emerald-950"
                : "bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-800"
            }`}
          >
            <ShieldCheck className="w-4 h-4" /> 1. Nominal (98%)
          </button>

          <button
            onClick={() => setState("bearing_fault")}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 border ${
              state === "bearing_fault"
                ? "bg-amber-500/20 text-amber-400 border-amber-500/50 shadow-lg shadow-amber-950"
                : "bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-800"
            }`}
          >
            <AlertTriangle className="w-4 h-4" /> 2. Bearing Fault
          </button>

          <button
            onClick={() => setState("thermal_overheat")}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 border ${
              state === "thermal_overheat"
                ? "bg-red-500/20 text-red-400 border-red-500/50 shadow-lg shadow-red-950"
                : "bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-800"
            }`}
          >
            <Zap className="w-4 h-4" /> 3. Thermal Overheat
          </button>
        </div>
      </div>

      {/* Visual Simulation Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Acoustic Spectrum Canvas Visualizer */}
        <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-2xl p-5 relative flex flex-col justify-between">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <Radio className="w-4 h-4 text-cyan-400 animate-pulse" /> Live Acoustic Frequency Spectrum (FFT 20Hz - 100kHz)
            </span>
            <span className="text-xs font-mono font-bold text-slate-500 bg-slate-950 px-2 py-1 rounded border border-slate-800">
              Sampling Rate: 192kHz
            </span>
          </div>

          {/* Bar Spectrum Chart */}
          <div className="h-44 flex items-end justify-between gap-1.5 px-2 bg-slate-950 rounded-xl border border-slate-800/80 p-4">
            {bars.map((height, idx) => {
              let color = "bg-cyan-500";
              if (state === "bearing_fault" && idx >= 20 && idx <= 26) {
                color = "bg-amber-400 animate-pulse";
              } else if (state === "thermal_overheat") {
                color = "bg-red-500 animate-pulse";
              }
              return (
                <div
                  key={idx}
                  className={`w-full ${color} rounded-t transition-all duration-100`}
                  style={{ height: `${height}%` }}
                />
              );
            })}
          </div>

          <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-2 px-1">
            <span>20 Hz</span>
            <span>1 kHz</span>
            <span>4.2 kHz (Bearing Peak)</span>
            <span>20 kHz</span>
            <span>100 kHz (Ultrasonic)</span>
          </div>
        </div>

        {/* Live Thermal & Telemetry Status Card */}
        <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between space-y-4">
          <div className="flex justify-between items-center border-b border-slate-800 pb-3">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-400" /> Jetson Orin Edge Telemetry
            </span>
            <span
              className={`text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border ${
                state === "nominal"
                  ? "bg-emerald-950 text-emerald-400 border-emerald-800"
                  : state === "bearing_fault"
                  ? "bg-amber-950 text-amber-400 border-amber-800"
                  : "bg-red-950 text-red-400 border-red-800"
              }`}
            >
              {state === "nominal" ? "HEALTHY" : state === "bearing_fault" ? "WARNING" : "CRITICAL"}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-3">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Thermal Temperature</span>
              <span
                className={`text-xl font-mono font-black ${
                  state === "thermal_overheat" ? "text-red-400" : "text-cyan-400"
                }`}
              >
                {state === "nominal" ? "38.4°C" : state === "bearing_fault" ? "44.1°C" : "74.8°C"}
              </span>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-3">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">3-Axis Vibration</span>
              <span
                className={`text-xl font-mono font-black ${
                  state === "bearing_fault" ? "text-amber-400" : state === "thermal_overheat" ? "text-red-400" : "text-emerald-400"
                }`}
              >
                {state === "nominal" ? "0.12 g" : state === "bearing_fault" ? "0.89 g" : "2.45 g"}
              </span>
            </div>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs">
            <span className="text-slate-400 font-bold block mb-1">Local Model Latency:</span>
            <div className="flex justify-between font-mono text-slate-300">
              <span>FFT Analysis: 4.2ms</span>
              <span>Local Model: 12ms</span>
            </div>
          </div>
        </div>
      </div>

      {/* AI Agent Console Logs */}
      <div className="mt-6 bg-slate-950 border border-slate-800 rounded-2xl p-4 font-mono text-xs">
        <div className="flex justify-between items-center border-b border-slate-800/80 pb-2 mb-3">
          <span className="text-slate-400 font-bold uppercase tracking-wider text-[11px] flex items-center gap-2">
            <FileText className="w-3.5 h-3.5 text-cyan-400" /> Agentic Maintenance AI Console Output
          </span>
          <span className="text-cyan-500 text-[10px]">Model: DeepSeek-R1-Edge 8B</span>
        </div>

        <div className="space-y-2">
          {logs.map((log) => (
            <div key={log.id} className="flex items-start gap-3">
              <span className="text-slate-600 text-[10px] whitespace-nowrap">{log.time}</span>
              <span
                className={`px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                  log.level === "OK" || log.level === "INFO"
                    ? "bg-slate-800 text-slate-300"
                    : log.level === "WARN"
                    ? "bg-amber-950 text-amber-300 border border-amber-800"
                    : log.level === "CRITICAL"
                    ? "bg-red-950 text-red-400 border border-red-800 animate-pulse"
                    : "bg-cyan-950 text-cyan-300 border border-cyan-800"
                }`}
              >
                {log.level}
              </span>
              <span className="text-slate-300 leading-relaxed">{log.msg}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
