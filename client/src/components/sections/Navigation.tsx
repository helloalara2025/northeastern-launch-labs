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
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Teams", href: "#teams" },
    { name: "Get Involved", href: "#get-involved" },
    { name: "Leadership", href: "#leadership" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg border-b-4 border-primary/20 py-3"
          : "bg-white py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <button
          onClick={() => scrollToSection("#home")}
          className="font-sans font-black text-3xl tracking-tight text-primary hover:text-primary/80 transition-colors cursor-pointer"
        >
          Launch Labs
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-sm font-bold text-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </button>
          ))}
          <Button 
            className="bg-primary hover:bg-primary/90 text-white font-bold rounded-lg px-6 h-10"
            onClick={() => scrollToSection("#get-involved")}
          >
            Apply Now
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-foreground hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b-4 border-primary/20 p-4 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-left text-base font-bold text-foreground py-2 border-b border-foreground/10 last:border-0 hover:text-primary transition-colors"
            >
              {link.name}
            </button>
          ))}
          <Button 
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold mt-2 rounded-lg"
            onClick={() => scrollToSection("#get-involved")}
          >
            Apply Now
          </Button>
        </div>
      )}
    </nav>
  );
}
