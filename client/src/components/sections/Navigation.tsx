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

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        isScrolled ? "shadow-sm border-b border-foreground/10" : ""
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        <button
          onClick={() => scrollToSection("#home")}
          className="font-sans font-bold text-2xl text-primary hover:text-primary/80 transition-colors cursor-pointer"
        >
          Launch Labs
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </button>
          ))}
          <Button 
            className="bg-primary hover:bg-primary/90 text-white font-bold px-6 h-10 rounded"
            onClick={() => scrollToSection("#get-involved")}
          >
            Apply
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-foreground hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-foreground/10 p-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-left text-sm font-medium text-foreground py-2 hover:text-primary transition-colors"
            >
              {link.name}
            </button>
          ))}
          <Button 
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold mt-2 rounded"
            onClick={() => scrollToSection("#get-involved")}
          >
            Apply Now
          </Button>
        </div>
      )}
    </nav>
  );
}
