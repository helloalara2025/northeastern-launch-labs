import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Rocket } from "lucide-react";
import { Link } from "wouter";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-[#0d0d0d]/95 backdrop-blur-lg border-b border-white/10" 
          : "bg-[#0d0d0d]/50 backdrop-blur-sm border-b border-white/5"
      }`}
    >
      <div className="container flex items-center justify-between h-20 px-6 md:px-8">
        {/* Logo */}
        <Link 
          href="/" 
          className="cursor-pointer hover:opacity-80 transition-opacity duration-300 flex items-center gap-3 flex-shrink-0"
        >
          <div className="w-10 h-10 bg-red flex items-center justify-center rounded-sm">
            <Rocket size={20} className="text-white" />
          </div>
          <span className="label text-white hidden sm:block">NU LAUNCH LABS</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-2 flex-1 justify-center">
          {[
            { href: "/about", label: "About" },
            { href: "/launch-teams", label: "Launch Teams" },
            { href: "/innovation-teams", label: "Innovation Teams" },
            { href: "/leadership", label: "Leadership" },
            { href: "/partners", label: "Partners" },
            { href: "/contact", label: "Contact" }
          ].map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className="label text-white/70 hover:text-red transition-colors duration-300 px-4 py-2 relative group"
            >
              {link.label}
              <span className="absolute bottom-1 left-4 w-0 h-0.5 bg-red group-hover:w-[calc(100%-2rem)] transition-all duration-400"></span>
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          <Button asChild>
            <Link 
              href="/forms" 
              className="btn-secondary inline-flex items-center gap-2"
            >
              Propose
              <ArrowRight size={16} />
            </Link>
          </Button>
          <Button asChild>
            <Link 
              href="/forms" 
              className="btn-primary inline-flex items-center gap-2"
            >
              Apply
              <ArrowRight size={16} />
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 text-white/70 hover:text-red transition-colors duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0f1629] border-t border-white/10 p-6 flex flex-col gap-3 animate-fade-up">
          {[
            { href: "/about", label: "About" },
            { href: "/launch-teams", label: "Launch Teams" },
            { href: "/innovation-teams", label: "Innovation Teams" },
            { href: "/leadership", label: "Leadership" },
            { href: "/partners", label: "Partners" },
            { href: "/contact", label: "Contact" }
          ].map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="label text-white/70 hover:text-red px-4 py-3 transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
          
          <div className="border-t border-white/10 pt-4 mt-4 flex flex-col gap-3">
            <Button asChild>
              <Link 
                href="/forms"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-secondary w-full justify-center"
              >
                Propose
              </Link>
            </Button>
            <Button asChild>
              <Link 
                href="/forms"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary w-full justify-center"
              >
                Apply
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
