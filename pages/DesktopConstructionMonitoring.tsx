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
    desc: 'Regular automated drone flights capture site progress. Compare actual execution against planned schedules with transparent work-done reconciliation.',
    gif: '/gifs/aerial-progress.gif',
    fallbackImg: 'https://ik.imagekit.io/saxybrgkp/Construction%20Monitoring/Website%20Images%20Land%20Survey%20new.png',
    placeholderBg: 'bg-blue-50'
  },
  {
    id: 'interior',
    label: 'Interior 360°',
    title: 'Digital Twins of Interiors',
    desc: 'Walk through interiors remotely. Tag problem areas, compare changes across dates, and track MEP installations without leaving the office.',
    gif: '/gifs/interior-360.gif',
    fallbackImg: 'https://ik.imagekit.io/saxybrgkp/Construction%20Monitoring/Website%20Images%20La2nd%20Survey.png?updatedAt=1773640609383',
    placeholderBg: 'bg-orange-50'
  },
  {
    id: 'fixed-cam',
    label: 'Fixed Cameras',
    title: 'Always-On Site Monitoring',
    desc: 'Continuously analyze progress, crew patterns, and material flow. Generate high-resolution timelapses and track workforce presence effortlessly.',
    gif: '/gifs/fixed-cam.gif', 
    fallbackImg: 'https://ik.imagekit.io/saxybrgkp/Construction%20Monitoring/3.png?updatedAt=1773640609238',
    placeholderBg: 'bg-green-50'
  },
  {
    id: 'portfolio',
    label: 'Portfolio Dashboard',
    title: 'Unified Executive Analytics',
    desc: 'Monitor all sites in one centralized data hub. Customizable insights, stage-wise completion rates, and real-time lag calculations across your portfolio.',
    gif: '/gifs/portfolio.gif',
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
    <section className="relative bg-white pt-4 lg:pt-8 pb-12 lg:pb-16 overflow-hidden font-sans">
      
      <style>{`
        @keyframes interactive-progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>

      {/* Aesthetic Seamless Grid Fade */}
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
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-8 lg:mb-10">
          <h2 className="text-[clamp(32px,4vw,48px)] font-black tracking-tighter leading-[1.2] text-black mb-4">
            One continuous <span className="relative inline-block mx-1">
              <span className="absolute inset-y-0 -inset-x-2 bg-[#FFF200] rounded-xl"></span>
              <span className="relative text-black">visual timeline.</span>
            </span>
            <br />
            Not scattered snapshots.
          </h2>
          
          <p className="text-base lg:text-lg text-gray-500 font-medium leading-relaxed max-w-4xl mx-auto">
            YelloSKYE replaces manual site visits with automated aerial and ground-level reality capture. <br className="hidden md:block" />
            Every update stays in sequence. Every view stays consistent—from site engineers to leadership.
          </p>
        </div>

        {/* Interactive Viewer Component */}
        <div 
          className="bg-white rounded-[24px] lg:rounded-[32px] border border-gray-200 shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-3 lg:p-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Top Navigation Tabs */}
          <div className="flex gap-2 overflow-x-auto hide-scrollbar scroll-smooth mb-3 pb-1 px-1">
            {MONITORING_FEATURES.map((feature, index) => {
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

          {/* Viewer Area */}
          <div className="relative w-full aspect-[16/9] lg:aspect-[2.5/1] bg-black overflow-hidden rounded-[20px] group mb-3">
            {MONITORING_FEATURES.map((feature, index) => (
              <div 
                key={feature.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${feature.placeholderBg}
                  ${activeIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}
                `}
              >
                <img 
                  src={feature.fallbackImg} 
                  alt={feature.title}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = feature.fallbackImg;
                  }}
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

          {/* Dynamic Content Bar */}
          <div className="bg-gray-50 rounded-[20px] p-5 lg:p-6 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center border border-gray-100">
             <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-2 rounded bg-[#FFF200]/20 text-black text-[10px] font-black uppercase tracking-widest border border-[#FFF200]/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFF200] shadow-[0_0_5px_#FFF200]"></span>
                  {MONITORING_FEATURES[activeIndex].label}
                </div>
                <h3 className="text-xl lg:text-2xl font-black text-black leading-tight tracking-tight">
                  {MONITORING_FEATURES[activeIndex].title}
                </h3>
             </div>
             <div className="md:max-w-md md:text-right">
                <p className="text-sm lg:text-base text-gray-500 font-medium leading-relaxed">
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
          HERO - CONSTRUCTION MONITORING
      ════════════════════════════════════════ */}
      <section className="pt-24 md:pt-32 lg:pt-44 pb-12 lg:pb-20 bg-white relative overflow-hidden">
        {/* FIX 1: The Grid is moved out of the max-w container to span 100% width */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ 
               backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", 
               backgroundSize: "80px 80px",
               maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
               WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)"
             }} />
             
        {/* FIX 2: Content is wrapped in the max-w container with z-10 to stay above grid */}
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-10 lg:mb-14 items-center">
            
            <div className="lg:col-span-7 flex flex-col">
              <h1 className="text-[6vw] md:text-[54px] lg:text-[72px] font-black leading-[0.95] tracking-tighter text-black mb-6">
  Know what's really happening on site.
