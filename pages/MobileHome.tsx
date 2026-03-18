import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import AutonomousAgents from '../components/AutonomousAgents';
import { 
  FileCheck, Radar, Check, Scan, History, Video, Zap, MessageSquare, CheckCircle2, BrainCircuit, ScanSearch, FileWarning,
  Rotate3D, Satellite, Layers, BarChart3, Twitter, Linkedin, Youtube, Play, Search, Bell, Plus, LayoutDashboard, Map, Box, AlertTriangle, 
  FileText, Settings, Users, ChevronDown, ArrowRight, Activity, ShieldCheck, Image as ImageIcon,
  Instagram, MapPin, Mail, Globe, Sparkles, Clock,
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
      { threshold: 0.1 }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
};

// ─── LIFECYCLE LINE PILL COMPONENT ───────────────────────────
const LifecycleLinePill = ({ title, start, end, imageUrl, description, link = "#" }) => {
  const leftPercent = ((start - 1) / 6) * 100;
  const widthPercent = ((end - start + 1) / 6) * 100;

  return (
    <div 
      className="relative group z-10 hover:z-50 cursor-default hidden lg:block px-2"
      style={{ marginLeft: `${leftPercent}%`, width: `${widthPercent}%` }}
    >
      <div className="w-full bg-[#FFF200] border-[1.5px] border-black/10 text-black font-black py-4 px-6 rounded-full group-hover:bg-white group-hover:border-black transition-all duration-300 shadow-sm text-center text-[13px] relative flex justify-center items-center">
        {title}
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 bottom-full pb-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 w-[340px]">
        <div className="bg-[#111] rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.4)] border border-gray-800 overflow-hidden transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 relative">
          <div className="w-full h-32 bg-gray-900 relative">
            <img src={imageUrl} alt={title} className="w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent"></div>
          </div>
          <div className="p-5 flex flex-col">
            <h4 className="font-black text-white text-base mb-1.5 leading-tight">{title}</h4>
            <p className="text-gray-400 text-xs font-medium mb-5 leading-relaxed">{description}</p>
            <Link 
              to={link} 
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

// ─── HOME COMPONENT ─────────────────────────────────────────────────────────────
export const Home: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="bg-white selection:bg-[#FFF200] selection:text-black font-sans overflow-x-hidden">
      
      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 24s linear infinite; }
        .marquee-mask {
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        @keyframes ai-core-glow { 0%, 100% { transform: scale(1); opacity: 0.8; filter: drop-shadow(0 0 10px #FFF200); } 50% { transform: scale(1.1); opacity: 1; filter: drop-shadow(0 0 30px #FFF200); } }
      `}</style>
      
      <SectionObserver />

      {/* ====================== HERO SECTION (MOBILE OPTIMIZED) ====================== */}
      <section className="relative w-full min-h-screen lg:h-[100dvh] pt-[100px] lg:pt-[140px] pb-10 bg-white flex flex-col overflow-hidden border-gray-100">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ 
               backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", 
               backgroundSize: "60px 60px",
               maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
             }} />

        {/* TOP: VIDEO WINDOW */}
        <div className="flex-1 w-full max-w-[1735px] mx-auto px-4 md:px-10 flex flex-col relative z-10">
          <div className="relative w-full h-[40vh] md:h-full bg-[#080808] rounded-[20px] lg:rounded-[28px] shadow-2xl overflow-hidden group">
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-90">
              {/* <source src="..." /> */}
            </video>
            <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] pointer-events-none"></div>
          </div>
        </div>

        {/* BOTTOM: COPY & CTA */}
        <div className="w-full max-w-[1735px] mx-auto px-5 md:px-10 pt-8 lg:pt-10 shrink-0 relative z-20">
          <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-10">
            <div className="flex flex-col gap-4">
              <h1 className="text-[42px] sm:text-[60px] lg:text-[84px] font-black tracking-tighter text-[#0A0A0A] leading-[0.95] flex flex-col sm:flex-row sm:items-center gap-3">
                Your site,
                <span className="bg-[#FFF200] w-fit px-4 sm:px-6 py-1 rounded-[12px] sm:rounded-[20px] text-black shadow-sm">
                  in sight.
                </span>
              </h1>
              <p className="text-[18px] sm:text-[22px] text-gray-600 font-medium tracking-tight max-w-xl">
                Know exactly what's happening on your site with AI-powered reality capture.
              </p>
            </div>

            <div className="flex flex-col items-start xl:items-end">
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-6">
                {["Clarity", "Consistency", "Accuracy"].map((label) => (
                  <div key={label} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#FFF200] shadow-[0_0_8px_rgba(255,242,0,0.8)]"></div>
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">{label}</span>
                  </div>
                ))}
              </div>

              {/* Responsive Dock */}
              <div className="flex flex-col sm:flex-row items-center p-1.5 sm:p-2.5 bg-gray-50/90 backdrop-blur-2xl border border-gray-200/80 rounded-[24px] sm:rounded-full shadow-lg w-full sm:w-fit gap-2">
                <Link to="/book-demo" className="w-full sm:w-auto group flex items-center justify-center gap-4 pl-8 pr-2.5 py-3 rounded-full bg-[#0A0A0A] text-white font-black text-[15px] transition-all hover:shadow-xl active:scale-95">
                  Book a demo
                  <div className="w-9 h-9 rounded-full bg-[#FFF200] flex items-center justify-center text-black">
                    <ArrowRight size={18} strokeWidth={3} />
                  </div>
                </Link>
                <Link to="/platform" className="w-full sm:w-auto px-8 py-4 rounded-full text-gray-500 hover:text-black font-bold text-[15px] text-center">
                  Explore platform
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== TRUST BAND ====================== */}
      <section className="bg-white py-10 border-b border-gray-50">
        <p className="text-center text-[9px] font-black uppercase tracking-[0.4em] text-gray-400 mb-8 px-6">
          Providing intelligence to intelligent leaders
        </p>
        <div className="relative overflow-hidden marquee-mask flex w-full">
          <div className="flex shrink-0 animate-marquee items-center gap-12 md:gap-24 px-4">
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                {[
                  { name: "L&T", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/L%26T.png/640px-L%26T.png" },
                  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/640px-Amazon_logo.svg.png" },
                  { name: "TATA", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/1200px-Tata_logo.svg.png" },
                  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png" },
                  { name: "Lodha", logo: "https://companieslogo.com/img/orig/LODHA.NS_BIG-691dc856.png?t=1720244492" },
                ].map((client, idx) => (
                  <img key={idx} src={client.logo} alt={client.name} className="h-7 md:h-10 w-auto object-contain grayscale opacity-40" />
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== PURPOSE / TRUST (RESPONSIVE GRID) ====================== */}
      <section className="relative bg-white py-20 lg:py-32 border-gray-100">
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 flex flex-col items-start">
              <h2 className="text-[40px] sm:text-[56px] lg:text-[72px] font-black tracking-tighter leading-[1.05] text-[#0A0A0A]">
                Eliminate doubt.<br/>
                Operate with<br/>
                <span className="relative inline-block mt-2">
                  <span className="absolute inset-y-1 lg:inset-y-1.5 -inset-x-3 bg-[#FFF200] rounded-xl shadow-sm"></span>
                  <span className="relative px-2 text-black">Complete Trust.</span>
                </span>
              </h2>
              <p className="mt-8 text-lg lg:text-xl text-gray-500 font-medium max-w-md">
                Because decisions that shape the real world deserve more than assumptions and incomplete views.
              </p>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <Scan />, title: "Ground Truth", desc: "Captured directly as-built. Never interpreted or assumed." },
                { icon: <History />, title: "Time Consistency", desc: "The exact same visual reference, updated weekly." },
                { icon: <FileCheck />, title: "Shared Reality", desc: "Decisions rely on hard evidence, not subjective reports." },
                { icon: <Users />, title: "Team Trust", desc: "Unifying everyone from the site to the boardroom." },
              ].map((card, i) => (
                <div key={i} className="bg-white rounded-[24px] p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-[#FFF200] transition-colors">
                    {React.cloneElement(card.icon as React.ReactElement, { size: 20, strokeWidth: 2.5 })}
                  </div>
                  <h3 className="text-xl font-black mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-500 font-medium leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================== CAPABILITIES / SENSORS ====================== */}
      <section className="relative bg-white py-20 lg:py-32 border-t border-gray-50">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[36px] sm:text-[50px] lg:text-[60px] font-black tracking-tighter leading-[1.05] mb-6">
              Multi-sensor data meets <br/>
              <span className="relative inline-block mt-2">
                <span className="absolute inset-y-1 -inset-x-3 bg-[#FFF200] rounded-xl shadow-sm transform -skew-x-2"></span>
                <span className="relative px-2 text-black">AI intelligence.</span>
              </span>
            </h2>
            <p className="text-lg text-gray-500 font-medium">One live digital twin. AI-powered tracking and deviation alerts.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Radar />, title: "Drone Survey", desc: "Millimeter-accurate photogrammetry from the sky." },
              { icon: <LayoutDashboard />, title: "Interior 360°", desc: "Walk through site builds vs BIM/CAD remotely." },
              { icon: <FileCheck />, title: "Facade Imaging", desc: "High-res scans to inspect exterior envelope quality." },
              { icon: <Users />, title: "Fixed Camera", desc: "24/7 continuous visual feeds on your timeline." },
            ].map((f, i) => (
              <div key={i} className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:-translate-y-1 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-[#0A0A0A] text-[#FFF200] flex items-center justify-center mb-8 shadow-md">
                  {React.cloneElement(f.icon as React.ReactElement, { size: 24, strokeWidth: 2.5 })}
                </div>
                <h3 className="text-xl font-black mb-3">{f.title}</h3>
                <p className="text-sm text-gray-500 font-medium leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== STICKY AGENTS COMPONENT ====================== */}
      <AutonomousAgents />

      {/* ====================== THE INTELLIGENCE ENGINE (DECISION STACK) ====================== */}
      <section className="relative bg-white py-20 lg:py-40 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-[38px] sm:text-[56px] lg:text-[64px] font-black tracking-tighter leading-[1.05] text-black mb-6">
              From raw site reality to <br />
              <span className="relative inline-block mt-2">
                <span className="absolute inset-0 bg-[#FFF200] rounded-xl shadow-sm transform -skew-x-3"></span>
                <span className="relative px-4 text-black">boardroom certainty.</span>
              </span>
            </h2>
          </div>

          <div className="space-y-32">
            {/* LAYER 01 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FFF200] text-[10px] font-black uppercase tracking-widest bg-white">Layer 01</div>
                <h3 className="text-3xl lg:text-5xl font-black tracking-tight">Multi-Sensor Reality Capture.</h3>
                <p className="text-gray-600 text-lg lg:text-xl font-medium">Your site, digitised from every vantage point. Drones, 360° cameras, and fixed cams feeding one timeline.</p>
              </div>
              <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
                <div className="bg-gray-50 aspect-square rounded-3xl flex items-center justify-center p-8 border border-gray-100">
                  <div className="relative w-full h-full animate-[ai-core-glow_4s_infinite]">
                    <Radar className="w-full h-full text-black opacity-20" />
                    <Scan className="absolute inset-0 w-full h-full text-black" strokeWidth={1} />
                  </div>
                </div>
                <div className="bg-[#0A0A0A] aspect-square rounded-3xl p-6 flex flex-col justify-end">
                   <div className="text-[#FFF200] font-mono text-[10px] mb-2">RAW_FEED_01.MP4</div>
                   <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                     <div className="w-2/3 h-full bg-[#FFF200]"></div>
                   </div>
                </div>
              </div>
            </div>

            {/* LAYER 02 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FFF200] text-[10px] font-black uppercase tracking-widest bg-white">Layer 02</div>
                <h3 className="text-3xl lg:text-5xl font-black tracking-tight">AI-Driven Intelligence.</h3>
                <p className="text-gray-600 text-lg lg:text-xl font-medium">Extraction of progress, deviations, and quantities. One site record for every stakeholder, instantly clear.</p>
              </div>
              <div className="lg:order-1 relative">
                <div className="bg-[#0A0A0A] rounded-[40px] p-8 aspect-video overflow-hidden relative shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#FFF200]/10 to-transparent opacity-50"></div>
                  <BrainCircuit className="text-white opacity-20 w-full h-full p-12" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-6 py-3 rounded-2xl shadow-2xl">
                    <span className="text-black font-black text-xs uppercase tracking-widest">Processing Data...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== PROJECT LIFECYCLE (MOBILE ADAPTIVE) ====================== */}
      <section className="bg-white py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-[38px] sm:text-[56px] lg:text-[64px] font-black tracking-tighter leading-[1.05] text-black">
              Intelligence for<br />
              <span className="bg-[#FFF200] px-3 rounded-xl">every phase.</span>
            </h2>
          </div>

          {/* MOBILE VERSION: Vertical Step-list */}
          <div className="lg:hidden space-y-10 relative">
             <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-100"></div>
             {[
               { t: "Land Acquisition", d: "Analytics for contours & volumetric early-feasibility.", p: "01" },
               { t: "Design & Planning", d: "Reality into accurate BIM models for coordination.", p: "02" },
               { t: "Construction", d: "Automated tracking & deviation detection.", p: "03" },
               { t: "O&M / Handover", d: "Verify final as-builts for the audit trail.", p: "04" },
             ].map((step, idx) => (
               <div key={idx} className="relative pl-12">
                 <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-[#FFF200] flex items-center justify-center font-black text-xs border-2 border-white shadow-sm">{step.p}</div>
                 <h4 className="text-lg font-black mb-1">{step.t}</h4>
                 <p className="text-sm text-gray-500 font-medium leading-relaxed">{step.d}</p>
               </div>
             ))}
          </div>

          {/* DESKTOP VERSION: Horizontal Metro (Existing) */}
          <div className="hidden lg:block pt-12">
            <div className="grid grid-cols-6 text-[10px] font-black uppercase tracking-widest text-black mb-12 text-center">
              {["Land Acquisition", "Design & Planning", "Construction", "Sales", "Handover", "O&M"].map(p => <div key={p}>{p}</div>)}
            </div>
            <div className="relative h-[2px] bg-black/5 mb-16">
               {/* Simplified desktop trail */}
               <div className="absolute inset-0 grid grid-cols-6">
                 {[1,2,3,4,5,6].map(n => <div key={n} className="flex justify-center"><div className="w-6 h-6 rounded-full bg-white border-2 border-black/10 -mt-3 z-10 flex items-center justify-center text-[10px] font-bold">{n}</div></div>)}
               </div>
               <div className="absolute top-0 left-0 h-full bg-[#FFF200] w-2/3"></div>
            </div>
            <div className="space-y-4">
               <LifecycleLinePill title="Land Survey Analytics" start={1} end={2} imageUrl="https://i.ibb.co/wN4M0j7f/Screenshot-2026-02-19-at-17-43-41.png" description="..." link="/solutions/land-survey" />
               <LifecycleLinePill title="Construction Monitoring" start={3} end={5} imageUrl="https://i.ibb.co/HDGVjy6S/Screenshot-2026-02-19-at-22-12-29.png" description="..." link="/solutions/construction-monitoring" />
            </div>
          </div>
        </div>
      </section>

      {/* ====================== METRICS ====================== */}
      <section className="bg-white py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 lg:gap-0">
            {[
              {v:"99.9%", l:"Accuracy Rate", icon: <Check />},
              {v:"$4bn+", l:"Assets Monitored", icon: <LayoutDashboard />},
              {v:"350k+", l:"Images Analyzed", icon: <Satellite />},
              {v:"80%", l:"Less Site Visits", icon: <Users />},
              {v:"33%", l:"Manpower Savings", icon: <BarChart3 />},
            ].map((m, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-[#FFF200] flex items-center justify-center mb-6 shadow-xl">
                  {React.cloneElement(m.icon as React.ReactElement, { size: 24, strokeWidth: 3 })}
                </div>
                <p className="text-3xl lg:text-5xl font-black mb-2 tracking-tighter">{m.v}</p>
                <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{m.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== TESTIMONIALS (TYPOGRAPHY SCALE) ====================== */}
      <section className="bg-[#FFF200] py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="flex gap-2 mb-12 flex-wrap">
            {["Site Manager", "CXO / Leadership", "Owner"].map((label, id) => (
              <button key={id} onClick={() => setActiveTestimonial(id)} className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${activeTestimonial === id ? "bg-black text-white" : "bg-white/50 hover:bg-white"}`}>{label}</button>
            ))}
          </div>

          <div className="min-h-[250px]">
            <p className="text-[28px] sm:text-[40px] lg:text-[54px] font-black leading-[1.1] text-black tracking-tighter mb-12">
              {activeTestimonial === 0 && "\"YelloSKYE cut our progress verification time from hours to minutes. I share proof without stepping off site.\""}
              {activeTestimonial === 1 && "\"Leadership finally sees the same reality as the site. Faster approvals and real accountability.\""}
              {activeTestimonial === 2 && "\"I don't chase updates anymore. I open YelloSKYE and immediately know where my project stands.\""}
            </p>
            <div>
              <div className="font-black text-lg uppercase tracking-widest">Industry Leader</div>
              <div className="text-sm font-bold opacity-60">National Portfolio</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};