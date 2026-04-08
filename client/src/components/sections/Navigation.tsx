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

      </div>
    </nav>
  );
}
