import React, { useState, useEffect } from "react";
import { 
  X, Check, DownloadCloud, Globe, Layers, MapPin, Mail, Timer, Activity,
  Twitter, Linkedin, Youtube, Instagram, BarChart, History,
  Box, Camera, Clock, AlertTriangle, Unplug, 
  LayoutDashboard, Users, Zap, ShieldCheck, 
  RefreshCw, Search, HardHat, FileCheck, Eye, ClipboardCheck, Building2,
  ArrowUpRight, Sun, Factory, Building
} from "lucide-react";

/// ─── DATA: INTERACTIVE INSPECTION VIEWER ───────────────────────────────────────
const INSPECTION_FEATURES = [
  {
    id: 'chimneys',
    label: 'Chimneys',
    title: 'Vertical Stack Inspection',
    desc: 'Safely inspect towering industrial chimneys and exhaust stacks for structural cracks, corrosion, and thermal anomalies.',
    fallbackImg: 'https://ik.imagekit.io/saxybrgkp/MME/chimney%20final%203.png',
    placeholderBg: 'bg-gray-100'
  },
  {
    id: 'bridges',
    label: 'Bridges',
    title: 'Structural Integrity Scans',
    desc: 'Assess critical load-bearing components, concrete spalling, and joint integrity on expansive bridge networks.',
    fallbackImg: 'https://ik.imagekit.io/saxybrgkp/MME/bridge.png',
    placeholderBg: 'bg-gray-100'
  },
  {
    id: 'windmills',
    label: 'Windmills',
    title: 'Turbine Blade Diagnostics',
    desc: 'Perform rapid, high-resolution visual & thermal sweeps of turbine blades. Detect lightning strikes and erosion.',
    fallbackImg: 'https://ik.imagekit.io/saxybrgkp/MME/windmill.png',
    placeholderBg: 'bg-gray-100'
  },
  {
    id: 'roofs',
    label: 'Roofs',
    title: 'Expansive Roof Mapping',
    desc: 'Execute comprehensive thermal and RGB mapping of commercial facilities to spot water pooling and damage.',
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
    <section className="relative bg-white pt-16 lg:pt-36 pb-16 lg:pb-32 overflow-hidden font-sans border-b border-gray-50">
      
      <style>{`
        @keyframes interactive-progress { from { width: 0%; } to { width: 100%; } }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
      
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", backgroundSize: "40px 40px", maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)" }} 
      />

      <div className="max-w-[1400px] mx-auto px-5 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 lg:mb-20">
          <h2 className="text-[34px] sm:text-[44px] lg:text-[56px] font-black tracking-tighter leading-[1.05] text-black mb-4 lg:mb-6">
            Visual record of <br className="hidden sm:block"/>
            <span className="relative inline-block mt-1 sm:mt-2">
              <span className="absolute inset-y-1 lg:inset-y-2 -inset-x-2 bg-[#FFF200] rounded-xl shadow-sm transform -skew-x-2"></span>
              <span className="relative text-black px-1">every surface.</span>
            </span>
          </h2>
          <p className="text-[15px] lg:text-xl text-gray-500 font-medium leading-relaxed max-w-3xl mx-auto">
            We use aerial capture technology to document your asset with survey-grade precision. 
            Quality teams review issues remotely and tag defects in place.
          </p>
        </div>

        {/* Interactive Viewer Component */}
        <div 
          className="relative max-w-[1200px] mx-auto bg-white rounded-[24px] lg:rounded-[40px] border border-gray-200 shadow-xl lg:shadow-[0_30px_80px_rgba(0,0,0,0.08)] p-3 lg:p-6" 
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)}
        >
          
          {/* Mobile-Friendly Tabs */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar scroll-smooth mb-3 pb-1 px-1 snap-x">
            {INSPECTION_FEATURES.map((feature, index) => {
              const isActive = activeIndex === index;
              return (
                <button 
                  key={feature.id} 
                  onClick={() => setActiveIndex(index)} 
                  className={`snap-start whitespace-nowrap px-5 py-2.5 text-[10px] font-black uppercase tracking-widest transition-all duration-300 rounded-full border shrink-0
                    ${isActive ? 'bg-black border-black text-[#FFF200] shadow-md' : 'bg-transparent border-gray-200 text-gray-500'}`}
                >
                  {feature.label}
                </button>
              );
            })}
          </div>

          {/* Viewer Area: Adjusted height for mobile */}
          <div className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[21/9] bg-gray-100 overflow-hidden rounded-[20px] lg:rounded-[32px] group">
            {INSPECTION_FEATURES.map((feature, index) => (
              <div key={feature.id} className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                <img src={feature.fallbackImg} alt={feature.title} className="w-full h-full object-cover scale-[1.01]" />
              </div>
            ))}
            <div className="absolute bottom-0 left-0 w-full h-[4px] lg:h-[6px] bg-black/20 z-20">
               <div key={activeIndex} className="h-full bg-[#FFF200]" style={{ animation: 'interactive-progress 4.5s linear forwards', animationPlayState: isHovered ? 'paused' : 'running' }} />
            </div>
          </div>

          {/* Bottom Content Bar */}
          <div className="px-4 py-6 lg:px-10 lg:py-10 flex flex-col md:flex-row gap-4 lg:gap-6 justify-between items-start md:items-center">
             <div className="md:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 lg:mb-4 rounded-md bg-[#FFF200]/20 text-black text-[9px] lg:text-[10px] font-black uppercase tracking-widest border border-[#FFF200]/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFF200] shadow-[0_0_5px_#FFF200]"></span>
                  {INSPECTION_FEATURES[activeIndex].label}
                </div>
                <h3 className="text-xl lg:text-3xl font-black text-black leading-tight tracking-tight">
                  {INSPECTION_FEATURES[activeIndex].title}
                </h3>
             </div>
             
             <div className="md:w-1/2 md:text-right">
                <p className="text-[13px] lg:text-[17px] text-gray-500 font-medium leading-relaxed max-w-md ml-auto">
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
    <div className="bg-white text-black font-sans selection:bg-[#FFF200] selection:text-black overflow-x-hidden">
      
      {/* ════════════════════════════════════════
          HERO - ASSET & QUALITY INSPECTION
      ════════════════════════════════════════ */}
      <section className="relative pt-[100px] lg:pt-44 pb-10 lg:pb-20 bg-white overflow-hidden border-b border-gray-50">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
             
        <div className="max-w-[1400px] mx-auto px-5 lg:px-8 relative z-10">
          
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12 mb-8 lg:mb-14">
            <div className="flex-1 flex flex-col">
              <h1 className="text-[48px] sm:text-[60px] lg:text-[85px] font-black leading-[0.95] tracking-tighter text-black mb-4 lg:mb-8">
                Asset Inspection
              </h1>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] sm:text-[12px] lg:text-[14px] font-bold text-gray-500 tracking-wide">
                <span className="flex items-center gap-1.5"><Check size={14} strokeWidth={4} className="text-[#FFF200]"/> 360° Walks</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full hidden sm:block"></span>
                <span className="flex items-center gap-1.5"><Check size={14} strokeWidth={4} className="text-[#FFF200]"/> Facade Scans</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full hidden md:block"></span>
                <span className="flex items-center gap-1.5"><Check size={14} strokeWidth={4} className="text-[#FFF200]"/> AI Defects</span>
              </div>
            </div>
            
            <div className="flex-1 lg:max-w-md flex flex-col pt-2 lg:pt-0">
              <h2 className="text-[17px] lg:text-[28px] font-medium leading-relaxed text-gray-800 tracking-tight">
                Replace manual walkthroughs with drone-based aerial documentation.
              </h2>
            </div>
          </div>

          <div className="w-full aspect-[4/5] sm:aspect-[4/3] md:aspect-[2.2/1] rounded-[24px] lg:rounded-[40px] overflow-hidden bg-[#0A0A0A] relative shadow-2xl lg:shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-200 group">
            <img src="https://ik.imagekit.io/saxybrgkp/MME/Land%20Survey%20Website%20Image.png" alt="Asset Inspection Interface" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[20s] ease-out opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10"></div>
            
            {/* Scaled overlays for mobile */}
            <div className="absolute bottom-4 right-4 lg:bottom-8 lg:right-8 bg-white/90 backdrop-blur-2xl px-4 py-3 lg:px-6 lg:py-4 rounded-xl lg:rounded-2xl border border-white/50 flex items-center gap-4 lg:gap-6 shadow-2xl text-black">
               <div className="text-right">
                  <div className="text-[7px] lg:text-[9px] text-gray-500 font-bold uppercase tracking-widest mb-0.5">Coverage</div>
                  <div className="text-black font-mono text-sm lg:text-base font-black">100%</div>
               </div>
               <div className="w-[1px] h-6 lg:h-8 bg-gray-300"></div>
               <div className="text-right">
                  <div className="text-[7px] lg:text-[9px] text-gray-500 font-bold uppercase tracking-widest mb-0.5">Status</div>
                  <div className="text-red-600 font-mono text-sm lg:text-base font-bold">12 Flagged</div>
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════
          INSPECTION STATS ROW (MOBILE GRID)
      ════════════════════════════════════════ */}
      <section className="bg-white py-10 lg:py-16 border-b border-gray-50">
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
          THE PROBLEM: MANUAL INSPECTION RISKS
      ════════════════════════════════════════ */}
      <section className="bg-white py-16 lg:py-32 font-sans relative overflow-hidden border-b border-gray-50">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        <div className="max-w-[1200px] mx-auto px-5 lg:px-10 relative z-10">
          
          <div className="text-center mb-12 lg:mb-20">
            <h2 className="text-[34px] sm:text-[44px] lg:text-[56px] font-black tracking-tighter leading-[1.05] text-[#0A0A0A] mb-5">
              Manual inspections are <br className="hidden sm:block"/>
              <span className="relative inline-block mt-1 lg:mt-2">
                <span className="absolute inset-y-1 lg:inset-y-2 -inset-x-2 bg-[#FFF200] rounded-xl shadow-sm"></span>
                <span className="relative text-black px-1">slow, risky, and incomplete.</span>
              </span>
            </h2>
            <p className="text-[15px] lg:text-xl text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto">
              Sending crews into hazardous areas shouldn't be your first line of defense.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
            {[
              { icon: <AlertTriangle size={20}/>, t: "Safety Risks", d: "Climbing towers or steep ridges introduces severe safety liabilities." },
              { icon: <Timer size={20}/>, t: "Costly Downtime", d: "Erecting scaffolding and halting operations costs thousands in lost productivity." },
              { icon: <Search size={20}/>, t: "Inconsistent Data", d: "Ground-level photos miss hidden corrosion and critical roof-level defects." },
              { icon: <Activity size={20}/>, t: "Reactive Maintenance", d: "Without historical visual records, you are forced to fix assets only after they fail." }
            ].map((card, i) => (
              <div key={i} className="bg-gray-50 rounded-[24px] lg:rounded-[32px] p-6 lg:p-10 border border-gray-100 shadow-sm flex flex-col group">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-black mb-4 lg:mb-6 shadow-sm border border-gray-100">
                  {card.icon}
                </div>
                <h3 className="text-[17px] lg:text-xl font-black text-black tracking-tight mb-2">{card.t}</h3>
                <p className="text-[13px] lg:text-base text-gray-500 font-medium leading-relaxed">
                  {card.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          THE SOLUTION: EXPLICIT ASSET TARGETS (DARK)
      ════════════════════════════════════════ */}
      <section className="bg-[#0A0A0A] py-16 lg:py-32 font-sans relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[300px] bg-[#FFF200]/5 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 relative z-10 text-center">
          
          <h2 className="text-[34px] sm:text-[44px] lg:text-[56px] font-black tracking-tighter leading-[1.05] text-white mb-5">
            Inspect the unreachable with <br className="hidden sm:block"/>
            <span className="text-[#FFF200] block sm:inline mt-1 sm:mt-0">drone data.</span>
          </h2>
          <p className="text-[15px] lg:text-xl text-gray-400 font-medium leading-relaxed max-w-3xl mx-auto mb-10 lg:mb-16">
            YelloSKYE captures high-res imagery and thermal data of your hardest-to-reach infrastructure.
          </p>

          {/* 2-Column Grid on Mobile */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 max-w-5xl mx-auto">
            {[
              { icon: <Zap size={20}/>, title: "Power & Transmission" },
              { icon: <Factory size={20}/>, title: "Industrial Chimneys" },
              { icon: <Sun size={20}/>, title: "Solar Roofs" },
              { icon: <Building size={20}/>, title: "Facades & Ridges" }
            ].map((asset, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-[20px] p-5 lg:p-6 flex flex-col items-center justify-center gap-3">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#FFF200]/10 flex items-center justify-center text-[#FFF200]">
                  {asset.icon}
                </div>
                <h4 className="text-white font-bold text-[10px] lg:text-sm uppercase tracking-widest text-center leading-snug">
                  {asset.title}
                </h4>
              </div>
            ))}
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
      <section className="relative bg-white py-16 lg:py-24 overflow-hidden border-b border-gray-50">
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
      <section className="bg-white py-16 lg:py-24 relative overflow-hidden font-sans">
        <style>{`
          @keyframes hub-glow { 0%, 100% { opacity: 0.15; transform: scale(1); } 50% { opacity: 0.25; transform: scale(1.05); } }
        `}</style>
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        
        <div className="max-w-[1500px] mx-auto px-5 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-10 lg:mb-16">
            <h2 className="text-[34px] sm:text-[44px] lg:text-[48px] font-black tracking-tighter leading-[1.05] text-black mb-4">
              Remote Inspections <br className="sm:hidden" />
              <span className="relative inline-block mt-1 sm:mt-2 mx-1">
                <span className="absolute inset-y-0 -inset-x-2 bg-[#FFF200] rounded-lg shadow-sm"></span>
                <span className="relative text-black px-1">Without Site Access.</span>
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