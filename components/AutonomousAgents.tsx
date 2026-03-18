import React, { useEffect, useRef, useState } from 'react';
import { Activity, Receipt, ShieldAlert, Presentation } from 'lucide-react';

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

  // Intersection Observer to detect which text block is currently in the middle of the screen
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
        // Triggers when the element crosses the middle 40% of the viewport
        rootMargin: '-30% 0px -30% 0px' 
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-24 lg:py-40 relative font-sans border-t border-gray-100">
      
      {/* HEADER */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 mb-20 md:mb-32 text-center">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-black leading-[1.1]">
          A new era of construction,<br />
          with <span className="bg-[#FFF200] px-2 leading-tight inline-block transform -skew-x-2">Autonomous Agents.</span>
        </h2>
        <p className="mt-6 text-lg md:text-xl text-gray-500 font-medium max-w-2xl mx-auto">
          Meet your new digital taskforce. Four specialized AI agents that continuously turn your raw site data into reports, statuses, and next steps.
        </p>
      </div>

      {/* STICKY SCROLL CONTAINER */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
        
        {/* LEFT SIDE: Scrolling Text */}
        <div className="w-full lg:w-5/12 pb-[30vh] lg:pb-[50vh]">
          {AGENTS.map((agent, index) => {
            const isActive = activeIndex === index;
            const Icon = agent.icon;
            
            return (
              <div 
                key={agent.id}
                ref={(el) => (sectionRefs.current[index] = el)}
                className={`min-h-[50vh] lg:min-h-[70vh] flex flex-col justify-center transition-all duration-700 ease-out ${
                  isActive ? 'opacity-100 transform-none' : 'opacity-20 translate-x-[-20px]'
                }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transition-colors duration-500 ${isActive ? 'bg-[#FFF200] text-black' : 'bg-gray-100 text-gray-400'}`}>
                    <Icon strokeWidth={2.5} size={24} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                    {agent.tag}
                  </span>
                </div>
                
                <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-black mb-6">
                  {agent.name}
                </h3>
                <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed max-w-md">
                  {agent.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* RIGHT SIDE: Sticky Visual Window */}
        <div className="w-full lg:w-7/12 sticky top-32 h-[500px] lg:h-[700px] hidden md:block">
          {/* Outer Hardware Frame */}
          <div className="w-full h-full bg-[#0A0A0A] rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.15)] border border-gray-200 overflow-hidden relative group p-4 lg:p-6">
            
            {/* Top Bar (Browser/App Mac-style dots) */}
            <div className="flex items-center gap-2 mb-6 px-2 opacity-50">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="ml-4 text-[10px] font-mono text-gray-400">yelloskye-terminal // {AGENTS[activeIndex].id}_agent.exe</div>
            </div>

            {/* Inner Screen Area */}
            <div className="w-full h-[calc(100%-48px)] bg-[#111] rounded-[24px] border border-white/10 relative overflow-hidden">
              
              {/* VISUAL 1: PROGRESS AGENT */}
              <div className={`absolute inset-0 p-8 transition-opacity duration-700 flex flex-col gap-4 ${activeIndex === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                <div className="text-white font-bold mb-4">Project Overview Dashboard</div>
                {[
                  { name: "Tower A - Formwork", stat: "On Track", color: "bg-green-500", w: "w-[85%]" },
                  { name: "Tower B - Casting", stat: "Delayed 2 Days", color: "bg-red-500", w: "w-[40%]" },
                  { name: "Podium - Rebar", stat: "At Risk", color: "bg-yellow-500", w: "w-[60%]" }
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/5">
                    <div className="flex justify-between text-xs font-medium text-gray-400 mb-3">
                      <span>{item.name}</span>
                      <span className="text-white">{item.stat}</span>
                    </div>
                    <div className="w-full h-1.5 bg-black rounded-full overflow-hidden">
                      <div className={`h-full ${item.w} ${item.color} shadow-[0_0_10px_currentColor] rounded-full`}></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* VISUAL 2: BILLING AGENT */}
              <div className={`absolute inset-0 p-8 transition-opacity duration-700 flex flex-col ${activeIndex === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                <div className="text-white font-bold mb-6 flex justify-between items-center">
                  <span>Auto-Generated RA Bill</span>
                  <span className="bg-[#FFF200] text-black text-xs px-2 py-1 rounded font-black uppercase">Approved</span>
                </div>
                <div className="w-full bg-white/5 border border-white/5 rounded-xl overflow-hidden text-xs">
                  <div className="grid grid-cols-4 p-3 bg-white/10 font-bold text-gray-300">
                    <div className="col-span-2">Item Description</div>
                    <div>Qty (Site)</div>
                    <div>Amount</div>
                  </div>
                  {[
                    { desc: "Excavation in Soil", qty: "4,500 Cum", amt: "₹ 1,35,000" },
                    { desc: "PCC 1:4:8", qty: "120 Cum", amt: "₹ 4,80,000" },
                    { desc: "RCC M30 Grade", qty: "850 Cum", amt: "₹ 51,00,000" }
                  ].map((row, i) => (
                    <div key={i} className="grid grid-cols-4 p-3 border-b border-white/5 text-gray-400">
                      <div className="col-span-2 text-white">{row.desc}</div>
                      <div>{row.qty}</div>
                      <div className="text-green-400 font-mono">{row.amt}</div>
                    </div>
                  ))}
                  <div className="grid grid-cols-4 p-4 bg-[#FFF200]/10 text-[#FFF200] font-bold">
                    <div className="col-span-3 text-right pr-4">Total Value Generated:</div>
                    <div className="font-mono">₹ 57,15,000</div>
                  </div>
                </div>
              </div>

              {/* VISUAL 3: QUALITY AGENT */}
              <div className={`absolute inset-0 p-8 transition-opacity duration-700 ${activeIndex === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                <div className="text-white font-bold mb-4 flex gap-2 items-center">
                  <ShieldAlert size={16} className="text-red-500" />
                  Clash Detection Log
                </div>
                {/* Simulated Blueprint/BIM area */}
                <div className="w-full h-[65%] rounded-xl border border-white/10 relative overflow-hidden bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:2rem_2rem]">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent z-10"></div>
                  {/* Flashing Error Box */}
                  <div className="absolute top-[30%] left-[40%] w-32 h-32 border-2 border-red-500 bg-red-500/10 rounded-lg flex items-start justify-end p-2 animate-pulse z-20">
                    <div className="bg-red-500 text-white text-[9px] font-black uppercase px-2 py-1 rounded">Deviated 45mm</div>
                  </div>
                </div>
                <div className="mt-4 bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex gap-4 items-center">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-ping"></div>
                  <div>
                    <div className="text-red-400 font-bold text-sm">Column C4 Misaligned</div>
                    <div className="text-gray-500 text-xs mt-1">Check against structural drawing REV-03</div>
                  </div>
                </div>
              </div>

              {/* VISUAL 4: CONTENT AGENT */}
              <div className={`absolute inset-0 p-8 transition-opacity duration-700 flex flex-col justify-center ${activeIndex === 3 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                <div className="max-w-sm mx-auto w-full">
                  <div className="flex justify-center mb-6">
                    <div className="px-4 py-2 bg-[#FFF200] rounded-full text-black text-xs font-black uppercase tracking-widest animate-bounce">
                      Generating PDF Deck...
                    </div>
                  </div>
                  {/* Skeleton loader of a PDF page */}
                  <div className="bg-white rounded-lg p-6 shadow-2xl transform rotate-3 transition-transform hover:rotate-0 duration-500">
                    <div className="w-1/2 h-6 bg-gray-200 rounded mb-6"></div>
                    <div className="flex gap-4 mb-6">
                      <div className="w-1/2 h-32 bg-gray-100 rounded-lg border border-gray-200"></div>
                      <div className="w-1/2 h-32 bg-gray-100 rounded-lg border border-gray-200"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="w-full h-3 bg-gray-100 rounded"></div>
                      <div className="w-[80%] h-3 bg-gray-100 rounded"></div>
                      <div className="w-[90%] h-3 bg-gray-100 rounded"></div>
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