</h1>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] lg:text-[14px] font-bold text-gray-500 tracking-wide">
                <span className="flex items-center gap-1.5"><Check size={16} strokeWidth={4} className="text-[#FFF200]"/> Automated Tracking</span>
                <span className="w-1.5 h-1.5 bg-gray-300 rounded-full hidden sm:block"></span>
                <span className="flex items-center gap-1.5"><Check size={16} strokeWidth={4} className="text-[#FFF200]"/> Progress vs. Plan</span>
                <span className="w-1.5 h-1.5 bg-gray-300 rounded-full hidden md:block"></span>
                <span className="flex items-center gap-1.5"><Check size={16} strokeWidth={4} className="text-[#FFF200]"/> Unified Dashboard</span>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col">
              <h2 className="text-2xl lg:text-[28px] font-medium leading-[1.3] text-gray-800 tracking-tight">
                Replace delayed reports with absolute visual truth across your entire portfolio.
              </h2>
            </div>

          </div>

          <div className="w-full aspect-[4/3] md:aspect-[2.2/1] rounded-[32px] lg:rounded-[40px] overflow-hidden bg-gray-100 relative shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-200 group">
            <img 
              src="https://ik.imagekit.io/saxybrgkp/Construction%20Monitoring/Website%20Images%20Land%20Survey.png" 
              alt="Construction Monitoring Visual Timeline" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[20s] ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10"></div>

            <div className="absolute top-6 left-6 lg:top-8 lg:left-8 bg-white/80 backdrop-blur-2xl px-5 py-3 rounded-2xl flex items-center gap-3 shadow-lg border border-white/50">
               <div className="flex gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22C55E]"></div>
               </div>
               <span className="text-[10px] font-black uppercase tracking-widest text-black mt-0.5">Live Timeline Active</span>
            </div>

            <div className="absolute bottom-6 right-6 lg:bottom-8 lg:right-8 bg-black/80 backdrop-blur-2xl px-6 py-4 rounded-2xl border border-white/20 flex items-center gap-6 shadow-2xl">
               <div className="text-right">
                  <div className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-1">Status</div>
                  <div className="text-green-400 font-mono text-base font-bold">On Track</div>
               </div>
               <div className="w-[1px] h-8 bg-white/20"></div>
               <div className="text-right">
                  <div className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-1">Completion</div>
                  <div className="text-[#FFF200] font-mono text-base font-bold">87.8%</div>
               </div>
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
          INTERACTIVE TABS: CAPTURE METHODS
      ════════════════════════════════════════ */}
      <MonitoringRepresentationSection />

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

export default ConstructionMonitoring;