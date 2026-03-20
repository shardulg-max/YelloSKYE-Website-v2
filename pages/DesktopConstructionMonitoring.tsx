import React, { useState, useEffect } from "react";
import { 
  X, Check, ArrowRight, DownloadCloud, Globe, Layers, MapPin, Mail, 
  Twitter, Linkedin, Youtube, Instagram, PlayCircle, BarChart, History, 
  Crosshair, Box, FileOutput, Camera, Clock, AlertTriangle, Unplug, 
  LayoutDashboard, Eye, Activity, Users, Zap, ShieldCheck, FileCheck, 
  RefreshCw, Smartphone, MonitorPlay, Video
} from "lucide-react";

// ─── DATA: INTERACTIVE VIEWER ──────────────────────────────────────────────────
const MONITORING_FEATURES = [
  {
    id: 'aerial',
    label: 'Aerial Progress',
    title: 'Drone-Based Progress Tracking',
    desc: 'Automated drone flights provide transparent work-done reconciliation by comparing actual execution against planned schedules.',
    fallbackImg: 'https://ik.imagekit.io/saxybrgkp/MME/aerieal%20progress.png'
  },
  {
    id: 'interior',
    label: 'Interior 360°',
    title: 'Digital Twins of Interiors',
    desc: 'Remotely walk through interiors to tag problem areas, track MEP installations, and compare changes across dates.',
    fallbackImg: 'https://ik.imagekit.io/saxybrgkp/Construction%20Monitoring/Website%20Images%20La2nd%20Survey.png?updatedAt=1773640609383'
  },
  {
    id: 'fixed-cam',
    label: 'Fixed Cameras',
    title: 'Always-On Site Monitoring',
    desc: 'Continuously analyze crew patterns and material flow with high-resolution timelapses and workforce presence tracking.',
    fallbackImg: 'https://ik.imagekit.io/saxybrgkp/MME/website/Land%20Survey%20Website%20Image%20(1).png'
  },
  {
    id: 'portfolio',
    label: 'Portfolio Dashboard',
    title: 'Unified Executive Analytics',
    desc: 'Monitor stage-wise completion and real-time lag calculations across your entire portfolio in one centralized data hub.',
    fallbackImg: 'https://ik.imagekit.io/saxybrgkp/Construction%20Monitoring/4.png?updatedAt=1773640609542'
  }
];

