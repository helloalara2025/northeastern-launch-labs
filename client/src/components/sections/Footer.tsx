import { Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-12 border-t border-border/10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="font-sans font-bold text-2xl tracking-tight mb-2">Launch Labs</div>
            <p className="text-background/60 text-sm">
              © 2026 Northeastern Launch Labs. All rights reserved.
            </p>
          </div>

          <div className="flex gap-8 text-sm font-medium text-background/80">
            <button onClick={() => scrollToSection("#about")} className="hover:text-white transition-colors">About</button>
            <button onClick={() => scrollToSection("#teams")} className="hover:text-white transition-colors">Teams</button>
            <button onClick={() => scrollToSection("#get-involved")} className="hover:text-white transition-colors">Get Involved</button>
            <button onClick={() => scrollToSection("#contact")} className="hover:text-white transition-colors">Contact</button>
          </div>

          <div className="flex gap-4">
            <a href="#" className="text-background/60 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-background/60 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
