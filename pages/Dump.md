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