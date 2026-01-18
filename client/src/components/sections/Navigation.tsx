import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "wouter";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [teamsOpen, setTeamsOpen] = useState(false);

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
        <Link href="/">
          <a className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <span className="font-sans font-bold text-lg text-red-800">Launch Labs</span>
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Northeastern</span>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/about">
            <a className="text-sm font-medium text-foreground/70 hover:text-red-800 transition-colors duration-200">
              About
            </a>
          </Link>

          {/* Teams Dropdown */}
          <div className="relative group">
            <button className="text-sm font-medium text-foreground/70 hover:text-red-800 transition-colors duration-200 flex items-center gap-1">
              Teams
              <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute left-0 mt-0 w-48 bg-white border border-foreground/10 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <Link href="/launch-teams">
                <a className="block px-4 py-3 text-sm font-medium text-foreground/70 hover:text-red-800 hover:bg-red-50 transition-colors border-b border-foreground/5">
                  Launch Teams
                </a>
              </Link>
              <Link href="/innovation-teams">
                <a className="block px-4 py-3 text-sm font-medium text-foreground/70 hover:text-amber-700 hover:bg-amber-50 transition-colors">
                  Innovation Teams
                </a>
              </Link>
            </div>
          </div>

          <Link href="/leadership">
            <a className="text-sm font-medium text-foreground/70 hover:text-red-800 transition-colors duration-200">
              Leadership
            </a>
          </Link>

          <Link href="/partners">
            <a className="text-sm font-medium text-foreground/70 hover:text-red-800 transition-colors duration-200">
              Partners
            </a>
          </Link>

          <Link href="/forms">
            <a className="text-sm font-medium text-foreground/70 hover:text-red-800 transition-colors duration-200">
              Propose Project
            </a>
          </Link>

          <Link href="/contact">
            <a className="text-sm font-medium text-foreground/70 hover:text-red-800 transition-colors duration-200">
              Contact
            </a>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/forms">
            <Button className="bg-red-800 hover:bg-red-900 text-white font-bold px-5 h-10 rounded-lg text-sm transition-all duration-200 shadow-sm hover:shadow-md">
              Apply to Join
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
          <Link href="/about">
            <a
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-medium text-foreground/70 hover:text-red-800 px-3 py-2 rounded-lg hover:bg-muted transition-all duration-200"
            >
              About
            </a>
          </Link>

          {/* Mobile Teams Dropdown */}
          <div>
            <button
              onClick={() => setTeamsOpen(!teamsOpen)}
              className="w-full text-left text-sm font-medium text-foreground/70 hover:text-red-800 px-3 py-2 rounded-lg hover:bg-muted transition-all duration-200 flex items-center justify-between"
            >
              Teams
              <ChevronDown size={14} className={teamsOpen ? "rotate-180" : ""} />
            </button>
            {teamsOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <Link href="/launch-teams">
                  <a
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-sm font-medium text-foreground/70 hover:text-red-800 px-3 py-2 rounded-lg hover:bg-red-50 transition-all duration-200"
                  >
                    Launch Teams
                  </a>
                </Link>
                <Link href="/innovation-teams">
                  <a
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-sm font-medium text-foreground/70 hover:text-amber-700 px-3 py-2 rounded-lg hover:bg-amber-50 transition-all duration-200"
                  >
                    Innovation Teams
                  </a>
                </Link>
              </div>
            )}
          </div>

          <Link href="/leadership">
            <a
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-medium text-foreground/70 hover:text-red-800 px-3 py-2 rounded-lg hover:bg-muted transition-all duration-200"
            >
              Leadership
            </a>
          </Link>

          <Link href="/partners">
            <a
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-medium text-foreground/70 hover:text-red-800 px-3 py-2 rounded-lg hover:bg-muted transition-all duration-200"
            >
              Partners
            </a>
          </Link>

          <Link href="/forms">
            <a
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-medium text-foreground/70 hover:text-red-800 px-3 py-2 rounded-lg hover:bg-muted transition-all duration-200"
            >
              Propose Project
            </a>
          </Link>

          <Link href="/contact">
            <a
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-medium text-foreground/70 hover:text-red-800 px-3 py-2 rounded-lg hover:bg-muted transition-all duration-200"
            >
              Contact
            </a>
          </Link>

          <Link href="/forms">
            <Button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full bg-red-800 hover:bg-red-900 text-white font-bold rounded-lg text-sm transition-all duration-200 shadow-sm hover:shadow-md mt-2"
            >
              Apply to Join
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
