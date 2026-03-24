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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        isScrolled ? "shadow-md border-b border-gray-100" : ""
      }`}
    >
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link href="/" className="cursor-pointer hover:opacity-90 transition-all duration-200 flex items-center gap-2 flex-shrink-0">
          <img src="/images/nu-launch-labs-logo.png" alt="NU Launch Labs Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 flex-1 justify-center">
          <Link href="/about" className="text-sm font-medium text-black/70 hover:text-red-700 transition-colors duration-200 relative group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-700 group-hover:w-full transition-all duration-300"></span>
          </Link>

          <Link href="/launch-teams" className="text-sm font-medium text-black/70 hover:text-red-700 transition-colors duration-200 relative group">
            Launch Teams
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-700 group-hover:w-full transition-all duration-300"></span>
          </Link>

          <Link href="/innovation-teams" className="text-sm font-medium text-black/70 hover:text-red-700 transition-colors duration-200 relative group">
            Innovation Teams
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-700 group-hover:w-full transition-all duration-300"></span>
          </Link>

          <Link href="/leadership" className="text-sm font-medium text-black/70 hover:text-red-700 transition-colors duration-200 relative group">
            Leadership
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-700 group-hover:w-full transition-all duration-300"></span>
          </Link>

          <Link href="/partners" className="text-sm font-medium text-black/70 hover:text-red-700 transition-colors duration-200 relative group">
            Partners
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-700 group-hover:w-full transition-all duration-300"></span>
          </Link>

          <Link href="/contact" className="text-sm font-medium text-black/70 hover:text-red-700 transition-colors duration-200 relative group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-700 group-hover:w-full transition-all duration-300"></span>
          </Link>

          <Link href="/forms" className="text-sm font-medium text-black/70 hover:text-red-700 transition-colors duration-200 relative group">
            Forms
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-700 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          <Link href="/forms">
            <Button className="border-2 border-black/20 text-black hover:border-red-700 hover:text-red-700 font-bold px-6 h-10 rounded-full text-sm transition-all duration-200 bg-white shadow-sm hover:shadow-md inline-flex items-center gap-2">
              Propose Project
              <ArrowRight size={16} />
            </Button>
          </Link>
          <Link href="/forms">
            <Button className="bg-red-700 hover:bg-red-800 text-white font-bold px-6 h-10 rounded-full text-sm transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-red-700/30 inline-flex items-center gap-2">
              Apply
              <ArrowRight size={16} />
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-black hover:bg-gray-100 rounded-lg transition-all duration-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 p-4 flex flex-col gap-1 shadow-md">
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-black/70 hover:text-red-700 px-4 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200">
            About
          </Link>

          <Link href="/launch-teams" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-black/70 hover:text-red-700 px-4 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200">
            Launch Teams
          </Link>

          <Link href="/innovation-teams" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-black/70 hover:text-red-700 px-4 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200">
            Innovation Teams
          </Link>

          <Link href="/leadership" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-black/70 hover:text-red-700 px-4 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200">
            Leadership
          </Link>

          <Link href="/partners" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-black/70 hover:text-red-700 px-4 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200">
            Partners
          </Link>

          <Link href="/forms" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-black/70 hover:text-red-700 px-4 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200">
            Propose Project
          </Link>

          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-black/70 hover:text-red-700 px-4 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200">
            Contact
          </Link>

          <Link href="/forms" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-black/70 hover:text-red-700 px-4 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200">
            Forms
          </Link>

          <Link href="/forms">
            <Button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full bg-red-700 hover:bg-red-800 text-white font-bold rounded-full text-sm transition-all duration-200 shadow-md hover:shadow-lg mt-4 h-10 inline-flex items-center justify-center gap-2"
            >
              Apply
              <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
