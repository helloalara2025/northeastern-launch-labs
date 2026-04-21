import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";

const LOGO_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663293706215/2bVaappDG4coBuhzggSTVT/rocket-logo-refined-KekPcTzQgZVxnSAAhUhFvw.webp";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/portfolio" },
  { label: "Leadership", href: "/leadership" },
  { label: "Events", href: "/events" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const isActive = (href: string) => location === href;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0d0d0d]/95 backdrop-blur-md border-b border-[rgba(255,255,255,0.08)]"
            : "bg-transparent"
        }`}
      >
        {/* Announcement Banner */}
        <div className="bg-red w-full py-2 px-4 text-center">
          <p className="font-mono text-[10px] md:text-[11px] font-medium tracking-[0.1em] text-white uppercase">
            Leadership applications are open for Fall 2026!
          </p>
        </div>

        <div className="container flex items-center justify-between h-16 md:h-20 px-4 md:px-6">
          {/* Logo */}
          <Link
            href="/"
            className="cursor-pointer hover:opacity-80 transition-all duration-200 flex items-center gap-3 flex-shrink-0"
          >
            <img
              src={LOGO_URL}
              alt="NU Launch Labs"
              className="w-9 h-9 object-contain"
            />
            <span className="font-mono text-[11px] font-medium tracking-[0.2em] text-white/70 uppercase">
              NU Launch Labs
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 font-mono text-[11px] uppercase tracking-[0.15em] transition-colors duration-200 ${
                  isActive(link.href)
                    ? "text-white"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-red" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Panel */}
        <div
          className={`absolute top-0 right-0 w-full max-w-sm h-full bg-[#0d0d0d] border-l border-[rgba(255,255,255,0.08)] transition-transform duration-500 ease-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Panel Header */}
          <div className="flex items-center justify-between h-20 px-6 border-b border-[rgba(255,255,255,0.08)]">
            <span className="font-mono text-[11px] text-white/40 uppercase tracking-[0.2em]">
              Menu
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center text-white/50 hover:text-white transition-colors"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Panel Links */}
          <div className="flex flex-col py-6">
            {navLinks.map((link, idx) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`group flex items-center gap-4 px-6 py-5 transition-colors duration-200 ${
                  isActive(link.href)
                    ? "bg-[rgba(255,255,255,0.03)]"
                    : "hover:bg-[rgba(255,255,255,0.03)]"
                }`}
              >
                <span
                  className={`font-mono text-[11px] ${
                    isActive(link.href) ? "text-red" : "text-white/30"
                  }`}
                >
                  0{idx + 1}
                </span>
                <span
                  className={`font-sans text-lg font-semibold tracking-tight ${
                    isActive(link.href)
                      ? "text-white"
                      : "text-white/60 group-hover:text-white"
                  }`}
                >
                  {link.label}
                </span>
                {isActive(link.href) && (
                  <span className="ml-auto w-2 h-2 rounded-full bg-red" />
                )}
              </Link>
            ))}
          </div>

          {/* Panel Footer */}
          <div className="absolute bottom-0 left-0 right-0 px-6 py-6 border-t border-[rgba(255,255,255,0.05)]">
            <div className="flex items-center gap-6">
              <a
                href="https://www.linkedin.com/company/nulaunchlabs/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] text-white/30 uppercase tracking-[0.15em] hover:text-white/60 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/nulaunchlabs/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] text-white/30 uppercase tracking-[0.15em] hover:text-white/60 transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
