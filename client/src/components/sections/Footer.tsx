import { Linkedin, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-16 border-t border-foreground/20">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="font-sans font-semibold text-lg mb-3">Launch Labs</div>
            <p className="text-white/70 text-sm leading-relaxed font-regular">
              Connecting Northeastern students to real-world projects and meaningful impact.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm mb-4 uppercase tracking-wider">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <a href="/about" className="block text-white/70 hover:text-white transition-colors font-regular">About</a>
              <a href="/launch-teams" className="block text-white/70 hover:text-white transition-colors font-regular">Launch Teams</a>
              <a href="/innovation-teams" className="block text-white/70 hover:text-white transition-colors font-regular">Innovation Teams</a>
              <a href="/forms" className="block text-white/70 hover:text-white transition-colors font-regular">Get Involved</a>
            </div>
          </div>

          {/* More Links */}
          <div>
            <h3 className="font-semibold text-sm mb-4 uppercase tracking-wider">More</h3>
            <div className="space-y-2 text-sm">
              <a href="/leadership" className="block text-white/70 hover:text-white transition-colors font-regular">Leadership</a>
              <a href="/partners" className="block text-white/70 hover:text-white transition-colors font-regular">Partners</a>
              <a href="/contact" className="block text-white/70 hover:text-white transition-colors font-regular">Contact</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm mb-4 uppercase tracking-wider">Connect</h3>
            <div className="space-y-3 text-sm">
              <a href="mailto:hello@launchlabs.neu.edu" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors font-regular">
                <Mail size={16} />
                hello@launchlabs.neu.edu
              </a>
              <div className="flex gap-3 pt-2">
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60 font-regular">
          <p>© 2026 Northeastern Launch Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
