import React, { useState, useEffect } from "react";
import { 
  X, Check, ArrowRight, DownloadCloud, Globe, Layers, MapPin, Mail, 
  Twitter, Linkedin, Youtube, Instagram, BarChart, History, 
  Crosshair, Box, FileOutput, Camera, Clock, AlertTriangle, Unplug, 
  LayoutDashboard, Eye, Activity, Users, Zap, ShieldCheck, FileCheck, 
  RefreshCw
} from "lucide-react";

// ─── DATA: INTERACTIVE VIEWER ──────────────────────────────────────────────────

const MONITORING_FEATURES = [
  {
    id: 'aerial',
    label: 'Aerial Progress',
    title: 'Drone-Based Progress Tracking',
    desc: 'Regular automated drone flights capture site progress. Compare actual execution against planned schedules with transparent work-done reconciliation.',
    gif: '/gifs/aerial-progress.gif',
    fallbackImg: 'https://images.unsplash.com/photo-1541888086225-f64069f2142e?q=80&w=2500&auto=format&fit=crop',
    placeholderBg: 'bg-blue-50'
  },
  {
    id: 'interior',
    label: 'Interior 360°',
    title: 'Digital Twins of Interiors',
    desc: 'Walk through interiors remotely. Tag problem areas, compare changes across dates, and track MEP installations without leaving the office.',
    gif: '/gifs/interior-360.gif',
    fallbackImg: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2500&auto=format&fit=crop',
    placeholderBg: 'bg-orange-50'
  },
  {
    id: 'fixed-cam',
    label: 'Fixed Cameras',
    title: 'Always-On Site Monitoring',
    desc: 'Continuously analyze progress, crew patterns, and material flow. Generate high-resolution timelapses and track workforce presence effortlessly.',
    gif: '/gifs/fixed-cam.gif', 
    fallbackImg: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2500&auto=format&fit=crop',
    placeholderBg: 'bg-green-50'
  },
  {
    id: 'portfolio',
    label: 'Portfolio Dashboard',
    title: 'Unified Executive Analytics',
    desc: 'Monitor all sites in one centralized data hub. Customizable insights, stage-wise completion rates, and real-time lag calculations across your portfolio.',
    gif: '/gifs/portfolio.gif',
    fallbackImg: 'https://i.ibb.co/2DQZqRT/Website-Visuals-Presentation-2.png',
    placeholderBg: 'bg-purple-50'
  }
];

// ─── SUB-COMPONENT: INTERACTIVE DASHBOARD (MOBILE) ────────────────────────────

const MobileMonitoringRepresentation = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative bg-white pt-10 pb-12 overflow-hidden font-sans z-10 border-t border-gray-100">
      
      <div className="px-6 mb-8 text-center">
        <h2 className="text-[32px] font-black tracking-tighter leading-[1.05] text-black mb-4">
          One continuous <br/>
          <span className="relative inline-block mt-1">
            <span className="absolute inset-y-0 -inset-x-2 bg-[#FFF200] rounded-lg"></span>
            <span className="relative text-black px-1">visual timeline.</span>
          </span>
          <br />
          Not scattered snapshots.
        </h2>
        <p className="text-[14px] text-gray-500 font-medium leading-relaxed">
          YelloSKYE replaces manual site visits with automated reality capture. Every update stays in sequence.
        </p>
      </div>

      {/* Swipeable Tabs */}
      <div className="w-full overflow-x-auto hide-scrollbar px-6 pb-4">
        <div className="flex gap-2 min-w-max">
          {MONITORING_FEATURES.map((feature, index) => {
            const isActive = activeIndex === index;
            return (
              <button
                key={feature.id}
                onClick={() => setActiveIndex(index)}
                className={`whitespace-nowrap px-4 py-2.5 text-[10px] font-black uppercase tracking-widest transition-all duration-300 rounded-full border
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
      <div className="px-6 relative">
        <div className="relative w-full aspect-[4/3] bg-black overflow-hidden rounded-[20px] shadow-lg mb-4">
          {MONITORING_FEATURES.map((feature, index) => (
            <div 
              key={feature.id}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${feature.placeholderBg}
                ${activeIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}
              `}
            >
              <img 
                src={feature.fallbackImg} 
                alt={feature.title}
                className={`w-full h-full object-cover opacity-90 ${index === 3 ? '' : 'mix-blend-screen'}`}
              />
            </div>
          ))}
        </div>

        {/* Content Box */}
        <div className="bg-gray-50 rounded-[20px] p-5 border border-gray-100">
           <h3 className="text-[18px] font-black text-black leading-tight tracking-tight mb-2">
             {MONITORING_FEATURES[activeIndex].title}
           </h3>
           <p className="text-[13px] text-gray-500 font-medium leading-relaxed">
             {MONITORING_FEATURES[activeIndex].desc}
           </p>
        </div>
      </div>
    </section>
  );
};

