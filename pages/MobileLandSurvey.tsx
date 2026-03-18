import React, { useState, useEffect } from "react";
import { 
  X, Check, ArrowRight, DownloadCloud, Globe, Layers, MapPin, Mail, 
  Twitter, Linkedin, Youtube, Instagram, PlayCircle, BarChart, History, 
  Crosshair, Box, FileOutput, Camera, Clock, AlertTriangle, Unplug,
  Play, Film, Zap, Users, ShieldCheck, Video, MoveUpRight, Sparkles, 
  Image as ImageIcon, Maximize, Eye, Building2, Map, Activity
} from "lucide-react";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const TERRAIN_FEATURES = [
  {
    id: 'topography',
    label: 'Topographic Mapping',
    title: 'Survey-Grade Topographic Maps',
    desc: 'High-resolution contour maps with elevation data. Plan drainage, access roads, and foundation levels with confidence.',
    fallbackImg: 'https://ik.imagekit.io/saxybrgkp/Website%20Images%20Land%20Survey.png?updatedAt=1773637747665',
    placeholderBg: 'bg-green-50'
  },
  {
    id: 'cut-fill',
    label: 'Cut & Fill Analysis',
    title: 'Automated Earthwork Calculations',
    desc: 'Automated earthwork calculations. Validate contractor claims with visual proof of volumes moved.',
    fallbackImg: 'https://ik.imagekit.io/saxybrgkp/Website%20Images%20Land%20Survey%201.png?updatedAt=1773637747067',
    placeholderBg: 'bg-yellow-50'
  },
  {
    id: 'stockpile',
    label: 'Stockpile Measurement',
    title: 'Precise Material Tracking',
    desc: 'Track material volumes over time. Know exactly how much aggregate, soil, or rubble is on site.',
    fallbackImg: 'https://ik.imagekit.io/saxybrgkp/Website%20Images%20Land%20Survey2.png?updatedAt=1773637747041',
    placeholderBg: 'bg-blue-50'
  },
  {
    id: 'drainage',
    label: 'Drainage Planning',
    title: 'Proactive Water Flow Analysis',
    desc: 'Identify low points and water flow paths before excavation starts. Prevent flooding issues proactively.',
    fallbackImg: 'https://ik.imagekit.io/saxybrgkp/Website%20Images%20Land%20Survey3.png?updatedAt=1773637746794',
    placeholderBg: 'bg-cyan-50'
  },
  {
    id: 'change-detection',
    label: 'Change Detection',
    title: 'Visual Diff Over Time',
    desc: 'Visual diff between survey dates. See exactly where earthwork happened and validate progress claims.',
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
    <section className="relative bg-white pt-10 lg:pt-16 pb-12 lg:pb-16 overflow-hidden font-sans border-b border-gray-50">
      
      <style>{`
        @keyframes interactive-progress { from { width: 0%; } to { width: 100%; } }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>

      {/* Grid Fade */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", 
          backgroundSize: "40px 40px",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
        }} />

      <div className="max-w-[1400px] mx-auto px-5 lg:px-8 relative z-10">
        
        <div className="text-center max-w-4xl mx-auto mb-8 lg:mb-10">
          <h2 className="text-[34px] md:text-[48px] font-black tracking-tighter leading-[1.05] text-black mb-4">
            A complete <span className="relative inline-block mx-1 mt-1 lg:mt-0">
              <span className="absolute inset-y-1 -inset-x-2 bg-[#FFF200] rounded-xl"></span>
              <span className="relative text-black">digital representation</span>
            </span>
            <br className="hidden sm:block"/> of your terrain.
          </h2>
          <p className="text-[15px] lg:text-lg text-gray-500 font-medium leading-relaxed max-w-4xl mx-auto px-2">
            We capture and process your site into intelligent, layered models. Every grade, slope, and elevation mapped with survey-grade precision.
          </p>
        </div>

        {/* Interactive Viewer Component */}
        <div className="bg-white rounded-[24px] lg:rounded-[32px] border border-gray-200 shadow-xl lg:shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-3 lg:p-4"
             onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          
          {/* Mobile-Friendly Tabs (Scrollable) */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar scroll-smooth mb-3 pb-1 px-1 snap-x">
            {TERRAIN_FEATURES.map((feature, index) => {
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
          <div className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[2.5/1] bg-[#0A0A0A] overflow-hidden rounded-[20px] mb-3">
            {TERRAIN_FEATURES.map((feature, index) => (
              <div key={feature.id} className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${feature.placeholderBg} ${activeIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                <img src={feature.fallbackImg} alt={feature.title} className="w-full h-full object-cover opacity-90" />
                <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.4)] pointer-events-none"></div>
              </div>
            ))}
            
            <div className="absolute bottom-0 left-0 w-full h-[4px] lg:h-[6px] bg-white/20 z-20">
               <div key={activeIndex} className="h-full bg-[#FFF200]" style={{ animation: 'interactive-progress 4.5s linear forwards', animationPlayState: isHovered ? 'paused' : 'running' }} />
            </div>
          </div>

          {/* Dynamic Content Bar */}
          <div className="bg-gray-50 rounded-[20px] p-5 lg:p-6 flex flex-col md:flex-row gap-3 lg:gap-4 justify-between items-start md:items-center border border-gray-100">
             <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 lg:mb-2 rounded bg-[#FFF200]/20 text-black text-[9px] lg:text-[10px] font-black uppercase tracking-widest border border-[#FFF200]/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFF200] shadow-[0_0_5px_#FFF200]"></span>
                  {TERRAIN_FEATURES[activeIndex].label}
                </div>
                <h3 className="text-xl lg:text-2xl font-black text-black leading-tight tracking-tight">
                  {TERRAIN_FEATURES[activeIndex].title}
                </h3>
             </div>
             <div className="md:max-w-md md:text-right w-full">
                <p className="text-[13px] lg:text-base text-gray-500 font-medium leading-relaxed">
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

export const MobileLandSurvey: React.FC = () => {
  return (
    <div className="bg-white text-black font-sans selection:bg-[#FFF200] selection:text-black overflow-x-hidden">

      {/* ════════════════════════════════════════
          HERO - LAND SURVEY
      ════════════════════════════════════════ */}
      {/* Reduced padding on mobile, removed absolute aspect ratios that caused overlap */}
      <section className="pt-[100px] lg:pt-44 pb-10 lg:pb-20 max-w-[1400px] mx-auto px-5 lg:px-8 bg-white relative border-b border-gray-50">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ 
               backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", 
               backgroundSize: "40px 40px",
             }} />
             
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12 mb-8 lg:mb-14 relative z-10">
          
          <div className="flex-1 flex flex-col">
            <h1 className="text-[56px] sm:text-[80px] lg:text-[110px] font-black leading-[0.9] tracking-tighter text-[#0A0A0A] m-0 p-0 mb-4 lg:mb-8">
              Land Survey
            </h1>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] sm:text-[12px] lg:text-[14px] font-bold text-gray-500 tracking-wide">
              <span className="flex items-center gap-1.5"><Check size={14} strokeWidth={4} className="text-[#FFF200]"/> Millimeter Accuracy</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full hidden sm:block"></span>
              <span className="flex items-center gap-1.5"><Check size={14} strokeWidth={4} className="text-[#FFF200]"/> Volumetric Data</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full hidden md:block"></span>
              <span className="flex items-center gap-1.5"><Check size={14} strokeWidth={4} className="text-[#FFF200]"/> Contours</span>
            </div>
          </div>

          <div className="flex-1 lg:max-w-md flex flex-col pt-2 lg:pt-0">
            <h2 className="text-[17px] lg:text-[28px] font-medium leading-relaxed text-gray-600 tracking-tight">
              Survey-grade intelligence that turns land data into a trusted decision reference.
            </h2>
          </div>

        </div>

        {/* Hero Visual - Controlled aspect ratio for mobile vs desktop */}
        <div className="w-full aspect-[4/5] sm:aspect-[4/3] md:aspect-[2.2/1] rounded-[24px] lg:rounded-[40px] overflow-hidden bg-[#0A0A0A] relative shadow-2xl lg:shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-200 group">
          <img 
            src="https://ik.imagekit.io/saxybrgkp/Website%20Images%20Land%20Survey.png" 
            alt="Website-Visuals-Presentation-12" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[20s] ease-out opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none"></div>

          {/* Scaled overlays for mobile */}
          <div className="absolute top-4 left-4 lg:top-8 lg:left-8 bg-white/70 backdrop-blur-2xl px-3 py-2 lg:px-5 lg:py-3 rounded-xl lg:rounded-2xl flex items-center gap-2 shadow-lg border border-white/50 z-20">
             <div className="flex items-end gap-1 h-3">
                <div className="w-0.5 lg:w-1 h-full bg-black rounded-full animate-pulse"></div>
                <div className="w-0.5 lg:w-1 h-2/3 bg-gray-500 rounded-full"></div>
                <div className="w-0.5 lg:w-1 h-4/5 bg-gray-500 rounded-full"></div>
             </div>
             <span className="text-[8px] lg:text-[10px] font-black uppercase tracking-widest text-black mt-0.5">Terrain Scan Active</span>
          </div>

          <div className="absolute bottom-4 right-4 lg:bottom-8 lg:right-8 bg-black/70 backdrop-blur-2xl px-4 py-3 lg:px-6 lg:py-4 rounded-xl lg:rounded-2xl border border-white/10 flex items-center gap-4 lg:gap-6 shadow-2xl z-20">
             <div className="text-right">
                <div className="text-[7px] lg:text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-0.5">Elevation</div>
                <div className="text-[#FFF200] font-mono text-sm lg:text-base font-bold">142.8m</div>
             </div>
             <div className="w-[1px] h-6 lg:h-8 bg-white/20"></div>
             <div className="text-right">
                <div className="text-[7px] lg:text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-0.5">Coordinates</div>
                <div className="text-white font-mono text-sm lg:text-base font-bold">18°55'N 72°E</div>
             </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          THE TRUST BAR (MOBILE GRID)
      ════════════════════════════════════════ */}
      <section className="bg-white border-b border-gray-50 py-10 lg:py-12 relative z-10">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-8">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-0 md:divide-x divide-gray-200">
             {[
               { label: "Accuracy", value: "±3-5cm", sub: "Vert & Horiz" },
               { label: "Resolution", value: "Sub-cm", sub: "Point density" },
               { label: "Coverage", value: "500+", sub: "Acres / flight" },
               { label: "Delivery", value: "48-72h", sub: "Capture to DEX" },
             ].map((spec, i) => (
               <div key={i} className="flex flex-col items-center justify-center text-center px-2">
                 <div className="text-[9px] lg:text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 flex items-center justify-center gap-1.5">
                   <span className="w-1.5 h-1.5 rounded-full bg-[#FFF200]"></span>
                   {spec.label}
                 </div>
                 <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-black mb-1 tracking-tighter">
                   {spec.value}
                 </div>
                 <div className="text-[10px] lg:text-xs text-gray-500 font-bold uppercase tracking-wide">
                   {spec.sub}
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* ====================== COMPARISON SECTION (MOBILE REFLOW) ====================== */}
      <section className="relative bg-white py-16 lg:py-32 overflow-hidden font-sans border-b border-gray-50">
        
        <div className="max-w-[1450px] mx-auto px-5 lg:px-10 relative z-10">
            
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 lg:mb-20">
              <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-4 lg:mb-6 shadow-sm">
                  Operational Clarity
                </div>
                <h2 className="text-[34px] sm:text-[44px] lg:text-[64px] font-black tracking-tighter leading-[1.05] text-black">
                  Centimeter–precision <br className="hidden sm:block"/>
                  meets 
                  <span className="relative inline-block mt-1 sm:mt-2 mx-1 sm:mx-3"> 
                    <span className="absolute inset-y-1 -inset-x-2 bg-[#FFF200] rounded-xl shadow-sm transform -skew-x-2"></span>
                    <span className="relative text-black">visual intelligence.</span>
                  </span>
                </h2>
              </div>
              <div className="lg:max-w-md pt-2">
                <p className="text-[15px] lg:text-xl text-gray-500 font-medium leading-relaxed">
                  Traditional surveys trap data in technical silos. We use AI to structure that accuracy into an interactive visual reference.
                </p>
              </div>
            </div>

            {/* Comparison Cards Stack */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

              {/* CARD 1: TRADITIONAL */}
              <div className="bg-[#F9FAFB] rounded-[28px] lg:rounded-[32px] p-6 lg:p-12 border border-gray-200 shadow-sm flex flex-col group">
                <h3 className="text-[11px] lg:text-[14px] font-black uppercase tracking-[0.2em] text-gray-400 mb-6 lg:mb-8 flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                  Traditional Survey
                </h3>

                {/* Mobile-scaled Visual */}
                <div className="w-full h-[160px] lg:h-[220px] bg-white rounded-[20px] border border-gray-200 mb-8 flex items-center justify-center relative overflow-hidden shadow-inner">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                  <div className="relative flex gap-3 lg:gap-5 items-center scale-90 lg:scale-100">
                    <div className="w-16 lg:w-20 h-20 lg:h-24 bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col items-center justify-center -translate-y-3 group-hover:-translate-y-5 transition-transform"><span className="text-[7px] font-black text-gray-400 uppercase mt-1">Excel</span></div>
                    <div className="w-16 lg:w-20 h-16 lg:h-20 bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col items-center justify-center translate-y-4 group-hover:translate-y-6 transition-transform z-10"><span className="text-[7px] font-black text-gray-400 uppercase mt-1">Images</span></div>
                    <div className="w-16 lg:w-20 h-24 lg:h-28 bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col items-center justify-center -translate-y-1 group-hover:-translate-y-3 transition-transform"><span className="text-[7px] font-black text-gray-400 uppercase mt-1">PDF</span></div>
                  </div>
                </div>

                <ul className="flex flex-col gap-4 mt-auto">
                  {[
                    "CAD files and raw point clouds",
                    "Requires technical expertise to interpret",
                    "Static, disconnected deliverables",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-0.5 shrink-0"><X size={16} strokeWidth={3} className="text-red-400" /></div>
                      <span className="text-[14px] lg:text-[16px] text-gray-500 font-medium leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CARD 2: YELLOSKYE */}
              <div className="bg-[#0A0A0A] rounded-[28px] lg:rounded-[32px] p-6 lg:p-12 border border-gray-800 shadow-[0_20px_50px_rgba(0,0,0,0.2)] flex flex-col group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#FFF200]/5 blur-[80px] rounded-full pointer-events-none"></div>

                <h3 className="text-[11px] lg:text-[14px] font-black uppercase tracking-[0.2em] text-[#FFF200] mb-6 lg:mb-8 flex items-center gap-2.5 relative z-10">
                  <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFF200] opacity-60"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFF200]"></span></span>
                  YelloSKYE Intelligence
                </h3>

                {/* Mobile-scaled Visual */}
                <div className="w-full h-[160px] lg:h-[220px] bg-black rounded-[20px] border border-white/10 mb-8 flex items-center justify-center relative overflow-hidden shadow-inner z-10 group/visual">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)]"></div>
                  
                  <div className="relative w-48 h-32 flex items-end justify-center group-hover/visual:scale-105 transition-transform duration-700 ease-out">
                    <div className="absolute bottom-2 w-full h-6 border-t border-[#FFF200]/30 bg-gradient-to-t from-transparent to-[#FFF200]/5 [transform:rotateX(60deg)]"></div>
                    <svg viewBox="0 0 100 100" className="w-full h-full relative z-10" fill="none" stroke="#FFF200" strokeWidth="1.5">
                      <path d="M30 85 L30 45 L55 45 L55 85" /><path d="M55 65 L75 65 L75 85" />
                      <path d="M20 85 L20 20 L55 20" /><path d="M20 30 L40 20" strokeWidth="0.5" />
                    </svg>
                    <div className="absolute top-0 bottom-4 w-full overflow-hidden z-20">
                       <div className="w-full h-[1px] bg-[#FFF200] shadow-[0_0_10px_#FFF200] absolute animate-[scan_3s_ease-in-out_infinite]"></div>
                    </div>
                  </div>
                </div>

                <ul className="flex flex-col gap-4 mt-auto relative z-10">
                  {[
                    <><span className="text-white font-bold">AI-classified</span> 3D terrain models</>,
                    <><span className="text-white font-bold">Accessible</span> to all stakeholders via web</>,
                    <><span className="text-white font-bold">Automated</span> volume tracking</>,
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-0.5 shrink-0"><Check size={16} strokeWidth={3} className="text-[#FFF200]" /></div>
                      <span className="text-[14px] lg:text-[16px] text-gray-400 font-medium leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          TERRAIN REPRESENTATION 
      ════════════════════════════════════════ */}
      <TerrainRepresentationSection />

      {/* ════════════════════════════════════════
          CONTINUOUS VALUE (Micro-Cards Grid)
      ════════════════════════════════════════ */}
      <section className="relative bg-white py-16 lg:py-24 overflow-hidden font-sans border-b border-gray-50">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-[9px] font-black uppercase tracking-[0.2em] text-gray-500 mb-5 shadow-sm">
              Continuous Intelligence
            </div>
            
            <h2 className="text-[34px] sm:text-[44px] lg:text-[52px] font-black tracking-tighter leading-[1.05] text-black mb-5">
              Data that stays usable <br className="hidden sm:block"/>
              <span className="relative inline-block mt-1 sm:mt-2"> 
                  <span className="absolute inset-y-1 -inset-x-2 bg-[#FFF200] rounded-xl shadow-sm transform -skew-x-2"></span>
                  <span className="relative text-black">beyond day one.</span>
              </span>
            </h2>
            
            <p className="text-[15px] lg:text-lg text-gray-500 font-medium leading-relaxed mb-8 max-w-lg">
              Accuracy for design, frequency for execution. YelloSKYE grows with your project.
            </p>

            <div className="grid grid-cols-2 gap-3">
               {[
                 { icon: <Crosshair size={16}/>, title: "±2cm Accuracy" },
                 { icon: <History size={16}/>, title: "Frequent Updates" },
                 { icon: <BarChart size={16}/>, title: "Auto Volumes" },
                 { icon: <Layers size={16}/>, title: "Historical Data" }
               ].map((card, i) => (
                 <div key={i} className="bg-gray-50 border border-gray-100 p-4 rounded-[20px] shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black mb-3 border border-gray-100 shadow-sm">
                      {card.icon}
                    </div>
                    <h4 className="font-black text-black text-[13px]">{card.title}</h4>
                 </div>
               ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative w-full aspect-[4/3] lg:aspect-[4/5] rounded-[28px] lg:rounded-[32px] overflow-hidden bg-[#0A0A0A] border border-gray-200 shadow-2xl">
            <img src="https://ik.imagekit.io/saxybrgkp/Website%20Images%20Land%20Survey6.png" className="w-full h-full object-cover opacity-90" alt="Continuous Terrain Data" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════
          COMPATIBLE WITH DESIGN TOOLS (MOBILE STACKED)
      ════════════════════════════════════════ */}
      <section className="relative bg-white py-16 lg:py-24 overflow-hidden font-sans">
        
        <style>{`
          @keyframes data-flow-mobile { from { stroke-dashoffset: 24; } to { stroke-dashoffset: 0; } }
          .animate-data-flow-mobile { animation: data-flow-mobile 1.5s linear infinite; }
        `}</style>

        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        <div className="max-w-[1400px] mx-auto px-5 lg:px-8 relative z-10">
          
          <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-16">

            {/* LEFT: COMPLEX ANIMATED VISUAL (Restrained for mobile bounds) */}
            <div className="order-2 lg:order-1 relative w-full lg:w-[50%] aspect-square lg:aspect-auto rounded-[32px] lg:rounded-[40px] border border-gray-200 shadow-xl overflow-hidden bg-white flex flex-col min-h-[350px] lg:min-h-[450px]">
              
              <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "linear-gradient(to right, #E5E7EB 1px, transparent 1px), linear-gradient(to bottom, #E5E7EB 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#FFF200]/10 blur-[50px] rounded-full pointer-events-none z-0"></div>

              {/* Data Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="#F3F4F6" strokeWidth="2" />
                <line x1="50%" y1="50%" x2="80%" y2="35%" stroke="#F3F4F6" strokeWidth="2" />
                <line x1="50%" y1="50%" x2="30%" y2="70%" stroke="#F3F4F6" strokeWidth="2" />
                <line x1="50%" y1="50%" x2="75%" y2="75%" stroke="#F3F4F6" strokeWidth="2" />
                <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="#D4C900" strokeWidth="2" strokeDasharray="4 15" className="animate-data-flow-mobile" />
                <line x1="50%" y1="50%" x2="80%" y2="35%" stroke="#D4C900" strokeWidth="2" strokeDasharray="4 15" className="animate-data-flow-mobile" />
                <line x1="50%" y1="50%" x2="30%" y2="70%" stroke="#D4C900" strokeWidth="2" strokeDasharray="4 15" className="animate-data-flow-mobile" />
                <line x1="50%" y1="50%" x2="75%" y2="75%" stroke="#D4C900" strokeWidth="2" strokeDasharray="4 15" className="animate-data-flow-mobile" />
              </svg>

              {/* Nodes (Clamped positions so they don't break mobile bounds) */}
              <div className="absolute inset-0 z-20 pointer-events-none">
                  {/* Central Hub */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-16 h-16 bg-[#0A0A0A] rounded-[16px] shadow-2xl flex items-center justify-center">
                    <DownloadCloud size={24} className="text-[#FFF200] relative z-10" />
                  </div>
                  {/* Nodes */}
                  <div className="absolute top-[20%] left-[15%] bg-white p-2 pr-3 rounded-xl border border-gray-200 shadow-md flex items-center gap-2"><div className="w-6 h-6 bg-[#0696D7]/10 rounded-lg flex items-center justify-center"><Box size={12} className="text-[#0696D7]"/></div><span className="text-black font-black text-[10px]">AutoCAD</span></div>
                  <div className="absolute top-[25%] left-[65%] bg-white p-2 pr-3 rounded-xl border border-gray-200 shadow-md flex items-center gap-2"><div className="w-6 h-6 bg-[#4B55E8]/10 rounded-lg flex items-center justify-center"><Layers size={12} className="text-[#4B55E8]"/></div><span className="text-black font-black text-[10px]">Revit</span></div>
                  <div className="absolute top-[70%] left-[15%] bg-white p-2 pr-3 rounded-xl border border-gray-200 shadow-md flex items-center gap-2"><div className="w-6 h-6 bg-[#10B981]/10 rounded-lg flex items-center justify-center"><MapPin size={12} className="text-[#10B981]"/></div><span className="text-black font-black text-[10px]">ArcGIS</span></div>
                  <div className="absolute top-[65%] left-[65%] bg-white p-2 pr-3 rounded-xl border border-gray-200 shadow-md flex items-center gap-2"><div className="w-6 h-6 bg-[#D97706]/10 rounded-lg flex items-center justify-center"><Activity size={12} className="text-[#D97706]"/></div><span className="text-black font-black text-[10px]">Navisworks</span></div>
              </div>

              {/* Status Bar */}
              <div className="absolute bottom-4 left-4 right-4 z-30 bg-[#0A0A0A] px-4 py-3 rounded-xl flex justify-between items-center shadow-xl">
                 <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Status</span>
                 <div className="flex items-center gap-1.5"><span className="text-[#FFF200] text-[10px] font-bold">Ready</span><Check size={12} className="text-[#FFF200]" strokeWidth={4} /></div>
              </div>
            </div>

            {/* RIGHT: COPY & CARDS */}
            <div className="order-1 lg:order-2 lg:w-[50%] flex flex-col justify-center">
              <div className="mb-8">
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-gray-200 bg-gray-50 text-[9px] font-black uppercase tracking-[0.2em] text-gray-500 mb-4 shadow-sm">
                  Integration
                </div>
                <h2 className="text-[34px] sm:text-[44px] lg:text-[46px] font-black tracking-tighter leading-[1.05] text-black mb-4">
                  Compatible with your <span className="bg-[#FFF200] px-1 rounded-md">design tools.</span>
                </h2>
                <p className="text-[15px] text-gray-500 font-medium leading-relaxed">
                  Export survey data in formats your engineers already use. No need to change workflows.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                 {[
                   { icon: <Box size={14}/>, t: "CAD Exports", d: "DWG / DXF." },
                   { icon: <Layers size={14}/>, t: "BIM", d: "RCP, LAS, LAZ." },
                   { icon: <MapPin size={14}/>, t: "GIS", d: "GeoTIFF." },
                   { icon: <FileOutput size={14}/>, t: "3D Mesh", d: "OBJ & FBX." }
                 ].map((card, i) => (
                   <div key={i} className="bg-gray-50 border border-gray-100 p-4 rounded-[20px] shadow-sm">
                      <div className="w-8 h-8 rounded-[10px] bg-white border border-gray-100 shadow-sm flex items-center justify-center text-[#D4C900] mb-2">
                        {card.icon}
                      </div>
                      <h4 className="font-black text-black text-[13px] mb-0.5">{card.t}</h4>
                      <p className="text-[11px] text-gray-500 font-medium">{card.d}</p>
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

export default MobileLandSurvey;