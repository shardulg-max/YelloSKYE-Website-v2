HERO SECTION OF HOME <PAGE>

<section className="relative w-full bg-[#FAFAFA] py-24 lg:py-32 font-sans overflow-hidden border-t border-b border-gray-100">
      
      {/* Aesthetic Faded Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" 
            style={{ 
              backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", 
              backgroundSize: "64px 64px",
              maskImage: "radial-gradient(ellipse at bottom, black 40%, transparent 80%)",
              WebkitMaskImage: "radial-gradient(ellipse at bottom, black 40%, transparent 80%)"
            }} 
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-yellow-200 bg-yellow-50 text-[10px] font-black uppercase tracking-[0.2em] text-yellow-600 mb-6 shadow-sm">
            <Zap size={12} className="fill-yellow-500" /> Ground Truth in Minutes
          </div>
          
          <h2 className="text-[clamp(40px,5vw,60px)] font-black tracking-tighter text-[#0A0A0A] leading-[1.05] mb-6">
            Meet Kumar.<br className="hidden sm:block" />
            <span className="relative inline-block mt-2">
              <span className="absolute inset-y-1 -inset-x-3 bg-[#FFF200] rounded-xl shadow-sm transform -skew-x-2"></span>
              <span className="relative px-2 text-black">Your Site's Always-On 'Brain'.</span>
            </span>
          </h2>
          
          <p className="text-[18px] md:text-[20px] text-gray-600 font-medium leading-relaxed max-w-2xl">
            He works while you sleep. Ingesting drone data, cross-references models, and surfaces critical deviations before they become demolitions. This is your workflow, superpowered.
          </p>
        </div>

        {/* WORKFLOW BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          
          {/* Workflow Node 1: Visual Timeline */}
          <div className="group relative bg-white rounded-3xl lg:rounded-[36px] p-6 lg:p-8 overflow-hidden flex flex-col justify-between min-h-[400px] shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-100 transition-all hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center shadow-md">
                  <Clock size={20} className="text-[#FFF200]" />
                </div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Node 01: PROGRESS CHECK</div>
              </div>
              <h3 className="text-2xl font-black text-black tracking-tight mb-4 transition-colors">Visual Timeline Intelligence</h3>
              <p className="text-gray-500 font-medium text-sm leading-relaxed max-w-sm mb-12">Scrub through months of site evolution with a single georeferenced slider. Track project velocity and eliminate contractor disputes week-over-week.</p>
            </div>
            
            <div className="relative z-10 bg-gray-50 p-4 rounded-xl border border-gray-200/60">
              <div className="flex justify-between text-xs font-bold text-gray-400 uppercase mb-3 px-2">
                 <span>April 12</span>
                 <span className="text-yellow-600">Today</span>
              </div>
              <div className="relative w-full h-2 bg-gray-200 rounded-full flex items-center">
                 <div className="absolute left-0 h-full w-[85%] bg-yellow-400 rounded-full"></div>
                 <div className="absolute left-[85%] w-5 h-5 bg-white rounded-full shadow-lg border-2 border-yellow-500 -translate-x-1/2 cursor-pointer flex items-center justify-center">
                   <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                 </div>
              </div>
            </div>
          </div>

          {/* Workflow Node 2: BIM Overlay */}
          <div className="group relative bg-[#0A0A0A] rounded-3xl lg:rounded-[36px] p-6 lg:p-8 overflow-hidden flex flex-col justify-between min-h-[400px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-black transition-all hover:bg-[#111] hover:shadow-[0_20px_60px_rgba(255,242,0,0.1)] hover:-translate-y-1">
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
              <img src="https://i.ibb.co/HDGVjy6S/Screenshot-2026-02-19-at-22-12-29.png" alt="Site Map" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#FFF200]/10 rounded-xl flex items-center justify-center border border-[#FFF200]/30">
                  <Layers size={20} className="text-[#FFF200]" />
                </div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FFF200]/70">Node 02: VERIFICATION</div>
              </div>
              <h3 className="text-2xl font-black text-white tracking-tight mb-4 transition-colors">Blueprint on Reality</h3>
              <p className="text-gray-400 font-medium text-sm leading-relaxed max-w-sm mb-12">Instantly layer CAD and BIM models on top of live site scans. Spot critical deviations before concrete cures.</p>
            </div>
            <div className="relative z-10 w-full h-28 bg-black rounded-xl overflow-hidden shadow-inner border border-gray-800">
               <img src="https://i.ibb.co/jcSkjrn/Website-Visuals-Presentation-8.png" className="w-full h-full object-cover opacity-80" alt="Reality" />
               <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#FFF200] shadow-[0_0_15px_#FFF200]"></div>
               <div className="absolute top-2 left-2 bg-black/70 px-2 py-0.5 text-white font-bold text-[9px] uppercase tracking-wider rounded backdrop-blur-sm">Reality</div>
               <div className="absolute top-2 right-2 bg-blue-600/70 px-2 py-0.5 text-white font-bold text-[9px] uppercase tracking-wider rounded backdrop-blur-sm">BIM</div>
            </div>
          </div>

          {/* Workflow Node 3: Automated Quantities */}
          <div className="group relative bg-white rounded-3xl lg:rounded-[36px] p-6 lg:p-8 overflow-hidden flex flex-col justify-between min-h-[400px] shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-100 transition-all hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center shadow-md">
                  <Calculator size={20} className="text-[#FFF200]" />
                </div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Node 03: EXTRACTION</div>
              </div>
              <h3 className="text-2xl font-black text-black tracking-tight mb-4 transition-colors">Instant Quantities</h3>
              <p className="text-gray-500 font-medium text-sm leading-relaxed max-w-sm mb-12">DEX instantly generates quantities for earthwork, slab casting, and facade coverage. Every metric is visual and linked to a moment in time.</p>
            </div>
            <div className="relative z-10 bg-gray-50 p-4 rounded-xl border border-gray-200/60 flex items-center justify-between">
               <div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase mb-0.5">Slab 4 Casting</div>
                  <div className="text-xl font-black text-black">84.2%</div>
               </div>
               <div className="w-9 h-9 border-4 border-gray-200 border-t-green-500 border-r-green-500 rounded-full transform -rotate-45"></div>
            </div>
          </div>

          {/* Workflow Node 4: Audit Proof */}
          <div className="group relative bg-white rounded-3xl lg:rounded-[36px] p-6 lg:p-8 overflow-hidden flex flex-col justify-between min-h-[400px] shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-100 transition-all hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center shadow-md">
                  <Shield size={20} className="text-[#FFF200]" />
                </div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Node 04: ACTION</div>
              </div>
              <h3 className="text-2xl font-black text-black tracking-tight mb-4 transition-colors">Bulletproof Proof</h3>
              <p className="text-gray-500 font-medium text-sm leading-relaxed max-w-sm mb-12">Access immutable, time-linked visual logs of all site conditions for zero-guesswork billing and change orders.</p>
            </div>
            <div className="relative z-10 bg-green-50 p-4 rounded-xl border border-green-100 flex items-center justify-between">
                <div>
                   <div className="text-[10px] font-bold text-green-600 uppercase mb-0.5">Visual Proof Score</div>
                   <div className="text-xl font-black text-green-700">100/100</div>
                </div>
                <FileCheck size={28} className="text-green-500" />
            </div>
          </div>

        </div>

        {/* Dynamic Workflow Visualization (Connecting the dots) */}
        <div className="mt-12 lg:mt-16 p-8 lg:p-12 bg-black rounded-[36px] border border-gray-800 shadow-2xl relative overflow-hidden flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-800 bg-[#111] text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFF200] mb-8 shadow-sm">
            <Sparkles size={12} className="fill-[#FFF200]" /> Seamless Intelligence Cycle
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative w-full items-start">
            {workflowNodes.map((item, i) => (
              <div key={i} className="group flex flex-col items-center text-center p-6 bg-[#111] rounded-3xl border border-gray-800 transition-colors hover:border-[#FFF200]/20">
                <div className="w-16 h-16 rounded-3xl bg-black border-2 border-dashed border-gray-700 flex flex-col items-center justify-center text-[#FFF200] mb-5 group-hover:border-[#FFF200]/50 transition-colors">
                  <Zap size={28} className="text-[#FFF200] delay-100" />
                  <div className="absolute top-1/2 -translate-y-1/2 -left-3 animate-pulse opacity-0 group-hover:opacity-100"><CornerRightDown size={20} className="text-yellow-600"/></div>
                </div>
                <div className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-1 group-hover:text-yellow-600 transition-colors">{item.label}</div>
                <h4 className="text-base font-black text-white leading-tight tracking-tight">{item.title}</h4>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};


// ─── HOME COMPONENT ─────────────────────────────────────────────────────────────
export const Home: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonialCount = 3; 

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonialCount);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white selection:bg-[#FFF200] selection:text-black font-sans">
      
      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 24s linear infinite; }
        .marquee-mask {
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
      
      <SectionObserver />

      {/* ====================== HERO SECTION ====================== */}
      <section className="relative w-full h-[100dvh] min-h-[750px] pt-[120px] pb-6 lg:pb-10 bg-[#FAFAFA] flex flex-col overflow-hidden font-sans">
        
        <div className="absolute inset-0 opacity-[0.5] pointer-events-none z-0" 
              style={{ 
                backgroundImage: "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)", 
                backgroundSize: "80px 80px",
                maskImage: "linear-gradient(to bottom, black 30%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 30%, transparent 100%)"
              }} 
        />

        <div className="relative z-10 flex flex-col items-center text-center px-6 shrink-0 mb-8 lg:mb-10">
          <h1 className="text-[clamp(56px,7vw,110px)] font-black tracking-tighter text-[#0A0A0A] leading-[1.1] mb-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 animate-in fade-in slide-in-from-bottom-6 duration-1000">
            <span>Your site,</span>
            <span className="bg-[#FFF200] px-5 py-2 lg:py-1 rounded-[16px] md:rounded-[24px] text-black">
              in sight.
            </span>
          </h1>
          
          <p className="text-[17px] md:text-[20px] text-gray-500 font-medium leading-relaxed max-w-[800px] animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
            Know exactly what's happening on your site with AI-powered reality capture. <br className="hidden md:block" />
            Stop managing by assumption and start operating with absolute certainty.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
            <button className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#0A0A0A] text-white font-bold text-[15px] transition-all hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] ring-1 ring-black/5">
              Book a demo
              <ArrowRight size={16} strokeWidth={3} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button className="flex items-center justify-center w-full sm:w-auto px-8 py-3.5 rounded-full bg-white border border-gray-200 text-[#0A0A0A] font-bold text-[15px] transition-all hover:-translate-y-1 hover:bg-gray-50 hover:border-gray-300 hover:shadow-sm">
              Explore platform
            </button>
          </div>
        </div>

        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-5 lg:px-10 flex-1 min-h-0 flex flex-col animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
          <div className="w-full h-full bg-[#080808] rounded-2xl lg:rounded-[40px] shadow-[0_30px_80px_rgba(0,0,0,0.1)] border border-gray-200/50 overflow-hidden relative group">
            <video 
              autoPlay loop muted playsInline
              className="w-full h-full object-cover scale-[1.01] transition-transform duration-1000 group-hover:scale-100" 
              poster="https://i.ibb.co/bMN7Kzv0/Website-Visuals-Presentation-7.png" 
            >
              {/* <source src="/your-video.mp4" type="video/mp4" /> */}
            </video>
            <div className="absolute inset-0 rounded-2xl lg:rounded-[40px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] pointer-events-none"></div>
          </div>
        </div>
      </section>














      -------------------


import React from "react";
import { 
  Check, Globe, Layers, Twitter, Linkedin, Youtube, Instagram, 
  MapPin, Eye, Zap, ShieldCheck, Users, ArrowRight
} from "lucide-react";

// ─── STYLES ──────────────────────────────────────────────────
const AboutStyles = () => (
  <style>{`
    .fade-grid {
      background-image: linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), 
                        linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
      background-size: 80px 80px;
    }
  `}</style>
);

export const About: React.FC = () => {
  return (
    <div className="bg-white text-black font-sans selection:bg-[#FFF200] selection:text-black w-full overflow-x-hidden">
      <AboutStyles />

     {/* ════════════════════════════════════════
          1. HERO (WIDER IMAGE)
      ════════════════════════════════════════ */}
      <section className="pt-24 md:pt-32 lg:pt-44 pb-12 lg:pb-20 relative overflow-hidden bg-white">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ 
               backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", 
               backgroundSize: "80px 80px",
               maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
               WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)"
             }} />
             
        <div className="max-w-[1450px] mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* LEFT SIDE: Copy (Reduced span to give image more room) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <h1 className="text-[clamp(40px,5vw,78px)] font-black tracking-tighter leading-[1.0] text-black mb-14 max-w-[850px]">
                We exist to make <br /> 
                the built environment <br />
                <span className="relative inline-block mt-2">
                  <span className="absolute inset-y-1 -inset-x-4 bg-[#FFF200] rounded-xl lg:rounded-2xl shadow-sm transform -skew-x-2"></span>
                  <span className="relative text-black">trustworthy.</span>
                </span>
              </h1>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10 max-w-2xl">
                {[
                  { label: "Clarity", desc: "Making on-site reality unambiguous and dependable.", icon: <Eye size={18} /> },
                  { label: "Shared Reality", desc: "One version of progress, for all stakeholders.", icon: <Users size={18} /> },
                  { label: "Intelligence", desc: "Turning reality into informed, data-backed action.", icon: <Zap size={18} /> },
                  { label: "Decision Confidence", desc: "Enable action without second-guessing site conditions.", icon: <ShieldCheck size={18} /> }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-[#FFF200] flex items-center justify-center shrink-0 mt-1 shadow-[0_8px_20px_rgba(255,242,0,0.3)]">
                      <div className="text-black">{item.icon}</div>
                    </div>
                    <div>
                      <span className="font-black text-black uppercase text-[12px] tracking-widest block mb-1.5">{item.label}</span>
                      <p className="text-[14px] text-gray-500 font-medium leading-snug">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE: Wider Image (Increased to col-span-5) */}
            <div className="lg:col-span-5 relative mt-12 lg:mt-0">
              <div className="relative aspect-[4/4] lg:aspect-[4/5] w-full overflow-hidden rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.15)]">
                <img 
                  src="https://i.ibb.co/LX00P9s0/Screenshot-2026-02-24-at-12-58-21.png" 
                  className="w-full h-full object-cover grayscale-[10%]" 
                  alt="Site Intelligence Visual" 
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          2. THE CORE PROBLEM (STATIC EDITORIAL LAYOUT)
      ════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-[#0A0A0A] text-white relative font-sans border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
          
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-[clamp(40px,5vw,72px)] font-black tracking-tighter mb-6 leading-[1.05] text-white">
              Construction moves on <br className="hidden md:block"/>
              <span className="text-[#FFF200]">two timelines.</span>
            </h2>
            <p className="text-xl text-gray-400 font-medium leading-relaxed max-w-3xl mx-auto">
              There is the work that happens on the ground, and the record used to understand it. 
              Usually, these two drift apart.
            </p>
          </div>

          {/* Stark Static Comparison Panels */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-10 max-w-5xl mx-auto mb-16">
            
            {/* Panel 1 */}
            <div className="bg-[#111] border border-white/10 rounded-[32px] p-10 lg:p-14">
              <div className="w-3 h-3 rounded-full bg-white mb-8"></div>
              <h3 className="text-2xl lg:text-3xl font-black mb-4">Physical Reality</h3>
              <p className="text-gray-400 font-medium leading-relaxed mb-8">
                The actual site state. Concrete is poured, steel is erected, and earth is moved at a rapid, dynamic pace.
              </p>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FFF200]">Moves Fast</div>
            </div>

            {/* Panel 2 */}
            <div className="bg-[#111] border border-white/10 rounded-[32px] p-10 lg:p-14">
              <div className="w-3 h-3 rounded-full bg-red-500 mb-8"></div>
              <h3 className="text-2xl lg:text-3xl font-black mb-4">Paper Record</h3>
              <p className="text-gray-400 font-medium leading-relaxed mb-8">
                The documented state. Spreadsheets, PDF markups, and delayed reports struggling to keep up with the field.
              </p>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-red-500">Lags Behind</div>
            </div>

          </div>

          {/* Bold Quote Block */}
          <div className="max-w-4xl mx-auto text-center p-8 lg:p-12 border-y border-white/10">
            <p className="text-2xl lg:text-4xl font-bold leading-tight text-white mb-6">
              "When reality is fragmented, teams compensate with assumptions. <span className="text-gray-500">And assumptions are where risk hides.</span>"
            </p>
            <p className="text-sm font-black uppercase tracking-widest text-[#FFF200]">The YelloSKYE Solution</p>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════
          STRATEGIC FOUNDATION (Vision, Mission, Principles)
      ════════════════════════════════════════ */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-24">
            <div className="p-10 lg:p-14 rounded-[32px] bg-gray-50 border border-gray-100">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-6">Our Vision</h3>
              <p className="text-2xl lg:text-3xl font-black tracking-tight text-black leading-tight">
                Revolutionizing customer business by providing industry-leading AI solutions with aerial data.
              </p>
            </div>
            <div className="p-10 lg:p-14 rounded-[32px] border border-gray-200">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-6">Our Mission</h3>
              <p className="text-2xl lg:text-3xl font-black tracking-tight text-black leading-tight">
                Be the global leader in delivering Aerial Intelligence for the 21st Century.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
              <h2 className="text-4xl lg:text-5xl font-black tracking-tighter leading-tight mb-8">
                The principles that <br /> <span className="text-gray-400">guide our drift.</span>
              </h2>
              <p className="text-lg text-gray-500 font-medium leading-relaxed">
                Pursuing mastery in drone technology and aerial intelligence, we passionately explore innovative ways to empower data-driven, sustainable growth.
              </p>
            </div>
            
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
              {[
                { title: "Customer First", desc: "Empathizing with deep pain points to deliver experiences that truly 'wow'." },
                { title: "Tech Forward", desc: "Developing fully integrated platforms that add tangible value to business." },
                { title: "Honesty & Integrity", desc: "Our motto is to deliver Ground Truth. Honesty is not an option; it's the core." },
                { title: "Team Work", desc: "Stressing teamwork and co-creation. Individual creativity is always encouraged." }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-[24px] bg-white border border-gray-100 shadow-sm">
                   <div className="flex items-center gap-4 mb-4">
                      <div className="w-2 h-2 rounded-full bg-[#FFF200]" />
                      <h4 className="text-sm font-black uppercase tracking-widest">{item.title}</h4>
                   </div>
                   <p className="text-gray-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          3. FOUNDERS: EDITORIAL BIOS (Matching Screenshots)
      ════════════════════════════════════════ */}
      <section className="py-24 lg:py-40 bg-[#0A0A0A] text-white border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          
          <div className="mb-20">
            <h2 className="text-[clamp(40px,5vw,72px)] font-black tracking-tighter leading-[1.05] mb-6">
              The Visionaries <br /> 
              <span className="text-[#FFF200]">Behind Inception.</span>
            </h2>
            <p className="text-xl text-gray-400 font-medium leading-relaxed max-w-2xl">
              Our founders unite their wealth of experience in Investment Banking, Aviation, and Technology to drive innovation and excellence.
            </p>
          </div>

          <div className="flex flex-col gap-24">
            
            {/* Kiran Shah - Bio Block */}
            <div className="grid md:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="md:col-span-5">
                <div className="aspect-[4/5] rounded-[24px] overflow-hidden border border-white/10">
                  <img src="https://ik.imagekit.io/saxybrgkp/MME/YelloSkye%20Kiran%20Shah.jpg" className="w-full h-full object-cover" alt="Kiran Shah" />
                </div>
              </div>
              <div className="md:col-span-7">
                <h3 className="text-4xl lg:text-5xl font-black tracking-tight mb-2">Kiran Shah</h3>
                <p className="text-sm font-black text-gray-400 uppercase tracking-[0.2em] mb-8 pb-8 border-b border-white/10">Chairman & MD</p>
                
                <div className="space-y-6 text-[17px] text-gray-400 font-medium leading-relaxed">
                  <p>
                    Kiran Shah embodies the core principles of YelloSKYE, where business acumen and aerial intelligence are the foundation of our mission. With an unwavering commitment to innovative solutions and exceptional customer experiences, he is the driving force behind our ability to make a real impact on businesses.
                  </p>
                  <p>
                    As a global finance industry veteran and a dedicated aviation enthusiast, Kiran brings over two decades of experience in leadership roles at renowned institutions like Goldman Sachs India, JPMorgan, and Bank of America. His expertise empowers businesses and leadership by harnessing emotional intelligence, ensuring data transparency, and leveraging advanced analytics to navigate and thrive in today's dynamic landscape.
                  </p>
                </div>
              </div>
            </div>

            {/* Kush Aggarwal - Bio Block */}
            <div className="grid md:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="md:col-span-5">
                <div className="aspect-[4/5] rounded-[24px] overflow-hidden border border-white/10">
                  <img src="https://ik.imagekit.io/saxybrgkp/MME/YelloSkye%20Drone%20Expertise.jpg" className="w-full h-full object-cover" alt="Kush Aggarwal" />
                </div>
              </div>
              <div className="md:col-span-7">
                <h3 className="text-4xl lg:text-5xl font-black tracking-tight mb-2">Kush Agarwal</h3>
                <p className="text-sm font-black text-gray-400 uppercase tracking-[0.2em] mb-8 pb-8 border-b border-white/10">Co-Founder & CEO</p>
                
                <div className="space-y-6 text-[17px] text-gray-400 font-medium leading-relaxed mb-10">
                  <p>
                    Exploring the boundless potential of aerial intelligence and the ability to witness a profound impact across diverse sectors has been Kush's exhilarating journey. With a background as the Ex-Deputy Chief Pilot for the Boeing 737 and 777 fleets at Jet Airways, amassing over 4000 flight hours, Kush's passion for flying has been channeled into crafting extraordinary experiences for YelloSKYE's customers.
                  </p>
                </div>

                <a href="https://linkedin.com/in/kush-agarwal" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-[#FFF200] hover:text-white font-bold text-sm uppercase tracking-widest transition-colors">
                  <span className="underline underline-offset-4">Follow on LinkedIn</span>
                  <div className="w-6 h-6 bg-[#FFF200] text-black flex items-center justify-center rounded-sm">
                    <Linkedin size={14} fill="currentColor" />
                  </div>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          4. INVESTORS: LARGER LOGOS
      ════════════════════════════════════════ */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
           <h3 className="text-[12px] font-black uppercase tracking-[0.5em] text-gray-400 mb-16">Fueled by Institutional Trust</h3>
           <div className="flex flex-wrap justify-center items-center gap-16 lg:gap-32 opacity-70 grayscale">
              <img src="https://yelloskye.com/wp-content/uploads/2023/11/Group-19626065.png" alt="Keiretsu Forum" className="h-16 lg:h-20 w-auto object-contain" />
              <img src="https://yelloskye.com/wp-content/uploads/2023/11/Group-19626063.png" alt="IAN" className="h-20 lg:h-24 w-auto object-contain" />
              <img src="https://yelloskye.com/wp-content/uploads/2023/11/Group-19626064.png" alt="IvyCap" className="h-16 lg:h-20 w-auto object-contain" />
           </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          5. NATIONAL COVERAGE: FULL BLACK BG + NO IMAGE BOX
      ════════════════════════════════════════ */}
      <section className="py-24 lg:py-40 bg-[#0A0A0A] relative overflow-hidden text-white">
        
        <div className="absolute inset-0 fade-grid" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black text-[#FFF200] uppercase tracking-[0.2em] mb-6">
                Our Footprint
              </div>
              <h2 className="text-4xl lg:text-6xl font-black tracking-tighter leading-tight mb-8">
                Our National <br /> Coverage.
              </h2>
              
              <div className="space-y-6 mb-12">
                 <div className="flex items-center gap-6 p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                    <div className="text-4xl font-black text-white tracking-tighter">50+</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">Institutional <br /> Customers</div>
                 </div>
                 <div className="flex items-center gap-6 p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                    <div className="text-4xl font-black text-white tracking-tighter">100+</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">Live Locations <br /> Covered</div>
                 </div>
                 <div className="flex items-center gap-6 p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                    <div className="text-4xl font-black text-white tracking-tighter">200+</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">Use Cases <br /> Served</div>
                 </div>
              </div>

              <div className="flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                 <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-blue-500" /> Office Locations
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#FFF200]" /> Project Locations
                 </div>
              </div>
            </div>

            {/* Map Area: Floating freely without a box */}
            <div className="lg:col-span-7 relative h-[500px] lg:h-[700px] flex items-center justify-center">
               <img 
                 src="https://ik.imagekit.io/saxybrgkp/MME/Website%20Images%20Land%20Survey.png" 
                 className="w-full h-full object-contain drop-shadow-[0_0_50px_rgba(255,242,0,0.1)]" 
                 alt="National Footprint Map" 
               />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};



