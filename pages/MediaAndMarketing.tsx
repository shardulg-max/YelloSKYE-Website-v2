import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { 
  Check, Globe, Layers, Mail, Twitter, Linkedin, Youtube, Instagram, Pause,
  BarChart, Play, Camera, Film, Zap, Users, ShieldCheck, MapPin,
  Video, MoveUpRight, Sparkles, Image as ImageIcon, Maximize,
  Eye, Building2, Map, ArrowUpRight, Maximize2, LayoutGrid, Activity, Box, ArrowRight, ChevronDown
} from "lucide-react";

// ─── SUB-COMPONENT: USE CASE SECTION ──────────────────────────────────────────

const UseCaseSection = () => {
  const useCases = [
    { title: "Aerial Virtual Tour", img: "https://ik.imagekit.io/saxybrgkp/MME/website/Aerial%20Virtual%20Tour.png", icon: <Globe size={18} />, bullets: ["Dynamic site navigation", "Interactive location hotspots", "Integrated Google Map context"] },
    { title: "Drone Location Video", img: "https://ik.imagekit.io/saxybrgkp/MME/website/Drone%20Location%20Video.png", icon: <Video size={18} />, bullets: ["Cinematic site overviews", "Facility & amenity spotlight", "Immersive exploration experience"] },
    { title: "Interior Virtual Tour", img: "https://ik.imagekit.io/saxybrgkp/MME/website/Interior%20Virtual%20Tour.png", icon: <Building2 size={18} />, bullets: ["Immersive 3D walk-throughs", "CRM-integrated sales tool", "Embed brochures and collateral"] },
    { title: "Interactive 360° Floor Picker", img: "https://ik.imagekit.io/saxybrgkp/MME/website/360%20Floor%20Picker.png", icon: <LayoutGrid size={18} />, bullets: ["Multi-floor view previews", "Day/Night lighting toggles", "Master plan & location hotspots"] },
    { title: "Project Location Animation", img: "https://ik.imagekit.io/saxybrgkp/MME/website/Project%20Location%20Animation.png", icon: <Map size={18} />, bullets: ["Showcase access routes", "Highlight upcoming infrastructure", "Social micro-market insights"] },
    { title: "3D Superimpose", img: "https://ik.imagekit.io/saxybrgkp/MME/website/3D%20Superimpose%20YelloSkye.png", icon: <Layers size={18} />, bullets: ["Visualize projects before completion", "Real-world context alignment", "Investor-grade renderings"] },
    { title: "Construction Progress Film", img: "https://ik.imagekit.io/saxybrgkp/MME/website/Construction%20Monitoring%20Video.png", icon: <Activity size={18} />, bullets: ["Monthly progress tracking", "Automated time-lapse generation", "Side-by-side comparison"] },
    { title: "FPV Storytelling", img: "https://ik.imagekit.io/saxybrgkp/MME/Website%20Images%20Land%20Survey6.png?updatedAt=1773643277564", icon: <Play size={18} />, bullets: ["High-speed complex fly-throughs", "Unique site perspectives", "Ad-ready social content"] },
    { title: "Plot Live Inventory", img: "https://ik.imagekit.io/saxybrgkp/MME/Website%20Images%20Land%20Survey5.png?updatedAt=1773643277583", icon: <Box size={18} />, bullets: ["Real-time inventory mapping", "Visual customer buying guide", "Interactive plot selection"] },
    { title: "Live Cam Stream", img: "https://ik.imagekit.io/saxybrgkp/MME/website/Live%20Cam%20YelloSkye.png", icon: <Camera size={18} />, bullets: ["24/7 real-time site views", "Stakeholder transparency", "Weather & site safety monitoring"] },
    { title: "Corporate & Training Films", img: "https://ik.imagekit.io/saxybrgkp/MME/Website%20Images%20Land%20Survey.png?updatedAt=1773643277575", icon: <Users size={18} />, bullets: ["Safety protocol demonstrations", "Process optimization visuals", "Immersive learning modules"] },
    { title: "360° VR Experience", img: "https://ik.imagekit.io/saxybrgkp/MME/Website%20Images%20Land%20Survey4.png?updatedAt=1773643277655", icon: <Maximize2 size={18} />, bullets: ["Full VR headset compatibility", "Interactive post-production", "Shorten sales closing cycles"] }
  ];

  return (
    <section className="bg-white py-24 lg:py-32 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-6">
            Multi-Sector Use Cases
          </div>
          <h2 className="text-[clamp(32px,4vw,56px)] font-black tracking-tighter leading-[1.05] text-black">
            Marketing assets that <br /> 
            <span className="relative inline-block mt-1">
              <span className="absolute inset-y-1 -inset-x-2 bg-[#FFF200] rounded-lg shadow-sm transform -skew-x-2"></span>
              <span className="relative text-black">drive conversion.</span>
            </span>
          </h2>
          <p className="text-xl text-gray-500 font-medium mt-8 leading-relaxed max-w-xl">
            From land acquisition to final sale, we provide the visual decision infrastructure required to move stakeholders and shorten cycles.
          </p>
        </div>

        {/* Use Case Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {useCases.map((uc, i) => (
            <div key={i} className="group relative flex flex-col h-full">
              
              {/* Image Container */}
              <div className="relative aspect-[3/4] rounded-[24px] overflow-hidden mb-6 bg-gray-100 border border-gray-100 shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:border-[#FFF200]/50 group-hover:-translate-y-1">
                <img 
                  src={uc.img} 
                  alt={uc.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Visual Overlay Button */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight size={18} className="text-black" />
                </div>

                {/* Bottom Label Overlay (Dashboard Style) */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md p-3 rounded-xl border border-white/10 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FFF200] flex items-center justify-center text-black shrink-0">
                    {uc.icon}
                  </div>
                  <span className="text-[11px] font-black text-white uppercase tracking-widest">{uc.title}</span>
                </div>
              </div>

              {/* Text Content */}
              <div className="px-1 flex flex-col flex-1">
                <h4 className="text-lg font-black text-black mb-3 tracking-tight group-hover:text-[#D4C900] transition-colors">{uc.title}</h4>
                <ul className="space-y-2 mt-auto">
                  {uc.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-[13px] text-gray-500 font-medium leading-tight">
                      <div className="w-1 h-1 rounded-full bg-[#FFF200] shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

        {/* Global Footer Callout */}
        <div className="mt-24 p-10 lg:p-16 rounded-[40px] bg-[#0A0A0A] text-white flex flex-col md:flex-row items-center justify-between gap-8 border border-white/5 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFF200]/10 blur-[100px] group-hover:bg-[#FFF200]/20 transition-all duration-700" />
          <div className="relative z-10 max-w-xl">
             <h3 className="text-3xl lg:text-4xl font-black tracking-tight mb-4">Don't see your use case?</h3>
             <p className="text-gray-400 text-lg font-medium">Our technology stack is highly modular. We customize our aerial data delivery for bespoke real estate and infrastructure needs.</p>
          </div>
          <button className="relative z-10 px-8 py-4 bg-[#FFF200] text-black font-black uppercase text-xs tracking-widest rounded-xl hover:bg-white transition-all shadow-[0_15px_30px_rgba(255,242,0,0.2)]">
            Custom Project Request
          </button>
        </div>

      </div>
    </section>
  );
};

// ─── DATA: FLOOR ELEVATIONS ───────────────────────────────────────────────

const FLOOR_VIEWS = [
  { 
    id: '72nd', 
    level: '72nd Floor', 
    height: '220m', 
    desc: 'Penthouse-level unobstructed horizon-to-horizon panoramic views', 
    img: 'https://ik.imagekit.io/saxybrgkp/MME/72.png', 
    time: 'Sunset' 
  },
  { 
    id: '58th', 
    level: '58th Floor', 
    height: '180m', 
    desc: 'Premium upper-tier vantage point capturing sweeping cityscapes', 
    img: 'https://ik.imagekit.io/saxybrgkp/MME/58.png', 
    time: 'Daytime' 
  },
  { 
    id: '38th', 
    level: '38th Floor', 
    height: '120m', 
    desc: 'Mid-to-high tower views capturing the active urban skyline', 
    img: 'https://ik.imagekit.io/saxybrgkp/MME/38.png', 
    time: 'Daytime' 
  },
  { 
    id: '23rd', 
    level: '23rd Floor', 
    height: '75m', 
    desc: 'Elevated neighborhood context well above the canopy level', 
    img: 'https://ik.imagekit.io/saxybrgkp/MME/23.png', 
    time: 'Morning' 
  }
];

export const FloorPickerModule = () => {
  // Start at index 3 (6th Floor)
  const [activeFloor, setActiveFloor] = useState(3);

  // Auto-play from bottom to top every 500ms
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFloor((prev) => {
        if (prev === 0) return 3; // If at Terrace (0), loop back to 6th Floor (3)
        return prev - 1;          // Otherwise, move up the building (decrease index)
      });
    }, 2000); // Exactly half a second

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white py-16 lg:py-24 relative overflow-hidden font-sans">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", backgroundSize: "80px 80px", maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)" }} />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-14">
          
          <div className="lg:w-[65%] relative w-full flex">
            <div className="relative z-20 bg-[#080808] rounded-[44px] p-3 shadow-[0_40px_100px_rgba(0,0,0,0.15)] border-[2px] border-[#222] w-full flex flex-col">
              <div className="absolute -top-[2px] right-24 w-12 h-[3px] bg-[#1a1a1a] rounded-t-md border-x border-[#333]"></div>
              <div className="relative flex-1 w-full rounded-[34px] overflow-hidden bg-black shadow-inner min-h-[400px]">
                {FLOOR_VIEWS.map((floor, idx) => (
                  <div key={floor.id} className={`absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${activeFloor === idx ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'}`}>
                    <img src={floor.img} className="w-full h-full object-cover brightness-95" alt={floor.level} />
                    <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                      <div className="bg-black/60 backdrop-blur-xl px-4 py-2.5 rounded-full border border-white/10 shadow-lg flex items-center gap-2.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_#EF4444]"></div>
                        <span className="text-white text-[9px] font-black uppercase tracking-widest mt-0.5">Floor View Active</span>
                      </div>
                      <div className="bg-black/60 backdrop-blur-xl w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white">
                        <Map size={16} />
                      </div>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[24px] p-4 flex items-center justify-between shadow-2xl">
                         <div>
                           <div className="text-[9px] font-black uppercase tracking-widest text-white/60 mb-1">Current Elevation</div>
                           <div className="text-xl font-black text-white">{floor.level} <span className="text-[#FFF200] ml-2">({floor.height})</span></div>
                         </div>
                         <div className="text-right">
                           <div className="text-[9px] font-black uppercase tracking-widest text-white/60 mb-1">Lighting</div>
                           <div className="text-xs font-bold text-white">{floor.time} Render</div>
                         </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -inset-8 bg-black/5 blur-[80px] rounded-[100px] -z-10"></div>
          </div>

          <div className="lg:w-[35%] flex flex-col justify-between py-2">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border text-[9px] font-black uppercase tracking-[0.2em] text-gray-500 mb-5 shadow-sm">
                <Sparkles size={12} className="text-[#D4C900]" /> Floor Picker
              </div>
              <h2 className="text-[clamp(26px,2.5vw,38px)] xl:text-[40px] font-black tracking-tighter leading-[1.1] text-black mb-4">
                <span className="whitespace-nowrap">Accelerate Pre-Sales with</span> <br />
                <span className="relative inline-block mt-2">
                  <span className="absolute inset-y-1 -inset-x-2 bg-[#FFF200] rounded-md shadow-sm transform -skew-x-2"></span>
                  <span className="relative text-black">Irrefutable Visual Proof.</span>
                </span>
              </h2>
              <p className="text-sm text-gray-500 font-medium leading-relaxed max-w-[400px]">
                Move beyond 2D plans. Give prospective buyers the absolute confidence to commit by allowing them to experience the exact view from their future unit today.
              </p>
            </div>

            <div className="space-y-2.5 relative mb-8">
              <div className="absolute left-[22px] top-4 bottom-4 w-[2px] bg-gray-100 z-0 hidden sm:block"></div>
              {FLOOR_VIEWS.map((floor, idx) => {
                const isActive = activeFloor === idx;
                return (
                  <button key={floor.id} onClick={() => setActiveFloor(idx)} className={`w-full relative z-10 flex items-center px-3 py-2.5 rounded-[16px] transition-all duration-300 text-left border ${isActive ? 'bg-black border-black shadow-[0_15px_30px_rgba(0,0,0,0.15)] translate-x-2' : 'bg-white border-gray-100 hover:border-gray-300 hover:bg-gray-50'}`}>
                    <div className={`w-9 h-9 shrink-0 rounded-[10px] flex flex-col items-center justify-center transition-colors ${isActive ? 'bg-[#FFF200]' : 'bg-gray-50'}`}>
                      <Building2 size={12} className={isActive ? 'text-black mb-0.5' : 'text-gray-400 mb-0.5'} strokeWidth={2.5}/>
                      <span className={`text-[8px] font-black uppercase tracking-wider ${isActive ? 'text-black' : 'text-gray-500'}`}>{floor.height}</span>
                    </div>
                    <div className="ml-3 flex-grow">
                      <div className={`font-black text-sm tracking-tight mb-0.5 transition-colors ${isActive ? 'text-white' : 'text-black'}`}>{floor.level}</div>
                      <div className={`text-[10px] font-medium transition-colors line-clamp-1 ${isActive ? 'text-gray-400' : 'text-gray-500'}`}>{floor.desc}</div>
                    </div>
                    <div className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-500 ${isActive ? 'opacity-100 bg-white/10' : 'opacity-0 scale-50'}`}>
                      <Eye size={12} className="text-[#FFF200]" />
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-2">
               {[{ label: 'Drive Faster Decisions', icon: <Sparkles size={12}/> }, { label: 'Premium Buyer Experience', icon: <Check size={12}/> }].map((item, i) => (
                 <div key={i} className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-gray-600">
                   <div className="w-4 h-4 rounded-full bg-[#FFF200]/20 flex items-center justify-center text-black">{item.icon}</div>
                   {item.label}
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── DATA: DYNAMIC SHOWCASE ───────────────────────────────────────────────
const SHOWCASE_OFFERINGS = [
  { title: "Cinematic Aerial Videos", label: "Professional Editing", desc: "Professionally color-graded 4K aerial shots that showcase site scale and grandeur.", img: "https://ik.imagekit.io/saxybrgkp/MME/Website%20Images%20Land%20Survey3.png?updatedAt=1773643277664" },
  { title: "Progress Timelapses", label: "Construction Evolution", desc: "Compress months of construction grit into seconds of glory for investor updates.", img: "https://ik.imagekit.io/saxybrgkp/MME/Website%20Images%20Land%20Survey34.png" },
  { title: "360° Virtual Tours", label: "Remote Walkthroughs", desc: "Let buyers explore units remotely from anywhere, on any device, with immersive tours.", img: "https://ik.imagekit.io/saxybrgkp/MME/Website%20Images%20Land%20Survey4.png?updatedAt=1773643277655" },
  { title: "FPV Flythrough Videos", label: "Immersive Drone Racing", desc: "Heart-pounding POV drone racing through tight interior structures for high-impact marketing.", img: "https://ik.imagekit.io/saxybrgkp/MME/Website%20Images%20Land%20Survey2.png?updatedAt=1773643277686" },
  { title: "High-Resolution Photography", label: "Marketing Ready", desc: "Professional-grade imagery for brochures, websites, and advertising capturing the golden hour.", img: "https://ik.imagekit.io/saxybrgkp/MME/Website%20Images%20Land%20Survey6.png?updatedAt=1773643277564" }
];

// ─── SUB-COMPONENT: EDITORIAL SHOWCASE ───────────────────────────────
export const EditorialShowcase = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play timer that respects the isPaused state
  useEffect(() => {
    if (isPaused) return; // Stop the timer if paused
    
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % SHOWCASE_OFFERINGS.length);
    }, 3000); // 3 seconds per slide
    
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="bg-white py-12 lg:py-24 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", backgroundSize: "80px 80px", maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)" }} />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: iPad / Screen Mockup */}
          <div className="lg:col-span-7 relative w-full group">
            <div className="relative z-20 bg-[#080808] rounded-[44px] p-3.5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-[1.5px] border-white/10">
              <div className="absolute -top-[2px] right-16 w-12 h-[3px] bg-[#1a1a1a] rounded-t-sm border-x border-white/5"></div>
              <div className="relative aspect-[4/3] w-full rounded-[32px] overflow-hidden bg-black">
                {SHOWCASE_OFFERINGS.map((slide, index) => (
                  <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${activeSlide === index ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <img src={slide.img} className="w-full h-full object-cover" alt={slide.title} />
                    <div className="absolute bottom-8 left-8 bg-black/40 backdrop-blur-2xl px-6 py-4 rounded-2xl border border-white/20 shadow-2xl">
                      <div className="text-[9px] font-black uppercase tracking-[0.2em] text-[#FFF200] mb-1">{slide.label}</div>
                      <div className="text-base font-bold text-white tracking-tight">{slide.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -inset-4 bg-black/5 blur-3xl rounded-[60px] -z-10"></div>
          </div>

          {/* RIGHT: Content & Navigation */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                <Sparkles size={12} className="text-[#D4C900]" /> Beyond Documentation
              </div>
              <h2 className="text-[clamp(34px,3.5vw,48px)] font-black tracking-tighter leading-[1.05] text-black">
                Engaging content. <br />
                <span className="relative inline-block mt-2">
                  <span className="absolute inset-y-1 -inset-x-2 bg-[#FFF200] rounded-lg shadow-sm"></span>
                  <span className="relative text-black">Tailored for your brand.</span>
                </span>
              </h2>
              <p className="text-lg text-gray-500 font-medium leading-relaxed max-w-md">
                YelloSKYE’s reality capture serves a dual purpose: operational monitoring for your teams, and stunning visual content for your stakeholders.
              </p>
            </div>
            
            {/* Dynamic Info Box (Now with Yellow Border and Fade Animation) */}
            <div className="bg-white p-8 rounded-[32px] border-2 border-[#FFF200] shadow-[0_15px_40px_rgba(255,242,0,0.12)] min-h-[160px] flex flex-col justify-center transition-all duration-500 relative overflow-hidden">
               {/* key={activeSlide} forces React to re-render this block, triggering the animate-in fade every time it changes */}
               <div key={activeSlide} className="animate-in fade-in zoom-in-[0.98] duration-500">
                 <h4 className="text-black font-black uppercase text-[11px] tracking-widest mb-3">
                   {SHOWCASE_OFFERINGS[activeSlide].title}
                 </h4>
                 <p className="text-gray-600 font-medium leading-relaxed">
                   {SHOWCASE_OFFERINGS[activeSlide].desc}
                 </p>
               </div>
            </div>

            {/* Custom Pause/Play Navigation Widget (Matching your screenshot) */}
            <div className="flex items-center gap-3 pt-2">
              
              {/* Progress Pill */}
              <div className="bg-gray-100 rounded-full px-5 py-3.5 flex items-center gap-3">
                {SHOWCASE_OFFERINGS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setActiveSlide(i);
                      setIsPaused(true); // Automatically pause if the user manually clicks a slide
                    }}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      activeSlide === i ? 'w-8 bg-gray-800' : 'w-2 bg-gray-400 hover:bg-gray-600'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              {/* Pause/Play Circular Button */}
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-800 transition-colors shadow-sm"
                aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
              >
                {isPaused ? (
                  <Play size={18} fill="currentColor" className="ml-0.5" /> 
                ) : (
                  <Pause size={18} fill="currentColor" />
                )}
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// ─── MAIN COMPONENT ────────────────────────────────────────────────────────────

export const MediaMarketing: React.FC = () => {
  const navigate = useNavigate(); 
    
  return (
    <div className="bg-white text-black font-sans selection:bg-[#FFF200] selection:text-black">
      
      {/* ════════════════════════════════════════
          HERO - MEDIA & MARKETING
      ════════════════════════════════════════ */}
      <section className="pt-24 md:pt-32 lg:pt-44 pb-12 lg:pb-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", backgroundSize: "80px 80px", maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)" }} />
             
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-10 lg:mb-14 items-center">
            
            <div className="lg:col-span-7 flex flex-col">
              <h1 className="text-[11vw] md:text-[70px] lg:text-[90px] font-black leading-[0.85] tracking-tighter text-black m-0 p-0 mb-6 lg:mb-8">
                Media & Marketing
              </h1>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] lg:text-[14px] font-bold text-gray-500 tracking-wide">
                <span className="flex items-center gap-1.5"><Check size={16} strokeWidth={4} className="text-[#FFF200]"/> Cinematic 4K Aerials</span>
                <span className="w-1.5 h-1.5 bg-gray-300 rounded-full hidden sm:block"></span>
                <span className="flex items-center gap-1.5"><Check size={16} strokeWidth={4} className="text-[#FFF200]"/> FPV Flythroughs</span>
                <span className="w-1.5 h-1.5 bg-gray-300 rounded-full hidden md:block"></span>
                <span className="flex items-center gap-1.5"><Check size={16} strokeWidth={4} className="text-[#FFF200]"/> 360° Sales Tours</span>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col">
              <h2 className="text-2xl lg:text-[28px] font-medium leading-[1.3] text-gray-800 tracking-tight">
                Transform construction data into stunning visual content that sells units and builds your brand.
              </h2>
            </div>
          </div>

          <div className="w-full aspect-[4/3] md:aspect-[2.2/1] rounded-[32px] lg:rounded-[40px] overflow-hidden bg-gray-100 relative shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-200 group">
            <img src="https://ik.imagekit.io/saxybrgkp/MME/Website%20Images%20Land%20Survey3.png?updatedAt=1773643277664" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[20s] ease-out" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10"></div>

            <div className="absolute bottom-6 right-6 lg:bottom-8 lg:right-8 bg-black/60 backdrop-blur-2xl px-6 py-4 rounded-2xl border border-white/20 flex items-center gap-6 shadow-2xl">
               <div className="text-right">
                  <div className="text-[9px] text-gray-300 font-bold uppercase tracking-widest mb-1">Resolution</div>
                  <div className="text-[#FFF200] font-mono text-base font-bold">4K PRORES</div>
               </div>
               <div className="w-[1px] h-8 bg-white/20"></div>
               <div className="text-right">
                  <div className="text-[9px] text-gray-300 font-bold uppercase tracking-widest mb-1">Format</div>
                  <div className="text-white font-mono text-base font-bold">RAW / LOG</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          THE "WHY" - PROBLEM VS SOLUTION
      ════════════════════════════════════════ */}
      <section className="bg-white py-24 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <h3 className="text-[clamp(32px,3vw,42px)] font-black tracking-tighter text-black leading-tight">
               We already capture the site for you.
               <span className="relative inline-block mt-1 mx-2">
                <span className="absolute inset-y-1 -inset-x-3 bg-[#FFF200] rounded-lg shadow-sm transform -skew-x-2"></span>
                <span className="relative text-black"> Why not make it shareable?</span>
              </span>
             </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <ImageIcon size={20}/>, title: "Marketing Needs", desc: "Sales teams request site photos daily. Construction docs aren't ready for a premium sales deck." },
              { icon: <BarChart size={20}/>, title: "Investor Updates", desc: "Quarterly reports need visual proof. Manual photo collection looks inconsistent and amateur." },
              { icon: <Users size={20}/>, title: "Pre-Sales Tours", desc: "Buyers want to see units before completion. Safety limits site visits; digital tours don't." },
              { icon: <Film size={20}/>, title: "Brand Storytelling", desc: "Achievements worth celebrating—but raw drone photos don't tell the full story of your craft." }
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
          EDITORIAL SHOWCASE - INTEGRATED SLIDESHOW
      ════════════════════════════════════════ */}
      <EditorialShowcase />

      {/* ════════════════════════════════════════
          USE CASES SECTION
      ════════════════════════════════════════ */}
      <UseCaseSection />

      {/* ════════════════════════════════════════
          FLOOR PICKER
      ════════════════════════════════════════ */}
      <FloorPickerModule />

{/* ════════════════════════════════════════
          HUB & SPOKE - ONE CAPTURE, MULTIPLE AUDIENCES
      ════════════════════════════════════════ */}
      <section className="bg-white pt-16 pb-24 relative overflow-hidden font-sans">
        <style>{`
          @keyframes data-flow { from { stroke-dashoffset: 24; } to { stroke-dashoffset: 0; } }
          .animate-data-flow { stroke-dasharray: 6 6; animation: data-flow 1s linear infinite; }
          @keyframes hub-glow { 0%, 100% { opacity: 0.15; transform: scale(1); } 50% { opacity: 0.25; transform: scale(1.05); } }
        `}</style>
        {/* Aesthetic Seamless Grid Fade */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", 
          backgroundSize: "80px 80px",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)"
        }} 
      />
        <div className="max-w-[1500px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-[clamp(36px,4vw,56px)] font-black tracking-tighter text-black">
              One Capture.
            <span className="relative inline-block mt-1 mx-2">
                <span className="absolute inset-y-1 -inset-x-2 bg-[#FFF200] rounded-lg shadow-sm transform -skew-x-2"></span>
                <span className="relative text-black"> Multiple Audiences.</span>
              </span>
            </h2>
          </div>

          <div className="relative w-full max-w-[1300px] mx-auto min-h-[500px] flex items-center justify-center">
             
             {/* PERFECTLY ALIGNED SVG LINES */}
             <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
                <svg className="w-full h-[450px]" viewBox="0 0 1000 450" preserveAspectRatio="none">
                  {/* Left Side Lines */}
                  <path d="M 350 225 C 310 225, 310 60, 272 60" fill="none" stroke="#FFF200" strokeWidth="2.5" className="animate-data-flow" />
                  <path d="M 350 225 L 272 225" fill="none" stroke="#FFF200" strokeWidth="2.5" className="animate-data-flow" />
                  <path d="M 350 225 C 310 225, 310 390, 272 390" fill="none" stroke="#FFF200" strokeWidth="2.5" className="animate-data-flow" />
                  
                  {/* Right Side Lines */}
                  <path d="M 650 225 C 690 225, 690 60, 728 60" fill="none" stroke="#FFF200" strokeWidth="2.5" className="animate-data-flow" />
                  <path d="M 650 225 L 728 225" fill="none" stroke="#FFF200" strokeWidth="2.5" className="animate-data-flow" />
                  <path d="M 650 225 C 690 225, 690 390, 728 390" fill="none" stroke="#FFF200" strokeWidth="2.5" className="animate-data-flow" />
                </svg>
             </div>
             
             <div className="w-full flex flex-col lg:grid lg:grid-cols-[27.2%_auto_27.2%] justify-between relative z-10 items-stretch h-[450px]">
                
                {/* LEFT COL */}
                <div className="flex flex-col justify-between h-full relative z-20">
                   {[
                     { role: "Marketing Teams", desc: "Fresh monthly content for social media and campaigns—all sourced from reality capture.", icon: <ImageIcon size={18}/> },
                     { role: "Sales Teams", desc: "Show buyers units before completion. Accelerate pre-sales with virtual tours.", icon: <Users size={18}/> },
                     { role: "Investor Relations", desc: "Progress updates with visual proof. Show exactly where capital is deployed.", icon: <ShieldCheck size={18}/> }
                   ].map((persona, i) => (
                     <div key={i} className="p-5 rounded-[22px] bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#FFF200] transition-all duration-300 group relative flex flex-col items-start h-[120px] justify-center">
                        {/* Dot correctly centered using -right-2 (which is exactly half of the 16px width) */}
                        <div className="hidden lg:block absolute top-1/2 -right-2 -translate-y-1/2 w-4 h-4 bg-white border-[3px] border-[#FFF200] rounded-full shadow-[0_0_10px_#FFF200] z-30"></div>
                        <h4 className="text-black font-black text-[12px] tracking-widest uppercase mb-2">{persona.role}</h4>
                        <p className="text-gray-500 font-medium leading-snug text-[12px]">{persona.desc}</p>
                     </div>
                   ))}
                </div>

                {/* CENTER IMAGE */}
                <div className="relative group flex justify-center items-center px-4 lg:px-12 z-10">
                   <div className="absolute inset-0 bg-[#FFF200] rounded-full blur-[100px] opacity-15 pointer-events-none" style={{ animation: 'hub-glow 4s ease-in-out infinite' }}></div>
                   <div className="relative w-full max-w-[550px] aspect-square rounded-[28px] bg-black border-[3px] border-black shadow-[0_40px_100px_rgba(0,0,0,0.15)] p-0.5 z-20 overflow-hidden">
                      <div className="w-full h-full rounded-[24px] overflow-hidden relative">
                         <img src="https://ik.imagekit.io/saxybrgkp/MME/website/Drone%20Location%20Video.png?updatedAt=1773643441240" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Truth Hub" />
                         <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <Video size={48} className="text-[#FFF200] group-hover:scale-125 transition-transform" />
                         </div>
                      </div>
                   </div>
                </div>

                {/* RIGHT COL */}
                <div className="flex flex-col justify-between h-full relative z-20">
                   {[
                     { role: "Leadership", desc: "Celebrate milestones with partners. Capture topping out and share achievements.", icon: <Sparkles size={18}/> },
                     { role: "Brand Building", desc: "Showcase craftsmanship and scale. Build reputation through visual storytelling.", icon: <Video size={18}/> },
                     { role: "Awards & Recognition", desc: "Submit high-quality documentation for industry awards. Prove excellence.", icon: <Maximize size={18}/> }
                   ].map((persona, i) => (
                     <div key={i} className="p-5 rounded-[22px] bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#FFF200] transition-all duration-300 group relative flex flex-col items-start h-[120px] justify-center">
                        {/* Dot correctly centered using -left-2 */}
                        <div className="hidden lg:block absolute top-1/2 -left-2 -translate-y-1/2 w-4 h-4 bg-white border-[3px] border-[#FFF200] rounded-full shadow-[0_0_12px_#FFF200] z-30"></div>
                        <h4 className="text-black font-black text-[12px] tracking-widest uppercase mb-2">{persona.role}</h4>
                        <p className="text-gray-500 font-medium leading-snug text-[12px]">{persona.desc}</p>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
};

// ✅ ADDED: The correct main default export for the whole file!
export default MediaMarketing;