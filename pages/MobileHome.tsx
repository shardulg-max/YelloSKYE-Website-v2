import { Link } from "react-router-dom";
import React, { useState } from "react";
import { 
  FileCheck, Radar, Check, Scan, History, Video, LayoutDashboard, 
  ArrowRight, Activity, ShieldCheck, Image as ImageIcon, Sparkles,
  Layers, BarChart3, Users, CheckCircle2, AlertTriangle, Satellite, FileText
} from "lucide-react";

// Mobile-specific Autonomous Agents List (Bypasses the 400vh desktop scroll track)
const MobileAutonomousAgents = () => (
  <section className="bg-gray-50 py-16 px-5 border-y border-gray-100 relative overflow-hidden">
    {/* Subtle Background Pattern */}
    <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: "radial-gradient(#d1d5db 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>
    
    <div className="relative z-10 mb-8">
      <h2 className="text-[36px] font-black tracking-tighter leading-[1.05] text-black mb-3">
        The era of <br/>
        <span className="bg-[#FFF200] px-2 rounded-lg inline-block mt-1">Autonomous Agents.</span>
      </h2>
      <p className="text-[15px] text-gray-500 font-medium leading-relaxed">Meet Kumar. Specialized AI modules processing your site data 24/7.</p>
    </div>
    
    <div className="relative z-10 flex flex-col gap-3">
      {[
        { id: 'progress', name: 'Progress Agent', icon: Activity, tag: 'Schedule & Tracking', desc: 'Tracks how each site is moving versus plan.' },
        { id: 'billing', name: 'Billing Agent', icon: FileText, tag: 'Automated BOQ', desc: 'Creates clear, audit-ready progress and billing reports.' },
        { id: 'quality', name: 'Quality Agent', icon: ShieldCheck, tag: 'Clash & Compliance', desc: 'Checks built work against drawings and standards.' },
        { id: 'content', name: 'Content Agent', icon: ImageIcon, tag: 'Stakeholder Comms', desc: 'Pulls the right images into ready-to-send updates.' },
      ].map((agent) => (
        <div key={agent.id} className="bg-white p-5 rounded-[24px] border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.04)] flex flex-col gap-3 relative overflow-hidden">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0A0A0A] text-[#FFF200] flex items-center justify-center shadow-md shrink-0">
               <agent.icon size={18} strokeWidth={2.5} />
            </div>
            <div>
              <h3 className="text-[16px] font-black text-black leading-tight">{agent.name}</h3>
              <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{agent.tag}</span>
            </div>
          </div>
          <p className="text-[12px] text-gray-500 font-medium leading-snug">{agent.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export const MobileHome: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="bg-white selection:bg-[#FFF200] selection:text-black font-sans overflow-x-hidden">
      
      {/* Global Mobile Animations */}
      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 20s linear infinite; }
        .marquee-mask {
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        @keyframes scan-beam { 0%, 100% { transform: translateX(-100%); } 50% { transform: translateX(100%); } }
        @keyframes pulse-ring { 0% { box-shadow: 0 0 0 0 rgba(255, 242, 0, 0.4); } 70% { box-shadow: 0 0 0 10px rgba(255, 242, 0, 0); } 100% { box-shadow: 0 0 0 0 rgba(255, 242, 0, 0); } }
      `}</style>

      {/* ====================== HERO SECTION ====================== */}
      {/* Fixed the spacing: Removed min-h-screen, tightened padding */}
      <section className="relative w-full pt-[90px] pb-10 bg-white flex flex-col overflow-hidden border-b border-gray-100">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

        <div className="px-5 flex flex-col gap-6 relative z-10">
          
          {/* HEADLINE */}
          <div className="flex flex-col gap-3">
            <h1 className="text-[48px] font-black tracking-tighter text-[#0A0A0A] leading-[0.95] flex flex-col">
              Your site,
              <span className="bg-[#FFF200] w-fit px-3 py-1 rounded-[14px] text-black shadow-sm mt-1">
                in sight.
              </span>
            </h1>
            <p className="text-[16px] text-gray-500 font-medium leading-snug max-w-[90%]">
              Know exactly what's happening on your site with AI-powered reality capture.
            </p>
          </div>

          {/* VIDEO WINDOW: Portrait Aspect Ratio */}
          <div className="relative w-full aspect-[4/5] bg-[#080808] rounded-[24px] shadow-2xl overflow-hidden border border-black/5 mt-2">
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-90">
               {/* <source src="/your-mobile-hero-video.mp4" /> */}
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
            
            {/* Live Badge */}
            <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]"></div>
              <span className="text-[9px] font-black text-white uppercase tracking-widest">Platform Live</span>
            </div>
          </div>

          {/* THREE PILLARS */}
          <div className="flex items-center justify-between px-2 pt-2">
            {["Clarity", "Consistency", "Accuracy"].map((label) => (
              <div key={label} className="flex items-center gap-1.5">
                <div className="w-1 h-1 bg-[#FFF200] shadow-[0_0_4px_rgba(255,242,0,0.8)]"></div>
                <span className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em]">{label}</span>
              </div>
            ))}
          </div>

          {/* CTA PILL DOCK */}
          <div className="flex flex-col gap-2 p-1.5 bg-gray-50/90 backdrop-blur-xl border border-gray-200 rounded-[28px] shadow-lg mt-2">
            <Link to="/book-demo" className="group flex items-center justify-between pl-6 pr-1.5 py-1.5 rounded-full bg-[#0A0A0A] text-white font-black text-[15px] active:scale-[0.98] transition-transform">
              Book a demo
              <div className="w-10 h-10 rounded-full bg-[#FFF200] flex items-center justify-center text-black shadow-lg">
                <ArrowRight size={20} strokeWidth={3} />
              </div>
            </Link>
            <Link to="/platform" className="py-3 text-center text-gray-500 font-bold text-[14px] uppercase tracking-widest active:text-black">
              Explore platform
            </Link>
          </div>
        </div>
      </section>

      {/* ====================== TRUST BAND ====================== */}
      <section className="bg-white py-6 border-b border-gray-50 overflow-hidden">
        <p className="text-center text-[8px] font-black uppercase tracking-[0.4em] text-gray-400 mb-5 px-6">
          Providing intelligence to intelligent leaders
        </p>
        <div className="relative marquee-mask flex w-full">
          <div className="flex shrink-0 animate-marquee items-center gap-10 px-4">
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                {[
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/L%26T.png/640px-L%26T.png",
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/640px-Amazon_logo.svg.png",
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/1200px-Tata_logo.svg.png",
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png",
                  "https://companieslogo.com/img/orig/LODHA.NS_BIG-691dc856.png?t=1720244492"
                ].map((logo, idx) => (
                  <img key={idx} src={logo} className="h-5 w-auto object-contain grayscale opacity-40" alt="Partner" />
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== PURPOSE: 2-COLUMN GRID ====================== */}
      <section className="bg-white py-16 px-5 border-b border-gray-50">
        <h2 className="text-[36px] font-black tracking-tighter leading-[1.05] text-[#0A0A0A] mb-8">
          Eliminate doubt. <br/>
          <span className="relative inline-block mt-1">
            <span className="absolute inset-y-1 -inset-x-2 bg-[#FFF200] rounded-lg"></span>
            <span className="relative text-black">Complete Trust.</span>
          </span>
        </h2>

        {/* Strictly 2 Columns */}
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: <Scan />, t: "Ground Truth", d: "Captured directly. Never assumed." },
            { icon: <History />, t: "Consistency", d: "Updated weekly." },
            { icon: <FileCheck />, t: "Shared Reality", d: "Hard visual evidence." },
            { icon: <Users />, t: "Team Trust", d: "Site to boardroom." },
          ].map((card, i) => (
            <div key={i} className="bg-white rounded-[20px] p-4 border border-gray-200 shadow-[0_4px_15px_rgba(0,0,0,0.03)] flex flex-col">
              <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center mb-4 text-black border border-gray-100">
                {React.cloneElement(card.icon as React.ReactElement, { size: 18, strokeWidth: 2.5 })}
              </div>
              <h3 className="text-[13px] font-black leading-tight mb-1.5 text-black">{card.t}</h3>
              <p className="text-[11px] text-gray-500 font-medium leading-tight">{card.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ====================== SENSORS: 2-COLUMN BENTO ====================== */}
      <section className="bg-gray-50 py-16 px-5 border-b border-gray-100">
        <div className="mb-10 text-center">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2 block">Multimodal Data</span>
          <h2 className="text-[34px] font-black tracking-tighter leading-[1.05]">Multi-sensor data meets <span className="bg-[#FFF200] px-2 rounded-lg text-black inline-block mt-1">AI.</span></h2>
        </div>

        {/* Strictly 2 Columns - Dark Mode aesthetic */}
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: <Radar />, t: "Drone", d:"Millimeter-accurate mapping." },
            { icon: <LayoutDashboard />, t: "Interior 360°", d:"Walk through sites remotely." },
            { icon: <FileCheck />, t: "Facade", d:"Vertical quality scans." },
            { icon: <ImageIcon />, t: "Fixed Cam", d:"Continuous live feeds." },
          ].map((f, i) => (
            <div key={i} className="bg-[#0A0A0A] p-4 lg:p-5 rounded-[24px] flex flex-col shadow-2xl border border-white/5">
              <div className="w-10 h-10 rounded-xl bg-white/10 text-[#FFF200] flex items-center justify-center mb-4">
                {React.cloneElement(f.icon as React.ReactElement, { size: 18, strokeWidth: 2.5 })}
              </div>
              <h3 className="text-[13px] font-black text-white tracking-widest uppercase mb-1">{f.t}</h3>
              <p className="text-[10px] text-gray-400 leading-tight font-medium">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ====================== AUTONOMOUS AGENTS (MOBILE LITE) ====================== */}
      <MobileAutonomousAgents />

      {/* ====================== DECISION STACK (MOBILE ADAPTIVE UI) ====================== */}
      <section className="bg-white py-16 px-5">
        <div className="mb-16">
          <h2 className="text-[38px] font-black tracking-tighter leading-[1.05] text-black">
            From raw reality to <br/>
            <span className="relative inline-block mt-2">
               <span className="absolute inset-y-1 -inset-x-2 bg-[#FFF200] rounded-xl transform -skew-x-2 shadow-sm"></span>
               <span className="relative text-black">boardroom certainty.</span>
            </span>
          </h2>
        </div>

        <div className="space-y-12">
          
          {/* LAYER 01 */}
          <div className="flex flex-col gap-5">
            <div className="w-fit px-3 py-1 rounded-full border border-[#FFF200] text-[9px] font-black uppercase tracking-widest bg-white shadow-sm">Layer 01: Capture</div>
            <h3 className="text-[28px] font-black leading-[1.1] text-black tracking-tight">Multi-Sensor Capture.</h3>
            <p className="text-[14px] text-gray-500 font-medium">Your site, digitised from every vantage point feeding one timeline.</p>
            
            {/* Reconstructed Layer 1 UI for Mobile */}
            <div className="bg-[#0A0A0A] rounded-[24px] p-5 relative overflow-hidden shadow-2xl mt-2 border border-black/5 flex flex-col justify-end min-h-[160px]">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:15px_15px]"></div>
              <div className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-[#FFF200]/30 to-transparent animate-[scan-beam_3s_ease-in-out_infinite]"></div>
              
              <div className="absolute top-4 left-4 flex justify-between items-start w-[calc(100%-2rem)]">
                 <div className="text-[#FFF200] font-mono text-[9px] tracking-widest border border-[#FFF200]/30 px-2 py-1 rounded-md bg-[#FFF200]/10 backdrop-blur-md">LIVE_CAPTURE</div>
                 <Radar size={18} className="text-[#FFF200] animate-pulse" />
              </div>
              
              <div className="mt-auto space-y-2 relative z-10 w-full">
                 <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden shadow-inner"><div className="w-[66%] h-full bg-[#FFF200] shadow-[0_0_8px_#FFF200]"></div></div>
                 <div className="text-[8px] text-white/50 font-mono tracking-widest uppercase">Processing Visual Data...</div>
              </div>
            </div>
          </div>

          {/* LAYER 02 */}
          <div className="flex flex-col gap-5">
            <div className="w-fit px-3 py-1 rounded-full border border-[#FFF200] text-[9px] font-black uppercase tracking-widest bg-white shadow-sm">Layer 02: Extract</div>
            <h3 className="text-[28px] font-black leading-[1.1] text-black tracking-tight">AI Intelligence.</h3>
            <p className="text-[14px] text-gray-500 font-medium">Extraction of progress, deviations, and quantities instantly.</p>
            
            {/* Reconstructed Layer 2 UI for Mobile */}
            <div className="bg-gray-50 rounded-[24px] border border-gray-200 p-5 relative overflow-hidden shadow-inner mt-2 min-h-[180px] flex items-center justify-center">
               <img src="https://i.ibb.co/bMN7Kzv0/Website-Visuals-Presentation-7.png" className="absolute inset-0 w-full h-full object-cover opacity-[0.35]" alt="Site Background" />
               <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>
               
               <div className="relative z-10 flex flex-col gap-3 w-full">
                 {/* Geo-Linked Pill */}
                 <div className="bg-white/95 backdrop-blur-md border border-gray-200 p-3 rounded-[16px] shadow-[0_8px_30px_rgba(0,0,0,0.1)] flex items-center justify-between transform -rotate-2">
                    <div className="flex items-center gap-2.5">
                      <div className="bg-blue-50 p-1.5 rounded-lg"><History size={14} className="text-blue-500 stroke-[3px]"/></div>
                      <span className="text-[11px] font-black uppercase tracking-widest text-black">Geo-Linked</span>
                    </div>
                    <CheckCircle2 size={16} className="text-green-500" strokeWidth={3} />
                 </div>

                 {/* Deviation Pill */}
                 <div className="bg-red-50/95 backdrop-blur-md border border-red-200 p-3 rounded-[16px] shadow-[0_8px_30px_rgba(239,68,68,0.15)] flex items-center justify-between transform rotate-1 ml-4">
                    <div className="flex items-center gap-2.5">
                      <div className="bg-red-100 p-1.5 rounded-lg"><AlertTriangle size={14} className="text-red-600 stroke-[3px]"/></div>
                      <span className="text-[11px] font-black uppercase tracking-widest text-red-600">Deviation</span>
                    </div>
                    <span className="text-[12px] font-black text-red-600 bg-white px-2 py-0.5 rounded-md shadow-sm">45mm</span>
                 </div>
               </div>
            </div>
          </div>

          {/* LAYER 03 */}
          <div className="flex flex-col gap-5">
            <div className="w-fit px-3 py-1 rounded-full border border-[#FFF200] text-[9px] font-black uppercase tracking-widest bg-white shadow-sm">Layer 03: Insights</div>
            <h3 className="text-[28px] font-black leading-[1.1] text-black tracking-tight">AI-Driven Dashboards.</h3>
            <p className="text-[14px] text-gray-500 font-medium">Everyone works from a single, indisputable digital reality.</p>
            
            {/* Reconstructed Layer 3 UI for Mobile */}
            <div className="flex flex-col gap-3 mt-2 relative z-10">
               {/* Exec Card */}
               <div className="bg-[#111] border border-gray-800 p-4 rounded-[20px] shadow-xl">
                 <div className="flex items-center gap-2 mb-3">
                   <BarChart3 className="text-[#FFF200]" size={14} />
                   <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Executive KPI</span>
                 </div>
                 <div className="flex items-end justify-between">
                   <div>
                     <div className="text-[11px] font-bold text-gray-400 mb-0.5">Projected Margin</div>
                     <span className="text-[22px] font-black text-white leading-none">+12.4%</span>
                   </div>
                   <span className="text-[9px] text-black bg-green-500 px-2 py-1 rounded-md font-bold uppercase tracking-widest">Optimized</span>
                 </div>
               </div>

               {/* Ops Card */}
               <div className="bg-[#111] border border-gray-800 p-4 rounded-[20px] shadow-xl">
                 <div className="flex items-center gap-2 mb-3">
                   <LayoutDashboard className="text-[#FFF200]" size={14} />
                   <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Operations</span>
                 </div>
                 <div className="flex flex-col gap-2">
                    <div className="flex justify-between text-[10px] text-white font-bold">
                       <span className="text-gray-400">Schedule Variance:</span>
                       <span className="text-[#FFF200]">-2 Days</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                       <div className="h-full w-[78%] bg-[#FFF200] shadow-[0_0_10px_#FFF200]"></div>
                    </div>
                 </div>
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* ====================== LIFECYCLE: VERTICAL STEPPER ====================== */}
      <section className="bg-gray-50 py-16 px-5 border-y border-gray-100 relative">
        <div className="mb-12">
          <h2 className="text-[36px] font-black tracking-tighter leading-[1.05] text-black">
            Intelligence for <br/> <span className="bg-[#FFF200] px-2 rounded-lg inline-block mt-1">every phase.</span>
          </h2>
          <p className="mt-4 text-[14px] text-gray-500 font-medium">Plugs into your workflow from day zero to handover.</p>
        </div>

        <div className="space-y-8 relative">
           <div className="absolute left-5 top-4 bottom-4 w-[2px] bg-gray-200"></div>
           
           {[
             { t: "Land Acquisition", d: "Analytics for contours & volumetric early-feasibility.", num: "01" },
             { t: "Design & Planning", d: "Reality into accurate BIM models for coordination.", num: "02" },
             { t: "Construction", d: "Automated tracking & deviation detection.", num: "03" },
             { t: "Handover / O&M", d: "Verify final as-builts for the audit trail.", num: "04" },
           ].map((step, idx) => (
             <div key={idx} className="relative pl-14">
               <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center font-black text-xs text-black z-10">{step.num}</div>
               <div className="pt-1.5 pb-2">
                 <h4 className="text-[17px] font-black mb-1.5 text-black leading-tight">{step.t}</h4>
                 <p className="text-[13px] text-gray-500 font-medium leading-snug">{step.d}</p>
               </div>
             </div>
           ))}
        </div>
      </section>

      {/* ====================== METRICS ====================== */}
      <section className="bg-white py-16 px-5">
        <div className="text-center mb-10">
          <h2 className="text-[32px] font-black tracking-tighter leading-[1.05] text-black">Validated Impact</h2>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {[
            {v:"99.9%", l:"Accuracy Rate"},
            {v:"$4bn+", l:"Assets Monitored"},
            {v:"350k+", l:"Images Analyzed"},
            {v:"80%", l:"Less Site Visits"},
          ].map((m, i) => (
            <div key={i} className="bg-gray-50/50 p-6 rounded-[24px] text-center border border-gray-100 shadow-[0_4px_15px_rgba(0,0,0,0.02)]">
              <p className="text-[28px] font-black text-black mb-1.5 tracking-tighter">{m.v}</p>
              <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{m.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ====================== TESTIMONIALS ====================== */}
      <section className="bg-[#FFF200] py-16 px-5 relative overflow-hidden">
        {/* Aesthetic grid matching desktop */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        
        <div className="relative z-10">
          <div className="flex gap-2 mb-10 overflow-x-auto no-scrollbar pb-2 snap-x">
            {["Site Manager", "Leadership", "Project Owner"].map((label, id) => (
              <button key={id} onClick={() => setActiveTestimonial(id)} className={`snap-start whitespace-nowrap px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all shadow-sm ${activeTestimonial === id ? "bg-black text-white scale-105" : "bg-white text-black opacity-70"}`}>{label}</button>
            ))}
          </div>
          
          <div className="min-h-[180px]">
            <p className="text-[26px] font-black leading-[1.15] text-black tracking-tighter mb-8">
              {activeTestimonial === 0 && "\"YelloSKYE cut our verification time from hours to minutes. Total game changer.\""}
              {activeTestimonial === 1 && "\"Leadership finally sees the same reality as the site. Faster approvals and accountability.\""}
              {activeTestimonial === 2 && "\"I don't chase updates anymore. I open it and know exactly where my project stands.\""}
            </p>
            <div>
               <div className="font-black text-[13px] uppercase tracking-widest text-black">Industry Leader</div>
               <div className="text-[11px] font-bold uppercase tracking-widest text-black/50 mt-0.5">Verified Partner • India</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};  