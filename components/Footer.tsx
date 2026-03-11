import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Layers, 
  Twitter, 
  Linkedin, 
  Youtube, 
  Instagram, 
  MapPin, 
  Mail 
} from 'lucide-react';

const Footer = () => {
  // ════════════════════════════════════════
  //  GLOBAL FOOTER (RESTORED DESIGN + FIXED LINKS)
  // ════════════════════════════════════════
  return (
    <footer className="bg-[#0A0A0A] pt-24 pb-12 font-sans relative overflow-hidden text-white">
      {/* Aesthetic Fade Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none fade-grid-top" 
        style={{ 
          backgroundImage: "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)", 
          backgroundSize: "80px 80px" 
        }} 
      />
      
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4">
            <img 
              src="https://i.ibb.co/k2LDXWzm/Master-Solutions-Deck-v2-3.png" 
              alt="YelloSKYE" 
              className="h-14 w-auto mb-8 brightness-0 invert" 
            />
            <p className="text-gray-400 text-lg leading-relaxed max-w-sm font-medium mb-8">
              The operating system for modern jobsites. Replacing construction ambiguity with millimeter-accurate visual ground truth.
            </p>
            <div className="flex flex-col gap-3 mb-10 text-xs font-black uppercase tracking-widest text-[#FFF200]">
              <div className="flex items-center gap-3"><Globe size={14} /> Multi-sensor Reality Capture</div>
              <div className="flex items-center gap-3"><Layers size={14} /> AI-Powered Intelligence</div>
            </div>
            
            {/* Social Links (Kept as standard <a> tags since they go to external websites) */}
            <div className="flex gap-4">
              <a href="https://twitter.com/yelloskye" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-[#FFF200] hover:border-[#FFF200] transition-all"><Twitter size={18} /></a>
              <a href="https://linkedin.com/company/yelloskye" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-[#FFF200] hover:border-[#FFF200] transition-all"><Linkedin size={18} /></a>
              <a href="https://www.youtube.com/@yelloskye" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-[#FFF200] hover:border-[#FFF200] transition-all"><Youtube size={18} /></a>
              <a href="https://instagram.com/yelloskye" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-[#FFF200] hover:border-[#FFF200] transition-all"><Instagram size={18} /></a>
            </div>
          </div>

          {/* Column 2: Solutions (Fixed with <Link>) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-8">Solutions</h4>
            {/* Paths matched to your Layout.tsx routes */}
            <Link to="/solutions/land-survey" className="block text-sm font-bold text-gray-400 hover:text-[#FFF200] transition-colors">Land Survey</Link>
            <Link to="/solutions/construction-monitoring" className="block text-sm font-bold text-gray-400 hover:text-[#FFF200] transition-colors">Construction Monitoring</Link>
            <Link to="/solutions/scan-to-bim" className="block text-sm font-bold text-gray-400 hover:text-[#FFF200] transition-colors">BIM Analytics</Link>
            <Link to="/solutions/asset-inspection" className="block text-sm font-bold text-gray-400 hover:text-[#FFF200] transition-colors">Asset Inspection</Link>
            <Link to="/solutions/media-and-marketing" className="block text-sm font-bold text-gray-400 hover:text-[#FFF200] transition-colors">Media & Marketing</Link>
          </div>

          {/* Column 3: Company (Fixed with <Link>) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-8">Company</h4>
            <Link to="/about" className="block text-sm font-bold text-gray-400 hover:text-[#FFF200] transition-colors">About Us</Link>
            <Link to="/how-it-works" className="block text-sm font-bold text-gray-400 hover:text-[#FFF200] transition-colors">How it Works</Link>
            <Link to="/case-studies" className="block text-sm font-bold text-gray-400 hover:text-[#FFF200] transition-colors">Case Studies</Link>
            <Link to="/insights" className="block text-sm font-bold text-gray-400 hover:text-[#FFF200] transition-colors">Insights</Link>
            <Link to="/careers" className="block text-sm font-bold text-gray-400 hover:text-[#FFF200] transition-colors">Careers</Link>
          </div>

          {/* Column 4: Headquarters */}
          <div className="lg:col-span-4">
            <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-8">Headquarters</h4>
            <div className="space-y-10">
              <div className="flex gap-4">
                <MapPin size={20} className="text-[#FFF200] shrink-0" />
                <div>
                  <div className="text-sm font-black mb-2 uppercase">Pune, India</div>
                  <address className="text-sm text-gray-400 not-italic">5th Floor, Trimurti Honey Gold Building, Range Hill Rd, Sinchan Nagar, MH 411007</address>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin size={20} className="text-[#FFF200] shrink-0" />
                <div>
                  <div className="text-sm font-black mb-2 uppercase">Bengaluru, India</div>
                  <address className="text-sm text-gray-400 not-italic">1st Floor, B Block, BRIGADE TECH PARK, Whitefield, KA 560066</address>
                </div>
              </div>
              <div className="flex gap-4 pt-4 border-t border-white/5">
                <Mail size={20} className="text-[#FFF200] shrink-0" />
                <div>
                  <div className="text-[10px] font-black text-gray-500 uppercase">Direct Inquiry</div>
                  <a href="mailto:sales@yelloskye.com" className="text-lg font-black text-[#FFF200] hover:underline">sales@yelloskye.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-black text-gray-600 uppercase tracking-widest gap-4 md:gap-0">
          <div>© 2026 YelloSKYE. All Rights Reserved.</div>
          <div className="flex gap-8">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;