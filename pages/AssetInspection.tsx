import React, { useState, useEffect } from "react";
import { 
  X, Check, DownloadCloud, Globe, Layers, MapPin, Mail, Timer, Activity,
  Twitter, Linkedin, Youtube, Instagram, BarChart, History,
  Box, Camera, Clock, AlertTriangle, Unplug, Link, ArrowRight,
  LayoutDashboard, Users, Zap, ShieldCheck, Route, Sparkles,
  RefreshCw, Search, HardHat, FileCheck, Eye, ClipboardCheck, Building2,
  ArrowUpRight, Sun, Factory, Building,
} from "lucide-react";

// ─── DATA & NEW HERO COMPONENT ──────────────────────────────────────────────────

const INSPECTION_FEATURES = [
  {
    id: 'chimneys',
    label: 'Chimneys',
    title: 'Vertical Stack Inspection',
    desc: 'Identify thermal anomalies and concrete spalling on towering assets. Catch structural degradation early to prevent catastrophic failures and regulatory fines.',
    fallbackImg: 'https://ik.imagekit.io/saxybrgkp/MME/Inspection/chimney%20v4.png?updatedAt=1773911458883',
  },
  {
    id: 'bridges',
    label: 'Bridges',
    title: 'Structural Integrity Scans',
    desc: 'Map expansive bridge networks with survey-grade precision. Document load-bearing joints and surface cracks to proactively schedule preventative maintenance.',
    fallbackImg: 'https://ik.imagekit.io/saxybrgkp/MME/bridge.png',
  },
  {
    id: 'windmills',
    label: 'Windmills',
    title: 'Turbine Blade Diagnostics',
    desc: 'Run rapid, high-resolution sweeps of turbine blades. Detect lightning strikes, leading-edge erosion, and micro-fractures to optimize energy yield.',
    fallbackImg: 'https://ik.imagekit.io/saxybrgkp/MME/windmill.png',
  },
  {
    id: 'roofs',
    label: 'Roofs',
    title: 'Expansive Roof Mapping',
    desc: 'Deploy RGB and thermal sensors over commercial facilities. Locate water pooling, membrane tears, and failing solar cells before they cause operational leaks.',
    fallbackImg: 'https://ik.imagekit.io/saxybrgkp/MME/Inspection/roof.png',
  }
];

