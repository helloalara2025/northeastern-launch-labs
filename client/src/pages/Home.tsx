import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = window.scrollY;
      const progress = windowHeight > 0 ? (scrolled / windowHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-primary text-white min-h-screen">
      {/* Scroll Progress Bar */}
      <div 
        className="scroll-progress" 
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <Navigation />
      <main>
        {/* Hero Section - Bold & Impactful with Image */}
        <section className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden pt-20">
          {/* Brand Textures */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:24px_24px]"></div>
          
          {/* Red Arc SVG Strokes */}
          <svg className="absolute top-[-100px] right-[-200px] w-[600px] h-[600px] pointer-events-none" viewBox="0 0 600 600" fill="none">
            <circle cx="600" cy="0" r="400" stroke="#dc2626" strokeWidth="1" opacity="0.3"/>
            <circle cx="600" cy="0" r="500" stroke="#dc2626" strokeWidth="0.5" opacity="0.15"/>
          </svg>
          
          <svg className="absolute bottom-[-100px] left-[-200px] w-[600px] h-[600px] pointer-events-none" viewBox="0 0 600 600" fill="none">
            <circle cx="0" cy="600" r="400" stroke="#dc2626" strokeWidth="1" opacity="0.3"/>
            <circle cx="0" cy="600" r="500" stroke="#dc2626" strokeWidth="0.5" opacity="0.15"/>
          </svg>

          {/* Dot Grid Cluster */}
          <div className="absolute bottom-20 left-20 hidden md:grid grid-cols-5 gap-2 opacity-60">
            {[...Array(25)].map((_, i) => (
              <div key={i} className={`w-[3px] h-[3px] rounded-full ${i % 7 === 0 ? 'bg-red' : i % 11 === 0 ? 'bg-yellow' : 'bg-white/20'}`}></div>
            ))}
          </div>

          <div className="container relative z-10 flex flex-col items-center text-center">
            <div className="animate-slide-in-up" style={{ animationDelay: '0ms' }}>
              <span className="font-mono text-[11px] text-red uppercase tracking-[0.25em] mb-6 block border border-red/30 bg-red/10 px-4 py-2 rounded-full inline-block">NORTHEASTERN STUDENT ORGANIZATION</span>
            </div>
            
            <h1 className="font-sans font-extrabold text-[40px] md:text-[72px] text-white leading-[0.9] tracking-[-0.02em] mb-8 max-w-4xl animate-slide-in-up" style={{ animationDelay: '100ms' }}>
              Site under construction. <br />
              Launching <span className="text-red">May 2026.</span>
            </h1>
            
            <p className="font-sans font-normal text-[18px] text-white/55 leading-[1.6] max-w-[600px] mb-12 animate-slide-in-up" style={{ animationDelay: '200ms' }}>
              Students from every major building real projects together. We bridge the gap between classroom theory and shipping actual products.
            </p>
            
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