// ─── MAIN MOBILE PAGE ────────────────────────────────────────────────────────
export const MobileConstructionMonitoring = () => {
  return (
    <div className="bg-white text-black font-sans selection:bg-[#FFF200] selection:text-black overflow-x-hidden pt-24">
      
      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 20s linear infinite; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Global Background Grid */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      {/* ════════════════════════════════════════
          HERO 
      ════════════════════════════════════════ */}
      <section className="pb-10 px-6 relative z-10 flex flex-col items-center">
        
        <h1 className="text-[54px] font-black tracking-tighter leading-[0.9] text-center mb-6 mt-4">
          Track your<br/>
          Site.
        </h1>

        <h2 className="text-[16px] font-medium leading-relaxed text-gray-600 text-center mb-8 px-2">
          Replace delayed reports with absolute visual truth across your entire portfolio.
        </h2>

        {/* Hero Image */}
        <div className="w-full max-w-[400px] aspect-[4/3] rounded-[24px] overflow-hidden bg-gray-100 relative shadow-lg border border-gray-200 mb-8">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2500&auto=format&fit=crop" 
            alt="Survey" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10"></div>

          {/* Top Badge */}
          <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md px-3 py-2 rounded-xl flex items-center gap-2 shadow-sm border border-white/50">
             <div className="flex gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22C55E]"></div>
             </div>
             <span className="text-[8px] font-black uppercase tracking-widest text-black mt-0.5">Live Timeline Active</span>
          </div>

          {/* Bottom HUD */}
          <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/20 flex items-center gap-4 shadow-lg text-right">
             <div>
                <div className="text-[8px] text-gray-400 font-bold uppercase tracking-widest mb-1">Status</div>
                <div className="text-green-400 font-mono text-[12px] font-bold">On Track</div>
             </div>
             <div className="w-[1px] h-6 bg-white/20"></div>
             <div>
                <div className="text-[8px] text-gray-400 font-bold uppercase tracking-widest mb-1">Completion</div>
                <div className="text-[#FFF200] font-mono text-[12px] font-bold">87.8%</div>
             </div>
          </div>
        </div>

        {/* Feature Tags */}
        <div className="flex flex-wrap justify-center gap-2 max-w-[340px]">
          {['Automated Tracking', 'Progress vs. Plan', 'Unified Dashboard'].map(tag => (
            <div key={tag} className="px-3 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-[10px] font-bold text-gray-700 flex items-center gap-1.5 shadow-sm">
              <Check size={12} strokeWidth={4} className="text-[#FFF200]" /> {tag}
            </div>
          ))}
        </div>

      </section>

      {/* ════════════════════════════════════════
          TRUST BAR
      ════════════════════════════════════════ */}
      <section className="bg-white border-y border-gray-100 py-10 relative z-10">
        <div className="px-6 grid grid-cols-2 gap-y-8 gap-x-4">
          {[
            { label: "Site Visits", value: "-80%", sub: "Manual Inspections" },
            { label: "Reporting", value: "10x", sub: "Faster Updates" },
            { label: "Issue Closure", value: "-50%", sub: "Resolution Time" },
            { label: "Approvals", value: "3x", sub: "Faster Sign-offs" },
          ].map((spec, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFF200]"></span>
                {spec.label}
              </div>
              <div className="text-3xl font-black text-black mb-1 tracking-tighter">
                {spec.value}
              </div>
              <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wide">
                {spec.sub}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════
          THE PROBLEM
      ════════════════════════════════════════ */}
      <section className="relative bg-white pt-16 pb-12 overflow-hidden font-sans z-10">
        <div className="px-6 text-center mb-10">
          <h2 className="text-[32px] font-black tracking-tighter leading-[1.05] text-black mb-4">
            Most Monitoring <br />
            <span className="relative inline-block mt-1">
              <span className="absolute inset-y-0 -inset-x-2 bg-[#FFF200] rounded-lg"></span>
              <span className="relative text-black px-1">Doesn't Actually Monitor.</span>
            </span>
          </h2>
          <p className="text-[14px] text-gray-500 font-medium leading-relaxed">
            It documents what already happened. By the time leadership sees progress, decisions have already been made.
          </p>
        </div>

        <div className="px-6 space-y-4">
          {[
            { icon: <Clock size={18} />, title: "Delayed Visibility", desc: "Site photos arrive days after capture. Reports take weeks to compile." },
            { icon: <Layers size={18} />, title: "Fragmented Updates", desc: "Progress lives in emails, WhatsApp, and spreadsheets. No unified truth." },
            { icon: <ShieldCheck size={18} />, title: "Manual Validation", desc: "Every approval requires site visits or endless clarifications." },
            { icon: <RefreshCw size={18} />, title: "Version Confusion", desc: "Different teams work from different versions of progress." }
          ].map((card, i) => (
            <div key={i} className="p-5 rounded-[20px] bg-gray-50 border border-gray-100 flex items-start gap-4 shadow-sm">
              <div className="w-10 h-10 shrink-0 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-black">
                {card.icon}
              </div>
              <div>
                <h3 className="text-[15px] font-black text-black mb-1">{card.title}</h3>
                <p className="text-[13px] text-gray-500 font-medium leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════
          INTERACTIVE TABS
      ════════════════════════════════════════ */}
      <MobileMonitoringRepresentation />

      {/* ════════════════════════════════════════
          FEATURE GRID: TRACK WHAT MATTERS
      ════════════════════════════════════════ */}
      <section className="relative bg-white pt-16 pb-16 z-10 border-t border-gray-100">
        <div className="px-6 mb-10 text-center">
          <h2 className="text-[32px] font-black tracking-tighter leading-[1.05] text-black mb-4">
            Track what matters, <br />
            <span className="text-gray-400">not just what's easy.</span>
          </h2>
          <p className="text-[14px] text-gray-500 font-medium leading-relaxed">
            See progress yourself, validate execution instantly, and resolve issues before they compound.
          </p>
        </div>

        <div className="px-6 grid grid-cols-1 gap-4">
          {[
            { icon: <MapPin size={18}/>, title: "Geo-Referenced Annotations", desc: "Tag issues directly on site visuals for contractors." },
            { icon: <BarChart size={18}/>, title: "Progress vs. Plan", desc: "Compare actual execution against your 4D schedule." },
            { icon: <Activity size={18}/>, title: "Volume & Earthwork", desc: "Automated cut-fill from drone surveys for billing." },
            { icon: <Zap size={18}/>, title: "Automated Alerts", desc: "Get notified when milestones are reached or delayed." },
            { icon: <Users size={18}/>, title: "Stakeholder Dashboards", desc: "Everyone sees the same reality—site to PMO." },
            { icon: <History size={18}/>, title: "Time Travel Playback", desc: "Scroll through site history day by day for compliance." }
          ].map((feature, i) => (
            <div key={i} className="bg-white border border-gray-100 p-5 rounded-[20px] shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#FFF200]/10 border border-[#FFF200]/20 flex items-center justify-center text-black shrink-0">
                {feature.icon}
              </div>
              <div className="pt-0.5">
                <h3 className="text-[15px] font-black text-black mb-1.5 tracking-tight">{feature.title}</h3>
                <p className="text-[13px] text-gray-500 font-medium leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════
          ONE SOURCE OF TRUTH (SIMPLIFIED TIMELINE)
      ════════════════════════════════════════ */}
      <section className="bg-white pt-12 pb-16 relative overflow-hidden font-sans border-t border-gray-100 z-10">
        
        {/* Header */}
        <div className="px-6 mb-10 text-center">
          <h2 className="text-[32px] font-black tracking-tighter leading-[1.1] text-black mb-4">
            From Weekly Reports to <br />
            <span className="relative inline-block mt-1">
              <span className="absolute inset-y-0 -inset-x-2 bg-[#FFF200] rounded-lg"></span>
              <span className="relative text-black px-1">Real-Time Reference.</span>
            </span>
          </h2>
          <p className="text-[14px] text-gray-500 font-medium leading-relaxed max-w-[280px] mx-auto">
            One single source of truth automatically powers every persona on your project.
          </p>
        </div>

        <div className="w-full max-w-[400px] mx-auto px-6">
          
          {/* 1. THE MASTER HUB (Image firmly at the TOP) */}
          <div className="w-full aspect-[16/10] bg-black rounded-[24px] overflow-hidden relative shadow-[0_20px_40px_rgba(0,0,0,0.15)] border border-gray-200 z-20 mb-0">
            <img 
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop" 
              className="w-full h-full object-cover opacity-90" 
              alt="Live Truth Hub" 
            />
            {/* Live Sync Badge */}
            <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md flex items-center gap-1.5 border border-white/20 shadow-lg">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_#22C55E]"></div>
              <span className="text-[7px] font-black text-white uppercase tracking-widest">Live Sync</span>
            </div>
          </div>

          {/* 2. THE TIMELINE (Guaranteed not to break) */}
          <div className="relative ml-6 border-l-[3px] border-[#FFF200] pt-6 pb-2">
            {[
              { role: "PMO Teams", desc: "Review progress across sites instantly.", icon: <LayoutDashboard size={14}/> },
              { role: "Site Engineers", desc: "Automate as-built conditions.", icon: <Layers size={14}/> },
              { role: "Contractors", desc: "Indisputable work completion logs.", icon: <Box size={14}/> },
              { role: "Quality Teams", desc: "Remote defect inspections.", icon: <ShieldCheck size={14}/> },
              { role: "Clients & Investors", desc: "Track project health securely.", icon: <Users size={14}/> }
            ].map((persona, index) => (
              <div key={index} className="relative pl-6 mb-5 last:mb-0 group">
                {/* Timeline Dot */}
                <div className="absolute top-1/2 -translate-y-1/2 -left-[9.5px] w-4 h-4 bg-black border-[3px] border-[#FFF200] rounded-full shadow-[0_0_8px_#FFF200]"></div>
                
                {/* Persona Card */}
                <div className="bg-gray-50 border border-gray-200 p-4 rounded-[16px] flex items-center gap-3 shadow-sm transition-colors group-hover:border-[#FFF200] group-hover:bg-white">
                  <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-black shrink-0 shadow-sm">
                    {persona.icon}
                  </div>
                  <div>
                    <h4 className="text-[11px] font-black uppercase tracking-widest text-black mb-0.5">{persona.role}</h4>
                    <p className="text-[12px] text-gray-500 font-medium leading-snug">{persona.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════
          LOGOS
      ════════════════════════════════════════ */}
      <section className="py-8 border-y border-gray-50 bg-white relative z-10">
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

      {/* ════════════════════════════════════════
          FORM
      ════════════════════════════════════════ */}
      <section className="bg-[#0A0A0A] py-16 px-5 relative overflow-hidden text-white z-10">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#FFF200]/10 blur-[80px] rounded-full" />
        
        <div className="mb-10 relative z-10 text-center">
          <h3 className="text-[36px] font-black tracking-tighter mb-4 leading-[1.1]">
            Ready to gain <br/>
            <span className="text-[#FFF200]">absolute clarity?</span>
          </h3>
          <p className="text-[14px] text-gray-400 font-medium leading-relaxed mb-6 px-4">
            Stop debating interpretations. Request a custom site walkthrough.
          </p>
        </div>

        <form className="space-y-3 relative z-10">
          <input placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white text-[14px] focus:border-[#FFF200] outline-none" />
          <input placeholder="Work Email" type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white text-[14px] focus:border-[#FFF200] outline-none" />
          <input placeholder="Company" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white text-[14px] focus:border-[#FFF200] outline-none" />
          <button type="button" className="w-full bg-[#FFF200] text-black font-black py-4 rounded-xl uppercase tracking-[0.2em] text-[11px] mt-4 shadow-[0_10px_20px_rgba(255,242,0,0.15)] active:scale-95 flex justify-center items-center gap-2">
            Book a Demo <ArrowRight size={14} strokeWidth={3}/>
          </button>
        </form>
      </section>

      {/* ════════════════════════════════════════
          FOOTER
      ════════════════════════════════════════ */}
      <footer className="bg-black pt-16 pb-8 px-6 border-t border-gray-800 relative z-10">
        <img src="https://i.ibb.co/k2LDXWzm/Master-Solutions-Deck-v2-3.png" alt="YelloSKYE" className="h-8 w-auto mb-6 brightness-0 invert" />
        <p className="text-gray-400 text-[13px] leading-relaxed font-medium mb-8">
          The operating system for modern jobsites. Replacing construction ambiguity with visual ground truth.
        </p>
        
        <div className="grid grid-cols-2 gap-8 mb-10">
          <div className="space-y-3">
            <h4 className="text-[9px] font-black text-gray-600 uppercase tracking-widest mb-2">Solutions</h4>
            {['Land Survey', 'Monitoring', 'BIM Analytics', 'Inspection'].map(l => <a key={l} href="#" className="block text-[13px] font-bold text-gray-300 hover:text-[#FFF200]">{l}</a>)}
          </div>
          <div className="space-y-3">
            <h4 className="text-[9px] font-black text-gray-600 uppercase tracking-widest mb-2">Company</h4>
            {['About Us', 'How it Works', 'Case Studies', 'Careers'].map(l => <a key={l} href="#" className="block text-[13px] font-bold text-gray-300 hover:text-[#FFF200]">{l}</a>)}
          </div>
        </div>

        <div className="space-y-6 mb-10">
          <h4 className="text-[9px] font-black text-gray-600 uppercase tracking-widest">Headquarters</h4>
          <div className="flex gap-3">
            <MapPin size={16} className="text-[#FFF200] shrink-0 mt-0.5" />
            <div>
              <div className="text-[12px] font-black mb-1 uppercase text-white">Pune, India</div>
              <address className="text-[11px] text-gray-500 not-italic leading-relaxed">5th Floor, Trimurti Honey Gold, Sinchan Nagar, MH 411007</address>
            </div>
          </div>
          <div className="flex gap-3">
            <Mail size={16} className="text-[#FFF200] shrink-0 mt-0.5" />
            <div>
              <div className="text-[9px] font-black text-gray-600 uppercase mb-0.5">Direct Inquiry</div>
              <a href="mailto:sales@yelloskye.com" className="text-[13px] font-black text-white">sales@yelloskye.com</a>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mb-8">
          {[Twitter, Linkedin, Youtube, Instagram].map((Icon, idx) => (
            <div key={idx} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 bg-white/5"><Icon size={16} /></div>
          ))}
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col gap-3 text-[9px] font-black text-gray-600 uppercase tracking-widest text-center">
          <div className="flex justify-center gap-6"><span>Privacy Policy</span><span>Terms</span></div>
          <div>© 2026 YelloSKYE. All Rights Reserved.</div>
        </div>
      </footer>

    </div>
  );
};