import React, { useEffect, useState, useRef } from 'react';
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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Handle Mobile Detection
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll Tracking Logic (Intersection Observer)
  useEffect(() => {
    if (isMobile) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        // Triggers exactly when the user reaches the middle of the screen
        rootMargin: '-45% 0px -45% 0px' 
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [isMobile]);

  if (isMobile) return null; // Mobile handled separately

  return (
    <section className="bg-white relative font-sans border-gray-100">
      
      {/* Premium Custom Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scanline {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(500px); opacity: 0; }
        }
        @keyframes popIn {
          0% { opacity: 0; transform: translateY(10px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes dropIn {
          0% { opacity: 0; transform: translateY(-20px) scale(1.05); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes stamp {
          0% { opacity: 0; transform: scale(2) rotate(-15deg); }
          50% { opacity: 1; transform: scale(0.9) rotate(5deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }
      `}} />

      {/* The 400vh Scroll Track */}
      <div className="relative h-[400vh] w-full">
        
        {/* Sticky Viewport */}
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
          
          {/* AESTHETIC GRID BACKGROUND */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0">
            <div className="absolute inset-0" 
                 style={{ 
                   backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", 
                   backgroundSize: "80px 80px",
                   maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
                   WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)"
                 }} />
          </div>

          <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-10 relative z-10">
            
            {/* EXACT HEADER FROM SCREENSHOT */}
            <div className="text-center mb-16">
              <h2 className="text-[clamp(36px,5vw,56px)] font-black tracking-tighter text-black leading-[1.1]">
                A new era of construction,<br />
                with <span className="bg-[#FFF200] px-3 pb-1 pt-0.5 rounded-lg shadow-sm inline-block mt-2">Autonomous Agents.</span>
              </h2>
              <p className="mt-5 text-lg text-gray-500 font-medium max-w-2xl mx-auto">
                Meet your new digital taskforce. Four specialized AI agents that continuously turn your raw site data into reports, statuses, and next steps.
              </p>
            </div>

            {/* LIGHT ROUNDED CONTAINER (NEW DESIGN) */}
            <div className="bg-gray-50 border border-gray-100 rounded-[40px] p-10 lg:p-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 shadow-[0_10px_40px_rgba(0,0,0,0.02)] relative">
              
              {/* LEFT SIDE: REDESIGNED COPY */}
              <div className="w-full lg:w-5/12 flex flex-col">
                
                {/* Height-locked container to prevent layout jumping during transitions */}
                <div className="relative h-[220px] w-full">
                  {AGENTS.map((agent, index) => {
                    const isActive = activeIndex === index;
                    const Icon = agent.icon;
                    return (
                      <div 
                        key={agent.id}
                        className={`absolute top-0 left-0 w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                          isActive ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
                        }`}
                      >
                        <div className="flex items-center gap-4 mb-5">
                          <div className="w-12 h-12 rounded-xl bg-[#FFF200] text-black flex items-center justify-center shadow-sm">
                            <Icon strokeWidth={2.5} size={24} />
                          </div>
                          <span className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">
                            {agent.tag}
                          </span>
                        </div>
                        
                        <h3 className="text-4xl lg:text-5xl font-black tracking-tighter text-black mb-4 leading-tight">
                          {agent.name}
                        </h3>
                        <p className="text-lg text-gray-500 font-medium leading-relaxed max-w-md">
                          {agent.description}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* MANUAL NAVIGATION DOTS */}
                <div className="mt-8 lg:mt-12 flex justify-start z-20 relative">
                  <div className="bg-[#F3F4F6] rounded-full px-4 py-3 flex items-center gap-3 border border-gray-200 shadow-inner">
                    {AGENTS.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          if (sectionRefs.current[i]) {
                            sectionRefs.current[i].scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className={`h-2.5 rounded-full transition-all duration-300 ease-out ${
                          activeIndex === i 
                            ? 'w-10 bg-[#2D3139]' 
                            : 'w-2.5 bg-[#9CA3AF] hover:bg-gray-500'
                        }`}
                        aria-label={`View Agent ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>

              </div>

              {/* RIGHT SIDE: TERMINAL ANIMATION */}
              <div className="w-full lg:w-7/12 flex justify-center lg:justify-end relative z-10">
                <div className="w-full max-w-[700px] h-[450px] lg:h-[500px] bg-[#0A0A0A] rounded-[32px] shadow-[0_30px_80px_rgba(0,0,0,0.15)] border border-white/10 overflow-hidden relative transition-all duration-500 hover:shadow-[0_40px_100px_rgba(255,242,0,0.1)] group">
                  
                  {/* Glossy top highlight */}
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-50"></div>

                  {/* Top Bar */}
                  <div className="flex items-center gap-2 px-6 h-12 bg-white/5 border-b border-white/5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                    <div className="ml-4 text-[10px] font-mono text-gray-500 tracking-wider">yelloskye-core // {AGENTS[activeIndex].id}_module.exe</div>
                  </div>

                  {/* Inner Screen Area */}
                  <div className="w-full h-[calc(100%-48px)] bg-[#0A0A0A] relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(255,242,0,0.04)_0%,transparent_50%)] pointer-events-none transition-opacity duration-500"></div>
                    
                    {/* VISUAL 1: PROGRESS AGENT */}
                    <div className={`absolute inset-0 p-8 flex flex-col justify-center gap-4 transition-all duration-500 ${activeIndex === 0 ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0'}`}>
                      <div className="text-white text-xs font-bold tracking-wide uppercase opacity-80 mb-2">Project Trajectory Overview</div>
                      {[
                        { name: "Tower A - Formwork", stat: "On Track", color: "bg-green-500", glow: "shadow-[0_0_15px_rgba(34,197,94,0.4)]", w: "85%" },
                        { name: "Tower B - Casting", stat: "Delayed 2 Days", color: "bg-red-500", glow: "shadow-[0_0_15px_rgba(239,68,68,0.4)]", w: "40%" },
                        { name: "Podium - Rebar", stat: "At Risk", color: "bg-yellow-500", glow: "shadow-[0_0_15px_rgba(234,179,8,0.4)]", w: "60%" },
                        { name: "Basement - Waterproof", stat: "Completed", color: "bg-blue-500", glow: "shadow-[0_0_15px_rgba(59,130,246,0.4)]", w: "100%" }
                      ].map((item, i) => (
                        <div key={i} className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10" style={{ animation: activeIndex === 0 ? `popIn 0.3s ease-out ${i * 0.1}s both` : 'none' }}>
                          <div className="flex justify-between text-[11px] font-semibold text-gray-400 mb-2.5">
                            <span>{item.name}</span>
                            <span className="text-white">{item.stat}</span>
                          </div>
                          <div className="w-full h-1.5 bg-black/50 rounded-full overflow-hidden shadow-inner relative">
                            {/* Sped up from 1500ms to 700ms */}
                            <div className={`absolute left-0 top-0 bottom-0 ${item.color} ${item.glow} rounded-full transition-all duration-700 ease-out`} style={{ width: activeIndex === 0 ? item.w : '0%' }}></div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* VISUAL 2: BILLING AGENT */}
                    <div className={`absolute inset-0 p-8 flex flex-col justify-center transition-all duration-500 ${activeIndex === 1 ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0'}`}>
                      <div className="flex justify-between items-center mb-5">
                        <div className="text-white text-xs font-bold tracking-wide uppercase opacity-80">Auto-Generated RA Bill #42</div>
                        <div className="bg-[#FFF200] text-black text-[9px] px-3 py-1 rounded-sm font-black uppercase tracking-widest shadow-[0_0_15px_rgba(255,242,0,0.3)]" style={{ animation: activeIndex === 1 ? 'stamp 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s both' : 'none' }}>Approved</div>
                      </div>
                      <div className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden text-xs shadow-2xl relative">
                        <div className="grid grid-cols-4 p-3.5 bg-black/40 font-bold text-gray-400 uppercase tracking-wider text-[9px]">
                          <div className="col-span-2">Item Description</div>
                          <div>Qty (Site)</div>
                          <div className="text-right">Amount (₹)</div>
                        </div>
                        {[
                          { desc: "Excavation in Soil", qty: "4,500 Cum", amt: "1,35,000" },
                          { desc: "PCC 1:4:8", qty: "120 Cum", amt: "4,80,000" },
                          { desc: "RCC M30 Grade", qty: "850 Cum", amt: "51,00,000" }
                        ].map((row, i) => (
                          <div key={i} className="grid grid-cols-4 p-4 border-b border-white/5 text-gray-300 items-center text-[11px]" style={{ animation: activeIndex === 1 ? `popIn 0.3s ease-out ${0.1 + (i * 0.1)}s both` : 'none' }}>
                            <div className="col-span-2 font-medium">{row.desc}</div>
                            <div className="font-mono text-gray-500">{row.qty}</div>
                            <div className="text-right text-green-400 font-mono tracking-tight text-[12px]">{row.amt}</div>
                          </div>
                        ))}
                        <div className="grid grid-cols-4 p-4 bg-[#FFF200]/10 text-[#FFF200] font-bold items-center" style={{ animation: activeIndex === 1 ? `popIn 0.3s ease-out 0.4s both` : 'none' }}>
                          <div className="col-span-3 text-right pr-4 uppercase tracking-widest text-[9px]">Total Certified Value:</div>
                          <div className="text-right font-mono text-[13px] tracking-tight">₹ 57,15,000</div>
                        </div>
                      </div>
                    </div>

                    {/* VISUAL 3: QUALITY AGENT */}
                    <div className={`absolute inset-0 p-8 transition-all duration-500 flex flex-col ${activeIndex === 2 ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0'}`}>
                      <div className="text-white text-xs font-bold tracking-wide uppercase opacity-80 mb-4 flex gap-2.5 items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
                        Clash Detection Log
                      </div>
                      <div className="w-full flex-1 rounded-xl border border-white/10 relative overflow-hidden bg-[#050505] bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3rem_3rem]">
                        <div className="absolute inset-x-0 h-[3px] bg-blue-400/50 shadow-[0_0_20px_rgba(96,165,250,0.8)] z-30" style={{ animation: activeIndex === 2 ? 'scanline 2s linear infinite' : 'none' }}>
                          <div className="absolute inset-0 bg-gradient-to-b from-blue-400/20 to-transparent h-40 -translate-y-full"></div>
                        </div>
                        <div className="absolute top-[20%] left-[30%] w-28 h-28 z-20" style={{ animation: activeIndex === 2 ? 'popIn 0.3s ease-out 0.2s both' : 'none' }}>
                          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-red-500"></div>
                          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-red-500"></div>
                          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-red-500"></div>
                          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-red-500"></div>
                          <div className="w-full h-full bg-red-500/10 backdrop-blur-[1px] flex items-center justify-center animate-pulse">
                            <div className="bg-red-500 text-white text-[9px] font-black uppercase tracking-wider px-2 py-1 rounded shadow-lg">Deviated 45mm</div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 bg-red-500/10 border border-red-500/20 rounded-xl p-3.5 flex gap-3.5 items-center backdrop-blur-md" style={{ animation: activeIndex === 2 ? 'popIn 0.3s ease-out 0.35s both' : 'none' }}>
                        <ShieldAlert className="text-red-400 shrink-0" size={20} />
                        <div>
                          <div className="text-red-400 font-bold text-xs">Column C4 Misaligned</div>
                          <div className="text-gray-400 text-[10px] mt-0.5">Cross-checked against structural REV-03</div>
                        </div>
                      </div>
                    </div>

                    {/* VISUAL 4: CONTENT AGENT */}
                    <div className={`absolute inset-0 p-8 transition-all duration-500 flex flex-col items-center justify-center ${activeIndex === 3 ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0'}`}>
                      <div className="mb-6 z-20" style={{ animation: activeIndex === 3 ? 'dropIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.45s both' : 'none' }}>
                        <div className="bg-green-500/10 border border-green-500/20 backdrop-blur-md text-green-400 text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full flex items-center gap-2 shadow-[0_0_20px_rgba(34,197,94,0.15)]">
                          <CheckCircle2 size={16} className="text-green-500" />
                          Progress Report Ready
                        </div>
                      </div>
                      <div className="relative w-56 h-[18rem] perspective-1000">
                        <div className="absolute inset-0 bg-white/40 rounded-xl shadow-lg border border-white/20 transform -rotate-6 translate-x-2.5 translate-y-2.5 origin-bottom-right" style={{ animation: activeIndex === 3 ? 'popIn 0.4s ease-out 0.1s both' : 'none' }}></div>
                        <div className="absolute inset-0 bg-white/70 rounded-xl shadow-xl border border-white/40 transform -rotate-3 translate-x-1 translate-y-1 origin-bottom-right" style={{ animation: activeIndex === 3 ? 'popIn 0.4s ease-out 0.2s both' : 'none' }}></div>
                        <div className="absolute inset-0 bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex flex-col p-5 relative overflow-hidden" style={{ animation: activeIndex === 3 ? 'dropIn 0.4s ease-out 0.3s both' : 'none' }}>
                          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/5 to-transparent"></div>
                          <div className="w-3/4 h-4 bg-gray-200 rounded mb-2"></div>
                          <div className="w-1/2 h-2.5 bg-[#FFF200] rounded mb-6"></div>
                          <div className="flex gap-2.5 mb-4">
                            <div className="flex-1 h-20 bg-gray-100 rounded border border-gray-200 relative overflow-hidden"><div className="absolute inset-0 bg-blue-500/10"></div></div>
                            <div className="flex-1 h-20 bg-gray-100 rounded border border-gray-200 relative overflow-hidden"><div className="absolute inset-0 bg-green-500/10"></div></div>
                          </div>
                          <div className="space-y-2.5 flex-1">
                            <div className="w-full h-2 bg-gray-200 rounded"></div>
                            <div className="w-[85%] h-2 bg-gray-200 rounded"></div>
                            <div className="w-[90%] h-2 bg-gray-200 rounded"></div>
                            <div className="w-[60%] h-2 bg-gray-200 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* INVISIBLE SCROLL TRIGGERS (Overlaying the 400vh container) */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {AGENTS.map((_, i) => (
            <div 
              key={i} 
              ref={el => sectionRefs.current[i] = el} 
              className="h-screen w-full" 
            />
          ))}
        </div>

      </div>
    </section>
  );
}