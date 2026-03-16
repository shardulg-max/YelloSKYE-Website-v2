import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Layers, 
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

// ─── DATA ─────────────────────────────────────────────────────────────────────

const FEATURES_BENTO = [
  { 
    title: "Visual Timeline Intelligence",
    desc: "Scrub through months of site evolution. One frame. One truth.",
    icon: <Clock className="text-black" size={28} />,
    colSpan: "md:col-span-2",
    bg: "bg-gray-50"
  },
  { 
    title: "Live Site Overlay",
    desc: "CAD & BIM layered on reality.",
    icon: <Layers className="text-[#FFF200]" size={28} />,
    colSpan: "md:col-span-1",
    bg: "bg-black text-white" 
  },
  { 
    title: "Audit-Grade Proof",
    desc: "Immutable logs for dispute resolution.",
    icon: <Shield className="text-black" size={28} />,
    colSpan: "md:col-span-1",
    bg: "bg-gray-50"
  },
  { 
    title: "Remote Measurements",
    desc: "Measure distance, area, and volume from your desk with <1% error rate.",
    icon: <Ruler className="text-black" size={28} />,
    colSpan: "md:col-span-2",
    bg: "bg-gray-50"
  },
];

const USE_CASES = [
  {
    role: "Project Manager",
    quote: "I verify progress in minutes, not hours.",
    stat: "60% less travel time",
    tags: ["Progress Tracking", "Validation"],
    color: "bg-[#FFF200]"
  },
  {
    role: "CXO / Executive",
    quote: "I finally have portfolio-wide visibility.",
    stat: "Early risk detection",
    tags: ["ROI Monitoring", "Portfolio View"],
    color: "bg-[#FFF200]"
  },
  {
    role: "Design Lead",
    quote: "We catch drift before concrete is poured.",
    stat: "30% less rework",
    tags: ["BIM Overlay", "Quality Control"],
    color: "bg-[#FFF200]"
  },
];

const WORKFLOW_STEPS = [
  {
    num: 1,
    title: "Capture Reality",
    desc: "Drone surveys, 360° captures, scans, and sensors continuously record on-site conditions — without manual effort.",
    icon: <Camera size={28} />
  },
  {
    num: 2,
    title: "Centralize in DEX",
    desc: "All visuals, plans, BIM models, and timelines converge into one unified intelligence layer.",
    icon: <Database size={28} />
  },
  {
    num: 3,
    title: "Analyze & Verify",
    desc: "Progress, quantities, deviations, and issues are verified visually — not assumed from reports.",
    icon: <BarChart3 size={28} />
  },
  {
    num: 4,
    title: "Decide with Proof",
    desc: "Teams approve, bill, resolve, and plan using time-linked visual evidence — faster and with confidence.",
    icon: <ShieldCheck size={28} />
  }
];

// ─── SUB-COMPONENTS ───────────────────────────────────────────────────────────

