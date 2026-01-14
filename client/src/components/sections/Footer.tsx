export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-border py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-sans font-bold text-base text-foreground mb-2">Launch Labs</h3>
            <p className="text-foreground/60 text-sm font-regular">Northeastern University</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans font-bold text-xs text-foreground uppercase tracking-wide mb-4">Navigation</h4>
            <ul className="space-y-2">
              {[
                { label: "About", href: "#about" },
                { label: "Teams", href: "#teams" },
                { label: "Get Involved", href: "#get-involved" }
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-foreground/60 hover:text-primary text-sm font-regular transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-bold text-xs text-foreground uppercase tracking-wide mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="#get-involved" className="text-foreground/60 hover:text-primary text-sm font-regular transition-colors">
                  Apply to Join
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-sans font-bold text-xs text-foreground uppercase tracking-wide mb-4">Follow</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-foreground/60 hover:text-primary text-sm font-regular transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-primary text-sm font-regular transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <p className="text-foreground/50 text-sm font-regular text-center">
            © {currentYear} Northeastern Launch Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
