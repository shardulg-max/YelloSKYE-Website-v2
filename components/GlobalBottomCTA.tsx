// components/GlobalBottomCTA.tsx
import React from 'react';
import { Check } from 'lucide-react';

export default function GlobalBottomCTA() {
  return (
    <>
      {/* ====================== THE EXECUTIVE GATEWAY (FORM) ====================== */}
      <section className="bg-white py-24 lg:py-40 relative overflow-hidden font-sans border-gray-100">
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

      {/* ====================== TRUST BAND ====================== */}
      <section className="bg-white relative z-10 pt-6 pb-12 lg:pb-16">
        <p className="text-center text-[10px] lg:text-[11px] font-black uppercase tracking-[0.5em] text-gray-400 mb-8">
          Trusted by the best in the business
        </p>
        
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
    </>
  );
}