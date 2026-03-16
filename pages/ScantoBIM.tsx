import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../types";
import React, { useState, useEffect } from "react";
import { 
  Check, Globe, Layers, Mail, Twitter, Linkedin, Youtube, Instagram, 
  MapPin, MoveUpRight, Sparkles, Box, AlertTriangle, FileBox, Users, 
  Ruler, LayoutTemplate, Activity, RefreshCw, Hexagon, HardHat, ShieldCheck,
  CheckCircle2, Cpu
} from "lucide-react";

// ─── DATA: BIM SHOWCASE ───────────────────────────────────────────────────

const BIM_FEATURES = [
  {
    id: 'overlay',
    title: 'BIM Overlay on Reality',
    desc: 'Superimpose your Revit, Navisworks, or IFC models directly onto high-fidelity point clouds and 360° visuals.',
    img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop',
    tag: 'Visual Verification'
  },
  {
    id: 'deviation',
    title: 'Deviation Analysis',
    desc: 'Automated heatmaps comparing BIM geometry against scan data. Instantly flag elements installed out of tolerance.',
    img: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=2000&auto=format&fit=crop',
    tag: 'Millimeter Accuracy'
  },
  {
    id: 'clash',
    title: 'Clash Detection',
    desc: 'Verify that modeled clashes were actually resolved onsite. Prevent compounding rework during MEP installation.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop',
    tag: 'Proactive Coordination'
  }
];

// ─── SUB-COMPONENT: INTERACTIVE BIM VALIDATION SHOWCASE (WHITE THEME) ──────────

const BIMValidationModule = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % BIM_FEATURES.length);
    }, 3000); // 3 second rotation
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      // REDUCED PADDING
      className="bg-white py-12 lg:py-16 relative overflow-hidden font-sans"
      style={{
        maskImage: "linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)"
      }}
    >
      {/* Light Mode Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
           style={{
             backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
             backgroundSize: "60px 60px",
             maskImage: "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
             WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)"
           }} />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* HEADER (Validation Pill Removed) */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-[clamp(32px,4vw,48px)] font-black tracking-tighter leading-[1.1] text-black mb-6">
            Reality Capture as your <br />
            <span className="relative inline-block mt-2">
              <span className="absolute inset-y-1 -inset-x-2 bg-[#FFF200] rounded-md shadow-sm transform -skew-x-2"></span>
              <span className="relative text-black">BIM Validation Engine.</span>
            </span>
          </h2>
          <p className="text-lg text-gray-500 font-medium leading-relaxed">
            Overlay federated models onto captured site data instantly. Validate execution against design, catch deviations early, and keep coordination aligned.
          </p>
        </div>

        {/* FLEX-STRETCH CONTAINER: Forces exact equal height for Left and Right */}
        <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-14">
          
          {/* LEFT: INTERACTIVE TABS (40% width) */}
          <div className="lg:w-[40%] flex flex-col justify-between space-y-4">
            {BIM_FEATURES.map((feature, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveIndex(idx)}
                  // INACTIVE STATE: Black outline & white background. ACTIVE: Black background.
                  className={`text-left p-6 pl-8 rounded-[24px] border-[0.5px] transition-all duration-500 relative overflow-hidden flex-1 flex flex-col justify-center ${
                    isActive 
                    ? 'bg-black border-black/60 shadow-[0_20px_40px_rgba(0,0,0,0.2)] translate-x-2' 
                    : 'bg-white border-black hover:bg-gray-50 shadow-sm'
                  }`}
                >
                  {/* YELLOW STRIP: Now visible on both active and inactive states */}
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#FFF200]"></div>
                  
                  <div className={`text-[10px] font-black uppercase tracking-widest mb-2 transition-colors ${isActive ? 'text-[#FFF200]' : 'text-gray-500'}`}>
                    {feature.tag}
                  </div>
                  <h4 className={`text-xl font-black tracking-tight mb-2 transition-colors ${isActive ? 'text-white' : 'text-black'}`}>
                    {feature.title}
                  </h4>
                  <p className={`text-sm font-medium leading-relaxed transition-colors ${isActive ? 'text-gray-400' : 'text-gray-600'}`}>
                    {feature.desc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* RIGHT: THE SCREEN MOCKUP (60% width) */}
          <div className="lg:w-[60%] relative flex">
            
            {/* Screen Hardware Frame - flex-col allows it to stretch */}
            <div className="relative z-20 bg-[#080808] rounded-[32px] p-2.5 shadow-[0_40px_100px_rgba(0,0,0,0.2)] border-[2px] border-[#222] w-full flex flex-col">
              
              {/* Screen Container - flex-1 fills the height perfectly */}
              <div className="relative flex-1 w-full rounded-[24px] overflow-hidden bg-black shadow-inner min-h-[350px]">
                
                {BIM_FEATURES.map((feature, idx) => (
                  <div 
                    key={feature.id}
                    className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      activeIndex === idx ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'
                    }`}
                  >
                    <img 
                      src={feature.img} 
                      className="w-full h-full object-cover brightness-95" 
                      alt={feature.title} 
                    />
                    {/* Simulated "Scan-to-BIM" tech overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#FFF200]/10 to-transparent mix-blend-overlay"></div>
                    
                    {/* UI HUD Elements inside screen */}
                    <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 flex items-center gap-3 shadow-lg">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-white text-[10px] font-black uppercase tracking-widest mt-0.5">Model Aligned</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#FFF200]/5 blur-[100px] rounded-full pointer-events-none -z-10"></div>
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
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2500&auto=format&fit=crop" 
              alt="BIM Overlay Visualization" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[20s] ease-out"
            />
            {/* High-tech overlay simulation */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-[#FFF200]/5 mix-blend-overlay"></div>

            {/* Top Status Pill */}
            <div className="absolute top-6 left-6 lg:top-8 lg:left-8 bg-white/80 backdrop-blur-2xl px-5 py-3 rounded-2xl flex items-center gap-3 shadow-lg border border-white">
               <div className="flex gap-1 items-center h-4">
                  <Cpu size={16} className="text-black animate-pulse" />
               </div>
               <span className="text-[10px] font-black uppercase tracking-widest text-black mt-0.5">BIM Overlay Active</span>
            </div>

            {/* Bottom Data Pill */}
            <div className="absolute bottom-6 right-6 lg:bottom-8 lg:right-8 bg-black/80 backdrop-blur-2xl px-6 py-4 rounded-2xl border border-white/10 flex items-center gap-6 shadow-2xl">
               <div className="text-right">
                  <div className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-1">Accuracy</div>
                  <div className="text-[#FFF200] font-mono text-base font-bold">±5mm</div>
               </div>
               <div className="w-[1px] h-8 bg-white/20"></div>
               <div className="text-right">
                  <div className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-1">Format</div>
                  <div className="text-white font-mono text-base font-bold">.RVT / .IFC</div>
               </div>
            </div>
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
                    <h3 className="absolute bottom-8 text-center w-full text-base font-black text-gray-200 tracking-tighter z-0 pointer-events-none select-none">
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
    