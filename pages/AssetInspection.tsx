import React, { useState, useEffect } from "react";
import { 
  X, Check, DownloadCloud, Globe, Layers, MapPin, Mail, 
  Twitter, Linkedin, Youtube, Instagram, BarChart, History, 
  Box, Camera, Clock, AlertTriangle, Unplug, 
  LayoutDashboard, Users, Zap, ShieldCheck, 
  RefreshCw, Search, HardHat, FileCheck, Eye, ClipboardCheck, Building2
} from "lucide-react";
import { 
  ArrowUpRight, Sun, Factory, Building,
} from 'lucide-react';

// ─── DATA: INTERACTIVE INSPECTION VIEWER ───────────────────────────────────────

const INSPECTION_FEATURES = [
  {
    id: 'facade',
    label: 'Drone Facade Scan',
    title: 'High-Res Vertical Inspection',
    desc: 'Inspect hard-to-reach areas for cracks, water ingress, and structural damage without scaffolding or rope access. AI-assisted defect detection.',
    gif: '/gifs/drone-facade.gif',
    fallbackImg: 'https://ik.imagekit.io/saxybrgkp/Asset%20inspection/Website%20Images%20Land%20Survey3.png',
    placeholderBg: 'bg-gray-100'
  },
  {
    id: 'interior-360',
    label: '360° Interior Walkthrough',
    title: 'Digital Twins of Every Floor',
    desc: 'Replace manual walkthroughs with comprehensive 360° documentation. Capture every rack, zone, and MEP system with timestamped precision.',
    gif: '/gifs/interior-walkthrough.gif',
    fallbackImg: 'https://ik.imagekit.io/saxybrgkp/Asset%20inspection/Website%20Images%20Land%20Survey1.png?updatedAt=1773641166597',
    placeholderBg: 'bg-gray-100'
  },
  {
    id: 'lidar',
    label: 'LiDAR Verification',
    title: 'Millimeter-Grade As-Built',
    desc: 'Verify design vs. reality. LiDAR scans validate room dimensions, ceiling heights, and floor tolerances against design specs instantly.',
    gif: '/gifs/lidar-as-built.gif', 
    fallbackImg: 'https://images.unsplash.com/photo-1581092921461-7d6560b37081?q=80&w=2000&auto=format&fit=crop',
    placeholderBg: 'bg-gray-100'
  },
  {
    id: 'mep',
    label: 'MEP Documentation',
    title: 'Pre-Slab Digital Record',
    desc: 'Capture conduit and pipe layouts before slabs are poured. Create a permanent, searchable visual record for facility maintenance.',
    gif: '/gifs/mep-inspection.gif',
    fallbackImg: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop',
    placeholderBg: 'bg-gray-100'
  }
];

// ─── SUB-COMPONENT: INTERACTIVE DASHBOARD ─────────────────────────────────────

