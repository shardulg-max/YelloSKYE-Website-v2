  import { useNavigate } from "react-router-dom";
  import React, { useState, useEffect } from "react";
  import { 
    Check, Globe, Layers, Mail, Twitter, Linkedin, Youtube, Instagram, PenTool, Scan, Crosshair, ArrowDown, 
    MapPin, MoveUpRight, Sparkles, Box, AlertTriangle, FileBox, Users, 
    Ruler, LayoutTemplate, Activity, RefreshCw, Hexagon, HardHat, ShieldCheck,
    CheckCircle2, Cpu
  } from "lucide-react";

  const BIM_FEATURES = [
  {
    id: 'scan-to-bim',
    label: 'Scan to BIM',
    type: 'image',
    title: 'Millimeter-Accurate As-Builts',
    desc: 'We reverse-engineer raw laser scans and drone point clouds into intelligent BIM models that mirror the exact physical reality of your site.',
    fallbackImg: 'https://ik.imagekit.io/saxybrgkp/MME/new.png?updatedAt=1773740167867'
  },
  {
    id: 'design-to-bim',
    label: 'Design to BIM',
    type: 'image',
    title: 'From 2D Concept to 3D Reality',
    desc: 'Transform static 2D CAD and conceptual designs into fully-coordinated, intelligent 3D BIM models ready for seamless execution.',
    fallbackImg: 'https://ik.imagekit.io/saxybrgkp/MME/new%202.png?updatedAt=1773740167826'
  },
  {
    id: 'bim-on-reality',
    label: 'BIM on Reality',
    type: 'animation',
    title: 'Model-to-Site Validation',
    desc: 'Overlay 3D models directly onto live site captures to validate structural integrity and identify deviations before they become costly rework.',
  },
  {
    id: 'clash-detection',
    label: 'Clash Detection',
    type: 'animation',
    title: 'Pre-Construction Conflict Resolution',
    desc: 'Federate architectural, structural, and MEP models to resolve hard and soft clashes in the digital twin before a single brick is laid.',
  }
];

  export const ScanToBIMHero: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
      if (isHovered) return;
      const timer = setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % BIM_FEATURES.length);
      }, 4500); 
      return () => clearTimeout(timer);
    }, [activeIndex, isHovered]);

    return (
      <section className="pt-[110px] lg:pt-[124px] pb-10 bg-white relative overflow-hidden font-sans">
        
        <style>{`
          @keyframes hero-progress {
            from { width: 0%; }
            to { width: 100%; }
          }
        `}</style>

        {/* Aesthetic Grid Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
            style={{ 
              backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", 
              backgroundSize: "80px 80px",
              maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)"
            }} />
            
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 relative z-10">
          
          {/* HEADER BLOCK */}
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 mb-8 lg:mb-10 items-center">
            <div className="lg:col-span-7 flex flex-col">
              <h1 className="text-[clamp(36px,4.5vw,56px)] font-black leading-[1] tracking-tighter text-black mb-4">
                A Full-stack BIM practice. <br/>
                <span className="relative inline-block mt-1">
                  <span className="absolute inset-y-1 -inset-x-2 bg-[#FFF200] rounded-[12px] transform -skew-x-2"></span>
                  <span className="relative text-black">From concept to reality.</span>
                </span>
              </h1>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] lg:text-[13px] font-bold text-gray-500 uppercase tracking-wider">
                <span className="flex items-center gap-1.5"><Check size={16} strokeWidth={4} className="text-[#FFF200]"/> Reverse Engineering</span>
                <span className="flex items-center gap-1.5"><Check size={16} strokeWidth={4} className="text-[#FFF200]"/> Clash Detection</span>
                <span className="flex items-center gap-1.5"><Check size={16} strokeWidth={4} className="text-[#FFF200]"/> Digital As-Builts</span>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col lg:pl-10">
              <h2 className="text-xl lg:text-2xl font-medium leading-[1.3] text-gray-800 tracking-tight">
                Validate your BIM models against actual site conditions. Bridge design intent with execution reality.
              </h2>
            </div>
          </div>

          {/* INTERACTIVE VIEWER CONTAINER */}
          <div 
            className="bg-white rounded-[24px] lg:rounded-[36px] border border-gray-200 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.1)] p-3 lg:p-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Navigation Tabs */}
            <div className="flex gap-2 overflow-x-auto hide-scrollbar scroll-smooth mb-4 px-1">
              {BIM_FEATURES.map((feature, index) => {
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

            {/* Main Visual Stage */}
<div className="relative w-full aspect-[16/9] lg:aspect-[2.6/1] bg-black overflow-hidden rounded-[16px] lg:rounded-[24px] group mb-4">
  {BIM_FEATURES.map((feature, index) => (
    <div 
      key={feature.id}
      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
        ${activeIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}
      `}
    >
      {feature.type === 'image' ? (
        <>
          <img 
            src={feature.fallbackImg} 
            alt={feature.title}
            className="w-full h-full object-cover transition-transform duration-[20s] ease-linear group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </>
      ) : (
        /* CINEMATIC BIM NARRATIVE VERSION */
        <div className="w-full h-full flex items-center justify-center bg-[#050505] overflow-hidden">
          
          <style>{`
            @keyframes cinematic-zoom { 0% { transform: scale(0.9) rotateX(65deg); } 100% { transform: scale(1.1) rotateX(60deg); } }
            @keyframes pulse-dot { 0% { transform: scale(1); opacity: 1; } 100% { transform: scale(3); opacity: 0; } }
            @keyframes rfi-slide { 0% { transform: translateX(50px); opacity: 0; } 100% { transform: translateX(0); opacity: 1; } }
            @keyframes scan-glow { 0%, 100% { filter: drop-shadow(0 0 5px #FFF200); } 50% { filter: drop-shadow(0 0 20px #FFF200); } }
            @keyframes text-glitch { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
          `}</style>

          {/* BIM ON REALITY: THE "DIGITAL OVERLAY" STORY */}
          {feature.id === 'bim-on-reality' && (
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
               {/* 1. Ground Plane with "Perspective Zoom" */}
               <div className="absolute inset-0 opacity-20" 
                    style={{ 
                      backgroundImage: 'linear-gradient(#444 1px, transparent 1px), linear-gradient(90deg, #444 1px, transparent 1px)', 
                      backgroundSize: '80px 80px', 
                      animation: 'cinematic-zoom 10s ease-in-out infinite alternate',
                      transformOrigin: 'bottom center'
                    }} />
               
               {/* 2. The Site Context (Subtle blueprint texture behind the box) */}
               <div className="absolute w-[600px] h-[400px] bg-white/[0.02] border border-white/[0.05] rounded-full blur-3xl" />

               {/* 3. The "Ghost" BIM Object (High-end wireframe) */}
               <div className="relative z-10 w-96 h-64 border-[1px] border-[#FFF200]/60 bg-gradient-to-br from-[#FFF200]/10 to-transparent backdrop-blur-md shadow-[0_0_80px_rgba(255,242,0,0.1)] group">
                  {/* Technical HUD details inside the box */}
                  <div className="absolute top-0 left-0 p-3 space-y-1">
                    <div className="text-[#FFF200] text-[10px] font-black tracking-widest animate-pulse">● VALIDATING_ASSET_44</div>
                    <div className="text-white/30 text-[8px] font-mono">TOLERANCE_WINDOW: 0.005m</div>
                  </div>

                  {/* The Scanning Laser Beam (Actual localized glow) */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 bottom-0 w-[2px] bg-[#FFF200] shadow-[0_0_20px_#FFF200] animate-scanner-horizontal" 
                         style={{ animation: 'scan-line-horizontal 3s linear infinite' }} />
                  </div>

                  {/* Intersection Markers (Where BIM meets Reality) */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#FFF200] rounded-full blur-xl" />
               </div>

               {/* 4. Real-time deviation alerts (Floating outside) */}
               <div className="absolute right-[15%] top-1/2 -translate-y-1/2 space-y-4" style={{ animation: 'rfi-slide 0.8s ease-out' }}>
                  <div className="bg-black/80 border-l-4 border-red-500 p-4 backdrop-blur-xl">
                    <div className="text-red-500 text-[10px] font-black">DEVIATION DETECTED</div>
                    <div className="text-white text-[18px] font-black tracking-tighter mt-1">+0.012m Z-AXIS</div>
                    <div className="text-gray-500 text-[10px] mt-2">Adjust bracket placement at Grid 4-C</div>
                  </div>
               </div>
            </div>
          )}

          {/* CLASH DETECTION: THE "SYSTEM COLLISION" STORY */}
          {feature.id === 'clash-detection' && (
            <div className="relative w-full h-full flex items-center justify-center bg-[#020202]">
               
               {/* 1. Deep Space Grid */}
               <div className="absolute inset-0 opacity-[0.05]" style={{backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)', backgroundSize: '40px 40px'}} />

               {/* 2. Federated Systems (The Beam and the Duct) */}
               <div className="relative w-full h-full flex items-center justify-center">
                  {/* System A: Structural Steel */}
                  <div className="absolute w-[120%] h-24 bg-[#1a1a1a] border-y-2 border-gray-800 flex flex-col justify-center px-24 transform -rotate-[4deg] overflow-hidden"
                       style={{ animation: 'beam-slide 1.2s cubic-bezier(0.2, 0, 0, 1) forwards' }}>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />
                    <span className="text-gray-600 text-[10px] font-mono tracking-[0.4em]">STRUCTURAL_CORE_ELEMENT_A101</span>
                  </div>
                  
                  {/* System B: HVAC System (High contrast blue) */}
                  <div className="absolute h-[150%] w-32 bg-blue-600/10 border-x-2 border-blue-500/40 backdrop-blur-md z-10 transform rotate-[10deg] flex flex-col items-center justify-start py-24"
                       style={{ animation: 'duct-slide 1.2s cubic-bezier(0.2, 0, 0, 1) forwards' }}>
                    <div className="w-1 h-full bg-blue-500/10" />
                    <span className="absolute bottom-20 text-blue-400 text-[10px] font-mono tracking-[0.4em] rotate-90">MEP_SYSTEM_DUCT_44_B</span>
                  </div>
               </div>
               
               {/* 3. The "Clash Event" UI */}
               <div className="relative z-20 flex items-center justify-center opacity-0"
                    style={{ animation: 'fade-in 0.3s 1.1s forwards' }}>
                  
                  {/* Impact Zone */}
                  <div className="absolute w-48 h-48 border-[1px] border-red-500/30 rounded-full animate-ping" />
                  <div className="relative w-24 h-24 bg-red-600 rounded-full shadow-[0_0_80px_rgba(220,38,38,0.6)] flex flex-col items-center justify-center text-white border-2 border-red-400">
                     <AlertTriangle size={32} className="mb-1" />
                     <span className="text-[10px] font-black uppercase tracking-tighter">CLASH</span>
                  </div>

                  {/* Callout Label with Leader Line */}
                  <div className="absolute -right-64 top-0 w-60 h-[1px] bg-red-500">
                    <div className="absolute right-0 top-[-80px] w-56 bg-red-600 p-4 rounded-lg shadow-2xl">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white text-[10px] font-black">CONFLICT_ID: #404</span>
                        <div className="w-2 h-2 bg-white rounded-full animate-ping" />
                      </div>
                      <div className="text-red-100 text-[12px] font-bold leading-tight">HARD_CLASH: Duct intersects Structural Beam</div>
                      <div className="mt-3 pt-3 border-t border-red-500/50 flex gap-2">
                        <div className="px-2 py-1 bg-white text-red-600 text-[9px] font-black rounded-sm">REROUTE MEP</div>
                      </div>
                    </div>
                  </div>
               </div>
            </div>
          )}
        </div>
      )}
    </div>
  ))}
  
  {/* Progress Bar (Keep this as is) */}
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
{/* Dynamic Caption Bar - ADD THIS TO SHOW THE DESCRIPTIONS */}
          <div className="bg-gray-50 rounded-[20px] p-5 lg:p-8 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center border border-gray-100">
             <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-md bg-black text-[#FFF200] text-[10px] font-black uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFF200] animate-pulse"></span>
                  {BIM_FEATURES[activeIndex].label} Service
                </div>
                <h3 className="text-2xl lg:text-3xl font-black text-black leading-none tracking-tighter">
                  {BIM_FEATURES[activeIndex].title}
                </h3>
             </div>
             
             {/* 2-Line Optimized Description Container */}
             <div className="md:max-w-xl lg:max-w-2xl md:text-right">
                <p className="text-base lg:text-lg text-gray-500 font-medium leading-relaxed">
                  {BIM_FEATURES[activeIndex].desc}
                </p>
             </div>
          </div>

          </div>
        </div>
      </section>
    );
  };
  // ─── MAIN COMPONENT ────────────────────────────────────────────────────────────

  export const ScantoBIM: React.FC = () => {
      const navigate = useNavigate(); 
      
    return (
      <div className="bg-white text-black font-sans selection:bg-[#FFF200] selection:text-black overflow-x-hidden">
        
        <ScanToBIMHero />

        {/* ════════════════════════════════════════
            METRICS / ROI BANNER (MOBILE GRID)
        ════════════════════════════════════════ */}
        <section className="bg-white py-16 lg:py-20 relative overflow-hidden font-sans border-b border-gray-50">
          <div className="max-w-[1400px] mx-auto px-5 lg:px-8 relative z-10">
            <div className="text-center mb-10">
              <h3 className="text-[28px] sm:text-[44px] font-black tracking-tighter leading-[1.05] text-black">
                When Design and Execution Align,<br/>
                <span className="relative inline-block mt-2">
                  <span className="absolute inset-y-1 -inset-x-2 bg-[#FFF200] rounded-md shadow-sm transform -skew-x-2"></span>
                  <span className="relative text-black px-1">Coordination is Proactive.</span>
                </span>
              </h3>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { value: '±5mm', label: 'Scan-to-BIM' },
                { value: '70%', label: 'Faster Resolution' },
                { value: '85%', label: 'Less Rework' },
                { value: '100%', label: 'Accurate As-Builts' }
              ].map((metric, i) => (
                <div key={i} className="bg-gray-50 border border-gray-100 rounded-[20px] p-6 text-center shadow-sm">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tighter mb-2">{metric.value}</div>
                    <div className="text-[9px] lg:text-[10px] font-black text-gray-400 uppercase tracking-widest">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            STAKEHOLDER GRID (MOBILE GRID)
        ════════════════════════════════════════ */}
        <section className="bg-white py-16 lg:py-24 relative overflow-hidden font-sans border-b border-gray-50">
          <div className="max-w-[1400px] mx-auto px-5 lg:px-8 relative z-10">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
            
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-[34px] sm:text-[48px] font-black tracking-tighter leading-[1.05] text-black mb-4">
                A Single Source of Truth.<br />
                <span className="relative inline-block mt-2">
                  <span className="absolute inset-y-1 -inset-x-2 bg-[#FFF200] rounded-md shadow-sm transform -skew-x-2"></span>
                  <span className="relative text-black px-1">For Every Stakeholder.</span>
                </span>
              </h2>
              <p className="text-[15px] lg:text-lg text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto">
                From design to handover, ensure every team operates from the same validated reality. Eliminate friction and build with certainty.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
              {[
                { role: "Design Teams", desc: "Validate that coordination efforts translated to execution.", icon: <LayoutTemplate size={18}/> },
                { role: "Contractors", desc: "Track progress against model elements. Prove execution.", icon: <HardHat size={18}/> },
                { role: "MEP Teams", desc: "Install with confidence. Know structural elements are accurate.", icon: <Activity size={18}/> },
                { role: "Quality Teams", desc: "Validate dimensional tolerances without manual tape.", icon: <Ruler size={18}/> },
                { role: "Facility Managers", desc: "Receive as-built models that match reality perfectly.", icon: <RefreshCw size={18}/> },
                { role: "Owners", desc: "Accept handover with absolute confidence.", icon: <ShieldCheck size={18}/> }
              ].map((persona, i) => (
                <div key={i} className="p-4 sm:p-6 rounded-[20px] bg-white border border-gray-200 shadow-sm flex flex-col items-start justify-center">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-black mb-4 border border-gray-100">
                      {persona.icon}
                    </div>
                    <h4 className="text-black font-black text-[13px] sm:text-lg tracking-tight mb-1.5 leading-tight">{persona.role}</h4>
                    <p className="text-gray-500 font-medium text-[11px] sm:text-sm leading-relaxed">{persona.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            INTEGRATIONS / WORKFLOW (MOBILE CLAMPED)
        ════════════════════════════════════════ */}
        <section className="bg-white py-16 lg:py-24 relative overflow-hidden font-sans border-b border-gray-50">
          
          <style>{`
            @keyframes scan-sweep { 0% { top: -10%; opacity: 0; } 10%, 90% { opacity: 1; } 100% { top: 110%; opacity: 0; } }
            .animate-scanner { animation: scan-sweep 4s linear infinite; }
          `}</style>

          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

          <div className="max-w-[1400px] mx-auto px-5 lg:px-8 relative z-10">
            
            <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-16">
                
                {/* COPY & TABS */}
                <div className="lg:w-[45%] flex flex-col justify-center">
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-[9px] font-black uppercase tracking-[0.2em] text-gray-500 mb-4 shadow-sm">
                      <Layers size={12} className="text-[#D4C900]" /> Ecosystem Connected
                    </div>
                    <h2 className="text-[34px] sm:text-[46px] font-black tracking-tighter leading-[1.05] text-black mb-4">
                      Works With Your <br />
                      <span className="relative inline-block mt-2">
                          <span className="absolute inset-y-1 -inset-x-2 bg-[#FFF200] rounded-md shadow-sm transform -skew-x-2"></span>
                          <span className="relative text-black px-1">BIM Workflow.</span>
                        </span>
                    </h2>
                    <p className="text-[15px] text-gray-500 font-medium leading-relaxed max-w-[500px]">
                      YelloSKYE integrates seamlessly with the modeling tools and coordination platforms you already rely on.
                    </p>
                  </div>

                  <div className="space-y-3">
                      {[
                        "Export to Revit, Navisworks, ArchiCAD",
                        "Open BIM via IFC compatibility",
                        "Point cloud registration to coordinates",
                        "Procore, BIM 360, & ACC integrations"
                      ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-3 bg-white px-4 py-3 rounded-[16px] border border-gray-100 shadow-sm">
                          <div className="w-5 h-5 rounded-full bg-[#FFF200]/20 flex items-center justify-center shrink-0">
                            <Check size={12} className="text-black" strokeWidth={4} />
                          </div>
                          <span className="text-[12px] sm:text-[13px] font-bold text-gray-800 tracking-tight">{feature}</span>
                        </div>
                      ))}
                  </div>
                </div>

                {/* ANIMATED VISUAL (Restrained for mobile) */}
                <div className="lg:w-[55%] relative flex min-h-[350px] lg:min-h-[450px]">
                  <div className="flex-1 w-full rounded-[32px] lg:rounded-[40px] bg-white border border-gray-100 shadow-xl flex flex-col justify-center items-center relative overflow-hidden">
                      
                      <div className="absolute left-0 right-0 h-24 bg-gradient-to-b from-transparent via-[#FFF200]/10 to-[#FFF200]/40 border-b-2 border-[#FFF200] animate-scanner z-10 pointer-events-none"></div>

                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] rounded-full border border-gray-100/50 flex items-center justify-center">
                        <div className="w-[150px] h-[150px] rounded-full border border-gray-100 flex items-center justify-center relative">
                          <svg className="absolute inset-0 w-full h-full animate-[spin_60s_linear_infinite] opacity-30" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="99" fill="none" stroke="#D4C900" strokeWidth="1" strokeDasharray="4 8" />
                          </svg>
                        </div>
                      </div>
                      
                      <div className="relative z-20 w-20 h-20 bg-black rounded-[20px] shadow-2xl border border-gray-800 flex flex-col items-center justify-center">
                        <div className="absolute inset-0 bg-[#FFF200]/20 rounded-[20px] blur-xl animate-pulse"></div>
                        <Layers size={28} className="text-[#FFF200] relative z-10" />
                      </div>
                      
                      {/* Clamped Nodes */}
                      <div className="absolute top-[15%] left-[10%] w-16 h-16 bg-white rounded-xl shadow-lg border border-gray-100 flex items-center justify-center font-black text-[9px] text-gray-400 z-20">REVIT</div>
                      <div className="absolute top-[20%] right-[10%] w-20 h-14 bg-white rounded-xl shadow-lg border border-gray-100 flex items-center justify-center font-black text-[9px] text-gray-400 z-20">Navisworks</div>
                      <div className="absolute bottom-[20%] right-[15%] w-16 h-16 bg-white rounded-xl shadow-lg border border-gray-100 flex items-center justify-center font-black text-[9px] text-gray-400 z-20">BIM 360</div>
                      <div className="absolute bottom-[15%] left-[15%] w-20 h-14 bg-white rounded-xl shadow-lg border border-gray-100 flex items-center justify-center font-black text-[9px] text-gray-400 z-20">PROCORE</div>
                  </div>
                </div>

            </div>
          </div>
        </section>
        
      </div>
    );
  };

  export default ScantoBIM;