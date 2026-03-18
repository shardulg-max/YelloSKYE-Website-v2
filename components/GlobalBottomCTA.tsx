import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Check } from 'lucide-react';

export default function GlobalBottomCTA() {
  const location = useLocation();

// 1. ADD THIS GUARD: If the path is '/book-demo', return null (render nothing)
  // Check your exact route path in App.tsx. It might be '/book-demo' or '/book'
  if (location.pathname === '/book-demo' || location.pathname === '/book') {
    return null;
  }

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    const scriptURL = 'https://script.google.com/macros/s/AKfycbwN2H10TqPr-uj-uiQcIO9znvd-xdAySF6CXJh0fLblVkX5KXyM-MGmQj-rUiqTSCeV0A/exec';

    // Prepare data to match your AppScript's expected JSON format
    const payload = {
      ...formData,
      source: `Global Bottom Gateway - Path: ${location.pathname}`,
      jobTitle: "N/A", // Placeholder as this form doesn't have this field
      country: "N/A"   // Placeholder as this form doesn't have this field
    };

    try {
      await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors', // Essential for Google Apps Script
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      // With no-cors, we assume success if no error is thrown
      setStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', phone: '', company: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Submission Error:', error);
      setStatus('error');
    }
  };

  return (
    <>
      {/* ====================== THE EXECUTIVE GATEWAY (FORM) ====================== */}
      <section className="bg-white pt-24 pb-12 lg:pt-32 lg:pb-16 relative font-sans">
        
        {/* Background Grid with Fade Out at the Bottom */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ 
               backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", 
               backgroundSize: "80px 80px",
               maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
               WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)"
             }} />
        
        {/* Soft bottom gradient to blend into the Trust Band seamlessly */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-0"></div>

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              
              {/* LEFT SIDE: Copy */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-8 shadow-sm">
                  Book Your Free Demo
                </div>
                <h3 className="text-4xl lg:text-6xl font-black tracking-tighter text-black mb-8 leading-[1.05]">
                  Ready to gain <br/>
                  <span className="relative inline-block mt-2">
                    <span className="absolute inset-y-1 -inset-x-2 bg-[#FFF200] rounded-lg shadow-sm transform -skew-x-2"></span>
                    <span className="relative text-black">absolute clarity?</span>
                  </span>
                </h3>
                <p className="text-lg lg:text-xl text-gray-500 font-medium leading-relaxed mb-10 max-w-lg">
                  Request a custom walkthrough of your site and see how YelloSKYE delivers boardroom-ready answers.
                </p>
                
                <ul className="space-y-5">
                  {[
                    '15-Minute Walkthrough', 
                    'Zero Commitment', 
                    'Custom Strategy'
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

              {/* RIGHT SIDE: Compact Form */}
              <div className="bg-[#0A0A0A] rounded-[40px] p-8 lg:p-10 shadow-[0_40px_120px_rgba(0,0,0,0.3)] border border-white/5 relative overflow-hidden group">
                
                <form className="relative z-10 space-y-4" onSubmit={handleSubmit}>
                  
                  {/* ROW 1: Names side-by-side */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">First Name *</label>
                      <input 
                        required 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-700 focus:border-[#FFF200] focus:bg-white/10 outline-none transition-all text-sm font-medium" 
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Last Name *</label>
                      <input 
                        required 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-700 focus:border-[#FFF200] focus:bg-white/10 outline-none transition-all text-sm font-medium" 
                      />
                    </div>
                  </div>
                  
                  {/* ROW 2: Contact side-by-side */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Business Email *</label>
                      <input 
                        required 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-700 focus:border-[#FFF200] focus:bg-white/10 outline-none transition-all text-sm font-medium" 
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Phone Number *</label>
                      <input 
                        required 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 555 000 0000" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-700 focus:border-[#FFF200] focus:bg-white/10 outline-none transition-all text-sm font-medium" 
                      />
                    </div>
                  </div>
                  
                  {/* ROW 3: Company & City side-by-side */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Company *</label>
                      <input 
                        required 
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Ex: L&T" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-700 focus:border-[#FFF200] focus:bg-white/10 outline-none transition-all text-sm font-medium" 
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">City *</label>
                      <input 
                        required 
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Mumbai" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-700 focus:border-[#FFF200] focus:bg-white/10 outline-none transition-all text-sm font-medium" 
                      />
                    </div>
                  </div>

                  {/* ROW 4: Compact Message Box */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Message *</label>
                    <textarea 
                      required 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share additional context so we can route your request..." 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-700 focus:border-[#FFF200] focus:bg-white/10 outline-none transition-all text-sm font-medium h-16 resize-none" 
                    />
                  </div>

                  {/* Status Messages */}
                  {status === 'success' && (
                    <p className="text-[#FFF200] text-sm font-bold text-center">Details submitted successfully!</p>
                  )}
                  {status === 'error' && (
                    <p className="text-red-400 text-sm font-bold text-center">Something went wrong. Please try again.</p>
                  )}

                  <div className="pt-2">
                    <button 
                      type="submit" 
                      disabled={status === 'submitting'}
                      className={`w-full bg-[#FFF200] hover:bg-white text-black font-black py-4 rounded-xl uppercase tracking-[0.2em] text-[11px] transition-all transform hover:-translate-y-0.5 shadow-[0_10px_20px_rgba(255,242,0,0.15)] flex items-center justify-center gap-3 group/btn ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {status === 'submitting' ? 'Sending...' : 'Book a free demo'}
                      {status !== 'submitting' && (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:translate-x-1 transition-transform"><path d="m9 18 6-6-6-6"/></svg>
                      )}
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