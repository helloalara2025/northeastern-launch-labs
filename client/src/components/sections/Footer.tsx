export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/30 py-8">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-6">
          {/* Brand */}
          <div>
            <h3 className="font-sans font-bold text-sm text-foreground mb-1">Launch Labs</h3>
            <p className="text-foreground/60 text-xs font-regular">Northeastern University</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans font-bold text-xs text-foreground uppercase tracking-wide mb-3">Navigation</h4>
            <ul className="space-y-1.5">
              {[
                { label: "About", href: "#about" },
                { label: "Teams", href: "#teams" },
                { label: "Get Involved", href: "#get-involved" }
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-foreground/60 hover:text-primary text-xs font-regular transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-bold text-xs text-foreground uppercase tracking-wide mb-3">Contact</h4>
            <ul className="space-y-1.5">
              <li>
                <a href="#contact" className="text-foreground/60 hover:text-primary text-xs font-regular transition-colors">
                  Get in Touch
                </a>
              </li>
              <li>
                <a href="#get-involved" className="text-foreground/60 hover:text-primary text-xs font-regular transition-colors">
                  Apply to Join
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-sans font-bold text-xs text-foreground uppercase tracking-wide mb-3">Follow</h4>
            <ul className="space-y-1.5">
              <li>
                <a href="#" className="text-foreground/60 hover:text-primary text-xs font-regular transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-primary text-xs font-regular transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/30 pt-6">
          <p className="text-foreground/50 text-xs font-regular text-center">
            © {currentYear} Northeastern Launch Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
