import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { 
  Check, Globe, Layers, Mail, Twitter, Linkedin, Youtube, Instagram, PenTool, Scan, Crosshair, ArrowDown, 
  MapPin, MoveUpRight, Sparkles, Box, AlertTriangle, FileBox, Users, 
  Ruler, LayoutTemplate, Activity, RefreshCw, Hexagon, HardHat, ShieldCheck,
  CheckCircle2, Cpu
} from "lucide-react";

// ─── DATA: FULL-STACK BIM SERVICES ───────────────────────────────────────

const BIM_FEATURES = [
  {
    id: 'design-to-bim',
    tag: 'Creation',
    title: 'Design to BIM',
    desc: 'We take your 2D CAD drawings, PDFs, and conceptual designs and convert them into intelligent, fully-coordinated 3D BIM models ready for execution.',
    img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 'scan-to-bim',
    tag: 'Reverse Engineering',
    title: 'Scan to BIM',
    desc: 'We take raw laser scans and drone point clouds from your physical site and reverse-engineer them into millimeter-accurate As-Built BIM models.',
    img: 'https://images.unsplash.com/photo-1581092921461-7d6560b37081?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 'clash-detection',
    tag: 'Pre-Construction',
    title: 'Clash Detection',
    desc: 'We federate your architectural, structural, and MEP models to identify and resolve hard and soft clashes before construction even begins.',
    img: 'https://images.unsplash.com/photo-1541888087-b5523b0c5942?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 'bim-on-reality',
    tag: 'Validation',
    title: 'BIM on Reality',
    desc: 'We mirror your real-world asset in BIM. We overlay the 3D model directly onto live site captures to validate execution and track deviations instantly.',
    img: 'https://i.ibb.co/HDGVjy6S/Screenshot-2026-02-19-at-22-12-29.png'
  }
];

// ─── SUB-COMPONENT: PREMIUM LIGHT-MODE DUAL-TRACK (MOBILE ADAPTIVE) ──────────

