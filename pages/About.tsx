import React, { useEffect } from "react";
import { 
  Check, Globe, Layers, Mail, Twitter, Linkedin, Youtube, Instagram, 
  MapPin, Sparkles, ShieldCheck, Eye, Zap, Target, Users, AlertTriangle, ShieldAlert,
  ArrowRight, Search, Activity, RefreshCw, Box
} from "lucide-react";

// ─── STYLES & ANIMATIONS ──────────────────────────────────────────────────
const AboutStyles = () => (
  <style>{`
    @keyframes line-glow {
      0% { background-position: 0% 50%; }
      100% { background-position: 100% 50%; }
    }
    .animate-line-glow {
      background: linear-gradient(90deg, transparent, #FFF200, transparent);
      background-size: 200% 100%;
      animation: line-glow 3s linear infinite;
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    .animate-float { animation: float 5s ease-in-out infinite; }
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
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* LEFT SIDE: Copy (Increased to 6 columns for balance) */}
            <div className="lg:col-span-6 flex flex-col justify-center items-start">
              
              {/* Forced 3-Line Heading */}
              <h1 className="flex flex-col items-start text-[clamp(40px,4.5vw,78px)] font-black tracking-tighter leading-[1.02] text-black mb-14">
                <span className="whitespace-nowrap">We exist to make</span>
                <span className="whitespace-nowrap mt-1">the built environment</span>
                <span className="relative inline-block mt-2 lg:mt-3 w-fit">
                  <span className="absolute inset-y-1 lg:inset-y-2 -inset-x-3 lg:-inset-x-4 bg-[#FFF200] rounded-xl lg:rounded-2xl shadow-sm"></span>
                  <span className="relative text-black whitespace-nowrap px-2">trustworthy.</span>
                </span>
              </h1>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10 max-w-2xl">
                {[
                  { label: "Clarity", desc: "Making on-site reality unambiguous and dependable.", icon: <Eye size={18} /> },
                  { label: "Shared Reality", desc: "One version of progress, for all stakeholders.", icon: <Users size={18} /> },
                  { label: "Intelligence", desc: "Turning reality into informed, data-backed action.", icon: <Zap size={18} /> },
                  { label: "Decision Confidence", desc: "Enable action without second-guessing site conditions.", icon: <ShieldCheck size={18} /> }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group cursor-default">
                    <div className="w-10 h-10 rounded-xl bg-[#FFF200] flex items-center justify-center shrink-0 mt-1 shadow-[0_8px_20px_rgba(255,242,0,0.3)] group-hover:scale-110 transition-transform duration-300">
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

            {/* RIGHT SIDE: Wider Image */}
            <div className="lg:col-span-6 relative mt-12 lg:mt-0">
              {/* CHANGED: aspect-[4/3] makes the image wide and rectangular instead of tall */}
              <div className="relative aspect-[4/3] lg:aspect-[16/11] w-full overflow-hidden rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.15)] group">
                <img 
                  src="https://i.ibb.co/LX00P9s0/Screenshot-2026-02-24-at-12-58-21.png" 
                  className="w-full h-full object-cover grayscale-[10%] group-hover:scale-105 transition-transform duration-[10s] ease-out" 
                  alt="Site Intelligence Visual" 
                />
                <div className="absolute inset-0 rounded-[40px] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)] pointer-events-none"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

{/* ════════════════════════════════════════
          THE CORE PROBLEM: TWO TIMELINES (FINAL REFINEMENT)
      ════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-[#0A0A0A] text-white relative overflow-hidden font-sans">
        
        {/* Subtle Section Grid Background */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
             style={{ backgroundImage: "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            {/* LEFT SIDE: STRATEGIC NARRATIVE (Strictly 2 Lines) */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <h2 className="text-[clamp(36px,4.5vw,55px)] font-black tracking-tighter mb-8 leading-[1.0] text-white w-full">
                Construction moves on<br />
                <span className="text-[#FFF200]">two timelines.</span>
              </h2>
              
              <div className="space-y-8">
                <p className="text-xl text-white font-medium leading-relaxed max-w-[580px]">
                  There is the work that happens on the ground, and the record used to understand it. Usually, these two drift apart.
                </p>
                
                <div className="p-8 bg-red-500/5 border-l-4 border-red-500 rounded-r-3xl">
                  <p className="text-white text-xl font-bold leading-snug">
                    "When reality is fragmented, teams compensate with assumptions, and assumptions are where risk hides
                  </p>
                </div>

                <p className="text-lg text-white font-medium leading-relaxed max-w-[580px]">
                  YelloSKYE ensures the visual record of work keeps pace with the work itself, providing a single version of progress for all stakeholders.
                </p>
              </div>
            </div>
            
            {/* RIGHT SIDE: THE GAP ANALYSIS GRAPH (Pills Spaced Out) */}
            <div className="lg:col-span-6 relative">
                <div className="relative aspect-[16/10] w-full rounded-[40px] border border-white/10 bg-[#0F0F0F] shadow-2xl overflow-hidden p-12 flex flex-col justify-center">
                    
                    {/* Inner Graph Grid */}
                    <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'linear-gradient(#444 1px, transparent 1px), linear-gradient(90deg, #444 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                    
                    <div className="relative h-full w-full border-l-2 border-b-2 border-white/20">
                      
                       <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 600 200">
                          {/* THE GAP (Risk Shading) */}
                          <path 
                            d="M 0 160 Q 150 120, 300 80 T 600 40 L 600 145 T 300 150 Q 150 155, 0 160 Z" 
                            fill="rgba(239, 68, 68, 0.15)" 
                          />

                          {/* Physical Reality Curve (Top Line) */}
                          <path 
                            d="M 0 160 Q 150 120, 300 80 T 600 40" 
                            fill="none" 
                            stroke="rgba(255, 255, 255, 0.8)" 
                            strokeWidth="3" 
                          />
                          
                          {/* Paper Record Curve (Bottom Line) */}
                          <path 
                            d="M 0 160 Q 150 155, 300 150 T 600 145" 
                            fill="none" 
                            stroke="#EF4444" 
                            strokeWidth="4" 
                          />
                       </svg>

                       {/* Callout Labels */}
                       <div className="absolute -top-3 right-0 flex items-center gap-3">
                         <div className="w-2.5 h-2.5 rounded-full bg-white/80" />
                         <span className="text-[10px] font-black uppercase tracking-widest text-white/80">Physical Reality</span>
                       </div>

                       <div className="absolute top-[85%] right-0 flex items-center gap-3">
                         <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                         <span className="text-[10px] font-black uppercase tracking-widest text-red-500">Paper Record</span>
                       </div>
                    </div>

                    {/* X & Y Axis Meta Labels */}
                    <div className="absolute left-3 top-1/2 -rotate-90 origin-left text-[8px] font-black uppercase tracking-[0.4em] text-gray-600">Site Completion</div>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[8px] font-black uppercase tracking-[0.4em] text-gray-600">Project Timeline</div>

                </div>
            </div>

          </div>
        </div>
      </section>
{/* ════════════════════════════════════════
          STRATEGIC FOUNDATION (Interactive Bento Grid)
      ════════════════════════════════════════ */}
      <section className="py-24 lg:py-40 bg-white relative overflow-hidden border-t border-gray-100">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
             style={{ 
               backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", 
               backgroundSize: "60px 60px" 
             }} />

        <div className="max-w-[1450px] mx-auto px-6 lg:px-10 relative z-10">
          
          {/* HIGH-CONTRAST VISION & MISSION CARDS */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10 mb-32">
            
            {/* Vision - Premium Dark Card */}
            <div className="group relative p-10 lg:p-14 rounded-[40px] bg-[#0A0A0A] overflow-hidden transition-all duration-500 hover:-translate-y-2 shadow-[0_20px_50px_rgba(0,0,0,0.15)] cursor-default">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#FFF200]/10 blur-[80px] rounded-full group-hover:bg-[#FFF200]/20 transition-colors duration-700 pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full bg-white/10 border border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-[#FFF200]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FFF200] animate-pulse"></div>
                  Our Vision
                </div>
                <p className="text-3xl lg:text-4xl font-black tracking-tighter text-white leading-[1.15]">
                  Revolutionizing customer business by providing industry-leading AI solutions with aerial data.
                </p>
              </div>
            </div>

            {/* Mission - Signature Yellow Card */}
            <div className="group relative p-10 lg:p-14 rounded-[40px] bg-[#FFF200] overflow-hidden transition-all duration-500 hover:-translate-y-2 shadow-[0_20px_50px_rgba(255,242,0,0.25)] cursor-default">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/40 blur-[80px] rounded-full group-hover:bg-white/60 transition-colors duration-700 pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full bg-black/5 border border-black/10 text-[10px] font-black uppercase tracking-[0.2em] text-black shadow-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                  Our Mission
                </div>
                <p className="text-3xl lg:text-4xl font-black tracking-tighter text-black leading-[1.15]">
                  Be the global leader in delivering Aerial Intelligence for the 21st Century.
                </p>
              </div>
            </div>
          </div>

          {/* INTERACTIVE PRINCIPLES GRID */}
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-start">
            
            {/* Sticky Header */}
            <div className="lg:col-span-5 sticky top-32">
              <h2 className="text-[clamp(40px,5vw,64px)] font-black tracking-tighter leading-[1.05] mb-8 text-[#0A0A0A]">
                The principles that <br /> 
                <span className="text-gray-400">guide our drift.</span>
              </h2>
              <p className="text-lg lg:text-xl text-gray-500 font-medium leading-relaxed max-w-md">
                Pursuing mastery in drone technology and aerial intelligence, we passionately explore innovative ways to empower data-driven, sustainable growth.
              </p>
            </div>
            
            {/* Hover Cards */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              {[
                { id: "01", title: "Customer First", desc: "Empathizing with deep pain points to deliver experiences that truly 'wow'." },
                { id: "02", title: "Tech Forward", desc: "Developing fully integrated platforms that add tangible value to business." },
                { id: "03", title: "Honesty & Integrity", desc: "Our motto is to deliver Ground Truth. Honesty is not an option; it's the core." },
                { id: "04", title: "Team Work", desc: "Stressing teamwork and co-creation. Individual creativity is always encouraged." }
              ].map((item, i) => (
                <div key={i} className="group relative p-8 lg:p-10 rounded-[32px] bg-white border border-gray-200 shadow-sm transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:border-[#FFF200] overflow-hidden flex flex-col justify-between min-h-[260px] cursor-default">
                   
                   {/* Background Number Watermark */}
                   <div className="absolute -right-4 -bottom-6 text-[120px] font-black text-gray-50 opacity-60 group-hover:text-[#FFF200]/20 transition-colors duration-500 pointer-events-none select-none">
                      {item.id}
                   </div>

                   {/* Card Header & Arrow */}
                   <div className="relative z-10 flex items-center justify-between mb-8">
                      <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-[#FFF200] group-hover:border-[#FFF200] transition-colors duration-500 shadow-sm">
                         <div className="w-2.5 h-2.5 rounded-full bg-black"></div>
                      </div>
                      
                      {/* Arrow slides in and straightens out on hover */}
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-black transform -rotate-45 group-hover:rotate-0 transition-all duration-500 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
                         <line x1="5" y1="12" x2="19" y2="12"></line>
                         <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                   </div>

                   {/* Text Content */}
                   <div className="relative z-10">
                      <h4 className="text-[22px] font-black text-black tracking-tight mb-3 transition-colors">{item.title}</h4>
                      <p className="text-gray-500 text-[15px] font-medium leading-relaxed pr-4">{item.desc}</p>
                   </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FOUNDERS: VISIONARY LEADERSHIP
      ════════════════════════════════════════ */}
      <section className="py-24 lg:py-40 bg-[#0A0A0A] text-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-4">
              <h2 className="text-4xl lg:text-6xl font-black tracking-tighter leading-[1.05] mb-8">
                The Visionaries <br /> 
                <span className="text-[#FFF200]">Behind Inception.</span>
              </h2>
              <p className="text-lg text-gray-400 font-medium leading-relaxed mb-10">
                Our founders unite their wealth of experience in Investment Banking, Aviation, and Technology to drive innovation and excellence.
              </p>
              <div className="flex -space-x-3">
                 <div className="w-12 h-12 rounded-full border-4 border-[#0A0A0A] bg-[#FFF200] flex items-center justify-center text-black font-black text-xs">KS</div>
                 <div className="w-12 h-12 rounded-full border-4 border-[#0A0A0A] bg-white flex items-center justify-center text-black font-black text-xs">KA</div>
              </div>
            </div>

            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-8 md:gap-12">
               {/* Kiran Shah */}
               <div className="group relative aspect-[4/5] rounded-[40px] overflow-hidden bg-gray-900 border border-white/10 transition-all duration-700 hover:-translate-y-4 shadow-2xl">
                  <img src="https://ik.imagekit.io/saxybrgkp/MME/YelloSkye%20Kiran%20Shah.jpg" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" alt="Kiran Shah" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                     <h4 className="text-2xl font-black tracking-tight mb-1">Kiran Shah</h4>
                     <p className="text-xs font-black text-[#FFF200] uppercase tracking-widest mb-4">Chairman & MD</p>
                     <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all">
                        <Linkedin size={20} className="text-gray-400 hover:text-[#FFF200] cursor-pointer" />
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
                           <ArrowRight size={18} className="-rotate-45" />
                        </div>
                     </div>
                  </div>
               </div>

               {/* Kush Aggarwal */}
               <div className="group relative aspect-[4/5] rounded-[40px] overflow-hidden bg-gray-900 border border-white/10 transition-all duration-700 hover:-translate-y-4 shadow-2xl" style={{ animationDelay: '0.2s' }}>
                  <img src="https://ik.imagekit.io/saxybrgkp/MME/YelloSkye%20Drone%20Expertise.jpg" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" alt="Kush Aggarwal" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                     <h4 className="text-2xl font-black tracking-tight mb-1">Kush Aggarwal</h4>
                     <p className="text-xs font-black text-[#FFF200] uppercase tracking-widest mb-4">Co-Founder & CEO</p>
                     <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all">
                        <Linkedin size={20} className="text-gray-400 hover:text-[#FFF200] cursor-pointer" />
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
                           <ArrowRight size={18} className="-rotate-45" />
                        </div>
                     </div>
                  </div>
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
           <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
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
                 src="https://ik.imagekit.io/saxybrgkp/MME/final.png?updatedAt=1773650468380" 
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