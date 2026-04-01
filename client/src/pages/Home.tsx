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
              <span className="font-mono text-[11px] text-red uppercase tracking-[0.25em] mb-6 block">FIRST SEMESTER. FIRST PROJECTS. FIRST LAUNCH.</span>
            </div>
            
            <h1 className="font-sans font-extrabold text-[40px] md:text-[72px] uppercase text-white leading-[0.9] tracking-[-0.02em] mb-8 max-w-4xl animate-slide-in-up" style={{ animationDelay: '100ms' }}>
              BUILD THINGS THAT MATTER
            </h1>
            
            <p className="font-sans font-normal text-[18px] text-white/55 leading-[1.6] max-w-[600px] mb-12 animate-slide-in-up" style={{ animationDelay: '200ms' }}>
              NU Launch Labs connects students across every discipline to ship real projects, build real teams, and launch real ideas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-up" style={{ animationDelay: '300ms' }}>
              <Link href="/forms" className="bg-red text-white font-sans font-semibold text-[13px] uppercase tracking-[0.1em] px-8 py-4 rounded-lg hover:bg-red-dark transition-all duration-200 hover:-translate-y-[1px]">
                JOIN NULL
              </Link>
              <Link href="/launch-teams" className="bg-transparent border border-white/20 text-white font-sans font-semibold text-[13px] uppercase tracking-[0.1em] px-8 py-4 rounded-lg hover:border-red hover:text-red transition-all duration-200">
                SEE WHAT WE'RE BUILDING
              </Link>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-24 md:py-32 bg-[#0f1629] border-b border-[rgba(255,255,255,0.1)] relative">
          <div className="container">
            <div className="mb-16">
              <h2 className="font-mono text-[13px] text-red uppercase tracking-[0.1em]">WHAT WE DO</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Launch Teams Block */}
              <div className="border-l-[3px] border-red pl-6 py-2">
                <h4 className="font-sans font-bold text-[24px] text-white mb-4 uppercase">LAUNCH TEAMS</h4>
                <p className="font-sans font-normal text-[16px] text-white/70 leading-[1.6]">
                  Take an idea from zero to shipped product in one semester. Real deadlines, real users, real stakes.
                </p>
              </div>

              {/* Innovation Teams Block */}
              <div className="border-l-[3px] border-red pl-6 py-2">
                <h4 className="font-sans font-bold text-[24px] text-white mb-4 uppercase">INNOVATION TEAMS</h4>
                <p className="font-sans font-normal text-[16px] text-white/70 leading-[1.6]">
                  Explore emerging tech, run experiments, and publish what you learn. Research without the red tape.
                </p>
              </div>

              {/* Open To All Block */}
              <div className="border-l-[3px] border-red pl-6 py-2">
                <h4 className="font-sans font-bold text-[24px] text-white mb-4 uppercase">OPEN TO ALL</h4>
                <p className="font-sans font-normal text-[16px] text-white/70 leading-[1.6]">
                  CS, design, business, engineering — if you're a Northeastern student, you're in. No application.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 md:py-32 bg-[#0d0d0d] border-b border-[rgba(255,255,255,0.1)]">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
              <div>
                <div className="font-sans font-extrabold text-[40px] md:text-[56px] text-white mb-2">50+</div>
                <div className="font-mono text-[11px] text-red uppercase tracking-[0.1em]">MEMBERS</div>
              </div>
              <div>
                <div className="font-sans font-extrabold text-[40px] md:text-[56px] text-white mb-2">8</div>
                <div className="font-mono text-[11px] text-red uppercase tracking-[0.1em]">ACTIVE TEAMS</div>
              </div>
              <div>
                <div className="font-sans font-extrabold text-[40px] md:text-[56px] text-white mb-2">1</div>
                <div className="font-mono text-[11px] text-red uppercase tracking-[0.1em]">RAYTHEON PARTNERSHIP</div>
              </div>
              <div>
                <div className="font-sans font-extrabold text-[40px] md:text-[56px] text-white mb-2">0</div>
                <div className="font-mono text-[11px] text-red uppercase tracking-[0.1em]">APPLICATIONS REQUIRED</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative overflow-hidden bg-red">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.15)_1px,transparent_1px)] [background-size:24px_24px]"></div>
          
          <div className="container relative z-10 flex flex-col items-center text-center">
            <span className="font-mono text-[11px] text-white/80 uppercase tracking-[0.25em] mb-6 block">NU LAUNCH LABS • SPRING 2026</span>
            
            <h2 className="font-sans font-extrabold text-[32px] md:text-[42px] uppercase text-white leading-[1.1] tracking-[-0.02em] mb-6 max-w-3xl">
              STOP THINKING ABOUT IT. START BUILDING.
            </h2>
            
            <p className="font-sans font-normal text-[18px] text-white/85 leading-[1.6] mb-10">
              Join the org. Pick a team. Ship something real.
            </p>
            
            <Link href="/forms" className="bg-white text-red font-sans font-semibold text-[13px] uppercase tracking-[0.1em] px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-200 hover:-translate-y-[1px]">
              JOIN NULL
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
