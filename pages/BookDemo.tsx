import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

export const BookDemo: React.FC = () => {
  return (
    <section className="bg-white min-h-screen pt-32 pb-24 relative overflow-hidden font-sans">
      
      {/* Background Grid Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", 
             backgroundSize: "80px 80px",
             maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
             WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)"
           }} />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-start">
            
            {/* ─── LEFT SIDE: COPY & VALUE PROP (Sticky) ─── */}
            <div className="lg:sticky lg:top-40">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-8 shadow-sm">
                Book a Demo
              </div>
              <h1 className="text-[clamp(40px,5vw,64px)] font-black tracking-tighter text-black mb-6 leading-[1.05]">
                See your site with <br/>
                <span className="relative inline-block mt-2">
                  <span className="absolute inset-y-1 -inset-x-2 bg-[#FFF200] rounded-lg shadow-sm transform -skew-x-2"></span>
                  <span className="relative text-black">absolute clarity.</span>
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-500 font-medium leading-relaxed mb-10 max-w-md">
                Stop debating interpretations. Request a custom walkthrough of your site and see how YelloSKYE delivers boardroom-ready answers.
              </p>
              
              <ul className="space-y-6">
                {[
                  '15-Minute Tailored Site Walkthrough', 
                  'Zero Commitment Or Hardware Required', 
                  'Custom Strategy For Your Project Goals'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4 text-black font-black uppercase text-[11px] tracking-[0.1em]">
                    <div className="w-7 h-7 bg-black rounded-lg flex items-center justify-center text-[#FFF200] shadow-md shrink-0">
                      <Check size={16} strokeWidth={3}/>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* ─── RIGHT SIDE: THE FULL FORM ─── */}
            <div className="bg-[#0A0A0A] rounded-[40px] p-8 lg:p-12 shadow-[0_40px_120px_rgba(0,0,0,0.3)] border border-white/5 relative overflow-hidden group">
              {/* Ambient Glow */}
              <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#FFF200]/10 blur-[120px] rounded-full pointer-events-none" />
              
              <form className="relative z-10 space-y-5" onSubmit={(e) => e.preventDefault()}>
                
                <h3 className="text-white font-black text-2xl tracking-tight mb-6">Contact Sales</h3>

                {/* ROW 1: Names */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">First Name *</label>
                    <input required placeholder="John" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-700 focus:border-[#FFF200] focus:bg-white/10 outline-none transition-all text-sm font-medium" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Last Name *</label>
                    <input required placeholder="Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-700 focus:border-[#FFF200] focus:bg-white/10 outline-none transition-all text-sm font-medium" />
                  </div>
                </div>
                
                {/* ROW 2: Contact Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Business Email *</label>
                    <input required type="email" placeholder="john@company.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-700 focus:border-[#FFF200] focus:bg-white/10 outline-none transition-all text-sm font-medium" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Phone Number *</label>
                    <input required type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-700 focus:border-[#FFF200] focus:bg-white/10 outline-none transition-all text-sm font-medium" />
                  </div>
                </div>

                {/* ROW 3: Professional Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Job Title *</label>
                    <input required placeholder="Project Manager" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-700 focus:border-[#FFF200] focus:bg-white/10 outline-none transition-all text-sm font-medium" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Company *</label>
                    <input required placeholder="Ex: Larsen & Toubro" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-700 focus:border-[#FFF200] focus:bg-white/10 outline-none transition-all text-sm font-medium" />
                  </div>
                </div>

                {/* ROW 4: Country */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Country *</label>
                  <div className="relative">
                    <select required defaultValue="" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:border-[#FFF200] focus:bg-white/10 outline-none transition-all text-sm font-medium appearance-none">
                      <option value="" disabled className="text-gray-800">Select Country...</option>
                      <option value="IN" className="text-black">India</option>
                      <option value="US" className="text-black">United States</option>
                      <option value="UK" className="text-black">United Kingdom</option>
                      <option value="AE" className="text-black">UAE</option>
                      <option value="OTHER" className="text-black">Other</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </div>
                </div>

                {/* ROW 5: Message */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Message *</label>
                  <textarea required placeholder="Please share additional context so we can route your request to the right person..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-700 focus:border-[#FFF200] focus:bg-white/10 outline-none transition-all text-sm font-medium h-24 resize-none" />
                </div>

                {/* ROW 6: Source */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">How did you hear about us? *</label>
                  <textarea required placeholder="Please provide as much detail as possible..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-700 focus:border-[#FFF200] focus:bg-white/10 outline-none transition-all text-sm font-medium h-16 resize-none" />
                </div>

                {/* Privacy Policy */}
                <p className="text-[11px] text-gray-500 leading-relaxed pt-2 pl-1">
                  By submitting, you confirm that you have reviewed YelloSKYE's Privacy Policy and agree to its terms.
                </p>

                {/* Submit Button */}
                <div className="pt-4">
                  <button type="submit" className="w-full bg-[#FFF200] hover:bg-white text-black font-black py-4 lg:py-5 rounded-xl uppercase tracking-[0.2em] text-[12px] transition-all transform hover:-translate-y-0.5 shadow-[0_10px_30px_rgba(255,242,0,0.15)] flex items-center justify-center gap-3 group/btn">
                    Book a Demo
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};