const InteractiveDashboard = () => {
  const tabs = ['map', 'timeline', 'analytics'];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % tabs.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [isHovered, tabs.length]);

  const activeTab = tabs[activeIndex];

  return (
    <div 
      className="rounded-[32px] overflow-hidden border border-gray-200 shadow-2xl bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-[#FFF200]"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div className="flex gap-4 bg-gray-200/50 p-1 rounded-lg">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveIndex(index)}
              className={`px-4 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === tab ? 'bg-white shadow-sm text-black scale-105' : 'text-gray-500 hover:text-black'
              }`}
            >
              {tab} View
            </button>
          ))}
        </div>
      </div>

      <div className="relative h-[500px] bg-gray-900 group overflow-hidden">
        <div className={`absolute inset-0 transition-opacity duration-500 ${activeTab === 'map' ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1600&q=80")' }}></div>
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-1/3 left-1/4 group/marker">
             <div className="w-4 h-4 bg-[#FFF200] rounded-full shadow-[0_0_0_4px_rgba(255,234,0,0.3)] animate-pulse"></div>
             <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded shadow-lg text-xs font-bold whitespace-nowrap opacity-100 md:opacity-0 md:group-hover/marker:opacity-100 transition-opacity text-black">
               Zone A: Pouring
             </div>
          </div>
        </div>

        <div className={`absolute inset-0 bg-white p-8 flex flex-col items-center justify-center transition-opacity duration-500 ${activeTab === 'timeline' ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
           <div className="w-full max-w-2xl transform transition-transform duration-700 translate-y-0">
             <div className="flex justify-between mb-8 px-4">
               {['JAN', 'FEB', 'MAR', 'APR', 'MAY'].map((m, i) => (
                 <div key={m} className={`text-center ${i === 2 ? 'scale-110' : 'opacity-50'}`}>
                   <div className="text-sm font-bold text-black">{m}</div>
                   <div className={`w-3 h-3 rounded-full mx-auto mt-2 ${i === 2 ? 'bg-[#FFF200] animate-pulse' : 'bg-gray-300'}`}></div>
                 </div>
               ))}
             </div>
             <div className="relative h-64 bg-gray-100 rounded-xl overflow-hidden border border-gray-200 shadow-inner">
               <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80" className="w-full h-full object-cover grayscale opacity-80" alt="Construction Site" />
               <div className="absolute bottom-4 left-4 bg-black/80 text-white px-3 py-1 rounded text-xs font-mono">
                  DATE: 2026-03-15
               </div>
             </div>
           </div>
        </div>

        <div className={`absolute inset-0 bg-gray-50 p-8 grid grid-cols-2 gap-4 transition-opacity duration-500 ${activeTab === 'analytics' ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
             <h4 className="text-gray-500 text-xs font-bold uppercase mb-2">Completion Rate</h4>
             <div className="text-4xl font-black text-gray-900">78%</div>
             <div className="text-green-600 text-sm font-bold mt-1">↑ 4% this week</div>
           </div>
           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
             <h4 className="text-gray-500 text-xs font-bold uppercase mb-2">Open Snags</h4>
             <div className="text-4xl font-black text-red-500">12</div>
             <div className="text-gray-400 text-sm font-bold mt-1">3 Critical</div>
           </div>
           <div className="col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-end gap-2 h-40">
             {[40, 65, 55, 80, 72, 90, 85].map((h, i) => (
               <div key={i} className="flex-1 bg-gray-900 rounded-t-sm hover:bg-[#FFF200] transition-colors" style={{ height: `${h}%` }}></div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
};

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

export const Platform: React.FC = () => {
  const [activeUseCase, setActiveUseCase] = useState(0);
  const [isPersonaHovered, setIsPersonaHovered] = useState(false);
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0);
  const [isWorkflowHovered, setIsWorkflowHovered] = useState(false);

  useEffect(() => {
    if (isWorkflowHovered) return;
    const timer = setInterval(() => {
      setActiveWorkflowStep((prev) => (prev + 1) % WORKFLOW_STEPS.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [isWorkflowHovered]);

  useEffect(() => {
    if (isPersonaHovered) return;
    const timer = setInterval(() => {
      setActiveUseCase((prev) => (prev + 1) % USE_CASES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPersonaHovered]);

  return (
    <div className="bg-white text-black font-sans selection:bg-[#FFF200] selection:text-black">
      
{/* ═══ PLATFORM HERO SECTION ═══ */}
<section className="pt-28 lg:pt-44 pb-12 lg:pb-16 w-full bg-white relative font-sans overflow-hidden">
  
  {/* Premium Fade Grid Background */}
  <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
       style={{ 
         backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", 
         backgroundSize: "80px 80px",
         maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
         WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 100%)"
       }} />
       
  <div className="max-w-[1500px] mx-auto px-6 md:px-10">
    
    {/* TEXT CONTENT: Tighter spacing (mb-8 instead of mb-16) */}
    <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 mb-8 lg:mb-10 relative z-10 items-center">
      
      {/* LEFT COLUMN: 1-Line Heading & Feature Row */}
      <div className="lg:col-span-7 flex flex-col justify-center items-start">
        
        {/* Forced 1-line heading */}
        <h1 className="text-[clamp(44px,5.5vw,90px)] font-black leading-none tracking-tighter text-[#0A0A0A] m-0 p-0 flex items-center gap-3 lg:gap-4 whitespace-nowrap">
          Command your site.
        </h1>

        {/* Feature Checkmark Row */}
        <div className="flex flex-wrap items-center gap-3 lg:gap-4 mt-5 lg:mt-6">
          {[
            "Live Digital Twin",
            "AI-Powered Analytics",
            "Seamless Collaboration"
          ].map((feature, index) => (
            <div key={index} className="flex items-center gap-2.5">
              <div className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFF200" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="text-[12px] lg:text-[13px] font-bold text-gray-500 tracking-tight">
                  {feature}
                </span>
              </div>
              {index < 2 && (
                <div className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block"></div>
              )}
            </div>
          ))}
        </div>

      </div>

      {/* RIGHT COLUMN: Subheading */}
      <div className="lg:col-span-5 flex flex-col pt-4 lg:pt-0">
        <p className="text-[18px] md:text-[20px] font-medium leading-relaxed text-gray-600 tracking-tight max-w-lg lg:ml-auto">
          Turn scattered data into a live digital twin. One platform for complete project visibility.
        </p>
      </div>

    </div>

    {/* BOTTOM VISUAL: Larger Image Box (Taller aspect ratio) */}
    <div className="relative z-10 w-full aspect-[16/9] lg:aspect-[21/10] min-h-[450px] bg-[#080808] rounded-3xl lg:rounded-[40px] shadow-[0_30px_80px_rgba(0,0,0,0.12)] ring-1 ring-black/5 overflow-hidden group">
      
      {/* Ambient Backlight */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#FFF200]/10 via-transparent to-transparent opacity-50 z-0"></div>

      {/* The Image Element */}
      <img 
        src="https://ik.imagekit.io/saxybrgkp/MME/345.png" 
        alt="DEX Aerial Survey Snippet" 
        className="absolute inset-0 w-full h-full object-cover scale-[1.02] group-hover:scale-105 transition-transform duration-[15s] ease-out z-10 opacity-90"
      />
      
      {/* Inner Glare / Glass Edge */}
      <div className="absolute inset-0 rounded-3xl lg:rounded-[40px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15)] pointer-events-none z-20"></div>

      {/* UI OVERLAYS */}
      <div className="absolute top-6 left-6 md:top-8 md:left-8 bg-white/90 backdrop-blur-md rounded-full px-4 py-2 flex items-center gap-2.5 shadow-sm z-30">
        <div className="flex items-end gap-0.5 h-3">
          <div className="w-1 h-3 bg-black rounded-sm animate-[pulse_1.5s_ease-in-out_infinite]"></div>
          <div className="w-1 h-2 bg-black rounded-sm animate-[pulse_1.5s_ease-in-out_infinite_0.3s]"></div>
          <div className="w-1 h-2.5 bg-black rounded-sm animate-[pulse_1.5s_ease-in-out_infinite_0.6s]"></div>
        </div>
        <span className="text-[10px] font-black text-black uppercase tracking-widest">Platform Sync Active</span>
      </div>

      <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 bg-[#1A1A1A]/95 backdrop-blur-md rounded-xl px-5 py-3 flex items-center gap-6 shadow-xl z-30 border border-white/10">
        <div className="flex flex-col">
          <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Projects</span>
          <span className="text-[13px] font-bold text-[#FFF200] font-mono tracking-tight">12 ACTIVE</span>
        </div>
        <div className="w-[1px] h-6 bg-white/20"></div>
        <div className="flex flex-col">
          <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Last Sync</span>
          <span className="text-[13px] font-bold text-white font-mono tracking-tight">JUST NOW</span>
        </div>
      </div>
      
    </div>   

  </div>
</section>

    {/* ════════════════════════════════════════
          THE TRUST BAR
      ════════════════════════════════════════ */}
      <section className="bg-white py-8 relative z-10 overflow-hidden border-gray-100/50">
        {/* Aesthetic Fade Grid Background */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" 
             style={{ 
               backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", 
               backgroundSize: "80px 80px",
               maskImage: "radial-gradient(ellipse at center, black 10%, transparent 80%)",
               WebkitMaskImage: "radial-gradient(ellipse at center, black 10%, transparent 80%)"
             }} />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 md:gap-y-0 divide-y md:divide-y-0 md:divide-x divide-gray-200/60">
             {[
               { value: "5%", sub: "Savings on Total Cost" },
               { value: "10X", sub: "Faster Reporting" },
               { value: "40-50%", sub: "Faster Issue Closure" },
               { value: "70-80%", sub: "Fewer Site Visits" },
             ].map((spec, i) => (
               <div key={i} className="flex flex-col items-center justify-center text-center pt-6 md:pt-0 px-2 lg:px-4">
                 <div className="text-4xl lg:text-5xl font-black text-black mb-2 tracking-tighter">
                   {spec.value}
                 </div>
                 <div className="text-[10px] lg:text-xs text-gray-500 font-bold uppercase tracking-widest max-w-[140px]">
                   {spec.sub}
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>
      {/* ═══ CHAOS VS CLARITY: THE LOGICAL PIVOT ═══ */}
      <section className="relative py-24 bg-white overflow-hidden font-sans-gray-100">
        {/* AESTHETIC GRID BACKGROUND */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ 
            backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", 
            backgroundSize: "80px 80px",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 90%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 90%, transparent 100%)"
          }} 
        />

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-[clamp(32px,5vw,56px)] font-black tracking-tighter leading-[1.1] text-black mb-6">
              Stop managing projects from the rearview mirror. <br />
              <span className="text-black">See the absolute truth  </span>
              <span className="relative inline-block">
                <span className="absolute inset-y-1 -inset-x-2 bg-[#FFF200] rounded-lg"></span>
                <span className="relative px-2">with DEX.</span>
              </span>
            </h2>
            <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto">
              DEX gives you an AI-powered unified visual record, turning fragmented site updates into indisputable proof for faster, zero-guesswork decisions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            
            {/* THE OLD WAY: AGITATION */}
            <div className="group p-10 lg:p-14 rounded-[40px] bg-gray-50 border border-gray-100 transition-all duration-500 hover:shadow-xl">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-red-500 shadow-sm group-hover:bg-red-50 transition-colors">
                  <X size={28} strokeWidth={3} />
                </div>
                <div>
                  <h3 className="text-2xl font-black tracking-tight">The Traditional Way</h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Status Quo</p>
                </div>
              </div>

              <ul className="space-y-8">
                {[
                  { t: "Fragmented Data", d: "Photos stuck in WhatsApp, spreadsheets, and emails." },
                  { t: "Delayed Reporting", d: "Reports arrive weeks late, making them useless for live decisions." },
                  { t: "Frequent Disputes", d: "Endless arguments over variations and subcontractor billing." },
                  { t: "Expensive Travel", d: "High-level stakeholders wasting hours on routine site visits." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-5">
                    <span className="text-red-400 font-black mt-1">✕</span>
                    <div>
                      <h4 className="text-lg font-bold text-black leading-none mb-2">{item.t}</h4>
                      <p className="text-gray-500 font-medium leading-relaxed">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* THE DEX WAY: SOLUTION */}
            <div className="group p-10 lg:p-14 rounded-[40px] bg-black text-white relative overflow-hidden transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.3)]">
              {/* Glow Effect */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFF200] blur-[120px] opacity-10 group-hover:opacity-20 transition-opacity" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-14 h-14 rounded-2xl bg-[#FFF200] flex items-center justify-center text-black shadow-[0_0_20px_rgba(255,242,0,0.4)]">
                    <Check size={28} strokeWidth={4} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black tracking-tight text-white">DEX Platform</h3>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#FFF200]">Intelligent Workflow</p>
                  </div>
                </div>

                <ul className="space-y-8">
                  {[
                    { t: "Unified Intelligence", d: "Every photo, scan, and BIM model in one time-linked portal." },
                    { t: "Live Decision-Making", d: "Verify site progress in real-time from any device, anywhere." },
                    { t: "Bulletproof Proof", d: "Immutable visual records that eliminate disputes and bad billing." },
                    { t: "80% Remote Oversight", d: "Free up your most expensive talent for high-value tasks." }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-5">
                      <span className="text-[#FFF200] font-black mt-1">✓</span>
                      <div>
                        <h4 className="text-lg font-bold text-white leading-none mb-2">{item.t}</h4>
                        <p className="text-gray-400 font-medium leading-relaxed">{item.d}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <button className="mt-12 w-full py-5 bg-[#FFF200] text-black font-black uppercase text-xs tracking-widest rounded-2xl flex items-center justify-center gap-3 transition-transform hover:scale-[1.02] active:scale-95">
                  Experience the Difference <ArrowRight size={16} strokeWidth={3} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

{/* ====================== DEX CORE CAPABILITIES (4-BENTO GRID) ====================== */}
    <section className="relative w-full bg-[#FAFAFA] py-24 lg:py-32 font-sans overflow-hidden border-gray-100">
      
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
            style={{ 
              backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", 
              backgroundSize: "64px 64px",
              maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
              WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)"
            }} 
      />

      <div className="relative z-10 max-w-[1450px] mx-auto px-6 lg:px-8">
        
        {/* Section Header (Revised for AI Angle) */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <h2 className="text-[clamp(40px,5vw,64px)] font-black tracking-tighter text-[#0A0A0A] leading-[1.05] mb-6">
            One platform. <br className="hidden sm:block" />
            <span className="relative inline-block mt-2">
              <span className="absolute inset-y-1 lg:inset-y-2 -inset-x-3 bg-[#FFF200] rounded-xl shadow-sm"></span>
              <span className="relative px-2 text-black">Absolute command.</span>
            </span>
          </h2>
          
          <p className="text-[18px] md:text-[22px] text-gray-500 font-medium leading-relaxed max-w-3xl">
            We don't just capture data; we structure it. Our AI spatial processing engine turns millions of raw drone and camera pixels into a living, searchable digital twin of your jobsite.
          </p>
        </div>

        {/* 4-Box Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* CARD 1: Visual Time Travel */}
          <div className="relative bg-[#0A0A0A] rounded-3xl lg:rounded-[40px] p-8 lg:p-12 overflow-hidden group shadow-[0_20px_40px_rgba(0,0,0,0.08)] ring-1 ring-black/5 flex flex-col justify-between min-h-[450px]">
            {/* Background Map Placeholder */}
            <div className="absolute inset-0 opacity-40 group-hover:opacity-50 transition-opacity duration-700">
              <img src="https://ik.imagekit.io/saxybrgkp/MME/234.png" alt="Site Map" className="w-full h-full object-cover grayscale" />
            </div>
            
            <div className="relative z-10 max-w-md">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-6 border border-white/10">
                <History size={24} />
              </div>
              <h3 className="text-3xl font-black text-white mb-4 tracking-tight">Visual Time Travel</h3>
              <p className="text-gray-400 font-medium text-lg leading-relaxed">
                Scroll back in time to any date. Compare exact site conditions week-over-week to eliminate contractor disputes instantly.
              </p>
            </div>
          </div>

          {/* CARD 2: Design vs. Reality (Single Image) */}
          <div className="relative bg-white rounded-3xl lg:rounded-[40px] p-8 lg:p-12 overflow-hidden group shadow-[0_20px_40px_rgba(0,0,0,0.04)] ring-1 ring-gray-200 flex flex-col justify-between min-h-[450px]">
            <div className="relative z-10 max-w-md mb-8">
              <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-black mb-6 border border-gray-100 group-hover:bg-[#FFF200] transition-colors">
                <Layers size={24} />
              </div>
              <h3 className="text-3xl font-black text-black mb-3 tracking-tight">Design vs. Reality</h3>
              <p className="text-gray-500 font-medium text-lg leading-relaxed">
                Overlay Navisworks or Revit models directly onto as-built scans to catch clashes before concrete cures.
              </p>
            </div>

            {/* Single Image Area */}
            <div className="relative w-full h-48 lg:h-56 rounded-2xl overflow-hidden border border-gray-200 shadow-inner group-hover:-translate-y-2 transition-transform duration-500">
               {/* Replace this src with your actual BIM overlay image */}
               <img src="https://ik.imagekit.io/saxybrgkp/MME/Website%20Visuals%20Overlay%20(1).png" className="w-full h-full object-cover" alt="BIM Overlay" />
               <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md text-[#FFF200] text-[10px] font-black px-3 py-1.5 rounded-lg uppercase tracking-widest border border-white/10 shadow-lg">
                 BIM Match Active
               </div>
            </div>
          </div>

          {/* CARD 3: Automated Extraction */}
          <div className="relative bg-white rounded-3xl lg:rounded-[40px] p-8 lg:p-12 overflow-hidden group shadow-[0_20px_40px_rgba(0,0,0,0.04)] ring-1 ring-gray-200 flex flex-col justify-between min-h-[450px]">
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-black border border-gray-100 group-hover:bg-[#FFF200] transition-colors">
                  <Calculator size={24} />
                </div>
              </div>
              <h3 className="text-3xl font-black text-black mb-3 tracking-tight">Automated Extraction</h3>
              <p className="text-gray-500 font-medium text-lg leading-relaxed">
                Stop manual counting. The AI engine instantly generates quantities for earthwork volumes, slab casting, and facade progress.
              </p>
            </div>

            {/* Mock UI: Extraction Metrics */}
            <div className="mt-12 flex flex-col gap-4">
              <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 flex items-center justify-between group-hover:-translate-y-1 transition-transform duration-500">
                <div>
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Slab 4 Casting</div>
                  <div className="text-xl font-black text-black">84.2% Complete</div>
                </div>
                <div className="w-12 h-12 rounded-full border-4 border-gray-200 border-t-green-500 border-r-green-500 flex items-center justify-center transform -rotate-45"></div>
              </div>
              <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 flex items-center justify-between group-hover:-translate-y-1 transition-transform duration-500 delay-75">
                <div>
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Excavation Volume</div>
                  <div className="text-xl font-black text-black">12,450 m³</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                  <ChevronRight size={16} className="text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          {/* CARD 4: AI Defect Detection (NEW FEATURE) */}
          <div className="relative bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] rounded-3xl lg:rounded-[40px] p-8 lg:p-12 overflow-hidden group shadow-[0_20px_40px_rgba(0,0,0,0.15)] ring-1 ring-white/5 flex flex-col justify-between min-h-[450px]">
            {/* Abstract Tech Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 blur-[80px] rounded-full group-hover:bg-red-500/20 transition-colors duration-700 pointer-events-none"></div>

            <div className="relative z-10 max-w-md">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/10 group-hover:border-red-500/50 transition-colors">
                  <ShieldAlert size={24} className="text-red-400" />
                </div>
                <div className="flex items-center gap-1.5 bg-red-500/20 text-red-400 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-red-500/30">
                  <AlertTriangle size={12} /> Priority Alert
                </div>
              </div>
              <h3 className="text-3xl font-black text-white mb-3 tracking-tight">AI Issue Detection</h3>
              <p className="text-gray-400 font-medium text-lg leading-relaxed">
                The engine continuously scans your visual twin, automatically flagging safety hazards, missing rebar, or structural deviations.
              </p>
            </div>

            {/* Mock UI: Alert Card */}
            <div className="relative z-10 mt-12 bg-black/60 backdrop-blur-xl border border-red-500/20 rounded-2xl p-5 shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-500 flex gap-4 items-center">
               <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-white/10 relative">
                 {/* Bounding Box Simulation */}
                 <div className="absolute inset-2 border-2 border-red-500 rounded-sm"></div>
               </div>
               <div>
                 <div className="text-[10px] font-black text-red-400 uppercase tracking-widest mb-1">Zone C • Column 4B</div>
                 <div className="text-sm font-bold text-white leading-tight">Rebar spacing deviation detected. Requires inspection.</div>
               </div>
            </div>
          </div>

        </div>

      </div>
    </section>

      {/* ═══ STAKEHOLDER ROI: THE TARGETED PERSUASION ═══ */}
      <section className="relative py-32 bg-white overflow-hidden font-sans border-gray-100">
        {/* AESTHETIC GRID BACKGROUND */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ 
            backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", 
            backgroundSize: "80px 80px",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 90%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 90%, transparent 100%)"
          }} 
        />

        <div className="max-w-[1450px] mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-white text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-6 shadow-sm">
              Universal Utility
            </div>
            <h2 className="text-[clamp(36px,5vw,64px)] font-black tracking-tighter leading-[1.05] text-black">
              One platform. <br />
              <span className="text-black">Total clarity for  </span>
              <span className="relative inline-block">
                <span className="absolute inset-y-1 -inset-x-2 bg-[#FFF200] rounded-lg shadow-sm"></span>
                <span className="relative px-1 text-black">every team.</span>
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                role: "The Developer / Owner",
                icon: <Shield size={28} />,
                impact: "Capital Protection",
                benefit: "Reduce interest costs through faster cycles and prevent expensive rework before concrete is poured.",
                stat: "5% Savings on Total Cost",
                tags: ["Portfolio Oversight", "ROI Validation"]
              },
              {
                role: "The Project Manager",
                icon: <Zap size={28} />,
                impact: "Execution Speed",
                benefit: "Automate progress reporting and billing verification. Manage 3x more sites without increasing headcount.",
                stat: "10x Faster Reporting",
                tags: ["Progress Tracking", "Billing Proof"]
              },
              {
                role: "The Architect / Design Lead",
                icon: <Layers size={28} />,
                impact: "Quality Assurance",
                benefit: "Instantly overlay CAD/BIM models on live site photos to identify deviations in seconds, not weeks.",
                stat: "30% Less Rework",
                tags: ["BIM Validation", "Snag Detection"]
              }
            ].map((persona, i) => (
              <div key={i} className="group flex flex-col h-full p-10 rounded-[40px] bg-white border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-black group-hover:bg-[#FFF200] transition-colors duration-500 shadow-sm">
                    {persona.icon}
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Key Impact</p>
                    <p className="text-sm font-bold text-black">{persona.impact}</p>
                  </div>
                </div>

                <h3 className="text-2xl font-black tracking-tight text-black mb-4">
                  {persona.role}
                </h3>
                
                <p className="text-gray-500 font-medium leading-relaxed mb-10 flex-grow">
                  {persona.benefit}
                </p>

                <div className="pt-8 border-t border-gray-50">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl font-black text-black tracking-tighter">{persona.stat}</span>
                    <div className="h-1 flex-grow bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#FFF200] w-2/3" />
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {persona.tags.map((tag, j) => (
                      <span key={j} className="px-3 py-1 rounded-lg bg-gray-50 text-[9px] font-black uppercase tracking-widest text-gray-400 border border-gray-100">
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
      <section className="relative py-32 bg-white overflow-hidden font-sans border-gray-100">
        {/* AESTHETIC GRID BACKGROUND */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ 
            backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", 
            backgroundSize: "80px 80px",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 90%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 90%, transparent 100%)"
          }} 
        />

        <div className="max-w-[1450px] mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-20">
            <h2 className="text-[clamp(36px,5vw,64px)] font-black tracking-tighter leading-[1.05] text-black">
              Engineering-grade tools <br />
              <span className="text-black">for </span>
              <span className="relative inline-block">
                <span className="absolute inset-y-1 -inset-x-2 bg-[#FFF200] rounded-lg shadow-sm"></span>
                <span className="relative px-1 text-black">indisputable truth.</span>
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] lg:auto-rows-[350px]">
            
            {/* FEATURE 1: 4D VISUAL TIMELINE (Large) */}
            <div className="md:col-span-2 md:row-span-2 group relative rounded-[40px] bg-black overflow-hidden border border-white/10 shadow-2xl transition-all duration-700 hover:shadow-[#FFF200]/10">
              <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700">
                 <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070" className="w-full h-full object-cover grayscale" alt="Timeline" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              
              <div className="absolute bottom-10 left-10 right-10 z-20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#FFF200] flex items-center justify-center text-black">
                    <Clock size={24} strokeWidth={2.5} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FFF200]">Module 01: 4D Historical Sync</span>
                </div>
                <h3 className="text-4xl font-black text-white tracking-tighter mb-4">Visual Timeline <br/>Intelligence</h3>
                <p className="text-gray-400 font-medium max-w-md leading-relaxed">
                  Scrub through months of site evolution with a single slider. Every data point is georeferenced and time-linked for perfect audit-readiness.
                </p>
              </div>
              
              {/* Scrubbing HUD Overlay */}
              <div className="absolute top-10 right-10 flex gap-1 items-end h-16 hidden lg:flex">
                {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                  <div key={i} className="w-1.5 bg-[#FFF200]/30 rounded-full overflow-hidden">
                    <div className="w-full bg-[#FFF200] animate-pulse" style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }} />
                  </div>
                ))}
              </div>
            </div>

            {/* FEATURE 2: REMOTE MEASUREMENTS */}
            <div className="group p-8 lg:p-10 rounded-[40px] bg-gray-50 border border-gray-100 flex flex-col justify-between transition-all duration-500 hover:bg-white hover:shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-gray-200 flex items-center justify-center mb-8 group-hover:bg-[#FFF200] transition-colors duration-500">
                  <Ruler size={22} className="text-black" />
                </div>
                <h3 className="text-2xl font-black tracking-tight text-black mb-3">Precision <br/>Surveying</h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">
                  Measure distances, volumes, and elevations directly from the portal with sub-millimeter accuracy.
                </p>
              </div>
              <div className="pt-6 border-t border-gray-200/50 flex justify-between items-center">
                 <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Error Rate &lt; 1%</span>
                 <ArrowRight size={18} className="text-black opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all" />
              </div>
            </div>

            {/* FEATURE 3: BIM OVERLAY */}
            <div className="group p-8 lg:p-10 rounded-[40px] bg-black text-white overflow-hidden relative transition-all duration-500 hover:shadow-2xl">
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity" style={{ backgroundImage: "radial-gradient(#FFF200 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FFF200] flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(255,242,0,0.3)]">
                    <Layers size={22} className="text-black" />
                  </div>
                  <h3 className="text-2xl font-black tracking-tight mb-3">Blueprints on <br/>Reality</h3>
                  <p className="text-gray-400 text-sm font-medium leading-relaxed">
                    Instantly layer CAD and BIM models on top of live site scans to spot deviations before they become demolitions.
                  </p>
                </div>
                <div className="flex justify-end">
                   <div className="px-3 py-1 rounded-lg border border-white/10 text-[9px] font-mono text-[#FFF200] uppercase tracking-widest bg-white/5">
                     BIM Level 300+
                   </div>
                </div>
              </div>
            </div>

            {/* FEATURE 4: AUTO-REPORTING (Wide) */}
            <div className="md:col-span-3 group p-8 lg:p-12 rounded-[40px] bg-gray-50 border border-gray-100 flex flex-col md:flex-row gap-10 items-center transition-all duration-500 hover:bg-white hover:shadow-xl">
              <div className="flex-1">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-gray-200 flex items-center justify-center mb-8 group-hover:bg-[#FFF200] transition-colors">
                  <Database size={26} className="text-black" />
                </div>
                <h3 className="text-3xl font-black tracking-tight text-black mb-4">Autonomous Reporting</h3>
                <p className="text-gray-500 font-medium leading-relaxed max-w-lg">
                  Stop wasting days on manual progress reports. DEX auto-generates visual, audit-ready PDF documentation for every stakeholder meeting and invoice cycle.
                </p>
              </div>
              
              {/* Report Mockup Visual */}
              <div className="w-full md:w-72 bg-white rounded-2xl border border-gray-200 p-6 shadow-sm transform group-hover:rotate-[-2deg] transition-transform duration-500">
                <div className="flex items-center justify-between mb-6">
                   <div className="h-2 w-16 bg-gray-100 rounded" />
                   <div className="h-2 w-8 bg-[#FFF200] rounded" />
                </div>
                <div className="space-y-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="flex gap-3">
                      <div className="w-8 h-8 rounded bg-gray-50 border border-gray-100" />
                      <div className="flex-1 space-y-2 pt-1">
                        <div className="h-1.5 w-full bg-gray-100 rounded" />
                        <div className="h-1.5 w-2/3 bg-gray-50 rounded" />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 flex justify-center">
                  <div className="h-8 w-full rounded bg-black flex items-center justify-center">
                    <span className="text-[9px] font-black text-[#FFF200] uppercase tracking-widest">Generate Report</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

{/* ═══ IMPLEMENTATION: THE FRICTIONLESS PATH ═══ */}
      <section className="relative py-32 bg-white overflow-hidden font-sans border-gray-100">
        {/* AESTHETIC GRID BACKGROUND */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ 
            backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", 
            backgroundSize: "80px 80px",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 90%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 90%, transparent 100%)"
          }} 
        />

        <div className="max-w-[1450px] mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-white text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-6 shadow-sm">
                Deployment Protocol
              </div>
              <h2 className="text-[clamp(36px,5vw,64px)] font-black tracking-tighter leading-[1.05] text-black">
                From site reality to <br />
                <span className="relative inline-block">
                <span className="absolute inset-y-1 -inset-x-2 bg-[#FFF200] rounded-lg shadow-sm"></span>
                <span className="relative px-1 text-black">decision clarity.</span>
              </span>
              </h2>
            </div>
            <p className="text-lg text-gray-500 font-medium max-w-sm lg:text-right leading-relaxed">
              We don't just give you a login. We handle the capture, the processing, and the intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {[
              {
                step: "01",
                title: "Reality Capture",
                desc: "Our certified pilots or your on-site teams capture the site using drones, 360° cameras, or laser scanners.",
                icon: <Camera size={24} />
              },
              {
                step: "02",
                title: "AI Processing",
                desc: "Raw data is uploaded to DEX, where our proprietary AI engine aligns visuals with your CAD/BIM models.",
                icon: <Cpu size={24} />
              },
              {
                step: "03",
                title: "Insight Extraction",
                desc: "The system automatically flags deviations, calculates volumes, and updates your progress dashboard.",
                icon: <BarChart3 size={24} />
              },
              {
                step: "04",
                title: "Executive Action",
                desc: "Your team makes informed decisions, approves invoices, and resolves snags using a single digital truth.",
                icon: <ShieldCheck size={24} />
              }
            ].map((item, i) => (
              <div key={i} className="group relative flex flex-col p-10 rounded-[40px] bg-white border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                <div className="flex justify-between items-start mb-12">
                  <div className="text-4xl font-black tracking-tighter text-gray-100 group-hover:text-[#FFF200] transition-colors duration-500">
                    {item.step}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-black group-hover:bg-black group-hover:text-[#FFF200] transition-all duration-500">
                    {item.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-black text-black mb-4 tracking-tight">
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

          
          </div>
      </section>


    </div>
  );
};

export default Platform;