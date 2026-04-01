import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary/90 backdrop-blur-md border-b border-[rgba(255,255,255,0.08)]" : "bg-transparent"
      }`}
    >
      {/* Announcement Banner */}
      <div className="bg-red w-full py-2 px-4 text-center">
        <p className="font-mono text-[11px] font-medium tracking-[0.1em] text-white uppercase">
          Applications are currently closed. We will reopen for Fall 2026!
        </p>
      </div>
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link href="/" className="cursor-pointer hover:opacity-80 transition-all duration-200 flex items-center gap-3 flex-shrink-0">
          <div className="w-8 h-8 rounded-full bg-red flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
              <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
              <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
              <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
            </svg>
          </div>
          <span className="font-mono text-[11px] font-medium tracking-[0.2em] text-white/70 uppercase">NU LAUNCH LABS</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
          <Link href="/about" className="font-mono text-[12px] font-medium text-white/60 hover:text-white transition-colors duration-200 relative group uppercase tracking-[0.15em]">
            About
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-red group-hover:w-full transition-all duration-300"></span>
          </Link>

          <Link href="/launch-teams" className="font-mono text-[12px] font-medium text-white/60 hover:text-white transition-colors duration-200 relative group uppercase tracking-[0.15em]">
            Launch Teams
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-red group-hover:w-full transition-all duration-300"></span>
          </Link>

          <Link href="/innovation-teams" className="font-mono text-[12px] font-medium text-white/60 hover:text-white transition-colors duration-200 relative group uppercase tracking-[0.15em]">
            Innovation Teams
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-red group-hover:w-full transition-all duration-300"></span>
          </Link>

          <Link href="/leadership" className="font-mono text-[12px] font-medium text-white/60 hover:text-white transition-colors duration-200 relative group uppercase tracking-[0.15em]">
            Leadership
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-red group-hover:w-full transition-all duration-300"></span>
          </Link>

          <Link href="/events" className="font-mono text-[12px] font-medium text-white/60 hover:text-white transition-colors duration-200 relative group uppercase tracking-[0.15em]">
            Events
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-red group-hover:w-full transition-all duration-300"></span>
          </Link>

          <Link href="/portfolio" className="font-mono text-[12px] font-medium text-white/60 hover:text-white transition-colors duration-200 relative group uppercase tracking-[0.15em]">
            Portfolio
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-red group-hover:w-full transition-all duration-300"></span>
          </Link>

          <Link href="/partners" className="font-mono text-[12px] font-medium text-white/60 hover:text-white transition-colors duration-200 relative group uppercase tracking-[0.15em]">
            Partners
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-red group-hover:w-full transition-all duration-300"></span>
          </Link>

          <Link href="/contact" className="font-mono text-[12px] font-medium text-white/60 hover:text-white transition-colors duration-200 relative group uppercase tracking-[0.15em]">
            Contact
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-red group-hover:w-full transition-all duration-300"></span>
          </Link>

          <Link href="/forms" className="font-mono text-[12px] font-medium text-white/60 hover:text-white transition-colors duration-200 relative group uppercase tracking-[0.15em]">
            Forms
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-red group-hover:w-full transition-all duration-300"></span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          <Link href="/forms" className="bg-red text-white font-sans font-semibold text-[13px] uppercase tracking-[0.1em] px-8 py-3 rounded-lg hover:bg-red-dark transition-all duration-200 hover:-translate-y-[1px]">
            JOIN NULL
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-white hover:text-red transition-all duration-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-primary z-40 flex flex-col p-6 border-t border-[rgba(255,255,255,0.08)]">
          <div className="flex flex-col gap-6 mt-8">
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="font-mono text-[14px] font-medium text-white/80 hover:text-white transition-colors duration-200 uppercase tracking-[0.15em]">
              About
            </Link>

            <Link href="/launch-teams" onClick={() => setIsMobileMenuOpen(false)} className="font-mono text-[14px] font-medium text-white/80 hover:text-white transition-colors duration-200 uppercase tracking-[0.15em]">
              Launch Teams
            </Link>

            <Link href="/innovation-teams" onClick={() => setIsMobileMenuOpen(false)} className="font-mono text-[14px] font-medium text-white/80 hover:text-white transition-colors duration-200 uppercase tracking-[0.15em]">
              Innovation Teams
            </Link>

            <Link href="/leadership" onClick={() => setIsMobileMenuOpen(false)} className="font-mono text-[14px] font-medium text-white/80 hover:text-white transition-colors duration-200 uppercase tracking-[0.15em]">
              Leadership
            </Link>

            <Link href="/events" onClick={() => setIsMobileMenuOpen(false)} className="font-mono text-[14px] font-medium text-white/80 hover:text-white transition-colors duration-200 uppercase tracking-[0.15em]">
              Events
            </Link>

            <Link href="/portfolio" onClick={() => setIsMobileMenuOpen(false)} className="font-mono text-[14px] font-medium text-white/80 hover:text-white transition-colors duration-200 uppercase tracking-[0.15em]">
              Portfolio
            </Link>

            <Link href="/partners" onClick={() => setIsMobileMenuOpen(false)} className="font-mono text-[14px] font-medium text-white/80 hover:text-white transition-colors duration-200 uppercase tracking-[0.15em]">
              Partners
            </Link>

            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="font-mono text-[14px] font-medium text-white/80 hover:text-white transition-colors duration-200 uppercase tracking-[0.15em]">
              Contact
            </Link>

            <Link href="/forms" onClick={() => setIsMobileMenuOpen(false)} className="font-mono text-[14px] font-medium text-white/80 hover:text-white transition-colors duration-200 uppercase tracking-[0.15em]">
              Forms
            </Link>

            <Link href="/forms" onClick={() => setIsMobileMenuOpen(false)} className="mt-8 bg-red text-white font-sans font-semibold text-[14px] uppercase tracking-[0.1em] px-8 py-4 rounded-lg hover:bg-red-dark transition-all duration-200 text-center">
              JOIN NULL
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
