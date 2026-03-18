import React, { useEffect, useRef, useState } from 'react';
import { Activity, Receipt, ShieldAlert, Presentation, CheckCircle2 } from 'lucide-react';

const AGENTS = [
  {
    id: 'progress',
    name: 'Progress Agent',
    tag: 'Schedule & Tracking',
    description: 'Tracks how each site is moving versus plan and keeps every project in red/amber/green status at a glance.',
    icon: Activity,
  },
  {
    id: 'billing',
    name: 'Billing Agent',
    tag: 'Automated BOQ',
    description: 'Automatically creates clear, audit-ready progress and billing reports from site data exactly on schedule.',
    icon: Receipt,
  },
  {
    id: 'quality',
    name: 'Quality Agent',
    tag: 'Clash & Compliance',
    description: 'Checks built work against drawings and standards, flagging likely non-compliance or missed items early.',
    icon: ShieldAlert,
  },
  {
    id: 'content',
    name: 'Content Agent',
    tag: 'Stakeholder Comms',
    description: 'Pulls the right images and numbers into ready-to-send update decks and emails for project stakeholders.',
    icon: Presentation,
  }
];

export default function AutonomousAgents() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      {
        rootMargin: '-30% 0px -30% 0px' 
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    // FIX: Removed overflow-hidden so the sticky scroll works perfectly again
    <section className="bg-white relative font-sans border-gray-100 py-16 lg:py-24">
      
      {/* 1. THE AESTHETIC GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0" 
             style={{ 
               backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", 
               backgroundSize: "80px 80px",
               maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
               WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)"
             }} />
      </div>

      {/* Premium Custom Animations Injected */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scanline {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(400px); opacity: 0; }
        }
        @keyframes popIn {
          0% { opacity: 0; transform: translateY(10px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes dropIn {
          0% { opacity: 0; transform: translateY(-30px) scale(1.05); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes stamp {
          0% { opacity: 0; transform: scale(2) rotate(-10deg); }
          50% { opacity: 1; transform: scale(0.9) rotate(5deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }
      `}} />

      {/* HEADER (Tighter margins) */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 mb-12 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-black leading-[1.1]">
          A new era of construction,<br />
          with <span className="bg-[#FFF200] px-2 leading-tight inline-block transform -skew-x-2 shadow-sm">Autonomous Agents.</span>
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-500 font-medium max-w-2xl mx-auto">
          Meet your new digital taskforce. Four specialized AI agents that continuously turn your raw site data into reports, statuses, and next steps.
        </p>
      </div>

      {/* STICKY SCROLL TRACK */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative flex flex-col lg:flex-row items-start z-10">
        
        {/* LEFT SIDE: The Scrolling Text Track */}
        <div className="w-full lg:w-5/12 pb-[20vh] relative z-20">
          {AGENTS.map((agent, index) => {
            const isActive = activeIndex === index;
            const Icon = agent.icon;
            
            return (
              <div 
                key={agent.id}
                ref={(el) => (sectionRefs.current[index] = el)}
                // TIGHTER HEIGHT: 60vh instead of h-screen
                className={`h-[60vh] flex flex-col justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isActive ? 'opacity-100 translate-y-0 scale-100' : 'opacity-20 translate-y-8 scale-95'
                }`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-lg transition-colors duration-700 ${isActive ? 'bg-[#FFF200] text-black shadow-[#FFF200]/30' : 'bg-gray-100 text-gray-400'}`}>
                    <Icon strokeWidth={2.5} size={20} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                    {agent.tag}
                  </span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-black mb-4 leading-tight">
                  {agent.name}
                </h3>
                <p className="text-base md:text-lg text-gray-500 font-medium leading-relaxed max-w-md">
                  {agent.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* RIGHT SIDE: The Locked Sticky Box */}
        {/* Top-24 keeps it nicely framed below the header */}
        <div className="w-full lg:w-7/12 sticky top-24 h-[calc(100vh-8rem)] max-h-[650px] flex items-center justify-center hidden md:flex pointer-events-none z-10 pl-12">
          
          {/* THE TERMINAL / DEVICE */}
          <div className="w-full max-w-[650px] h-[500px] lg:h-[550px] bg-[#0A0A0A] rounded-[32px] shadow-[0_40px_100px_rgba(0,0,0,0.25)] border border-white/10 overflow-hidden relative transition-all duration-700 hover:shadow-[0_50px_120px_rgba(255,242,0,0.1)] group">
            
            {/* Glossy top highlight */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-50"></div>

            {/* Top Bar */}
            <div className="flex items-center gap-2 px-6 h-12 bg-white/5 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-[0_0_10px_#FF5F56]/50"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-[0_0_10px_#FFBD2E]/50"></div>
              <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-[0_0_10px_#27C93F]/50"></div>
              <div className="ml-4 text-[10px] font-mono text-gray-500 tracking-wider">yelloskye-core // {AGENTS[activeIndex].id}_module.exe</div>
            </div>

            {/* Inner Screen Area */}
            <div className="w-full h-[calc(100%-48px)] bg-[#0A0A0A] relative overflow-hidden">
              
              {/* Ambient Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(255,242,0,0.03)_0%,transparent_50%)] pointer-events-none transition-opacity duration-1000"></div>
              
              {/* VISUAL 1: PROGRESS AGENT */}
              <div className={`absolute inset-0 p-8 flex flex-col gap-4 transition-all duration-700 ${activeIndex === 0 ? 'opacity-100 scale-100 z-10 delay-200' : 'opacity-0 scale-95 z-0'}`}>
                <div className="text-white text-xs font-bold tracking-wide uppercase opacity-80 mb-2">Project Trajectory Overview</div>
                {[
                  { name: "Tower A - Formwork", stat: "On Track", color: "bg-green-500", glow: "shadow-[0_0_15px_rgba(34,197,94,0.4)]", w: "85%" },
                  { name: "Tower B - Casting", stat: "Delayed 2 Days", color: "bg-red-500", glow: "shadow-[0_0_15px_rgba(239,68,68,0.4)]", w: "40%" },
                  { name: "Podium - Rebar", stat: "At Risk", color: "bg-yellow-500", glow: "shadow-[0_0_15px_rgba(234,179,8,0.4)]", w: "60%" },
                  { name: "Basement - Waterproof", stat: "Completed", color: "bg-blue-500", glow: "shadow-[0_0_15px_rgba(59,130,246,0.4)]", w: "100%" }
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-md rounded-xl p-3 border border-white/10" style={{ animation: activeIndex === 0 ? `popIn 0.5s ease-out ${i * 0.15}s both` : 'none' }}>
                    <div className="flex justify-between text-[11px] font-semibold text-gray-400 mb-2">
                      <span>{item.name}</span>
                      <span className="text-white">{item.stat}</span>
                    </div>
                    <div className="w-full h-1.5 bg-black/50 rounded-full overflow-hidden shadow-inner relative">
                      <div className={`absolute left-0 top-0 bottom-0 ${item.color} ${item.glow} rounded-full transition-all duration-1500 ease-out`} style={{ width: activeIndex === 0 ? item.w : '0%' }}></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* VISUAL 2: BILLING AGENT */}
              <div className={`absolute inset-0 p-8 flex flex-col transition-all duration-700 ${activeIndex === 1 ? 'opacity-100 scale-100 z-10 delay-200' : 'opacity-0 scale-95 z-0'}`}>
                <div className="flex justify-between items-center mb-5">
                  <div className="text-white text-xs font-bold tracking-wide uppercase opacity-80">Auto-Generated RA Bill #42</div>
                  <div className="bg-[#FFF200] text-black text-[9px] px-2 py-1 rounded-sm font-black uppercase tracking-widest shadow-[0_0_20px_rgba(255,242,0,0.3)]" style={{ animation: activeIndex === 1 ? 'stamp 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.2s both' : 'none' }}>Approved</div>
                </div>
                <div className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden text-[11px] shadow-2xl relative">
                  <div className="grid grid-cols-4 p-3 bg-black/40 font-bold text-gray-400 uppercase tracking-wider text-[9px]">
                    <div className="col-span-2">Item Description</div>
                    <div>Qty (Site)</div>
                    <div className="text-right">Amount (₹)</div>
                  </div>
                  {[
                    { desc: "Excavation in Soil", qty: "4,500 Cum", amt: "1,35,000" },
                    { desc: "PCC 1:4:8", qty: "120 Cum", amt: "4,80,000" },
                    { desc: "RCC M30 Grade", qty: "850 Cum", amt: "51,00,000" }
                  ].map((row, i) => (
                    <div key={i} className="grid grid-cols-4 p-3 border-b border-white/5 text-gray-300 items-center" style={{ animation: activeIndex === 1 ? `popIn 0.4s ease-out ${0.2 + (i * 0.2)}s both` : 'none' }}>
                      <div className="col-span-2 font-medium">{row.desc}</div>
                      <div className="font-mono text-gray-500">{row.qty}</div>
                      <div className="text-right text-green-400 font-mono tracking-tight">{row.amt}</div>
                    </div>
                  ))}
                  <div className="grid grid-cols-4 p-4 bg-[#FFF200]/10 text-[#FFF200] font-bold items-center" style={{ animation: activeIndex === 1 ? `popIn 0.5s ease-out 1s both` : 'none' }}>
                    <div className="col-span-3 text-right pr-4 uppercase tracking-widest text-[9px]">Total Certified Value:</div>
                    <div className="text-right font-mono text-sm tracking-tight">₹ 57,15,000</div>
                  </div>
                </div>
              </div>

              {/* VISUAL 3: QUALITY AGENT */}
              <div className={`absolute inset-0 p-8 transition-all duration-700 flex flex-col ${activeIndex === 2 ? 'opacity-100 scale-100 z-10 delay-200' : 'opacity-0 scale-95 z-0'}`}>
                <div className="text-white text-xs font-bold tracking-wide uppercase opacity-80 mb-3 flex gap-2 items-center">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
                  Clash Detection Log
                </div>
                <div className="w-full flex-1 rounded-xl border border-white/10 relative overflow-hidden bg-[#050505] bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3rem_3rem]">
                  <div className="absolute inset-x-0 h-[2px] bg-blue-400/50 shadow-[0_0_20px_rgba(96,165,250,0.8)] z-30" style={{ animation: activeIndex === 2 ? 'scanline 3s linear infinite' : 'none' }}>
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-400/20 to-transparent h-32 -translate-y-full"></div>
                  </div>
                  <div className="absolute top-[30%] left-[40%] w-24 h-24 z-20" style={{ animation: activeIndex === 2 ? 'popIn 0.3s ease-out 1s both' : 'none' }}>
                    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-red-500"></div>
                    <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-red-500"></div>
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-red-500"></div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-red-500"></div>
                    <div className="w-full h-full bg-red-500/10 backdrop-blur-[1px] flex items-center justify-center animate-pulse">
                      <div className="bg-red-500 text-white text-[8px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded shadow-lg">Deviated</div>
                    </div>
                  </div>
                </div>
                <div className="mt-3 bg-red-500/10 border border-red-500/20 rounded-xl p-3 flex gap-3 items-center backdrop-blur-md" style={{ animation: activeIndex === 2 ? 'popIn 0.4s ease-out 1.2s both' : 'none' }}>
                  <ShieldAlert className="text-red-400" size={16} />
                  <div>
                    <div className="text-red-400 font-bold text-[11px]">Column C4 Misaligned</div>
                    <div className="text-gray-400 text-[10px] mt-0.5">Cross-checked against structural REV-03</div>
                  </div>
                </div>
              </div>

              {/* VISUAL 4: CONTENT AGENT (Positive "Done" Animation) */}
              <div className={`absolute inset-0 p-8 transition-all duration-700 flex flex-col items-center justify-center ${activeIndex === 3 ? 'opacity-100 scale-100 z-10 delay-200' : 'opacity-0 scale-95 z-0'}`}>
                
                {/* Instant Success Badge */}
                <div className="mb-6 z-20" style={{ animation: activeIndex === 3 ? 'dropIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.8s both' : 'none' }}>
                  <div className="bg-green-500/10 border border-green-500/20 backdrop-blur-md text-green-400 text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full flex items-center gap-2 shadow-[0_0_30px_rgba(34,197,94,0.15)]">
                    <CheckCircle2 size={16} className="text-green-500" />
                    Stakeholder Deck Ready
                  </div>
                </div>

                {/* Stack of generated reports */}
                <div className="relative w-56 h-72 perspective-1000">
                  
                  {/* Background Paper 2 */}
                  <div className="absolute inset-0 bg-white/40 rounded-lg shadow-lg border border-white/20 transform -rotate-6 translate-x-2 translate-y-2 origin-bottom-right" style={{ animation: activeIndex === 3 ? 'popIn 0.6s ease-out 0.2s both' : 'none' }}></div>
                  
                  {/* Background Paper 1 */}
                  <div className="absolute inset-0 bg-white/70 rounded-lg shadow-xl border border-white/40 transform -rotate-3 translate-x-1 translate-y-1 origin-bottom-right" style={{ animation: activeIndex === 3 ? 'popIn 0.6s ease-out 0.4s both' : 'none' }}></div>
                  
                  {/* Foreground Hero PDF */}
                  <div className="absolute inset-0 bg-white rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex flex-col p-5 relative overflow-hidden" style={{ animation: activeIndex === 3 ? 'dropIn 0.6s ease-out 0.6s both' : 'none' }}>
                    <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/5 to-transparent"></div>
                    
                    {/* Content inside the PDF */}
                    <div className="w-3/4 h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="w-1/2 h-2.5 bg-[#FFF200] rounded mb-6"></div>
                    
                    <div className="flex gap-2 mb-4">
                      <div className="flex-1 h-20 bg-gray-100 rounded border border-gray-200 relative overflow-hidden">
                        <div className="absolute inset-0 bg-blue-500/10"></div>
                      </div>
                      <div className="flex-1 h-20 bg-gray-100 rounded border border-gray-200 relative overflow-hidden">
                        <div className="absolute inset-0 bg-green-500/10"></div>
                      </div>
                    </div>
                    
                    <div className="space-y-2.5 flex-1">
                      <div className="w-full h-2 bg-gray-200 rounded"></div>
                      <div className="w-[85%] h-2 bg-gray-200 rounded"></div>
                      <div className="w-[90%] h-2 bg-gray-200 rounded"></div>
                      <div className="w-[60%] h-2 bg-gray-200 rounded"></div>
                    </div>

                    <div className="mt-auto pt-3 border-t border-gray-100 flex justify-between items-center">
                       <div className="w-6 h-1.5 bg-gray-300 rounded"></div>
                       <div className="w-12 h-1.5 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}