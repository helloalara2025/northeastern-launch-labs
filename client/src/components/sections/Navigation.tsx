import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "wouter";

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

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Launch Teams", href: "/launch-teams" },
    { name: "Innovation Teams", href: "/innovation-teams" },
    { name: "Leadership", href: "/leadership" },
    { name: "Partners", href: "/partners" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        isScrolled ? "shadow-sm border-b border-foreground/10" : ""
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        <a
          href="/"
          className="font-sans font-bold text-2xl text-primary hover:text-primary/80 transition-colors cursor-pointer"
        >
          Launch Labs
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                location === link.href
                  ? "text-primary font-bold"
                  : "text-foreground hover:text-primary"
              }`}
            >
              {link.name}
            </a>
          ))}
          <a href="/forms">
            <Button className="bg-primary hover:bg-primary/90 text-white font-bold px-6 h-10 rounded">
              Apply
            </Button>
          </a>
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
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-left text-sm font-medium py-2 transition-colors ${
                location === link.href
                  ? "text-primary font-bold"
                  : "text-foreground hover:text-primary"
              }`}
            >
              {link.name}
            </a>
          ))}
          <a href="/forms" onClick={() => setIsMobileMenuOpen(false)}>
            <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold mt-2 rounded">
              Apply Now
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
}
