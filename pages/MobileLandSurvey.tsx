import React, { useState } from "react";
import { 
  X, Check, ArrowRight, DownloadCloud, Layers, MapPin, Mail, 
  Twitter, Linkedin, Youtube, Instagram, Crosshair, Box, FileOutput, 
  Camera, Clock, AlertTriangle, Unplug, History, BarChart, Activity
} from "lucide-react";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const TERRAIN_FEATURES = [
  {
    id: 'topography',
    label: 'Topographic Mapping',
    title: 'Survey-Grade Topographic Maps',
    desc: 'High-resolution contour maps with elevation data. Plan drainage, access roads, and foundation levels with confidence.',
    gif: '/gifs/topography.gif',
    fallbackImg: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2500&auto=format&fit=crop',
    placeholderBg: 'bg-green-50'
  },
  {
    id: 'cut-fill',
    label: 'Cut & Fill Analysis',
    title: 'Automated Earthwork Calculations',
    desc: 'Automated earthwork calculations. Validate contractor claims with visual proof of volumes moved.',
    gif: '/gifs/cut-fill.gif',
    fallbackImg: 'https://images.unsplash.com/photo-1541888086225-f64069f2142e?q=80&w=2500&auto=format&fit=crop',
    placeholderBg: 'bg-yellow-50'
  },
  {
    id: 'stockpile',
    label: 'Stockpile Measurement',
    title: 'Precise Material Tracking',
    desc: 'Track material volumes over time. Know exactly how much aggregate, soil, or rubble is on site.',
    gif: '/gifs/elevation-terrain.gif', 
    fallbackImg: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2836?q=80&w=2500&auto=format&fit=crop',
    placeholderBg: 'bg-blue-50'
  },
  {
    id: 'drainage',
    label: 'Drainage Planning',
    title: 'Proactive Water Flow Analysis',
    desc: 'Identify low points and water flow paths before excavation starts. Prevent flooding issues proactively.',
    gif: '/gifs/watershed.gif',
    fallbackImg: 'https://images.unsplash.com/photo-1580050854614-22b9365c192f?q=80&w=2500&auto=format&fit=crop',
    placeholderBg: 'bg-cyan-50'
  },
  {
    id: 'as-built',
    label: 'As-Built Verification',
    title: 'Design vs. Reality Comparison',
    desc: 'Compare final terrain against design intent. Prove site was prepared to specification for handover.',
    gif: '/gifs/slope-analysis.gif',
    fallbackImg: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2500&auto=format&fit=crop',
    placeholderBg: 'bg-orange-50'
  },
  {
    id: 'change-detection',
    label: 'Change Detection',
    title: 'Visual Diff Over Time',
    desc: 'Visual diff between survey dates. See exactly where earthwork happened and validate progress claims.',
    gif: '/gifs/contour.gif',
    fallbackImg: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2500&auto=format&fit=crop',
    placeholderBg: 'bg-purple-50'
  }
];

// ─── SUB-COMPONENT: INTERACTIVE DASHBOARD (MOBILE OPTIMIZED) ─────────────────

