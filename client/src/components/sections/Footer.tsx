import { Linkedin, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-foreground/5 py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div>
            <div className="font-sans font-semibold text-lg text-foreground mb-2">Launch Labs</div>
            <p className="text-foreground/70 text-sm font-regular">
              Connecting Northeastern students to real-world projects.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-sm text-foreground mb-3 uppercase tracking-wider">Links</h3>
            <div className="space-y-2 text-sm">
              <a href="/about" className="block text-foreground/70 hover:text-foreground transition-colors font-regular">About</a>
              <a href="/launch-teams" className="block text-foreground/70 hover:text-foreground transition-colors font-regular">Launch Teams</a>
              <a href="/innovation-teams" className="block text-foreground/70 hover:text-foreground transition-colors font-regular">Innovation Teams</a>
              <a href="/forms" className="block text-foreground/70 hover:text-foreground transition-colors font-regular">Get Involved</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm text-foreground mb-3 uppercase tracking-wider">Connect</h3>
            <div className="space-y-2 text-sm">
              <a href="mailto:hello@launchlabs.neu.edu" className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors font-regular">
                <Mail size={16} />
                hello@launchlabs.neu.edu
              </a>
              <div className="flex gap-3 pt-2">
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-foreground/5 pt-6 text-center text-sm text-foreground/60 font-regular">
          <p>© 2026 Northeastern Launch Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
