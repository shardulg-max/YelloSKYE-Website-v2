import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Layers, 
  Clock, 
  Zap, 
  Shield, 
  Ruler, 
  Database,
  ArrowRight,
  X,
  Check, Twitter, Linkedin, Youtube, Instagram,
  Cpu, MapPin, Globe, Mail,
  Camera,
  CheckCircle2,
  BarChart3,
  ShieldCheck,
  Activity,
  ChevronDown,  
  Eye, 
  Map as MapIcon, 
  Mountain, 
  Target, 
  Hexagon, 
  PenTool,
  List,
  Box,
  SplitSquareHorizontal,
  Download,
  Search
} from 'lucide-react';

// ─── DATA ─────────────────────────────────────────────────────────────────────

const WORKFLOW_STEPS = [
  {
    num: 1,
    title: "Capture Reality",
    desc: "Drone surveys, 360° captures, scans, and sensors continuously record on-site conditions — without manual effort.",
    icon: <Camera size={24} />
  },
  {
    num: 2,
    title: "Centralize in DEX",
    desc: "All visuals, plans, BIM models, and timelines converge into one unified intelligence layer.",
    icon: <Database size={24} />
  },
  {
    num: 3,
    title: "Analyze & Verify",
    desc: "Progress, quantities, deviations, and issues are verified visually — not assumed from reports.",
    icon: <BarChart3 size={24} />
  },
  {
    num: 4,
    title: "Decide with Proof",
    desc: "Teams approve, bill, resolve, and plan using time-linked visual evidence — faster and with confidence.",
    icon: <ShieldCheck size={24} />
  }
];

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

