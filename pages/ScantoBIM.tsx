import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../types";
import React, { useState, useEffect } from "react";
import { 
  Check, Globe, Layers, Mail, Twitter, Linkedin, Youtube, Instagram, PenTool, Scan, Crosshair, ArrowDown, 
  MapPin, MoveUpRight, Sparkles, Box, AlertTriangle, FileBox, Users, Target,
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


// ─── SUB-COMPONENT: PREMIUM LIGHT-MODE DUAL-TRACK ──────────

export const BIMValidationModule = () => {
  return (
    <section className="bg-[#FBFBFD] py-20 lg:py-32 relative overflow-hidden font-sans border-b border-gray-100">
      
      {/* Custom CSS Animations for the premium visuals */}
      <style>{`
        @keyframes scan-sweep {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(300%); opacity: 0; }
        }
        @keyframes float-wireframe {
          0%, 100% { transform: rotateX(60deg) rotateZ(45deg) translateZ(20px); }
          50% { transform: rotateX(60deg) rotateZ(45deg) translateZ(40px); }
        }
        @keyframes model-slide-in {
          0% { transform: perspective(1000px) rotateX(60deg) rotateZ(-30deg) translate(-20%, 0); opacity: 0; }
          100% { transform: perspective(1000px) rotateX(60deg) rotateZ(-30deg) translate(0%, 0%); opacity: 1; }
        }
        .group:hover .animate-model-slide-in {
          animation: model-slide-in 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
        }
      `}</style>

      {/* Subtle Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
           style={{
             backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
             backgroundSize: "64px 64px",
             maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
             WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)"
           }} 
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <h2 className="text-[clamp(40px,5vw,64px)] font-black tracking-tighter leading-[1.1] text-[#1D1D1F] mb-8">
            A full-stack BIM practice. <br className="hidden md:block"/>
            <span className="relative inline-block mt-3 mx-2">
              <span className="absolute inset-y-1 lg:inset-y-2 -inset-x-3 bg-[#FFF200] rounded-xl shadow-sm transform -skew-x-2"></span>
              <span className="relative text-black px-2">From concept to reality.</span>
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto mt-6">
            We don't just draft models. We reverse-engineer your physical site into a digital twin, or build your 2D designs into clash-free 3D reality.
          </p>
        </div>

        {/* 2x2 GRID FLOW */}
        <div className="grid lg:grid-cols-2 gap-x-8 gap-y-12 lg:gap-y-0 max-w-6xl mx-auto">
          
          {/* ════════════ TRACK 1: THE REALITY TRACK ════════════ */}
          <div className="flex flex-col relative">
            
            {/* Box 1: Scan to BIM */}
            <div className="bg-white rounded-[32px] overflow-hidden border border-gray-200 shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] hover:border-gray-300 transition-all duration-500 group flex flex-col h-full">
              <div className="h-[260px] lg:h-[300px] w-full overflow-hidden relative bg-gray-100">
                 <img src="https://ik.imagekit.io/saxybrgkp/MME/new.png?updatedAt=1773740167867" alt="Scan to BIM" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 lg:p-10 relative flex-grow flex flex-col justify-center">
                 <div className="absolute -top-8 right-8 w-16 h-16 bg-[#FFF200] rounded-[18px] flex items-center justify-center shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-300">
                    <Scan size={28} className="text-black" />
                 </div>
                 
                 <span className="text-gray-500 bg-gray-100 px-3.5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest inline-block w-fit mb-5">Reverse Engineering</span>
                 <h3 className="text-3xl font-black text-[#1D1D1F] tracking-tight mb-3">Scan to BIM.</h3>
                 <p className="text-gray-500 font-medium leading-relaxed text-[15px]">
                    Convert raw laser scans and drone point clouds into millimeter-accurate As-Built BIM models.
                 </p>
              </div>
            </div>

            {/* MINIMAL Down Arrow Connector */}
            <div className="flex justify-center py-8 relative z-20">
              {/* Solid Grey Line */}
              <div className="absolute top-0 bottom-0 w-[2px] bg-gray-200 -z-10"></div>
              {/* Integrated minimal arrow matching the background */}
              <div className="bg-[#FBFBFD] py-2 px-1">
                <ArrowDown size={18} className="text-gray-400" strokeWidth={3} />
              </div>
            </div>

            {/* Box 2: BIM on Reality (PREMIUM ANIMATED VISUAL) */}
            <div className="bg-white rounded-[32px] overflow-hidden border border-gray-200 shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] hover:border-gray-300 transition-all duration-500 group flex flex-col h-full">
              
              {/* ANIMATED CANVAS */}
              <div className="h-[260px] lg:h-[300px] w-full overflow-hidden relative bg-[#0A0A0A] flex items-center justify-center">
                 {/* 3D Perspective Grid */}
                 <div className="absolute inset-0" style={{ 
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', 
                    backgroundSize: '30px 30px', 
                    transform: 'perspective(600px) rotateX(60deg) scale(2)', 
                    transformOrigin: 'top center' 
                 }}></div>
                 
                 {/* Solid Base (Representing Reality) */}
                 <div className="absolute w-40 h-40 bg-gray-800 border border-gray-600 shadow-[0_20px_50px_rgba(0,0,0,0.8)]" style={{ transform: 'rotateX(60deg) rotateZ(45deg)' }}></div>
                 
                 {/* Floating Wireframe (Representing BIM) */}
                 <div className="absolute w-40 h-40 border-2 border-[#FFF200] border-dashed bg-[#FFF200]/5 backdrop-blur-sm" style={{ animation: 'float-wireframe 4s ease-in-out infinite' }}></div>
                 
                 {/* Scanning Laser Line */}
                 <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-[#FFF200]/10 to-[#FFF200]/60 border-b-2 border-[#FFF200] z-20" style={{ animation: 'scan-sweep 3s linear infinite' }}></div>
              </div>

              <div className="p-8 lg:p-10 relative flex-grow flex flex-col justify-center">
                 <div className="absolute -top-8 right-8 w-16 h-16 bg-[#FFF200] rounded-[18px] flex items-center justify-center shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-300">
                    <Layers size={28} className="text-black" />
                 </div>
                 
                 <span className="text-black bg-gray-100 px-3.5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest inline-block w-fit mb-5">Validation</span>
                 <h3 className="text-3xl font-black text-[#1D1D1F] tracking-tight mb-3">BIM on Reality.</h3>
                 <p className="text-gray-500 font-medium leading-relaxed text-[15px]">
                    Overlay 3D models directly onto live site captures to instantly track and validate structural deviations.
                 </p>
              </div>
            </div>

          </div>

          {/* ════════════ TRACK 2: THE DESIGN TRACK ════════════ */}
          <div className="flex flex-col relative">
            
            {/* Box 3: Design to BIM */}
            <div className="bg-white rounded-[32px] overflow-hidden border border-gray-200 shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] hover:border-gray-300 transition-all duration-500 group flex flex-col h-full">
              <div className="h-[260px] lg:h-[300px] w-full overflow-hidden relative bg-gray-100">
                 <img src="https://ik.imagekit.io/saxybrgkp/MME/new%202.png?updatedAt=1773740167826" alt="Design to BIM" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 lg:p-10 relative flex-grow flex flex-col justify-center">
                 <div className="absolute -top-8 right-8 w-16 h-16 bg-[#FFF200] rounded-[18px] flex items-center justify-center shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-300">
                    <PenTool size={28} className="text-black" />
                 </div>
                 
                 <span className="text-gray-500 bg-gray-100 px-3.5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest inline-block w-fit mb-5">Creation</span>
                 <h3 className="text-3xl font-black text-[#1D1D1F] tracking-tight mb-3">Design to BIM.</h3>
                 <p className="text-gray-500 font-medium leading-relaxed text-[15px]">
                    Transform 2D CAD and conceptual designs into intelligent, fully-coordinated 3D BIM models.
                 </p>
              </div>
            </div>

            {/* MINIMAL Down Arrow Connector */}
            <div className="flex justify-center py-8 relative z-20">
              {/* Solid Grey Line */}
              <div className="absolute top-0 bottom-0 w-[2px] bg-gray-200 -z-10"></div>
              {/* Integrated minimal arrow matching the background */}
              <div className="bg-[#FBFBFD] py-2 px-1">
                <ArrowDown size={18} className="text-gray-400" strokeWidth={3} />
              </div>
            </div>

            {/* Box 4: Clash Detection (PREMIUM ANIMATED VISUAL) */}
            <div className="bg-white rounded-[32px] overflow-hidden border border-gray-200 shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] hover:border-gray-300 transition-all duration-500 group flex flex-col h-full">
              
              {/* ANIMATED CANVAS */}
              <div className="h-[260px] lg:h-[300px] w-full overflow-hidden relative bg-black flex flex-col items-center justify-center group-hover:bg-[#0A0A0A] transition-all duration-500">
                 
                 {/* Faint Internal Grid */}
                 <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(to right, #666 1px, transparent 1px), linear-gradient(to bottom, #666 1px, transparent 1px)", backgroundSize: "40px 40px", transform: "perspective(600px) rotateX(60deg) scale(2)" }}></div>

                 {/* Structural Layer: Grey detailed I-beams on Grid */}
                 <div className="absolute w-[80%] h-[40%] bg-gray-900 shadow-inner rounded-xl" style={{ transform: "perspective(1000px) rotateX(60deg) rotateZ(-30deg) translate(-20%, -10%)" }}>
                    <div className="absolute top-[20%] left-0 w-full h-[3px] bg-gray-700"></div>
                    <div className="absolute bottom-[20%] left-0 w-full h-[3px] bg-gray-700"></div>
                 </div>

                 {/* MEP Layer (Animated): Bright light-blue piping systems */}
                 <div className="absolute w-[85%] h-[45%] flex items-center justify-center animate-model-slide-in opacity-0" style={{ transform: "perspective(1000px) rotateX(60deg) rotateZ(-30deg)" }}>
                    {/* Primary duct */}
                    <div className="absolute w-[120%] h-[20%] bg-blue-600 rounded-lg group-hover:scale-110 transition-transform duration-700">
                       <div className="w-[95%] h-[4px] bg-blue-400 opacity-50 absolute top-[10%] left-[2.5%]"></div>
                    </div>
                    {/* Secondary system */}
                    <div className="absolute h-[110%] w-[15%] bg-blue-700 rounded-lg top-[-5%] left-[60%]"></div>
                    {/* Minor branch */}
                    <div className="absolute w-[30%] h-[6%] bg-blue-800 rounded-md top-[60%] left-[80%]"></div>
                 </div>

                 {/* Clash Point Interaction Layer */}
                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
                    <div className="absolute w-12 h-12 bg-red-600 rounded-full blur-[20px] opacity-0 group-hover:opacity-90 group-hover:animate-pulse transition-opacity duration-300"></div>
                    <div className="absolute w-20 h-20 border-[3px] border-red-500/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                       <div className="w-[4px] h-[4px] bg-red-500 rounded-full shadow-[0_0_15px_#EF4444] animate-ping"></div>
                    </div>
                    <div className="absolute text-red-500 group-hover:scale-125 transition-transform duration-300 opacity-0 group-hover:opacity-100 scale-90">
                       <Target size={60} strokeWidth={1} />
                    </div>
                 </div>

                 {/* Red Text Tag */}
                 <div className="absolute bottom-5 right-5 flex items-center gap-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-500/20 bg-red-500/10 text-red-500 text-[10px] font-black uppercase tracking-widest">
                       <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_#EF4444]"></div>
                       CLASH DETECTED
                    </div>
                 </div>
              </div>

              <div className="p-8 lg:p-10 relative flex-grow flex flex-col justify-center">
                 <div className="absolute -top-8 right-8 w-16 h-16 bg-[#FFF200] rounded-[18px] flex items-center justify-center shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-300">
                    <Target size={28} className="text-black" />
                 </div>
                 
                 <span className="text-black bg-gray-100 px-3.5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest inline-block w-fit mb-5">Pre-Construction</span>
                 <h3 className="text-3xl font-black text-[#1D1D1F] tracking-tight mb-3">Clash Detection.</h3>
                 <p className="text-gray-500 font-medium leading-relaxed text-[15px]">
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
    <div className="bg-white text-black font-sans selection:bg-[#FFF200] selection:text-black">
      
      {/* ════════════════════════════════════════
          HERO - SCAN TO BIM
      ════════════════════════════════════════ */}
      <section className="pt-24 md:pt-32 lg:pt-44 pb-12 lg:pb-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ 
               backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", 
               backgroundSize: "80px 80px",
               maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
               WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)"
             }} />
             
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-12 lg:mb-16 items-center">
            
            <div className="lg:col-span-7 flex flex-col">
              <h1 className="text-[11vw] md:text-[70px] lg:text-[90px] font-black leading-[0.85] tracking-tighter text-black m-0 p-0 mb-6 lg:mb-8">
                Scan to BIM
              </h1>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] lg:text-[14px] font-bold text-gray-500 tracking-wide">
                <span className="flex items-center gap-1.5"><Check size={16} strokeWidth={4} className="text-[#FFF200]"/> Point Cloud to Revit</span>
                <span className="w-1.5 h-1.5 bg-gray-300 rounded-full hidden sm:block"></span>
                <span className="flex items-center gap-1.5"><Check size={16} strokeWidth={4} className="text-[#FFF200]"/> Deviation Heatmaps</span>
                <span className="w-1.5 h-1.5 bg-gray-300 rounded-full hidden md:block"></span>
                <span className="flex items-center gap-1.5"><Check size={16} strokeWidth={4} className="text-[#FFF200]"/> Digital As-Builts</span>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col">
              <h2 className="text-2xl lg:text-[28px] font-medium leading-[1.3] text-gray-800 tracking-tight">
                Your BIM models, validated against actual site conditions. Bridge design intent with execution reality.
              </h2>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="w-full aspect-[4/3] md:aspect-[2.2/1] rounded-[32px] lg:rounded-[40px] overflow-hidden bg-gray-100 relative shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-200 group">
            <img 
              src="https://ik.imagekit.io/saxybrgkp/MME/BIM/Website%20Images%20Land%20Survey.png" 
              alt="BIM Overlay Visualization" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[20s] ease-out"
            />
            {/* High-tech overlay simulation */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-[#FFF200]/5 mix-blend-overlay"></div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          PROBLEM VS SOLUTION
      ════════════════════════════════════════ */}
      <section className="bg-white py-24 relative z-10 border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
             <h3 className="text-[clamp(32px,3vw,42px)] font-black tracking-tighter text-black leading-tight">
               BIM Models Represent Design Intent.
               <span className="relative inline-block mt-2 mx-2">
                <span className="absolute inset-y-1 -inset-x-3 bg-[#FFF200] rounded-lg shadow-sm transform -skew-x-2"></span>
                <span className="relative text-black"> Execution Doesn't Always Follow.</span>
              </span>
             </h3>
             <p className="text-lg text-gray-500 font-medium mt-6">
                Coordination meetings assume the model reflects reality. Contractors reference outdated versions. Clashes get discovered onsite—when they're expensive to fix.
             </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Box size={20}/>, title: "Design vs. Reality Gap", desc: "What was modeled isn't always what was built. Deviations accumulate unnoticed until it's too late." },
              { icon: <AlertTriangle size={20}/>, title: "Late Clash Detection", desc: "MEP clashes caught during fit-out instead of design phase. Rework costs and schedules multiply." },
              { icon: <FileBox size={20}/>, title: "Manual As-Builts", desc: "Updating BIM models post-construction takes weeks. Final handover models are often incomplete." },
              { icon: <Users size={20}/>, title: "Coordination Friction", desc: "Trades reference different model versions. No single source of visual truth for what's actually installed." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[24px] bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#FFF200] group-hover:text-black transition-all mb-6">
                  {item.icon}
                </div>
                <h4 className="text-lg font-black text-black mb-3 tracking-tight">{item.title}</h4>
                <p className="text-sm text-gray-500 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          THE "BANGER" SECTION - INTERACTIVE BIM MODULE
      ════════════════════════════════════════ */}
      <BIMValidationModule />

{/* ════════════════════════════════════════
          METRICS / ROI BANNER (WHITE THEME)
      ════════════════════════════════════════ */}
      <section className="bg-white py-20 relative overflow-hidden font-sans">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-[clamp(32px,3vw,42px)] font-black tracking-tighter leading-[1.1] text-black">
              When Design and Execution Stay Aligned,<br/>
              <span className="relative inline-block mt-2">
                <span className="absolute inset-y-1 -inset-x-2 bg-[#FFF200] rounded-md shadow-sm transform -skew-x-2"></span>
                <span className="relative text-black">Coordination Becomes Proactive.</span>
              </span>
            </h3>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { value: '±5mm', label: 'Scan-to-BIM Accuracy' },
               { value: '70%', label: 'Faster Clash Resolution' },
               { value: '85%', label: 'Reduction in Rework' },
               { value: '100%', label: 'Accurate As-Built Models' }
             ].map((metric, i) => (
               <div key={i} className="bg-white border border-gray-100 rounded-[24px] p-8 text-center shadow-sm hover:shadow-xl hover:border-[#FFF200] hover:-translate-y-1 transition-all duration-300 group">
                  <div className="text-4xl lg:text-5xl font-black text-black tracking-tighter mb-3 transition-transform duration-500">{metric.value}</div>
                  <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{metric.label}</div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          STAKEHOLDER GRID
      ════════════════════════════════════════ */}
      <section className="bg-white py-24 relative overflow-hidden font-sans border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
          {/* Light Mode Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
           style={{
             backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
             backgroundSize: "60px 60px",
             maskImage: "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
             WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)"
           }} />
          {/* NEW COPY HEADER */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[clamp(32px,4vw,48px)] font-black tracking-tighter leading-[1.1] text-black mb-6">
              A Single Source of Truth.<br />
              <span className="relative inline-block mt-2">
              <span className="absolute inset-y-1 -inset-x-2 bg-[#FFF200] rounded-md shadow-sm transform -skew-x-2"></span>
              <span className="relative text-black">For Every Stakeholder.</span>
            </span>
            </h2>
            <p className="text-lg text-gray-500 font-medium leading-relaxed">
              From design to handover, ensure every team operates from the same validated reality. Eliminate friction, prevent compounding errors, and build with absolute certainty.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             {[
               { role: "Design Teams", desc: "Validate that coordination efforts translated to execution. See which design decisions held up onsite.", icon: <LayoutTemplate size={24}/> },
               { role: "General Contractors", desc: "Track progress against model elements. Prove execution matched approved designs for billing and compliance.", icon: <HardHat size={24}/> },
               { role: "MEP Contractors", desc: "Install with confidence. Know structural elements are where the model says they are—no surprises.", icon: <Activity size={24}/> },
               { role: "Quality Teams", desc: "Validate dimensional tolerances without manual tape measurements. Scan once, verify everything.", icon: <Ruler size={24}/> },
               { role: "Facility Managers", desc: "Receive as-built models that match reality perfectly. Maintenance, renovations, and operations start with accurate data.", icon: <RefreshCw size={24}/> },
               { role: "Clients & Owners", desc: "Accept handover with absolute confidence. Know unequivocally that what was designed is what was delivered.", icon: <ShieldCheck size={24}/> }
             ].map((persona, i) => (
               <div key={i} className="p-8 rounded-[24px] bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#FFF200] transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-black mb-6 group-hover:bg-[#FFF200] transition-colors">
                    {persona.icon}
                  </div>
                  <h4 className="text-black font-black text-lg tracking-tight mb-3">{persona.role}</h4>
                  <p className="text-gray-500 font-medium text-sm leading-relaxed">{persona.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          INTEGRATIONS / WORKFLOW
      ════════════════════════════════════════ */}
      <section 
        className="bg-white py-16 lg:py-24 relative overflow-hidden font-sans"
        style={{
          maskImage: "linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)"
        }}
      >
        {/* Animated Custom Styles */}
        <style>{`
          @keyframes float-slow {
            0%, 100% { transform: translateY(0px) rotate(-3deg); }
            50% { transform: translateY(-12px) rotate(2deg); }
          }
          @keyframes float-med {
            0%, 100% { transform: translateY(0px) rotate(5deg); }
            50% { transform: translateY(-8px) rotate(-2deg); }
          }
          @keyframes scan-sweep {
            0% { top: -10%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 110%; opacity: 0; }
          }
          .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
          .animate-float-med { animation: float-med 5s ease-in-out infinite; }
          .animate-scanner { animation: scan-sweep 4s linear infinite; }
        `}</style>

        {/* Light Mode Grid Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
             style={{
               backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
               backgroundSize: "60px 60px",
               maskImage: "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
               WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)"
             }} />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
           
           {/* FLEX-STRETCH: Ensures Left and Right are exactly the same height */}
           <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
              
              {/* ════════════════════════════════════════
                  LEFT: COPY & TABS (45% Width)
              ════════════════════════════════════════ */}
              <div className="lg:w-[45%] flex flex-col justify-between py-2">
                 
                 <div className="mb-8">
                   <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-[9px] font-black uppercase tracking-[0.2em] text-gray-500 mb-5 shadow-sm">
                     <Layers size={12} className="text-[#D4C900]" /> Ecosystem Connected
                   </div>
                   <h2 className="text-[clamp(32px,3.5vw,46px)] font-black tracking-tighter leading-[1.05] text-black mb-5">
                     Works With Your <br />
                     <span className="relative inline-block mt-2">
                        <span className="absolute inset-y-1 -inset-x-2 bg-[#FFF200] rounded-md shadow-sm transform -skew-x-2"></span>
                        <span className="relative text-black">BIM Workflow.</span>
                      </span>
                   </h2>
                   <p className="text-sm text-gray-500 font-medium leading-relaxed max-w-[500px]">
                     YelloSKYE integrates seamlessly with the modeling tools and coordination platforms you already rely on. No need to abandon your existing processes.
                   </p>
                 </div>

                 {/* Compacted Tabs for space */}
                 <div className="space-y-3">
                    {[
                      "Import/export to Revit, Navisworks, ArchiCAD",
                      "Open BIM workflows via IFC compatibility",
                      "Point cloud registration to model coordinates",
                      "Procore, BIM 360, & ACC integrations",
                      "Custom APIs for proprietary BIM platforms"
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center gap-4 bg-white px-4 py-3.5 rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:border-[#FFF200] hover:-translate-y-0.5 transition-all duration-300">
                         <div className="w-5 h-5 rounded-full bg-[#FFF200]/20 flex items-center justify-center shrink-0">
                           <Check size={12} className="text-black" strokeWidth={4} />
                         </div>
                         <span className="text-[13px] font-bold text-gray-800 tracking-tight">{feature}</span>
                      </div>
                    ))}
                 </div>
              </div>

              {/* ════════════════════════════════════════
                  RIGHT: ANIMATED VISUAL (55% Width, Wider)
              ════════════════════════════════════════ */}
              <div className="lg:w-[55%] relative flex min-h-[450px]">
                 
                 {/* Flex-1 forces it to stretch to the exact height of the left column */}
                 <div className="flex-1 w-full rounded-[40px] bg-white border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.06)] flex flex-col justify-center items-center relative overflow-hidden group">
                    
                    {/* Animated Scanning Line */}
                    <div className="absolute left-0 right-0 h-32 bg-gradient-to-b from-transparent via-[#FFF200]/10 to-[#FFF200]/40 border-b-2 border-[#FFF200] animate-scanner z-10 pointer-events-none"></div>

                    {/* Central Hub Rings */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-gray-100/50 flex items-center justify-center">
                      <div className="w-[200px] h-[200px] rounded-full border border-gray-100 flex items-center justify-center relative">
                        {/* Connecting dashed lines */}
                        <svg className="absolute inset-0 w-full h-full animate-[spin_60s_linear_infinite] opacity-30" viewBox="0 0 200 200">
                          <circle cx="100" cy="100" r="99" fill="none" stroke="#D4C900" strokeWidth="1" strokeDasharray="4 8" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Center YelloSKYE Hub Node */}
                    <div className="relative z-20 w-24 h-24 bg-black rounded-[24px] shadow-2xl border border-gray-800 flex flex-col items-center justify-center group-hover:scale-110 transition-transform duration-700">
                       <div className="absolute inset-0 bg-[#FFF200]/20 rounded-[24px] blur-xl animate-pulse"></div>
                       <Layers size={32} className="text-[#FFF200] mb-1 relative z-10" />
                    </div>
                    
                    {/* Floating Integration Nodes */}
                    {/* Node 1: Revit */}
                    <div className="absolute top-[20%] left-[15%] w-20 h-20 bg-white rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center justify-center font-black text-[11px] text-gray-400 animate-float-slow z-20">
                      REVIT
                    </div>
                    
                    {/* Node 2: Navisworks */}
                    <div className="absolute top-[25%] right-[15%] w-24 h-16 bg-white rounded-[16px] shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center justify-center font-black text-[11px] text-gray-400 animate-float-med" style={{ animationDelay: '1s' }}>
                      Navisworks
                    </div>

                    {/* Node 3: BIM 360 */}
                    <div className="absolute bottom-[25%] right-[20%] w-20 h-20 bg-white rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center justify-center font-black text-[11px] text-gray-400 animate-float-slow z-20" style={{ animationDelay: '2s' }}>
                      BIM 360
                    </div>

                    {/* Node 4: Procore */}
                    <div className="absolute bottom-[20%] left-[25%] w-24 h-16 bg-white rounded-[16px] shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center justify-center font-black text-[11px] text-gray-400 animate-float-med" style={{ animationDelay: '0.5s' }}>
                      PROCORE
                    </div>

                    {/* Background Graphic Watermark */}
                    <h3 className="absolute bottom-8 text-center w-full text-base font-black text-black-200 tracking-tighter z-0 pointer-events-none select-none">
                      Seamless Platform Integrations
                    </h3>

                 </div>
              </div>

           </div>
        </div>
      </section>
            
          </div>
        );
      };
    