export const BIMValidationModule = () => {
  return (
    <section className="bg-white py-16 lg:py-32 relative overflow-hidden font-sans border-b border-gray-50">
      
      {/* Custom CSS Animations */}
      <style>{`
        @keyframes scan-sweep-mobile { 0% { transform: translateY(-100%); opacity: 0; } 10%, 90% { opacity: 1; } 100% { transform: translateY(300%); opacity: 0; } }
        @keyframes pulse-ring-mobile { 0% { transform: scale(0.8); opacity: 0.8; } 100% { transform: scale(2.5); opacity: 0; } }
        @keyframes float-wireframe { 0%, 100% { transform: rotateX(60deg) rotateZ(45deg) translateZ(20px); } 50% { transform: rotateX(60deg) rotateZ(45deg) translateZ(40px); } }
      `}</style>

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-24">
          <h2 className="text-[34px] sm:text-[44px] lg:text-[64px] font-black tracking-tighter leading-[1.05] text-[#1D1D1F] mb-5">
            A full-stack BIM practice. <br className="hidden md:block"/>
            <span className="relative inline-block mt-2 sm:mt-3">
              <span className="absolute inset-y-1 lg:inset-y-2 -inset-x-2 bg-[#FFF200] rounded-xl shadow-sm transform -skew-x-2"></span>
              <span className="relative text-black px-1">From concept to reality.</span>
            </span>
          </h2>
          <p className="text-[15px] lg:text-xl text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto mt-4 lg:mt-6">
            We don't just draft models. We reverse-engineer your physical site into a digital twin, or build your 2D designs into clash-free 3D reality.
          </p>
        </div>

        {/* GRID FLOW */}
        <div className="grid lg:grid-cols-2 gap-x-8 gap-y-10 lg:gap-y-0 max-w-6xl mx-auto">
          
          {/* ════════════ TRACK 1: THE REALITY TRACK ════════════ */}
          <div className="flex flex-col relative">
            
            {/* Box 1: Scan to BIM */}
            <div className="bg-white rounded-[24px] lg:rounded-[32px] overflow-hidden border border-gray-200 shadow-md flex flex-col h-full group">
              <div className="h-[200px] sm:h-[260px] lg:h-[300px] w-full overflow-hidden relative bg-gray-100">
                 <img src="https://ik.imagekit.io/saxybrgkp/MME/new.png?updatedAt=1773740167867" alt="Scan to BIM" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 lg:p-10 relative flex-grow flex flex-col justify-center">
                 <div className="absolute -top-6 right-6 w-12 h-12 bg-[#FFF200] rounded-[14px] flex items-center justify-center shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform">
                    <Scan size={20} className="text-black" strokeWidth={2.5}/>
                 </div>
                 <span className="text-gray-500 bg-gray-100 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest inline-block w-fit mb-4">Reverse Engineering</span>
                 <h3 className="text-2xl lg:text-3xl font-black text-[#1D1D1F] tracking-tight mb-2">Scan to BIM.</h3>
                 <p className="text-gray-500 font-medium leading-relaxed text-[13px] lg:text-[15px]">
                    Convert raw laser scans and drone point clouds into millimeter-accurate As-Built BIM models.
                 </p>
              </div>
            </div>

            {/* Down Arrow Connector */}
            <div className="flex justify-center py-6 lg:py-8 relative z-20">
              <div className="absolute top-0 bottom-0 w-[2px] bg-gray-200 -z-10"></div>
              <div className="bg-white py-1 px-1 rounded-full border border-gray-100">
                <ArrowDown size={16} className="text-gray-400" strokeWidth={3} />
              </div>
            </div>

            {/* Box 2: BIM on Reality */}
            <div className="bg-white rounded-[24px] lg:rounded-[32px] overflow-hidden border border-gray-200 shadow-md flex flex-col h-full group">
              <div className="h-[200px] sm:h-[260px] lg:h-[300px] w-full overflow-hidden relative bg-[#0A0A0A] flex items-center justify-center">
                 <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '20px 20px', transform: 'perspective(400px) rotateX(60deg) scale(2)', transformOrigin: 'top center' }}></div>
                 <div className="absolute w-24 h-24 sm:w-40 sm:h-40 bg-gray-800 border border-gray-600 shadow-[0_10px_30px_rgba(0,0,0,0.8)]" style={{ transform: 'rotateX(60deg) rotateZ(45deg)' }}></div>
                 <div className="absolute w-24 h-24 sm:w-40 sm:h-40 border-2 border-[#FFF200] border-dashed bg-[#FFF200]/5 backdrop-blur-sm" style={{ animation: 'float-wireframe 4s ease-in-out infinite' }}></div>
                 <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-[#FFF200]/10 to-[#FFF200]/60 border-b-2 border-[#FFF200] z-20" style={{ animation: 'scan-sweep-mobile 3s linear infinite' }}></div>
              </div>
              <div className="p-6 lg:p-10 relative flex-grow flex flex-col justify-center">
                 <div className="absolute -top-6 right-6 w-12 h-12 bg-[#FFF200] rounded-[14px] flex items-center justify-center shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform">
                    <Layers size={20} className="text-black" strokeWidth={2.5}/>
                 </div>
                 <span className="text-black bg-gray-100 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest inline-block w-fit mb-4">Validation</span>
                 <h3 className="text-2xl lg:text-3xl font-black text-[#1D1D1F] tracking-tight mb-2">BIM on Reality.</h3>
                 <p className="text-gray-500 font-medium leading-relaxed text-[13px] lg:text-[15px]">
                    Overlay 3D models directly onto live site captures to validate structural deviations.
                 </p>
              </div>
            </div>

          </div>

          {/* ════════════ TRACK 2: THE DESIGN TRACK ════════════ */}
          <div className="flex flex-col relative mt-10 lg:mt-0">
            
            {/* Box 3: Design to BIM */}
            <div className="bg-white rounded-[24px] lg:rounded-[32px] overflow-hidden border border-gray-200 shadow-md flex flex-col h-full group">
              <div className="h-[200px] sm:h-[260px] lg:h-[300px] w-full overflow-hidden relative bg-gray-100">
                 <img src="https://ik.imagekit.io/saxybrgkp/MME/new%202.png?updatedAt=1773740167826" alt="Design to BIM" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 lg:p-10 relative flex-grow flex flex-col justify-center">
                 <div className="absolute -top-6 right-6 w-12 h-12 bg-[#FFF200] rounded-[14px] flex items-center justify-center shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform">
                    <PenTool size={20} className="text-black" strokeWidth={2.5}/>
                 </div>
                 <span className="text-gray-500 bg-gray-100 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest inline-block w-fit mb-4">Creation</span>
                 <h3 className="text-2xl lg:text-3xl font-black text-[#1D1D1F] tracking-tight mb-2">Design to BIM.</h3>
                 <p className="text-gray-500 font-medium leading-relaxed text-[13px] lg:text-[15px]">
                    Transform 2D CAD and conceptual designs into intelligent, coordinated 3D models.
                 </p>
              </div>
            </div>

            {/* Down Arrow Connector */}
            <div className="flex justify-center py-6 lg:py-8 relative z-20">
              <div className="absolute top-0 bottom-0 w-[2px] bg-gray-200 -z-10"></div>
              <div className="bg-white py-1 px-1 rounded-full border border-gray-100">
                <ArrowDown size={16} className="text-gray-400" strokeWidth={3} />
              </div>
            </div>

            {/* Box 4: Clash Detection */}
            <div className="bg-white rounded-[24px] lg:rounded-[32px] overflow-hidden border border-gray-200 shadow-md flex flex-col h-full group">
              <div className="h-[200px] sm:h-[260px] lg:h-[300px] w-full overflow-hidden relative bg-[#0A0A0A] flex items-center justify-center">
                 <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, #333 1px, transparent 1px)', backgroundSize: '12px 12px' }}></div>
                 
                 <div className="absolute w-48 sm:w-72 h-10 sm:h-14 bg-gray-700 border-y border-gray-500 shadow-2xl transform -rotate-12 translate-y-4 sm:translate-y-6 flex items-center px-4">
                   <div className="w-full h-[2px] bg-gray-600"></div>
                 </div>
                 <div className="absolute w-12 sm:w-16 h-48 sm:h-72 bg-blue-600/90 border-x border-blue-400 shadow-2xl transform rotate-12 -translate-x-6 sm:-translate-x-8 backdrop-blur-md flex justify-center py-4 z-10">
                   <div className="w-[2px] h-full bg-blue-400/50"></div>
                 </div>
                 
                 <div className="absolute transform -translate-x-4 sm:-translate-x-6 translate-y-6 sm:translate-y-8 z-20 flex items-center justify-center">
                    <div className="absolute w-8 sm:w-12 h-8 sm:h-12 border-[2px] sm:border-[3px] border-red-500 rounded-full" style={{ animation: 'pulse-ring-mobile 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite' }}></div>
                    <div className="absolute w-3 sm:w-4 h-3 sm:h-4 bg-red-500 rounded-full shadow-[0_0_20px_rgba(239,68,68,1)]"></div>
                    <Crosshair size={28} className="text-red-500 absolute drop-shadow-md sm:w-10 sm:h-10" strokeWidth={2} />
                 </div>

                 <div className="absolute bottom-4 right-4 bg-red-500/10 border border-red-500/30 text-red-500 text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded flex items-center gap-1.5 z-30 backdrop-blur-md">
                   <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div> Clash Detected
                 </div>
              </div>

              <div className="p-6 lg:p-10 relative flex-grow flex flex-col justify-center">
                 <div className="absolute -top-6 right-6 w-12 h-12 bg-[#FFF200] rounded-[14px] flex items-center justify-center shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform">
                    <Crosshair size={20} className="text-black" strokeWidth={2.5}/>
                 </div>
                 <span className="text-black bg-gray-100 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest inline-block w-fit mb-4">Pre-Construction</span>
                 <h3 className="text-2xl lg:text-3xl font-black text-[#1D1D1F] tracking-tight mb-2">Clash Detection.</h3>
                 <p className="text-gray-500 font-medium leading-relaxed text-[13px] lg:text-[15px]">
                    Federate architectural, structural, and MEP models to resolve clashes before construction begins.
                 </p>
              </div>
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
      
      {/* ════════════════════════════════════════
          HERO - SCAN TO BIM
      ════════════════════════════════════════ */}
      <section className="pt-[100px] lg:pt-44 pb-10 lg:pb-20 bg-white relative border-b border-gray-50">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
             
        <div className="max-w-[1400px] mx-auto px-5 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12 mb-8 lg:mb-14">
            
            <div className="flex-1 flex flex-col">
              <h1 className="text-[52px] sm:text-[70px] lg:text-[90px] font-black leading-[0.9] tracking-tighter text-black mb-4 lg:mb-8">
                Scan to BIM
              </h1>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] lg:text-[14px] font-bold text-gray-500 tracking-wide">
                <span className="flex items-center gap-1.5"><Check size={14} strokeWidth={4} className="text-[#FFF200]"/> Point Cloud to Revit</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full hidden sm:block"></span>
                <span className="flex items-center gap-1.5"><Check size={14} strokeWidth={4} className="text-[#FFF200]"/> Deviation Heatmaps</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full hidden sm:block"></span>
                <span className="flex items-center gap-1.5"><Check size={14} strokeWidth={4} className="text-[#FFF200]"/> Digital As-Builts</span>
              </div>
            </div>

            <div className="flex-1 lg:max-w-md flex flex-col pt-2 lg:pt-0">
              <h2 className="text-[17px] lg:text-[28px] font-medium leading-relaxed text-gray-800 tracking-tight">
                Your BIM models, validated against actual site conditions. Bridge design intent with execution reality.
              </h2>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="w-full aspect-[4/5] sm:aspect-[4/3] md:aspect-[2.2/1] rounded-[24px] lg:rounded-[40px] overflow-hidden bg-[#0A0A0A] relative shadow-2xl border border-gray-200 group">
            <img src="https://ik.imagekit.io/saxybrgkp/MME/BIM/BIM.png?updatedAt=1773726325028" alt="BIM Overlay Visualization" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[20s] ease-out opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-[#FFF200]/5 mix-blend-overlay"></div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          PROBLEM VS SOLUTION (MOBILE GRID)
      ════════════════════════════════════════ */}
      <section className="bg-white py-16 lg:py-24 relative z-10 border-b border-gray-50">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-10 lg:mb-16">
             <h3 className="text-[34px] sm:text-[44px] font-black tracking-tighter text-black leading-[1.05]">
               Models represent intent.
               <span className="relative inline-block mt-2 mx-1 sm:mx-2">
                <span className="absolute inset-y-1 -inset-x-2 bg-[#FFF200] rounded-lg shadow-sm transform -skew-x-2"></span>
                <span className="relative text-black px-1"> Execution doesn't.</span>
              </span>
             </h3>
             <p className="text-[15px] lg:text-lg text-gray-500 font-medium mt-4 lg:mt-6 leading-relaxed max-w-3xl mx-auto">
                Coordination assumes the model reflects reality. Clashes get discovered onsite—when they're expensive to fix.
             </p>
          </div>
          
          {/* 2-Column Mobile Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
            {[
              { icon: <Box size={18}/>, title: "Design vs Reality Gap", desc: "Deviations accumulate unnoticed until it's too late." },
              { icon: <AlertTriangle size={18}/>, title: "Late Clashes", desc: "MEP clashes caught during fit-out. Rework multiplies." },
              { icon: <FileBox size={18}/>, title: "Manual As-Builts", desc: "Updating BIM models takes weeks. Handover is incomplete." },
              { icon: <Users size={18}/>, title: "Coordination Friction", desc: "No single source of visual truth for what's actually installed." }
            ].map((item, i) => (
              <div key={i} className="p-5 lg:p-8 rounded-[20px] lg:rounded-[24px] bg-white border border-gray-100 shadow-sm flex flex-col">
                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 mb-4 border border-gray-100">
                  {item.icon}
                </div>
                <h4 className="text-[13px] lg:text-lg font-black text-black mb-2 tracking-tight leading-tight">{item.title}</h4>
                <p className="text-[11px] lg:text-sm text-gray-500 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          BANGER SECTION - INTERACTIVE BIM MODULE
      ════════════════════════════════════════ */}
      <BIMValidationModule />

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
               { role: "Facility Mgrs", desc: "Receive as-built models that match reality perfectly.", icon: <RefreshCw size={18}/> },
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