export const InspectionHero: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % INSPECTION_FEATURES.length);
    }, 4500);
    return () => clearTimeout(timer);
  }, [activeIndex, isHovered]);

  return (
    // 1. TIGHTENED TOP/BOTTOM PADDING
    <section className="pt-24 lg:pt-24 pb-8 bg-white relative overflow-hidden font-sans border-b border-gray-50">
      
      <style>{`
        @keyframes hero-progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", 
             backgroundSize: "80px 80px",
             maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)"
           }} />
           
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 relative z-10">
        
        {/* 2. TIGHTENED HEADER MARGINS */}
        <div className="grid lg:grid-cols-12 gap-4 lg:gap-8 mt-4 lg:mt-6 mb-4 items-center">
          <div className="lg:col-span-7 flex flex-col">
            <h1 className="text-[clamp(36px,4.5vw,56px)] font-black leading-[1] tracking-tighter text-black mb-3 lg:mb-4">
              Visual record of <br/>
              <span className="relative inline-block mt-1">
                <span className="absolute inset-y-1 -inset-x-2 bg-[#FFF200] rounded-[12px] transform -skew-x-2"></span>
                <span className="relative text-black">every surface.</span>
              </span>
            </h1>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] lg:text-[13px] font-bold text-gray-500 uppercase tracking-wider">
               <span className="flex items-center gap-1.5"><Check size={16} strokeWidth={4} className="text-[#FFF200]"/> Thermal Anomalies</span>
               <span className="flex items-center gap-1.5"><Check size={16} strokeWidth={4} className="text-[#FFF200]"/> Survey-Grade Precision</span>
               <span className="flex items-center gap-1.5"><Check size={16} strokeWidth={4} className="text-[#FFF200]"/> Remote Defect Tagging</span>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col lg:pl-10">
            <h2 className="text-lg lg:text-xl font-medium leading-[1.3] text-gray-800 tracking-tight">
              We use aerial capture technology to document your asset. Quality teams review issues remotely and tag defects in place.
            </h2>
          </div>
        </div>

        {/* TIGHTER PREMIUM INTERACTIVE VIEWER */}
        <div 
          className="bg-white rounded-[24px] lg:rounded-[36px] border border-gray-200 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.1)] p-2.5 lg:p-3"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Tabs - TIGHTENED MARGIN */}
          <div className="flex gap-2 overflow-x-auto hide-scrollbar scroll-smooth mb-2.5 lg:mb-3 px-1">
            {INSPECTION_FEATURES.map((feature, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveIndex(index)}
                  className={`whitespace-nowrap px-6 py-2 text-[11px] font-black uppercase tracking-widest transition-all duration-300 rounded-full border
                    ${isActive 
                      ? 'bg-black border-black text-[#FFF200] shadow-md scale-105' 
                      : 'bg-transparent border-gray-100 text-gray-400 hover:border-gray-300 hover:text-black'
                    }`}
                >
                  {feature.label}
                </button>
              );
            })}
          </div>

          {/* 3. INCREASED VIEWER HEIGHT: Changed lg:aspect-[2.6/1] to lg:aspect-[2.2/1] */}
          <div className="relative w-full aspect-[16/9] lg:aspect-[2.2/1] bg-black overflow-hidden rounded-[16px] lg:rounded-[24px] group mb-2.5 lg:mb-3">
            {INSPECTION_FEATURES.map((feature, index) => (
              <div 
                key={feature.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
                  ${activeIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}
                `}
              >
                <img 
                  src={feature.fallbackImg} 
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-[20s] ease-linear group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
            ))}
            
            <div className="absolute bottom-0 left-0 w-full h-[6px] bg-white/10 z-20 overflow-hidden">
               <div 
                 key={activeIndex} 
                 className="h-full bg-[#FFF200] shadow-[0_0_10px_#FFF200]"
                 style={{ 
                   animation: 'hero-progress 4.5s linear forwards',
                   animationPlayState: isHovered ? 'paused' : 'running'
                 }}
               />
            </div>
          </div>

          {/* Dynamic Caption Bar - TIGHTENED PADDING */}
          <div className="bg-gray-50 rounded-[16px] lg:rounded-[20px] p-4 lg:p-5 flex flex-col md:flex-row gap-4 lg:gap-6 justify-between items-start md:items-center border border-gray-100">
             <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-2 rounded-md bg-black text-[#FFF200] text-[10px] font-black uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFF200] animate-pulse"></span>
                  {INSPECTION_FEATURES[activeIndex].label} Active
                </div>
                <h3 className="text-xl lg:text-2xl font-black text-black leading-none tracking-tighter">
                  {INSPECTION_FEATURES[activeIndex].title}
                </h3>
             </div>
             <div className="md:max-w-md lg:max-w-lg md:text-right">
                <p className="text-sm lg:text-base text-gray-500 font-medium leading-relaxed">
                  {INSPECTION_FEATURES[activeIndex].desc}
                </p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};


// ─── ASSET USE CASES ──────────────────────────────────────────────────────────

