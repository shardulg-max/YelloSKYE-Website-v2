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

const AssetInspectionUseCases = () => {
  const useCases = [
    {
      title: "Solar Power Farms",
      img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1600",
      icon: <Sun size={18} />,
      bullets: ["Thermal anomaly detection", "Panel degradation tracking", "Automated defect reporting"]
    },
    {
      title: "Power Transmission",
      img: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1600",
      icon: <Zap size={18} />,
      bullets: ["Corrosion & rust identification", "Vegetation encroachment analysis", "Safe high-voltage inspections"]
    },
    {
      title: "Industrial Chimneys",
      img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1600",
      icon: <Factory size={18} />,
      bullets: ["Zero-scaffolding drone scans", "Crack and spalling detection", "Regulatory compliance records"]
    },
    {
      title: "Corporate Facilities",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600",
      icon: <Building size={18} />,
      bullets: ["Roof condition & leak analysis", "HVAC thermal inspections", "Preventative maintenance logs"]
    },
    {
      title: "Real Estate Facades",
      img: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1600",
      icon: <Building2 size={18} />,
      bullets: ["Millimeter-accurate surface mapping", "Water ingress & sealant failure", "Safe, rope-free surveying"]
    },
    {
      title: "Bridges & Utilities",
      img: "https://images.unsplash.com/photo-1513334752251-502a11b66723?q=80&w=1600",
      icon: <ShieldCheck size={18} />,
      bullets: ["Structural fatigue monitoring", "Underside concrete spalling", "Digitized infrastructure records"]
    }
  ];

  return (
    <section className="bg-white py-12 lg:py-16 font-sans overflow-hidden border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        
        {/* Section Header - Split Layout and Compact Spacing */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-8 lg:mb-10">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">
              Inspection Scopes
            </div>
            <h2 className="text-[clamp(28px,3.5vw,48px)] font-black tracking-tighter leading-[1.05] text-black">
              Intelligence that ensures <br /> 
              <span className="relative inline-block mt-1">
                <span className="absolute inset-y-1 -inset-x-2 bg-[#FFF200] rounded-lg shadow-sm transform -skew-x-2"></span>
                <span className="relative text-black">structural integrity.</span>
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[15px] lg:text-base text-gray-500 font-medium leading-relaxed pb-1 lg:pb-2">
              From high-risk industrial stacks to sprawling corporate campuses, we provide the visual decision infrastructure required to detect defects and maintain compliance safely.
            </p>
          </div>
        </div>

        {/* Use Case Grid - Tightened row and column gaps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {useCases.map((uc, i) => (
            <div key={i} className="group relative flex flex-col h-full">
              
              {/* Image Container - Glitch-free rounded corners */}
              <div 
                className="relative aspect-[4/3] rounded-[20px] overflow-hidden mb-4 bg-gray-100 border border-gray-100 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:border-[#FFF200]/80 group-hover:-translate-y-1 z-10 transform-gpu"
                style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
              >
                <img 
                  src={uc.img} 
                  alt={uc.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Visual Overlay Button */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 backdrop-blur shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight size={14} className="text-black" />
                </div>

                {/* Bottom Label Overlay (Dashboard Style) */}
                <div className="absolute bottom-3 left-3 right-3 bg-black/80 backdrop-blur-md p-2 rounded-xl border border-white/10 flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-lg bg-[#FFF200] flex items-center justify-center text-black shrink-0">
                    {uc.icon}
                  </div>
                  <span className="text-[10px] font-black text-white uppercase tracking-widest truncate">{uc.title}</span>
                </div>
              </div>

              {/* Text Content - Tighter leading and spacing */}
              <div className="px-1 flex flex-col flex-1">
                <h4 className="text-[16px] lg:text-[17px] font-black text-black mb-2 tracking-tight group-hover:text-[#D4C900] transition-colors">{uc.title}</h4>
                <ul className="space-y-1.5 mt-auto">
                  {uc.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-[12px] text-gray-500 font-medium leading-tight">
                      <div className="w-1 h-1 rounded-full bg-[#FFF200] shrink-0 mt-[6px]" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

        {/* Global Footer Callout - Compact Version */}
        <div className="mt-12 lg:mt-16 p-8 lg:p-10 rounded-[28px] bg-[#0A0A0A] text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-white/5 shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFF200]/10 blur-[100px] group-hover:bg-[#FFF200]/20 transition-all duration-700" />
          <div className="relative z-10 max-w-2xl">
             <h3 className="text-2xl lg:text-3xl font-black tracking-tight mb-2">Have a specialized asset?</h3>
             <p className="text-gray-400 text-sm font-medium leading-relaxed">Our reality capture technology is adaptable to almost any infrastructure environment. We can custom-build an inspection protocol for your exact safety and compliance needs.</p>
          </div>
          <button className="relative z-10 px-6 py-3.5 bg-[#FFF200] text-black font-black uppercase text-[11px] tracking-widest rounded-xl hover:bg-white transition-all shadow-[0_10px_20px_rgba(255,242,0,0.15)] shrink-0">
            Custom Inspection Request
          </button>
        </div>

      </div>
    </section>
  );
};

// ─── DATA: INTERACTIVE INSPECTION VIEWER ───────────────────────────────────────

const INSPECTION_FEATURES = [
  {
    id: 'interior-360',
    label: '360° Interior Walkthrough',
    title: 'Digital Twins of Every Floor',
    desc: 'Replace manual walkthroughs with comprehensive 360° documentation. Capture every rack, zone, and MEP system with timestamped precision.',
    gif: '/gifs/interior-walkthrough.gif',
    fallbackImg: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop',
    placeholderBg: 'bg-gray-100'
  },
  {
    id: 'facade',
    label: 'Drone Facade Scan',
    title: 'High-Res Vertical Inspection',
    desc: 'Inspect hard-to-reach areas for cracks, water ingress, and structural damage without scaffolding or rope access. AI-assisted defect detection.',
    gif: '/gifs/drone-facade.gif',
    fallbackImg: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop',
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
      <img src="https://i.ibb.co/bRvWZb7N/Screenshot-2026-02-24-at-10-56-02.png" alt="Asset Inspection Interface" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[20s] ease-out" />
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
                         <div className="absolute top-1/2 -translate-y-1/2 left-4 bg-white/95 backdrop-blur-xl px-5 py-4 rounded-[20px] shadow-2xl border border-white/60 flex flex-col items-start">
                            <Globe size={20} className="text-[#D4C900] mb-1.5" />
                            <div className="text-[8px] font-bold uppercase tracking-[0.2em] text-gray-400">Single Source</div>
                            <div className="text-[12px] font-black uppercase tracking-tight text-black">Inspection Truth</div>
                         </div>
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
      

export default AssetInspection;