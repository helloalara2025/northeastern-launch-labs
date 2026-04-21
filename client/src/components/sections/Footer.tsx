const LOGO_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663293706215/2bVaappDG4coBuhzggSTVT/rocket-logo-round_c6758031.png";

const connectLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/nulaunchlabs/" },
  { label: "Instagram", href: "https://www.instagram.com/nulaunchlabs/" },
  { label: "Email", href: "mailto:NU-launchlabs@northeastern.edu" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-[rgba(255,255,255,0.06)] relative overflow-hidden">
      {/* Subtle dot grid texture */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="container relative z-10">
        {/* Main Footer Grid */}
        <div className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand Column */}
          <div className="md:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={LOGO_URL}
                alt="NU Launch Labs"
                className="w-8 h-8 object-contain flex-shrink-0 rounded-full"
              />
              <span className="font-mono text-[11px] font-medium tracking-[0.2em] text-white/70 uppercase">
                NU Launch Labs
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-8">
              Northeastern University's hub for real-world, cross-disciplinary project work. Bridging classroom theory with shipping actual products.
            </p>
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)]">
              <span className="w-2 h-2 rounded-full bg-red animate-pulse" />
              <span className="font-mono text-[10px] text-white/40 uppercase tracking-[0.15em]">
                Recruiting Fall 2026
              </span>
            </div>
          </div>

          {/* Connect Column */}
          <div className="md:col-span-4">
            <h4 className="font-mono text-[10px] text-white/30 uppercase tracking-[0.2em] mb-6">
              Connect
            </h4>
            <ul className="space-y-3">
              {connectLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 hover:text-white text-sm transition-colors duration-200 font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[rgba(255,255,255,0.06)] py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] text-white/25 uppercase tracking-[0.15em]">
            &copy; {currentYear} Northeastern Launch Labs. All rights reserved.
          </p>
          <p className="font-mono text-[10px] text-white/25 uppercase tracking-[0.15em]">
            A Northeastern University Student-Led Organization
          </p>
        </div>
      </div>
    </footer>
  );
}
