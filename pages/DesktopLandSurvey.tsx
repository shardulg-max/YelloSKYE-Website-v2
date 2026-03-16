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
    fallbackImg: 'https://ik.imagekit.io/saxybrgkp/s.png',
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

      {/* ====================== COMPARISON SECTION ====================== */}
<section className="relative bg-white pt-24 lg:pt-32 pb-24 lg:pb-32 overflow-hidden font-sans border-gray-100">
  
  <div className="max-w-[1450px] mx-auto px-6 lg:px-10">
    
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
    </div>

    {/* Comparison Cards Grid */}
    <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 relative z-10">

      {/* CARD 1: TRADITIONAL */}
      <div className="bg-[#F9FAFB] rounded-[32px] p-8 lg:p-12 border border-gray-200 shadow-sm flex flex-col group">
        
        <h3 className="text-[14px] font-black uppercase tracking-[0.2em] text-gray-400 mb-8 flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          Traditional Survey
        </h3>

        {/* Abstract Visual: Disconnected Apps */}
        <div className="w-full h-[220px] bg-white rounded-2xl border border-gray-200 mb-10 flex items-center justify-center relative overflow-hidden shadow-inner">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:20px_20px]"></div>
          
          {/* App Blocks */}
          <div className="relative flex gap-5 items-center">
            
            {/* Spreadsheet (Excel) */}
            <div className="w-20 h-24 bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col items-center justify-center -translate-y-4 group-hover:-translate-y-6 transition-transform duration-500 relative overflow-hidden">
              <div className="absolute top-0 w-full h-1.5 bg-green-500"></div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
              </svg>
              <span className="text-[8px] font-black text-gray-400 uppercase tracking-wider">Spreadsheet</span>
            </div>
            
            {/* Images */}
            <div className="w-20 h-20 bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col items-center justify-center translate-y-6 group-hover:translate-y-8 transition-transform duration-500 relative overflow-hidden z-10">
              <div className="absolute top-0 w-full h-1.5 bg-blue-500"></div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
              <span className="text-[8px] font-black text-gray-400 uppercase tracking-wider">Images</span>
            </div>

            {/* PDF Plans */}
            <div className="w-20 h-28 bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col items-center justify-center -translate-y-2 group-hover:-translate-y-4 transition-transform duration-500 relative overflow-hidden">
              <div className="absolute top-0 w-full h-1.5 bg-red-500"></div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              <span className="text-[8px] font-black text-gray-400 uppercase tracking-wider">PDF Plans</span>
            </div>

          </div>
          
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

      {/* CARD 2: YELLOSKYE */}
      <div className="bg-[#0A0A0A] rounded-[32px] p-8 lg:p-12 border border-gray-800 shadow-[0_20px_50px_rgba(0,0,0,0.2)] flex flex-col group relative overflow-hidden">
        
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FFF200]/5 blur-[100px] rounded-full pointer-events-none"></div>

        <h3 className="text-[14px] font-black uppercase tracking-[0.2em] text-[#FFF200] mb-8 flex items-center gap-3 relative z-10">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFF200] opacity-60"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FFF200]"></span>
          </span>
          YelloSKYE Intelligence
        </h3>

        {/* Abstract Visual: AI Construction Scan */}
        <div className="w-full h-[220px] bg-black rounded-2xl border border-white/10 mb-10 flex items-center justify-center relative overflow-hidden shadow-[inset_0_0_40px_rgba(255,242,0,0.05)] z-10 group/visual">
          
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)]"></div>
          
          {/* Construction Site Vector Animation */}
          <div className="relative w-56 h-40 flex items-end justify-center group-hover/visual:scale-105 transition-transform duration-700 ease-out">
            
            {/* Ground Plane */}
            <div className="absolute bottom-4 w-full h-8 border-t border-[#FFF200]/30 bg-gradient-to-t from-transparent to-[#FFF200]/5 [transform:rotateX(60deg)]"></div>
            
            {/* Building & Crane SVG */}
            <svg viewBox="0 0 100 100" className="w-full h-full relative z-10" fill="none" stroke="#FFF200" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
              {/* Foundation Area */}
              <path d="M20 85 L80 85" strokeOpacity="0.5" strokeDasharray="2 2" />
              
              {/* Building Structure */}
              <path d="M30 85 L30 45 L55 45 L55 85" />
              <path d="M55 65 L75 65 L75 85" />
              
              {/* Internal Floors / Grid */}
              <path d="M30 55 L55 55" strokeWidth="0.5" strokeOpacity="0.5"/>
              <path d="M30 65 L55 65" strokeWidth="0.5" strokeOpacity="0.5"/>
              <path d="M30 75 L55 75" strokeWidth="0.5" strokeOpacity="0.5"/>
              <path d="M42.5 45 L42.5 85" strokeWidth="0.5" strokeOpacity="0.5"/>
              <path d="M65 65 L65 85" strokeWidth="0.5" strokeOpacity="0.5"/>
              
              {/* Tower Crane */}
              <path d="M20 85 L20 20 L55 20" />
              <path d="M20 30 L40 20" strokeWidth="0.5" />
              <path d="M55 20 L55 35" strokeDasharray="2 2" />
              {/* Load Block */}
              <rect x="52" y="35" width="6" height="6" fill="rgba(255,242,0,0.2)" strokeWidth="1" />
            </svg>
            
            {/* Data Nodes (Glowing dots on structure) */}
            <div className="absolute top-[45%] right-[40%] w-1.5 h-1.5 bg-[#FFF200] rounded-full shadow-[0_0_8px_#FFF200] animate-pulse"></div>
            <div className="absolute top-[65%] right-[20%] w-1 h-1 bg-white rounded-full shadow-[0_0_4px_white]"></div>
            
            {/* AI Scanning Laser Line */}
            <div className="absolute top-0 bottom-4 w-full overflow-hidden z-20">
               <div className="w-full h-[1px] bg-[#FFF200] shadow-[0_0_15px_#FFF200,0_0_5px_white] absolute animate-[scan_3s_ease-in-out_infinite]"></div>
            </div>

            {/* Custom Animation for the Scanner */}
            <style>{`
              @keyframes scan {
                0% { top: 10%; opacity: 0; }
                15% { opacity: 1; }
                85% { opacity: 1; }
                100% { top: 90%; opacity: 0; }
              }
            `}</style>
          </div>
          
          <div className="absolute top-4 left-4 bg-[#111] border border-white/10 rounded-md px-3 py-1.5 flex items-center gap-2 z-20">
             <div className="w-1.5 h-1.5 bg-[#FFF200] rounded-sm animate-pulse"></div>
             <span className="text-[9px] font-black uppercase tracking-widest text-white">AI Spatial Processing</span>
          </div>
        </div>

        {/* Feature List (Hardcoded for perfect formatting) */}
        <ul className="flex flex-col gap-5 mt-auto relative z-10">
          <li className="flex items-start gap-4">
            <div className="mt-0.5 flex-shrink-0"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFF200" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
            <span className="text-[16px] text-gray-400 font-medium leading-snug"><span className="text-white font-bold">AI-classified</span> 3D terrain models</span>
          </li>
          <li className="flex items-start gap-4">
            <div className="mt-0.5 flex-shrink-0"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFF200" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
            <span className="text-[16px] text-gray-400 font-medium leading-snug"><span className="text-white font-bold">Accessible</span> to all stakeholders via web</span>
          </li>
          <li className="flex items-start gap-4">
            <div className="mt-0.5 flex-shrink-0"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFF200" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
            <span className="text-[16px] text-gray-400 font-medium leading-snug"><span className="text-white font-bold">Automated</span> volume & progress tracking</span>
          </li>
          <li className="flex items-start gap-4">
            <div className="mt-0.5 flex-shrink-0"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFF200" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
            <span className="text-[16px] text-gray-400 font-medium leading-snug">Integrated with <span className="text-white font-bold">live site captures</span></span>
          </li>
          <li className="flex items-start gap-4">
            <div className="mt-0.5 flex-shrink-0"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFF200" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
            <span className="text-[16px] text-gray-400 font-medium leading-snug">Coordination happens <span className="text-white font-bold">in visual context</span></span>
          </li>
        </ul>
      </div>

    </div>
  </div>
</section>

      {/* ════════════════════════════════════════
          TERRAIN REPRESENTATION (INTERACTIVE TABS) 
      ════════════════════════════════════════ */}
      <TerrainRepresentationSection />
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

                </div>
              );
            };

export default LandSurvey;