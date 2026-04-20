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
              <div className="w-8 h-8 rounded-full bg-red flex items-center justify-center flex-shrink-0">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                </svg>
              </div>
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
            A Northeastern University Student Organization
          </p>
        </div>
      </div>
    </footer>
  );
}
