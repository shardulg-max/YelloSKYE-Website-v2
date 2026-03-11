import React, { useState, useEffect } from "react";
import { 
  LayoutDashboard, FileCheck, Radar, Users, Check, Scan, History, Video, 
  Rotate3D, Satellite, Layers, BarChart3, Twitter, Linkedin, Youtube, Play, ArrowRight,
  Instagram, MapPin, Mail, Globe, Sparkles, AlertTriangle, Clock, Search, Bell
} from "lucide-react";

// ─── SECTION OBSERVER ────────────────────────────────────────────────────────
const SectionObserver = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".illusion");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.remove("opacity-0", "translate-y-8");
        });
      },
      { threshold: 0.2 }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
};

// ═════════════════════════════════════════════════════════════════════════
// COMPONENT: Responsive Hero Image Carousel
// ═════════════════════════════════════════════════════════════════════════
const HeroImageCarousel = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const images = [
    "https://i.ibb.co/HDGVjy6S/Screenshot-2026-02-19-at-22-12-29.png",
    "https://i.ibb.co/jcSkjrn/Website-Visuals-Presentation-8.png",
    "https://i.ibb.co/bMN7Kzv0/Website-Visuals-Presentation-7.png",
    "https://i.ibb.co/TMWfF9xV/Website-Visuals-Presentation-9.png"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    // Mobile: Full width, bottom fade. Desktop: Negative margins, right/bottom fade.
    <div className="absolute inset-0 lg:-left-12 lg:-bottom-16 lg:-top-16 lg:-right-16 lg:p-16 z-20 responsive-hero-mask">
      <div className="w-full h-full responsive-hero-mask-inner">
        <div className="relative w-full h-full rounded-2xl lg:rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.12)] border border-gray-200/80 bg-white overflow-hidden">
          {images.map((src, i) => (
            <div
              key={i}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${i === activeIdx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              <img
                src={src}
                alt={`YelloSKYE Interface ${i + 1}`}
                className="w-full h-full object-cover object-left-top"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ─── LIFECYCLE LINE PILL COMPONENT (Desktop) ───────────────────────────
const LifecycleLinePill = ({ title, start, end, imageUrl, description }) => {
  const leftPercent = ((start - 1) / 6) * 100;
  const widthPercent = ((end - start + 1) / 6) * 100;

  return (
    <div 
      className="relative group z-10 hover:z-50 cursor-pointer hidden lg:block"
      style={{ marginLeft: `${leftPercent}%`, width: `${widthPercent}%` }}
    >
      <div className="w-full bg-[#FFF200] border-[1.5px] border-black/20 text-black font-black py-4 px-6 rounded-full group-hover:bg-white group-hover:border-black transition-all duration-300 shadow-sm text-center text-[13px] relative flex justify-center items-center">
        {title}
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-full pb-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 w-[340px]">
        <div className="bg-[#111] rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.4)] border border-gray-800 overflow-hidden transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <div className="w-full h-32 bg-gray-900 relative">
            <img src={imageUrl} alt={title} className="w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent"></div>
          </div>
          <div className="p-5">
            <h4 className="font-black text-white text-base mb-1.5 leading-tight">{title}</h4>
            <p className="text-gray-400 text-xs font-medium mb-5 leading-relaxed">{description}</p>
            <button className="w-full py-3 bg-[#FFF200] text-black hover:bg-white text-[11px] font-black uppercase tracking-[0.15em] rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md">
              Explore Service <Check size={12} strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


// ─── HOME COMPONENT ─────────────────────────────────────────────────────────────
export const MobileHome = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonialCount = 3; 

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonialCount);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    // overflow-x-hidden ensures mobile screens don't scroll horizontally due to negative margins
    <div className="bg-white selection:bg-[#FFF200] selection:text-black font-sans overflow-x-hidden">
      
      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 24s linear infinite; }
        
        /* Mobile-First Masking Strategy */
        .responsive-hero-mask {
           mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
           -webkit-mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
        }
        .responsive-hero-mask-inner {
           mask-image: none;
           -webkit-mask-image: none;
        }
        
        @media (min-width: 1024px) {
           .responsive-hero-mask {
             mask-image: linear-gradient(to right, black 80%, transparent 92%);
             -webkit-mask-image: linear-gradient(to right, black 80%, transparent 92%);
           }
           .responsive-hero-mask-inner {
             mask-image: linear-gradient(to top, transparent 0%, black 20%);
             -webkit-mask-image: linear-gradient(to top, transparent 0%, black 20%);
           }
        }

        .marquee-mask {
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        .fade-grid-top {
          mask-image: linear-gradient(to top, black 80%, transparent 100%);
          -webkit-mask-image: linear-gradient(to top, black 80%, transparent 100%);
        }
        /* Dashboard Animation Styles */
        @keyframes scan-beam { 0%, 100% { transform: translateX(-45px); } 50% { transform: translateX(45px); } }
        @keyframes drone-flight { 0%, 100% { transform: translateX(-45px) translateY(0px) rotate(-5deg); } 50% { transform: translateX(45px) translateY(-5px) rotate(5deg); } }
        @keyframes cam-pan { 0%, 100% { transform: rotate(-25deg); } 50% { transform: rotate(25deg); } }
        @keyframes sat-orbit { 0%, 100% { transform: translateX(-50px) rotate(-10deg); } 50% { transform: translateX(50px) rotate(10deg); } }
        @keyframes nodepulse { 0% { box-shadow: 0 0 0 0 rgba(255, 242, 0, 0.7); } 70% { box-shadow: 0 0 0 20px rgba(255, 242, 0, 0); } 100% { box-shadow: 0 0 0 0 rgba(255, 242, 0, 0); } }
        @keyframes lineflow { 0% { background-position: 0% 50%; } 100% { background-position: 100% 50%; } }
        @keyframes compress-base { 0%, 10% { transform: translate(-40px, 50px) rotate(-15deg); opacity: 0.6; } 25%, 80% { transform: translate(0px, 0px) rotate(0deg); opacity: 1; } 90%, 100% { transform: translate(-40px, 50px) rotate(-15deg); opacity: 0.6; } }
        @keyframes compress-top { 0%, 10% { transform: translate(40px, -50px) rotate(15deg); opacity: 0.6; } 25%, 80% { transform: translate(0px, 0px) rotate(0deg); opacity: 1; } 90%, 100% { transform: translate(40px, -50px) rotate(15deg); opacity: 0.6; } }
        @keyframes compress-mid { 0%, 10% { transform: scale(1.2); opacity: 0; } 25%, 80% { transform: scale(1); opacity: 1; } 90%, 100% { transform: scale(1.2); opacity: 0; } }
        @keyframes intelligence-glow { 0%, 20% { opacity: 0; transform: scale(0.5); } 25% { opacity: 1; transform: scale(1.2); } 30%, 80% { opacity: 0.7; transform: scale(1); } 85%, 100% { opacity: 0; transform: scale(0.5); } }
        @keyframes insight-badge-pop { 0%, 35% { transform: scale(0.8) translateY(10px); opacity: 0; } 40%, 80% { transform: scale(1) translateY(0); opacity: 1; } 85%, 100% { transform: scale(0.8) translateY(10px); opacity: 0; } }
        @keyframes data-pulse-flow { 0% { stroke-dashoffset: 40; opacity: 0; } 20% { opacity: 1; } 100% { stroke-dashoffset: 0; opacity: 0; } }
      `}</style>
      
      <SectionObserver />

      {/* ====================== HERO ====================== */}
      <section className="bg-white pt-24 md:pt-32 lg:pt-44 pb-12 lg:pb-20 overflow-hidden relative z-10">
        
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
              style={{ backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
        
        {/* CHANGED: gap-12 is now gap-6 for mobile to halve the vertical space between text and image */}
        <div className="max-w-[1450px] mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
          
          <div className="lg:col-span-5 flex flex-col justify-center z-30 pt-4 md:pt-0 relative text-center sm:text-left items-center sm:items-start">
            
            <h1 className="text-[clamp(50px,11vw,120px)] font-black tracking-tighter leading-[0.95] lg:leading-[0.88] text-black mb-6 lg:mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000">
              Your Site,<br/>
              <span className="relative inline-block mt-2 lg:mt-3">
                <span className="absolute inset-y-0 lg:inset-y-1 -inset-x-2 md:-inset-x-3 bg-[#FFF200] rounded-xl lg:rounded-2xl shadow-sm transform -skew-x-2"></span>
                <span className="relative px-2 md:px-4 py-1 block">In Sight.</span>
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-[21px] text-gray-500 font-medium mb-8 max-w-[540px] leading-relaxed text-balance animate-in fade-in duration-1000 delay-200">
              We unify reality capture and AI to automatically track progress, eliminate costly blind spots, and give you absolute confidence in every decision.
            </p>

            {/* CTA Area - Set mb-0 on mobile so it sits completely flush with the grid gap */}
            <div className="flex flex-col w-full sm:w-auto sm:flex-row sm:items-center gap-4 mb-0 sm:mb-10 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
              <button className="w-full sm:w-auto px-8 py-4 lg:py-4 lg:px-10 rounded-2xl bg-black text-white font-black text-[15px] lg:text-[16px] shadow-[0_10px_30px_rgba(0,0,0,0.15)] flex items-center justify-center gap-3 active:scale-95 transition-all">
                Book a Free Demo
              </button>
              <div className="text-[11px] font-black text-gray-400 leading-relaxed border-l-2 border-gray-100 pl-4 hidden sm:block">
                Experience site intelligence.<br/>Built for how you actually work.
              </div>
            </div>

            {/* Micro-HUD Stats - HIDDEN ON MOBILE */}
            <div className="hidden sm:grid sm:grid-cols-2 gap-x-6 gap-y-4 pt-0 w-fit animate-in fade-in duration-1000 delay-500">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-[#FFF200] shadow-[0_0_8px_#FFF200] shrink-0"></div>
                <span className="font-mono text-[11px] text-gray-400 uppercase tracking-[0.15em] font-bold whitespace-nowrap">AI Auto-Progress Tracking</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-[#FFF200] shadow-[0_0_8px_#FFF200] shrink-0"></div>
                <span className="font-mono text-[11px] text-gray-400 uppercase tracking-[0.15em] font-bold whitespace-nowrap">Predictive Deviation Alerts</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-[#FFF200] shadow-[0_0_8px_#FFF200] shrink-0"></div>
                <span className="font-mono text-[11px] text-gray-400 uppercase tracking-[0.15em] font-bold whitespace-nowrap">Survey-Grade Precision</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-[#FFF200] shadow-[0_0_8px_#FFF200] shrink-0"></div>
                <span className="font-mono text-[11px] text-gray-400 uppercase tracking-[0.15em] font-bold whitespace-nowrap">Unified Visual Reality</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Visual Container */}
          {/* CHANGED: Removed the 'mt-4' for mobile so it doesn't push down further */}
          <div className="lg:col-span-7 relative flex items-center justify-center lg:justify-end lg:mt-0 w-full h-[320px] sm:h-[450px] lg:h-[550px] lg:-mr-32 xl:-mr-48 animate-in fade-in slide-in-from-bottom-12 lg:slide-in-from-right-12 duration-1000 ease-out">
            <div className="absolute top-[50%] right-[20%] -translate-y-1/2 w-[80%] h-[80%] bg-[#FFF200]/10 blur-[150px] rounded-full pointer-events-none mix-blend-multiply z-0 hidden lg:block"></div>
            <HeroImageCarousel />
          </div>
        </div>
      </section>

      {/* ====================== LOGOS ====================== */}
      <section className="py-8 border-gray-50 bg-white relative z-10">
        <p className="text-center text-[8px] font-black uppercase tracking-[0.5em] text-gray-400 mb-6 px-4">
          Providing intelligence to intelligent leaders
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

      {/* ====================== PURPOSE ====================== */}
      <section className="py-16 px-6 relative z-10 bg-white">
        <div className="mb-10">
          <h2 className="text-[36px] font-black tracking-tighter leading-[1.05] text-black">
            Eliminate doubt. <br />
            Operate with 
            <span className="relative inline-block whitespace-nowrap ml-2">
              <span className="absolute inset-y-1 -inset-x-2 bg-[#FFF200] rounded-lg"></span>
              <span className="relative text-black">trust.</span>
            </span>
          </h2>
          <p className="mt-6 text-base text-gray-600 leading-relaxed font-medium">
            Because decisions that shape the real world deserve more than assumptions, interpretations, and incomplete views.
          </p>
        </div>
        
        <div className="space-y-4">
          {[
            { title: "Independent Ground Truth", caption: "Captured directly as-built. Never interpreted, filtered, or assumed.", icon: <Scan size={24} /> },
            { title: "Consistent Over Time", caption: "The exact same visual reference, updated week after week.", icon: <History size={24} /> },
            { title: "Shared, Verifiable Reality", caption: "Decisions rely on hard visual evidence, not subjective explanations.", icon: <FileCheck size={24} /> },
            { title: "Trusted Across Teams", caption: "Unifying everyone from on-site managers to executive leadership.", icon: <Users size={24} /> },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-[20px] border border-gray-200 p-6 shadow-sm flex flex-col relative">
              <div className="w-14 h-14 rounded-[14px] bg-[#111] text-[#FFF200] flex items-center justify-center mb-5 shadow-md">
                 {item.icon}
              </div>
              <h3 className="text-xl font-black text-black mb-2 leading-tight">{item.title}</h3>
              <p className="text-[14px] text-gray-500 leading-relaxed font-medium">{item.caption}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ====================== THE INTELLIGENCE ENGINE ====================== */}
      <section className="relative bg-white pt-12 lg:pt-20 pb-24 lg:pb-40 overflow-hidden font-sans">
        
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-8">
          
          <div className="max-w-4xl mb-16 lg:mb-24 text-center mx-auto">
            <h2 className="text-[clamp(36px,5vw,64px)] font-black tracking-tighter leading-[1.05] text-black mb-4 sm:mb-6">
              From raw site reality to <br className="hidden sm:block" />
              <span className="relative inline-block mt-2">
                <span className="absolute inset-0 bg-[#FFF200] rounded-xl shadow-sm transform -skew-x-3"></span>
                <span className="relative px-3 sm:px-4 text-black">boardroom certainty.</span>
              </span>
            </h2>
            <p className="text-base sm:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto font-medium px-2">
              We process millions of data points into a structured, indisputable decision reference to your site reality.
            </p>
          </div>

          <div className="relative">
            {/* Desktop Vertical Line - Hidden on Mobile */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[4px] -translate-x-1/2 z-0 bg-[linear-gradient(to_bottom,#FFF200,rgba(229,231,235,1),#FFF200)] bg-[size:100%_200%] animate-[lineflow_10s_linear_infinite]">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[6px] h-32 bg-[#FFF200] rounded-full shadow-[0_0_20px_rgba(255,242,0,0.9)] animate-[pulse_3s_ease-in-out_infinite]"></div>
            </div>

            <div className="space-y-20 sm:space-y-32 lg:space-y-48 relative z-10">
              
              {/* --- LAYER 01: CAPTURE --- */}
              <div className="grid md:grid-cols-2 gap-8 lg:gap-24 items-center relative">
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#FFF200] rounded-full border-[6px] border-white items-center justify-center font-black text-xl shadow-[0_4px_15px_rgba(255,242,0,0.4)] z-20">01</div>

                <div className="md:pr-12 lg:pr-16 text-center md:text-right flex flex-col items-center md:items-end">
                  <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#FFF200] text-[10px] sm:text-xs font-black text-black tracking-widest uppercase mb-4 sm:mb-6 bg-[#FFF200]/10 sm:bg-white shadow-sm">
                    <Scan size={14} /> Layer 01
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-5xl font-black text-black mb-3 sm:mb-5 tracking-tight leading-[1.1]">Mutli-Sensor <br className="sm:hidden"/>Reality Capture.</h3>
                  <p className="text-sm sm:text-lg text-gray-500 leading-relaxed font-medium md:max-w-[400px]">
                    Your site, digitised from every vantage point. Drones, 360° cameras, fixed cams, and satellite.
                  </p>
                </div>
                
                <div className="md:pl-12 lg:pl-16">
                  {/* CHANGED: Replaced simplified mobile icons with the full 4 animated boxes */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    
                    {/* Drone Mapping */}
                    <div className="bg-white border border-gray-200 sm:border-black rounded-[20px] sm:rounded-[24px] p-5 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col gap-4">
                       <div className="flex items-center gap-3">
                         <div className="p-2 bg-gray-50 group-hover:bg-[#FFF200] rounded-lg text-black transition-colors shadow-sm"><Radar size={20} /></div>
                         <h4 className="font-black text-sm sm:text-base">Drone Mapping</h4>
                       </div>
                       <div className="h-32 sm:h-40 relative overflow-hidden flex items-center justify-center rounded-xl bg-gray-50/50">
                          <div className="absolute inset-0 bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(90deg,#e5e7eb_1px,transparent_1px)] bg-[size:15px_15px]"></div>
                          <div className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-[#FFF200]/50 to-transparent z-0" style={{ animation: 'scan-beam 4s ease-in-out infinite' }}></div>
                          <div className="absolute top-6 sm:top-8 z-10" style={{ animation: 'drone-flight 4s ease-in-out infinite' }}>
                            <div className="bg-white rounded-full p-2.5 shadow-md border border-gray-100"><Radar size={16} className="text-black" /></div>
                          </div>
                       </div>
                    </div>

                    {/* 360 Walkthrough */}
                    <div className="bg-white border border-gray-200 sm:border-black rounded-[20px] sm:rounded-[24px] p-5 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col gap-4">
                       <div className="flex items-center gap-3">
                         <div className="p-2 bg-gray-50 rounded-lg text-black group-hover:bg-[#FFF200] transition-colors shadow-sm"><Rotate3D size={20} /></div>
                         <h4 className="font-black text-sm sm:text-base">360° Walkthrough</h4>
                       </div>
                       <div className="h-32 sm:h-40 relative overflow-hidden flex items-center justify-center rounded-xl bg-gray-50/50">
                          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100">
                            <rect x="10" y="10" width="80" height="80" fill="#f0f9ff" stroke="#bae6fd" strokeWidth="2" />
                            <line x1="50" y1="10" x2="50" y2="90" stroke="#bae6fd" strokeWidth="2" />
                            <line x1="10" y1="50" x2="90" y2="50" stroke="#bae6fd" strokeWidth="2" />
                          </svg>
                          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100"><path d="M30,30 L70,70 L85,40" fill="none" stroke="#3b82f6" strokeWidth="3" strokeDasharray="6 6" /></svg>
                          <div className="absolute top-[30%] left-[30%] w-3 h-3 bg-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-sm"></div>
                          <div className="absolute top-[40%] left-[85%] w-3 h-3 bg-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-sm"></div>
                          <div className="absolute top-[70%] left-[70%] w-4 h-4 bg-[#FFF200] rounded-full -translate-x-1/2 -translate-y-1/2 z-10 shadow-[0_0_10px_rgba(255,242,0,0.8)]" style={{ animation: 'nodepulse 2s infinite' }}></div>
                       </div>
                    </div>

                    {/* Fixed Cameras */}
                    <div className="bg-white border border-gray-200 sm:border-black rounded-[20px] sm:rounded-[24px] p-5 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col gap-4">
                       <div className="flex items-center gap-3">
                         <div className="p-2 bg-gray-50 rounded-lg text-black group-hover:bg-[#FFF200] transition-colors shadow-sm"><Video size={20} /></div>
                         <h4 className="font-black text-sm sm:text-base">Fixed Cameras</h4>
                       </div>
                       <div className="h-32 sm:h-40 relative overflow-hidden rounded-xl bg-gray-50/50 flex items-center">
                          <div className="w-4 h-full bg-gray-200 border-r border-gray-300 relative z-20 shadow-md"></div>
                          <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center z-10 origin-left" style={{ animation: 'cam-pan 4s ease-in-out infinite' }}>
                             <div className="bg-white rounded-md p-1.5 shadow-lg border border-gray-200 z-10"><Video size={16} className="text-black" /></div>
                             <div className="w-32 sm:w-48 h-24 origin-left bg-gradient-to-r from-[#FFF200]/50 to-transparent -ml-2 rounded-r-full"></div>
                          </div>
                          <div className="absolute right-6 bottom-4 w-8 sm:w-12 h-12 sm:h-16 bg-white border border-gray-300 rounded-sm shadow-sm"></div>
                          <div className="absolute right-16 sm:right-24 bottom-4 w-6 sm:w-8 h-8 sm:h-10 bg-white border border-gray-300 rounded-sm shadow-sm"></div>
                       </div>
                    </div>

                    {/* Satellite Imagery */}
                    <div className="bg-white border border-gray-200 sm:border-black rounded-[20px] sm:rounded-[24px] p-5 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col gap-4">
                       <div className="flex items-center gap-3">
                         <div className="p-2 bg-gray-50 rounded-lg text-black group-hover:bg-[#FFF200] transition-colors shadow-sm"><Satellite size={20} /></div>
                         <h4 className="font-black text-sm sm:text-base">Satellite Imagery</h4>
                       </div>
                       <div className="h-32 sm:h-40 relative overflow-hidden flex flex-col items-center justify-between py-4 rounded-xl bg-gray-50/50">
                          <div className="w-[150%] h-12 sm:h-14 bg-blue-50/50 border-t border-blue-200 rounded-[50%_50%_0_0] relative overflow-hidden flex justify-center">
                             <div className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-[#FFF200]/60 to-transparent" style={{ animation: 'scan-beam 6s ease-in-out infinite' }}></div>
                          </div>
                          <div className="absolute top-4 flex flex-col items-center" style={{ animation: 'sat-orbit 6s ease-in-out infinite' }}>
                            <div className="bg-white rounded-full p-1.5 sm:p-2 shadow-md z-10 border border-gray-100"><Satellite size={14} className="text-black" /></div>
                            <div className="w-16 sm:w-24 h-24 sm:h-32 bg-gradient-to-b from-[#FFF200]/30 to-transparent -mt-2" style={{ clipPath: 'polygon(45% 0, 55% 0, 100% 100%, 0 100%)' }}></div>
                          </div>
                       </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* --- LAYER 02: INTELLIGENCE --- */}
              <div className="grid md:grid-cols-2 gap-8 lg:gap-24 items-center relative">
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#FFF200] rounded-full border-[6px] border-white items-center justify-center font-black text-xl shadow-[0_4px_15px_rgba(255,242,0,0.4)] z-20">02</div>

                <div className="order-1 md:order-2 md:pl-12 lg:pl-16 flex flex-col items-center sm:items-start text-center sm:text-left">
                  <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#FFF200] text-[10px] sm:text-xs font-black text-black tracking-widest uppercase mb-4 sm:mb-6 bg-[#FFF200]/10 sm:bg-white shadow-sm">
                    <Layers size={14} /> Layer 02
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black mb-3 sm:mb-5 tracking-tight leading-[1.1]">AI-Driven Intelligence</h3>
                  <p className="text-sm sm:text-lg text-gray-500 leading-relaxed font-medium">
                    AI-based Extraction of Progress, deviations, and quantities. One site record for every stakeholder, instantly clear.
                  </p>
                </div>

                <div className="order-2 md:order-1 md:pr-12 lg:pr-16 h-[280px] sm:h-[400px] lg:h-[480px] relative flex items-center justify-center">
                   <div className="relative w-full max-w-[450px] h-full bg-gray-50 rounded-[32px] sm:rounded-[40px] border border-gray-100 shadow-inner flex items-center justify-center overflow-hidden scale-90 sm:scale-100">
                      <div className="absolute w-64 h-64 bg-[#FFF200]/60 blur-[50px] rounded-full z-0" style={{ animation: 'intelligence-glow 6s ease-in-out infinite' }}></div>
                      <div className="relative w-48 h-48 sm:w-56 sm:h-56 z-10">
                         <div className="absolute inset-0 rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-2xl border border-gray-200 bg-white" style={{ animation: 'compress-base 6s ease-in-out infinite' }}>
                            <img src="https://i.ibb.co/bMN7Kzv0/Website-Visuals-Presentation-7.png" className="w-full h-full object-cover" alt="Raw Site" />
                         </div>
                         <div className="absolute inset-0 rounded-[20px] sm:rounded-[24px] bg-[#FFF200]/95 backdrop-blur-sm border-2 border-[#FFF200] shadow-[0_20px_40px_rgba(255,242,0,0.3)] flex items-center justify-center" style={{ animation: 'compress-mid 6s ease-in-out infinite' }}>
                            <span className="font-black text-black text-[10px] sm:text-xs tracking-widest uppercase bg-white/70 px-4 py-2 rounded-full shadow-sm flex items-center gap-2">
                               <History size={14} /> Geo-Linked
                            </span>
                         </div>
                      </div>

                      <div className="absolute top-[10%] sm:top-[20%] right-2 sm:right-8 flex items-center z-20">
                         <div className="bg-gray-900 text-[#FFF200] px-3 py-2 rounded-xl font-bold text-[9px] sm:text-[11px] uppercase tracking-wide shadow-xl whitespace-nowrap" style={{ animation: 'insight-badge-pop 6s ease-in-out infinite' }}>
                            ⚡ Area: 450m³
                         </div>
                      </div>

                      <div className="absolute bottom-[10%] sm:bottom-[20%] left-2 sm:left-8 flex items-center flex-row-reverse z-20">
                         <div className="bg-red-50 text-red-600 border border-red-200 px-3 py-2 rounded-xl font-bold text-[9px] sm:text-[11px] uppercase tracking-wide shadow-xl whitespace-nowrap" style={{ animation: 'insight-badge-pop 6s ease-in-out infinite' }}>
                            ⚠️ Deviation Detected
                         </div>
                      </div>
                   </div>
                </div>
              </div>

              {/* --- LAYER 03: INSIGHTS --- */}
              <div className="grid md:grid-cols-2 gap-8 lg:gap-24 items-center relative lg:min-h-[650px]">
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#FFF200] text-[#111] rounded-full border-[6px] border-white items-center justify-center font-black text-xl shadow-[0_4px_15px_rgba(0,0,0,0.3)] z-40">03</div>

                <div className="md:pr-12 lg:pr-16 text-center md:text-right flex flex-col items-center md:items-end order-1">
                  <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#FFF200] text-[10px] sm:text-xs font-black text-black tracking-widest uppercase mb-4 sm:mb-6 bg-[#FFF200]/10 sm:bg-white shadow-sm">
                    <Check size={14} strokeWidth={3} /> Layer 03
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-5xl font-black text-black mb-3 sm:mb-6 tracking-tight leading-[1.1]">Dashboards <br className="hidden sm:block"/> and Insights</h3>
                  <p className="text-sm sm:text-lg lg:text-xl text-gray-500 leading-relaxed font-medium max-w-[500px]">
                    Our AI engine processes raw site data into tailored intelligence. Everyone works from a single, indisputable digital reality.
                  </p>
                </div>

                {/* THE FIX: Added `min-w-0` to stop grid blowout, and `flex flex-col items-center lg:block` for forced centering */}
                <div className="md:pl-12 lg:pl-16 order-2 relative w-full mt-6 sm:mt-0 min-w-0 flex flex-col items-center lg:block">
                  
                  {/* Core Visual - Constrained and Centered */}
                  <div className="relative w-full max-w-[280px] sm:max-w-[450px] z-20 group mb-6 lg:mb-0 mx-auto">
                    <div className="absolute inset-0 bg-[#FFF200] rounded-[32px] sm:rounded-[56px] blur-[60px] sm:blur-[120px] opacity-20 animate-pulse"></div>
                    <div className="relative bg-[#0A0A0A] rounded-[32px] sm:rounded-[56px] border-[2px] sm:border-[4px] border-black shadow-[0_20px_50px_rgba(0,0,0,0.4)] overflow-hidden aspect-[4/3] sm:aspect-square flex items-center justify-center">
                      <img src="https://i.ibb.co/HDGVjy6S/Screenshot-2026-02-19-at-22-12-29.png" className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale" alt="Site Map" />
                      <Sparkles className="text-[#FFF200] relative z-10" size={50} strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* UI Cards - Scrollable container protected by min-w-0 */}
                  <div className="flex overflow-x-auto lg:absolute lg:right-0 lg:flex-col gap-4 pb-4 w-full lg:w-52 snap-x snap-mandatory lg:h-full lg:justify-between lg:py-12 z-30 hide-scrollbar pt-2 px-1">
                    
                    {/* Executive Card */}
                    <div className="shrink-0 w-[240px] lg:w-full snap-center bg-[#111] border border-gray-800 p-5 lg:p-4 rounded-2xl shadow-xl lg:shadow-2xl lg:transform lg:hover:-translate-x-2 transition-transform">
                      <div className="flex items-center gap-2 mb-2.5">
                        <BarChart3 className="text-[#FFF200]" size={14} />
                        <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Executive KPI</span>
                      </div>
                      <div className="text-[11px] font-bold text-gray-300 mb-1.5">Projected Margin</div>
                      <div className="flex items-end gap-2">
                        <span className="text-xl font-black text-white">+12.4%</span>
                        <span className="text-[9px] text-green-500 font-bold mb-1">Optimized</span>
                      </div>
                    </div>

                    {/* Operations Card */}
                    <div className="shrink-0 w-[240px] lg:w-full snap-center bg-[#111] border border-gray-800 p-5 lg:p-4 rounded-2xl shadow-xl lg:shadow-2xl lg:transform lg:translate-x-6 lg:hover:translate-x-2 transition-transform">
                      <div className="flex items-center gap-2 mb-2.5">
                        <LayoutDashboard className="text-[#FFF200]" size={14} />
                        <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Operations</span>
                      </div>
                      <div className="flex flex-col gap-2">
                         <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                            <div className="h-full w-[78%] bg-[#FFF200]"></div>
                         </div>
                         <div className="text-[10px] text-white font-bold">Variance: <span className="text-[#FFF200]">-2 Days</span></div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ====================== PROJECT LIFECYCLE (RESPONSIVE) ====================== */}
      <section className="relative bg-white pt-12 pb-20 lg:py-32 overflow-hidden font-sans">
        
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

        <div className="max-w-[1400px] mx-auto px-5 lg:px-8 relative z-10">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-12 lg:mb-20 text-center sm:text-left">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-4 sm:mb-6 shadow-sm mx-auto sm:mx-0">
                Project Lifecycle
              </div>
              <h2 className="text-[clamp(32px,5vw,64px)] font-black tracking-tighter leading-[1.1] text-black">
                Intelligence that plugs into<br className="hidden sm:block" />
                <span className="relative inline-block mt-1 sm:mt-2">
                  <span className="absolute inset-y-0 sm:inset-y-1 -inset-x-2 sm:-inset-x-3 bg-[#FFF200] rounded-xl shadow-sm transform -skew-x-2"></span>
                  <span className="relative text-black"> every phase.</span>
                </span> 
              </h2>
            </div>
          </div>

          {/* MOBILE VERTICAL TIMELINE (Hidden on lg+) */}
          <div className="lg:hidden relative border-l-2 border-gray-100 ml-4 pl-6 space-y-8 py-4">
             {[
               { t: "Land Survey Intelligence", p: "Phase 1: Acquisition", d: "Millimeter-accurate topo, contours, and volumetric data." },
               { t: "BIM Analytics", p: "Phase 2: Planning", d: "Convert physical reality into accurate BIM models." },
               { t: "Construction Monitoring", p: "Phase 3: Execution", d: "Automated tracking and visual deviation detection." },
               { t: "Media & Marketing", p: "Phase 4: Sales", d: "Visual assets for sales and executive leadership." },
               { t: "Asset Inspection", p: "Phase 5: O&M", d: "AI-driven facade and structural defect analysis." }
             ].map((step, i) => (
               <div key={i} className="relative bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                 <div className="absolute top-1/2 -left-[35px] -translate-y-1/2 w-4 h-4 bg-[#FFF200] rounded-full border-4 border-white shadow-sm"></div>
                 <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">{step.p}</div>
                 <h4 className="font-black text-black text-lg mb-2">{step.t}</h4>
                 <p className="text-xs text-gray-500 font-medium leading-relaxed">{step.d}</p>
               </div>
             ))}
          </div>

          {/* DESKTOP HORIZONTAL PIPELINE (Hidden on < lg) */}
          <div className="hidden lg:block relative">
            <div className="grid grid-cols-6 items-center text-[12px] font-black uppercase tracking-widest text-black mb-6">
              {["Land Acquisition", "Design & Planning", "Construction & Execution", "Sales & Marketing", "Handover", "O&M"].map(phase => (
                <div key={phase} className="text-center">{phase}</div>
              ))}
            </div>
            
            <div className="relative h-[2px] bg-black/10 mb-24">
              <div className="absolute inset-0 grid grid-cols-6">
                {[1,2,3,4,5,6].map(n => (
                  <div key={n} className="flex justify-center">
                     <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black -mt-[15px] bg-white border-2 border-black/10 text-gray-400 relative z-10">{n}</div>
                  </div>
                ))}
              </div>
              <div className="absolute top-0 bottom-0 left-[8.333%] right-[8.333%] pointer-events-none">
                 <div className="absolute top-0 left-0 h-full bg-[#FFF200] z-10" style={{ animation: 'metro-trail 14s ease-in-out infinite' }}></div>
                 <div className="absolute top-0 -mt-[15px] w-8 h-8 rounded-full bg-[#FFF200] border-2 border-black z-20 flex items-center justify-center shadow-lg" style={{ animation: 'metro-transit 14s ease-in-out infinite' }}><div className="w-2 h-2 bg-black rounded-full animate-pulse"></div></div>
              </div>
            </div>
            
            <div className="relative space-y-8 pb-10">
              <LifecycleLinePill title="Land Survey Intelligence" start={1} end={2} imageUrl="https://i.ibb.co/wN4M0j7f/Screenshot-2026-02-19-at-17-43-41.png" description="Millimeter-accurate topo, contours, and volumetric data for early-feasibility." />
              <LifecycleLinePill title="BIM Analytics" start={2} end={3} imageUrl="https://i.ibb.co/jcSkjrn/Website-Visuals-Presentation-8.png" description="Convert physical reality into accurate BIM models for coordination." />
              <LifecycleLinePill title="Construction Monitoring" start={3} end={5} imageUrl="https://i.ibb.co/HDGVjy6S/Screenshot-2026-02-19-at-22-12-29.png" description="Automated tracking, time-lapse, and visual deviation detection." />
              <LifecycleLinePill title="Media & Marketing" start={4} end={4} imageUrl="https://i.ibb.co/twP5J0P8/Screenshot-2026-02-19-at-22-19-55.png" description="Visual assets and launch films for sales and executive leadership." />
              <LifecycleLinePill title="Asset Inspection Analytics" start={5} end={6} imageUrl="https://i.ibb.co/TMWfF9xV/Website-Visuals-Presentation-9.png" description="AI-driven facade and structural defect analysis without scaffolding." />
            </div>
          </div>
        </div>
      </section>

      {/* ====================== CAPABILITIES ====================== */}
      <section className="py-16 px-6 bg-gray-50 border-t border-gray-200 relative z-10">
        <div className="mb-10">
          <h2 className="text-[32px] font-black tracking-tighter mb-4 text-black leading-[1.1]">
            Advanced AI for <br />
            <span className="text-gray-400">connected teams.</span>
          </h2>
          <p className="text-[14px] text-gray-500 font-medium leading-relaxed">
            We replace guesswork with ground truth. Our specialized layers allow everyone to see exactly what's built.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {[
            { icon: <Radar size={18}/>, title:"Drone Survey", desc:"Drone, 360°, scans, and imagery — unified." },
            { icon: <LayoutDashboard size={18}/>, title:"Interior 360°", desc:"Reality vs plan, automatically verified." },
            { icon: <FileCheck size={18}/>, title:"Facade Imaging", desc:"Auditable, time-linked progress proof." },
            { icon: <Users size={18}/>, title:"Fixed Camera", desc:"One shared visual truth across teams." },
          ].map((feature, i) => (
            <div key={i} className="bg-white p-5 rounded-[20px] border border-gray-200 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-black shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-[15px] font-black mb-1 text-black tracking-tight">{feature.title}</h3>
                <p className="text-[12px] text-gray-500 font-medium leading-snug">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ====================== METRICS ====================== */}
      <section className="py-16 px-6 bg-white relative z-10 border-t border-gray-100">
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-[9px] font-black uppercase tracking-[0.2em] text-gray-500 mb-4 shadow-sm">
            Validated Impact
          </div>
          <h2 className="text-[32px] font-black tracking-tighter leading-[1.05] text-black">
            Exceptional business outcomes
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-y-10 gap-x-4">
          {[
            {v:"99.9%", l:"Accuracy", icon: <Check size={20} strokeWidth={3}/>},
            {v:"$4bn+", l:"Assets", icon: <LayoutDashboard size={20} strokeWidth={2.5}/>},
            {v:"350k+", l:"Images", icon: <Satellite size={20} strokeWidth={2.5}/>},
            {v:"80%", l:"Less Visits", icon: <Users size={20} strokeWidth={2.5}/>},
            {v:"33%", l:"Savings", icon: <BarChart3 size={20} strokeWidth={2.5}/>},
          ].map((m, i) => (
            <div key={m.l} className={`flex flex-col items-center p-4 bg-gray-50 rounded-[20px] border border-gray-100 ${i === 4 ? 'col-span-2' : ''}`}>
              <div className="w-12 h-12 rounded-[14px] bg-[#FFF200] text-black flex items-center justify-center mb-4 shadow-sm">
                {m.icon}
              </div>
              <p className="text-[28px] font-black text-black mb-1 tracking-tighter">
                {m.v}
              </p>
              <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest text-center">
                {m.l}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ====================== TESTIMONIALS ====================== */}
      <section className="bg-[#FFF200] py-16 px-6 relative overflow-hidden z-10">
        <div className="text-[100px] absolute -top-8 -left-2 font-serif text-black opacity-10 select-none leading-none">“</div>
        
        <div className="flex gap-2 mb-10 overflow-x-auto hide-scrollbar pb-2 relative z-10">
          {[
            { id: 0, label: "Site Manager" },
            { id: 1, label: "Leadership" },
            { id: 2, label: "Developer" }
          ].map((tab) => (
            <button 
              key={tab.id} 
              onClick={() => setActiveTestimonial(tab.id)}
              className={`px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-wider shrink-0 transition-colors shadow-sm
                ${activeTestimonial === tab.id ? "bg-black text-white" : "bg-white text-black"}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="relative min-h-[220px] z-10">
          {activeTestimonial === 0 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
              <p className="text-[22px] font-black leading-tight text-black mb-6 tracking-tighter">
                "YelloSKYE cut our progress verification time from hours to minutes. I can confirm work without stepping off site."
              </p>
              <div className="font-black text-[13px] text-black uppercase tracking-widest">Senior Site Manager</div>
              <div className="text-[10px] font-bold text-black/60 uppercase tracking-wide">Large Residential Project</div>
            </div>
          )}
          {activeTestimonial === 1 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
              <p className="text-[22px] font-black leading-tight text-black mb-6 tracking-tighter">
                "Leadership finally sees the same reality as the site. We have seen faster approvals and real accountability."
              </p>
              <div className="font-black text-[13px] text-black uppercase tracking-widest">Chief Projects Officer</div>
              <div className="text-[10px] font-bold text-black/60 uppercase tracking-wide">National Developer</div>
            </div>
          )}
          {activeTestimonial === 2 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
              <p className="text-[22px] font-black leading-tight text-black mb-6 tracking-tighter">
                "I don't chase updates anymore. I open YelloSKYE and instantly know where my project stands."
              </p>
              <div className="font-black text-[13px] text-black uppercase tracking-widest">Project Owner</div>
              <div className="text-[10px] font-bold text-black/60 uppercase tracking-wide">Commercial Portfolio</div>
            </div>
          )}
        </div>
      </section>

      {/* ====================== FORM ====================== */}
      <section className="bg-[#0A0A0A] py-16 px-5 relative overflow-hidden text-white z-10">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#FFF200]/10 blur-[80px] rounded-full" />
        
        <div className="mb-10 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-[9px] font-black text-gray-300 uppercase tracking-[0.2em] mb-5">
            Get Started
          </div>
          <h3 className="text-[36px] font-black tracking-tighter mb-4 leading-[1.1]">
            Ready to gain <br/>
            <span className="text-[#FFF200]">absolute clarity?</span>
          </h3>
          <p className="text-[14px] text-gray-400 font-medium leading-relaxed mb-6">
            Stop debating interpretations. Request a custom site walkthrough.
          </p>
          <ul className="space-y-3">
            {['15-minute site walkthrough', 'Zero hardware required', 'Custom project strategy'].map((item) => (
              <li key={item} className="flex items-center gap-3 text-white font-black uppercase text-[10px] tracking-wider">
                <div className="w-5 h-5 bg-[#FFF200] rounded flex items-center justify-center text-black shrink-0"><Check size={12} strokeWidth={4}/></div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <form className="space-y-3 relative z-10">
          <input placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white text-[14px] focus:border-[#FFF200] outline-none transition-colors" />
          <input placeholder="Work Email" type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white text-[14px] focus:border-[#FFF200] outline-none transition-colors" />
          <input placeholder="Company" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white text-[14px] focus:border-[#FFF200] outline-none transition-colors" />
          
          <div className="relative">
            <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-gray-400 text-[14px] focus:border-[#FFF200] outline-none appearance-none transition-colors">
              <option>Project Phase</option>
              <option>Pre-Construction</option>
              <option>Active Construction</option>
              <option>Handover</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </div>
          </div>
          
          <button type="button" className="w-full bg-[#FFF200] text-black font-black py-4 rounded-xl uppercase tracking-[0.2em] text-[11px] mt-4 shadow-[0_10px_20px_rgba(255,242,0,0.15)] active:scale-95 transition-transform flex justify-center items-center gap-2">
            Book a Demo <ArrowRight size={14} strokeWidth={3}/>
          </button>
        </form>
      </section>

      {/* ====================== FOOTER ====================== */}
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