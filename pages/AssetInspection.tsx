import React, { useState, useEffect } from "react";
import { 
  X, Check, DownloadCloud, Globe, Layers, MapPin, Mail, Timer, Activity,
  Twitter, Linkedin, Youtube, Instagram, BarChart, History,
  Box, Camera, Clock, AlertTriangle, Unplug, 
  LayoutDashboard, Users, Zap, ShieldCheck, 
  RefreshCw, Search, HardHat, FileCheck, Eye, ClipboardCheck, Building2
} from "lucide-react";
import { 
  ArrowUpRight, Sun, Factory, Building,
} from 'lucide-react';

/// ─── DATA: INTERACTIVE INSPECTION VIEWER ───────────────────────────────────────
const INSPECTION_FEATURES = [
  {
    id: 'chimneys',
    label: 'Chimneys',
    title: 'Vertical Stack Inspection',
    desc: 'Safely inspect towering industrial chimneys and exhaust stacks for structural cracks, corrosion, and thermal anomalies.',
    gif: '/gifs/drone-facade.gif',
    fallbackImg: 'https://ik.imagekit.io/saxybrgkp/MME/chimney%20final%202.png?updatedAt=1773816754317',
    placeholderBg: 'bg-gray-100'
  },
  {
    id: 'bridges',
    label: 'Bridges',
    title: 'Structural Integrity Scans',
    desc: 'Assess critical load-bearing components, concrete spalling, and joint integrity on expansive bridge networks.',
    gif: '/gifs/interior-walkthrough.gif',
    fallbackImg: 'https://ik.imagekit.io/saxybrgkp/MME/bridge.png',
    placeholderBg: 'bg-gray-100'
  },
  {
    id: 'windmills',
    label: 'Windmills',
    title: 'Turbine Blade Diagnostics',
    desc: 'Perform rapid, high-resolution visual & thermal sweeps of turbine blades. Detect lightning strikes, leading-edge erosion, and structural fatigue.',
    gif: '/gifs/lidar-as-built.gif', 
    fallbackImg: 'https://ik.imagekit.io/saxybrgkp/MME/windmill.png',
    placeholderBg: 'bg-gray-100'
  },
  {
    id: 'roofs',
    label: 'Roofs',
    title: 'Expansive Roof Mapping',
    desc: 'Execute comprehensive thermal and RGB mapping of commercial facilities.',
    gif: '/gifs/mep-inspection.gif',
    fallbackImg: 'https://ik.imagekit.io/saxybrgkp/MME/Inspection/roof.png',
    placeholderBg: 'bg-gray-100'
  }
];

