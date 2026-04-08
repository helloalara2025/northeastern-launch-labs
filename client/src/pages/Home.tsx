import Navigation from "@/components/sections/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Briefcase, Lightbulb, Users, Zap, Rocket } from "lucide-react";
import { useState, useEffect } from "react";
import InstagramFeed from "@/components/InstagramFeed";
import ProjectCarousel from "@/components/ProjectCarousel";

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
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-up" style={{ animationDelay: '300ms' }}>
              <Link href="/forms" className="bg-red text-white font-sans font-semibold text-[13px] uppercase tracking-[0.1em] px-8 py-4 rounded-lg hover:bg-red-dark transition-all duration-200 hover:-translate-y-[1px]">
                JOIN NULL
              </Link>
              <Link href="/launch-teams" className="bg-transparent border border-white/20 text-white font-sans font-semibold text-[13px] uppercase tracking-[0.1em] px-8 py-4 rounded-lg hover:border-red hover:text-red transition-all duration-200">
                SEE WHAT WE'RE BUILDING
              </Link>
            </div>
          </div>
        </section>

        {/* Two Paths Section */}
        <section className="py-24 md:py-32 border-b border-[rgba(255,255,255,0.1)] relative">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div>
                <h2 className="text-sm font-mono text-red uppercase tracking-widest mb-4">The Model</h2>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tight">TWO PATHS TO IMPACT</h3>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Launch Teams Card */}
              <div className="group bg-secondary border border-[rgba(255,255,255,0.05)] p-10 hover:border-red transition-colors duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red opacity-0 group-hover:opacity-5 rounded-full blur-3xl transition-opacity duration-500"></div>
                <Briefcase className="w-8 h-8 text-red mb-8" />
                <h4 className="text-2xl font-bold mb-4">Launch Teams</h4>
                <p className="text-muted text-lg mb-12 leading-relaxed">
                  Partner directly with early-stage startups. Build and ship real features for actual users. Work directly with founders.
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs font-mono text-muted uppercase">5+ Active Partners</span>
                  <Link href="/launch-teams" className="text-red hover:text-white transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
                    Explore <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Innovation Teams Card */}
              <div className="group bg-secondary border border-[rgba(255,255,255,0.05)] p-10 hover:border-yellow transition-colors duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow opacity-0 group-hover:opacity-5 rounded-full blur-3xl transition-opacity duration-500"></div>
                <Lightbulb className="w-8 h-8 text-yellow mb-8" />
                <h4 className="text-2xl font-bold mb-4">Innovation Teams</h4>
                <p className="text-muted text-lg mb-12 leading-relaxed">
                  Internal ventures built from scratch. Own the entire product lifecycle from problem definition to deployment.
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs font-mono text-muted uppercase">8 Internal Ventures</span>
                  <Link href="/innovation-teams" className="text-yellow hover:text-white transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
                    Explore <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Project Carousel */}
        <ProjectCarousel />



        {/* CTA Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-red"></div>
          <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.2)_1px,transparent_1px)] [background-size:24px_24px]"></div>
          
          <div className="container relative z-10 text-center max-w-4xl">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-white">
              READY TO BUILD?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 font-medium">
              Applications are open for the upcoming cohort. Join a community of students building real projects at Northeastern.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/forms" className="inline-flex items-center justify-center bg-black text-white hover:bg-black/80 rounded-none text-lg px-10 py-8 font-bold tracking-widest uppercase border border-black transition-colors">
                Apply Now
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-red rounded-none text-lg px-10 py-8 font-bold tracking-widest uppercase transition-colors">
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
