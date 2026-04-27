/**
 * PageLayout — Shared page wrapper for all public-facing pages.
 *
 * Provides consistent structure: Navigation → content → Footer.
 * Every page should use this layout to ensure uniform spacing,
 * nav offset (for the fixed navbar), and footer placement.
 *
 * @example
 *   <PageLayout>
 *     <section>Your page content here</section>
 *   </PageLayout>
 */
import Navigation from "./Navigation";
import Footer from "./Footer";

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="bg-[#F5F0EB] min-h-screen text-[#1a1a1a] font-sans">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
