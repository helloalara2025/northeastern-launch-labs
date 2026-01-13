import { Linkedin, Instagram, Mail } from "lucide-react";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-white py-16 border-t-4 border-primary">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="font-sans font-black text-3xl tracking-tight mb-3">Launch Labs</div>
            <p className="text-white/70 font-medium">
              Connecting Northeastern students to real-world projects and startup partnerships.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <button onClick={() => scrollToSection("#about")} className="block text-white/70 hover:text-white transition-colors font-medium">About</button>
              <button onClick={() => scrollToSection("#teams")} className="block text-white/70 hover:text-white transition-colors font-medium">Teams</button>
              <button onClick={() => scrollToSection("#get-involved")} className="block text-white/70 hover:text-white transition-colors font-medium">Get Involved</button>
              <button onClick={() => scrollToSection("#contact")} className="block text-white/70 hover:text-white transition-colors font-medium">Contact</button>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Connect</h3>
            <div className="space-y-3">
              <a href="mailto:hello@launchlabs.neu.edu" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors font-medium">
                <Mail size={18} />
                hello@launchlabs.neu.edu
              </a>
              <div className="flex gap-4 pt-2">
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm font-medium">
            © 2026 Northeastern Launch Labs. All rights reserved.
          </p>
          <p className="text-white/60 text-sm font-medium">
            Northeastern University, Boston MA
          </p>
        </div>
      </div>
    </footer>
  );
}
