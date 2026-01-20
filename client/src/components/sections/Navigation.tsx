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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm ${
        isScrolled ? "shadow-sm border-b border-border" : "border-b border-border/50"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="cursor-pointer hover:opacity-80 transition-opacity flex items-center gap-2">
          <span className="font-serif font-bold text-sm text-black">NU</span>
          <img src="/images/logo.png" alt="Launch Labs Logo" className="h-6 w-6" />
          <span className="font-sans font-bold text-base text-red-900">Launch Labs</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/about" className="text-sm font-medium text-foreground/70 hover:text-red-900 transition-colors duration-200">
            About
          </Link>

          <Link href="/launch-teams" className="text-sm font-medium text-foreground/70 hover:text-red-900 transition-colors duration-200">
            Launch Teams
          </Link>

          <Link href="/innovation-teams" className="text-sm font-medium text-foreground/70 hover:text-gray-700 transition-colors duration-200">
            Innovation Teams
          </Link>

          <Link href="/leadership" className="text-sm font-medium text-foreground/70 hover:text-red-900 transition-colors duration-200">
            Leadership
          </Link>

          <Link href="/partners" className="text-sm font-medium text-foreground/70 hover:text-red-900 transition-colors duration-200">
            Partners
          </Link>

          <Link href="/contact" className="text-sm font-medium text-foreground/70 hover:text-red-900 transition-colors duration-200">
            Contact
          </Link>

          <Link href="/forms" className="text-sm font-medium text-foreground/70 hover:text-red-900 transition-colors duration-200">
            Forms
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/forms">
            <Button className="border border-gray-300 text-red-900 hover:bg-red-50 font-bold px-5 h-10 rounded-lg text-sm transition-all duration-200 bg-white shadow-sm hover:shadow-md inline-flex items-center gap-2">
              Propose Project
              <ArrowRight size={14} />
            </Button>
          </Link>
          <Link href="/forms">
            <Button className="bg-red-900 hover:bg-red-950 text-white font-bold px-5 h-10 rounded-lg text-sm transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center gap-2">
              Join
              <ArrowRight size={14} />
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-b border-border p-4 flex flex-col gap-2">
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-foreground/70 hover:text-red-900 px-3 py-2 rounded-lg hover:bg-muted transition-all duration-200">
            About
          </Link>

          <Link href="/launch-teams" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-foreground/70 hover:text-red-900 px-3 py-2 rounded-lg hover:bg-muted transition-all duration-200">
            Launch Teams
          </Link>

          <Link href="/innovation-teams" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-foreground/70 hover:text-gray-700 px-3 py-2 rounded-lg hover:bg-muted transition-all duration-200">
            Innovation Teams
          </Link>

          <Link href="/leadership" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-foreground/70 hover:text-red-900 px-3 py-2 rounded-lg hover:bg-muted transition-all duration-200">
            Leadership
          </Link>

          <Link href="/partners" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-foreground/70 hover:text-red-900 px-3 py-2 rounded-lg hover:bg-muted transition-all duration-200">
            Partners
          </Link>

          <Link href="/forms" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-foreground/70 hover:text-red-900 px-3 py-2 rounded-lg hover:bg-muted transition-all duration-200">
            Propose Project
          </Link>

          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-foreground/70 hover:text-red-900 px-3 py-2 rounded-lg hover:bg-muted transition-all duration-200">
            Contact
          </Link>

          <Link href="/forms" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-foreground/70 hover:text-red-900 px-3 py-2 rounded-lg hover:bg-muted transition-all duration-200">
            Forms
          </Link>

          <Link href="/forms">
            <Button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full bg-red-900 hover:bg-red-900 text-white font-bold rounded-lg text-sm transition-all duration-200 shadow-sm hover:shadow-md mt-2"
            >
              Join
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
