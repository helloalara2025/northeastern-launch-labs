export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-sans font-semibold text-lg text-foreground mb-2">Launch Labs</h3>
            <p className="text-foreground/60 text-sm">Northeastern University</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans font-semibold text-sm text-foreground uppercase tracking-wide mb-4">Navigation</h4>
            <ul className="space-y-2">
              {[
                { label: "About", href: "#about" },
                { label: "Teams", href: "#teams" },
                { label: "Get Involved", href: "#get-involved" }
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-foreground/60 hover:text-red-800 text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-sans font-semibold text-sm text-foreground uppercase tracking-wide mb-4">Follow</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-foreground/60 hover:text-red-800 text-sm transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-red-800 text-sm transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-foreground/50 text-sm text-center">
            © {currentYear} Northeastern Launch Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