const InspectionViewerSection = () => {
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
    <section className="relative bg-white pt-10 lg:pt-16 pb-12 lg:pb-20 overflow-hidden font-sans border-gray-100">
      <style>{`
        @keyframes interactive-progress { from { width: 0%; } to { width: 100%; } }
      `}</style>
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", backgroundSize: "80px 80px", maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)" }} 
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-10 lg:mb-14">
          <h2 className="text-[clamp(32px,4vw,48px)] font-black tracking-tighter leading-[1.1] text-black mb-5">
            Complete visual record of <br />
            <span className="relative inline-block mx-2">
              <span className="absolute inset-y-1 -inset-x-3 bg-[#FFF200] rounded-lg shadow-sm transform -skew-x-2"></span>
              <span className="relative text-black">every space, every surface.</span>
            </span>
          </h2>
          <p className="text-base lg:text-lg text-gray-500 font-medium leading-relaxed max-w-4xl mx-auto">
            YelloSKYE captures MEP systems, facades, and interiors with survey-grade precision. Quality teams <br className="hidden md:block" />
            review issues remotely and tag defects in place—preventing punch-list fatigue.
          </p>
        </div>

        <div className="bg-white rounded-[24px] lg:rounded-[32px] border border-gray-200 shadow-[0_20px_60px_rgba(0,0,0,0.06)] p-3 lg:p-4" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <div className="flex gap-2 overflow-x-auto hide-scrollbar scroll-smooth mb-3 pb-1 px-1">
            {INSPECTION_FEATURES.map((feature, index) => {
              const isActive = activeIndex === index;
              return (
                <button key={feature.id} onClick={() => setActiveIndex(index)} className={`whitespace-nowrap px-6 py-2.5 text-[10px] font-black uppercase tracking-widest transition-all duration-300 rounded-full border ${isActive ? 'bg-black border-black text-[#FFF200] shadow-md' : 'bg-transparent border-gray-200 text-gray-500 hover:border-gray-400 hover:text-black'}`}>
                  {feature.label}
                </button>
              );
            })}
          </div>

          <div className="relative w-full aspect-[16/9] lg:aspect-[2.5/1] bg-gray-100 border border-gray-200 shadow-inner overflow-hidden rounded-[20px] group mb-3">
            {INSPECTION_FEATURES.map((feature, index) => (
              <div key={feature.id} className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                <img src={feature.gif} alt={feature.title} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).src = feature.fallbackImg; }} />
              </div>
            ))}
            <div className="absolute bottom-0 left-0 w-full h-[6px] bg-white/50 z-20 backdrop-blur-sm">
               <div key={activeIndex} className="h-full bg-[#FFF200] shadow-[0_0_10px_#FFF200]" style={{ animation: 'interactive-progress 4.5s linear forwards', animationPlayState: isHovered ? 'paused' : 'running' }} />
            </div>
          </div>

          <div className="bg-gray-50 rounded-[20px] p-6 lg:p-8 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center border border-gray-100">
             <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-3 rounded-md bg-[#FFF200]/20 text-black text-[10px] font-black uppercase tracking-widest border border-[#FFF200]/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFF200] shadow-[0_0_5px_#FFF200]"></span>
                  {INSPECTION_FEATURES[activeIndex].label}
                </div>
                <h3 className="text-xl lg:text-2xl font-black text-black leading-tight tracking-tight">{INSPECTION_FEATURES[activeIndex].title}</h3>
             </div>
             <div className="md:max-w-md md:text-right">
                <p className="text-sm lg:text-base text-gray-500 font-medium leading-relaxed">{INSPECTION_FEATURES[activeIndex].desc}</p>
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
          Replace manual walkthroughs with AI-powered 360° documentation.
        </h2>
      </div>
    </div>

    <div className="w-full aspect-[4/3] md:aspect-[2.2/1] rounded-[32px] lg:rounded-[40px] overflow-hidden bg-gray-100 relative shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-200 group">
      <img src="https://ik.imagekit.io/saxybrgkp/Asset%20inspection/Website%20Images%20Land%20Survey.png?updatedAt=1773641166632" alt="Asset Inspection Interface" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[20s] ease-out" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10"></div>
      
      {/* Floating UI Elements */}
      <div className="absolute top-6 left-6 lg:top-8 lg:left-8 bg-white/80 backdrop-blur-2xl px-5 py-3 rounded-2xl flex items-center gap-3 shadow-lg border border-white/50">
         <div className="flex gap-1">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_#EF4444]"></div>
         </div>
         <span className="text-[10px] font-black uppercase tracking-widest text-black mt-0.5">Live Defect Scanning</span>
      </div>
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
          THE TRUST BAR
      ════════════════════════════════════════ */}
      <section className="bg-whitepy-12 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-gray-200">
             {[
               { label: "Site Visits", value: "90%", sub: "Reduction in travel" },
               { label: "Coverage", value: "5x", sub: "More than manual" },
               { label: "Resolution", value: "40-50%", sub: "Faster issue closure" },
               { label: "Compliance", value: "100%", sub: "Audit-ready logs" },
             ].map((spec, i) => (
               <div key={i} className={`flex flex-col pt-6 md:pt-0 ${i !== 0 ? "md:pl-8 lg:pl-12" : ""}`}>
                 <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                   <span className="w-1.5 h-1.5 rounded-full bg-[#FFF200]"></span>
                   {spec.label}
                 </div>
                 <div className="text-4xl lg:text-5xl font-black text-black mb-1 tracking-tighter">{spec.value}</div>
                 <div className="text-xs text-gray-500 font-bold uppercase tracking-wide">{spec.sub}</div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          THE PROBLEM: LATE DISCOVERY
      ════════════════════════════════════════ */}
      <section className="relative bg-white pt-16 lg:pt-24 pb-12 lg:pb-20 overflow-hidden font-sans">
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-16">
            <h2 className="text-[clamp(32px,4vw,48px)] font-black tracking-tighter leading-[1.1] text-black mb-5">
              Quality issues surface at handover <br />
              <span className="relative inline-block mt-1 mx-2">
                <span className="absolute inset-y-1 -inset-x-3 bg-[#FFF200] rounded-lg shadow-sm transform -skew-x-2"></span>
                <span className="relative text-black">when they're too expensive to fix.</span>
              </span>
            </h2>
            <p className="text-base lg:text-lg text-gray-500 font-medium leading-relaxed max-w-4xl mx-auto">
              Punch lists grow while contractors argue over timing. Clients delay acceptance because no one has <br className="hidden md:block" />
              a complete record of what was built, when, and by whom.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 lg:gap-6 max-w-6xl mx-auto">
            {[
              { icon: <Clock size={20}/>, title: "Late Discovery", desc: "Defects spotted during handover require massive rework. Contractors have already moved on." },
              { icon: <AlertTriangle size={20}/>, title: "Incomplete Documentation", desc: "Manual inspections miss details. Photos don't capture full context, leaving gray areas in audits." },
              { icon: <Search size={20}/>, title: "The 'Who Did This?' Dispute", desc: "No timestamped record of execution. Impossible to prove work sequence or liability." },
              { icon: <Unplug size={20}/>, title: "Rework Costs Mount", desc: "Fixing issues after-the-fact is 10x more expensive than catching them during active execution." }
            ].map((card, i) => (
              <div key={i} className="p-6 rounded-[24px] bg-[#F9F9F9] border border-transparent hover:bg-white hover:border-gray-200 shadow-none hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300 group flex flex-col lg:flex-row items-start gap-5">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-[#FFF200]/10 border border-[#FFF200]/20 shadow-sm flex items-center justify-center text-black group-hover:bg-[#FFF200] group-hover:border-[#FFF200] group-hover:scale-105 transition-all duration-300 ease-out">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-lg font-black text-black mb-2 tracking-tight">{card.title}</h3>
                  <p className="text-gray-500 font-medium leading-relaxed text-sm lg:text-base">{card.desc}</p>
                </div>
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