export const ConstructionMonitoringHero: React.FC = () => {
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
    <section className="pt-24 lg:pt-32 pb-10 bg-white relative overflow-hidden font-sans">
      
      <style>{`
        @keyframes hero-progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>

      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", 
             backgroundSize: "80px 80px",
             maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)"
           }} />
           
      {/* 1600px Max-Width Container */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 relative z-10">
        
        {/* SHIFTED HEADER: mt-8 pushes text down, mb-4 pulls viewer up. Total height stays identical. */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 mt-6 lg:mt-10 mb-4 lg:mb-6 items-center">
          <div className="lg:col-span-7 flex flex-col">
            <h1 className="text-[clamp(36px,4.5vw,56px)] font-black leading-[1] tracking-tighter text-black mb-4">
              Know what's really <br/>
              <span className="relative inline-block mt-1">
                <span className="absolute inset-y-1 -inset-x-2 bg-[#FFF200] rounded-[12px] transform -skew-x-2"></span>
                <span className="relative text-black">happening on site.</span>
              </span>
            </h1>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] lg:text-[13px] font-bold text-gray-500 uppercase tracking-wider">
               <span className="flex items-center gap-1.5"><Check size={16} strokeWidth={4} className="text-[#FFF200]"/> 360° Walkthroughs</span>
               <span className="flex items-center gap-1.5"><Check size={16} strokeWidth={4} className="text-[#FFF200]"/> Progress Tracking</span>
               <span className="flex items-center gap-1.5"><Check size={16} strokeWidth={4} className="text-[#FFF200]"/> Executive Dashboards</span>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col lg:pl-10">
            <h2 className="text-xl lg:text-2xl font-medium leading-[1.3] text-gray-800 tracking-tight">
              Replace manual site visits with an automated visual record across your entire project lifecycle.
            </h2>
          </div>
        </div>

        {/* TIGHTER PREMIUM INTERACTIVE VIEWER */}
        <div 
          className="bg-white rounded-[24px] lg:rounded-[36px] border border-gray-200 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.1)] p-3 lg:p-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Tabs */}
          <div className="flex gap-2 overflow-x-auto hide-scrollbar scroll-smooth mb-4 px-1">
            {MONITORING_FEATURES.map((feature, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveIndex(index)}
                  className={`whitespace-nowrap px-6 py-2.5 text-[11px] font-black uppercase tracking-widest transition-all duration-300 rounded-full border
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

          {/* Viewer Area */}
          <div className="relative w-full aspect-[16/9] lg:aspect-[2.6/1] bg-black overflow-hidden rounded-[16px] lg:rounded-[24px] group mb-4">
            {MONITORING_FEATURES.map((feature, index) => (
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

          {/* Dynamic Caption Bar */}
          <div className="bg-gray-50 rounded-[20px] p-5 lg:p-6 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center border border-gray-100">
             <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-md bg-black text-[#FFF200] text-[10px] font-black uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFF200] animate-pulse"></span>
                  {MONITORING_FEATURES[activeIndex].label} Active
                </div>
                <h3 className="text-2xl lg:text-3xl font-black text-black leading-none tracking-tighter">
                  {MONITORING_FEATURES[activeIndex].title}
                </h3>
             </div>
             <div className="md:max-w-md lg:max-w-lg md:text-right">
                <p className="text-base lg:text-lg text-gray-500 font-medium leading-relaxed">
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

export const ConstructionMonitoring: React.FC = () => {
  return (
    <div className="bg-white text-black font-sans selection:bg-[#FFF200] selection:text-black">

{/* ════════════════════════════════════════
          INTERACTIVE TABS: CAPTURE METHODS
      ════════════════════════════════════════ */}
      <ConstructionMonitoringHero />

      {/* ════════════════════════════════════════
          THE TRUST BAR
      ════════════════════════════════════════ */}
      <section className="bg-white border-gray-100 py-12 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-gray-200">
             {[
               { label: "Site Visits", value: "-80%", sub: "Manual Inspections" },
               { label: "Reporting", value: "10x", sub: "Faster Progress Updates" },
               { label: "Issue Closure", value: "-50%", sub: "Resolution Time" },
               { label: "Approvals", value: "3x", sub: "Faster Sign-offs" },
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
          THE PROBLEM WITH TRADITIONAL MONITORING
      ════════════════════════════════════════ */}
      <section className="relative bg-white pt-16 lg:pt-24 pb-16 lg:pb-24 overflow-hidden font-sans">
        
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ 
               backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", 
               backgroundSize: "80px 80px",
               maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
               WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)"
             }} />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
          
          <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-20">
            <h2 className="text-[clamp(32px,4vw,48px)] font-black tracking-tighter leading-[1.1] text-black mb-6">
              Most Construction Monitoring <br />
              <span className="relative inline-block mt-1 mx-2">
                <span className="absolute inset-y-1 -inset-x-3 bg-[#FFF200] rounded-lg shadow-sm transform -skew-x-2"></span>
                <span className="relative text-black"> Doesn't Actually Monitor.</span>
              </span>
            </h2>
            
            <p className="text-base lg:text-lg text-gray-500 font-medium leading-relaxed max-w-3xl mx-auto">
              It documents what already happened. By the time leadership sees progress, <br className="hidden md:block" />
              decisions have already been made—often without the full picture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {[
              { 
                icon: <Clock size={22} strokeWidth={2.5} />, 
                title: "Delayed Visibility", 
                desc: "Site photos arrive days after capture. Reports take weeks to compile. By the time stakeholders review them, the site has moved on." 
              },
              { 
                icon: <Layers size={22} strokeWidth={2.5} />, 
                title: "Fragmented Updates", 
                desc: "Progress lives in emails, WhatsApp groups, spreadsheets, and verbal updates. No one has the complete picture." 
              },
              { 
                icon: <ShieldCheck size={22} strokeWidth={2.5} />, 
                title: "Manual Validation", 
                desc: "Every approval requires site visits or back-and-forth clarifications. Contractors wait. Decisions slow down." 
              },
              { 
                icon: <RefreshCw size={22} strokeWidth={2.5} />, 
                title: "Version Confusion", 
                desc: "Different teams work from different versions of progress. What PMO sees isn't what site teams reported." 
              }
            ].map((card, i) => (
              <div key={i} className="p-8 rounded-[24px] bg-[#F9F9F9] border border-transparent hover:bg-white hover:border-gray-200 shadow-none hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 group flex flex-col lg:flex-row items-start gap-6">
                
                <div className="w-14 h-14 shrink-0 rounded-xl bg-[#FFF200]/20 border border-[#FFF200]/40 shadow-sm flex items-center justify-center text-black group-hover:bg-[#FFF200] group-hover:border-[#FFF200] group-hover:scale-105 transition-all duration-300 ease-out">
                  {card.icon}
                </div>
                
                <div className="pt-1">
                  <h3 className="text-xl font-black text-black mb-2 tracking-tight">{card.title}</h3>
                  <p className="text-gray-500 font-medium leading-relaxed text-base">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* ════════════════════════════════════════
          FEATURE GRID: TRACK WHAT MATTERS
      ════════════════════════════════════════ */}
      <section className="relative bg-white pt-20 lg:pt-28 pb-20 lg:pb-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <h2 className="text-[clamp(36px,4vw,52px)] font-black tracking-tighter leading-[1.1] text-black mb-6">
              Track what matters, <br />
              <span className="relative inline-block mt-1 mx-2">
                <span className="absolute inset-y-0 -inset-x-3 bg-[#FFF200] rounded-xl shadow-sm"></span>
                <span className="relative text-black">not just what's easy to measure.</span>
              </span>
            </h2>
            <p className="text-lg text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto">
              Stop chasing contractors for updates. See progress yourself, validate execution instantly, and resolve issues before they compound.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
             {[
               { icon: <MapPin size={22}/>, title: "Geo-Referenced Annotations", desc: "Tag issues directly on site visuals. Contractors see exactly where and what needs fixing—no ambiguity." },
               { icon: <BarChart size={22}/>, title: "Progress vs. Plan Overlay", desc: "Compare actual execution against your planned schedule (4D). Spot deviations early." },
               { icon: <Activity size={22}/>, title: "Volume & Earthwork", desc: "Automated cut-fill calculations from drone surveys. Validate billing claims without manual surveys." },
               { icon: <Zap size={22}/>, title: "Automated Alerts", desc: "Get notified when critical milestones are reached or when activity stops in high-priority zones." },
               { icon: <Users size={22}/>, title: "Stakeholder Dashboards", desc: "Everyone sees the same reality—site teams, PMOs, clients. No more reconciling versions." },
               { icon: <History size={22}/>, title: "Time Travel Playback", desc: "Scroll through site history day by day. Prove exactly what was built when for compliance." }
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
          BANGER ANIMATION: HUB & SPOKE (Final Precision Alignment)
      ════════════════════════════════════════ */}
      <section className="bg-white pt-6 lg:pt-12 pb-10 lg:pb-15 relative overflow-hidden font-sans  border-gray-100">
        
        <style>{`
          @keyframes data-flow {
            from { stroke-dashoffset: 24; }
            to { stroke-dashoffset: 0; }
          }
          .animate-data-flow {
            stroke-dasharray: 6 6;
            animation: data-flow 1s linear infinite;
          }
          @keyframes hub-glow {
            0%, 100% { opacity: 0.15; transform: scale(1); }
            50% { opacity: 0.25; transform: scale(1.05); }
          }
        `}</style>

        {/* ─── FADE ABOVE AND BELOW ─── */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ 
          backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", 
          backgroundSize: "60px 60px",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)"
        }} />
        
        <div className="max-w-[1500px] mx-auto px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-6 lg:mb-8">
            <h2 className="text-[clamp(32px,4vw,48px)] font-black tracking-tighter leading-[1.1] text-black mb-3">
              From Manual Reporting to <br className="md:hidden" />
              <span className="relative inline-block mt-1 mx-2">
                <span className="absolute inset-y-0 -inset-x-3 bg-[#FFF200] rounded-xl shadow-sm"></span>
                <span className="relative text-black">AI-Driven Site Intelligence.</span>
              </span>
            </h2>
            <p className="text-sm lg:text-base text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto">
              Your site captured, analyzed, and updated — automatically.<br />
              Everyone works from real-time truth.
            </p>
          </div>

          <div className="relative w-full max-w-[1300px] mx-auto min-h-[500px] flex items-center justify-center">
             
             {/* ─── PRECISION SVG LINES (Locked to Box Centers) ─── */}
             <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 1000 500" preserveAspectRatio="none">
                  <defs>
                    <filter id="lineGlow">
                      <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                      <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
                    </filter>
                  </defs>
                  
                  <g filter="url(#lineGlow)">
                    {/* LEFT SIDE Precision: Hub edge (330) to Box nodes (272) */}
                    {/* Top Left: Y=85 */}
                    <path d="M 330 250 C 300 250, 300 85, 272 85" fill="none" stroke="#FFF200" strokeWidth="2.5" className="animate-data-flow" />
                    {/* Mid Left: Y=250 */}
                    <path d="M 330 250 L 272 250" fill="none" stroke="#FFF200" strokeWidth="2.5" className="animate-data-flow" />
                    {/* Bottom Left: Y=415 */}
                    <path d="M 330 250 C 300 250, 300 415, 272 415" fill="none" stroke="#FFF200" strokeWidth="2.5" className="animate-data-flow" />

                    {/* RIGHT SIDE Precision: Hub edge (670) to Box nodes (728) */}
                    {/* Top Right: Y=85 */}
                    <path d="M 670 250 C 700 250, 700 85, 728 85" fill="none" stroke="#FFF200" strokeWidth="2.5" className="animate-data-flow" />
                    {/* Mid Right: Y=250 */}
                    <path d="M 670 250 L 728 250" fill="none" stroke="#FFF200" strokeWidth="2.5" className="animate-data-flow" />
                    {/* Bottom Right: Y=415 */}
                    <path d="M 670 250 C 700 250, 700 415, 728 415" fill="none" stroke="#FFF200" strokeWidth="2.5" className="animate-data-flow" />
                  </g>
                </svg>
             </div>
             
             {/* ─── PERSONA MAP CONTENT ─── */}
             <div className="w-full flex flex-col lg:grid lg:grid-cols-[27.2%_auto_27.2%] justify-between relative z-10 items-stretch h-full py-2">
                
                {/* Left Column */}
                <div className="flex flex-col justify-between h-[450px] relative z-20">
                   {[
                     { role: "PMO Teams", desc: "Review progress across sites instantly. Validate milestones visually.", icon: <LayoutDashboard size={18}/> },
                     { role: "Clients & Investors", desc: "Access high-def progress anytime. Track project health seamlessly.", icon: <Users size={18}/> },
                     { role: "Quality Teams", desc: "Remote inspections. Spot defects early, before they become expensive.", icon: <ShieldCheck size={18}/> }
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

                {/* Center Hub - Black Border Visual */}
                <div className="relative group flex justify-center items-center px-4 lg:px-12 z-10">
                   <div className="absolute inset-0 bg-[#FFF200] rounded-full blur-[100px] opacity-15 pointer-events-none" style={{ animation: 'hub-glow 4s ease-in-out infinite' }}></div>
                   
                   {/* Visual Container with Black Border */}
                   <div className="relative w-full max-w-[550px] aspect-[16/10] rounded-[28px] bg-black border-[3px] border-black shadow-[0_40px_100px_rgba(0,0,0,0.15)] p-0.5 transition-transform duration-700 ease-out z-20">
                      <div className="w-full h-full rounded-[24px] overflow-hidden relative bg-gray-900">
                         <img src="https://ik.imagekit.io/saxybrgkp/Website%20Images%20Land%20Survey6.png?updatedAt=1773637747328" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000" alt="Truth Hub" />

                         <div className="absolute top-3 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-2 border border-white/10">
                           <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                           <span className="text-[8px] font-black text-white uppercase tracking-widest">Live Sync</span>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col justify-between h-[450px] relative z-20">
                   {[
                     { role: "Site Engineers", desc: "Automate as-built conditions. Spend less time reporting, more managing.", icon: <Layers size={18}/> },
                     { role: "Contractors", desc: "Indisputable work completion logs. Accelerate payment releases.", icon: <Box size={18}/> },
                     { role: "Safety Officers", desc: "Remote inspections. Identify hazards via 360 walk-throughs.", icon: <AlertTriangle size={18}/> }
                   ].map((persona, i) => (
                     <div key={i} className="p-4 lg:p-5 rounded-[22px] bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#FFF200] transition-all duration-300 group relative flex flex-col items-start h-[120px] justify-center">
                        <div className="hidden lg:block absolute top-1/2 -left-[11px] -translate-y-1/2 w-4 h-4 bg-white border-[3px] border-[#FFF200] rounded-full shadow-[0_0_12px_#FFF200] z-30"></div>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-7 h-7 rounded-lg bg-gray-50 flex items-center justify-center text-gray-500 group-hover:bg-[#FFF200] group-hover:text-black transition-colors">{persona.icon}</div>
                          <h4 className="text-black font-black text-[11px] tracking-widest uppercase">{persona.role}</h4>
                        </div>
                        <p className="text-gray-500 font-medium leading-snug text-[12px]">{persona.desc}</p>
                     </div>
                   ))}
                </div>

             </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          INTEGRATIONS
      ════════════════════════════════════════ */}
      <section 
        className="relative bg-white py-12 lg:py-16 overflow-hidden font-sans"
        style={{
          maskImage: "linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)"
        }}
      >
        {/* Custom CSS for the Sync Hub Animation */}
        <style>{`
          @keyframes float-async-1 {
            0%, 100% { transform: translate(-50%, -50%) translateY(0) rotate(-2deg); }
            50% { transform: translate(-50%, -50%) translateY(-12px) rotate(1deg); }
          }
          @keyframes float-async-2 {
            0%, 100% { transform: translate(-50%, -50%) translateY(0) rotate(2deg); }
            50% { transform: translate(-50%, -50%) translateY(-10px) rotate(-1deg); }
          }
          @keyframes float-async-3 {
            0%, 100% { transform: translate(-50%, -50%) translateY(0) rotate(-1deg); }
            50% { transform: translate(-50%, -50%) translateY(-14px) rotate(2deg); }
          }
          @keyframes sync-pulse {
            0% { box-shadow: 0 0 0 0 rgba(255, 242, 0, 0.2); }
            70% { box-shadow: 0 0 0 40px rgba(255, 242, 0, 0); }
            100% { box-shadow: 0 0 0 0 rgba(255, 242, 0, 0); }
          }
          @keyframes data-stream {
            to { stroke-dashoffset: -30; }
          }
          .animate-float-1 { animation: float-async-1 5s ease-in-out infinite; }
          .animate-float-2 { animation: float-async-2 6s ease-in-out infinite; }
          .animate-float-3 { animation: float-async-3 5.5s ease-in-out infinite; }
          .animate-sync-pulse { animation: sync-pulse 2.5s infinite; }
          .animate-data-stream { animation: data-stream 1s linear infinite; }
        `}</style>

        {/* Global White Background Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
          
          {/* FLEX-STRETCH: Aligns left and right to the exact same height */}
          <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-16">
            
            {/* ════════════════════════════════════════
                LEFT: DARK SYNC HUB (Animated Visual)
            ════════════════════════════════════════ */}
            <div className="order-2 lg:order-1 relative lg:w-[45%] w-full rounded-[40px] border border-gray-200 shadow-[0_30px_80px_rgba(0,0,0,0.1)] overflow-hidden group bg-gradient-to-br from-[#1a1a1a] via-[#0A0A0A] to-black flex flex-col min-h-[450px]">
              
              {/* Inner Dark Tech Grid */}
              <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "linear-gradient(to right, #FFF 1px, transparent 1px), linear-gradient(to bottom, #FFF 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

              {/* Central Yellow Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#FFF200]/10 blur-[60px] rounded-full pointer-events-none z-0"></div>

              {/* SVG Data Flow Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                {/* Static Under-Tracks */}
                <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="#333" strokeWidth="2" />
                <line x1="50%" y1="50%" x2="75%" y2="35%" stroke="#333" strokeWidth="2" />
                <line x1="50%" y1="50%" x2="30%" y2="70%" stroke="#333" strokeWidth="2" />
                
                {/* Yellow Flowing Data Streams */}
                <line x1="25%" y1="25%" x2="50%" y2="50%" stroke="#FFF200" strokeWidth="2" strokeDasharray="4 12" className="animate-data-stream" />
                <line x1="75%" y1="35%" x2="50%" y2="50%" stroke="#FFF200" strokeWidth="2" strokeDasharray="4 12" className="animate-data-stream" />
                <line x1="30%" y1="70%" x2="50%" y2="50%" stroke="#FFF200" strokeWidth="2" strokeDasharray="4 12" className="animate-data-stream" />
              </svg>

              {/* Node Ecosystem Container */}
              <div className="absolute inset-0 z-20 pointer-events-none">
                  
                  {/* Center Pulse Core */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#080808] rounded-[20px] shadow-[0_0_30px_rgba(255,242,0,0.1)] border border-[#FFF200]/30 flex items-center justify-center animate-sync-pulse">
                    <RefreshCw size={28} className="text-[#FFF200] animate-[spin_4s_linear_infinite]" />
                  </div>
                  
                  {/* Floating App Node 1: Procore */}
                  <div className="absolute top-[25%] left-[25%] bg-[#111] p-2.5 pr-4 rounded-[16px] border border-gray-700 shadow-2xl flex items-center gap-3 animate-float-1">
                    <div className="w-8 h-8 bg-[#E54B2B]/20 rounded-[10px] flex items-center justify-center border border-[#E54B2B]/30"><Box size={16} className="text-[#E54B2B]"/></div>
                    <span className="text-white font-black text-xs tracking-tight">Procore</span>
                  </div>
                  
                  {/* Floating App Node 2: Autodesk */}
                  <div className="absolute top-[35%] left-[75%] bg-[#111] p-2.5 pr-4 rounded-[16px] border border-gray-700 shadow-2xl flex items-center gap-3 animate-float-2">
                    <div className="w-8 h-8 bg-[#0696D7]/20 rounded-[10px] flex items-center justify-center border border-[#0696D7]/30"><Layers size={16} className="text-[#0696D7]"/></div>
                    <span className="text-white font-black text-xs tracking-tight">Autodesk</span>
                  </div>
                  
                  {/* Floating App Node 3: MS Project */}
                  <div className="absolute top-[70%] left-[30%] bg-[#111] p-2.5 pr-4 rounded-[16px] border border-gray-700 shadow-2xl flex items-center gap-3 animate-float-3">
                    <div className="w-8 h-8 bg-[#10B981]/20 rounded-[10px] flex items-center justify-center border border-[#10B981]/30"><LayoutDashboard size={16} className="text-[#10B981]"/></div>
                    <span className="text-white font-black text-xs tracking-tight">MS Project</span>
                  </div>
              </div>

              {/* Bottom API Status Bar */}
              <div className="absolute bottom-5 left-5 right-5 z-30 bg-black/80 backdrop-blur-xl px-5 py-3.5 rounded-[16px] border border-white/10 flex justify-between items-center shadow-2xl">
                 <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">API Status</span>
                 <div className="flex items-center gap-2">
                   <span className="text-[#FFF200] text-xs font-bold">Systems Synced</span>
                   <Check size={14} className="text-[#FFF200]" strokeWidth={4} />
                 </div>
              </div>

            </div>

            {/* ════════════════════════════════════════
                RIGHT: COPY & FEATURE LIST
            ════════════════════════════════════════ */}
            <div className="order-1 lg:order-2 lg:w-[55%] flex flex-col justify-center py-2">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-6 shadow-sm self-start">
                Seamless Integration
              </div>
              
              <h2 className="text-[clamp(32px,3.5vw,46px)] font-black tracking-tighter leading-[1.1] text-black mb-6">
                Fits your workflow. <br />
                <span className="relative inline-block mt-1">
                  <span className="absolute inset-y-1 -inset-x-2 bg-[#FFF200] rounded-md shadow-sm transform -skew-x-2"></span>
                  <span className="relative text-black">Not the other way around.</span>
                </span>
              </h2>
              
              <p className="text-base text-gray-500 font-medium leading-relaxed mb-8 max-w-[460px]">
                YelloSKYE integrates with the tools you already use. No need to abandon your existing systems—just add the visual layer they've been missing.
              </p>

              <ul className="space-y-3">
                {[
                  "Export progress reports to Procore, Autodesk, MS Project",
                  "Push updates to stakeholder dashboards automatically",
                  "API access for custom workflows and integrations",
                  "White-label options for client-facing portals",
                  "Supports offline data collection for remote sites"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-center group p-3 -ml-3 rounded-[16px] hover:bg-gray-50 transition-colors duration-300">
                    <div className="w-8 h-8 rounded-[10px] bg-white border border-gray-200 shadow-sm flex items-center justify-center flex-shrink-0 group-hover:bg-[#FFF200] group-hover:border-[#FFF200] transition-colors">
                      <Check size={14} strokeWidth={4} className="text-black" />
                    </div>
                    <span className="text-sm lg:text-base font-bold text-gray-800 leading-snug">{item}</span>
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

export default ConstructionMonitoring;