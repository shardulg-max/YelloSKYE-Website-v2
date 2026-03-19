import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { 
  Menu, X, ChevronDown, Map, Camera, 
  ShieldCheck, Video, Box 
} from "lucide-react";
import { AppRoutes } from "../types";
import Footer from "./Footer"; 

const NAV_ITEMS = [
  { label: "Platform", path: AppRoutes.PLATFORM },
  { label: "About", path: AppRoutes.ABOUT },
];

const SOLUTION_ITEMS = [
  { path: "/solutions/land-survey", label: "Land Survey", sub: "Mapping & Intelligence", icon: <Map size={18} strokeWidth={2.5} /> },
  { path: "/solutions/construction-monitoring", label: "Construction Monitoring", sub: "Progress Verification", icon: <Camera size={18} strokeWidth={2.5} /> },
  { path: "/solutions/asset-inspection", label: "Asset Inspection", sub: "Quality & Compliance", icon: <ShieldCheck size={18} strokeWidth={2.5} /> },
  { path: "/solutions/media-and-marketing", label: "Media & Marketing", sub: "Visual Showcases", icon: <Video size={18} strokeWidth={2.5} /> },
  { path: "/solutions/scan-to-bim", label: "Scan to BIM", sub: "Digital As-Builts", icon: <Box size={18} strokeWidth={2.5} /> },
];

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsSolutionsOpen(false);
    setIsMobileSolutionsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen bg-white text-black font-sans selection:bg-[#FFF200] selection:text-black">

      {/* ================= FLOATING HEADER ================= */}
      {/* 1. Increased top positioning (top-4 md:top-6) to push it down slightly from the browser edge */}
      <header className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-[100] w-full px-4 md:px-8 pointer-events-none">
        <div
          className={`
            pointer-events-auto
            mx-auto max-w-[1680px]
            flex items-center justify-between
            px-5 sm:px-6 md:px-8 lg:px-10
            {/* 2. Increased vertical padding (py-4 md:py-5) to make the navbar taller and balanced */}
            ${isScrolled ? "py-3 scale-[0.98] md:scale-[0.97]" : "py-4 md:py-5"}
            {/* FIX: Increased the corner rounding here to perfectly match the black box */}
            rounded-[24px] lg:rounded-[40px]
            bg-white/95 md:bg-white/90
            backdrop-blur-xl
            border border-gray-200/50
            shadow-[0_8px_20px_rgba(0,0,0,0.06)] md:shadow-[0_15px_40px_rgba(0,0,0,0.08)]
            transition-all duration-300
          `}
        >
          {/* LOGO */}
          <NavLink to={AppRoutes.HOME} className="flex items-center -ml-1 md:-ml-2">
            <img
              src="https://ik.imagekit.io/saxybrgkp/MME/Final%20Logo.png?updatedAt=1773646448171"
              alt="YelloSKYE"
              className="h-8 sm:h-9 md:h-10 w-auto object-contain"
            />
          </NavLink>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-10 xl:gap-14 text-[15px] font-bold text-black tracking-tight">
            
            <NavLink
              to={AppRoutes.PLATFORM}
              className={({ isActive }) =>
                isActive
                  ? "text-black"
                  : "text-black hover:opacity-60 transition-opacity duration-200"
              }
            >
              Platform
            </NavLink>

            {/* SOLUTIONS DROPDOWN */}
            <div
              className="relative py-2"
              onMouseEnter={() => setIsSolutionsOpen(true)}
              onMouseLeave={() => setIsSolutionsOpen(false)}
            >
              <button className="flex items-center gap-1.5 text-black hover:opacity-60 transition-opacity duration-200 font-bold focus:outline-none">
                Solutions
                <ChevronDown
                  size={16}
                  strokeWidth={3}
                  className={`transition-transform duration-300 ${
                    isSolutionsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div 
                className={`absolute left-1/2 -translate-x-1/2 top-full pt-4 transition-all duration-300 origin-top ${
                  isSolutionsOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <div className="w-[340px] rounded-[24px] bg-white/95 backdrop-blur-2xl border border-gray-100 shadow-[0_40px_100px_rgba(0,0,0,0.15)] p-2.5">
                  {SOLUTION_ITEMS.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className="flex items-center gap-4 px-4 py-3.5 rounded-[16px] hover:bg-gray-50 transition-colors group"
                      onClick={() => setIsSolutionsOpen(false)}
                    >
                      <div className="w-11 h-11 rounded-xl bg-gray-50 border border-gray-100 group-hover:bg-[#FFF200] group-hover:border-[#FFF200] flex items-center justify-center text-black transition-colors duration-300 shadow-sm shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <div className="font-bold text-[14px] text-black leading-tight mb-0.5">
                          {item.label}
                        </div>
                        <div className="text-[12px] font-medium text-gray-500 leading-tight">
                          {item.sub}
                        </div>
                      </div>
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

            {NAV_ITEMS.filter(i => i.label !== "Platform").map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-black"
                    : "text-black hover:opacity-60 transition-opacity duration-200"
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* RIGHT SIDE: CTA + MOBILE TOGGLE */}
          <div className="flex items-center gap-3 sm:gap-5">
             
             {/* SLEEK YELLOW BUTTON */}
             <button
                className="
                  flex items-center justify-center
                  px-5 py-2.5 md:px-6 md:py-3
                  bg-[#FFF200] hover:bg-[#FFE500]
                  text-black font-black text-[12px] md:text-[13px] leading-none
                  rounded-full
                  shadow-[0_4px_14px_rgba(255,242,0,0.3)]
                  hover:shadow-[0_6px_20px_rgba(255,242,0,0.4)]
                  hover:-translate-y-0.5 active:scale-95
                  transition-all duration-300
                  whitespace-nowrap
                "
                onClick={() => navigate(AppRoutes.BOOK_DEMO)}
              >
                Book a Demo
              </button>

            <button
              className="lg:hidden text-black pointer-events-auto flex items-center justify-center p-1.5 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={26} strokeWidth={2.5} /> : <Menu size={26} strokeWidth={2.5} />}
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU OVERLAY ================= */}
      <div
        className={`fixed inset-0 bg-white/95 backdrop-blur-3xl z-40 lg:hidden transition-all duration-500 overflow-y-auto ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        <div className="pt-32 px-6 sm:px-10 pb-10 min-h-screen flex flex-col">
          <nav className="space-y-6 sm:space-y-8 flex-grow">
            
            <NavLink to={AppRoutes.PLATFORM} className="block text-3xl sm:text-4xl font-black tracking-tight text-black">
              Platform
            </NavLink>
            
            <div className="space-y-4">
              <button 
                onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
                className="flex items-center justify-between w-full text-3xl sm:text-4xl font-black tracking-tight text-black"
              >
                Solutions
                <ChevronDown className={`transition-transform duration-300 ${isMobileSolutionsOpen ? "rotate-180" : ""}`} size={28} />
              </button>
              
              <div className={`grid gap-4 overflow-hidden transition-all duration-500 ${isMobileSolutionsOpen ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="min-h-0 flex flex-col gap-4 pl-2 border-l-2 border-gray-100">
                  {SOLUTION_ITEMS.map(item => (
                    <NavLink key={item.path} to={item.path} className="flex items-center gap-4 py-2">
                      <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-black shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-lg font-bold text-black leading-tight">{item.label}</div>
                        <div className="text-xs text-gray-500 font-medium">{item.sub}</div>
                      </div>
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

            {NAV_ITEMS.filter(i => i.label !== "Platform").map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                className="block text-3xl sm:text-4xl font-black tracking-tight text-black hover:text-black/60 transition-colors"
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="pt-10 pb-8 mt-auto">
            <button
              className="w-full bg-[#FFF200] text-black font-black py-4 rounded-xl text-lg shadow-[0_15px_30px_rgba(255,242,0,0.25)] hover:scale-[1.02] active:scale-95 transition-all"
              onClick={() => {
                navigate(AppRoutes.BOOK_DEMO);
                setIsMenuOpen(false);
              }}
            >
              Book a Demo
            </button>
          </div>
        </div>
      </div>

      <main className="flex-grow">{children}</main>

      <Footer />
    </div>
  );
};