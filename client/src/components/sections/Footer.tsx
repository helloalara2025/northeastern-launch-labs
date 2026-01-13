export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "About", href: "#about" },
    { label: "Teams", href: "#teams" },
    { label: "Get Involved", href: "#get-involved" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-white border-t border-foreground/5 mt-24">
      <div className="container py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <h3 className="font-sans font-bold text-lg text-foreground">
                Launch Labs
              </h3>
              <span className="text-xs font-semibold text-foreground/50 uppercase tracking-wider">Northeastern</span>
            </div>
            <p className="text-foreground/60 text-sm leading-relaxed font-regular max-w-sm">
              A student-run organization connecting students across disciplines to work on real-world projects with startups and internal teams.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="font-sans font-bold text-sm text-foreground uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-foreground/60 hover:text-foreground text-sm font-regular transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="font-sans font-bold text-sm text-foreground uppercase tracking-wider">
              Get in Touch
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#contact"
                  className="text-foreground/60 hover:text-foreground text-sm font-regular transition-colors duration-200"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#get-involved"
                  className="text-foreground/60 hover:text-foreground text-sm font-regular transition-colors duration-200"
                >
                  Apply to Join
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-foreground/5 pt-8">
          <p className="text-foreground/50 text-xs font-regular text-center">
            © {currentYear} Northeastern Launch Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
