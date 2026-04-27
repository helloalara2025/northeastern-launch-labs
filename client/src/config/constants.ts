/**
 * Application-wide constants and external URLs.
 *
 * Centralizes all hardcoded URLs, social links, and form links
 * so they can be updated in one place. Any component needing
 * an external URL should import from here.
 */

// ── Brand Assets ──────────────────────────────────────────────
export const LOGO_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663293706215/2bVaappDG4coBuhzggSTVT/rocket-logo-round_c6758031.png";

// ── Social Links ──────────────────────────────────────────────
export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/company/nulaunchlabs/",
  instagram: "https://www.instagram.com/nulaunchlabs/",
  email: "mailto:NU-launchlabs@northeastern.edu",
} as const;

// ── Application Forms ─────────────────────────────────────────
export const FORM_LINKS = {
  eboard:
    "https://docs.google.com/forms/d/e/1FAIpQLSeRnvxsGPbkl7Nuo4WX77wV6sB8twjy5v5W1SP7oqjrjZ6CAw/viewform",
} as const;

// ── Navigation ────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/portfolio" },
  { label: "Leadership", href: "/leadership" },
  { label: "Events", href: "/events" },
] as const;

// ── Footer Links ──────────────────────────────────────────────
export const FOOTER_CONNECT_LINKS = [
  { label: "LinkedIn", href: SOCIAL_LINKS.linkedin },
  { label: "Instagram", href: SOCIAL_LINKS.instagram },
  { label: "Email", href: SOCIAL_LINKS.email },
] as const;

// ── Brand Colors (for reference in JS when Tailwind isn't enough) ──
export const BRAND_COLORS = {
  crimson: "#8B1A13",
  background: "#F5F0EB",
  foreground: "#1a1a1a",
  white: "#FFFFFF",
} as const;