// ─── SUB-COMPONENT: INTERACTIVE DASHBOARD ─────────────────────────────────────
export const InspectionViewerSection = () => {
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
    <section className="relative bg-white pt-24 lg:pt-36 pb-24 lg:pb-32 overflow-hidden font-sans border-gray-100">
      
      <style>{`
        @keyframes interactive-progress { from { width: 0%; } to { width: 100%; } }
      `}</style>
      
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", backgroundSize: "80px 80px", maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)" }} 
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
          <h2 className="text-[clamp(36px,4.5vw,56px)] font-black tracking-tighter leading-[1.05] text-black mb-6">
            Complete visual record of <br className="hidden md:block"/>
            <span className="relative inline-block mt-2">
              <span className="absolute inset-y-1 lg:inset-y-2 -inset-x-3 bg-[#FFF200] rounded-xl shadow-sm transform -skew-x-2"></span>
              <span className="relative text-black px-2">every space, every surface.</span>
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-500 font-medium leading-relaxed max-w-3xl mx-auto">
            We use aerial capture technology to document your asset with survey-grade precision. <br/>
            Quality teams review issues remotely and tag defects in place, preventing rework.
          </p>
        </div>

        {/* Interactive Viewer Component (Floating Layout) */}
        <div 
          className="relative max-w-[1200px] mx-auto bg-white rounded-[32px] lg:rounded-[40px] border border-gray-200 shadow-[0_30px_80px_rgba(0,0,0,0.08)] p-4 lg:p-6" 
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)}
        >
          
          {/* Top Navigation Tabs */}
          <div className="flex gap-2 overflow-x-auto hide-scrollbar scroll-smooth mb-4 px-2">
            {INSPECTION_FEATURES.map((feature, index) => {
              const isActive = activeIndex === index;
              return (
                <button 
                  key={feature.id} 
                  onClick={() => setActiveIndex(index)} 
                  className={`whitespace-nowrap px-6 py-2.5 text-[10px] font-black uppercase tracking-widest transition-all duration-300 rounded-full border 
                    ${isActive ? 'bg-black border-black text-[#FFF200] shadow-md' : 'bg-transparent border-gray-200 text-gray-500 hover:border-gray-400 hover:text-black'}`}
                >
                  {feature.label}
                </button>
              );
            })}
          </div>

          {/* Viewer Area (Image + Data Overlay) */}
          <div className="relative w-full aspect-[4/3] lg:aspect-[21/9] bg-gray-100 overflow-hidden rounded-[24px] lg:rounded-[32px] group">
            
            {/* Image Layers */}
            {INSPECTION_FEATURES.map((feature, index) => (
              <div key={feature.id} className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                <img 
                  src={feature.fallbackImg} 
                  alt={feature.title} 
                  className="w-full h-full object-cover scale-[1.01]" 
                />
              </div>
            ))}
            
            {/* The Animated Yellow Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1.5 bg-black/20 z-20">
               <div 
                 key={activeIndex} 
                 className="h-full bg-[#FFF200]" 
                 style={{ 
                   animation: 'interactive-progress 4.5s linear forwards', 
                   animationPlayState: isHovered ? 'paused' : 'running' 
                 }} 
               />
            </div>
          </div>

          {/* Bottom Content Bar */}
          <div className="px-6 py-8 lg:px-10 lg:py-10 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
             <div className="md:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-md bg-[#FFF200]/20 text-black text-[10px] font-black uppercase tracking-widest border border-[#FFF200]/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFF200] shadow-[0_0_5px_#FFF200]"></span>
                  {INSPECTION_FEATURES[activeIndex].label}
                </div>
                <h3 className="text-2xl lg:text-3xl font-black text-black leading-tight tracking-tight">
                  {INSPECTION_FEATURES[activeIndex].title}
                </h3>
             </div>
             
             <div className="md:w-1/2 md:text-right">
                <p className="text-base lg:text-[17px] text-gray-500 font-medium leading-relaxed max-w-md ml-auto">
                  {INSPECTION_FEATURES[activeIndex].desc}
                </p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// ─── MAIN COMPONENT ────────────────────────────────────────────────────────────

export const AssetInspection: React.FC = () => {
  return (
    <div className="bg-white text-black font-sans selection:bg-[#FFF200] selection:text-black">
      
      {/* ════════════════════════════════════════
          HERO - ASSET & QUALITY INSPECTION
      ════════════════════════════════════════ */}
<section className="relative pt-24 md:pt-32 lg:pt-44 pb-12 lg:pb-20 bg-white overflow-hidden">
  {/* FIX 1: The Grid is now a direct child of the full-width <section> */}
  <div 
    className="absolute inset-0 opacity-[0.03] pointer-events-none" 
    style={{ 
      backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", 
      backgroundSize: "80px 80px", 
      maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)", 
      WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)" 
    }} 
  />
       
  {/* FIX 2: Content is wrapped in the max-width container and elevated with z-10 */}
  <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-10 lg:mb-14 items-center">
      <div className="lg:col-span-7 flex flex-col">
        <h1 className="text-[11vw] md:text-[70px] lg:text-[85px] font-black leading-[0.9] tracking-tighter text-black m-0 p-0 mb-6 lg:mb-8">
          Asset Inspection
        </h1>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] lg:text-[14px] font-bold text-gray-500 tracking-wide">
          <span className="flex items-center gap-1.5"><Check size={16} strokeWidth={4} className="text-[#FFF200]"/> Comprehensive 360° Walks</span>
          <span className="w-1.5 h-1.5 bg-gray-300 rounded-full hidden sm:block"></span>
          <span className="flex items-center gap-1.5"><Check size={16} strokeWidth={4} className="text-[#FFF200]"/> Facade & Vertical Scanning</span>
          <span className="w-1.5 h-1.5 bg-gray-300 rounded-full hidden md:block"></span>
          <span className="flex items-center gap-1.5"><Check size={16} strokeWidth={4} className="text-[#FFF200]"/> AI Defect Detection</span>
        </div>
      </div>
      <div className="lg:col-span-5 flex flex-col">
        <h2 className="text-2xl lg:text-[28px] font-medium leading-[1.3] text-gray-800 tracking-tight">
          Replace manual walkthroughs with drone-based aerial documentation.
        </h2>
      </div>
    </div>

    <div className="w-full aspect-[4/3] md:aspect-[2.2/1] rounded-[32px] lg:rounded-[40px] overflow-hidden bg-gray-100 relative shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-200 group">
      <img src="https://ik.imagekit.io/saxybrgkp/MME/Land%20Survey%20Website%20Image.png" alt="Asset Inspection Interface" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[20s] ease-out" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10"></div>
      
      {/* Floating UI Elements */}
      <div className="absolute bottom-6 right-6 lg:bottom-8 lg:right-8 bg-white/80 backdrop-blur-2xl px-6 py-4 rounded-2xl border border-white/50 flex items-center gap-6 shadow-2xl text-black">
         <div className="text-right">
            <div className="text-[9px] text-gray-500 font-bold uppercase tracking-widest mb-1">Coverage</div>
            <div className="text-black font-mono text-base font-black">100% Surface</div>
         </div>
         <div className="w-[1px] h-8 bg-gray-300"></div>
         <div className="text-right">
            <div className="text-[9px] text-gray-500 font-bold uppercase tracking-widest mb-1">Issue Status</div>
            <div className="text-red-600 font-mono text-base font-bold">12 Flagged</div>
         </div>
      </div>
    </div>
  </div>
