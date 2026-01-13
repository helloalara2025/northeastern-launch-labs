export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "About", href: "#about" },
    { label: "Teams", href: "#teams" },
    { label: "Get Involved", href: "#get-involved" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-white border-t border-foreground/5 py-10">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <h3 className="font-sans font-bold text-base text-foreground">Launch Labs</h3>
              <span className="text-xs font-bold text-foreground/50 uppercase tracking-wider">Northeastern</span>
            </div>
            <p className="text-foreground/60 text-xs leading-relaxed font-regular max-w-sm">
              Student-run organization connecting students to real-world projects.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-2">
            <h4 className="font-sans font-bold text-xs text-foreground uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-1.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-foreground/60 hover:text-primary text-xs font-regular transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-2">
            <h4 className="font-sans font-bold text-xs text-foreground uppercase tracking-wider">Contact</h4>
            <ul className="space-y-1.5">
              <li>
                <a href="#contact" className="text-foreground/60 hover:text-primary text-xs font-regular transition-colors duration-200">
                  Get in Touch
                </a>
              </li>
              <li>
                <a href="#get-involved" className="text-foreground/60 hover:text-primary text-xs font-regular transition-colors duration-200">
                  Apply to Join
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-2">
            <h4 className="font-sans font-bold text-xs text-foreground uppercase tracking-wider">Follow</h4>
            <ul className="space-y-1.5">
              <li>
                <a href="#" className="text-foreground/60 hover:text-primary text-xs font-regular transition-colors duration-200">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-primary text-xs font-regular transition-colors duration-200">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-foreground/5 pt-6">
          <p className="text-foreground/50 text-xs font-regular text-center">
            © {currentYear} Northeastern Launch Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
