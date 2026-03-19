import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Check, Loader2 } from 'lucide-react';

export default function GlobalBottomCTA() {
  const location = useLocation();

  // 1. State for form fields (City Included)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    city: '',
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

    const payload = {
      ...formData,
      source: `Global Bottom Gateway - Path: ${location.pathname}`,
      jobTitle: "N/A", 
      country: "N/A"   
    };

    try {
      await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      setStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', phone: '', company: '', city: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Submission Error:', error);
      setStatus('error');
    }
  };

  return (
    <>
      {/* 🚨 ADDED z-20 AND pb-24 TO GIVE THE SHADOW ROOM TO BREATHE OVER THE TRUST BAND 🚨 */}
      <section className="bg-white pt-24 pb-20 lg:pt-32 lg:pb-24 relative font-sans z-20">
        
        {/* BACKGROUND GRID (Adjusted to fade out smoothly at 70% height) */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" 
             style={{ 
               backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", 
               backgroundSize: "80px 80px",
               // Fades out perfectly before touching the bottom
               maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 70%, transparent 100%)",
               WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 70%, transparent 100%)"
             }} />
             
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
                  {['15-Minute Walkthrough', 'Zero Commitment', 'Custom Strategy'].map((item) => (
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
              <div className="bg-[#0A0A0A] rounded-[40px] p-8 lg:p-10 shadow-[0_40px_100px_rgba(0,0,0,0.25)] border border-white/5 relative overflow-hidden group">
                
                <form className="relative z-10 space-y-4" onSubmit={handleSubmit}>
                  
                  {/* ROW 1: Names */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">First Name *</label>
                      <input required name="firstName" value={formData.firstName} onChange={handleChange} placeholder="John" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-700 focus:border-[#FFF200] focus:bg-white/10 outline-none transition-all text-sm font-medium" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Last Name *</label>
                      <input required name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-700 focus:border-[#FFF200] focus:bg-white/10 outline-none transition-all text-sm font-medium" />
                    </div>
                  </div>
                  
                  {/* ROW 2: Contact */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Business Email *</label>
                      <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@company.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-700 focus:border-[#FFF200] focus:bg-white/10 outline-none transition-all text-sm font-medium" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Phone Number *</label>
                      <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 555 000 0000" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-700 focus:border-[#FFF200] focus:bg-white/10 outline-none transition-all text-sm font-medium" />
                    </div>
                  </div>
                  
                  {/* ROW 3: Company & City */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Company *</label>
                      <input required name="company" value={formData.company} onChange={handleChange} placeholder="Ex: Larsen & Toubro" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-700 focus:border-[#FFF200] focus:bg-white/10 outline-none transition-all text-sm font-medium" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">City *</label>
                      <input required name="city" value={formData.city} onChange={handleChange} placeholder="Mumbai" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-700 focus:border-[#FFF200] focus:bg-white/10 outline-none transition-all text-sm font-medium" />
                    </div>
                  </div>

                  {/* ROW 4: Message */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Message *</label>
                    <textarea required name="message" value={formData.message} onChange={handleChange} placeholder="Share additional context so we can route your request..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-700 focus:border-[#FFF200] focus:bg-white/10 outline-none transition-all text-sm font-medium h-16 resize-none" />
                  </div>

                  {status === 'success' && <p className="text-[#FFF200] text-sm font-bold text-center pt-2">Details submitted successfully!</p>}
                  {status === 'error' && <p className="text-red-400 text-sm font-bold text-center pt-2">Something went wrong. Please try again.</p>}

                  <div className="pt-2">
                    <button 
                      type="submit" 
                      disabled={status === 'submitting'}
                      className={`w-full bg-[#FFF200] hover:bg-white text-black font-black py-4 rounded-xl uppercase tracking-[0.2em] text-[11px] transition-all transform hover:-translate-y-0.5 shadow-[0_10px_20px_rgba(255,242,0,0.15)] flex items-center justify-center gap-3 group/btn ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {status === 'submitting' ? <><Loader2 size={16} className="animate-spin" /> Sending...</> : 'Book a free demo'}
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
<section className="bg-white relative z-30 py-8 lg:py-12 border-gray-100/50 border-b">
  <p className="text-center text-[10px] lg:text-[11px] font-black uppercase tracking-[0.5em] text-gray-400 mb-8">
    Providing intelligence to intelligent leaders
  </p>
  
  <div className="relative overflow-hidden marquee-mask flex w-full group">
    <div className="flex shrink-0 animate-marquee items-center gap-16 md:gap-24 px-8 md:px-12 group-hover:[animation-play-state:paused]">
      {[
        /* --- FIRST SET --- */
        { name: "Larsen & Toubro", logo: "https://ik.imagekit.io/saxybrgkp/d42f9b4890d9d997028a6089eb051675.png" },
        { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/640px-Amazon_logo.svg.png" },
        { name: "TATA Projects", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/1200px-Tata_logo.svg.png" },
        { name: "Adani Enterprise", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Adani_logo_2012.svg" },
        { name: "DLF Limited", logo: "https://upload.wikimedia.org/wikipedia/commons/a/aa/DLF_logo.svg" },
        { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png" },
        { name: "Godrej", logo: "https://ik.imagekit.io/saxybrgkp/f1691c94c1c29fc18b6ee823ff90cb0d.png" },
        { name: "Lodha", logo: "https://companieslogo.com/img/orig/LODHA.NS_BIG-691dc856.png?t=1720244492" },
        { name: "HDFC", logo: "https://ik.imagekit.io/saxybrgkp/56ff4ee637a8771ad55dc188e7994044.png" },
        { name: "Kirloskar", logo: "https://kirloskar.com/img/KIRLOSKAR%20SAFE%20SPACE%20LOGO-01.jpg" },
        { name: "Toyota Kirloskar", logo: "https://ik.imagekit.io/saxybrgkp/c3a07f67a722b5b4c5292dc1891a66f1.png" },
        { name: "Mahindra", logo: "https://images.seeklogo.com/logo-png/61/1/mahindra-auto-logo-png_seeklogo-613492.png" },
        
        /* --- SECOND SET (DUPLICATED FOR MARQUEE LOOP) --- */
        { name: "Larsen & Toubro", logo: "https://ik.imagekit.io/saxybrgkp/d42f9b4890d9d997028a6089eb051675.png" },
        { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/640px-Amazon_logo.svg.png" },
        { name: "TATA Projects", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/1200px-Tata_logo.svg.png" },
        { name: "Adani Enterprise", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Adani_logo_2012.svg" },
        { name: "DLF Limited", logo: "https://upload.wikimedia.org/wikipedia/commons/a/aa/DLF_logo.svg" },
        { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png" },
        { name: "Godrej", logo: "https://ik.imagekit.io/saxybrgkp/f1691c94c1c29fc18b6ee823ff90cb0d.png" },
        { name: "Lodha", logo: "https://companieslogo.com/img/orig/LODHA.NS_BIG-691dc856.png?t=1720244492" },
        { name: "HDFC", logo: "https://ik.imagekit.io/saxybrgkp/56ff4ee637a8771ad55dc188e7994044.png" },
        { name: "Kirloskar", logo: "https://kirloskar.com/img/KIRLOSKAR%20SAFE%20SPACE%20LOGO-01.jpg" },
        { name: "Toyota Kirloskar", logo: "https://ik.imagekit.io/saxybrgkp/c3a07f67a722b5b4c5292dc1891a66f1.png" },
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