export const Platform: React.FC = () => {

  return (
    <div className="bg-white text-black font-sans selection:bg-[#FFF200] selection:text-black overflow-x-hidden">
      
    {/* ═══ Hero Section ═══ */}
    <section className="pt-24 md:pt-32 lg:pt-44 pb-12 lg:pb-20 max-w-[1400px] mx-auto bg-white relative">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", 
             backgroundSize: "80px 80px",
             maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
             WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)"
           }} />
           
      <div className="grid lg:grid-cols-12 gap-6 md:gap-8 lg:gap-12 mb-8 md:mb-12 lg:mb-16 relative z-10 items-end px-4 sm:px-6 lg:px-0">
        
        {/* LEFT COLUMN */}
        <div className="lg:col-span-7 flex flex-col">
          <h1 className="text-[22vw] sm:text-[15vw] md:text-[80px] lg:text-[130px] font-black leading-[0.8] tracking-tighter text-black m-0 p-0">
            DEX.
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-gray-900 tracking-tight mt-4 md:mt-5">
            Ground Truth to your Desktop.
          </h2>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-5 flex flex-col lg:pb-2 mt-2 md:mt-0">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-[1.4] text-gray-600 tracking-tight max-w-xl">
            Transform raw reality capture into indisputable <span className="text-black font-bold">AI-powered intelligence</span>, and command your sites from anywhere.
          </p>
        </div>

      </div>

      {/* BOTTOM VISUAL */}
      <div className="mx-4 sm:mx-6 lg:mx-0 w-[calc(100%-32px)] sm:w-[calc(100%-48px)] lg:w-full aspect-[4/4] sm:aspect-[4/3] md:aspect-[21/9] rounded-[24px] lg:rounded-[32px] overflow-hidden bg-[#0A0A0A] relative shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-gray-200 group flex items-center justify-center">
        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
           <img 
             src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000" 
             alt="DEX Aerial Survey Snippet" 
             className="w-[150%] md:w-[80%] h-[150%] md:h-[120%] object-cover opacity-60 grayscale group-hover:scale-105 transition-transform duration-[20s] ease-out"
             style={{ clipPath: 'polygon(20% 0%, 80% 10%, 100% 70%, 70% 100%, 0% 80%)' }}
           />
           <div className="absolute inset-0 bg-[#FFF200]/5 mix-blend-overlay"></div>
        </div>

        {/* Top Left HUD - Hidden on very small screens, visible on sm and up */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 bg-black/80 backdrop-blur-md border border-white/10 rounded-xl md:rounded-2xl p-3 md:p-5 shadow-2xl z-20 hidden sm:block transform -translate-x-2 group-hover:translate-x-0 transition-transform duration-700">
          <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#FFF200]/20 flex items-center justify-center text-[#FFF200]">
               <Activity size={14} className="md:w-4 md:h-4" />
            </div>
            <div>
              <div className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-gray-400">AI Progress Tracking</div>
              <div className="text-xs md:text-sm font-bold text-white">Zone B • Foundation</div>
            </div>
          </div>
          <div className="w-32 md:w-48 h-1.5 md:h-2 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-[#FFF200] w-[78%] relative">
               <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/50 blur-sm"></div>
            </div>
          </div>
          <div className="flex justify-between mt-2 text-[10px] md:text-xs font-bold">
             <span className="text-gray-400">Status</span>
             <span className="text-[#FFF200]">78% Complete</span>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20 scale-75 md:scale-100">
           <div className="w-24 h-24 md:w-32 md:h-32 border border-[#FFF200]/20 rounded-full relative animate-[spin_10s_linear_infinite]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-2 md:h-3 bg-[#FFF200]/50"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-2 md:h-3 bg-[#FFF200]/50"></div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 md:w-3 h-1 bg-[#FFF200]/50"></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 md:w-3 h-1 bg-[#FFF200]/50"></div>
           </div>
        </div>

        {/* Bottom Right HUD - Mobile optimized layout */}
        <div className="absolute bottom-4 left-4 right-4 md:left-auto md:w-auto md:bottom-8 md:right-8 bg-white text-black border border-gray-200 rounded-xl md:rounded-2xl p-3 md:p-5 shadow-2xl z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-700 flex items-center gap-3 md:gap-4">
           <div className="w-8 h-8 md:w-12 md:h-12 bg-black rounded-lg md:rounded-xl flex items-center justify-center text-[#FFF200] shrink-0">
              <Zap size={16} fill="currentColor" className="md:w-5 md:h-5" />
           </div>
           <div className="flex-1">
              <div className="flex items-center gap-2 mb-0.5">
                 <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                 <div className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-gray-500">Live AI Insight</div>
              </div>
              <div className="text-xs md:text-sm font-bold text-black leading-snug">
                 Slab deviation detected. <span className="text-gray-500 font-medium">Auto-logged.</span>
              </div>
           </div>
        </div>

      </div>
    </section>

    {/* ════════════════════════════════════════
          THE TRUST BAR
      ════════════════════════════════════════ */}
      <section className="bg-white py-8 lg:py-12 relative z-10 overflow-hidden border-b border-gray-100/50">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" 
             style={{ 
               backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", 
               backgroundSize: "80px 80px",
               maskImage: "radial-gradient(ellipse at center, black 10%, transparent 80%)",
               WebkitMaskImage: "radial-gradient(ellipse at center, black 10%, transparent 80%)"
             }} />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 md:gap-y-0 divide-x-0 md:divide-x divide-gray-200/60">
             {[
               { value: "5%", sub: "Savings on Total Cost" },
               { value: "10X", sub: "Faster Reporting" },
               { value: "40-50%", sub: "Faster Issue Closure" },
               { value: "70-80%", sub: "Fewer Site Visits" },
             ].map((spec, i) => (
               <div key={i} className="flex flex-col items-center justify-center text-center px-2 lg:px-4">
                 <div className="text-3xl md:text-4xl lg:text-5xl font-black text-black mb-1 md:mb-2 tracking-tighter">
                   {spec.value}
                 </div>
                 <div className="text-[9px] md:text-[10px] lg:text-xs text-gray-500 font-bold uppercase tracking-widest max-w-[140px]">
                   {spec.sub}
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* ═══ CHAOS VS CLARITY: THE LOGICAL PIVOT ═══ */}
      <section className="relative py-16 md:py-24 bg-white overflow-hidden font-sans border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-[clamp(28px,6vw,56px)] font-black tracking-tighter leading-[1.1] text-black mb-4 md:mb-6">
              Stop managing projects from the rearview mirror. <br className="hidden md:block" />
              <span className="text-black">See the absolute truth </span>
              <span className="relative inline-block mt-1 md:mt-0">
                <span className="absolute inset-y-1 -inset-x-2 bg-[#FFF200] rounded-lg"></span>
                <span className="relative px-2">with DEX.</span>
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-500 font-medium max-w-2xl mx-auto">
              DEX gives you an AI-powered unified visual record, turning fragmented site updates into indisputable proof for faster, zero-guesswork decisions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-stretch">
            {/* THE OLD WAY */}
            <div className="group p-6 sm:p-8 lg:p-14 rounded-[32px] md:rounded-[40px] bg-gray-50 border border-gray-100">
              <div className="flex items-center gap-4 mb-8 md:mb-10">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-red-500 shadow-sm shrink-0">
                  <X size={24} strokeWidth={3} />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-black tracking-tight">The Traditional Way</h3>
                  <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400">Status Quo</p>
                </div>
              </div>

              <ul className="space-y-6 md:space-y-8">
                {[
                  { t: "Fragmented Data", d: "Photos stuck in WhatsApp, spreadsheets, and emails." },
                  { t: "Delayed Reporting", d: "Reports arrive weeks late, making them useless for live decisions." },
                  { t: "Frequent Disputes", d: "Endless arguments over variations and subcontractor billing." },
                  { t: "Expensive Travel", d: "High-level stakeholders wasting hours on routine site visits." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 md:gap-5">
                    <span className="text-red-400 font-black mt-1">✕</span>
                    <div>
                      <h4 className="text-base md:text-lg font-bold text-black leading-none mb-1 md:mb-2">{item.t}</h4>
                      <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* THE DEX WAY */}
            <div className="group p-6 sm:p-8 lg:p-14 rounded-[32px] md:rounded-[40px] bg-black text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFF200] blur-[120px] opacity-10 group-hover:opacity-20 transition-opacity" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8 md:mb-10">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-[#FFF200] flex items-center justify-center text-black shadow-[0_0_20px_rgba(255,242,0,0.4)] shrink-0">
                    <Check size={24} strokeWidth={4} />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-black tracking-tight text-white">DEX Platform</h3>
                    <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#FFF200]">Intelligent Workflow</p>
                  </div>
                </div>

                <ul className="space-y-6 md:space-y-8">
                  {[
                    { t: "Unified Intelligence", d: "Every photo, scan, and BIM model in one time-linked portal." },
                    { t: "Live Decision-Making", d: "Verify site progress in real-time from any device, anywhere." },
                    { t: "Bulletproof Proof", d: "Immutable visual records that eliminate disputes and bad billing." },
                    { t: "80% Remote Oversight", d: "Free up your most expensive talent for high-value tasks." }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 md:gap-5">
                      <span className="text-[#FFF200] font-black mt-1">✓</span>
                      <div>
                        <h4 className="text-base md:text-lg font-bold text-white leading-none mb-1 md:mb-2">{item.t}</h4>
                        <p className="text-sm md:text-base text-gray-400 font-medium leading-relaxed">{item.d}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <button className="mt-8 md:mt-12 w-full py-4 md:py-5 bg-[#FFF200] text-black font-black uppercase text-[10px] md:text-xs tracking-widest rounded-xl md:rounded-2xl flex items-center justify-center gap-3 transition-transform active:scale-95">
                  Experience the Difference <ArrowRight size={16} strokeWidth={3} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ THE INTELLIGENCE INTERFACE: TACTILE PROOF ═══ */}
      <section className="relative py-16 md:py-32 bg-white overflow-hidden font-sans border-t border-gray-100">
        <div className="max-w-[1450px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col mb-12 md:mb-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-gray-50 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-4 md:mb-6 w-fit">
              Executive View
            </div>
            <h2 className="text-[clamp(32px,6vw,64px)] font-black tracking-tighter leading-[1.05] text-black">
              Unified intelligence for <br className="hidden sm:block" />
              <span className="relative inline-block mt-1 sm:mt-0">
                <span className="absolute inset-y-1 -inset-x-2 bg-[#FFF200] rounded-lg"></span>
                <span className="relative px-2">Complex</span>
              </span>
              <span className="text-black"> project </span>
              <span className="relative">environments.</span>
            </h2>
          </div>

          {/* DASHBOARD IMAGE */}
          <div className="relative group mb-8 md:mb-0">
            <div className="relative z-20 rounded-[24px] md:rounded-[48px] border-[4px] md:border-[8px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden bg-gray-50 aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9]">
              <img 
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1800&q=80" 
                className="w-full h-full object-cover grayscale opacity-80" 
                alt="DEX Dashboard Base" 
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* Desktop Floating Cards (Hidden on mobile, repositioned below) */}
            <div className="absolute -top-12 -left-6 z-30 w-72 p-6 rounded-3xl bg-black text-white shadow-2xl border border-white/10 hidden xl:block">
               {/* Content identical to below */}
            </div>
          </div>

          {/* MOBILE ONLY: Stacked Intelligence Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xl:hidden mb-12">
            {/* Card 1: AI Progress */}
            <div className="p-5 md:p-6 rounded-2xl md:rounded-3xl bg-black text-white shadow-lg border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <Activity size={18} className="text-[#FFF200]" />
                <span className="text-[10px] font-black uppercase tracking-widest text-[#FFF200]">AI Extraction</span>
              </div>
              <p className="text-xs font-medium text-gray-400 mb-1">Slab Casting Progress</p>
              <div className="text-3xl font-black mb-2">84.2%</div>
              <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-[#FFF200] w-[84%]" />
              </div>
            </div>

            {/* Card 2: Risk Detection */}
            <div className="p-5 md:p-6 rounded-2xl md:rounded-3xl bg-white border border-gray-100 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <ShieldCheck size={18} className="text-red-500" />
                <span className="text-[10px] font-black uppercase tracking-widest text-red-500">Auto-Deviation Alert</span>
              </div>
              <h4 className="text-base font-black text-black leading-tight mb-2">Column Alignment Drift</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Millimeter-level deviation detected in Sector 4. Immediate review suggested before concrete pour.
              </p>
            </div>
          </div>
          
          {/* FEATURE SUB-GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 md:mt-32 pt-8 md:pt-16 border-t border-gray-100 md:border-t-0">
            <div>
              <h4 className="text-lg md:text-xl font-black text-black mb-2 md:mb-4">Millimeter Accuracy</h4>
              <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed">
                DEX uses drone telemetry and laser scans to create a digital twin that is geometrically identical to the physical site.
              </p>
            </div>
            <div>
              <h4 className="text-lg md:text-xl font-black text-black mb-2 md:mb-4">Indisputable Proof</h4>
              <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed">
                Time-linked visual data for every invoice. If a subcontractor says they are finished, DEX shows you if they are actually done.
              </p>
            </div>
            <div className="sm:col-span-2 md:col-span-1">
              <h4 className="text-lg md:text-xl font-black text-black mb-2 md:mb-4">Executive Sync</h4>
              <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed">
                One dashboard for the site manager, architect, and developer. Everyone looking at the same reality at the same time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STAKEHOLDER ROI: THE TARGETED PERSUASION ═══ */}
      <section className="relative py-16 md:py-32 bg-gray-50 overflow-hidden font-sans border-t border-gray-200/50">
        <div className="max-w-[1450px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 md:mb-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-white text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-4 md:mb-6 shadow-sm">
              Universal Utility
            </div>
            <h2 className="text-[clamp(32px,6vw,64px)] font-black tracking-tighter leading-[1.05] text-black">
              One platform. <br className="hidden sm:block" />
              <span className="text-black">Total clarity for </span>
              <span className="relative inline-block mt-1 sm:mt-0">
                <span className="absolute inset-y-1 -inset-x-2 bg-[#FFF200] rounded-lg shadow-sm"></span>
                <span className="relative px-1 text-black">every team.</span>
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                role: "The Developer / Owner",
                icon: <Shield size={24} />,
                impact: "Capital Protection",
                benefit: "Reduce interest costs through faster cycles and prevent expensive rework before concrete is poured.",
                stat: "5% Savings on Total Cost",
                tags: ["Portfolio Oversight", "ROI Validation"]
              },
              {
                role: "The Project Manager",
                icon: <Zap size={24} />,
                impact: "Execution Speed",
                benefit: "Automate progress reporting and billing verification. Manage 3x more sites without increasing headcount.",
                stat: "10x Faster Reporting",
                tags: ["Progress Tracking", "Billing Proof"]
              },
              {
                role: "The Architect / Design Lead",
                icon: <Layers size={24} />,
                impact: "Quality Assurance",
                benefit: "Instantly overlay CAD/BIM models on live site photos to identify deviations in seconds, not weeks.",
                stat: "30% Less Rework",
                tags: ["BIM Validation", "Snag Detection"]
              }
            ].map((persona, i) => (
              <div key={i} className="flex flex-col h-full p-6 sm:p-8 lg:p-10 rounded-[32px] md:rounded-[40px] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-start mb-8 md:mb-12">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gray-50 flex items-center justify-center text-black">
                    {persona.icon}
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Key Impact</p>
                    <p className="text-xs md:text-sm font-bold text-black">{persona.impact}</p>
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-black tracking-tight text-black mb-3 md:mb-4">
                  {persona.role}
                </h3>
                
                <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed mb-8 md:mb-10 flex-grow">
                  {persona.benefit}
                </p>

                <div className="pt-6 md:pt-8 border-t border-gray-50">
                  <div className="flex items-center gap-3 mb-4 md:mb-6">
                    <span className="text-2xl md:text-3xl font-black text-black tracking-tighter">{persona.stat}</span>
                    <div className="h-1 flex-grow bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#FFF200] w-2/3" />
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {persona.tags.map((tag, j) => (
                      <span key={j} className="px-2 md:px-3 py-1 rounded-md md:rounded-lg bg-gray-50 text-[8px] md:text-[9px] font-black uppercase tracking-widest text-gray-400 border border-gray-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURE BENTO: THE INTELLIGENCE MODULES ═══ */}
      <section className="relative py-16 md:py-32 bg-white overflow-hidden font-sans border-t border-gray-100">
        <div className="max-w-[1450px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mb-12 md:mb-20">
            <h2 className="text-[clamp(32px,6vw,64px)] font-black tracking-tighter leading-[1.05] text-black">
              Engineering-grade tools <br className="hidden sm:block" />
              <span className="text-black">for </span>
              <span className="relative inline-block mt-1 sm:mt-0">
                <span className="absolute inset-y-1 -inset-x-2 bg-[#FFF200] rounded-lg shadow-sm"></span>
                <span className="relative px-1 text-black">indisputable truth.</span>
              </span>
            </h2>
          </div>

          {/* Switched to flex-col on mobile, grid on desktop */}
          <div className="flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-6 lg:auto-rows-[350px]">
            
            {/* FEATURE 1: 4D VISUAL TIMELINE */}
            <div className="md:col-span-2 md:row-span-2 min-h-[350px] md:min-h-0 relative rounded-[32px] md:rounded-[40px] bg-black overflow-hidden border border-white/10 shadow-lg">
              <div className="absolute inset-0 opacity-40">
                 <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070" className="w-full h-full object-cover grayscale" alt="Timeline" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent md:from-black md:via-black/20" />
              
              <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 z-20">
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-[#FFF200] flex items-center justify-center text-black shrink-0">
                    <Clock size={20} className="md:w-6 md:h-6" strokeWidth={2.5} />
                  </div>
                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#FFF200]">Module 01: 4D Sync</span>
                </div>
                <h3 className="text-2xl md:text-4xl font-black text-white tracking-tighter mb-2 md:mb-4">Visual Timeline Intelligence</h3>
                <p className="text-sm md:text-base text-gray-300 md:text-gray-400 font-medium max-w-md leading-relaxed">
                  Scrub through months of site evolution with a single slider. Every data point is georeferenced and time-linked.
                </p>
              </div>
            </div>

            {/* FEATURE 2: REMOTE MEASUREMENTS */}
            <div className="p-6 md:p-8 lg:p-10 rounded-[32px] md:rounded-[40px] bg-gray-50 border border-gray-100 flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-white shadow-sm border border-gray-200 flex items-center justify-center mb-6 md:mb-8">
                  <Ruler size={18} className="md:w-[22px] md:h-[22px] text-black" />
                </div>
                <h3 className="text-xl md:text-2xl font-black tracking-tight text-black mb-2 md:mb-3">Precision <br className="hidden md:block"/>Surveying</h3>
                <p className="text-sm text-gray-500 font-medium leading-relaxed">
                  Measure distances, volumes, and elevations directly from the portal with sub-millimeter accuracy.
                </p>
              </div>
              <div className="pt-4 md:pt-6 mt-4 border-t border-gray-200/50 flex justify-between items-center">
                 <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-gray-400">Error Rate &lt; 1%</span>
              </div>
            </div>

            {/* FEATURE 3: BIM OVERLAY */}
            <div className="p-6 md:p-8 lg:p-10 rounded-[32px] md:rounded-[40px] bg-black text-white relative shadow-sm min-h-[250px] md:min-h-0">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#FFF200 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-[#FFF200] flex items-center justify-center mb-6 md:mb-8 shadow-[0_0_20px_rgba(255,242,0,0.3)]">
                    <Layers size={18} className="md:w-[22px] md:h-[22px] text-black" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-black tracking-tight mb-2 md:mb-3">Blueprints on <br className="hidden md:block"/>Reality</h3>
                  <p className="text-sm text-gray-400 font-medium leading-relaxed">
                    Instantly layer CAD and BIM models on top of live site scans to spot deviations.
                  </p>
                </div>
                <div className="flex justify-start md:justify-end mt-4">
                   <div className="px-3 py-1 rounded-md md:rounded-lg border border-white/10 text-[8px] md:text-[9px] font-mono text-[#FFF200] uppercase tracking-widest bg-white/5 w-fit">
                     BIM Level 300+
                   </div>
                </div>
              </div>
            </div>

            {/* FEATURE 4: AUTO-REPORTING */}
            <div className="md:col-span-3 p-6 md:p-8 lg:p-12 rounded-[32px] md:rounded-[40px] bg-gray-50 border border-gray-100 flex flex-col md:flex-row gap-8 md:gap-10 items-center shadow-sm">
              <div className="flex-1 w-full">
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-2xl bg-white shadow-sm border border-gray-200 flex items-center justify-center mb-6 md:mb-8">
                  <Database size={20} className="md:w-[26px] md:h-[26px] text-black" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black tracking-tight text-black mb-3 md:mb-4">Autonomous Reporting</h3>
                <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed max-w-lg">
                  Stop wasting days on manual progress reports. DEX auto-generates visual, audit-ready PDF documentation for every stakeholder meeting and invoice cycle.
                </p>
              </div>
              
              {/* Report Mockup Visual */}
              <div className="w-full md:w-72 bg-white rounded-xl md:rounded-2xl border border-gray-200 p-5 md:p-6 shadow-sm">
                <div className="flex items-center justify-between mb-5 md:mb-6">
                   <div className="h-2 w-16 bg-gray-100 rounded" />
                   <div className="h-2 w-8 bg-[#FFF200] rounded" />
                </div>
                <div className="space-y-3">
                  {[1, 2].map(i => (
                    <div key={i} className="flex gap-3">
                      <div className="w-8 h-8 rounded bg-gray-50 border border-gray-100 shrink-0" />
                      <div className="flex-1 space-y-2 pt-1">
                        <div className="h-1.5 w-full bg-gray-100 rounded" />
                        <div className="h-1.5 w-2/3 bg-gray-50 rounded" />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 md:mt-6 pt-4 border-t border-gray-100 flex justify-center">
                  <div className="h-8 md:h-10 w-full rounded bg-black flex items-center justify-center">
                    <span className="text-[8px] md:text-[9px] font-black text-[#FFF200] uppercase tracking-widest">Generate Report</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ IMPLEMENTATION: THE FRICTIONLESS PATH ═══ */}
      <section className="relative py-16 md:py-32 bg-white overflow-hidden font-sans border-t border-gray-100">
        <div className="max-w-[1450px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-12 md:mb-24 gap-4 md:gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-white text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-4 md:mb-6 shadow-sm">
                Deployment Protocol
              </div>
              <h2 className="text-[clamp(32px,6vw,64px)] font-black tracking-tighter leading-[1.05] text-black">
                From site reality to <br className="hidden sm:block" />
                <span className="relative inline-block mt-1 sm:mt-0">
                  <span className="absolute inset-y-1 -inset-x-2 bg-[#FFF200] rounded-lg shadow-sm"></span>
                  <span className="relative px-1 text-black">decision clarity.</span>
                </span>
              </h2>
            </div>
            <p className="text-base md:text-lg text-gray-500 font-medium max-w-sm lg:text-right leading-relaxed">
              We don't just give you a login. We handle the capture, the processing, and the intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {WORKFLOW_STEPS.map((item, i) => (
              <div key={i} className="relative flex flex-col p-6 sm:p-8 lg:p-10 rounded-[24px] md:rounded-[40px] bg-white border border-gray-100 shadow-sm">
                <div className="flex justify-between items-start mb-8 md:mb-12">
                  <div className="text-3xl md:text-4xl font-black tracking-tighter text-gray-200">
                    0{item.num}
                  </div>
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gray-50 flex items-center justify-center text-black">
                    {item.icon}
                  </div>
                </div>
                
                <h3 className="text-lg md:text-xl font-black text-black mb-2 md:mb-4 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 font-medium leading-relaxed">
                  {item.desc}
                </p>

                {/* Connecting Line (Desktop Only) */}
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gray-200 z-20" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 md:mt-20 p-6 sm:p-8 md:p-10 rounded-[24px] md:rounded-[32px] bg-black text-white flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 border border-white/10 relative overflow-hidden text-center md:text-left">
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFF200] blur-[100px] opacity-10 pointer-events-none" />
             <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 relative z-10">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-[#FFF200] flex items-center justify-center text-black shadow-lg shadow-[#FFF200]/20 shrink-0">
                   <Zap size={24} className="md:w-8 md:h-8" fill="currentColor" />
                </div>
                <div>
                   <h4 className="text-lg md:text-xl font-black tracking-tight mb-1">Ready to digitize your site?</h4>
                   <p className="text-gray-400 text-xs md:text-sm font-medium">Average setup time is less than 48 hours.</p>
                </div>
             </div>
             <button className="w-full md:w-auto px-6 md:px-8 py-4 bg-white text-black font-black uppercase text-[10px] md:text-[11px] tracking-[0.2em] rounded-xl hover:bg-[#FFF200] transition-colors whitespace-nowrap relative z-10">
                Get Started Now
             </button>
          </div>
        </div>
      </section>

      {/* ====================== THE EXECUTIVE GATEWAY (FORM) ====================== */}
      <section className="bg-white py-16 md:py-24 lg:py-32 relative overflow-hidden font-sans border-t border-gray-100">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ 
               backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", 
               backgroundSize: "80px 80px"
             }} />
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-6 md:mb-8">
                  Get Started
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-6xl font-black tracking-tighter text-black mb-6 md:mb-8 leading-[1.1]">
                  Ready to gain <br className="hidden sm:block" />
                  <span className="relative inline-block mt-1 sm:mt-2">
                    <span className="absolute inset-y-1 -inset-x-2 bg-[#FFF200] rounded-lg shadow-sm transform -skew-x-2"></span>
                    <span className="relative text-black">absolute clarity?</span>
                  </span>
                </h3>
                <p className="text-base md:text-xl text-gray-500 font-medium leading-relaxed mb-8 md:mb-10 max-w-lg mx-auto lg:mx-0">
                  Stop debating interpretations. Request a custom walkthrough of your site and see how DEX delivers boardroom-ready answers.
                </p>
                
                <ul className="space-y-4 max-w-sm mx-auto lg:mx-0 text-left">
                  {[
                    '15-minute tailored walkthrough', 
                    'Zero commitment or hardware', 
                    'Custom strategy for your goals'
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-black font-black uppercase text-[10px] md:text-[11px] tracking-[0.1em]">
                      <div className="w-5 h-5 md:w-6 md:h-6 bg-black rounded-md md:rounded-lg flex items-center justify-center text-[#FFF200] shadow-md shrink-0">
                        <Check size={12} strokeWidth={4}/>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#0A0A0A] rounded-[32px] md:rounded-[48px] p-6 sm:p-8 lg:p-14 shadow-2xl border border-white/5 relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#FFF200]/10 blur-[100px] rounded-full pointer-events-none" />
                
                <form className="relative z-10 space-y-5 md:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                    <div className="space-y-1.5 md:space-y-2">
                      <label className="text-[9px] md:text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                      <input placeholder="John Doe" className="w-full bg-white/5 border-b border-white/10 rounded-xl px-4 py-3 md:px-5 md:py-4 text-white placeholder:text-gray-700 focus:border-[#FFF200] focus:bg-white/10 outline-none transition-all text-sm md:text-base font-medium" />
                    </div>
                    <div className="space-y-1.5 md:space-y-2">
                      <label className="text-[9px] md:text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Work Email</label>
                      <input placeholder="john@company.com" className="w-full bg-white/5 border-b border-white/10 rounded-xl px-4 py-3 md:px-5 md:py-4 text-white placeholder:text-gray-700 focus:border-[#FFF200] focus:bg-white/10 outline-none transition-all text-sm md:text-base font-medium" />
                    </div>
                  </div>
                  
                  <div className="space-y-1.5 md:space-y-2">
                    <label className="text-[9px] md:text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Company</label>
                    <input placeholder="Ex: Larsen & Toubro" className="w-full bg-white/5 border-b border-white/10 rounded-xl px-4 py-3 md:px-5 md:py-4 text-white placeholder:text-gray-700 focus:border-[#FFF200] focus:bg-white/10 outline-none transition-all text-sm md:text-base font-medium" />
                  </div>

                  <div className="space-y-1.5 md:space-y-2">
                    <label className="text-[9px] md:text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Project Phase</label>
                    <div className="relative">
                      <select className="w-full bg-white/5 border-b border-white/10 rounded-xl px-4 py-3 md:px-5 md:py-4 text-gray-400 focus:border-[#FFF200] focus:bg-white/10 outline-none transition-all text-sm md:text-base font-medium appearance-none">
                        <option>Select Current Stage</option>
                        <option>Pre-Construction / Planning</option>
                        <option>Active Construction</option>
                        <option>Handover / Operations</option>
                      </select>
                      <div className="absolute right-4 md:right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600">
                        <ChevronDown size={16} strokeWidth={3} />
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 md:pt-4">
                    <button type="button" className="w-full bg-[#FFF200] text-black font-black py-4 md:py-6 rounded-xl md:rounded-2xl uppercase tracking-[0.2em] md:tracking-[0.25em] text-[10px] md:text-xs transition-transform active:scale-95 shadow-[0_10px_30px_rgba(255,242,0,0.15)] flex items-center justify-center gap-2 md:gap-3">
                      Book a free demo
                      <ArrowRight size={16} strokeWidth={3} />
                    </button>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ====================== TRUST BAND ====================== */}
      <section className="bg-white relative z-10 pt-8 pb-12 lg:pb-16 border-t border-gray-100">
        <p className="text-center text-[9px] md:text-[11px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-gray-400 mb-6 md:mb-8">
          Trusted by the best in the business
        </p>
        
        <div className="relative overflow-hidden flex w-full">
          {/* Fade masks for smooth edges */}
          <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <div className="flex shrink-0 animate-marquee items-center gap-12 md:gap-24 px-6 md:px-12">
            {[
              { name: "Larsen & Toubro", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/L%26T.png/640px-L%26T.png" },
              { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/640px-Amazon_logo.svg.png" },
              { name: "TATA Projects", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/1200px-Tata_logo.svg.png" },
              { name: "Adani Enterprise", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Adani_logo_2012.svg" },
              { name: "DLF Limited", logo: "https://upload.wikimedia.org/wikipedia/commons/a/aa/DLF_logo.svg" },
              { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png" },
              { name: "Godrej", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Godrej_Logo.svg/640px-Godrej_Logo.svg.png" },
              { name: "Lodha", logo: "https://companieslogo.com/img/orig/LODHA.NS_BIG-691dc856.png?t=1720244492" },
              { name: "HDFC", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo.svg/640px-HDFC_Bank_Logo.svg.png" },
              { name: "Kirloskar", logo: "https://kirloskar.com/img/KIRLOSKAR%20SAFE%20SPACE%20LOGO-01.jpg" },
              { name: "Toyota Kirloskar", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Toyota_logo_3D.webp/640px-Toyota_logo_3D.webp.png" },
              { name: "Mahindra", logo: "https://images.seeklogo.com/logo-png/61/1/mahindra-auto-logo-png_seeklogo-613492.png" }
            ].map((client, i) => (
              <div key={i} className="flex items-center justify-center w-24 md:w-32 h-8 md:h-12">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-w-full max-h-full object-contain grayscale opacity-40 md:opacity-50"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Platform;