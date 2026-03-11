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
          HERO: THE PURPOSE (STRICT 3-LINE FIX)
      ════════════════════════════════════════ */}
      <section className="pt-24 md:pt-32 lg:pt-44 pb-12 lg:pb-20 relative overflow-hidden bg-white">
        {/* Architectural Grid Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ 
               backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", 
               backgroundSize: "80px 80px",
               maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
               WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)"
             }} />
             
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* LEFT SIDE: Copy (8 Columns to provide enough width for 3 lines) */}
            <div className="lg:col-span-8 flex flex-col justify-center">
              
              {/* HEADLINE: Strict 3-line layout using increased max-width */}
              <h1 className="text-[clamp(40px,5.5vw,78px)] font-black tracking-tighter leading-[1.0] text-black mb-14 max-w-[850px]">
                We exist to make <br /> 
                the built environment <br />
                <span className="relative inline-block mt-2">
                  <span className="absolute inset-y-1 -inset-x-4 bg-[#FFF200] rounded-xl lg:rounded-2xl shadow-sm transform -skew-x-2"></span>
                  <span className="relative text-black">trustworthy.</span>
                </span>
              </h1>

              {/* BRAND PILLARS: High-fidelity layout with custom icons */}
              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10 max-w-2xl">
                {[
                  { 
                    label: "Clarity", 
                    desc: "Making on-site reality unambiguous and dependable.", 
                    icon: <Eye size={18} /> 
                  },
                  { 
                    label: "Shared Reality", 
                    desc: "One version of progress, for all stakeholders.", 
                    icon: <Users size={18} /> 
                  },
                  { 
                    label: "Intelligence", 
                    desc: "Turning reality into informed, data-backed action.", 
                    icon: <Zap size={18} /> 
                  },
                  { 
                    label: "Decision Confidence", 
                    desc: "Enable action without second-guessing site conditions.", 
                    icon: <ShieldCheck size={18} /> 
                  }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-[#FFF200] flex items-center justify-center shrink-0 mt-1 shadow-[0_8px_20px_rgba(255,242,0,0.3)] group-hover:scale-110 transition-transform duration-300">
                      <div className="text-black">{item.icon}</div>
                    </div>
                    <div>
                      <span className="font-black text-black uppercase text-[12px] tracking-widest block mb-1.5">{item.label}</span>
                      <p className="text-[15px] text-gray-500 font-medium leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE: Borderless Hero Image (4 Columns) */}
            <div className="lg:col-span-4 relative mt-12 lg:mt-0">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[48px] shadow-[0_40px_100px_rgba(0,0,0,0.15)] transform lg:rotate-1 hover:rotate-0 transition-all duration-1000">
                <img 
                  src="https://i.ibb.co/LX00P9s0/Screenshot-2026-02-24-at-12-58-21.png" 
                  className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-1000" 
                  alt="Site Intelligence Visual" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
              
              {/* Background Glow Elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#FFF200]/20 blur-[60px] rounded-full -z-10"></div>
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-black/5 blur-[100px] rounded-full -z-10"></div>
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
          STRATEGIC FOUNDATION (Vision, Mission, Principles)
      ════════════════════════════════════════ */}
      <section className="py-20 lg:py-35 bg-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
          
          {/* Vision & Mission Row */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 mb-32">
            <div className="p-10 rounded-[32px] bg-gray-50 border border-gray-100 shadow-sm group hover:bg-[#FFF200] transition-all duration-500">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 group-hover:text-black mb-6">Our Vision</h3>
              <p className="text-2xl lg:text-3xl font-black tracking-tight text-black leading-tight">
                Revolutionizing customer business by providing industry-leading AI solutions with aerial data.
              </p>
            </div>
            <div className="p-10 rounded-[32px] border border-gray-200 group hover:border-[#FFF200] transition-all duration-500">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-6">Our Mission</h3>
              <p className="text-2xl lg:text-3xl font-black tracking-tight text-black leading-tight">
                Be the global leader in delivering Aerial Intelligence for the 21st Century.
              </p>
            </div>
          </div>

          {/* Principles Row */}
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
                <div key={i} className="p-8 rounded-[24px] bg-white border border-gray-100 hover:shadow-xl transition-all group">
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
                  <img src="https://i.ibb.co/Lkhm706/Kiran-Shah.jpg" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" alt="Kiran Shah" />
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
                  <img src="https://i.ibb.co/mRT8vK1/Kush-Aggarwal.jpg" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" alt="Kush Aggarwal" />
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
          INVESTORS: THE BACKING
      ════════════════════════════════════════ */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
           <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400 mb-12">Fueled by Institutional Trust</h3>
           <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
              <img src="https://upload.wikimedia.org/wikipedia/en/2/23/Keiretsu_Forum_Logo.png" alt="Keiretsu Forum" className="h-10 w-auto" />
              <img src="https://indianangelnetwork.com/wp-content/uploads/2021/04/IAN-Logo.png" alt="IAN" className="h-12 w-auto" />
              <img src="https://www.ivycapventures.com/wp-content/uploads/2019/12/IvyCap_Logo.png" alt="IvyCap" className="h-10 w-auto" />
           </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          NATIONAL COVERAGE: SCALE OF OPERATIONS
      ════════════════════════════════════════ */}
      <section className="py-24 lg:py-40 bg-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-[10px] font-black text-[#FFF200] uppercase tracking-[0.2em] mb-6">
                Our Footprint
              </div>
              <h2 className="text-4xl lg:text-6xl font-black tracking-tighter leading-tight mb-8 text-black">
                Our National <br /> <span className="relative">Coverage.</span>
              </h2>
              
              <div className="space-y-8 mb-12">
                 <div className="flex items-center gap-6 p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="text-4xl font-black text-black tracking-tighter">50+</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">Institutional <br /> Customers</div>
                 </div>
                 <div className="flex items-center gap-6 p-6 bg-white rounded-2xl border border-gray-200">
                    <div className="text-4xl font-black text-black tracking-tighter">100+</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">Live Locations <br /> Covered</div>
                 </div>
                 <div className="flex items-center gap-6 p-6 bg-white rounded-2xl border border-gray-200">
                    <div className="text-4xl font-black text-black tracking-tighter">200+</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">Use Cases <br /> Served</div>
                 </div>
              </div>

              <div className="flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em]">
                 <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-blue-500" /> Office Locations
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#FFF200]" /> Project Locations
                 </div>
              </div>
            </div>

            <div className="lg:col-span-7 relative h-[600px] flex items-center justify-center">
               {/* India Map Visualization */}
               <div className="relative w-full h-full">
                  {/* Subtle Grid behind map */}
                  <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
                  
                  {/* The Map Image (Using a clean SVG/Vector-style placeholder) */}
                  <img 
                    src="https://i.ibb.co/L5hYFpX/India-Map-Yello-Skye.png" 
                    className="w-full h-full object-contain opacity-90 drop-shadow-2xl" 
                    alt="National Footprint Map" 
                  />
                  
                  {/* Pulsing Office Locations (Pune & Bengaluru) */}
                  <div className="absolute top-[65%] left-[32%] w-4 h-4 bg-blue-500 rounded-full animate-ping opacity-40"></div>
                  <div className="absolute top-[65%] left-[32%] w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_#3B82F6]"></div>
                  <span className="absolute top-[67%] left-[34%] text-[9px] font-black text-black uppercase">Pune HQ</span>

                  <div className="absolute top-[82%] left-[38%] w-4 h-4 bg-blue-500 rounded-full animate-ping opacity-40"></div>
                  <div className="absolute top-[82%] left-[38%] w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_#3B82F6]"></div>
                  <span className="absolute top-[84%] left-[40%] text-[9px] font-black text-black uppercase">Bengaluru</span>

                  {/* Project Dots Scatter Animation Effect */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
                     <div className="absolute top-[20%] left-[45%] w-1.5 h-1.5 bg-[#FFF200] rounded-full animate-pulse" />
                     <div className="absolute top-[40%] left-[60%] w-1.5 h-1.5 bg-[#FFF200] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                     <div className="absolute top-[70%] left-[50%] w-1.5 h-1.5 bg-[#FFF200] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>
{/* ====================== TRUST BAND ====================== */}
      <section className="bg-white relative z-10 pt-6 pb-12 lg:pb-16">
        <p className="text-center text-[10px] lg:text-[11px] font-black uppercase tracking-[0.5em] text-gray-400 mb-8">
          Trusted by the best in the business
        </p>
        
        {/* Marquee Wrapper */}
        <div className="relative overflow-hidden marquee-mask flex w-full group">
          <div className="flex shrink-0 animate-marquee items-center gap-16 md:gap-24 px-8 md:px-12 group-hover:[animation-play-state:paused]">
            {[
              { name: "Larsen & Toubro", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/L%26T.png/640px-L%26T.png" },
              { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/640px-Amazon_logo.svg.png" },
              { name: "TATA Projects", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/1200px-Tata_logo.svg.png" },
              { name: "Adani Enterprise", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Adani_logo_2012.svg" },
              { name: "DLF Limited", logo: "https://upload.wikimedia.org/wikipedia/commons/a/aa/DLF_logo.svg" },
              { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png" },
              { name: "Godrej", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Godrej_Logo.svg/640px-Godrej_Logo.svg.png" },
              { name: "Lodha", logo: "https://companieslogo.com/img/orig/LODHA.NS_BIG-691dc856.png?t=1720244492" },
              { name: "HDFC", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo.svg/640px-HDFC_Bank_Logo.svg.png" },
              { name: "Kirloskar", logo: "https://kirloskar.com/img/KIRLOSKAR%20SAFE%20SPACE%20LOGO-01.jpg" },
              { name: "Toyota Kirloskar", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Toyota_logo_3D.webp/640px-Toyota_logo_3D.webp.png" },
              { name: "Mahindra", logo: "https://images.seeklogo.com/logo-png/61/1/mahindra-auto-logo-png_seeklogo-613492.png" },
              { name: "Larsen & Toubro", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/L%26T.png/640px-L%26T.png" },
              { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/640px-Amazon_logo.svg.png" },
              { name: "TATA Projects", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/1200px-Tata_logo.svg.png" },
              { name: "Adani Enterprise", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Adani_logo_2012.svg" },
              { name: "DLF Limited", logo: "https://upload.wikimedia.org/wikipedia/commons/a/aa/DLF_logo.svg" },
              { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png" },
              { name: "Godrej", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Godrej_Logo.svg/640px-Godrej_Logo.svg.png" },
              { name: "Lodha", logo: "https://companieslogo.com/img/orig/LODHA.NS_BIG-691dc856.png?t=1720244492" },
              { name: "HDFC", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo.svg/640px-HDFC_Bank_Logo.svg.png" },
              { name: "Kirloskar", logo: "https://kirloskar.com/img/KIRLOSKAR%20SAFE%20SPACE%20LOGO-01.jpg" },
              { name: "Toyota Kirloskar", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Toyota_logo_3D.webp/640px-Toyota_logo_3D.webp.png" },
              { name: "Mahindra", logo: "https://images.seeklogo.com/logo-png/61/1/mahindra-auto-logo-png_seeklogo-613492.png" }
            ].map((client, i) => (
              <div key={i} className="flex items-center justify-center w-28 md:w-32 h-10 md:h-12">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-w-full max-h-full object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700 cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ====================== THE EXECUTIVE GATEWAY (FORM) ====================== */}
            <section className="bg-white py-24 lg:py-40 relative overflow-hidden font-sans border-gray-100">
      {/* Aesthetic Seamless Grid Fade */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                   style={{ 
                     backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", 
                     backgroundSize: "80px 80px",
                     maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
                     WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)"
                   }} />
              <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 z-10">
                <div className="max-w-6xl mx-auto">
                  <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-8">
                        Get Started
                      </div>
                      <h3 className="text-4xl lg:text-6xl font-black tracking-tighter text-black mb-8 leading-[1.1]">
                        Ready to gain <br/>
                        <span className="relative inline-block mt-2">
                          <span className="absolute inset-y-1 -inset-x-2 bg-[#FFF200] rounded-lg shadow-sm transform -skew-x-2"></span>
                          <span className="relative text-black">absolute clarity?</span>
                        </span>
                      </h3>
                      <p className="text-xl text-gray-500 font-medium leading-relaxed mb-10 max-w-lg">
                        Stop debating interpretations. Request a custom walkthrough of your site and see how DEX delivers boardroom-ready answers.
                      </p>
                      
                      <ul className="space-y-5">
                        {[
                          '15-minute tailored site walkthrough', 
                          'Zero commitment or hardware required', 
                          'Custom strategy for your project goals'
                        ].map((item) => (
                          <li key={item} className="flex items-center gap-4 text-black font-black uppercase text-[11px] tracking-[0.1em]">
                            <div className="w-6 h-6 bg-black rounded-lg flex items-center justify-center text-[#FFF200] shadow-lg shrink-0">
                              <Check size={14} strokeWidth={4}/>
                            </div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
      
                    <div className="bg-[#0A0A0A] rounded-[48px] p-8 lg:p-14 shadow-[0_40px_120px_rgba(0,0,0,0.4)] border border-white/5 relative overflow-hidden group">
                      <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#FFF200]/10 blur-[100px] rounded-full group-hover:bg-[#FFF200]/20 transition-all duration-700" />
                      
                      <form className="relative z-10 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                            <input placeholder="John Doe" className="w-full bg-white/5 border-b border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-700 focus:border-[#FFF200] focus:bg-white/10 outline-none transition-all font-medium" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Work Email</label>
                            <input placeholder="john@company.com" className="w-full bg-white/5 border-b border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-700 focus:border-[#FFF200] focus:bg-white/10 outline-none transition-all font-medium" />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Company</label>
                          <input placeholder="Ex: Larsen & Toubro" className="w-full bg-white/5 border-b border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-700 focus:border-[#FFF200] focus:bg-white/10 outline-none transition-all font-medium" />
                        </div>
      
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Project Phase</label>
                          <div className="relative">
                            <select className="w-full bg-white/5 border-b border-white/10 rounded-xl px-5 py-4 text-gray-400 focus:border-[#FFF200] focus:bg-white/10 outline-none transition-all font-medium appearance-none">
                              <option>Select Current Stage</option>
                              <option>Pre-Construction / Planning</option>
                              <option>Active Construction</option>
                              <option>Handover / Operations</option>
                            </select>
                            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                            </div>
                          </div>
                        </div>
      
                        <div className="pt-4">
                          <button type="button" className="w-full bg-[#FFF200] hover:bg-white text-black font-black py-6 rounded-2xl uppercase tracking-[0.25em] text-xs transition-all transform hover:-translate-y-1 shadow-[0_20px_40px_rgba(255,242,0,0.15)] flex items-center justify-center gap-3 group/btn">
                            Book a free demo
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:translate-x-1 transition-transform"><path d="m9 18 6-6-6-6"/></svg>
                          </button>
                        </div>
                      </form>
                    </div>
      
                  </div>
                </div>
              </div>
            </section>

      

    </div>
  );
};