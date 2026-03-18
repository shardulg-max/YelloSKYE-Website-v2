import React, { useState, useEffect } from "react";
import { 
  X, Check, ArrowRight, DownloadCloud, Globe, Layers, MapPin, Mail, 
  Twitter, Linkedin, Youtube, Instagram, PlayCircle, BarChart, History, 
  Crosshair, Box, FileOutput, Camera, Clock, AlertTriangle, Unplug, 
  LayoutDashboard, Eye, Activity, Users, Zap, ShieldCheck, FileCheck, 
  RefreshCw, Smartphone, MonitorPlay, Video, BarChart3
} from "lucide-react";

// ─── DATA: INTERACTIVE VIEWER ──────────────────────────────────────────────────

const MONITORING_FEATURES = [
  {
    id: 'aerial',
    label: 'Aerial Progress',
    title: 'Drone-Based Progress Tracking',
    desc: 'Regular automated drone flights capture site progress. Compare actual execution against planned schedules with transparent work-done reconciliation.',
    fallbackImg: 'https://ik.imagekit.io/saxybrgkp/MME/aerieal%20progress.png',
    placeholderBg: 'bg-blue-50'
  },
  {
    id: 'interior',
    label: 'Interior 360°',
    title: 'Digital Twins of Interiors',
    desc: 'Walk through interiors remotely. Tag problem areas, compare changes across dates, and track MEP installations without leaving the office.',
    fallbackImg: 'https://ik.imagekit.io/saxybrgkp/Construction%20Monitoring/Website%20Images%20La2nd%20Survey.png?updatedAt=1773640609383',
    placeholderBg: 'bg-orange-50'
  },
  {
    id: 'fixed-cam',
    label: 'Fixed Cameras',
    title: 'Always-On Site Monitoring',
    desc: 'Continuously analyze progress, crew patterns, and material flow. Generate high-resolution timelapses and track workforce presence effortlessly.',
    fallbackImg: 'https://ik.imagekit.io/saxybrgkp/MME/website/Land%20Survey%20Website%20Image%20(1).png',
    placeholderBg: 'bg-green-50'
  },
  {
    id: 'portfolio',
    label: 'Portfolio Dashboard',
    title: 'Unified Executive Analytics',
    desc: 'Monitor all sites in one centralized data hub. Customizable insights, stage-wise completion rates, and real-time lag calculations across your portfolio.',
    fallbackImg: 'https://ik.imagekit.io/saxybrgkp/Construction%20Monitoring/4.png?updatedAt=1773640609542',
    placeholderBg: 'bg-purple-50'
  }
];

// ─── SUB-COMPONENT: INTERACTIVE DASHBOARD ─────────────────────────────────────

const MonitoringRepresentationSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % MONITORING_FEATURES.length);
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
            One continuous <span className="relative inline-block mx-1 mt-1 lg:mt-0">
              <span className="absolute inset-y-1 -inset-x-2 bg-[#FFF200] rounded-xl"></span>
              <span className="relative text-black">visual timeline.</span>
            </span>
            <br className="hidden sm:block"/> Not scattered snapshots.
          </h2>
          <p className="text-[15px] lg:text-lg text-gray-500 font-medium leading-relaxed max-w-4xl mx-auto px-2">
            YelloSKYE replaces manual site visits with automated aerial and ground-level reality capture. Every update stays in sequence.
          </p>
        </div>

        {/* Interactive Viewer Component */}
        <div className="bg-white rounded-[24px] lg:rounded-[32px] border border-gray-200 shadow-xl lg:shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-3 lg:p-4"
             onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          
          {/* Mobile-Friendly Tabs (Scrollable) */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar scroll-smooth mb-3 pb-1 px-1 snap-x">
            {MONITORING_FEATURES.map((feature, index) => {
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
          <div className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[2.5/1] bg-[#0A0A0A] overflow-hidden rounded-[20px] mb-3 group">
            {MONITORING_FEATURES.map((feature, index) => (
              <div key={feature.id} className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${feature.placeholderBg} ${activeIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                <img src={feature.fallbackImg} alt={feature.title} className="w-full h-full object-cover object-left-top opacity-90" />
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
                  {MONITORING_FEATURES[activeIndex].label}
                </div>
                <h3 className="text-xl lg:text-2xl font-black text-black leading-tight tracking-tight">
                  {MONITORING_FEATURES[activeIndex].title}
                </h3>
             </div>
             <div className="md:max-w-md md:text-right w-full">
                <p className="text-[13px] lg:text-base text-gray-500 font-medium leading-relaxed">
                  {MONITORING_FEATURES[activeIndex].desc}
                </p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};


// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

export const MobileConstructionMonitoring: React.FC = () => {
  return (
    <div className="bg-white text-black font-sans selection:bg-[#FFF200] selection:text-black overflow-x-hidden">

      {/* ════════════════════════════════════════
          HERO - CONSTRUCTION MONITORING
      ════════════════════════════════════════ */}
      <section className="pt-[100px] lg:pt-44 pb-10 lg:pb-20 bg-white relative border-b border-gray-50">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ 
               backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", 
               backgroundSize: "40px 40px",
             }} />
             
        <div className="max-w-[1400px] mx-auto px-5 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12 mb-8 lg:mb-14">
            
            <div className="flex-1 flex flex-col">
              <h1 className="text-[48px] sm:text-[60px] lg:text-[72px] font-black leading-[0.95] tracking-tighter text-black mb-4 lg:mb-6">
                Know what's really happening on site.
              </h1>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] sm:text-[12px] lg:text-[14px] font-bold text-gray-500 tracking-wide">
                <span className="flex items-center gap-1.5"><Check size={14} strokeWidth={4} className="text-[#FFF200]"/> Automated Tracking</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full hidden sm:block"></span>
                <span className="flex items-center gap-1.5"><Check size={14} strokeWidth={4} className="text-[#FFF200]"/> Progress vs. Plan</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full hidden md:block"></span>
                <span className="flex items-center gap-1.5"><Check size={14} strokeWidth={4} className="text-[#FFF200]"/> Unified Dashboard</span>
              </div>
            </div>

            <div className="flex-1 lg:max-w-md flex flex-col pt-2 lg:pt-0">
              <h2 className="text-[17px] lg:text-[28px] font-medium leading-relaxed text-gray-800 tracking-tight">
                Replace delayed reports with absolute visual truth across your entire portfolio.
              </h2>
            </div>

          </div>

          {/* Hero Visual - Controlled aspect ratio for mobile vs desktop */}
          <div className="w-full aspect-[4/5] sm:aspect-[4/3] md:aspect-[2.2/1] rounded-[24px] lg:rounded-[40px] overflow-hidden bg-[#0A0A0A] relative shadow-2xl lg:shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-200 group">
            <img 
              src="https://ik.imagekit.io/saxybrgkp/Construction%20Monitoring/Website%20Images%20Land%20Survey%20new.png?updatedAt=1773640755116"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[20s] ease-out opacity-90"
              alt="Construction Site Monitoring"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none"></div>

            {/* Scaled overlays for mobile */}
            <div className="absolute top-4 left-4 lg:top-8 lg:left-8 bg-white/80 backdrop-blur-2xl px-3 py-2 lg:px-5 lg:py-3 rounded-xl lg:rounded-2xl flex items-center gap-2 shadow-lg border border-white/50 z-20">
               <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22C55E]"></div>
               <span className="text-[8px] lg:text-[10px] font-black uppercase tracking-widest text-black mt-0.5">Live Timeline Active</span>
            </div>

            <div className="absolute bottom-4 right-4 lg:bottom-8 lg:right-8 bg-black/80 backdrop-blur-2xl px-4 py-3 lg:px-6 lg:py-4 rounded-xl lg:rounded-2xl border border-white/20 flex items-center gap-4 lg:gap-6 shadow-2xl z-20">
               <div className="text-right">
                  <div className="text-[7px] lg:text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-0.5">Status</div>
                  <div className="text-green-400 font-mono text-sm lg:text-base font-bold">On Track</div>
               </div>
               <div className="w-[1px] h-6 lg:h-8 bg-white/20"></div>
               <div className="text-right">
                  <div className="text-[7px] lg:text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-0.5">Completion</div>
                  <div className="text-[#FFF200] font-mono text-sm lg:text-base font-bold">87.8%</div>
               </div>
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
               { label: "Site Visits", value: "-80%", sub: "Manual Inspections" },
               { label: "Reporting", value: "10x", sub: "Faster Updates" },
               { label: "Issue Closure", value: "-50%", sub: "Resolution Time" },
               { label: "Approvals", value: "3x", sub: "Faster Sign-offs" },
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

      {/* ════════════════════════════════════════
          THE PROBLEM WITH TRADITIONAL MONITORING
      ════════════════════════════════════════ */}
      <section className="relative bg-white py-16 lg:py-24 overflow-hidden font-sans border-b border-gray-50">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-8 relative z-10">
          
          <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-20">
            <h2 className="text-[34px] sm:text-[44px] lg:text-[48px] font-black tracking-tighter leading-[1.05] text-black mb-6">
              Most Construction Monitoring <br className="hidden sm:block" />
              <span className="relative inline-block mt-2 mx-1 sm:mx-2">
                <span className="absolute inset-y-1 -inset-x-2 bg-[#FFF200] rounded-xl shadow-sm transform -skew-x-2"></span>
                <span className="relative text-black">Doesn't Actually Monitor.</span>
              </span>
            </h2>
            
            <p className="text-[15px] lg:text-lg text-gray-500 font-medium leading-relaxed max-w-3xl mx-auto">
              It documents what already happened. By the time leadership sees progress, decisions have already been made—often without the full picture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 max-w-6xl mx-auto">
            {[
              { 
                icon: <Clock size={20} strokeWidth={2.5} />, 
                title: "Delayed Visibility", 
                desc: "Photos arrive days late. Reports take weeks. The site has moved on." 
              },
              { 
                icon: <Layers size={20} strokeWidth={2.5} />, 
                title: "Fragmented Updates", 
                desc: "Progress lives in WhatsApp and emails. No one has the complete picture." 
              },
              { 
                icon: <ShieldCheck size={20} strokeWidth={2.5} />, 
                title: "Manual Validation", 
                desc: "Every approval requires a site visit. Contractors wait. Decisions slow down." 
              },
              { 
                icon: <RefreshCw size={20} strokeWidth={2.5} />, 
                title: "Version Confusion", 
                desc: "What PMO sees isn't what site teams reported. Zero single-source of truth." 
              }
            ].map((card, i) => (
              <div key={i} className="p-6 lg:p-8 rounded-[24px] bg-gray-50 border border-gray-100 shadow-sm flex flex-col sm:flex-row items-start gap-4 lg:gap-6 group">
                <div className="w-12 h-12 lg:w-14 lg:h-14 shrink-0 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-black group-hover:bg-[#FFF200] group-hover:border-[#FFF200] transition-colors duration-300">
                  {card.icon}
                </div>
                <div className="pt-1">
                  <h3 className="text-[18px] lg:text-xl font-black text-black mb-1.5 tracking-tight">{card.title}</h3>
                  <p className="text-gray-500 font-medium leading-relaxed text-[13px] lg:text-base">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* ════════════════════════════════════════
          INTERACTIVE TABS: CAPTURE METHODS
      ════════════════════════════════════════ */}
      <MonitoringRepresentationSection />

      {/* ════════════════════════════════════════
          FEATURE GRID: TRACK WHAT MATTERS
      ════════════════════════════════════════ */}
      <section className="relative bg-white py-16 lg:py-28 border-b border-gray-50">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-20">
            <h2 className="text-[34px] sm:text-[44px] lg:text-[52px] font-black tracking-tighter leading-[1.05] text-black mb-5">
              Track what matters, <br />
              <span className="relative inline-block mt-2 mx-1 sm:mx-2">
                <span className="absolute inset-y-1 -inset-x-2 bg-[#FFF200] rounded-xl shadow-sm"></span>
                <span className="relative text-black">not just what's easy.</span>
              </span>
            </h2>
            <p className="text-[15px] lg:text-lg text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto">
              Stop chasing contractors for updates. Validate execution instantly, and resolve issues before they compound.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
             {[
               { icon: <MapPin size={20}/>, title: "Geo-Annotations", desc: "Tag issues directly on visuals. Contractors see exactly what needs fixing." },
               { icon: <BarChart size={20}/>, title: "Progress vs. Plan", desc: "Compare execution against schedule. Spot deviations early." },
               { icon: <Activity size={20}/>, title: "Volume Tracking", desc: "Automated cut-fill from drones. Validate billing claims instantly." },
               { icon: <Zap size={20}/>, title: "Automated Alerts", desc: "Get notified on critical milestones or when activity stops." },
               { icon: <Users size={20}/>, title: "Unified Dashboards", desc: "Site teams, PMOs, clients—everyone sees the exact same reality." },
               { icon: <History size={20}/>, title: "Time Travel", desc: "Scroll site history day by day. Prove what was built for compliance." }
             ].map((feature, i) => (
               <div key={i} className="bg-white border border-gray-100 p-6 lg:p-8 rounded-[24px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-black mb-5">
                    {feature.icon}
                  </div>
                  <h3 className="text-[17px] lg:text-xl font-black text-black mb-2 tracking-tight">{feature.title}</h3>
                  <p className="text-gray-500 font-medium leading-relaxed text-[13px] lg:text-base">{feature.desc}</p>
               </div>
             ))}
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════
          INTEGRATIONS (MOBILE ADAPTIVE)
      ════════════════════════════════════════ */}
      <section className="relative bg-white py-16 lg:py-24 overflow-hidden font-sans">
        
        <style>{`
          @keyframes data-flow-mobile { from { stroke-dashoffset: 24; } to { stroke-dashoffset: 0; } }
          .animate-data-flow-mobile { animation: data-flow-mobile 1.5s linear infinite; }
          @keyframes sync-pulse-mobile { 0% { box-shadow: 0 0 0 0 rgba(255, 242, 0, 0.2); } 70% { box-shadow: 0 0 0 30px rgba(255, 242, 0, 0); } 100% { box-shadow: 0 0 0 0 rgba(255, 242, 0, 0); } }
        `}</style>

        <div className="max-w-[1400px] mx-auto px-5 lg:px-8 relative z-10">
          
          <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-16">
            
            {/* LEFT: DARK SYNC HUB */}
            <div className="order-2 lg:order-1 relative w-full lg:w-[45%] rounded-[32px] lg:rounded-[40px] border border-gray-200 shadow-xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] via-[#0A0A0A] to-black flex flex-col min-h-[350px] lg:min-h-[450px]">
              
              <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "linear-gradient(to right, #FFF 1px, transparent 1px), linear-gradient(to bottom, #FFF 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#FFF200]/10 blur-[50px] rounded-full pointer-events-none z-0"></div>

              {/* Data Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="#333" strokeWidth="2" />
                <line x1="50%" y1="50%" x2="75%" y2="35%" stroke="#333" strokeWidth="2" />
                <line x1="50%" y1="50%" x2="30%" y2="70%" stroke="#333" strokeWidth="2" />
                <line x1="25%" y1="25%" x2="50%" y2="50%" stroke="#FFF200" strokeWidth="2" strokeDasharray="4 12" className="animate-data-flow-mobile" />
                <line x1="75%" y1="35%" x2="50%" y2="50%" stroke="#FFF200" strokeWidth="2" strokeDasharray="4 12" className="animate-data-flow-mobile" />
                <line x1="30%" y1="70%" x2="50%" y2="50%" stroke="#FFF200" strokeWidth="2" strokeDasharray="4 12" className="animate-data-flow-mobile" />
              </svg>

              {/* Nodes */}
              <div className="absolute inset-0 z-20 pointer-events-none">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#080808] rounded-2xl shadow-[0_0_20px_rgba(255,242,0,0.1)] border border-[#FFF200]/30 flex items-center justify-center" style={{ animation: 'sync-pulse-mobile 2.5s infinite' }}>
                    <RefreshCw size={24} className="text-[#FFF200] animate-[spin_4s_linear_infinite]" />
                  </div>
                  
                  <div className="absolute top-[20%] left-[15%] bg-[#111] p-2 pr-3 rounded-xl border border-gray-700 shadow-2xl flex items-center gap-2">
                    <div className="w-6 h-6 bg-[#E54B2B]/20 rounded-lg flex items-center justify-center"><Box size={12} className="text-[#E54B2B]"/></div>
                    <span className="text-white font-black text-[10px]">Procore</span>
                  </div>
                  
                  <div className="absolute top-[30%] left-[65%] bg-[#111] p-2 pr-3 rounded-xl border border-gray-700 shadow-2xl flex items-center gap-2">
                    <div className="w-6 h-6 bg-[#0696D7]/20 rounded-lg flex items-center justify-center"><Layers size={12} className="text-[#0696D7]"/></div>
                    <span className="text-white font-black text-[10px]">Autodesk</span>
                  </div>
                  
                  <div className="absolute top-[70%] left-[20%] bg-[#111] p-2 pr-3 rounded-xl border border-gray-700 shadow-2xl flex items-center gap-2">
                    <div className="w-6 h-6 bg-[#10B981]/20 rounded-lg flex items-center justify-center"><LayoutDashboard size={12} className="text-[#10B981]"/></div>
                    <span className="text-white font-black text-[10px]">MS Project</span>
                  </div>
              </div>

              {/* Status Bar */}
              <div className="absolute bottom-4 left-4 right-4 z-30 bg-black/80 backdrop-blur-xl px-4 py-3 rounded-xl border border-white/10 flex justify-between items-center shadow-2xl">
                 <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">API Status</span>
                 <div className="flex items-center gap-1.5"><span className="text-[#FFF200] text-[10px] font-bold">Synced</span><Check size={12} className="text-[#FFF200]" strokeWidth={4} /></div>
              </div>
            </div>

            {/* RIGHT: COPY */}
            <div className="order-1 lg:order-2 lg:w-[55%] flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-[9px] font-black uppercase tracking-[0.2em] text-gray-500 mb-4 shadow-sm self-start">
                Seamless Integration
              </div>
              
              <h2 className="text-[34px] sm:text-[44px] lg:text-[46px] font-black tracking-tighter leading-[1.05] text-black mb-4">
                Fits your workflow. <br />
                <span className="relative inline-block mt-2">
                  <span className="absolute inset-y-1 -inset-x-2 bg-[#FFF200] rounded-lg shadow-sm transform -skew-x-2"></span>
                  <span className="relative text-black">Not the other way around.</span>
                </span>
              </h2>
              
              <p className="text-[15px] lg:text-base text-gray-500 font-medium leading-relaxed mb-6 max-w-[460px]">
                YelloSKYE integrates with the tools you already use. Add the visual layer they've been missing.
              </p>

              <ul className="space-y-2">
                {[
                  "Export to Procore, Autodesk, MS Project",
                  "Push updates to stakeholder dashboards",
                  "API access for custom workflows",
                  "White-label client-facing portals"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-center group p-2 -ml-2 rounded-[12px] hover:bg-gray-50 transition-colors">
                    <div className="w-6 h-6 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0 text-black">
                      <Check size={12} strokeWidth={4} />
                    </div>
                    <span className="text-[13px] lg:text-[15px] font-bold text-gray-800 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default MobileConstructionMonitoring;