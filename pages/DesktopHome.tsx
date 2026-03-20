import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import AutonomousAgents from '../components/AutonomousAgents';
import { 
  FileCheck, Radar, Check, Scan, History, Video, Zap, MessageSquare, CheckCircle2, BrainCircuit, ScanSearch, FileWarning,
  Rotate3D, Satellite, Layers, BarChart3, Twitter, Linkedin, Youtube, Play, Search, Bell, Plus, LayoutDashboard, Map, Box, AlertTriangle, 
  FileText, Settings, Users, ChevronDown, ArrowRight, Activity, ShieldCheck, Image as ImageIcon,
  Instagram, MapPin, Mail, Globe, Sparkles, Clock, Building2, Pickaxe, Cpu,
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
// COMPONENT: Hero Image Carousel 
// ═════════════════════════════════════════════════════════════════════════
const HeroImageCarousel = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const images = [
    "https://i.ibb.co/HDGVjy6S/Screenshot-2026-02-19-at-22-12-29.png",
    "https://i.ibb.co/jcSkjrn/Website-Visuals-Presentation-8.png",
    "https://i.ibb.co/bMN7Kzv0/Website-Visuals-Presentation-7.png",
    "https://i.ibb.co/TMWfF9xV/Website-Visuals-Presentation-9.png"
  ];


  return (
    <div className="w-full h-full relative z-20">

      {/* CHANGED: 
          1. Reduced top-left rounding to half (rounded-tl-lg on mobile, lg:rounded-tl-2xl on desktop)
          2. Removed bottom-left rounding completely (rounded-bl-none) 
      */}
      <div className="relative w-full h-full rounded-tl-sm lg:rounded-tl-md rounded-bl-none shadow-[-20px_20px_60px_rgba(0,0,0,0.08)] bg-white overflow-hidden group">
        
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
  );
};

export default HeroImageCarousel;

