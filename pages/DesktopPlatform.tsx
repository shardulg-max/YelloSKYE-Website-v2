import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Play, 
  Layers, MonitorPlay,
  Clock, 
  Zap, 
  Shield, 
  Ruler, 
  Database, DownloadCloud, FileOutput,
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
<section className="pt-32 md:pt-40 pb-8 w-full bg-white relative font-sans overflow-hidden flex flex-col items-center">
  
  {/* Premium Fade Grid Background */}
  <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
       style={{ 
         backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", 
         backgroundSize: "80px 80px",
         maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
         WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 100%)"
       }} />
       
  <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10 w-full">
    
    {/* CENTERED TEXT HEADER: Pulled down from navbar */}
    <div className="flex flex-col items-center text-center mb-6 lg:mb-8">
      <h1 className="text-[clamp(40px,5.5vw,82px)] font-black leading-[1.05] tracking-tighter text-[#0A0A0A] mb-4 lg:mb-6">
        AI-driven <span className="relative inline-block">
          <span className="absolute inset-y-1 lg:inset-y-1.5 -inset-x-3 bg-[#FFF200] rounded-xl shadow-sm"></span>
          <span className="relative text-black">site intelligence.</span>
        </span>
      </h1>
      
      <p className="text-[16px] md:text-[18px] font-medium leading-relaxed text-gray-500 tracking-tight max-w-2xl mx-auto">
        Turn scattered data into a live digital twin. One platform for complete project visibility and indisputable certainty.
      </p>
    </div>

    {/* BOTTOM VISUAL: Scaled to accommodate horizontal tablet and larger mobile */}
    <div className="relative w-full max-w-[1250px] mx-auto flex justify-center mt-8 lg:mt-10">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-[#FFF200] rounded-full blur-[140px] opacity-15 pointer-events-none z-0"></div>

      {/* The Container */}
      <div className="relative w-full flex items-end justify-center">

        {/* 1. TABLET - HORIZONTAL (Left) */}
        {/* Adjusted w-[42%] and aspect-[4/3] for horizontal orientation */}
        <div className="absolute left-0 lg:-left-[8%] bottom-0 w-[42%] lg:w-[38%] z-20 transition-transform duration-500 hover:-translate-y-2 group">
          <div className="w-full aspect-[4/3] bg-[#111] rounded-[20px] lg:rounded-[32px] p-1.5 lg:p-2.5 shadow-[-30px_10px_60px_rgba(0,0,0,0.25)] ring-1 ring-white/20 overflow-hidden border border-[#333]">
            <div className="w-full h-full bg-[#080808] rounded-[14px] lg:rounded-[24px] overflow-hidden relative border border-white/10">
              <img src="https://ik.imagekit.io/saxybrgkp/MME/dex%20tablet.png?updatedAt=1774002052734" alt="Tablet Horizontal" className="absolute inset-0 w-full h-full object-cover opacity-90" />
            </div>
          </div>
        </div>

        {/* 2. LAPTOP (Center) */}
        <div className="relative w-[75%] lg:w-[72%] z-10 transition-transform duration-500 group flex flex-col items-center">
          <div className="w-full aspect-[16/10] bg-[#111] rounded-t-[16px] lg:rounded-t-[32px] p-2 lg:p-3 shadow-[0_30px_80px_rgba(0,0,0,0.3)] ring-1 ring-white/20 relative overflow-hidden border-t border-l border-r border-[#333]">
             <div className="w-full h-full bg-[#080808] rounded-t-[10px] lg:rounded-t-[24px] rounded-b-sm overflow-hidden relative border border-white/10">
                <img src="https://ik.imagekit.io/saxybrgkp/MME/DEx%20laptop.png?updatedAt=1774002052826" alt="Desktop" className="absolute inset-0 w-full h-full object-cover opacity-95" />
             </div>
          </div>
          <div className="w-[115%] h-3 lg:h-5 bg-gradient-to-b from-[#f0f0f0] via-[#d4d4d4] to-[#a3a3a3] rounded-b-[12px] lg:rounded-b-[24px] relative shadow-[0_20px_50px_rgba(0,0,0,0.4)] border-t border-white flex justify-center items-start pt-0.5">
             <div className="w-[15%] h-1 lg:h-1.5 bg-[#b3b3b3] rounded-b-md shadow-inner"></div>
          </div>
        </div>

        {/* 3. MOBILE PHONE - THIN BEZEL (Right) */}
<div className="absolute right-0 lg:-right-[2%] bottom-0 w-[26%] lg:w-[18%] z-40 transition-transform duration-500 hover:-translate-y-2 group">
  {/* Reduced padding from p-2/p-3 to p-1 lg:p-1.5 for a thinner border */}
  <div className="w-full aspect-[10/20] bg-[#111] rounded-[24px] lg:rounded-[48px] p-1 lg:p-1.5 shadow-[30px_10px_60px_rgba(0,0,0,0.3)] overflow-hidden relative border border-neutral-800">
    
    {/* Inner Container: Uses -1px margin to tuck under the bezel and kill the white line */}
    <div className="w-[calc(100%+2px)] h-[calc(100%+2px)] -ml-[1px] -mt-[1px] bg-[#080808] rounded-[18px] lg:rounded-[36px] overflow-hidden relative">
      <img 
        src="https://ik.imagekit.io/saxybrgkp/MME/dex%20mobile.png?updatedAt=1774002052407" 
        alt="Mobile Thin Bezel" 
        className="absolute inset-0 w-full h-full object-cover opacity-95" 
      />
    </div>
  </div>
</div>

      </div>
    </div>

    {/* FEATURES ROW: Tightened margin to pull it up into the fold */}
    <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10 mt-10 lg:mt-12 py-6 border-gray-100 w-full">
      {["Live Digital Twin", "Automated Analytics", "Seamless Collaboration"].map((feature, index) => (
        <div key={index} className="flex items-center gap-2">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFF200" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span className="text-[12px] lg:text-[14px] font-bold text-gray-500 uppercase tracking-widest">
            {feature}
          </span>
        </div>
      ))}
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
<Link 
  to="/book-demo" 
  className="mt-12 w-full py-5 bg-[#FFF200] text-black font-black uppercase text-xs tracking-widest rounded-2xl flex items-center justify-center gap-3 transition-transform hover:scale-[1.02] active:scale-95"
>
  Experience the Difference <ArrowRight size={16} strokeWidth={3} />
</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    {/* ════════════════════════════════════════
    DEX CORE CAPABILITIES: THE HERO FEATURES
════════════════════════════════════════ */}
<section className="relative w-full bg-white py-24 lg:py-32 font-sans overflow-hidden">
  
  <div 
    className="absolute inset-0 opacity-[0.03] pointer-events-none" 
    style={{ 
      backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", 
      backgroundSize: "80px 80px",
      maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 90%, transparent 100%)",
      WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 90%, transparent 100%)"
    }} 
  />

  <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
    
    {/* SECTION HEADER */}
    <div className="flex flex-col items-center text-center mb-24 lg:mb-32">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-[10px] font-black tracking-[0.2em] text-gray-500 mb-6 uppercase shadow-sm">
        <span className="w-2 h-2 rounded-full bg-[#FFF200] shadow-[0_0_8px_rgba(255,242,0,0.8)]"></span>
        The DEX Platform
      </div>
      
      <h2 className="text-4xl md:text-6xl lg:text-[72px] font-black tracking-tighter text-[#0A0A0A] leading-[1] mb-8">
        Ground Truth <br className="hidden md:block" />
        <span className="relative inline-block mt-2">
          <span className="absolute -inset-y-1 md:-inset-y-2 -inset-x-4 bg-[#FFF200] rounded-[16px] shadow-sm transform -skew-x-2"></span>
          <span className="relative z-10 text-black">to the Desktop.</span>
        </span>
      </h2>
      
      <p className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed max-w-4xl">
        Stop managing from the rearview mirror. Centralize every photo, scan, and BIM model into one unified intelligence layer for zero-guesswork decisions.
      </p>
    </div>

    {/* FEATURE 1: INDEPENDENT VERIFICATION (Image Right) */}
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32 lg:mb-40">
      <div className="order-2 lg:order-1 flex flex-col justify-center">
        <div className="w-14 h-14 rounded-2xl bg-[#0A0A0A] text-[#FFF200] flex items-center justify-center mb-8 shadow-lg">
          <MonitorPlay size={28} strokeWidth={2.5} />
        </div>
        <h4 className="text-[12px] font-black text-gray-400 uppercase tracking-[0.2em] mb-3">Site Intelligence</h4>
        <h3 className="text-4xl lg:text-5xl font-black text-[#0A0A0A] tracking-tight mb-6 leading-[1.1]">See every inch. <br/>From anywhere.</h3>
        <p className="text-xl text-gray-500 font-medium leading-relaxed mb-8">
          Bridge the gap between site and boardroom. Deploy autonomous robotics to capture high-res visuals and 3D maps, reducing manual site visits by up to 80%.
        </p>
        <ul className="space-y-4">
          {['Independent Site Updates', 'Survey-Grade Reality Capture', 'High-Res Interactive Maps'].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-black font-bold">
              <div className="w-5 h-5 rounded-full bg-[#FFF200] flex items-center justify-center text-black">
                <Check size={12} strokeWidth={3} />
              </div>
              {item}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="order-1 lg:order-2 w-full aspect-[4/3] bg-[#050505] rounded-[32px] lg:rounded-[40px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)] border border-gray-100 overflow-hidden relative group">
        <div className="absolute top-0 inset-x-0 h-10 bg-[#111] border-b border-gray-800 flex items-center px-5 z-20">
          <div className="flex gap-2"><div className="w-2.5 h-2.5 rounded-full bg-gray-700"></div><div className="w-2.5 h-2.5 rounded-full bg-gray-700"></div><div className="w-2.5 h-2.5 rounded-full bg-gray-700"></div></div>
        </div>
        <img src="https://ik.imagekit.io/saxybrgkp/MME/234.png" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-[10s] mt-10" alt="3D Digital Twin" />
        <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-md border border-white/10 text-white px-4 py-2 rounded-xl flex items-center gap-2 shadow-xl z-20">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
          <span className="text-[10px] font-bold tracking-widest uppercase">Live View Active</span>
        </div>
      </div>
    </div>

    {/* FEATURE 2: DESIGN VALIDATION (Image Left) */}
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32 lg:mb-40">
      <div className="w-full aspect-[4/3] bg-[#050505] rounded-[32px] lg:rounded-[40px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)] border border-gray-100 overflow-hidden relative group">
        <div className="absolute top-0 inset-x-0 h-10 bg-[#111] border-b border-gray-800 flex items-center px-5 z-20">
          <div className="flex gap-2"><div className="w-2.5 h-2.5 rounded-full bg-gray-700"></div><div className="w-2.5 h-2.5 rounded-full bg-gray-700"></div><div className="w-2.5 h-2.5 rounded-full bg-gray-700"></div></div>
        </div>
        <img src="https://ik.imagekit.io/saxybrgkp/MME/Website%20Visuals%20Overlay%20(1).png" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-[10s] mt-10" alt="BIM Overlay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/90 backdrop-blur-xl border border-[#FFF200]/30 text-white p-5 rounded-2xl shadow-2xl flex flex-col items-center text-center z-20">
           <AlertTriangle size={28} className="text-[#FFF200] mb-2" />
           <h4 className="text-base font-black tracking-tight mb-1">Clash Detected</h4>
           <p className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">Deviation Analysis</p>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <div className="w-14 h-14 rounded-2xl bg-[#0A0A0A] text-[#FFF200] flex items-center justify-center mb-8 shadow-lg">
          <Layers size={28} strokeWidth={2.5} />
        </div>
        <h4 className="text-[12px] font-black text-gray-400 uppercase tracking-[0.2em] mb-3">Validation</h4>
        <h3 className="text-4xl lg:text-5xl font-black text-[#0A0A0A] tracking-tight mb-6 leading-[1.1]">Validate design <br/>against reality.</h3>
        <p className="text-xl text-gray-500 font-medium leading-relaxed mb-8">
          Catch structural drift before the concrete is poured. Overlay CAD and BIM models on live site photos to identify mismatches and prevent rework.
        </p>
        <ul className="space-y-4">
          {['Automatic Deviation Flagging', 'Sub-Centimeter Accuracy', 'Direct Revit/AutoCAD Export'].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-black font-bold">
              <div className="w-5 h-5 rounded-full bg-[#FFF200] flex items-center justify-center text-black">
                <Check size={12} strokeWidth={3} />
              </div>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* FEATURE 3: QUANTITY ANALYTICS (Image Right) */}
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32 lg:mb-40">
      <div className="order-2 lg:order-1 flex flex-col justify-center">
        <div className="w-14 h-14 rounded-2xl bg-[#0A0A0A] text-[#FFF200] flex items-center justify-center mb-8 shadow-lg">
          <BarChart3 size={28} strokeWidth={2.5} />
        </div>
        <h4 className="text-[12px] font-black text-gray-400 uppercase tracking-[0.2em] mb-3">quantification</h4>
        <h3 className="text-4xl lg:text-5xl font-black text-[#0A0A0A] tracking-tight mb-6 leading-[1.1]">Protect margins <br/>with data.</h3>
        <p className="text-xl text-gray-500 font-medium leading-relaxed mb-8">
          Verify every cubic meter. Automatically track earthwork volumes and material consumption to ensure you only pay for work that is actually done.
        </p>
        <ul className="space-y-4">
          {['Independent Volume Checks', 'Real-Time Cut/Fill Maps', 'Automated Progress Analytics'].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-black font-bold">
              <div className="w-5 h-5 rounded-full bg-[#FFF200] flex items-center justify-center text-black">
                <Check size={12} strokeWidth={3} />
              </div>
              {item}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="order-1 lg:order-2 w-full aspect-[4/3] bg-[#0A0A0A] rounded-[32px] lg:rounded-[40px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)] border border-gray-100 overflow-hidden relative flex flex-col items-center justify-center p-8 group">
         <div className="w-full max-w-md bg-[#111] border border-gray-800 rounded-[24px] p-8 shadow-2xl group-hover:-translate-y-2 transition-transform duration-500 relative z-10">
            <h4 className="text-white font-black text-xl mb-6">Earthwork Volume</h4>
            <div className="flex items-end gap-3 mb-8">
              <span className="text-6xl font-black text-[#FFF200] tracking-tighter">12,450</span>
              <span className="text-xl text-gray-500 font-bold mb-1.5">m³</span>
            </div>
            <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden mb-3">
              <div className="h-full bg-[#FFF200] w-[78%] rounded-full relative"></div>
            </div>
            <div className="flex justify-between text-[10px] font-bold text-gray-500 uppercase tracking-widest">
              <span>Excavated</span>
              <span className="text-white">78% Target Reached</span>
            </div>
         </div>
         <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "linear-gradient(to right, #FFF 1px, transparent 1px), linear-gradient(to bottom, #FFF 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      </div>
    </div>

    {/* FEATURE 4: EXECUTIVE DASHBOARD (Image Left) */}
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <div className="w-full aspect-[4/3] bg-[#050505] rounded-[32px] lg:rounded-[40px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)] border border-gray-100 overflow-hidden relative flex items-center justify-center group">
         <img src="https://ik.imagekit.io/saxybrgkp/MME/234.png" className="absolute inset-0 w-full h-full object-cover opacity-30 blur-[2px]" alt="Background" />
         <div className="relative z-20 bg-white rounded-2xl p-6 w-[85%] max-w-sm shadow-2xl group-hover:scale-105 transition-transform duration-500">
           <div className="flex items-center gap-4 mb-5">
             <div className="w-12 h-12 rounded-xl bg-[#FFF200] text-black flex items-center justify-center shadow-md shrink-0">
               <ShieldCheck size={24} />
             </div>
             <div>
               <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Boardroom Status</div>
               <div className="text-sm font-bold text-gray-900 leading-tight">Visual Proof of Progress</div>
             </div>
           </div>
           <div className="w-full bg-gray-50 border border-gray-100 rounded-xl p-4 text-[11px] font-bold text-gray-500">
              <div className="flex justify-between mb-2"><span>Project Alpha</span> <span className="text-black">On Schedule</span></div>
              <div className="flex justify-between"><span>Audit Trail</span> <span className="text-[#D4C900]">Export Ready</span></div>
           </div>
         </div>
      </div>

      <div className="flex flex-col justify-center">
        <div className="w-14 h-14 rounded-2xl bg-[#0A0A0A] text-[#FFF200] flex items-center justify-center mb-8 shadow-lg">
          <ShieldCheck size={28} strokeWidth={2.5} />
        </div>
        <h4 className="text-[12px] font-black text-gray-400 uppercase tracking-[0.2em] mb-3">Accountability</h4>
        <h3 className="text-4xl lg:text-5xl font-black text-[#0A0A0A] tracking-tight mb-6 leading-[1.1]">Boardroom-ready <br/>transparency.</h3>
        <p className="text-xl text-gray-500 font-medium leading-relaxed mb-8">
          Eliminate disputes with an indisputable visual record. Centralize site reports, maps, and analytics in one unified dashboard for stakeholders and investors.
        </p>
        <ul className="space-y-4">
          {['Dated Historical Photo Logs', 'Custom Executive Reporting', 'Unified Portfolio Oversight'].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-black font-bold">
              <div className="w-5 h-5 rounded-full bg-[#FFF200] flex items-center justify-center text-black">
                <Check size={12} strokeWidth={3} />
              </div>
              {item}
            </li>
          ))}
        </ul>
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

{/* ════════════════════════════════════════
          NEW: COMPATIBLE WITH DESIGN TOOLS (ANIMATED)
      ════════════════════════════════════════ */}
      <section 
        className="relative bg-white py-12 lg:py-16 overflow-hidden font-sans"
        style={{
          maskImage: "linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)"
        }}
      >
        
        {/* Custom Complex Animations */}
        <style>{`
          @keyframes float-1 {
            0%, 100% { transform: translate(-50%, -50%) translateY(0px) rotate(-2deg); }
            50% { transform: translate(-50%, -50%) translateY(-12px) rotate(2deg); }
          }
          @keyframes float-2 {
            0%, 100% { transform: translate(-50%, -50%) translateY(0px) rotate(3deg); }
            50% { transform: translate(-50%, -50%) translateY(-10px) rotate(-1deg); }
          }
          @keyframes float-3 {
            0%, 100% { transform: translate(-50%, -50%) translateY(0px) rotate(-4deg); }
            50% { transform: translate(-50%, -50%) translateY(-14px) rotate(1deg); }
          }
          @keyframes float-4 {
            0%, 100% { transform: translate(-50%, -50%) translateY(0px) rotate(5deg); }
            50% { transform: translate(-50%, -50%) translateY(-8px) rotate(-3deg); }
          }
          @keyframes data-flow-out {
            from { stroke-dashoffset: 24; }
            to { stroke-dashoffset: 0; }
          }
          @keyframes radar-ping {
            0% { transform: scale(0.5); opacity: 0.8; }
            100% { transform: scale(2.5); opacity: 0; }
          }
          .animate-float-1 { animation: float-1 6s ease-in-out infinite; }
          .animate-float-2 { animation: float-2 5s ease-in-out infinite; }
          .animate-float-3 { animation: float-3 7s ease-in-out infinite; }
          .animate-float-4 { animation: float-4 6.5s ease-in-out infinite; }
          .animate-data-flow { animation: data-flow-out 1s linear infinite; }
          .animate-radar { animation: radar-ping 3s cubic-bezier(0.0, 0.2, 0.8, 1) infinite; }
          .animate-radar-delayed { animation: radar-ping 3s cubic-bezier(0.0, 0.2, 0.8, 1) infinite 1.5s; }
        `}</style>

        {/* Global Section Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
          
          {/* FLEX-STRETCH CONTAINER: Forces exact equal height for Left and Right */}
          <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-16">

            {/* ════════════════════════════════════════
                LEFT: COMPLEX ANIMATED VISUAL (Stretches to match height)
            ════════════════════════════════════════ */}
            <div className="order-2 lg:order-1 relative lg:w-[50%] w-full rounded-[40px] border border-gray-200 shadow-[0_30px_80px_rgba(0,0,0,0.08)] overflow-hidden group bg-white flex flex-col min-h-[450px]">
              
              {/* Inner Blueprint Grid */}
              <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "linear-gradient(to right, #E5E7EB 1px, transparent 1px), linear-gradient(to bottom, #E5E7EB 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

              {/* Subtle Center Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#FFF200]/10 blur-[80px] rounded-full pointer-events-none z-0"></div>

              {/* SVG Data Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                {/* Base grey tracks */}
                <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="#F3F4F6" strokeWidth="2" />
                <line x1="50%" y1="50%" x2="80%" y2="35%" stroke="#F3F4F6" strokeWidth="2" />
                <line x1="50%" y1="50%" x2="30%" y2="70%" stroke="#F3F4F6" strokeWidth="2" />
                <line x1="50%" y1="50%" x2="75%" y2="75%" stroke="#F3F4F6" strokeWidth="2" />

                {/* Animated Yellow Data Packets */}
                <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="#D4C900" strokeWidth="2.5" strokeDasharray="4 20" className="animate-data-flow" />
                <line x1="50%" y1="50%" x2="80%" y2="35%" stroke="#D4C900" strokeWidth="2.5" strokeDasharray="4 20" className="animate-data-flow" />
                <line x1="50%" y1="50%" x2="30%" y2="70%" stroke="#D4C900" strokeWidth="2.5" strokeDasharray="4 20" className="animate-data-flow" />
                <line x1="50%" y1="50%" x2="75%" y2="75%" stroke="#D4C900" strokeWidth="2.5" strokeDasharray="4 20" className="animate-data-flow" />
              </svg>

              {/* Ecosystem Nodes Container */}
              <div className="absolute inset-0 z-20 pointer-events-none">
                  
                  {/* Central Hub: YelloSKYE */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-20 h-20 bg-[#0A0A0A] rounded-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-gray-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                    {/* Expanding Radar Rings */}
                    <div className="absolute inset-0 rounded-[20px] border-2 border-[#FFF200]/40 animate-radar"></div>
                    <div className="absolute inset-0 rounded-[20px] border-2 border-[#FFF200]/20 animate-radar-delayed"></div>
                    <DownloadCloud size={28} className="text-[#FFF200] relative z-10" />
                  </div>
                  
                  {/* Node 1: AutoCAD */}
                  <div className="absolute top-[25%] left-[25%] bg-white p-2.5 pr-4 rounded-[16px] border border-gray-200 shadow-[0_15px_35px_rgba(0,0,0,0.06)] flex items-center gap-3 animate-float-1">
                    <div className="w-8 h-8 bg-[#0696D7]/10 rounded-[10px] flex items-center justify-center border border-[#0696D7]/20"><Box size={16} className="text-[#0696D7]"/></div>
                    <span className="text-black font-black text-xs tracking-tight">AutoCAD</span>
                  </div>
                  
                  {/* Node 2: Revit */}
                  <div className="absolute top-[35%] left-[80%] bg-white p-2.5 pr-4 rounded-[16px] border border-gray-200 shadow-[0_15px_35px_rgba(0,0,0,0.06)] flex items-center gap-3 animate-float-2">
                    <div className="w-8 h-8 bg-[#4B55E8]/10 rounded-[10px] flex items-center justify-center border border-[#4B55E8]/20"><Layers size={16} className="text-[#4B55E8]"/></div>
                    <span className="text-black font-black text-xs tracking-tight">Revit</span>
                  </div>
                  
                  {/* Node 3: ArcGIS */}
                  <div className="absolute top-[70%] left-[30%] bg-white p-2.5 pr-4 rounded-[16px] border border-gray-200 shadow-[0_15px_35px_rgba(0,0,0,0.06)] flex items-center gap-3 animate-float-3">
                    <div className="w-8 h-8 bg-[#10B981]/10 rounded-[10px] flex items-center justify-center border border-[#10B981]/20"><MapPin size={16} className="text-[#10B981]"/></div>
                    <span className="text-black font-black text-xs tracking-tight">ArcGIS</span>
                  </div>

                  {/* Node 4: Navisworks */}
                  <div className="absolute top-[75%] left-[75%] bg-white p-2.5 pr-4 rounded-[16px] border border-gray-200 shadow-[0_15px_35px_rgba(0,0,0,0.06)] flex items-center gap-3 animate-float-4">
                    <div className="w-8 h-8 bg-[#D97706]/10 rounded-[10px] flex items-center justify-center border border-[#D97706]/20"><Activity size={16} className="text-[#D97706]"/></div>
                    <span className="text-black font-black text-xs tracking-tight">Navisworks</span>
                  </div>
              </div>

              {/* Bottom Status Bar (Pipeline Status) */}
              <div className="absolute bottom-5 left-5 right-5 z-30 bg-[#0A0A0A] px-5 py-3.5 rounded-[16px] border border-gray-800 flex justify-between items-center shadow-2xl">
                 <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Pipeline Status</span>
                 <div className="flex items-center gap-2">
                   <span className="text-[#FFF200] text-xs font-bold">Export Ready</span>
                   <Check size={14} className="text-[#FFF200]" strokeWidth={4} />
                 </div>
              </div>

            </div>

            {/* ════════════════════════════════════════
                RIGHT: COPY & FEATURE CARDS (Dictates overall height)
            ════════════════════════════════════════ */}
            <div className="order-1 lg:order-2 lg:w-[50%] flex flex-col justify-center py-2">
              
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-5 shadow-sm">
                  Seamless Integration
                </div>
                
                <h2 className="text-[clamp(32px,3.5vw,46px)] font-black tracking-tighter leading-[1.1] text-black mb-5">
                  Compatible with your <br />
                  design tools.
                </h2>
                
                <p className="text-base text-gray-500 font-medium leading-relaxed mb-8 max-w-[420px]">
                  Export survey data in formats your engineers and architects already use. No need to change workflows—just add better data.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {[
                   { icon: <Box size={16}/>, title: "CAD Exports", desc: "Direct to DWG / DXF." },
                   { icon: <Layers size={16}/>, title: "BIM Integration", desc: "Point clouds in RCP, LAS, LAZ." },
                   { icon: <MapPin size={16}/>, title: "GIS Platforms", desc: "GeoTIFF ortho-mosaics." },
                   { icon: <FileOutput size={16}/>, title: "3D Mesh", desc: "OBJ & FBX visualization." }
                 ].map((card, i) => (
                   <div key={i} className="bg-white border border-gray-200 p-5 rounded-[20px] shadow-sm hover:shadow-lg hover:border-[#FFF200] hover:-translate-y-1 transition-all duration-300 group">
                      {/* Icons are Yellow by default */}
                      <div className="w-10 h-10 rounded-[12px] bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[#D4C900] mb-3 group-hover:bg-gray-50 transition-colors duration-300">
                        {card.icon}
                      </div>
                      <h4 className="font-black text-black text-sm tracking-tight mb-1">{card.title}</h4>
                      <p className="text-xs text-gray-500 font-medium">{card.desc}</p>
                   </div>
                 ))}
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