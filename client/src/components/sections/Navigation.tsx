import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Teams", href: "#teams" },
    { name: "Get Involved", href: "#get-involved" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-md ${
        isScrolled ? "shadow-md border-b border-foreground/5" : "border-b border-foreground/0"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <span className="font-sans font-bold text-base text-foreground">Launch Labs</span>
          <span className="text-xs font-bold text-foreground/50 uppercase tracking-wider">Northeastern</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/65 hover:text-primary transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#get-involved">
            <Button className="bg-primary hover:bg-primary/90 text-white font-bold px-5 h-10 rounded-lg text-sm transition-all duration-200 shadow-lg hover:shadow-xl">
              Apply to Join
            </Button>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-foreground hover:bg-foreground/5 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-foreground/5 p-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-medium text-foreground/65 hover:text-primary px-3 py-2 rounded-lg hover:bg-foreground/5 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
          <a href="#get-involved" onClick={() => setIsMobileMenuOpen(false)} className="mt-2">
            <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold rounded-lg text-sm transition-all duration-200 shadow-lg hover:shadow-xl">
              Apply to Join
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
}