// ─── LIFECYCLE LINE PILL COMPONENT (Desktop) ───────────────────────────
const LifecycleLinePill = ({ title, start, end, imageUrl, description, link = "#" }) => {
  const leftPercent = ((start - 1) / 6) * 100;
  const widthPercent = ((end - start + 1) / 6) * 100;

  return (
    <div 
      className="relative group z-10 hover:z-50 cursor-default hidden lg:block px-2"
      style={{ marginLeft: `${leftPercent}%`, width: `${widthPercent}%` }}
    >
      {/* The Yellow Pill */}
      <div className="w-full bg-[#FFF200] border-[1.5px] border-black/10 text-black font-black py-4 px-6 rounded-full group-hover:bg-white group-hover:border-black transition-all duration-300 shadow-sm text-center text-[13px] relative flex justify-center items-center">
        {title}
      </div>

      {/* The Tooltip Card */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-full pb-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 w-[340px]">
        <div className="bg-[#111] rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.4)] border border-gray-800 overflow-hidden transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 relative">
          
          <div className="w-full h-32 bg-gray-900 relative">
            <img src={imageUrl} alt={title} className="w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent"></div>
          </div>
          
          <div className="p-5 flex flex-col">
            <h4 className="font-black text-white text-base mb-1.5 leading-tight">{title}</h4>
            <p className="text-gray-400 text-xs font-medium mb-5 leading-relaxed">{description}</p>
            
            {/* THE FIX: Changed href={link} to to={link} for React Router */}
            <Link 
              to={link} 
              onClick={(e) => e.stopPropagation()}
              className="relative z-50 w-full py-3 bg-[#FFF200] text-black hover:bg-white text-[11px] font-black uppercase tracking-[0.15em] rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              Explore Service
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

// ─── DATA: 5 CORE SOLUTIONS ────────────────────────────────────────────────
const SOLUTIONS = [
  {
    id: 'land-survey',
    title: 'Land Survey',
    desc: 'Automated topographic mapping and volumetric analytics in one digital twin.',
    icon: Map,
    colSpan: 'lg:col-span-2',
    bgStyle: 'bg-[#0A0A0A] text-white shadow-xl',
    textStyle: 'text-gray-400',
    iconContainer: 'bg-white/10 text-[#FFF200] border border-white/10',
    arrowStyle: 'text-[#FFF200]',
    link: '/solutions/land-survey' // <-- Added Link
  },
  {
    id: 'construction',
    title: 'Construction Monitoring',
    desc: 'Verify daily progress and track schedule compliance against your BIM.',
    icon: Activity,
    colSpan: 'col-span-1',
    bgStyle: 'bg-white text-black border border-gray-200/80 shadow-sm hover:border-gray-300',
    textStyle: 'text-gray-500',
    iconContainer: 'bg-[#0A0A0A] text-[#FFF200]',
    arrowStyle: 'text-black',
    link: '/solutions/construction-monitoring' // <-- Added Link
  },
  {
    id: 'inspection',
    title: 'Asset Inspection',
    desc: 'Automated defect detection for complete structural health and safety.',
    icon: ScanSearch,
    colSpan: 'col-span-1',
    bgStyle: 'bg-white text-black border border-gray-200/80 shadow-sm hover:border-gray-300',
    textStyle: 'text-gray-500',
    iconContainer: 'bg-[#0A0A0A] text-[#FFF200]',
    arrowStyle: 'text-black',
    link: '/solutions/asset-inspection' // <-- Added Link
  },
  {
    id: 'marketing',
    title: 'Media & Marketing',
    desc: 'Kinematic drone films and interactive 360° tours to sell your project.',
    icon: Play,
    colSpan: 'col-span-1',
    bgStyle: 'bg-white text-black border border-gray-200/80 shadow-sm hover:border-gray-300',
    textStyle: 'text-gray-500',
    iconContainer: 'bg-[#0A0A0A] text-[#FFF200]',
    arrowStyle: 'text-black',
    link: '/solutions/media-and-marketing' // <-- Added Link
  },
  {
    id: 'scan-to-bim',
    title: 'Scan to BIM',
    desc: 'Convert physical site reality into accurate geometric BIM models.',
    icon: Layers,
    colSpan: 'col-span-1',
    bgStyle: 'bg-white text-black border border-gray-200/80 shadow-sm hover:border-gray-300',
    textStyle: 'text-gray-500',
    iconContainer: 'bg-[#0A0A0A] text-[#FFF200]',
    arrowStyle: 'text-black',
    link: '/solutions/scan-to-bim' // <-- Added Link
  }
];

// ─── HOME COMPONENT ─────────────────────────────────────────────────────────────
export const Home: React.FC = () => {
  const [activeService, setActiveService] = useState(0);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonialCount = 3; 

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonialCount);
    }, 3000);
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
        .fade-grid-top {
          mask-image: linear-gradient(to top, black 80%, transparent 100%);
          -webkit-mask-image: linear-gradient(to top, black 80%, transparent 100%);
        }
      `}</style>
      
      <SectionObserver />

{/* ====================== HERO SECTION ====================== */}
<section className="relative w-full pt-[110px] lg:pt-[124px] pb-4 lg:pb-6 bg-white flex flex-col items-center overflow-hidden font-sans h-[100dvh] justify-between">
  
  {/* Subtle Background Grid */}
  <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
       style={{ 
         backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", 
         backgroundSize: "80px 80px",
         maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
         WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)"
       }} />

  {/* 1. TOP: MAXIMIZED VIDEO WINDOW */}
<div className="w-full max-w-[1691px] mx-auto px-6 md:px-10 relative z-10 animate-in fade-in zoom-in-95 duration-1000 flex-1 min-h-0 flex flex-col justify-center">
  
  {/* Container: Removed background color to stop the 'leak' */}
  <div className="relative w-full h-full mx-auto rounded-[24px] lg:rounded-[28px] shadow-[0_30px_60px_-12px_rgba(0,0,0,0.15)] overflow-hidden group border border-white/10">
    <video 
      autoPlay 
      loop 
      muted 
      playsInline
      /* Added -m-[1px] and calc width/height to force video past the rounding artifact */
      className="absolute -inset-[1px] w-[calc(100%+2px)] h-[calc(100%+2px)] object-cover transition-transform duration-[10s] group-hover:scale-[1.02] opacity-95"
      poster="https://ik.imagekit.io/your-placeholder-image.jpg" 
    >
      <source src="https://ik.imagekit.io/saxybrgkp/MME/Website%20Placeholder%20Video%20v2.mp4?updatedAt=1773996601484" type="video/mp4" />
    </video>
    
    {/* Premium Glass Glare Overlay */}
    <div className="absolute inset-0 rounded-[24px] lg:rounded-[28px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] pointer-events-none"></div>
  </div>
</div>

  {/* 2. BOTTOM: COPY & CTA DOCK */}
  <div className="w-full max-w-[1691px] mx-auto px-6 md:px-10 pt-4 lg:pt-5 shrink-0 relative z-20">    
    <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6 lg:gap-10">
      
      {/* LEFT SIDE: Copy */}
      <div className="flex flex-col gap-1 overflow-hidden mb-4 lg:mb-3">
        <h1 className="text-[clamp(40px,4.5vw,72px)] font-black tracking-tighter text-[#0A0A0A] leading-none flex items-center gap-3 lg:gap-4 whitespace-nowrap animate-in fade-in slide-in-from-bottom-6 duration-1000">
          Your site,
          <span className="bg-[#FFF200] px-5 py-2 lg:px-6 lg:py-2.5 rounded-[10px] lg:rounded-[12px] text-black shadow-sm">
            in sight.
          </span>
        </h1>
        
        <p className="text-[18px] md:text-[20px] text-gray-600 font-medium tracking-tight whitespace-nowrap animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200 mt-1">
          Know exactly what's happening on your site with AI-powered reality capture.
        </p>
      </div>

      {/* RIGHT SIDE: 3 Pillars + CTA Dock */}
      <div className="flex flex-col items-start xl:items-end animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
        
        <div className="flex flex-col w-full md:w-fit">
          
          {/* PREMIUM 3-PILLARS */}
          <div className="flex items-center justify-between w-full px-5 mt-4 mb-4">
            {[
              { label: "Clarity" },
              { label: "Consistency" },
              { label: "Accuracy" }
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2.5 lg:gap-2.5">
                <div className="w-2 h-2 bg-[#FFF200] shadow-[0_0_8px_rgba(255,242,0,0.8)]"></div>
                <span className="text-[14px] lg:text-[14px] font-black text-black uppercase tracking-[0.2em]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* 4. UPSCALED CTA DOCK */}
          <div className="flex items-center p-2.5 lg:p-3 bg-gray-50/90 backdrop-blur-2xl border border-gray-200/80 rounded-full shadow-[0_15px_40px_rgb(0,0,0,0.06)] w-full md:w-fit">
            <Link to="/book-demo" className="group flex items-center justify-center gap-4 pl-8 pr-3 py-3 rounded-full bg-[#0A0A0A] text-white font-black text-[16px] lg:text-[18px] transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 whitespace-nowrap cursor-pointer">
              Book a demo
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#FFF200] flex items-center justify-center text-black shadow-[0_0_15px_rgba(255,242,0,0.4)] group-hover:scale-105 transition-transform duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
            </Link>
            
            <Link to="/platform" className="flex items-center justify-center px-8 py-3 rounded-full text-gray-500 hover:text-[#0A0A0A] font-bold text-[16px] lg:text-[18px] transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap bg-transparent cursor-pointer">
              Explore platform
            </Link>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>

      {/* ====================== TRUST BAND ====================== */}
      <section className="bg-white relative z-30 py-8 lg:py-12 border-gray-100/50 border-b">
        <p className="text-center text-[10px] lg:text-[11px] font-black uppercase tracking-[0.5em] text-gray-400 mb-8">
          Providing intelligence to intelligent leaders
        </p>
        
        <div className="relative overflow-hidden marquee-mask flex w-full group">
          <div className="flex shrink-0 animate-marquee items-center gap-16 md:gap-24 px-8 md:px-12 group-hover:[animation-play-state:paused]">
            {[
              /* --- FIRST SET --- */
              { name: "Larsen & Toubro", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e5/L%26T.png" },
              { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/640px-Amazon_logo.svg.png" },
              { name: "TATA Projects", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/1200px-Tata_logo.svg.png" },
              { name: "Adani Enterprise", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Adani_logo_2012.svg" },
              { name: "DLF Limited", logo: "https://upload.wikimedia.org/wikipedia/commons/a/aa/DLF_logo.svg" },
              { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png" },
              { name: "Godrej", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Godrej_Enterprises_Group.svg/500px-Godrej_Enterprises_Group.svg.png" },
              { name: "Lodha", logo: "https://companieslogo.com/img/orig/LODHA.NS_BIG-691dc856.png?t=1720244492" },
              { name: "HDFC", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo.svg/960px-HDFC_Bank_Logo.svg.png?_=20110306040211" },
              { name: "Kirloskar", logo: "https://kirloskar.com/img/KIRLOSKAR%20SAFE%20SPACE%20LOGO-01.jpg" },
              { name: "Toyota Kirloskar", logo: "https://static.toyotabharat.com/images/toyota-logo-main-136x24.svg" },
              { name: "Mahindra", logo: "https://images.seeklogo.com/logo-png/61/1/mahindra-auto-logo-png_seeklogo-613492.png" },
              
              /* --- SECOND SET (DUPLICATED FOR MARQUEE LOOP) --- */
              { name: "Larsen & Toubro", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e5/L%26T.png" },
              { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/640px-Amazon_logo.svg.png" },
              { name: "TATA Projects", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/1200px-Tata_logo.svg.png" },
              { name: "Adani Enterprise", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Adani_logo_2012.svg" },
              { name: "DLF Limited", logo: "https://upload.wikimedia.org/wikipedia/commons/a/aa/DLF_logo.svg" },
              { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png" },
              { name: "Godrej", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Godrej_Enterprises_Group.svg/500px-Godrej_Enterprises_Group.svg.png" },
              { name: "Lodha", logo: "https://companieslogo.com/img/orig/LODHA.NS_BIG-691dc856.png?t=1720244492" },
              { name: "HDFC", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo.svg/960px-HDFC_Bank_Logo.svg.png?_=20110306040211" },
              { name: "Kirloskar", logo: "https://kirloskar.com/img/KIRLOSKAR%20SAFE%20SPACE%20LOGO-01.jpg" },
              { name: "Toyota Kirloskar", logo: "https://static.toyotabharat.com/images/toyota-logo-main-136x24.svg" },
              { name: "Mahindra", logo: "https://images.seeklogo.com/logo-png/61/1/mahindra-auto-logo-png_seeklogo-613492.png" }
            ].map((client, i) => (
              <div key={i} className="flex items-center justify-center w-28 md:w-32 h-10 md:h-12">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-w-full max-h-full object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700 cursor-pointer mix-blend-multiply"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== PURPOSE / TRUST SECTION ====================== */}
<section className="relative bg-white pt-24 lg:pt-32 pb-24 lg:pb-32 overflow-hidden z-10  border-gray-100">
  
  {/* Subtle Background Grid */}
  <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
       style={{ 
         backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", 
         backgroundSize: "80px 80px",
         maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
         WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)"
       }} 
  />

  <div className="relative max-w-[1450px] mx-auto px-6 lg:px-10">
    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
      
      {/* LEFT SIDE: Bulletproof 3-Line Typography */}
      <div className="lg:col-span-5 pr-0 lg:pr-8 flex flex-col justify-center items-start">
        
        {/* Using flex-col and items-start guarantees 3 lines and tight highlight */}
        <h2 className="flex flex-col items-start text-[clamp(44px,5vw,72px)] font-black tracking-tighter leading-[1.05] text-[#0A0A0A]">
          <span className="whitespace-nowrap">Eliminate doubt.</span>
          <span className="whitespace-nowrap mt-1">Operate with</span>
          <span className="relative inline-block mt-2 lg:mt-3 w-fit">
            <span className="absolute inset-y-1 lg:inset-y-1.5 -inset-x-3 bg-[#FFF200] rounded-xl shadow-sm"></span>
            <span className="relative px-2 text-black whitespace-nowrap">Complete Trust.</span>
          </span>
        </h2>
        
        <p className="mt-8 text-[18px] lg:text-[20px] text-gray-500 leading-relaxed font-medium">
          Because decisions that shape the real world deserve more than assumptions, interpretations, and incomplete views.
        </p>
      </div>
      
      {/* RIGHT SIDE: Unified White Grid */}
      <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5 lg:gap-6 pt-6 lg:pt-0">
        
        {/* CARD 1 */}
        <div className="bg-white rounded-[24px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] flex flex-col group">
          <div className="w-12 h-12 rounded-[14px] bg-gray-50 border border-gray-100 text-black flex items-center justify-center mb-6 group-hover:bg-[#FFF200] group-hover:border-[#FFF200] transition-colors duration-300">
             <Scan size={20} strokeWidth={2.5} />
          </div>
          <h3 className="text-[19px] font-black text-black mb-2 leading-snug tracking-tight">Independent Ground Truth</h3>
          <p className="text-[14px] text-gray-500 leading-relaxed font-medium flex-1">Captured directly as-built. Never interpreted, filtered, or assumed.</p>
          
          <div className="mt-6 relative h-10 w-full border border-gray-100 bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:10px_10px]"></div>
            <div className="w-5 h-5 border-2 border-black rounded-full relative z-10 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-[#FFF200] rounded-full"></div>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="bg-white rounded-[24px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] flex flex-col group">
          <div className="w-12 h-12 rounded-[14px] bg-gray-50 border border-gray-100 text-black flex items-center justify-center mb-6 group-hover:bg-[#FFF200] group-hover:border-[#FFF200] transition-colors duration-300">
             <History size={20} strokeWidth={2.5} />
          </div>
          <h3 className="text-[19px] font-black text-black mb-2 leading-snug tracking-tight">Consistent Over Time</h3>
          <p className="text-[14px] text-gray-500 leading-relaxed font-medium flex-1">The exact same visual reference, updated week after week.</p>
          
          <div className="mt-6 flex items-center w-full gap-1.5 opacity-70 group-hover:opacity-100 transition-opacity">
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="flex-1 h-[2px] bg-gray-100"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="flex-1 h-[2px] bg-gray-100"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#FFF200] ring-4 ring-[#FFF200]/30 shadow-sm"></div>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="bg-white rounded-[24px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] flex flex-col group">
          <div className="w-12 h-12 rounded-[14px] bg-gray-50 border border-gray-100 text-black flex items-center justify-center mb-6 group-hover:bg-[#FFF200] group-hover:border-[#FFF200] transition-colors duration-300">
             <FileCheck size={20} strokeWidth={2.5} />
          </div>
          <h3 className="text-[19px] font-black text-black mb-2 leading-snug tracking-tight">Shared Reality</h3>
          <p className="text-[14px] text-gray-500 leading-relaxed font-medium flex-1">Decisions rely on hard visual evidence, not subjective explanations.</p>
          
          {/* Refined Minimal Visual: Overlapping Design vs Reality */}
          <div className="mt-6 relative h-10 w-full">
            <div className="absolute left-0 top-2 w-[45%] h-8 border-[1.5px] border-dashed border-gray-300 rounded bg-white"></div>
            <div className="absolute left-8 top-0 w-[45%] h-8 border border-black rounded bg-black/5 backdrop-blur-sm shadow-sm flex items-center justify-center">
               <Check size={14} className="text-black" />
            </div>
          </div>
        </div>

        {/* CARD 4 */}
        <div className="bg-white rounded-[24px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] flex flex-col group">
          <div className="w-12 h-12 rounded-[14px] bg-gray-50 border border-gray-100 text-black flex items-center justify-center mb-6 group-hover:bg-[#FFF200] group-hover:border-[#FFF200] transition-colors duration-300">
             <Users size={20} strokeWidth={2.5} />
          </div>
          <h3 className="text-[19px] font-black text-black mb-2 leading-snug tracking-tight">Trusted Across Teams</h3>
          <p className="text-[14px] text-gray-500 leading-relaxed font-medium flex-1">Unifying everyone from on-site managers to executive leadership.</p>
          
          {/* Restored Minimal Role Avatars */}
          <div className="mt-6 flex -space-x-2">
            <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-50 flex items-center justify-center text-[9px] font-black text-blue-600 shadow-sm z-30">KA</div>
            <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-50 flex items-center justify-center text-[9px] font-black text-blue-600 shadow-sm z-30">KS</div>
            <div className="w-8 h-8 rounded-full border-2 border-white bg-purple-50 flex items-center justify-center text-[9px] font-black text-purple-600 shadow-sm z-20">PR</div>
            <div className="w-8 h-8 rounded-full border-2 border-white bg-green-50 flex items-center justify-center text-[9px] font-black text-green-600 shadow-sm z-10">SG</div>
            <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-50 flex items-center justify-center text-[10px] font-black text-gray-500 shadow-sm z-0">+</div>
          </div>
        </div>

      </div>

    </div>
  </div>
</section>

{/* ====================== PLATFORM SOLUTIONS BENTO GRID ====================== */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden font-sans border-gray-100">
        
        {/* Subtle Background Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ 
               backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", 
               backgroundSize: "80px 80px",
               maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
               WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)"
             }} 
        />

        <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 lg:mb-20">
            <div className="max-w-2xl">
              <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-black tracking-tighter leading-[1.05] text-black">
                AI-driven solutions across <br className="hidden sm:block"/>
                <span className="relative inline-block mt-1">
                  <span className="absolute inset-y-1 lg:inset-y-1.5 -inset-x-3 bg-[#FFF200] rounded-xl shadow-sm"></span>
                  <span className="relative text-black px-1"> the lifecyle of your asset.</span>
                </span>
              </h2>
            </div>
            <div className="max-w-md pb-2">
              <p className="text-base lg:text-[17px] text-gray-500 font-medium leading-relaxed">
                We transform raw site data into clear actions and indisputable certainty for your project.
              </p>
            </div>
          </div>

          {/* Premium Interlocking Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {SOLUTIONS.map((solution) => (
              <Link 
                key={solution.id} 
                to={solution.link}
                className={`
                  group relative rounded-[24px] lg:rounded-[32px] p-8 lg:p-10 flex flex-col
                  transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] cursor-pointer block focus:outline-none
                  ${solution.colSpan} ${solution.bgStyle}
                `}
              >
                
                {/* Header: Icon */}
                <div className={`w-14 h-14 rounded-[16px] flex items-center justify-center mb-10 shrink-0 shadow-sm transition-transform duration-500 group-hover:scale-110 ${solution.iconContainer}`}>
                  <solution.icon size={26} strokeWidth={2.5} />
                </div>

                {/* Content */}
                <div className="mt-auto">
                  <h3 className="text-2xl font-black tracking-tight mb-3">
                    {solution.title}
                  </h3>
                  <p className={`text-[15px] leading-relaxed font-medium mb-8 ${solution.textStyle}`}>
                    {solution.desc}
                  </p>
                </div>

                {/* Arrow Link */}
                <div className={`flex items-center gap-2 text-[12px] font-black uppercase tracking-widest mt-auto pt-5 border-t border-current/10 w-full transition-colors ${solution.arrowStyle}`}>
                  Explore Solution 
                  <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </div>

              </Link>
            ))}
          </div>


        </div>
      </section>

{/* 2. PLUG IN YOUR NEW AGENTS SECTION HERE 👇 */}
      <AutonomousAgents />

      {/* ====================== THE INTELLIGENCE ENGINE (DECISION STACK) ====================== */}
      <section className="relative bg-white pt-16 lg:pt-20 pb-32 lg:pb-40 overflow-hidden font-sans">
        
        <style>{`
          @keyframes drone-flight { 0%, 100% { transform: translateX(-45px) translateY(0px) rotate(-5deg); } 50% { transform: translateX(45px) translateY(-5px) rotate(5deg); } }
          @keyframes scan-beam { 0%, 100% { transform: translateX(-45px); } 50% { transform: translateX(45px); } }
          @keyframes cam-pan { 0%, 100% { transform: rotate(-25deg); } 50% { transform: rotate(25deg); } }
          @keyframes sat-orbit { 0%, 100% { transform: translateX(-50px) rotate(-10deg); } 50% { transform: translateX(50px) rotate(10deg); } }
          @keyframes nodepulse { 0% { box-shadow: 0 0 0 0 rgba(255, 242, 0, 0.7); } 70% { box-shadow: 0 0 0 20px rgba(255, 242, 0, 0); } 100% { box-shadow: 0 0 0 0 rgba(255, 242, 0, 0); } }
          @keyframes lineflow { 0% { background-position: 0% 50%; } 100% { background-position: 100% 50%; } }
          @keyframes compress-base { 0%, 10% { transform: translate(-40px, 50px) rotate(-15deg); opacity: 0.6; } 25%, 80% { transform: translate(0px, 0px) rotate(0deg); opacity: 1; } 90%, 100% { transform: translate(-40px, 50px) rotate(-15deg); opacity: 0.6; } }
          @keyframes compress-top { 0%, 10% { transform: translate(40px, -50px) rotate(15deg); opacity: 0.6; } 25%, 80% { transform: translate(0px, 0px) rotate(0deg); opacity: 1; } 90%, 100% { transform: translate(40px, -50px) rotate(15deg); opacity: 0.6; } }
          @keyframes compress-mid { 0%, 10% { transform: scale(1.2); opacity: 0; } 25%, 80% { transform: scale(1); opacity: 1; } 90%, 100% { transform: scale(1.2); opacity: 0; } }
          @keyframes intelligence-glow { 0%, 20% { opacity: 0; transform: scale(0.5); } 25% { opacity: 1; transform: scale(1.2); } 30%, 80% { opacity: 0.7; transform: scale(1); } 85%, 100% { opacity: 0; transform: scale(0.5); } }
          @keyframes insight-line-right { 0%, 30% { transform: scaleX(0); opacity: 0; } 35%, 80% { transform: scaleX(1); opacity: 1; } 85%, 100% { transform: scaleX(0); opacity: 0; } }
          @keyframes insight-line-left { 0%, 30% { transform: scaleX(0); opacity: 0; } 35%, 80% { transform: scaleX(1); opacity: 1; } 85%, 100% { transform: scaleX(0); opacity: 0; } }
          @keyframes insight-badge-pop { 0%, 35% { transform: scale(0.8) translateY(10px); opacity: 0; } 40%, 80% { transform: scale(1) translateY(0); opacity: 1; } 85%, 100% { transform: scale(0.8) translateY(10px); opacity: 0; } }
          @keyframes multiplayer-1 { 0%, 15% { transform: translate(-140px, -60px); opacity: 0; } 20% { opacity: 1; } 35%, 85% { transform: translate(-30px, 15px); opacity: 1; } 90%, 100% { transform: translate(-30px, 15px); opacity: 0; } }
          @keyframes multiplayer-2 { 0%, 20% { transform: translate(120px, 50px); opacity: 0; } 25% { opacity: 1; } 40%, 85% { transform: translate(25px, 25px); opacity: 1; } 90%, 100% { transform: translate(25px, 25px); opacity: 0; } }
          @keyframes multiplayer-3 { 0%, 25% { transform: translate(60px, -90px); opacity: 0; } 30% { opacity: 1; } 45%, 85% { transform: translate(20px, -20px); opacity: 1; } 90%, 100% { transform: translate(20px, -20px); opacity: 0; } }
          @keyframes multiplayer-4 { 0%, 30% { transform: translate(-80px, 80px); opacity: 0; } 35% { opacity: 1; } 50%, 85% { transform: translate(-15px, 35px); opacity: 1; } 90%, 100% { transform: translate(-15px, 35px); opacity: 0; } }
          @keyframes log-fade-1 { 0%, 45% { transform: translateY(15px); opacity: 0; } 50%, 85% { transform: translateY(0); opacity: 1; } 90%, 100% { transform: translateY(-15px); opacity: 0; } }
          @keyframes truth-pulse { 0% { box-shadow: 0 0 0 0 rgba(255, 242, 0, 0.3); } 70% { box-shadow: 0 0 0 25px rgba(255, 242, 0, 0); } 100% { box-shadow: 0 0 0 0 rgba(255, 242, 0, 0); } }
        `}</style>

        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ 
            backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", 
            backgroundSize: "80px 80px",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 90%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 90%, transparent 100%)"
          }} 
        />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
          
          <div className="max-w-4xl mb-24 text-center mx-auto">
            <h2 className="text-[clamp(40px,5vw,64px)] font-black tracking-tighter leading-[1.05] text-black mb-6">
              From raw site reality to <br />
              <span className="relative inline-block mt-2">
                <span className="absolute inset-0 bg-[#FFF200] rounded-xl shadow-sm transform -skew-x-3"></span>
                <span className="relative px-4 text-black">boardroom certainty.</span>
              </span>
            </h2>
            <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto font-medium">
              We process millions of data points into a structured, indisputable decision reference to your site reality.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-[4px] md:-translate-x-1/2 z-0 bg-[linear-gradient(to_bottom,#FFF200,rgba(229,231,235,1),#FFF200)] bg-[size:100%_200%] animate-[lineflow_10s_linear_infinite]">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[6px] h-32 bg-[#FFF200] rounded-full shadow-[0_0_20px_rgba(255,242,0,0.9)] animate-[pulse_3s_ease-in-out_infinite]"></div>
            </div>

            <div className="space-y-32 lg:space-y-48 relative z-10">
              
              {/* --- LAYER 01: CAPTURE --- */}
              <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center relative">
                
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#FFF200] rounded-full border-[6px] border-white items-center justify-center font-black text-xl shadow-[0_4px_15px_rgba(255,242,0,0.4)] z-20">01</div>

                <div className="md:pr-12 lg:pr-16 md:text-right flex flex-col md:items-end">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FFF200] text-xs font-black text-black tracking-widest uppercase mb-6 bg-white shadow-sm">
                    <Scan size={14} /> Layer 01
                  </div>
                  <h3 className="text-3xl lg:text-5xl font-black text-black mb-5 tracking-tight">Mutli-Sensor Reality Capture.</h3>
                  <p className="text-gray-600 text-lg leading-relaxed font-medium text-left md:text-right max-w-none w-[640px]">
                    Your site, digitised from every vantage point. <br/>
                    Drones, 360° cameras, fixed cams, and satellite — all feeding one timeline.
                  </p>
                </div>
                
                <div className="md:pl-12 lg:pl-16">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white border border-black rounded-[24px] p-6 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col gap-4">
                       <div className="flex items-center gap-3">
                         <div className="p-2 bg-gray-50 group-hover:bg-[#FFF200] rounded-lg text-black transition-colors shadow-sm">
                           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                             <line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/>
                             <circle cx="12" cy="12" r="2"/><line x1="7.05" y1="7.05" x2="9.88" y2="9.88"/><line x1="16.95" y1="16.95" x2="14.12" y2="14.12"/><line x1="7.05" y1="16.95" x2="9.88" y2="14.12"/><line x1="16.95" y1="7.05" x2="14.12" y2="9.88"/>
                             <circle cx="5" cy="5" r="2"/><circle cx="19" cy="19" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="5" r="2"/>
                           </svg>
                         </div>
                         <h4 className="font-black text-base">Drone Mapping</h4>
                       </div>
                       <div className="h-40 relative overflow-hidden flex items-center justify-center rounded-xl bg-gray-50/50">
                          <div className="absolute inset-0 bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(90deg,#e5e7eb_1px,transparent_1px)] bg-[size:15px_15px]"></div>
                          <div className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-[#FFF200]/50 to-transparent z-0" style={{ animation: 'scan-beam 4s ease-in-out infinite' }}></div>
                          <div className="absolute top-8 z-10" style={{ animation: 'drone-flight 4s ease-in-out infinite' }}>
                            <div className="bg-white rounded-full p-2.5 shadow-md border border-gray-100">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                                 <line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/>
                                 <circle cx="12" cy="12" r="2"/><line x1="7.05" y1="7.05" x2="9.88" y2="9.88"/><line x1="16.95" y1="16.95" x2="14.12" y2="14.12"/><line x1="7.05" y1="16.95" x2="9.88" y2="14.12"/><line x1="16.95" y1="7.05" x2="14.12" y2="9.88"/>
                                 <circle cx="5" cy="5" r="2"/><circle cx="19" cy="19" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="5" r="2"/>
                              </svg>
                            </div>
                          </div>
                       </div>
                    </div>

                    <div className="bg-white border border-black rounded-[24px] p-6 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col gap-4">
                       <div className="flex items-center gap-3">
                         <div className="p-2 bg-gray-50 rounded-lg text-black group-hover:bg-[#FFF200] transition-colors shadow-sm"><Rotate3D size={20} /></div>
                         <h4 className="font-black text-base">360° Walkthrough</h4>
                       </div>
                       <div className="h-40 relative overflow-hidden flex items-center justify-center rounded-xl bg-gray-50/50">
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

                    <div className="bg-white border border-black rounded-[24px] p-6 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col gap-4">
                       <div className="flex items-center gap-3">
                         <div className="p-2 bg-gray-50 rounded-lg text-black group-hover:bg-[#FFF200] transition-colors shadow-sm"><Video size={20} /></div>
                         <h4 className="font-black text-base">Fixed Cameras</h4>
                       </div>
                       <div className="h-40 relative overflow-hidden rounded-xl bg-gray-50/50 flex items-center">
                          <div className="w-4 h-full bg-gray-200 border-r border-gray-300 relative z-20 shadow-md"></div>
                          <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center z-10 origin-left" style={{ animation: 'cam-pan 4s ease-in-out infinite' }}>
                             <div className="bg-white rounded-md p-1.5 shadow-lg border border-gray-200 z-10">
                               <Video size={16} className="text-black" />
                             </div>
                             <div className="w-48 h-24 origin-left bg-gradient-to-r from-[#FFF200]/50 to-transparent -ml-2 rounded-r-full"></div>
                          </div>
                          <div className="absolute right-6 bottom-4 w-12 h-16 bg-white border border-gray-300 rounded-sm shadow-sm"></div>
                          <div className="absolute right-24 bottom-4 w-8 h-10 bg-white border border-gray-300 rounded-sm shadow-sm"></div>
                       </div>
                    </div>

                    <div className="bg-white border border-black rounded-[24px] p-6 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col gap-4">
                       <div className="flex items-center gap-3">
                         <div className="p-2 bg-gray-50 rounded-lg text-black group-hover:bg-[#FFF200] transition-colors shadow-sm"><Satellite size={20} /></div>
                         <h4 className="font-black text-base">Satellite Imagery</h4>
                       </div>
                       <div className="h-40 relative overflow-hidden flex flex-col items-center justify-between py-4 rounded-xl bg-gray-50/50">
                          <div className="w-[150%] h-14 bg-blue-50/50 border-t border-blue-200 rounded-[50%_50%_0_0] relative overflow-hidden flex justify-center">
                             <div className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-[#FFF200]/60 to-transparent" style={{ animation: 'scan-beam 6s ease-in-out infinite' }}></div>
                          </div>
                          <div className="absolute top-4 flex flex-col items-center" style={{ animation: 'sat-orbit 6s ease-in-out infinite' }}>
                            <div className="bg-white rounded-full p-2 shadow-md z-10 border border-gray-100">
                              <Satellite size={16} className="text-black" />
                            </div>
                            <div className="w-24 h-32 bg-gradient-to-b from-[#FFF200]/30 to-transparent -mt-2" style={{ clipPath: 'polygon(45% 0, 55% 0, 100% 100%, 0 100%)' }}></div>
                          </div>
                       </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* --- LAYER 02: INTELLIGENCE --- */}
              <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center relative">
                
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#FFF200] rounded-full border-[6px] border-white items-center justify-center font-black text-xl shadow-[0_4px_15px_rgba(255,242,0,0.4)] z-20">02</div>

                <div className="order-2 md:order-1 md:pr-12 lg:pr-16 h-[400px] lg:h-[480px] relative flex items-center justify-center">
                   <div className="relative w-full max-w-[450px] h-full bg-gray-50 rounded-[40px] border border-gray-100 shadow-inner flex items-center justify-center overflow-hidden">
                      <div className="absolute w-64 h-64 bg-[#FFF200]/60 blur-[50px] rounded-full z-0" style={{ animation: 'intelligence-glow 6s ease-in-out infinite' }}></div>

                      <div className="relative w-56 h-56 z-10">
                         <div className="absolute inset-0 rounded-[24px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.15)] border border-gray-200 bg-white" style={{ animation: 'compress-base 6s ease-in-out infinite' }}>
                            <img src="https://i.ibb.co/bMN7Kzv0/Website-Visuals-Presentation-7.png" className="w-full h-full object-cover" alt="Raw Site" />
                         </div>
                         <div className="absolute inset-0 rounded-[24px] bg-[#FFF200]/95 backdrop-blur-sm border-2 border-[#FFF200] shadow-[0_20px_40px_rgba(255,242,0,0.3)] flex items-center justify-center" style={{ animation: 'compress-mid 6s ease-in-out infinite' }}>
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000015_1px,transparent_1px),linear-gradient(to_bottom,#00000015_1px,transparent_1px)] bg-[size:16px_16px]"></div>
                            <span className="font-black text-black text-xs tracking-widest uppercase bg-white/70 px-4 py-2 rounded-full shadow-sm flex items-center gap-2">
                               <History size={14} /> Geo-Linked
                            </span>
                         </div>
                         <div className="absolute inset-0 rounded-[24px] bg-blue-500/10 backdrop-blur-md border-[3px] border-blue-400 shadow-xl flex items-center justify-center" style={{ animation: 'compress-top 6s ease-in-out infinite' }}>
                            <svg className="w-3/4 h-3/4 opacity-90" viewBox="0 0 100 100">
                               <path d="M20,80 L50,20 L80,80 Z" fill="none" stroke="#2563eb" strokeWidth="4" strokeLinejoin="round" />
                               <path d="M35,50 L65,50" fill="none" stroke="#2563eb" strokeWidth="4" strokeDasharray="4 4" strokeLinecap="round" />
                            </svg>
                         </div>
                      </div>

                      <div className="absolute top-[20%] right-4 lg:right-8 flex items-center z-20">
                         <div className="h-[2px] bg-gray-900 origin-left w-8 lg:w-12" style={{ animation: 'insight-line-right 6s ease-in-out infinite' }}></div>
                         <div className="bg-gray-900 text-[#FFF200] px-4 py-2.5 rounded-xl font-bold text-[11px] uppercase tracking-wide shadow-xl whitespace-nowrap" style={{ animation: 'insight-badge-pop 6s ease-in-out infinite' }}>
                            <span className="inline-block mr-1">⚡</span> Area: 450m³
                         </div>
                      </div>

                      <div className="absolute bottom-[20%] left-4 lg:left-8 flex items-center flex-row-reverse z-20">
                         <div className="h-[2px] bg-red-500 origin-right w-8 lg:w-12" style={{ animation: 'insight-line-left 6s ease-in-out infinite' }}></div>
                         <div className="bg-red-50 text-red-600 border border-red-200 px-4 py-2.5 rounded-xl font-bold text-[11px] uppercase tracking-wide shadow-xl whitespace-nowrap" style={{ animation: 'insight-badge-pop 6s ease-in-out infinite' }}>
                            <span className="inline-block mr-1">⚠️</span> Deviation Detected
                         </div>
                      </div>
                   </div>
                </div>
                
                <div className="order-1 md:order-2 md:pl-12 lg:pl-16 flex flex-col items-start">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FFF200] text-xs font-black text-black tracking-widest uppercase mb-6 bg-white shadow-sm">
                    <Layers size={14} /> Layer 02
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-black text-black mb-5 tracking-tight">AI-Driven Intelligence for Quantity, Quality and Schedule</h3>
                  <p className="text-gray-600 text-lg leading-relaxed font-medium">
                    AI-based Extraction of Progress, deviations, and quantities<br />— One site record for every stakeholder, instantly clear.
                  </p>
                </div>
              </div>

{/* --- LAYER 03: AI-DRIVEN INSIGHTS (ENHANCED SCALE) --- */}
<div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center relative min-h-[650px]">
  <style>{`
    @keyframes neural-orbit {
      0% { transform: rotate(0deg) scale(1); opacity: 0.3; }
      50% { transform: rotate(180deg) scale(1.1); opacity: 0.7; }
      100% { transform: rotate(360deg) scale(1); opacity: 0.3; }
    }
    @keyframes data-pulse-flow {
      0% { stroke-dashoffset: 40; opacity: 0; }
      20% { opacity: 1; }
      100% { stroke-dashoffset: 0; opacity: 0; }
    }
    @keyframes ai-glow-pulse {
      0%, 100% { filter: drop-shadow(0 0 5px #FFF200); opacity: 0.8; }
      50% { filter: drop-shadow(0 0 20px #FFF200); opacity: 1; }
    }
    .data-connector {
      stroke-dasharray: 8 12;
      animation: data-pulse-flow 1.5s linear infinite;
    }
  `}</style>

  {/* Timeline Node 03 */}
  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#FFF200] text-[#111] rounded-full border-[6px] border-white items-center justify-center font-black text-xl shadow-[0_4px_15px_rgba(0,0,0,0.3)] z-40">03</div>

  {/* Left Column: Copy */}
  <div className="md:pr-12 lg:pr-16 md:text-right flex flex-col md:items-end order-2 md:order-1">
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FFF200] text-xs font-black text-black tracking-widest uppercase mb-6 bg-white shadow-sm">
      <Check size={14} strokeWidth={3} /> Layer 03
    </div>
    <h3 className="text-3xl lg:text-5xl font-black text-black mb-6 tracking-tight leading-[1.1]">AI-Driven Dashboards<br /> and Insights</h3>
    <p className="text-gray-700 text-lg lg:text-xl leading-relaxed font-medium text-left md:text-right max-w-none w-[600px]">
  Our AI engine processes raw site data into tailored intelligence. 
  Everyone works from a single, indisputable digital reality.
</p>
  </div>

  {/* Right Column: Ultra-Scale Visual */}
  <div className="md:pl-12 lg:pl-16 order-1 md:order-2 flex items-center justify-center relative scale-110 lg:scale-125">
    <div className="relative w-full max-w-[620px] aspect-square flex items-center justify-center">
      
      {/* 1. DATA EXTRACTION SVG (High Contrast) */}
      <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" viewBox="0 0 500 500">
        {/* Dynamic Extraction Beams - Pulling from specific coordinates on the image */}
        <g filter="url(#shadow)">
          {/* Top Beam: Executive */}
          <path d="M 280 200 L 420 80" stroke="#000" strokeWidth="4" fill="none" opacity="0.1" />
          <path d="M 280 200 L 420 80" stroke="#FFF200" strokeWidth="2.5" fill="none" className="extraction-line" />
          
          {/* Mid Beam: Operations */}
          <path d="M 320 250 L 440 250" stroke="#000" strokeWidth="4" fill="none" opacity="0.1" />
          <path d="M 320 250 L 440 250" stroke="#FFF200" strokeWidth="2.5" fill="none" className="extraction-line" style={{ animationDelay: '0.6s' }} />
          
          {/* Btm Beam: Validation */}
          <path d="M 280 300 L 420 420" stroke="#000" strokeWidth="4" fill="none" opacity="0.1" />
          <path d="M 280 300 L 420 420" stroke="#FFF200" strokeWidth="2.5" fill="none" className="extraction-line" style={{ animationDelay: '1.2s' }} />
        </g>
      </svg>

      {/* 2. MAXIMIZED CENTRAL HUB (Static AI Mesh) */}
      <div className="relative w-[380px] h-[300px] z-20 group">
        <div className="absolute inset-0 bg-[#FFF200] rounded-[56px] blur-[120px] opacity-15 animate-pulse"></div>
        
        <div className="absolute inset-0 bg-[#0A0A0A] rounded-[56px] border-[4px] border-black shadow-[0_50px_100px_rgba(0,0,0,0.4)] overflow-hidden">
          <img 
            src="https://i.ibb.co/HDGVjy6S/Screenshot-2026-02-19-at-22-12-29.png" 
            className="w-full h-full object-cover opacity-40 grayscale" 
            alt="Site Digital Twin" 
          />
          
          {/* Static AI Neural Overlay (No Rotation) */}
          <svg className="absolute inset-0 w-full h-full opacity-50" viewBox="0 0 100 100">
             <g className="animate-[neural-static-pulse_4s_infinite]">
               <circle cx="25" cy="35" r="1.5" fill="#FFF200" />
               <circle cx="75" cy="25" r="1.5" fill="#FFF200" />
               <circle cx="85" cy="65" r="1.5" fill="#FFF200" />
               <circle cx="55" cy="85" r="1.5" fill="#FFF200" />
               <circle cx="15" cy="75" r="1.5" fill="#FFF200" />
               <circle cx="50" cy="50" r="2" fill="#FFF200" />
               <path d="M25 35 L75 25 L85 65 L55 85 L15 75 Z M50 50 L25 35 M50 50 L75 25 M50 50 L85 65 M50 50 L55 85 M50 50 L15 75" stroke="#FFF200" strokeWidth="0.75" fill="none" strokeDasharray="2 2" />
             </g>
          </svg>

          {/* AI Core Extraction Point */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Sparkles className="text-[#FFF200] animate-[ai-core-glow_3s_infinite]" size={80} strokeWidth={1.2} />
          </div>
        </div>
      </div>

      {/* 3. TAILORED DASHBOARD CARDS */}
      <div className="absolute right-0 w-52 h-full flex flex-col justify-between py-12 z-30">
        
        {/* Executive Card: Margin Projection */}
        <div className="bg-[#111] border border-gray-800 p-4 rounded-2xl shadow-2xl transform hover:-translate-x-2 transition-transform">
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

        {/* Site Operations Card */}
        <div className="bg-[#111] border border-gray-800 p-4 rounded-2xl shadow-2xl transform translate-x-6 hover:translate-x-2 transition-transform">
          <div className="flex items-center gap-2 mb-2.5">
            <LayoutDashboard className="text-[#FFF200]" size={14} />
            <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Operations</span>
          </div>
          <div className="flex flex-col gap-2">
             <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full w-[78%] bg-[#FFF200]"></div>
             </div>
             <div className="text-[10px] text-white font-bold">Schedule Variance: <span className="text-[#FFF200]">-2 Days</span></div>
          </div>
        </div>

        {/* Validation Card */}
        <div className="bg-[#111] border border-gray-800 p-4 rounded-2xl shadow-2xl transform translate-x-6 hover:-translate-x-2 transition-transform">
          <div className="flex items-center gap-2 mb-2.5">
            <FileCheck className="text-[#FFF200]" size={14} />
            <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">AI Validation</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-full h-1.5 rounded-full bg-blue-500 overflow-hidden shadow-[0_0_8px_#3B82F6]"></div>
            <div className="text-[10px] text-gray-300 font-medium">As-Built Match: <span className="text-white font-bold">99.8%</span></div>
          </div>
        </div>

      </div>

    </div>
  </div>


              </div>

            </div>
          </div>
        </div>
      </section>

{/* ====================== PROJECT LIFECYCLE SECTION ====================== */}
      <section className="relative bg-white pt-12 lg:pt-16 pb-28 lg:pb-32 overflow-hidden font-sans">
        
        <style>{`
          /* Metro dot animation */
          @keyframes metro-transit {
            0%, 8% { left: 0%; transform: translateX(-50%) scale(1); }
            12% { left: 20%; transform: translateX(-50%) scale(1.1); }
            16%, 24% { left: 20%; transform: translateX(-50%) scale(1); }
            28% { left: 40%; transform: translateX(-50%) scale(1.1); }
            32%, 40% { left: 40%; transform: translateX(-50%) scale(1); }
            44% { left: 60%; transform: translateX(-50%) scale(1.1); }
            48%, 56% { left: 60%; transform: translateX(-50%) scale(1); }
            60% { left: 80%; transform: translateX(-50%) scale(1.1); }
            64%, 72% { left: 80%; transform: translateX(-50%) scale(1); }
            76% { left: 100%; transform: translateX(-50%) scale(1.1); }
            80%, 100% { left: 100%; transform: translateX(-50%) scale(1); }
          }
          
          /* Metro trail animation (Syncs perfectly with the dot) */
          @keyframes metro-trail {
            0%, 8% { width: 0%; }
            12%, 24% { width: 20%; }
            28%, 40% { width: 40%; }
            44%, 56% { width: 60%; }
            60%, 72% { width: 80%; }
            76%, 100% { width: 100%; }
          }
        `}</style>

        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ 
            backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", 
            backgroundSize: "80px 80px",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 90%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 90%, transparent 100%)"
          }} 
        />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-16 lg:mb-20">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-6 shadow-sm">
                Project Lifecycle
              </div>
              <h2 className="text-[clamp(40px,5vw,64px)] font-black tracking-tighter leading-[1.05] text-black">
                Intelligence that plugs into<br />
                <span className="relative inline-block mt-2">
                  <span className="absolute inset-y-1 -inset-x-3 bg-[#FFF200] rounded-xl shadow-sm transform -skew-x-2"></span>
                  <span className="relative text-black"> every phase </span>
                </span> of a project.
              </h2>
            </div>
            <div className="max-w-md">
              <p className="text-xl text-gray-500 font-medium leading-relaxed">
                Hover on a service to see where it delivers value across the lifecycle.
              </p>
            </div>
          </div>

          {/* DESKTOP HORIZONTAL PIPELINE - Borders and Table-styling removed */}
    <div className="hidden lg:block relative pt-6 pb-12 mt-12">
      
      {/* The Internal Vertical Grid Lines - outer border-x removed */}
      <div className="absolute inset-0 grid grid-cols-6 divide-x divide-gray-200 pointer-events-none z-0">
        <div></div><div></div><div></div><div></div><div></div><div></div>
      </div>

      {/* The Headers */}
      <div className="grid grid-cols-6 items-center text-[12px] font-black uppercase tracking-widest text-black mb-12 relative z-10 pt-4">
        {["Land Acquisition", "Design & Planning", "Construction & Execution", "Sales & Marketing", "Handover", "O&M"].map(phase => (
          <div key={phase} className="text-center px-2">{phase}</div>
        ))}
      </div>
      
      {/* The Metro Timeline */}
      <div className="relative h-[2px] bg-black/10 mb-16 z-10">
        <div className="absolute inset-0 grid grid-cols-6">
          {[1,2,3,4,5,6].map(n => (
            <div key={n} className="flex justify-center">
               <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black -mt-[15px] bg-white border-2 border-black/10 text-gray-400 relative z-10 shadow-sm">{n}</div>
            </div>
          ))}
        </div>
        <div className="absolute top-0 bottom-0 left-[8.333%] right-[8.333%] pointer-events-none">
           <div className="absolute top-0 left-0 h-full bg-[#FFF200] z-10" style={{ animation: 'metro-trail 14s ease-in-out infinite' }}></div>
           <div className="absolute top-0 -mt-[15px] w-8 h-8 rounded-full bg-[#FFF200] border-2 border-black z-20 flex items-center justify-center shadow-md" style={{ animation: 'metro-transit 14s ease-in-out infinite' }}><div className="w-2 h-2 bg-black rounded-full animate-pulse"></div></div>
        </div>
      </div>
      
      {/* The Staggered Pills Container */}
      <div className="relative space-y-4 z-20">
        
        {/* 1. Leads to Land Survey page */}
        <LifecycleLinePill 
          title="Land Survey Analytics" 
          start={1} end={2} 
          imageUrl="https://i.ibb.co/wN4M0j7f/Screenshot-2026-02-19-at-17-43-41.png" 
          description="Millimeter-accurate topo, contours, and volumetric data for early-feasibility." 
          link="/solutions/land-survey"
        />
        
        {/* 2. Leads to Construction Monitoring page */}
        <LifecycleLinePill 
          title="Construction Monitoring" 
          start={3} end={5} 
          imageUrl="https://i.ibb.co/HDGVjy6S/Screenshot-2026-02-19-at-22-12-29.png" 
          description="Automated tracking, time-lapse, and visual deviation detection." 
          link="/solutions/construction-monitoring"
        />
        
        <div className="relative w-full">
           {/* 3a. Leads to Scan to BIM page */}
           <LifecycleLinePill 
             title="BIM Analytics" 
             start={2} end={3} 
             imageUrl="https://i.ibb.co/jcSkjrn/Website-Visuals-Presentation-8.png" 
             description="Convert physical reality into accurate BIM models for coordination." 
             link="/solutions/scan-to-bim"
           />
           <div className="absolute inset-0">
              {/* 3b. Leads to Scan to BIM page */}
              <LifecycleLinePill 
                title="BIM Analytics" 
                start={5} end={5} 
                imageUrl="https://i.ibb.co/jcSkjrn/Website-Visuals-Presentation-8.png" 
                description="Verify final as-builts against design models for handover." 
                link="/solutions/scan-to-bim"
              />
           </div>
        </div>

        {/* 4. Leads to Media & Marketing page */}
        <LifecycleLinePill 
          title="Media & Marketing" 
          start={4} end={4} 
          imageUrl="https://ik.imagekit.io/saxybrgkp/MME/Website%20Images%20Land%20Survey3.png?updatedAt=1773643277664" 
          description="Visual assets and launch films for sales and executive leadership." 
          link="/solutions/media-and-marketing"
        />
        
        {/* 5. Leads to Asset Inspection page */}
        <LifecycleLinePill 
          title="Asset Inspection Analytics" 
          start={5} end={6} 
          imageUrl="https://i.ibb.co/TMWfF9xV/Website-Visuals-Presentation-9.png" 
          description="AI-driven facade and structural defect analysis without scaffolding." 
          link="/solutions/asset-inspection"
        />
      </div>
    </div>
  </div>
</section>
      {/* ====================== METRICS: THE PERMANENT PROOF ====================== */}
      <section className="relative w-full bg-white overflow-hidden font-sans pt-10 lg:pt-16 pb-24 lg:pb-32">
        
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ 
            backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", 
            backgroundSize: "80px 80px",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 90%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 90%, transparent 100%)"
          }} 
        />
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col items-center mb-16 lg:mb-20 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-6 shadow-sm">
              Validated Impact
            </div>
            <h2 className="text-[clamp(36px,5vw,56px)] font-black tracking-tighter leading-[1.05] text-black font-family:montserrat">
              Delivering exceptional business outcomes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 lg:gap-0">
            {[
              {v:"99.9%",    l:"Accuracy Rate", icon: <Check size={32} strokeWidth={3}/>},
              {v:"$4bn+",    l:"Assets Monitored", icon: <LayoutDashboard size={32} strokeWidth={2.5}/>},
              {v:"350k+",    l:"Images Analyzed", icon: <Satellite size={32} strokeWidth={2.5}/>},
              {v:"80%",      l:"Less Site Visits", icon: <Users size={32} strokeWidth={2.5}/>},
              {v:"33%",      l:"Manpower Savings", icon: <BarChart3 size={32} strokeWidth={2.5}/>},
            ].map((m, i) => (
              <div key={m.l} className={`flex flex-col items-center px-4 lg:px-8 transition-all duration-500 hover:-translate-y-2 group `}>
                
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-[20px] lg:rounded-[24px] bg-[#FFF200] text-black flex items-center justify-center mb-6 lg:mb-8 shadow-[0_10px_30px_rgba(255,242,0,0.3)] group-hover:shadow-[0_15px_40px_rgba(255,242,0,0.5)] transition-all duration-300">
                  {m.icon}
                </div>
                
                <p className="text-4xl lg:text-5xl xl:text-6xl font-black text-black mb-2 lg:mb-3 tracking-tighter">
                  {m.v}
                </p>
                <p className="text-[10px] lg:text-xs font-bold text-gray-500 uppercase tracking-widest text-center leading-relaxed">
                  {m.l}
                </p>
                
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ====================== TESTIMONIALS ====================== */}
      <section className="bg-[#FFF200] relative py-16 lg:py-26 overflow-hidden">
         <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ 
            backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", 
            backgroundSize: "80px 80px",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 90%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 90%, transparent 100%)"
          }} 
        />
        <div className="max-w-7xl mx-auto px-10 relative z-10">
          <div className="text-[120px] absolute -top-10 -left-4 font-serif text-black opacity-10 select-none">“</div>
          
          <div className="flex gap-3 mb-16 flex-wrap relative">
            {[
              { id: 0, label: "Site Manager" },
              { id: 1, label: "CXO / Leadership" },
              { id: 2, label: "Owner / Developer" }
            ].map((tab) => (
              <button 
                key={tab.id} 
                onClick={() => setActiveTestimonial(tab.id)}
                className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-500 shadow-sm
                  ${activeTestimonial === tab.id 
                    ? "bg-black text-white scale-105" 
                    : "bg-white text-black hover:bg-black/5"}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative min-h-[300px]">
            {activeTestimonial === 0 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <p className="text-4xl md:text-5xl font-black leading-tight text-black mb-12 max-w-5xl tracking-tighter">
                  "YelloSKYE cut our progress verification time from hours to minutes. I can confirm work and share visual proof without stepping off site."
                </p>
                <div className="font-black text-xl text-black uppercase tracking-widest">Senior Site Manager</div>
                <div className="text-sm font-bold text-black/60 uppercase tracking-tighter">Large Residential Project, Mumbai</div>
              </div>
            )}

            {activeTestimonial === 1 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <p className="text-4xl md:text-5xl font-black leading-tight text-black mb-12 max-w-5xl tracking-tighter">
                  "Leadership finally sees the same reality as the site. We have seen faster approvals, fewer surprises, and real accountability."
                </p>
                <div className="font-black text-xl text-black uppercase tracking-widest">Chief Projects Officer</div>
                <div className="text-sm font-bold text-black/60 uppercase tracking-tighter">National Real Estate Developer</div>
              </div>
            )}

            {activeTestimonial === 2 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <p className="text-4xl md:text-5xl font-black leading-tight text-black mb-12 max-w-5xl tracking-tighter">
                  "I don't chase updates anymore. I open YelloSKYE and immediately know where my project stands. It's the audit trail every owner needs."
                </p>
                <div className="font-black text-xl text-black uppercase tracking-widest">Project Owner</div>
                <div className="text-sm font-bold text-black/60 uppercase tracking-tighter">Commercial Asset Portfolio</div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};