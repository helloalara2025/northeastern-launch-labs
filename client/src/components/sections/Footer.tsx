import { Linkedin, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-12 border-t border-foreground/20">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div>
            <div className="font-sans font-bold text-xl mb-2">Launch Labs</div>
            <p className="text-white/70 text-sm">
              Connecting Northeastern students to real-world projects.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-sm mb-3 uppercase tracking-wider">Links</h3>
            <div className="space-y-2 text-sm">
              <a href="/about" className="block text-white/70 hover:text-white transition-colors">About</a>
              <a href="/launch-teams" className="block text-white/70 hover:text-white transition-colors">Launch Teams</a>
              <a href="/innovation-teams" className="block text-white/70 hover:text-white transition-colors">Innovation Teams</a>
              <a href="/forms" className="block text-white/70 hover:text-white transition-colors">Get Involved</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-sm mb-3 uppercase tracking-wider">Connect</h3>
            <div className="space-y-2 text-sm">
              <a href="mailto:hello@launchlabs.neu.edu" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
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

        <div className="border-t border-white/20 pt-6 text-center text-sm text-white/60">
          <p>© 2026 Northeastern Launch Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
