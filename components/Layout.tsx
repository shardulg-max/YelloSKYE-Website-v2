import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { AppRoutes } from "../types";
import { Button } from "./Button";
import Footer from "./Footer"; // <-- Added Footer import

const NAV_ITEMS = [
  { label: "Platform", path: AppRoutes.PLATFORM },
  { label: "About", path: AppRoutes.ABOUT },
];

const SOLUTION_ITEMS = [
  { path: "/solutions/land-survey", label: "Land Survey", sub: "Mapping & Intelligence", id: "LS" },
  { path: "/solutions/construction-monitoring", label: "Construction Monitoring", sub: "Progress Verification", id: "CM" },
  { path: "/solutions/asset-inspection", label: "Asset Inspection", sub: "Quality & Compliance", id: "AI" },
  { path: "/solutions/media-and-marketing", label: "Media And Marketing", sub: "Visual Showcases", id: "MM" },
  { path: "/solutions/scan-to-bim", label: "Scan to BIM", sub: "Digital As-Builts", id: "BIM" },
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
    <div className="flex flex-col min-h-screen bg-white text-black font-sans selection:bg-brand-yellow selection:text-black">

      {/* ================= FLOATING HEADER ================= */}
      <header className="fixed top-2 md:top-4 left-1/2 -translate-x-1/2 z-50 w-full px-4 md:px-6 pointer-events-none">
        <div
          className={`
            pointer-events-auto
            mx-auto max-w-[1680px]
            flex items-center justify-between
            px-4 sm:px-8 md:px-14
            ${isScrolled ? "py-2 sm:py-2.5 scale-[0.98] md:scale-[0.97]" : "py-2 sm:py-3.5"}
            rounded-full md:rounded-[28px]
            bg-white/90 md:bg-white/70
            backdrop-blur-xl
            border border-black/10
            shadow-[0_10px_20px_rgba(0,0,0,0.1)] md:shadow-[0_20px_20px_rgba(0,0,0,0.18)]
            transition-all duration-300
          `}
        >
          {/* LOGO */}
          <NavLink to={AppRoutes.HOME} className="flex items-center">
            <img
              src="https://ik.imagekit.io/saxybrgkp/Untitled%20Design%20Presentation%20(2)%20(1).png"
              alt="YelloSKYE"
              className="h-8 sm:h-10 md:h-12 w-auto object-contain"
            />
          </NavLink>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-12 text-[15px] font-semibold text-black/70">

            {/* PLATFORM (FIRST) */}
            <NavLink
              to={AppRoutes.PLATFORM}
              className={({ isActive }) =>
                isActive
                  ? "text-black"
                  : "text-black/60 hover:text-black transition"
              }
            >
              Platform
            </NavLink>

            {/* SOLUTIONS (SECOND) */}
            <div
              className="relative"
              onMouseEnter={() => setIsSolutionsOpen(true)}
              onMouseLeave={() => setIsSolutionsOpen(false)}
            >
              <button className="flex items-center gap-1.5 hover:text-black transition">
                Solutions
                <ChevronDown
                  size={14}
                  className={`transition-transform ${
                    isSolutionsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isSolutionsOpen && (
                <div className="absolute left-0 top-full pt-4 z-50">
                  <div
                    className="
                      w-80
                      rounded-3xl
                      bg-white/95
                      backdrop-blur-xl
                      border border-black/10
                      shadow-[0_30px_80px_rgba(0,0,0,0.18)]
                      p-2
                    "
                  >
                    {SOLUTION_ITEMS.map(item => (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        className="flex items-center gap-4 px-4 py-3 rounded-2xl hover:bg-black/5 transition"
                      >
                        <div className="w-10 h-10 rounded-xl bg-brand-yellow/20 flex items-center justify-center font-bold text-xs text-black">
                          {item.id}
                        </div>
                        <div>
                          <div className="font-semibold text-sm text-black">
                            {item.label}
                          </div>
                          <div className="text-xs text-black/50">
                            {item.sub}
                          </div>
                        </div>
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* REST OF NAV */}
            {NAV_ITEMS.filter(i => i.label !== "Platform").map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-black"
                    : "text-black/60 hover:text-black transition"
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA + MOBILE */}
          <div className="flex items-center gap-2 sm:gap-3">
             <Button
                variant="primary"
                size="sm"
                className="
                  px-4 py-2 sm:px-7 sm:py-3
                  rounded-full
                  bg-[#FFF200]
                  text-black
                  font-bold
                  text-[11px] sm:text-sm
                  shadow-sm md:shadow-[0_12px_40px_rgba(250,204,21,0.45)]
                  hover:scale-[1.05]
                  transition
                  whitespace-nowrap
                "
                onClick={() => navigate(AppRoutes.BOOK_DEMO)}
              >
                Book a Demo
              </Button>

            <button
              className="lg:hidden ml-1 sm:ml-2 text-black pointer-events-auto flex items-center justify-center p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`fixed inset-0 bg-white z-40 lg:hidden transition-all duration-500 overflow-y-auto ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        <div className="pt-28 px-6 sm:px-10 pb-10">
          <nav className="space-y-6 sm:space-y-8">
            <NavLink to={AppRoutes.PLATFORM} className="block text-3xl sm:text-4xl font-black tracking-tight text-black">
              Platform
            </NavLink>
            
            {/* MOBILE SOLUTIONS ACCORDION */}
            <div className="space-y-4">
              <button 
                onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
                className="flex items-center justify-between w-full text-3xl sm:text-4xl font-black tracking-tight text-black"
              >
                Solutions
                <ChevronDown className={`transition-transform duration-300 ${isMobileSolutionsOpen ? "rotate-180" : ""}`} size={28} />
              </button>
              
              {isMobileSolutionsOpen && (
                <div className="pl-4 space-y-5 sm:space-y-6 mt-4 border-l-4 border-[#FFF200]/50">
                  {SOLUTION_ITEMS.map(item => (
                    <NavLink key={item.path} to={item.path} className="block">
                      <div className="text-lg sm:text-xl font-bold text-black">{item.label}</div>
                      <div className="text-xs sm:text-sm text-black/50 mt-1">{item.sub}</div>
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            {NAV_ITEMS.filter(i => i.label !== "Platform").map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                className="block text-3xl sm:text-4xl font-black tracking-tight text-black hover:text-brand-yellow transition"
              >
                {item.label}
              </NavLink>
            ))}

            <div className="pt-8 sm:pt-10">
              <Button
                variant="primary"
                size="lg"
                fullWidth
                className="bg-[#FFF200] text-black font-black py-4 rounded-xl text-lg shadow-lg"
                onClick={() => {
                  navigate(AppRoutes.BOOK_DEMO);
                  setIsMenuOpen(false);
                }}
              >
                Book a Demo
              </Button>
            </div>
          </nav>
        </div>
      </div>

      {/* ================= MAIN ================= */}
      <main className="flex-grow">{children}</main>

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
};