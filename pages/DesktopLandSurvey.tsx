import React, { useState, useEffect } from "react";
import { 
  X, Check, ArrowRight, DownloadCloud, Globe, Layers, MapPin, Mail, 
  Twitter, Linkedin, Youtube, Instagram, PlayCircle, BarChart, History, 
  Crosshair, Box, FileOutput, Camera, Clock, AlertTriangle, Unplug 
} from "lucide-react";
import { 
 Play,Film, Zap, Users, ShieldCheck,
  Video, MoveUpRight, Sparkles, Image as ImageIcon, Maximize,
  Eye, Building2, Map, Activity,} from "lucide-react";
// ─── DATA ─────────────────────────────────────────────────────────────────────

const TERRAIN_FEATURES = [
  {
    id: 'topography',
    label: 'Topographic Mapping',
    title: 'Survey-Grade Topographic Maps',
    desc: 'High-resolution contour maps with elevation data. Plan drainage, access roads, and foundation levels with confidence.',
    gif: '/gifs/topography.gif',
    fallbackImg: 'https://ik.imagekit.io/saxybrgkp/Website%20Images%20Land%20Survey.png?updatedAt=1773637747665',
    placeholderBg: 'bg-green-50'
  },
  {
    id: 'cut-fill',
    label: 'Cut & Fill Analysis',
    title: 'Automated Earthwork Calculations',
    desc: 'Automated earthwork calculations. Validate contractor claims with visual proof of volumes moved.',
    gif: '/gifs/cut-fill.gif',
    fallbackImg: 'https://ik.imagekit.io/saxybrgkp/Website%20Images%20Land%20Survey%201.png?updatedAt=1773637747067',
    placeholderBg: 'bg-yellow-50'
  },
  {
    id: 'stockpile',
    label: 'Stockpile Measurement',
    title: 'Precise Material Tracking',
    desc: 'Track material volumes over time. Know exactly how much aggregate, soil, or rubble is on site.',
    gif: '/gifs/elevation-terrain.gif', 
    fallbackImg: 'https://ik.imagekit.io/saxybrgkp/Website%20Images%20Land%20Survey2.png?updatedAt=1773637747041',
    placeholderBg: 'bg-blue-50'
  },
  {
    id: 'drainage',
    label: 'Drainage Planning',
    title: 'Proactive Water Flow Analysis',
    desc: 'Identify low points and water flow paths before excavation starts. Prevent flooding issues proactively.',
    gif: '/gifs/watershed.gif',
    fallbackImg: 'https://ik.imagekit.io/saxybrgkp/Website%20Images%20Land%20Survey3.png?updatedAt=1773637746794',
    placeholderBg: 'bg-cyan-50'
  },
  {
    id: 'change-detection',
    label: 'Change Detection',
    title: 'Visual Diff Over Time',
    desc: 'Visual diff between survey dates. See exactly where earthwork happened and validate progress claims.',
    gif: '/gifs/contour.gif',
    fallbackImg: 'https://ik.imagekit.io/saxybrgkp/Website%20Images%20Land%20Survey5.png',
    placeholderBg: 'bg-purple-50'
  }
];

// ─── SUB-COMPONENT: INTERACTIVE DASHBOARD ─────────────────────────────────────

const TerrainRepresentationSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % TERRAIN_FEATURES.length);
    }, 4500); 
    return () => clearTimeout(timer);
  }, [activeIndex, isHovered]);

  return (
    <section className="relative bg-white pt-4 lg:pt-8 pb-12 lg:pb-16 overflow-hidden font-sans">
      
      <style>{`
        @keyframes interactive-progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>

      {/* Aesthetic Seamless Grid Fade - Fades at both top and bottom */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", 
          backgroundSize: "80px 80px",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)"
        }} 
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Tighter margins, strictly 2 lines */}
        <div className="text-center max-w-4xl mx-auto mb-8 lg:mb-10">
          <h2 className="text-[clamp(32px,4vw,48px)] font-black tracking-tighter leading-[1.2] text-black mb-4">
            A complete <span className="relative inline-block mx-1">
              <span className="absolute inset-y-0 -inset-x-2 bg-[#FFF200] rounded-xl"></span>
              <span className="relative text-black">digital representation</span>
            </span>
            <br />
            of your site terrain.
          </h2>
          
          {/* UPDATED: Increased max-w and added a responsive line break for perfect 2-line balance */}
          <p className="text-base lg:text-lg text-gray-500 font-medium leading-relaxed max-w-4xl mx-auto">
            We capture and process your site into intelligent, layered terrain models. Every grade, slope, <br className="hidden md:block" />
            and elevation is mapped with survey-grade precision, ready for analysis right in your browser.
          </p>
        </div>

        {/* Interactive Viewer Component - Tighter padding to save space */}
        <div 
          className="bg-white rounded-[24px] lg:rounded-[32px] border border-gray-200 shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-3 lg:p-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Top Navigation Tabs */}
          <div className="flex gap-2 overflow-x-auto hide-scrollbar scroll-smooth mb-3 pb-1 px-1">
            {TERRAIN_FEATURES.map((feature, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveIndex(index)}
                  className={`whitespace-nowrap px-5 py-2 text-[10px] font-black uppercase tracking-widest transition-all duration-300 rounded-full border
                    ${isActive 
                      ? 'bg-black border-black text-[#FFF200] shadow-md' 
                      : 'bg-transparent border-gray-200 text-gray-500 hover:border-gray-400 hover:text-black'
                    }`}
                >
                  {feature.label}
                </button>
              );
            })}
          </div>

          {/* Viewer Area - Aspect ratio made wider (2.5/1) to reduce height */}
          <div className="relative w-full aspect-[16/9] lg:aspect-[2.5/1] bg-black overflow-hidden rounded-[20px] group mb-3">
            {TERRAIN_FEATURES.map((feature, index) => (
              <div 
                key={feature.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${feature.placeholderBg}
                  ${activeIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}
                `}
              >
                {/* CHANGED: src is now pointing to fallbackImg, and removed mix-blend-screen */}
                <img 
                  src={feature.fallbackImg} 
                  alt={feature.title}
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.4)] pointer-events-none"></div>
              </div>
            ))}
            
            <div className="absolute bottom-0 left-0 w-full h-[6px] bg-white/20 z-20">
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

          {/* Dynamic Content Bar - Tighter padding */}
          <div className="bg-gray-50 rounded-[20px] p-5 lg:p-6 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center border border-gray-100">
             <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-2 rounded bg-[#FFF200]/20 text-black text-[10px] font-black uppercase tracking-widest border border-[#FFF200]/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFF200] shadow-[0_0_5px_#FFF200]"></span>
                  {TERRAIN_FEATURES[activeIndex].label}
                </div>
                <h3 className="text-xl lg:text-2xl font-black text-black leading-tight tracking-tight">
                  {TERRAIN_FEATURES[activeIndex].title}
                </h3>
             </div>
             <div className="md:max-w-md md:text-right">
                <p className="text-sm lg:text-base text-gray-500 font-medium leading-relaxed">
                  {TERRAIN_FEATURES[activeIndex].desc}
                </p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

export const LandSurvey: React.FC = () => {
  return (
    <div className="bg-white text-black font-sans selection:bg-[#FFF200] selection:text-black">

      

      {/* ════════════════════════════════════════
          HERO - LAND SURVEY
      ════════════════════════════════════════ */}
      <section className="pt-24 md:pt-32 lg:pt-44 pb-12 lg:pb-20 max-w-[1400px] mx-auto bg-white relative">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ 
               backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", 
               backgroundSize: "80px 80px",
               maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
               WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)"
             }} />
             
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-10 lg:mb-14 relative z-10 items-center">
          
          <div className="lg:col-span-7 flex flex-col">
            <h1 className="text-[14vw] md:text-[90px] lg:text-[110px] font-black leading-[0.85] tracking-tighter text-black m-0 p-0 mb-6 lg:mb-8">
              Land Survey
            </h1>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] lg:text-[14px] font-bold text-gray-500 tracking-wide">
              <span className="flex items-center gap-1.5"><Check size={16} strokeWidth={4} className="text-[#FFF200]"/> Millimeter Accuracy</span>
              <span className="w-1.5 h-1.5 bg-gray-300 rounded-full hidden sm:block"></span>
              <span className="flex items-center gap-1.5"><Check size={16} strokeWidth={4} className="text-[#FFF200]"/> Volumetric Data</span>
              <span className="w-1.5 h-1.5 bg-gray-300 rounded-full hidden md:block"></span>
              <span className="flex items-center gap-1.5"><Check size={16} strokeWidth={4} className="text-[#FFF200]"/> Topographic Contours</span>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col">
            <h2 className="text-2xl lg:text-[28px] font-medium leading-[1.3] text-gray-800 tracking-tight">
              Survey-grade intelligence that turns land data into a trusted decision reference.
            </h2>
          </div>

        </div>

        <div className="w-full aspect-[4/3] md:aspect-[2.2/1] rounded-[32px] lg:rounded-[40px] overflow-hidden bg-gray-100 relative shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-200 group">
          <img 
            src="https://ik.imagekit.io/saxybrgkp/Website%20Images%20Land%20Survey.png" 
            alt="Website-Visuals-Presentation-12" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[20s] ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10"></div>

          <div className="absolute top-6 left-6 lg:top-8 lg:left-8 bg-white/60 backdrop-blur-2xl px-5 py-3 rounded-2xl flex items-center gap-3 shadow-lg border border-white/50">
             <div className="flex gap-1">
                <div className="w-1 h-3 bg-black rounded-full animate-pulse"></div>
                <div className="w-1 h-2 bg-gray-500 rounded-full"></div>
                <div className="w-1 h-4 bg-gray-500 rounded-full"></div>
             </div>
             <span className="text-[10px] font-black uppercase tracking-widest text-black mt-0.5">Terrain Scan Active</span>
          </div>

          <div className="absolute bottom-6 right-6 lg:bottom-8 lg:right-8 bg-black/60 backdrop-blur-2xl px-6 py-4 rounded-2xl border border-white/20 flex items-center gap-6 shadow-2xl">
             <div className="text-right">
                <div className="text-[9px] text-gray-300 font-bold uppercase tracking-widest mb-1">Elevation</div>
                <div className="text-[#FFF200] font-mono text-base font-bold">142.8m</div>
             </div>
             <div className="w-[1px] h-8 bg-white/20"></div>
             <div className="text-right">
                <div className="text-[9px] text-gray-300 font-bold uppercase tracking-widest mb-1">Coordinates</div>
                <div className="text-white font-mono text-base font-bold">18°55'N 72°50'E</div>
             </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          THE TRUST BAR
      ════════════════════════════════════════ */}
      <section className="bg-white border-gray-100 py-12 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-gray-200">
             {[
               { label: "Accuracy", value: "±3-5cm", sub: "Vertical & Horizontal" },
               { label: "Resolution", value: "Sub-cm", sub: "Point density" },
               { label: "Coverage", value: "500+", sub: "Acres per flight" },
               { label: "Delivery", value: "48-72h", sub: "Capture to DEX" },
             ].map((spec, i) => (
               <div key={i} className={`flex flex-col pt-6 md:pt-0 ${i !== 0 ? "md:pl-8 lg:pl-12" : ""}`}>
                 <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                   <span className="w-1.5 h-1.5 rounded-full bg-[#FFF200]"></span>
                   {spec.label}
                 </div>
                 <div className="text-4xl lg:text-5xl font-black text-black mb-1 tracking-tighter">
                   {spec.value}
                 </div>
                 <div className="text-xs text-gray-500 font-bold uppercase tracking-wide">
                   {spec.sub}
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      

      {/* ════════════════════════════════════════
          TERRAIN REPRESENTATION (INTERACTIVE TABS) 
      ════════════════════════════════════════ */}
      <TerrainRepresentationSection />
      {/* ====================== COMPARISON SECTION ====================== */}
<section className="relative bg-white pt-24 lg:pt-32 pb-24 lg:pb-32 overflow-hidden font-sans border-b border-gray-100">
  
  <div className="max-w-[1450px] mx-auto px-6 lg:px-10">
    
    {/* Heading Area */}
    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-16 relative z-10 items-end">
      <div className="lg:col-span-7 flex flex-col items-start">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-gray-50 border border-gray-200 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 shadow-sm">
          Operational Clarity
        </div>
        <h2 className="text-[clamp(40px,5vw,72px)] font-black tracking-tighter leading-[1.05] text-[#0A0A0A]">
          Centimeter-level precision <br />
          meets <span className="bg-[#FFF200] px-4 py-1 rounded-[16px] text-black">visual intelligence.</span>
        </h2>
      </div>
      <div className="lg:col-span-5 pb-2">
        <p className="text-[18px] lg:text-[20px] text-gray-500 leading-relaxed font-medium">
          Traditional surveys trap data in technical silos. We use AI-assisted processing to structure that same accuracy into an interactive visual reference.
        </p>
      </div>
    </div>

    {/* Comparison Cards Grid */}
    <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 relative z-10">

      {/* CARD 1: TRADITIONAL (Fragmented / Siloed Concept) */}
      <div className="bg-[#F9FAFB] rounded-[32px] p-8 lg:p-12 border border-gray-200 shadow-sm flex flex-col group">
        
        <h3 className="text-[14px] font-black uppercase tracking-[0.2em] text-gray-400 mb-8 flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          Traditional Survey
        </h3>

        {/* Abstract Visual: Disconnected Data Silos */}
        <div className="w-full h-[200px] bg-white rounded-2xl border border-gray-200 mb-10 flex items-center justify-center relative overflow-hidden shadow-inner">
          {/* Subtle Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:20px_20px]"></div>
          
          {/* Disjointed File Blocks */}
          <div className="relative flex gap-6 items-center">
            <div className="w-20 h-24 bg-gray-50 border border-gray-200 rounded-lg shadow-sm flex flex-col items-center justify-center -translate-y-4 group-hover:-translate-y-5 transition-transform duration-500">
              <span className="text-[10px] font-mono text-gray-400 font-bold">.DWG</span>
              <div className="w-8 h-1 bg-gray-200 rounded mt-3"></div>
            </div>
            
            <div className="w-20 h-20 bg-gray-50 border border-gray-200 rounded-lg shadow-sm flex flex-col items-center justify-center translate-y-6 group-hover:translate-y-8 transition-transform duration-500">
              <span className="text-[10px] font-mono text-gray-400 font-bold">.LAS</span>
              <div className="w-6 h-1 bg-gray-200 rounded mt-3"></div>
            </div>

            <div className="w-20 h-28 bg-gray-50 border border-gray-200 rounded-lg shadow-sm flex flex-col items-center justify-center -translate-y-2 group-hover:-translate-y-4 transition-transform duration-500">
              <span className="text-[10px] font-mono text-gray-400 font-bold">.PDF</span>
              <div className="w-10 h-1 bg-gray-200 rounded mt-3"></div>
            </div>
          </div>
          
          {/* Broken connecting lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.3 }}>
            <path d="M 0 100 Q 150 150 400 50" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeDasharray="8 8" />
          </svg>
        </div>

        {/* Feature List */}
        <ul className="flex flex-col gap-5 mt-auto">
          {[
            "CAD files and raw point clouds",
            "Requires technical expertise to interpret",
            "Static, disconnected deliverables",
            "Isolated from actual site visuals",
            "Manual volume and cut/fill calculations"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-4">
              <div className="mt-0.5 flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </div>
              <span className="text-[16px] text-gray-500 font-medium leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CARD 2: YELLOSKYE (Unified / Live Concept) */}
      <div className="bg-[#0A0A0A] rounded-[32px] p-8 lg:p-12 border border-gray-800 shadow-[0_20px_50px_rgba(0,0,0,0.2)] flex flex-col group relative overflow-hidden">
        
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FFF200]/5 blur-[100px] rounded-full pointer-events-none"></div>

        <h3 className="text-[14px] font-black uppercase tracking-[0.2em] text-[#FFF200] mb-8 flex items-center gap-3 relative z-10">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFF200] opacity-60"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FFF200]"></span>
          </span>
          YelloSKYE Intelligence
        </h3>

        {/* Abstract Visual: Unified Digital Twin */}
        <div className="w-full h-[200px] bg-black rounded-2xl border border-white/10 mb-10 flex items-center justify-center relative overflow-hidden shadow-[inset_0_0_40px_rgba(255,242,0,0.05)] z-10">
          
          {/* Glowing Tech Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]"></div>
          
          {/* Central Node Structure */}
          <div className="relative flex items-center justify-center transform group-hover:scale-110 transition-transform duration-700 ease-out">
            {/* Outer rings */}
            <div className="absolute w-40 h-40 border border-[#FFF200]/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute w-32 h-32 border border-[#FFF200]/40 rounded-full border-dashed animate-[spin_15s_linear_infinite_reverse]"></div>
            
            {/* Center Core */}
            <div className="w-16 h-16 bg-[#111] border border-[#FFF200] rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(255,242,0,0.3)] relative z-10">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFF200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>

            {/* Scanning Line Effect */}
            <div className="absolute top-0 left-1/2 w-[2px] h-full bg-gradient-to-b from-transparent via-[#FFF200] to-transparent -translate-x-1/2 animate-[pulse_2s_ease-in-out_infinite]"></div>
          </div>
          
          {/* Platform UI Header Tab Mockup */}
          <div className="absolute top-3 left-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-md px-3 py-1.5 flex items-center gap-2">
             <div className="w-1.5 h-1.5 bg-[#FFF200] rounded-sm"></div>
             <span className="text-[8px] font-black uppercase tracking-widest text-white">AI Spatial Processing</span>
          </div>
        </div>

        {/* Feature List */}
        <ul className="flex flex-col gap-5 mt-auto relative z-10">
          {[
            { bold: "AI-classified", text: "3D terrain models" },
            { bold: "Accessible", text: "to all stakeholders via web" },
            { bold: "Automated", text: "volume & progress tracking" },
            { text: "Integrated with", bold: "live site captures" },
            { text: "Coordination happens", bold: "in visual context" }
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-4">
              <div className="mt-0.5 flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFF200" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span className="text-[16px] text-gray-400 font-medium leading-snug">
                {item.text && !item.bold && <span>{item.text} </span>}
                {item.bold && <span className="text-white font-bold">{item.bold} </span>}
                {item.text && item.bold && <span>{item.text}</span>}
              </span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  </div>
</section>
{/* ════════════════════════════════════════
          NEW HOOK: VISUAL CLARITY VS TRADITIONAL
      ════════════════════════════════════════ */}
      <section className="relative bg-white pt-16 lg:pt-24 pb-12 lg:pb-16 overflow-hidden font-sans">

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8 z-10">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-20">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-6 shadow-sm">
                Operational Clarity
              </div>
              <h2 className="text-[clamp(40px,5vw,64px)] font-black tracking-tighter leading-[1.05] text-black">
                Centimeter–level precision <br />
                meets 
                <span className="relative inline-block mt-2 mx-4"> 
                  <span className="absolute inset-y-1 -inset-x-3 bg-[#FFF200] rounded-xl shadow-sm transform -skew-x-2"></span>
                  <span className="relative text-black">visual intelligence.</span>
                </span>
              </h2>
            </div>
            <div className="max-w-md lg:pb-3">
              <p className="text-xl text-gray-500 font-medium leading-relaxed">
                Traditional surveys trap data in technical silos. We use AI-assisted processing to structure that same accuracy into an interactive visual reference.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            
            <div className="bg-gray-50 border border-gray-200 rounded-[32px] p-8 lg:p-12 flex flex-col shadow-inner transition-all duration-500">
              <h3 className="text-xl font-black uppercase tracking-widest text-gray-400 mb-8 flex items-center gap-3">
                <span className="w-2 h-2 bg-gray-300 rounded-full"></span> Traditional Survey
              </h3>
              
              <div className="w-full h-64 bg-gray-200 rounded-2xl mb-10 overflow-hidden relative border border-gray-300">
                <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600" className="w-full h-full object-cover opacity-30 grayscale saturate-0 mix-blend-multiply" alt="Traditional CAD" />
                <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
              </div>

              <ul className="space-y-6 flex-grow">
                {[
                  "CAD files and raw point clouds",
                  "Requires technical expertise to interpret",
                  "Static, disconnected deliverables",
                  "Isolated from actual site visuals",
                  "Manual volume and cut/fill calculations"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start text-gray-500">
                    <X size={20} strokeWidth={3} className="text-red-300 mt-1 shrink-0" />
                    <span className="text-lg font-medium leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#0A0A0A] text-white rounded-[32px] p-8 lg:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.3)] flex flex-col relative overflow-hidden group border border-white/5">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFF200] rounded-full blur-[140px] opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity duration-1000"></div>
              
              <h3 className="text-xl font-black uppercase tracking-widest text-[#FFF200] mb-8 flex items-center gap-3">
                <span className="w-2 h-2 bg-[#FFF200] rounded-full shadow-[0_0_8px_#FFF200] animate-pulse"></span> YelloSKYE Intelligence
              </h3>
              
              <div className="w-full h-64 bg-zinc-900 rounded-2xl mb-10 overflow-hidden relative border border-white/10 shadow-2xl">
                <img src="https://i.ibb.co/bMN7Kzv0/Website-Visuals-Presentation-7.png" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-[15s] ease-out" alt="DEX Interface" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                  <div className="w-full h-full bg-gradient-to-b from-transparent via-[#FFF200]/10 to-transparent -translate-y-full group-hover:animate-[scanline_4s_ease-in-out_infinite]"></div>
                </div>

                <div className="absolute top-4 left-4 bg-[#111]/80 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-lg">
                  <Layers size={12} className="text-[#FFF200]" />
                  <span className="text-[9px] font-black uppercase tracking-widest text-gray-300 mt-0.5">AI Spatial Processing</span>
                </div>
              </div>

              <ul className="space-y-6 flex-grow relative z-10">
                {[
                  <><span className="text-white font-black">AI-classified</span> 3D terrain models</>,
                  <><span className="text-white font-black">Accessible</span> to all stakeholders via web</>,
                  <><span className="text-[#FFF200] font-black">Automated</span> volume & progress tracking</>,
                  <>Integrated with <span className="text-white font-black">live site captures</span></>,
                  <>Coordination happens <span className="text-white font-black">in visual context</span></>
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <Check size={20} strokeWidth={4} className="text-[#FFF200] mt-1 shrink-0" />
                    <span className="text-lg font-medium leading-tight text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <style>{`
            @keyframes scanline {
              0% { transform: translateY(-100%); }
              100% { transform: translateY(100%); }
            }
          `}</style>

        </div>
      </section>
      {/* ════════════════════════════════════════
          NEW: CONTINUOUS VALUE (Micro-Cards Grid)
      ════════════════════════════════════════ */}
      <section className="relative bg-white pt-10 lg:pt-16 pb-16 lg:pb-24 overflow-hidden font-sans">

        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-6 shadow-sm">
              Continuous Intelligence
            </div>
            
            <h2 className="text-[clamp(36px,4vw,52px)] font-black tracking-tighter leading-[1.1] text-black mb-6">
              AI-driven visual data <br />
              that stays usable <br />
              <span className="relative inline-block mt-2"> 
                  <span className="absolute inset-y-1 -inset-x-3 bg-[#FFF200] align-left rounded-xl shadow-sm transform -skew-x-2"></span>
                  <span className="relative text-black">beyond day one.</span>
                  </span>
            </h2>
            
            <p className="text-lg text-gray-500 font-medium leading-relaxed mb-10 max-w-lg">
              YelloSKYE's aerial surveying delivers the accuracy you need for design and planning—with the frequency you need for execution and validation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {[
                 { icon: <Crosshair size={18}/>, title: "±2cm Accuracy", desc: "Design-grade terrain modeling." },
                 { icon: <History size={18}/>, title: "Frequent Updates", desc: "Weekly, monthly, or on-demand." },
                 { icon: <BarChart size={18}/>, title: "Automated Volumes", desc: "Cut-fill calculations instantly." },
                 { icon: <Layers size={18}/>, title: "Historical Context", desc: "See what changed and when." }
               ].map((card, i) => (
                 <div key={i} className="bg-gray-50 border border-gray-100 p-5 rounded-[20px] hover:border-gray-300 hover:bg-gray-100 transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black mb-4 shadow-sm group-hover:bg-[#FFF200] transition-colors">
                      {card.icon}
                    </div>
                    <h4 className="font-black text-black text-sm mb-1">{card.title}</h4>
                    <p className="text-xs text-gray-500 font-medium">{card.desc}</p>
                 </div>
               ))}
            </div>
          </div>

          <div className="relative w-full aspect-square lg:aspect-[4/5] rounded-[32px] overflow-hidden bg-gray-100 border border-gray-200 shadow-[0_30px_80px_rgba(0,0,0,0.1)] group">
            <img 
              src="https://ik.imagekit.io/saxybrgkp/Website%20Images%20Land%20Survey6.png" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[15s] ease-out" 
              alt="Continuous Terrain Data" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>

            <div className="absolute bottom-6 left-6 lg:bottom-8 lg:left-8 bg-white/95 backdrop-blur-md p-5 rounded-[20px] shadow-2xl flex items-center gap-4 border border-white/40">
               <div className="w-12 h-12 bg-[#FFF200] rounded-xl flex items-center justify-center shadow-inner">
                  <Check size={24} strokeWidth={3} className="text-black" />
               </div>
            </div>
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

      {/* ====================== THE EXECUTIVE GATEWAY (FORM) ====================== */}
                        <section className="bg-white py-24 lg:py-40 relative overflow-hidden font-sans border-gray-100">
                  {/* Aesthetic Seamless Grid Fade */}
                          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                               style={{ 
                                 backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", 
                                 backgroundSize: "80px 80px",
                                 maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
                                 WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)"
                               }} />
                          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 z-10">
                            <div className="max-w-6xl mx-auto">
                              <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                                
                                <div>
                                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border  text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-8">
                                    Get Started
                                  </div>
                                  <h3 className="text-4xl lg:text-6xl font-black tracking-tighter text-black mb-8 leading-[1.1]">
                                    Ready to gain <br/>
                                    <span className="relative inline-block mt-2">
                                      <span className="absolute inset-y-1 -inset-x-2 bg-[#FFF200] rounded-lg shadow-sm transform -skew-x-2"></span>
                                      <span className="relative text-black">absolute clarity?</span>
                                    </span>
                                  </h3>
                                  <p className="text-xl text-gray-500 font-medium leading-relaxed mb-10 max-w-lg">
                                    Stop debating interpretations. Request a custom walkthrough of your site and see how DEX delivers boardroom-ready answers.
                                  </p>
                                  
                                  <ul className="space-y-5">
                                    {[
                                      '15-minute tailored site walkthrough', 
                                      'Zero commitment or hardware required', 
                                      'Custom strategy for your project goals'
                                    ].map((item) => (
                                      <li key={item} className="flex items-center gap-4 text-black font-black uppercase text-[11px] tracking-[0.1em]">
                                        <div className="w-6 h-6 bg-black rounded-lg flex items-center justify-center text-[#FFF200] shadow-lg shrink-0">
                                          <Check size={14} strokeWidth={4}/>
                                        </div>
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                  
                                <div className="bg-[#0A0A0A] rounded-[48px] p-8 lg:p-14 shadow-[0_40px_120px_rgba(0,0,0,0.4)] border border-white/5 relative overflow-hidden group">
                                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#FFF200]/10 blur-[100px] rounded-full group-hover:bg-[#FFF200]/20 transition-all duration-700" />
                                  
                                  <form className="relative z-10 space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                      <div className="space-y-2">
                                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                                        <input placeholder="John Doe" className="w-full bg-white/5 border-b border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-700 focus:border-[#FFF200] focus:bg-white/10 outline-none transition-all font-medium" />
                                      </div>
                                      <div className="space-y-2">
                                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Work Email</label>
                                        <input placeholder="john@company.com" className="w-full bg-white/5 border-b border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-700 focus:border-[#FFF200] focus:bg-white/10 outline-none transition-all font-medium" />
                                      </div>
                                    </div>
                                    
                                    <div className="space-y-2">
                                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Company</label>
                                      <input placeholder="Ex: Larsen & Toubro" className="w-full bg-white/5 border-b border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-700 focus:border-[#FFF200] focus:bg-white/10 outline-none transition-all font-medium" />
                                    </div>
                  
                                    <div className="space-y-2">
                                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Project Phase</label>
                                      <div className="relative">
                                        <select className="w-full bg-white/5 border-b border-white/10 rounded-xl px-5 py-4 text-gray-400 focus:border-[#FFF200] focus:bg-white/10 outline-none transition-all font-medium appearance-none">
                                          <option>Select Current Stage</option>
                                          <option>Pre-Construction / Planning</option>
                                          <option>Active Construction</option>
                                          <option>Handover / Operations</option>
                                        </select>
                                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600">
                                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                                        </div>
                                      </div>
                                    </div>
                  
                                    <div className="pt-4">
                                      <button type="button" className="w-full bg-[#FFF200] hover:bg-white text-black font-black py-6 rounded-2xl uppercase tracking-[0.25em] text-xs transition-all transform hover:-translate-y-1 shadow-[0_20px_40px_rgba(255,242,0,0.15)] flex items-center justify-center gap-3 group/btn">
                                        Book a free demo
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:translate-x-1 transition-transform"><path d="m9 18 6-6-6-6"/></svg>
                                      </button>
                                    </div>
                                  </form>
                                </div>
                  
                              </div>
                            </div>
                          </div>
                        </section>
            {/* ====================== TRUST BAND ====================== */}
                  <section className="bg-white relative z-10 pt-6 pb-12 lg:pb-16">
                    <p className="text-center text-[10px] lg:text-[11px] font-black uppercase tracking-[0.5em] text-gray-400 mb-8">
                      Trusted by the best in the business
                    </p>
                    
                    {/* Marquee Wrapper */}
                    <div className="relative overflow-hidden marquee-mask flex w-full group">
                      <div className="flex shrink-0 animate-marquee items-center gap-16 md:gap-24 px-8 md:px-12 group-hover:[animation-play-state:paused]">
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
                          { name: "Mahindra", logo: "https://images.seeklogo.com/logo-png/61/1/mahindra-auto-logo-png_seeklogo-613492.png" },
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
                          <div key={i} className="flex items-center justify-center w-28 md:w-32 h-10 md:h-12">
                            <img 
                              src={client.logo} 
                              alt={client.name} 
                              className="max-w-full max-h-full object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700 cursor-pointer"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                  
            
                </div>
              );
            };

export default LandSurvey;