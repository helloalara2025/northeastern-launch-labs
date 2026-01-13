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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm ${
        isScrolled ? "shadow-sm border-b border-border" : "border-b border-border/50"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <span className="font-sans font-bold text-lg text-red-800">Launch Labs</span>
          <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Northeastern</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/70 hover:text-red-800 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#get-involved">
            <Button className="bg-red-800 hover:bg-red-900 text-white font-bold px-5 h-10 rounded-lg text-sm transition-all duration-200 shadow-sm hover:shadow-md">
              Apply to Join
            </Button>
          </a>
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
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-medium text-foreground/70 hover:text-red-800 px-3 py-2 rounded-lg hover:bg-muted transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
          <a href="#get-involved" onClick={() => setIsMobileMenuOpen(false)} className="mt-2">
            <Button className="w-full bg-red-800 hover:bg-red-900 text-white font-bold rounded-lg text-sm transition-all duration-200 shadow-sm hover:shadow-md">
              Apply to Join
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
}