</section>
      {/* ════════════════════════════════════════
          INSPECTION STATS ROW
      ════════════════════════════════════════ */}
      <section className="bg-white pt-12 pb-24 border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-x divide-gray-100">
            
            <div className="px-4 lg:px-8">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FFF200]"></div>
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Risk Reduction</span>
              </div>
              <div className="text-4xl lg:text-5xl font-black text-black tracking-tighter mb-2">90%</div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Less Scaffolding & Climbing</div>
            </div>

            <div className="px-4 lg:px-8">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FFF200]"></div>
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Speed</span>
              </div>
              <div className="text-4xl lg:text-5xl font-black text-black tracking-tighter mb-2">5x</div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Faster Than Manual Checks</div>
            </div>

            <div className="px-4 lg:px-8">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FFF200]"></div>
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Accuracy</span>
              </div>
              <div className="text-4xl lg:text-5xl font-black text-black tracking-tighter mb-2">100%</div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Visual Coverage of Assets</div>
            </div>

            <div className="px-4 lg:px-8">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FFF200]"></div>
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Compliance</span>
              </div>
              <div className="text-4xl lg:text-5xl font-black text-black tracking-tighter mb-2">Zero</div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Compromise on Safety</div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          THE PROBLEM: MANUAL INSPECTION RISKS
      ════════════════════════════════════════ */}
      <section className="bg-white py-24 lg:py-32 font-sans relative overflow-hidden">
        
        {/* Faint Grid Background */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
             style={{ backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 relative z-10">
          
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-[clamp(36px,4.5vw,56px)] font-black tracking-tighter leading-[1.05] text-[#0A0A0A] mb-6">
              Manual asset inspections are <br className="hidden md:block"/>
              <span className="relative inline-block mt-2">
                <span className="absolute inset-y-1 lg:inset-y-2 -inset-x-3 bg-[#FFF200] rounded-xl shadow-sm"></span>
                <span className="relative text-black px-2">slow, risky, and incomplete.</span>
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto">
              Climbing stacks, erecting scaffolding, or using binoculars leaves critical infrastructure vulnerable. Sending crews into hazardous areas shouldn't be your first line of defense.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            
            <div className="bg-gray-50 rounded-[32px] p-8 lg:p-10 border border-gray-100 hover:border-[#FFF200] transition-colors group">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-black mb-6 shadow-sm border border-gray-100 group-hover:bg-[#FFF200] transition-colors">
                <AlertTriangle size={24} />
              </div>
              <h3 className="text-xl font-black text-black tracking-tight mb-3">Extreme Safety Risks</h3>
              <p className="text-gray-500 font-medium leading-relaxed">
                Sending crews up industrial chimneys, transmission towers, or steep ridges introduces severe safety liabilities and insurance overhead.
              </p>
            </div>

            <div className="bg-gray-50 rounded-[32px] p-8 lg:p-10 border border-gray-100 hover:border-[#FFF200] transition-colors group">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-black mb-6 shadow-sm border border-gray-100 group-hover:bg-[#FFF200] transition-colors">
                <Timer size={24} />
              </div>
              <h3 className="text-xl font-black text-black tracking-tight mb-3">Costly Operational Downtime</h3>
              <p className="text-gray-500 font-medium leading-relaxed">
                Erecting scaffolding, deploying rope access teams, and halting operations for routine manual checks costs thousands in lost productivity.
              </p>
            </div>

            <div className="bg-gray-50 rounded-[32px] p-8 lg:p-10 border border-gray-100 hover:border-[#FFF200] transition-colors group">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-black mb-6 shadow-sm border border-gray-100 group-hover:bg-[#FFF200] transition-colors">
                <Search size={24} />
              </div>
              <h3 className="text-xl font-black text-black tracking-tight mb-3">Inconsistent Documentation</h3>
              <p className="text-gray-500 font-medium leading-relaxed">
                Binoculars and ground-level photos miss micro-fractures, hidden corrosion, and critical roof-level defects, leaving gray areas in audits.
              </p>
            </div>

            <div className="bg-gray-50 rounded-[32px] p-8 lg:p-10 border border-gray-100 hover:border-[#FFF200] transition-colors group">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-black mb-6 shadow-sm border border-gray-100 group-hover:bg-[#FFF200] transition-colors">
                <Activity size={24} />
              </div>
              <h3 className="text-xl font-black text-black tracking-tight mb-3">Reactive Maintenance</h3>
              <p className="text-gray-500 font-medium leading-relaxed">
                Without a clear, historical visual record of your asset's degradation over time, you are forced to fix infrastructure only *after* it fails.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          THE SOLUTION: EXPLICIT ASSET TARGETS
      ════════════════════════════════════════ */}
      <section className="bg-[#0A0A0A] py-24 lg:py-32 font-sans relative overflow-hidden">
        
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FFF200]/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10 text-center">
          
          <h2 className="text-[clamp(36px,4.5vw,56px)] font-black tracking-tighter leading-[1.05] text-white mb-6">
            Inspect the unreachable with <br className="hidden md:block"/>
            <span className="text-[#FFF200]">survey-grade drone data.</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-400 font-medium leading-relaxed max-w-3xl mx-auto mb-16">
            YelloSKYE captures high-resolution imagery and thermal data of your hardest-to-reach infrastructure, keeping your teams on the ground and your assets online.
          </p>

          {/* EXPLICIT USE CASES ROW */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-5xl mx-auto">
            
            {/* Asset 1: Power & Transmission */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:bg-white/10 hover:border-[#FFF200]/50 transition-all cursor-default group">
              <div className="w-12 h-12 rounded-full bg-[#FFF200]/10 flex items-center justify-center text-[#FFF200] group-hover:scale-110 transition-transform">
                <Zap size={24} />
              </div>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest text-center">Power & <br/> Transmission</h4>
            </div>

            {/* Asset 2: Industrial Chimneys */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:bg-white/10 hover:border-[#FFF200]/50 transition-all cursor-default group">
              <div className="w-12 h-12 rounded-full bg-[#FFF200]/10 flex items-center justify-center text-[#FFF200] group-hover:scale-110 transition-transform">
                <Factory size={24} />
              </div>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest text-center">Industrial <br/> Chimneys</h4>
            </div>

            {/* Asset 3: Solar Roofs */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:bg-white/10 hover:border-[#FFF200]/50 transition-all cursor-default group">
              <div className="w-12 h-12 rounded-full bg-[#FFF200]/10 flex items-center justify-center text-[#FFF200] group-hover:scale-110 transition-transform">
                <Sun size={24} />
              </div>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest text-center">Commercial <br/> Solar Roofs</h4>
            </div>

            {/* Asset 4: Facades & Ridges */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:bg-white/10 hover:border-[#FFF200]/50 transition-all cursor-default group">
              <div className="w-12 h-12 rounded-full bg-[#FFF200]/10 flex items-center justify-center text-[#FFF200] group-hover:scale-110 transition-transform">
                <Building size={24} />
              </div>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest text-center">Facades & <br/> Steep Ridges</h4>
            </div>

          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════
          INTERACTIVE INSPECTION VIEWER
      ════════════════════════════════════════ */}
      <InspectionViewerSection />

      {/* ════════════════════════════════════════
          BENTO FEATURE GRID
      ════════════════════════════════════════ */}
      <section className="relative bg-white pt-20 lg:pt-23 pb-20 lg:pb-23 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
            <h2 className="text-[clamp(36px,4vw,52px)] font-black tracking-tighter leading-[1.1] text-black mb-6">
              From Pre-Pour to Post-Occupancy.
            </h2>
            <p className="text-lg text-gray-500 font-medium leading-relaxed max-w-4xl mx-auto">
              Document every critical stage with visual proof—so quality becomes verifiable, not debatable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
             {[
               { icon: <HardHat size={22}/>, title: "Pre-Pour Inspections", desc: "Document rebar placement, formwork, and embedments before concrete is poured. Catch errors when they're easy to fix." },
               { icon: <Eye size={22}/>, title: "Facade Scans", desc: "Drone-based facade scans spot cracks, water ingress, and cladding defects without scaffolding or rope access." },
               { icon: <BarChart size={22}/>, title: "Dimensional Verification", desc: "LiDAR scans validate room dimensions, ceiling heights, and floor tolerances against design specs instantly." },
               { icon: <FileCheck size={22}/>, title: "Snag Management", desc: "Tag defects directly on 360° visuals. Contractors see exactly what needs fixing—no ambiguity, no back-and-forth." },
               { icon: <Users size={22}/>, title: "Handover Packages", desc: "Deliver complete visual documentation to clients. Prove work was done correctly and maintain transparency." },
               { icon: <History size={22}/>, title: "Historical Comparison", desc: "Scroll through history to prove when defects appeared. Perfect for legal documentation and compliance." }
             ].map((feature, i) => (
               <div key={i} className="bg-white border border-gray-100 p-8 rounded-[24px] shadow-sm hover:border-gray-200 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-xl bg-[#FFF200]/10 border border-[#FFF200]/20 flex items-center justify-center text-black mb-6 group-hover:bg-[#FFF200] group-hover:border-[#FFF200] group-hover:scale-105 transition-all duration-300 ease-out">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-black text-black mb-3 tracking-tight">{feature.title}</h3>
                  <p className="text-gray-500 font-medium leading-relaxed text-base">{feature.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          HUB & SPOKE: REMOTE INSPECTION MAP
      ════════════════════════════════════════ */}
      <section className="bg-white pt-6 lg:pt-8 pb-8 lg:pb-12 relative overflow-hidden font-sans">
        <style>{`
          @keyframes data-flow { from { stroke-dashoffset: 24; } to { stroke-dashoffset: 0; } }
          .animate-data-flow { stroke-dasharray: 6 6; animation: data-flow 1s linear infinite; }
          @keyframes hub-glow { 0%, 100% { opacity: 0.15; transform: scale(1); } 50% { opacity: 0.25; transform: scale(1.05); } }
        `}</style>
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", backgroundSize: "60px 60px", maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)" }} />
        
        <div className="max-w-[1500px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-6 lg:mb-8">
            <h2 className="text-[clamp(32px,4vw,48px)] font-black tracking-tighter leading-[1.1] text-black mb-3">
              Conduct Remote Inspections <br className="md:hidden" />
              <span className="relative inline-block mt-1 mx-2">
                <span className="absolute inset-y-0 -inset-x-3 bg-[#FFF200] rounded-xl shadow-sm"></span>
                <span className="relative text-black">Without Site Access.</span>
              </span>
            </h2>
            <p className="text-sm lg:text-base text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto">
              Quality teams review progress from anywhere. Issues get caught earlier, 
              approvals move faster, and site teams spend less time on manual reporting.
            </p>
          </div>

          <div className="relative w-full max-w-[1300px] mx-auto min-h-[500px] flex items-center justify-center">
             <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 1000 500" preserveAspectRatio="none">
                  <path d="M 330 250 C 300 250, 300 85, 272 85" fill="none" stroke="#FFF200" strokeWidth="2.5" className="animate-data-flow" />
                  <path d="M 330 250 L 272 250" fill="none" stroke="#FFF200" strokeWidth="2.5" className="animate-data-flow" />
                  <path d="M 330 250 C 300 250, 300 415, 272 415" fill="none" stroke="#FFF200" strokeWidth="2.5" className="animate-data-flow" />
                  <path d="M 670 250 C 700 250, 700 85, 728 85" fill="none" stroke="#FFF200" strokeWidth="2.5" className="animate-data-flow" />
                  <path d="M 670 250 L 728 250" fill="none" stroke="#FFF200" strokeWidth="2.5" className="animate-data-flow" />
                  <path d="M 670 250 C 700 250, 700 415, 728 415" fill="none" stroke="#FFF200" strokeWidth="2.5" className="animate-data-flow" />
                </svg>
             </div>
             
             <div className="w-full flex flex-col lg:grid lg:grid-cols-[27.2%_auto_27.2%] justify-between relative z-10 items-stretch h-full py-2">
                <div className="flex flex-col justify-between h-[450px] relative z-20">
                   {[
                     { role: "Quality Managers", desc: "Inspect units in 1/10th the time. Flag issues remotely before they multiply.", icon: <ClipboardCheck size={18}/> },
                     { role: "Site Engineers", desc: "Automate as-built conditions. Capture every MEP layer before closing slabs.", icon: <HardHat size={18}/> },
                     { role: "Compliance Officers", desc: "Audit-ready timestamped logs for every floor and facade zone.", icon: <FileCheck size={18}/> }
                   ].map((persona, i) => (
                     <div key={i} className="p-4 lg:p-5 rounded-[22px] bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#FFF200] transition-all duration-300 group relative flex flex-col items-start h-[120px] justify-center">
                        <div className="hidden lg:block absolute top-1/2 -right-[11px] -translate-y-1/2 w-4 h-4 bg-white border-[3px] border-[#FFF200] rounded-full shadow-[0_0_10px_#FFF200] z-30"></div>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-7 h-7 rounded-lg bg-gray-50 flex items-center justify-center text-gray-500 group-hover:bg-[#FFF200] group-hover:text-black transition-colors">{persona.icon}</div>
                          <h4 className="text-black font-black text-[11px] tracking-widest uppercase">{persona.role}</h4>
                        </div>
                        <p className="text-gray-500 font-medium leading-snug text-[12px]">{persona.desc}</p>
                     </div>
                   ))}
                </div>

                <div className="relative group flex justify-center items-center px-4 lg:px-12 z-10">
                   <div className="absolute inset-0 bg-[#FFF200] rounded-full blur-[100px] opacity-15 pointer-events-none" style={{ animation: 'hub-glow 4s ease-in-out infinite' }}></div>
                   <div className="relative w-full max-w-[550px] aspect-[16/10] rounded-[28px] bg-black border-[3px] border-black shadow-[0_40px_100px_rgba(0,0,0,0.15)] p-0.5 transition-transform duration-700 ease-out z-20">
                      <div className="w-full h-full rounded-[24px] overflow-hidden relative bg-gray-900">
                         <img src="https://ik.imagekit.io/saxybrgkp/Website%20Images%20Land%20Survey6.png?updatedAt=1773637747328" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000" alt="Truth Hub" />
                      </div>
                   </div>
                </div>

                <div className="flex flex-col justify-between h-[450px] relative z-20">
                   {[
                     { role: "Clients & Consultants", desc: "Audit quality without site access. Review progress from anywhere, anytime.", icon: <Eye size={18}/> },
                     { role: "Contractors", desc: "Prove work was done correctly with timestamped visual records. Resolve disputes.", icon: <Users size={18}/> },
                     { role: "Asset Managers", desc: "Build a digital as-built record for long-term facility management.", icon: <Building2 size={18}/> }
                   ].map((persona, i) => (
                     <div key={i} className="p-4 lg:p-5 rounded-[22px] bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#FFF200] transition-all duration-300 group relative flex flex-col items-start h-[120px] justify-center">
                        <div className="hidden lg:block absolute top-1/2 -left-[11px] -translate-y-1/2 w-4 h-4 bg-white border-[3px] border-[#FFF200] rounded-full shadow-[0_0_12px_#FFF200] z-30"></div>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-7 h-7 rounded-lg bg-gray-50 flex items-center justify-center text-gray-500 group-hover:bg-[#FFF200] group-hover:text-black transition-colors">{persona.icon}</div>
                          <h4 className="text-black font-black text-[11px] lg:text-[12px] tracking-widest uppercase">{persona.role}</h4>
                        </div>
                        <p className="text-gray-500 font-medium leading-snug text-[12px]">{persona.desc}</p>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>
</div>
                    );
                  };
      

export default AssetInspection;