export const AssetUseCases = () => {
  const USE_CASES = [
    {
      id: 'roofs',
      title: 'Commercial Solar & Roofs',
      tag: 'Thermal & Visual',
      desc: 'Execute comprehensive thermal mapping to spot water pooling, membrane damage, and solar panel defects before they cause outages.',
      icon: Sun,
    },
    {
      id: 'chimneys',
      title: 'Industrial Chimneys',
      tag: 'Vertical Scans',
      desc: 'Perform safely-distanced vertical stack scans to detect thermal anomalies, concrete spalling, and surface corrosion without scaffolding.',
      icon: Factory,
    },
    {
      id: 'linear',
      title: 'Linear Infrastructure',
      tag: 'Continuous Monitoring',
      desc: 'Monitor bridges, pipelines, and transmission corridors for structural integrity, focusing on joints and load-bearing components.',
      icon: Route,
    },
    {
      id: 'facades',
      title: 'Facades & Envelopes',
      tag: 'Millimeter-Accurate',
      desc: 'Run high-resolution scans of high-rise exteriors to identify hairline cracks, window seal failures, and cladding integrity.',
      icon: Building2,
    }
  ];

  return (
    <section className="relative bg-white py-20 lg:py-36 overflow-hidden font-sans border-gray-100">
      
      {/* Subtle Background Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ 
               backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", 
               backgroundSize: "80px 80px",
               maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
               WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)"
             }} />

      <div className="max-w-[1400px] mx-auto px-5 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gray-200 bg-white text-[10px] lg:text-[11px] font-black uppercase tracking-[0.2em] text-gray-500 mb-6 shadow-sm">
            <Sparkles size={14} className="text-[#D4C900]" /> Domain Expertise
          </div>
          
          <h2 className="text-[36px] sm:text-[44px] lg:text-[56px] font-black tracking-tighter leading-[1.05] text-[#0A0A0A] mb-6">
            Precision inspections for <br className="hidden sm:block"/>
            <span className="relative inline-block mt-2">
              <span className="absolute inset-y-2 -inset-x-3 bg-[#FFF200] rounded-xl shadow-sm transform -skew-x-2"></span>
              <span className="relative text-black px-1">every asset class.</span>
            </span>
          </h2>
          
          <p className="text-[16px] lg:text-[20px] text-gray-500 font-medium leading-relaxed">
            We adapt our flight paths, sensors, and AI models to the specific structural and thermal requirements of your critical infrastructure.
          </p>
        </div>

        {/* 2x2 Premium Bento Grid (Light Mode) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8">
          {USE_CASES.map((item, i) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id} 
                className="group relative bg-white border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.03)] rounded-[32px] p-8 lg:p-12 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:border-gray-200"
              >
                {/* Background Hover Glow */}
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#FFF200]/15 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="relative z-10 flex flex-col h-full">
                  
                  {/* Top Row: Icon & Tag */}
                  <div className="flex items-start justify-between mb-8 lg:mb-12">
                    <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#FFF200] group-hover:text-black group-hover:border-[#FFF200] group-hover:shadow-[0_10px_30px_rgba(255,242,0,0.4)] shrink-0">
                      <Icon size={28} strokeWidth={2.5} />
                    </div>
                    
                    <div className="px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-100 text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-gray-500 shrink-0">
                      {item.tag}
                    </div>
                  </div>

                  {/* Bottom Row: Copy */}
                  <div className="mt-auto">
                    <h3 className="text-2xl lg:text-[28px] font-black text-black tracking-tight mb-3 lg:mb-4 group-hover:text-[#D4C900] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-[14px] lg:text-[16px] text-gray-500 font-medium leading-relaxed max-w-md">
                      {item.desc}
                    </p>
                  </div>

                  {/* Subtle Interactive Element */}
                  <div className="absolute bottom-8 right-8 w-10 h-10 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-black">
                    <ArrowUpRight size={18} />
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

// ─── MAIN COMPONENT ────────────────────────────────────────────────────────────

export const AssetInspection: React.FC = () => {
  return (
    <div className="bg-white text-black font-sans selection:bg-[#FFF200] selection:text-black overflow-x-hidden">
      
      {/* ════════════════════════════════════════
          NEW INTERACTIVE HERO SECTION
      ════════════════════════════════════════ */}
      <InspectionHero />

      {/* ════════════════════════════════════════
          INSPECTION STATS ROW (MOBILE GRID)
      ════════════════════════════════════════ */}
      <section className="bg-white py-10 lg:py-16 border-gray-50 border-b">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-0 md:divide-x divide-gray-100">
            
            {[
              { l: "Risk Reduction", v: "90%", s: "Less Scaffolding" },
              { l: "Speed", v: "5x", s: "Faster Checks" },
              { l: "Accuracy", v: "100%", s: "Visual Coverage" },
              { l: "Compliance", v: "Zero", s: "Safety Risk" }
            ].map((stat, i) => (
              <div key={i} className={`flex flex-col items-center text-center px-2 lg:px-8`}>
                <div className="flex items-center gap-1.5 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FFF200]"></div>
                  <span className="text-[9px] lg:text-[10px] font-black uppercase tracking-widest text-gray-400">{stat.l}</span>
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tighter mb-1.5">{stat.v}</div>
                <div className="text-[10px] lg:text-xs font-bold text-gray-500 uppercase tracking-wider leading-tight">{stat.s}</div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          REFINED PROBLEM VS SOLUTION: TRANSFORMATION GRID
      ════════════════════════════════════════ */}
      <section className="relative bg-white py-20 lg:py-36 overflow-hidden font-sans border-gray-50">
        
        {/* Subtle Background Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ 
               backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", 
               backgroundSize: "80px 80px",
               maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
               WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)"
             }} />

        <div className="max-w-[1400px] mx-auto px-5 lg:px-8 relative z-10">
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            
            {/* LEFT COLUMN: Context & Copy */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-gray-50 text-[10px] lg:text-[11px] font-black uppercase tracking-[0.2em] text-gray-500 mb-6 shadow-sm w-fit">
                <ShieldCheck size={14} className="text-black" /> Intelligent Inspections
              </div>
              
              <h2 className="text-[40px] sm:text-[52px] lg:text-[64px] font-black tracking-tighter leading-[1.05] text-[#0A0A0A] mb-6 lg:mb-8">
                Safer inspections. <br className="hidden sm:block"/>
                <span className="relative inline-block mt-2">
                  <span className="absolute inset-y-2 -inset-x-2 bg-[#FFF200] rounded-xl shadow-sm transform -skew-x-2"></span>
                  <span className="relative text-black px-1">Absolute clarity.</span>
                </span>
              </h2>
              
              <p className="text-[16px] lg:text-[20px] text-gray-500 font-medium leading-relaxed max-w-md">
                Transform how you monitor critical infrastructure. Replace hazardous manual checks and costly shutdowns with survey-grade aerial intelligence and verifiable digital twins.
              </p>
            </div>

            {/* RIGHT COLUMN: 1-to-1 Contrast Rows */}
            <div className="lg:col-span-7 space-y-5 lg:space-y-8">
              
              {[
                {
                  badTitle: "Hazardous Access",
                  badDesc: "Scaffolding and rope access introduce unnecessary physical risks.",
                  goodTitle: "100% Ground-Based",
                  goodDesc: "Inspect towering assets safely and remotely via drone."
                },
                {
                  badTitle: "Operational Shutdowns",
                  badDesc: "Halting production for physical inspection crews costs time and money.",
                  goodTitle: "Zero Downtime",
                  goodDesc: "Capture data while assets remain fully operational."
                },
                {
                  badTitle: "Subjective Reporting",
                  badDesc: "Reliance on fragmented notes and easily misinterpreted ground photos.",
                  goodTitle: "Verifiable Digital Twins",
                  goodDesc: "Geo-tagged defects on a highly accurate 3D model."
                }
              ].map((row, i) => (
                <div key={i} className="relative flex flex-col md:flex-row w-full rounded-[28px] lg:rounded-[32px] overflow-hidden border border-gray-200 shadow-sm group hover:shadow-lg transition-all duration-300">
                  
                  {/* Central overlapping arrow (Desktop) */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex w-12 h-12 bg-white rounded-full border border-gray-100 shadow-md items-center justify-center transition-transform group-hover:scale-110">
                    <ArrowRight size={20} className="text-gray-400" strokeWidth={2.5} />
                  </div>

                  {/* Central overlapping arrow (Mobile - Rotated down) */}
                  <div className="md:hidden absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full border border-gray-100 shadow-md flex items-center justify-center rotate-90">
                    <ArrowRight size={18} className="text-gray-400" strokeWidth={2.5} />
                  </div>

                  {/* LEFT HALF: The Problem (Muted, Gray/Red) */}
                  <div className="w-full md:w-1/2 bg-white p-8 lg:p-10 md:pr-12 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-100">
                    <div className="flex items-start gap-4">
                      <div className="w-7 h-7 rounded bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                        <X size={16} strokeWidth={3} className="text-red-500" />
                      </div>
                      <div>
                        <h4 className="text-[17px] lg:text-[19px] font-black text-black tracking-tight mb-2">{row.badTitle}</h4>
                        <p className="text-[14px] lg:text-[15px] text-gray-500 font-medium leading-relaxed">
                          {row.badDesc}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT HALF: The Solution (Premium Dark/Yellow) */}
                  <div className="w-full md:w-1/2 bg-[#0A0A0A] p-8 lg:p-10 md:pl-14 flex flex-col justify-center relative overflow-hidden">
                    {/* Subtle glow */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[#FFF200] blur-[80px] opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity"></div>
                    
                    <div className="flex items-start gap-4 relative z-10">
                      <div className="w-7 h-7 rounded bg-[#FFF200] flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_12px_rgba(255,242,0,0.3)]">
                        <Check size={16} strokeWidth={4} className="text-black" />
                      </div>
                      <div>
                        <h4 className="text-[17px] lg:text-[19px] font-black text-white tracking-tight mb-2">{row.goodTitle}</h4>
                        <p className="text-[14px] lg:text-[15px] text-gray-400 font-medium leading-relaxed">
                          {row.goodDesc}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              ))}

            </div>

          </div>
        </div>
      </section>

      <AssetUseCases />
      
      {/* ════════════════════════════════════════
          Tangible benefits
      ════════════════════════════════════════ */}
    <section className="relative bg-white py-20 lg:py-36 overflow-hidden font-sans border-b border-gray-50 border-t">
      
      {/* Subtle Background Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ 
               backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", 
               backgroundSize: "80px 80px",
               maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
               WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)"
             }} />

      <div className="max-w-[1400px] mx-auto px-5 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-[10px] lg:text-[11px] font-black uppercase tracking-[0.2em] text-gray-500 mb-6 shadow-sm">
            <Layers size={14} className="text-black" /> The DEX Platform
          </div>
          
          <h2 className="text-[36px] sm:text-[44px] lg:text-[56px] font-black tracking-tighter leading-[1.05] text-[#0A0A0A] mb-6">
            From raw data to <br className="hidden sm:block"/>
            <span className="relative inline-block mt-2">
              <span className="absolute inset-y-2 -inset-x-3 bg-[#FFF200] rounded-xl shadow-sm transform -skew-x-2"></span>
              <span className="relative text-black px-1">resolved issues.</span>
            </span>
          </h2>
          
          <p className="text-[16px] lg:text-[20px] text-gray-500 font-medium leading-relaxed">
            The DEX platform gives your maintenance teams a unified workspace to track, analyze, and close defects.
          </p>
        </div>

        {/* 3-Column Platform Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Feature 1: Geo-Tagged Snags */}
          <div className="group bg-gray-50 border border-gray-100 rounded-[32px] p-8 lg:p-10 shadow-sm hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:border-gray-200 transition-all duration-500 flex flex-col">
            
            <div className="h-48 w-full bg-white rounded-2xl border border-gray-100 shadow-sm mb-8 relative overflow-hidden flex items-center justify-center">
               <div className="absolute inset-0 bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:20px_20px]"></div>
               
               {/* Abstract Topo/Map Lines */}
               <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 200 200">
                 <path d="M 0 100 Q 50 50 100 100 T 200 100" fill="none" stroke="#9ca3af" strokeWidth="2" />
                 <path d="M 0 150 Q 70 80 120 150 T 200 150" fill="none" stroke="#9ca3af" strokeWidth="2" />
               </svg>

               {/* Animated Ping */}
               <div className="relative z-10 flex flex-col items-center group-hover:scale-110 transition-transform duration-500">
                 <div className="relative flex h-5 w-5 mb-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500 border-2 border-white shadow-md"></span>
                 </div>
                 <div className="bg-black/80 backdrop-blur-md text-white text-[9px] font-mono tracking-widest px-2.5 py-1.5 rounded-md shadow-lg">
                   LAT: 28.4072
                 </div>
               </div>
            </div>

            <div className="mt-auto">
              <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-black mb-5 shadow-sm group-hover:bg-[#FFF200] group-hover:border-[#FFF200] transition-colors duration-300">
                <MapPin size={22} strokeWidth={2.5} />
              </div>
              <h3 className="text-xl lg:text-[22px] font-black text-black tracking-tight mb-3">
                Geo-Tagged Snags
              </h3>
              <p className="text-[14px] lg:text-[15px] text-gray-500 font-medium leading-relaxed">
                Pinpoint exact coordinates of defects. Eliminate guesswork by tagging issues directly onto the millimeter-accurate digital twin.
              </p>
            </div>
          </div>

          {/* Feature 2: Custom Dashboards */}
          <div className="group bg-gray-50 border border-gray-100 rounded-[32px] p-8 lg:p-10 shadow-sm hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:border-gray-200 transition-all duration-500 flex flex-col">
            
            <div className="h-48 w-full bg-white rounded-2xl border border-gray-100 shadow-sm mb-8 relative overflow-hidden flex flex-col p-4 gap-3">
               
               <div className="flex justify-between items-center mb-1">
                 <div className="w-20 h-2 bg-gray-200 rounded-full"></div>
                 <div className="w-8 h-2 bg-gray-200 rounded-full"></div>
               </div>

               <div className="flex gap-3 h-full">
                 <div className="w-1/2 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center relative overflow-hidden group-hover:border-[#FFF200]/50 transition-colors">
                    {/* Donut Chart Simulation */}
                    <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                      <path className="text-gray-200" strokeWidth="4" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      <path className="text-[#FFF200]" strokeWidth="4" strokeDasharray="60, 100" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" style={{ transition: 'stroke-dasharray 1.5s ease-out' }} />
                    </svg>
                 </div>
                 
                 <div className="w-1/2 flex flex-col justify-end gap-2">
                    <div className="w-full h-8 bg-blue-50 border border-blue-100 rounded-lg transform origin-bottom transition-transform duration-500 group-hover:scale-y-110"></div>
                    <div className="w-full h-12 bg-red-50 border border-red-100 rounded-lg transform origin-bottom transition-transform duration-500 group-hover:scale-y-110"></div>
                    <div className="w-full h-5 bg-green-50 border border-green-100 rounded-lg transform origin-bottom transition-transform duration-500 group-hover:scale-y-110"></div>
                 </div>
               </div>
            </div>

            <div className="mt-auto">
              <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-black mb-5 shadow-sm group-hover:bg-[#FFF200] group-hover:border-[#FFF200] transition-colors duration-300">
                <LayoutDashboard size={22} strokeWidth={2.5} />
              </div>
              <h3 className="text-xl lg:text-[22px] font-black text-black tracking-tight mb-3">
                Custom Dashboards
              </h3>
              <p className="text-[14px] lg:text-[15px] text-gray-500 font-medium leading-relaxed">
                Tailored KPIs for maintenance teams. Track open issues, severity levels, and resolution speeds across your entire portfolio in one view.
              </p>
            </div>
          </div>

          {/* Feature 3: Historical Comparison */}
          <div className="group bg-gray-50 border border-gray-100 rounded-[32px] p-8 lg:p-10 shadow-sm hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:border-gray-200 transition-all duration-500 flex flex-col">
            
            <div className="h-48 w-full bg-white rounded-2xl border border-gray-100 shadow-sm mb-8 relative overflow-hidden flex items-center justify-center group-hover:shadow-md transition-shadow">
               
               {/* Left Side (Before) */}
               <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-100 flex items-center justify-center overflow-hidden">
                 <div className="w-24 h-24 border-4 border-gray-300 rounded-full opacity-30"></div>
                 <div className="absolute bottom-2 left-2 bg-black/40 backdrop-blur-md text-white text-[8px] font-black tracking-widest uppercase px-2 py-1 rounded">Q1 2026</div>
               </div>

               {/* Right Side (After) */}
               <div className="absolute inset-y-0 right-0 w-1/2 bg-gray-200 flex items-center justify-center overflow-hidden">
                 <div className="w-24 h-24 border-4 border-red-400 rounded-full opacity-60 scale-110"></div>
                 <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-md text-[#FFF200] text-[8px] font-black tracking-widest uppercase px-2 py-1 rounded">Q3 2026</div>
               </div>

               {/* Slider Handle Line */}
               <div className="absolute inset-y-0 left-1/2 w-0.5 bg-black z-10"></div>
               
               {/* Slider Knob */}
               <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white border-2 border-black rounded-full shadow-lg flex items-center justify-center z-20 group-hover:scale-110 transition-transform">
                 <div className="flex gap-0.5">
                   <div className="w-0.5 h-3 bg-gray-400 rounded-full"></div>
                   <div className="w-0.5 h-3 bg-gray-400 rounded-full"></div>
                 </div>
               </div>

            </div>

            <div className="mt-auto">
              <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-black mb-5 shadow-sm group-hover:bg-[#FFF200] group-hover:border-[#FFF200] transition-colors duration-300">
                <History size={22} strokeWidth={2.5} />
              </div>
              <h3 className="text-xl lg:text-[22px] font-black text-black tracking-tight mb-3">
                Historical Comparison
              </h3>
              <p className="text-[14px] lg:text-[15px] text-gray-500 font-medium leading-relaxed">
                Track degradation over time using visual diffs. Instantly slide between historical captures to prove when a defect started forming.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>

      {/* ════════════════════════════════════════
          BENTO FEATURE GRID
      ════════════════════════════════════════ */}
      <section className="relative bg-white py-16 lg:py-24 overflow-hidden border-gray-50">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-20">
            <h2 className="text-[34px] sm:text-[44px] lg:text-[52px] font-black tracking-tighter leading-[1.05] text-black mb-4">
              Pre-Pour to Post-Occupancy.
            </h2>
            <p className="text-[15px] lg:text-lg text-gray-500 font-medium leading-relaxed max-w-3xl mx-auto">
              Document every critical stage with visual proof—so quality becomes verifiable, not debatable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
             {[
               { icon: <HardHat size={20}/>, title: "Pre-Pour Inspections", desc: "Document rebar and formwork before concrete is poured. Catch errors early." },
               { icon: <Eye size={20}/>, title: "Facade Scans", desc: "Drone scans spot cracks and cladding defects without scaffolding." },
               { icon: <BarChart size={20}/>, title: "Dimensional Checks", desc: "LiDAR scans validate tolerances against design specs instantly." },
               { icon: <FileCheck size={20}/>, title: "Snag Management", desc: "Tag defects directly on visuals. Contractors see exactly what needs fixing." },
               { icon: <Users size={20}/>, title: "Handover Packages", desc: "Deliver visual documentation to clients. Prove work was done right." },
               { icon: <History size={20}/>, title: "Historical Compare", desc: "Scroll through history to prove when defects appeared for compliance." }
             ].map((feature, i) => (
               <div key={i} className="bg-white border border-gray-100 p-6 lg:p-8 rounded-[24px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[#FFF200]/10 border border-[#FFF200]/20 flex items-center justify-center text-black mb-5">
                    {feature.icon}
                  </div>
                  <h3 className="text-[17px] lg:text-xl font-black text-black mb-2 tracking-tight">{feature.title}</h3>
                  <p className="text-[13px] lg:text-base text-gray-500 font-medium leading-relaxed">{feature.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          HUB & SPOKE: REMOTE INSPECTION MAP
      ════════════════════════════════════════ */}
      <section className="bg-white py-16 lg:py-24 relative overflow-hidden font-sans border-t border-gray-50">
        <style>{`
          @keyframes hub-glow { 0%, 100% { opacity: 0.15; transform: scale(1); } 50% { opacity: 0.25; transform: scale(1.05); } }
        `}</style>

       {/* Subtle Background Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ 
               backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", 
               backgroundSize: "80px 80px",
               maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
               WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)"
             }} /> 
        <div className="max-w-[1500px] mx-auto px-5 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-10 lg:mb-16">
            <h2 className="text-[34px] sm:text-[44px] lg:text-[48px] font-black tracking-tighter leading-[1.05] text-black mb-4">
              Remote Inspections <br className="sm:hidden" />
              <span className="relative inline-block mt-1 sm:mt-2 mx-1">
                <span className="absolute inset-y-0 -inset-x-2 bg-[#FFF200] rounded-lg shadow-sm"></span>
                <span className="relative text-black px-1">Without Site Visits.</span>
              </span>
            </h2>
            <p className="text-[15px] lg:text-base text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto">
              Quality teams review progress from anywhere. Issues get caught earlier, and site teams spend less time reporting.
            </p>
          </div>

          <div className="relative w-full flex flex-col lg:grid lg:grid-cols-[27%_auto_27%] justify-between items-stretch gap-6 lg:gap-0 h-full py-2">
             
             {/* Left Column (Top on mobile) */}
             <div className="flex flex-col justify-center gap-4 relative z-20">
                {[
                  { role: "Quality Managers", desc: "Inspect units fast. Flag issues before they multiply.", icon: <ClipboardCheck size={16}/> },
                  { role: "Site Engineers", desc: "Automate as-built conditions. Capture every MEP layer.", icon: <HardHat size={16}/> },
                  { role: "Compliance", desc: "Audit-ready timestamped logs for every zone.", icon: <FileCheck size={16}/> }
                ].map((persona, i) => (
                  <div key={i} className="p-4 lg:p-5 rounded-[20px] bg-white border border-gray-100 shadow-sm flex flex-col items-start justify-center">
                     <div className="flex items-center gap-3 mb-2">
                       <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-black border border-gray-100">{persona.icon}</div>
                       <h4 className="text-black font-black text-[11px] tracking-widest uppercase">{persona.role}</h4>
                     </div>
                     <p className="text-gray-500 font-medium leading-snug text-[12px]">{persona.desc}</p>
                  </div>
                ))}
             </div>

             {/* Center Hub */}
             <div className="relative flex justify-center items-center px-0 lg:px-12 z-10 py-4 lg:py-0">
                <div className="absolute inset-0 bg-[#FFF200] rounded-full blur-[80px] opacity-15 pointer-events-none" style={{ animation: 'hub-glow 4s ease-in-out infinite' }}></div>
                <div className="relative w-full aspect-video lg:aspect-[16/10] rounded-[24px] lg:rounded-[28px] bg-black border-[3px] border-black shadow-2xl p-0.5 z-20">
                   <div className="w-full h-full rounded-[20px] overflow-hidden relative bg-gray-900">
                      <img src="https://ik.imagekit.io/saxybrgkp/Website%20Images%20Land%20Survey6.png?updatedAt=1773637747328" className="w-full h-full object-cover opacity-90" alt="Truth Hub" />
                      <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-2 border border-white/10">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-[8px] font-black text-white uppercase tracking-widest">Live Sync</span>
                      </div>
                   </div>
                </div>
             </div>

             {/* Right Column (Bottom on mobile) */}
             <div className="flex flex-col justify-center gap-4 relative z-20">
                {[
                  { role: "Clients & Consultants", desc: "Audit quality without site access from anywhere.", icon: <Eye size={16}/> },
                  { role: "Contractors", desc: "Prove work with timestamped records. Resolve disputes.", icon: <Users size={16}/> },
                  { role: "Asset Managers", desc: "Build a digital as-built record for facility management.", icon: <Building2 size={16}/> }
                ].map((persona, i) => (
                  <div key={i} className="p-4 lg:p-5 rounded-[20px] bg-white border border-gray-100 shadow-sm flex flex-col items-start justify-center">
                     <div className="flex items-center gap-3 mb-2">
                       <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-black border border-gray-100">{persona.icon}</div>
                       <h4 className="text-black font-black text-[11px] tracking-widest uppercase">{persona.role}</h4>
                     </div>
                     <p className="text-gray-500 font-medium leading-snug text-[12px]">{persona.desc}</p>
                  </div>
                ))}
             </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default AssetInspection;