const MobileTerrainRepresentation = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative bg-white pt-10 pb-12 overflow-hidden font-sans border-t border-gray-100 z-10">
      <div className="px-5 mb-8 text-center">
        <h2 className="text-[32px] font-black tracking-tighter leading-[1.05] text-black mb-4">
          A complete <br/>
          <span className="relative inline-block mt-1">
            <span className="absolute inset-y-0 -inset-x-2 bg-[#FFF200] rounded-lg"></span>
            <span className="relative text-black px-1">digital representation</span>
          </span>
          <br />
          of your site.
        </h2>
        <p className="text-[14px] text-gray-500 font-medium leading-relaxed max-w-[320px] mx-auto">
          We capture and process your site into intelligent, layered terrain models. Every grade, slope, and elevation is mapped.
        </p>
      </div>

      {/* Swipeable Tabs */}
      <div className="w-full overflow-x-auto hide-scrollbar px-5 pb-4">
        <div className="flex gap-2 min-w-max">
          {TERRAIN_FEATURES.map((feature, index) => {
            const isActive = activeIndex === index;
            return (
              <button
                key={feature.id}
                onClick={() => setActiveIndex(index)}
                className={`whitespace-nowrap px-4 py-2 text-[10px] font-black uppercase tracking-widest transition-all duration-300 rounded-full border
                  ${isActive 
                    ? 'bg-black border-black text-[#FFF200] shadow-md' 
                    : 'bg-gray-50 border-gray-200 text-gray-500'
                  }`}
              >
                {feature.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Viewer Area */}
      <div className="px-5 relative">
        <div className="relative w-full aspect-[4/3] bg-black overflow-hidden rounded-[24px] shadow-lg mb-4">
          {TERRAIN_FEATURES.map((feature, index) => (
            <div 
              key={feature.id}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${feature.placeholderBg}
                ${activeIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}
              `}
            >
              <img 
                src={feature.gif} 
                alt={feature.title}
                className="w-full h-full object-cover opacity-90 mix-blend-screen"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = feature.fallbackImg;
                }}
              />
            </div>
          ))}
        </div>

        {/* Content Box */}
        <div className="bg-gray-50 rounded-[20px] p-5 border border-gray-100">
           <h3 className="text-[18px] font-black text-black leading-tight tracking-tight mb-2">
             {TERRAIN_FEATURES[activeIndex].title}
           </h3>
           <p className="text-[13px] text-gray-500 font-medium leading-relaxed">
             {TERRAIN_FEATURES[activeIndex].desc}
           </p>
        </div>
      </div>
    </section>
  );
};

// ─── MAIN MOBILE PAGE ────────────────────────────────────────────────────────
export const MobileLandSurvey = () => {
  return (
    <div className="bg-white text-black font-sans selection:bg-[#FFF200] selection:text-black overflow-x-hidden pt-20">
      
      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 20s linear infinite; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes data-flow-out { from { stroke-dashoffset: 24; } to { stroke-dashoffset: 0; } }
        @keyframes radar-ping { 0% { transform: scale(0.5); opacity: 0.8; } 100% { transform: scale(2.5); opacity: 0; } }
        .animate-data-flow { animation: data-flow-out 1s linear infinite; }
        .animate-radar { animation: radar-ping 3s cubic-bezier(0.0, 0.2, 0.8, 1) infinite; }
        
        .animate-float-1 { animation: float-1 6s ease-in-out infinite; }
        @keyframes float-1 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
      `}</style>

      {/* Global Background Grid */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      {/* ════════════════════════════════════════
          MOBILE-OPTIMIZED HERO (LEFT ALIGNED)
      ════════════════════════════════════════ */}
      <section className="pt-24 pb-8 px-5 relative z-10 flex flex-col items-start text-left">
        
        {/* Massive Left-Aligned Headline */}
        <h1 className="text-[18vw] sm:text-7xl font-black tracking-tighter leading-[0.9] text-black mb-6">
          Land<br/>Survey
        </h1>

        {/* Feature Tags (Wrapped cleanly like your screenshot) */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-3 mb-6 max-w-[340px]">
          <span className="flex items-center gap-2 text-[12px] font-bold text-gray-600">
            <Check size={16} strokeWidth={4} className="text-[#FFF200]" /> Millimeter Accuracy
          </span>
          <span className="flex items-center gap-2 text-[12px] font-bold text-gray-600">
            <Check size={16} strokeWidth={4} className="text-[#FFF200]" /> Volumetric Data
          </span>
          <span className="flex items-center gap-2 text-[12px] font-bold text-gray-600">
            <Check size={16} strokeWidth={4} className="text-[#FFF200]" /> Topographic Contours
          </span>
        </div>

        {/* Subheadline */}
        <h2 className="text-[16px] font-medium leading-relaxed text-gray-700 max-w-[320px] mb-8">
          Survey-grade intelligence that turns land data into a trusted decision reference.
        </h2>

        {/* Hero Image Container (aspect-[4/3] matches the left-aligned UI perfectly) */}
        <div className="w-full aspect-[4/3] rounded-[28px] overflow-hidden bg-gray-900 relative shadow-xl border border-gray-200">
          <img 
            src="https://i.ibb.co/PXTtN59/Website-Visuals-Presentation-12.png" 
            alt="Land Survey Visual" 
            className="w-full h-full object-cover"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10"></div>

          {/* Top Left Badge (Grey Pill) */}
          <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md px-3 py-2 rounded-xl flex items-center gap-2 shadow-sm">
             <div className="flex items-end gap-1 h-3">
                <div className="w-1 h-1/2 bg-black rounded-full animate-pulse"></div>
                <div className="w-1 h-3/4 bg-gray-500 rounded-full"></div>
                <div className="w-1 h-full bg-gray-500 rounded-full"></div>
             </div>
             <span className="text-[9px] font-black uppercase tracking-widest text-black mt-0.5">Terrain Scan Active</span>
          </div>

          {/* Bottom Split HUD */}
          <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-xl px-5 py-3.5 rounded-[20px] border border-white/10 shadow-2xl flex items-center justify-between">
             
             {/* Elevation Block */}
             <div className="flex flex-col items-start">
               <div className="text-[8px] text-gray-400 font-bold uppercase tracking-[0.2em] mb-0.5">Elevation</div>
               <div className="text-[#FFF200] font-mono text-[14px] font-bold">142.8m</div>
             </div>
             
             {/* Divider Line */}
             <div className="h-6 w-px bg-white/20"></div>
             
             {/* Coordinates Block */}
             <div className="flex flex-col items-end">
               <div className="text-[8px] text-gray-400 font-bold uppercase tracking-[0.2em] mb-0.5">Coordinates</div>
               <div className="text-white font-mono text-[12px] font-bold tracking-widest">18°55'N 72°50'E</div>
             </div>

          </div>
        </div>

      </section>

      {/* ════════════════════════════════════════
          TRUST BAR (2x2 Grid on Mobile)
      ════════════════════════════════════════ */}
      <section className="bg-white border-b border-gray-100 py-8 relative z-10">
        <div className="px-5 grid grid-cols-2 gap-y-6 gap-x-4">
          {[
            { label: "Accuracy", value: "±3cm", sub: "Vertical" },
            { label: "Resolution", value: "Sub-cm", sub: "Point density" },
            { label: "Coverage", value: "500+", sub: "Acres / flight" },
            { label: "Delivery", value: "48h", sub: "Capture to DEX" },
          ].map((spec, i) => (
            <div key={i} className="flex flex-col items-start text-left">
              <div className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFF200]"></span>
                {spec.label}
              </div>
              <div className="text-[28px] font-black text-black mb-0.5 tracking-tighter">
                {spec.value}
              </div>
              <div className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">
                {spec.sub}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════
          THE PROBLEM WITH TRADITIONAL SURVEYS
      ════════════════════════════════════════ */}
      <section className="relative bg-gray-50 pt-16 pb-12 overflow-hidden font-sans z-10 border-t border-gray-100">
        <div className="px-5 mb-10 text-left">
          <h2 className="text-[32px] font-black tracking-tighter leading-[1.05] text-black mb-4">
            Beyond the limits of <br />
            <span className="relative inline-block mt-1">
              <span className="absolute inset-y-0 -inset-x-2 bg-[#FFF200] rounded-lg"></span>
              <span className="relative text-black px-1">traditional surveys.</span>
            </span>
          </h2>
          <p className="text-[14px] text-gray-500 font-medium leading-relaxed max-w-[320px]">
            As excavation and grading progress, the site changes—leaving teams to make critical decisions on obsolete information.
          </p>
        </div>

        <div className="px-5 space-y-3">
          {[
            { icon: <Camera size={18} />, title: "One-Time Snapshots", desc: "Traditional surveys capture a moment in time. Data becomes quickly outdated." },
            { icon: <Clock size={18} />, title: "Slow Turnaround", desc: "Ground surveys take weeks. Site conditions have already moved on." },
            { icon: <AlertTriangle size={18} />, title: "Billing Disputes", desc: "Manual calculations lead to arguments over volumes without visual proof." },
            { icon: <Unplug size={18} />, title: "Coordination Gaps", desc: "Design assumes one terrain. Execution encounters another." }
          ].map((card, i) => (
            <div key={i} className="p-5 rounded-[20px] bg-white border border-gray-100 flex items-start gap-4 shadow-sm">
              <div className="w-10 h-10 shrink-0 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-black">
                {card.icon}
              </div>
              <div>
                <h3 className="text-[15px] font-black text-black mb-1 tracking-tight">{card.title}</h3>
                <p className="text-[12px] text-gray-500 font-medium leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════
          VISUAL CLARITY VS TRADITIONAL (STACKED)
      ════════════════════════════════════════ */}
      <section className="relative bg-white pt-16 pb-16 overflow-hidden font-sans z-10 border-t border-gray-100">
        <div className="px-5 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-[9px] font-black uppercase tracking-[0.2em] text-gray-500 mb-4 shadow-sm">
            Operational Clarity
          </div>
          <h2 className="text-[32px] font-black tracking-tighter leading-[1.05] text-black mb-4">
            Precision meets <br />
             <span className="relative inline-block mt-1">
              <span className="absolute inset-y-1 -inset-x-2 bg-[#FFF200] rounded-lg"></span>
              <span className="relative text-black px-1">visual intelligence.</span>
            </span>
          </h2>
          <p className="text-[14px] text-gray-500 font-medium leading-relaxed">
            We use AI to structure raw accuracy into an interactive visual reference.
          </p>
        </div>

        <div className="px-5 space-y-4">
          
          {/* Traditional Card */}
          <div className="bg-gray-50 border border-gray-200 rounded-[24px] p-5 shadow-sm">
            <h3 className="text-[11px] font-black uppercase tracking-widest text-gray-400 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span> Traditional Survey
            </h3>
            <div className="w-full h-32 bg-gray-200 rounded-xl mb-5 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800" className="w-full h-full object-cover opacity-30 grayscale" alt="CAD" />
            </div>
            <ul className="space-y-3">
              {["Requires technical expertise", "Static, disconnected deliverables", "Manual volume calculations"].map((item, i) => (
                <li key={i} className="flex gap-2.5 items-start text-gray-500">
                  <X size={14} strokeWidth={3} className="text-red-300 mt-0.5 shrink-0" />
                  <span className="text-[12px] font-medium leading-tight">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* YelloSKYE Card */}
          <div className="bg-[#0A0A0A] text-white rounded-[24px] p-5 shadow-xl border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#FFF200] rounded-full blur-[70px] opacity-10"></div>
            
            <h3 className="text-[11px] font-black uppercase tracking-widest text-[#FFF200] mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#FFF200] rounded-full animate-pulse"></span> YelloSKYE Intelligence
            </h3>
            
            <div className="w-full h-36 bg-black rounded-xl mb-5 overflow-hidden relative border border-white/10 shadow-inner">
              <img src="https://i.ibb.co/bMN7Kzv0/Website-Visuals-Presentation-7.png" className="w-full h-full object-cover opacity-80" alt="DEX" />
              <div className="absolute top-2 left-2 bg-[#111]/80 backdrop-blur-md px-2 py-1 rounded flex items-center gap-1.5 border border-white/10">
                <Layers size={10} className="text-[#FFF200]" />
                <span className="text-[7px] font-black uppercase tracking-widest text-gray-300">AI Processing</span>
              </div>
            </div>

            <ul className="space-y-3 relative z-10">
              {[
                <><span className="text-white font-black">AI-classified</span> 3D models</>,
                <><span className="text-[#FFF200] font-black">Automated</span> volume tracking</>,
                <>Accessible via <span className="text-white font-black">web browser</span></>
              ].map((item, i) => (
                <li key={i} className="flex gap-2.5 items-start">
                  <Check size={14} strokeWidth={4} className="text-[#FFF200] mt-0.5 shrink-0" />
                  <span className="text-[12px] font-medium leading-tight text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════
          INTERACTIVE TABS
      ════════════════════════════════════════ */}
      <MobileTerrainRepresentation />

      {/* ════════════════════════════════════════
          CONTINUOUS VALUE
      ════════════════════════════════════════ */}
      <section className="relative bg-gray-50 pt-16 pb-12 overflow-hidden font-sans z-10 border-t border-gray-100">
        <div className="px-5 mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 bg-white text-[9px] font-black uppercase tracking-[0.2em] text-gray-500 mb-4 shadow-sm">
            Continuous Value
          </div>
          <h2 className="text-[32px] font-black tracking-tighter leading-[1.05] text-black mb-4">
            Data that stays usable <br /> beyond Day One.
          </h2>
        </div>

        {/* Visual Box */}
        <div className="px-5 mb-6">
          <div className="w-full aspect-square rounded-[24px] overflow-hidden bg-gray-100 relative shadow-lg border border-gray-200">
            <img src="https://images.unsplash.com/photo-1581094288338-2314dddb31b5?q=80&w=800" className="w-full h-full object-cover" alt="Terrain" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md p-3.5 rounded-[16px] shadow-lg flex items-center gap-3 border border-white/50">
               <div className="w-10 h-10 bg-[#FFF200] rounded-xl flex items-center justify-center">
                  <Check size={20} strokeWidth={3} className="text-black" />
               </div>
               <div>
                  <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Verified Tolerance</p>
                  <p className="text-xl font-black text-black leading-none">±2.1 cm</p>
               </div>
            </div>
          </div>
        </div>

        {/* Micro Cards */}
        <div className="px-5 grid grid-cols-2 gap-3">
          {[
            { icon: <Crosshair size={14}/>, title: "Design-Grade", desc: "±2cm accuracy." },
            { icon: <History size={14}/>, title: "Frequent", desc: "Weekly tracking." },
            { icon: <BarChart size={14}/>, title: "Volumes", desc: "Instant cut-fill." },
            { icon: <Layers size={14}/>, title: "History", desc: "See past states." }
          ].map((card, i) => (
            <div key={i} className="bg-white border border-gray-200 p-4 rounded-[16px] shadow-sm flex flex-col items-center text-center">
              <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-black mb-2 shadow-sm border border-gray-100">
                {card.icon}
              </div>
              <h4 className="font-black text-[11px] mb-1">{card.title}</h4>
              <p className="text-[10px] text-gray-500 font-medium">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════
          COMPATIBLE WITH DESIGN TOOLS
      ════════════════════════════════════════ */}
      <section className="relative bg-white pt-12 pb-16 overflow-hidden font-sans z-10 border-t border-gray-100">
        <div className="px-5 text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-[9px] font-black uppercase tracking-[0.2em] text-gray-500 mb-4 shadow-sm">
            Seamless Integration
          </div>
          <h2 className="text-[32px] font-black tracking-tighter leading-[1.05] text-black">
            Compatible with <br/> design tools.
          </h2>
        </div>

        {/* Animated Visual Area */}
        <div className="px-5 mb-8">
          <div className="relative w-full aspect-[4/5] rounded-[24px] border border-gray-200 shadow-md overflow-hidden bg-gray-50 flex items-center justify-center">
            
            <svg className="absolute inset-0 w-full h-full z-0">
              <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="#E5E7EB" strokeWidth="2" />
              <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="#E5E7EB" strokeWidth="2" />
              <line x1="50%" y1="50%" x2="20%" y2="80%" stroke="#E5E7EB" strokeWidth="2" />
              <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="#E5E7EB" strokeWidth="2" />
              
              <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="#D4C900" strokeWidth="2" strokeDasharray="4 15" className="animate-data-flow" />
              <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="#D4C900" strokeWidth="2" strokeDasharray="4 15" className="animate-data-flow" />
              <line x1="50%" y1="50%" x2="20%" y2="80%" stroke="#D4C900" strokeWidth="2" strokeDasharray="4 15" className="animate-data-flow" />
              <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="#D4C900" strokeWidth="2" strokeDasharray="4 15" className="animate-data-flow" />
            </svg>

            {/* Hub */}
            <div className="absolute z-30 w-16 h-16 bg-[#0A0A0A] rounded-[16px] flex items-center justify-center shadow-xl">
              <div className="absolute inset-0 rounded-[16px] border border-[#FFF200]/40 animate-radar"></div>
              <DownloadCloud size={24} className="text-[#FFF200]" />
            </div>

            {/* Nodes */}
            <div className="absolute top-[15%] left-[10%] bg-white p-2.5 rounded-xl border border-gray-200 shadow-sm animate-float-1">
               <Box size={16} className="text-[#0696D7]"/>
            </div>
            <div className="absolute top-[15%] right-[10%] bg-white p-2.5 rounded-xl border border-gray-200 shadow-sm animate-float-1" style={{ animationDelay: '1s' }}>
               <Layers size={16} className="text-[#4B55E8]"/>
            </div>
            <div className="absolute bottom-[15%] left-[10%] bg-white p-2.5 rounded-xl border border-gray-200 shadow-sm animate-float-1" style={{ animationDelay: '2s' }}>
               <MapPin size={16} className="text-[#10B981]"/>
            </div>
            <div className="absolute bottom-[15%] right-[10%] bg-white p-2.5 rounded-xl border border-gray-200 shadow-sm animate-float-1" style={{ animationDelay: '0.5s' }}>
               <Activity size={16} className="text-[#D97706]"/>
            </div>
            
            <div className="absolute bottom-4 left-4 right-4 bg-[#0A0A0A] px-4 py-3 rounded-xl flex justify-between items-center z-40 border border-white/10">
              <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Status</span>
              <span className="text-[#FFF200] text-[10px] font-bold">Export Ready</span>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="px-5 grid grid-cols-2 gap-3">
          {[
            { icon: <Box size={14}/>, title: "CAD", desc: "DWG / DXF." },
            { icon: <Layers size={14}/>, title: "BIM", desc: "RCP, LAS, LAZ." },
            { icon: <MapPin size={14}/>, title: "GIS", desc: "GeoTIFF." },
            { icon: <FileOutput size={14}/>, title: "Mesh", desc: "OBJ & FBX." }
          ].map((card, i) => (
            <div key={i} className="bg-white border border-gray-200 p-4 rounded-[16px] shadow-sm flex flex-col items-center text-center">
              <div className="w-8 h-8 rounded-lg bg-gray-50 text-[#D4C900] flex items-center justify-center mb-2 shadow-sm border border-gray-100">
                {card.icon}
              </div>
              <h4 className="font-black text-black text-[11px] mb-0.5">{card.title}</h4>
              <p className="text-[10px] text-gray-500 font-medium">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ====================== LOGOS ====================== */}
      <section className="py-8 border-y border-gray-100 bg-white relative z-10">
        <p className="text-center text-[8px] font-black uppercase tracking-[0.5em] text-gray-400 mb-6 px-4">
          Trusted by the best in the business
        </p>
        <div className="overflow-hidden flex w-full relative">
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10"></div>
          <div className="flex shrink-0 animate-marquee items-center gap-10 px-4">
            {[1, 2, 3].map((key) => (
              <React.Fragment key={key}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/L%26T.png/640px-L%26T.png" alt="L&T" className="h-6 object-contain grayscale opacity-60" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/640px-Amazon_logo.svg.png" alt="Amazon" className="h-5 object-contain grayscale opacity-60" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/1200px-Tata_logo.svg.png" alt="TATA" className="h-6 object-contain grayscale opacity-60" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Adani_logo_2012.svg" alt="Adani" className="h-6 object-contain grayscale opacity-60" />
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== FORM ====================== */}
      <section className="bg-[#0A0A0A] py-16 px-5 relative overflow-hidden text-white z-10">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#FFF200]/10 blur-[80px] rounded-full pointer-events-none" />
        
        <div className="mb-10 relative z-10 text-center">
          <h3 className="text-[32px] font-black tracking-tighter mb-4 leading-[1.1]">
            Ready to gain <br/>
            <span className="text-[#FFF200]">absolute clarity?</span>
          </h3>
          <p className="text-[13px] text-gray-400 font-medium leading-relaxed mb-6 px-4">
            Stop debating interpretations. Request a custom site walkthrough.
          </p>
        </div>

        <form className="space-y-3 relative z-10">
          <input placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white text-[14px] focus:border-[#FFF200] outline-none transition-colors" />
          <input placeholder="Work Email" type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white text-[14px] focus:border-[#FFF200] outline-none transition-colors" />
          <input placeholder="Company" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white text-[14px] focus:border-[#FFF200] outline-none transition-colors" />
          <button type="button" className="w-full bg-[#FFF200] text-black font-black py-4 rounded-xl uppercase tracking-[0.2em] text-[11px] mt-4 shadow-[0_10px_20px_rgba(255,242,0,0.15)] active:scale-95 flex justify-center items-center gap-2 transition-transform">
            Book a Demo <ArrowRight size={14} strokeWidth={3}/>
          </button>
        </form>
      </section>

    </div>
  );
};

export default MobileLandSurvey;