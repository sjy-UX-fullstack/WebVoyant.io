import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SensorSimulator } from "@/components/factoryvibe/sensor-simulator";
import { Cpu, Radio, ShieldCheck, Zap, Layers, Lock, Terminal, Activity, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Hardware & AI Architecture — FactoryVibe AI",
  description: "Exploded hardware blueprint, 3-layer Edge AI pipeline, and live interactive acoustic waveform simulator.",
};

export default function FactoryVibeSolutionPage() {
  return (
    <div className="space-y-16">
      {/* Hero Header */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 md:p-12 relative overflow-hidden backdrop-blur-xl">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Cpu className="w-4 h-4" /> Technical Deep Dive & System Architecture
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">
            Hardware Sensor Pod & Edge AI Pipeline
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Combining multi-spectral physics sensing with local NVIDIA Jetson Orin compute to detect early mechanical micro-fractures completely offline.
          </p>
        </div>
      </div>

      {/* Exploded View Blueprint Schematic Section */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-800 pb-4">
          <div>
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block">Hardware Schematic</span>
            <h2 className="text-2xl font-black text-white mt-1">Exploded View: EAIS-01 Industrial Sensor Pod</h2>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-2 text-xs font-mono text-slate-300">
            Enclosure Rating: <span className="text-cyan-400 font-bold">IP67 Sealed Casing</span>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-950">
          <Image
            src="/factoryvibe/hardware_blueprint.jpg"
            alt="FactoryVibe Exploded Hardware Blueprint Schematic"
            width={1200}
            height={675}
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 space-y-2">
            <span className="text-xs font-bold text-cyan-400 font-mono block">Component A</span>
            <h3 className="text-base font-bold text-white">NVIDIA Jetson Orin Nano SOM</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              40 TOPS AI compute module executing real-time FFT waveform decomposition and local neural network inference at &lt;15ms latency.
            </p>
          </div>

          <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 space-y-2">
            <span className="text-xs font-bold text-teal-400 font-mono block">Component B</span>
            <h3 className="text-base font-bold text-white">6-Element MEMS Ultrasonic Array</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Wide-band acoustic array capturing sound frequencies up to 100kHz—isolating bearing race micro-cracks from background factory noise.
            </p>
          </div>

          <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 space-y-2">
            <span className="text-xs font-bold text-blue-400 font-mono block">Component C & E</span>
            <h3 className="text-base font-bold text-white">FLIR Thermal Core & Magnetic Mount</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Radiometric infrared thermal camera coupled with a 80kg pull-force neodymium magnetic base for 30-second non-invasive mounting.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Sensor & AI Simulator Component */}
      <section className="space-y-4">
        <div className="border-b border-slate-800 pb-4">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block">Interactive Technology Demo</span>
          <h2 className="text-2xl font-black text-white mt-1">Experience Live Telemetry & Waveform Inference</h2>
        </div>
        <SensorSimulator />
      </section>

      {/* 3-Layer Software & AI Intelligence Pipeline */}
      <section className="space-y-8 bg-slate-900/60 border border-slate-800 rounded-3xl p-8 md:p-12">
        <div className="max-w-3xl">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-2">Software Architecture</span>
          <h2 className="text-3xl font-black text-white">
            The 3-Layer Edge AI Data Pipeline
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            How raw acoustic wave signals transform into automated factory maintenance work orders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 relative flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950 px-2.5 py-1 rounded border border-cyan-800">
                Layer 1: Physics Processing
              </span>
              <h3 className="text-lg font-bold text-white">FFT Waveform & Spectral Decomposition</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Processes raw 192kHz audio streams into STFT (Short-Time Fourier Transform) spectrograms and Mel-frequency coefficients locally.
              </p>
            </div>
            <div className="pt-4 text-[11px] font-mono text-slate-500 border-t border-slate-900">
              Tech: C++ CUDA / TensorRT FFT Acceleration
            </div>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 relative flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-teal-400 bg-teal-950 px-2.5 py-1 rounded border border-teal-800">
                Layer 2: Anomaly Detection
              </span>
              <h3 className="text-lg font-bold text-white">TinyML Convolutional Neural Network</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Lightweight micro-CNN model trained on industrial vibration datasets to detect early race-way friction, gear wear, and imbalance.
              </p>
            </div>
            <div className="pt-4 text-[11px] font-mono text-slate-500 border-t border-slate-900">
              Model Size: &lt; 14MB | Latency: 12ms
            </div>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 relative flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-blue-400 bg-blue-950 px-2.5 py-1 rounded border border-blue-800">
                Layer 3: Agentic Maintenance
              </span>
              <h3 className="text-lg font-bold text-white">Local Generative Diagnostic Agent</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Synthesizes thermal, acoustic, and vibration anomalies into plain-language technician work orders with specific spare part SKU numbers.
              </p>
            </div>
            <div className="pt-4 text-[11px] font-mono text-slate-500 border-t border-slate-900">
              Agent: Quantized DeepSeek-R1-Edge (8B)
            </div>
          </div>
        </div>
      </section>

      {/* Air-Gapped Security Blueprint */}
      <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 md:p-12 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
            <Lock className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block">Enterprise Trust Guarantee</span>
            <h3 className="text-2xl font-bold text-white">100% Air-Gapped Security Architecture</h3>
          </div>
        </div>

        <p className="text-slate-300 text-xs md:text-sm leading-relaxed max-w-4xl">
          FactoryVibe pods process all audio, thermal, and sensor data locally within the machine-attached Jetson chip. No raw audio or operational telemetry leaves the factory floor. Only encrypted, light text alerts are transmitted via local Modbus/MQTT or optional local Wi-Fi.
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <Link
            href="/factoryvibe/hardware"
            className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-6 py-3 rounded-xl font-black text-xs uppercase tracking-wider transition flex items-center gap-2"
          >
            Review IoT Sourcing & BOM <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
