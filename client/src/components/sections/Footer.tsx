import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 py-16 md:py-20">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12 md:gap-16 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-sans font-bold text-lg text-foreground mb-3">Launch Labs</h3>
            <p className="text-foreground/60 text-sm leading-relaxed">Empowering Northeastern students to work on real-world projects and gain hands-on experience.</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans font-bold text-sm text-foreground uppercase tracking-wider mb-5">Explore</h4>
            <ul className="space-y-3">
              {[
                { label: "About", href: "/about" },
                { label: "Launch Teams", href: "/launch-teams" },
                { label: "Innovation Teams", href: "/innovation-teams" },
                { label: "Leadership", href: "/leadership" }
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-foreground/70 hover:text-red-900 text-sm transition-colors duration-200 font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-sans font-bold text-sm text-foreground uppercase tracking-wider mb-5">Get Involved</h4>
            <ul className="space-y-3">
              {[
                { label: "Apply Now", href: "/forms" },
                { label: "Propose Project", href: "/forms" },
                { label: "Contact", href: "/contact" },
                { label: "Partners", href: "/partners" }
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-foreground/70 hover:text-red-900 text-sm transition-colors duration-200 font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-sans font-bold text-sm text-foreground uppercase tracking-wider mb-5">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://instagram.com/nulaunchlabs" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-red-900 text-sm transition-colors duration-200 font-medium">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/nulaunchlabs" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-red-900 text-sm transition-colors duration-200 font-medium">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://discord.gg/EVSEDPDv" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-red-900 text-sm transition-colors duration-200 font-medium">
                  Discord
                </a>
              </li>
              <li>
                <a href="mailto:NU-launchlabs@northeastern.edu" className="text-foreground/70 hover:text-red-900 text-sm transition-colors duration-200 font-medium">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 pt-8">
          <p className="text-foreground/50 text-sm text-center font-medium">
            © {currentYear} Northeastern University Launch Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
