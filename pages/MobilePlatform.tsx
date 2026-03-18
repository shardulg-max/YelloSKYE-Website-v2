import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Play, 
  Layers, MonitorPlay,
  Clock, 
  Zap, 
  Shield, 
  Ruler, 
  Database,
  ArrowRight, ShieldAlert,
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
  Sparkles, History, Calculator, ChevronRight, AlertTriangle,
  Target, 
  Hexagon, 
  PenTool,
  List,
  Box,
  SplitSquareHorizontal,
  Download,
  Search
} from 'lucide-react';

export const Platform: React.FC = () => {
  return (
    <div className="bg-white text-black font-sans selection:bg-[#FFF200] selection:text-black overflow-x-hidden">
      
      {/* ═══ PLATFORM HERO SECTION ═══ */}
      <section className="pt-[100px] lg:pt-44 pb-12 lg:pb-16 w-full bg-white relative font-sans overflow-hidden border-b border-gray-50">
        
        {/* Premium Fade Grid Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ 
               backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", 
               backgroundSize: "40px 40px",
               maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
               WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 100%)"
             }} />
             
        <div className="max-w-[1500px] mx-auto px-5 md:px-10">
          
          {/* TEXT CONTENT */}
          <div className="grid lg:grid-cols-12 gap-5 lg:gap-12 mb-8 lg:mb-10 relative z-10 items-center">
            
            {/* LEFT COLUMN */}
            <div className="lg:col-span-7 flex flex-col justify-center items-start">
              <h1 className="text-[44px] sm:text-[60px] lg:text-[90px] font-black leading-[0.95] tracking-tighter text-[#0A0A0A] m-0 p-0 flex flex-col sm:flex-row sm:items-center gap-2 lg:gap-4">
                Command
                <span className="relative inline-block w-fit">
                   <span className="absolute inset-y-1 sm:inset-y-2 -inset-x-2 bg-[#FFF200] rounded-xl transform -skew-x-2 shadow-sm"></span>
                   <span className="relative z-10 px-1">your site.</span>
                </span>
              </h1>

              {/* Feature Checkmark Row - Wraps on mobile */}
              <div className="flex flex-wrap items-center gap-3 lg:gap-4 mt-5 lg:mt-6">
                {["Live Digital Twin", "AI-Powered Analytics", "Seamless Collaboration"].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFF200" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[14px] sm:h-[14px]">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-[11px] sm:text-[13px] font-bold text-gray-500 tracking-tight">
                        {feature}
                      </span>
                    </div>
                    {index < 2 && <div className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block"></div>}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="lg:col-span-5 flex flex-col pt-2 lg:pt-0">
              <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-relaxed text-gray-600 tracking-tight max-w-lg lg:ml-auto">
                Turn scattered data into a live digital twin. One platform for complete project visibility.
              </p>
            </div>
          </div>

          {/* BOTTOM VISUAL: Adaptive aspect ratio for Mobile vs Desktop */}
          <div className="relative z-10 w-full aspect-[4/5] sm:aspect-video lg:aspect-[21/10] bg-[#080808] rounded-3xl lg:rounded-[40px] shadow-2xl ring-1 ring-black/5 overflow-hidden group">
            
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FFF200]/10 via-transparent to-transparent opacity-50 z-0"></div>

            <img 
              key="dex-hero-final"
              src="https://ik.imagekit.io/saxybrgkp/MME/Dex%20hero.png?updatedAt=1773812383573"
              alt="DEX Aerial Survey Snippet" 
              className="absolute inset-0 w-full h-full object-cover scale-[1.02] group-hover:scale-105 transition-transform duration-[15s] ease-out z-10 opacity-90"
            />
            
            <div className="absolute inset-0 rounded-3xl lg:rounded-[40px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15)] pointer-events-none z-20"></div>

            {/* UI OVERLAYS - Scaled for mobile */}
            <div className="absolute top-4 left-4 md:top-8 md:left-8 bg-white/90 backdrop-blur-md rounded-full px-3 md:px-4 py-1.5 md:py-2 flex items-center gap-2 shadow-sm z-30">
              <div className="flex items-end gap-0.5 h-2 md:h-3">
                <div className="w-0.5 md:w-1 h-full bg-black rounded-sm animate-[pulse_1.5s_ease-in-out_infinite]"></div>
                <div className="w-0.5 md:w-1 h-2/3 bg-black rounded-sm animate-[pulse_1.5s_ease-in-out_infinite_0.3s]"></div>
                <div className="w-0.5 md:w-1 h-4/5 bg-black rounded-sm animate-[pulse_1.5s_ease-in-out_infinite_0.6s]"></div>
              </div>
              <span className="text-[8px] md:text-[10px] font-black text-black uppercase tracking-widest">Platform Sync Active</span>
            </div>

            <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-[#1A1A1A]/95 backdrop-blur-md rounded-xl px-4 py-2.5 md:px-5 md:py-3 flex items-center gap-4 md:gap-6 shadow-xl z-30 border border-white/10">
              <div className="flex flex-col">
                <span className="text-[7px] md:text-[8px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Projects</span>
                <span className="text-[11px] md:text-[13px] font-bold text-[#FFF200] font-mono tracking-tight">12 ACTIVE</span>
              </div>
              <div className="w-[1px] h-5 md:h-6 bg-white/20"></div>
              <div className="flex flex-col">
                <span className="text-[7px] md:text-[8px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Last Sync</span>
                <span className="text-[11px] md:text-[13px] font-bold text-white font-mono tracking-tight">JUST NOW</span>
              </div>
            </div>
            
          </div>   
        </div>
      </section>

      {/* ════════════════════════════════════════
            THE TRUST BAR (MOBILE GRID REFLOW)
        ════════════════════════════════════════ */}
      <section className="bg-white py-8 md:py-12 relative z-10 overflow-hidden border-b border-gray-50">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" 
             style={{ 
               backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", 
               backgroundSize: "40px 40px",
               maskImage: "radial-gradient(ellipse at center, black 10%, transparent 80%)"
             }} />

        <div className="max-w-[1400px] mx-auto px-5 lg:px-8 relative z-10">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-0 md:divide-x divide-gray-200/60">
             {[
               { value: "5%", sub: "Savings on Total Cost" },
               { value: "10X", sub: "Faster Reporting" },
               { value: "40-50%", sub: "Faster Issue Closure" },
               { value: "70-80%", sub: "Fewer Site Visits" },
             ].map((spec, i) => (
               <div key={i} className="flex flex-col items-center justify-center text-center px-2">
                 <div className="text-3xl md:text-4xl lg:text-5xl font-black text-black mb-1.5 tracking-tighter">
                   {spec.value}
                 </div>
                 <div className="text-[9px] md:text-[10px] lg:text-xs text-gray-500 font-bold uppercase tracking-widest max-w-[120px]">
                   {spec.sub}
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* ═══ CHAOS VS CLARITY: THE LOGICAL PIVOT ═══ */}
      <section className="relative py-16 lg:py-24 bg-white overflow-hidden border-b border-gray-50">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-6 relative z-10">
          
          <div className="text-center mb-12 lg:mb-20">
            <h2 className="text-[32px] sm:text-[44px] lg:text-[56px] font-black tracking-tighter leading-[1.05] text-black mb-4">
              Stop managing from the rearview mirror. <br className="hidden md:block"/>
              <span className="text-black">See the absolute truth  </span>
              <span className="relative inline-block mt-1">
                <span className="absolute inset-y-1 -inset-x-2 bg-[#FFF200] rounded-lg"></span>
                <span className="relative px-2">with DEX.</span>
              </span>
            </h2>
            <p className="text-[16px] lg:text-xl text-gray-500 font-medium max-w-2xl mx-auto">
              DEX gives you an AI-powered unified visual record, turning fragmented site updates into indisputable proof.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            
            {/* THE OLD WAY */}
            <div className="group p-6 sm:p-10 lg:p-14 rounded-[32px] lg:rounded-[40px] bg-gray-50 border border-gray-100 transition-all hover:shadow-xl">
              <div className="flex items-center gap-4 mb-8 lg:mb-10">
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-red-500 shadow-sm shrink-0">
                  <X size={24} strokeWidth={3} />
                </div>
                <div>
                  <h3 className="text-xl lg:text-2xl font-black tracking-tight leading-tight">The Traditional Way</h3>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-0.5">Status Quo</p>
                </div>
              </div>

              <ul className="space-y-6 lg:space-y-8">
                {[
                  { t: "Fragmented Data", d: "Photos stuck in WhatsApp, spreadsheets, and emails." },
                  { t: "Delayed Reporting", d: "Reports arrive weeks late, making them useless for live decisions." },
                  { t: "Frequent Disputes", d: "Endless arguments over variations and subcontractor billing." },
                  { t: "Expensive Travel", d: "Stakeholders wasting hours on routine site visits." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-red-400 font-black mt-0.5 text-lg">✕</span>
                    <div>
                      <h4 className="text-[15px] lg:text-lg font-bold text-black leading-none mb-1.5">{item.t}</h4>
                      <p className="text-[13px] lg:text-[15px] text-gray-500 font-medium leading-relaxed">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* THE DEX WAY */}
            <div className="group p-6 sm:p-10 lg:p-14 rounded-[32px] lg:rounded-[40px] bg-[#0A0A0A] text-white relative overflow-hidden transition-all hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFF200] blur-[120px] opacity-10 group-hover:opacity-20 transition-opacity" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8 lg:mb-10">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-[#FFF200] flex items-center justify-center text-black shadow-[0_0_20px_rgba(255,242,0,0.4)] shrink-0">
                    <Check size={24} strokeWidth={4} />
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-black tracking-tight text-white leading-tight">DEX Platform</h3>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#FFF200] mt-0.5">Intelligent Workflow</p>
                  </div>
                </div>

                <ul className="space-y-6 lg:space-y-8">
                  {[
                    { t: "Unified Intelligence", d: "Every photo, scan, and BIM model in one time-linked portal." },
                    { t: "Live Decision-Making", d: "Verify site progress in real-time from any device, anywhere." },
                    { t: "Bulletproof Proof", d: "Immutable visual records that eliminate disputes and bad billing." },
                    { t: "80% Remote Oversight", d: "Free up your most expensive talent for high-value tasks." }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="text-[#FFF200] font-black mt-0.5 text-lg">✓</span>
                      <div>
                        <h4 className="text-[15px] lg:text-lg font-bold text-white leading-none mb-1.5">{item.t}</h4>
                        <p className="text-[13px] lg:text-[15px] text-gray-400 font-medium leading-relaxed">{item.d}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <Link to="/book-demo" className="mt-10 w-full py-4 lg:py-5 bg-[#FFF200] text-black font-black uppercase text-[11px] lg:text-xs tracking-widest rounded-2xl flex items-center justify-center gap-3 transition-transform active:scale-95 shadow-[0_10px_20px_rgba(255,242,0,0.15)]">
                  Experience the Difference <ArrowRight size={16} strokeWidth={3} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ====================== DEX CORE CAPABILITIES (BENTO GRID) ====================== */}
      <section className="relative w-full bg-gray-50 py-16 lg:py-28 font-sans overflow-hidden">
        
        <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: "radial-gradient(#d1d5db 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>

        <div className="relative z-10 max-w-[1450px] mx-auto px-5 lg:px-8">
          
          <div className="flex flex-col items-center text-center mb-12 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-[10px] font-bold tracking-widest text-black mb-4 uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#FFF200]"></span>
              The DEX Platform
            </div>
            
            <h2 className="text-[34px] sm:text-[44px] lg:text-[56px] font-black tracking-tighter text-[#0A0A0A] leading-[1.05] mb-4">
              Ground Truth <br className="sm:hidden" />
              <span className="relative inline-block whitespace-nowrap mt-1 sm:mt-0">
                <span className="absolute -inset-y-1 -inset-x-2 bg-[#FFF200] rounded-xl shadow-sm"></span>
                <span className="relative z-10 text-black">to the Desktop.</span>
              </span>
            </h2>
            
            <p className="text-[15px] lg:text-xl text-gray-500 font-medium leading-relaxed max-w-2xl">
              Centralize sensor data, AI analytics, and project visuals. Make smarter decisions and eliminate blind spots.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8">
            
            {/* CARD 1 */}
            <div className="relative bg-white rounded-[28px] lg:rounded-3xl p-6 lg:p-8 shadow-sm border border-gray-200 flex flex-col">
              <div className="mb-6 lg:mb-8">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#0A0A0A] rounded-xl flex items-center justify-center text-[#FFF200] mb-4 shadow-md">
                  <MonitorPlay size={20} strokeWidth={2.5} />
                </div>
                <h3 className="text-xl lg:text-3xl font-black text-black mb-2 tracking-tight">Visual Intelligence</h3>
                <p className="text-[13px] lg:text-base text-gray-500 font-medium leading-relaxed">
                  View high-res imagery, 3D maps, immersive FPV tours, and timelapse videos—all in one place.
                </p>
              </div>
              
              {/* Capped Height for Mobile */}
              <div className="w-full h-48 sm:h-64 lg:h-72 rounded-2xl bg-gray-100 overflow-hidden border border-gray-200 mt-auto">
                 <img src="https://ik.imagekit.io/saxybrgkp/MME/234.png" alt="Site Map" className="w-full h-full object-cover opacity-90" />
              </div>
            </div>

            {/* CARD 2 */}
            <div className="relative bg-white rounded-[28px] lg:rounded-3xl p-6 lg:p-8 shadow-sm border border-gray-200 flex flex-col">
              <div className="mb-6 lg:mb-8">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#0A0A0A] rounded-xl flex items-center justify-center text-[#FFF200] mb-4 shadow-md">
                  <Layers size={20} strokeWidth={2.5} />
                </div>
                <h3 className="text-xl lg:text-3xl font-black text-black mb-2 tracking-tight">BIM Integration</h3>
                <p className="text-[13px] lg:text-base text-gray-500 font-medium leading-relaxed">
                  Overlay CAD and BIM models directly onto actual terrain for instant design validation.
                </p>
              </div>
              
              <div className="w-full h-48 sm:h-64 lg:h-72 rounded-2xl bg-gray-100 overflow-hidden relative border border-gray-200 mt-auto">
                 <img src="https://ik.imagekit.io/saxybrgkp/MME/Website%20Visuals%20Overlay%20(1).png" className="w-full h-full object-cover opacity-90" alt="BIM Overlay" />
                 <div className="absolute bottom-3 right-3 bg-black text-[#FFF200] text-[9px] lg:text-[10px] font-black px-2.5 py-1.5 rounded-md uppercase tracking-widest shadow-lg">
                   Clash Detected
                 </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="relative bg-white rounded-[28px] lg:rounded-3xl p-6 lg:p-8 shadow-sm border border-gray-200 flex flex-col">
              <div className="mb-6 lg:mb-8">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#0A0A0A] rounded-xl flex items-center justify-center text-[#FFF200] mb-4 shadow-md">
                  <BarChart3 size={20} strokeWidth={2.5} />
                </div>
                <h3 className="text-xl lg:text-3xl font-black text-black mb-2 tracking-tight">Smart Analytics</h3>
                <p className="text-[13px] lg:text-base text-gray-500 font-medium leading-relaxed">
                  Automate reporting. Track exact earthwork volumes, consumption, and progress instantly.
                </p>
              </div>
              
              <div className="w-full h-48 sm:h-64 lg:h-72 rounded-2xl bg-gray-50 border border-gray-200 mt-auto p-4 flex flex-col justify-center gap-3">
                <div className="bg-white px-4 py-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
                  <div>
                    <div className="text-[9px] lg:text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Earthwork Volume</div>
                    <div className="text-lg lg:text-xl font-black text-black">12,450 m³</div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center">
                    <ChevronRight size={14} className="text-gray-500" />
                  </div>
                </div>
                <div className="bg-white px-4 py-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
                  <div>
                    <div className="text-[9px] lg:text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Material Usage</div>
                    <div className="text-lg lg:text-xl font-black text-black">On Track</div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center border border-green-100">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="relative bg-white rounded-[28px] lg:rounded-3xl p-6 lg:p-8 shadow-sm border border-gray-200 flex flex-col">
              <div className="mb-6 lg:mb-8">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#0A0A0A] rounded-xl flex items-center justify-center text-[#FFF200] mb-4 shadow-md">
                  <ShieldCheck size={20} strokeWidth={2.5} />
                </div>
                <h3 className="text-xl lg:text-3xl font-black text-black mb-2 tracking-tight">Issue Tracking</h3>
                <p className="text-[13px] lg:text-base text-gray-500 font-medium leading-relaxed">
                  Streamline defect identification. Tag hazards and track snag resolution directly on the digital twin.
                </p>
              </div>
              
              <div className="w-full h-48 sm:h-64 lg:h-72 rounded-2xl bg-gray-50 border border-gray-200 mt-auto flex items-center justify-center p-4 relative overflow-hidden">
                 <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                   <div className="w-32 h-32 lg:w-40 lg:h-40 border border-red-300 rounded-full"></div>
                 </div>
                 
                 <div className="relative z-10 bg-white border border-gray-100 rounded-xl p-4 flex gap-3 items-center shadow-lg w-full max-w-[280px]">
                   <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-red-50 border border-red-100 shrink-0 flex items-center justify-center relative">
                     <div className="absolute inset-1.5 border-2 border-red-400 rounded-sm opacity-60"></div>
                   </div>
                   <div>
                     <div className="text-[9px] font-black text-red-500 uppercase tracking-widest mb-1">Zone C • Open Snag</div>
                     <div className="text-[12px] font-bold text-gray-900 leading-tight">Rebar spacing deviation.</div>
                   </div>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ STAKEHOLDER ROI ═══ */}
      <section className="relative py-16 lg:py-24 bg-white overflow-hidden border-b border-gray-50">
        <div className="max-w-[1450px] mx-auto px-5 lg:px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-white text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 mb-4 shadow-sm">
              Universal Utility
            </div>
            <h2 className="text-[34px] sm:text-[44px] lg:text-[56px] font-black tracking-tighter leading-[1.05] text-black">
              One platform. <br />
              <span className="text-black">Total clarity for  </span>
              <span className="relative inline-block mt-1 sm:mt-0">
                <span className="absolute inset-y-1 -inset-x-2 bg-[#FFF200] rounded-lg shadow-sm"></span>
                <span className="relative px-1 text-black">every team.</span>
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
            {[
              {
                role: "Developer / Owner",
                icon: <Shield size={24} />,
                impact: "Capital Protection",
                benefit: "Reduce interest costs through faster cycles and prevent expensive rework.",
                stat: "5% Cost Savings",
                tags: ["Portfolio", "ROI Validation"]
              },
              {
                role: "Project Manager",
                icon: <Zap size={24} />,
                impact: "Execution Speed",
                benefit: "Automate progress reporting. Manage 3x more sites without increasing headcount.",
                stat: "10x Faster Reports",
                tags: ["Tracking", "Billing Proof"]
              },
              {
                role: "Design Lead",
                icon: <Layers size={24} />,
                impact: "Quality Assurance",
                benefit: "Overlay CAD/BIM models on live site photos to identify deviations in seconds.",
                stat: "30% Less Rework",
                tags: ["BIM", "Snag Detection"]
              }
            ].map((persona, i) => (
              <div key={i} className="flex flex-col p-6 lg:p-8 rounded-[28px] lg:rounded-[40px] bg-white border border-gray-200 shadow-sm">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-black shadow-sm">
                    {persona.icon}
                  </div>
                  <div className="text-right">
                    <p className="text-[8px] font-black uppercase tracking-widest text-gray-400 mb-0.5">Key Impact</p>
                    <p className="text-[12px] font-bold text-black">{persona.impact}</p>
                  </div>
                </div>

                <h3 className="text-xl lg:text-2xl font-black tracking-tight text-black mb-3">
                  {persona.role}
                </h3>
                <p className="text-[13px] lg:text-[14px] text-gray-500 font-medium leading-relaxed mb-8 flex-grow">
                  {persona.benefit}
                </p>

                <div className="pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-2xl font-black text-black tracking-tighter">{persona.stat}</span>
                    <div className="h-1.5 flex-grow bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#FFF200] w-2/3" />
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {persona.tags.map((tag, j) => (
                      <span key={j} className="px-2.5 py-1 rounded-md bg-gray-50 text-[8px] font-black uppercase tracking-widest text-gray-500 border border-gray-100">
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

      {/* ═══ IMPLEMENTATION: THE FRICTIONLESS PATH ═══ */}
      <section className="relative py-16 lg:py-24 bg-gray-50 overflow-hidden font-sans">
        <div className="max-w-[1450px] mx-auto px-5 lg:px-6 relative z-10">
          
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-12 gap-4">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-white text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 mb-4 shadow-sm">
                Deployment Protocol
              </div>
              <h2 className="text-[34px] sm:text-[44px] lg:text-[56px] font-black tracking-tighter leading-[1.05] text-black">
                From site reality to <br />
                <span className="relative inline-block mt-1 sm:mt-0">
                  <span className="absolute inset-y-1 -inset-x-2 bg-[#FFF200] rounded-lg shadow-sm"></span>
                  <span className="relative px-1 text-black">decision clarity.</span>
                </span>
              </h2>
            </div>
            <p className="text-[14px] lg:text-lg text-gray-500 font-medium max-w-sm lg:text-right leading-relaxed">
              We handle the capture, the processing, and the intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { step: "01", title: "Reality Capture", desc: "Certified pilots capture the site via drones or 360° cameras.", icon: <Camera size={20} /> },
              { step: "02", title: "AI Processing", desc: "Raw data aligns with your CAD/BIM models via our engine.", icon: <Cpu size={20} /> },
              { step: "03", title: "Insights", desc: "Automatically flags deviations and updates your dashboard.", icon: <BarChart3 size={20} /> },
              { step: "04", title: "Execution", desc: "Approve invoices and resolve snags with a single digital truth.", icon: <ShieldCheck size={20} /> }
            ].map((item, i) => (
              <div key={i} className="relative flex flex-col p-6 lg:p-8 rounded-[24px] lg:rounded-[32px] bg-white border border-gray-200 shadow-[0_4px_15px_rgba(0,0,0,0.02)]">
                <div className="flex justify-between items-start mb-8">
                  <div className="text-3xl font-black tracking-tighter text-gray-200">
                    {item.step}
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-black">
                    {item.icon}
                  </div>
                </div>
                
                <h3 className="text-[17px] font-black text-black mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-[12px] text-gray-500 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default Platform;