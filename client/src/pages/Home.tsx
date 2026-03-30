import Navigation from "@/components/sections/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Briefcase, Lightbulb, Users, Award, Zap, Rocket, TrendingUp, Code, Compass, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import InstagramFeed from "@/components/InstagramFeed";
import ProjectCarousel from "@/components/ProjectCarousel";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleSections, setVisibleSections] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = window.scrollY;
      const progress = windowHeight > 0 ? (scrolled / windowHeight) * 100 : 0;
      setScrollProgress(progress);

      const sections = document.querySelectorAll("[data-section]");
      const newVisibleSections: { [key: string]: boolean } = {};
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.75;
        const id = section.getAttribute("data-section");
        if (id) newVisibleSections[id] = isVisible;
      });
      
      setVisibleSections(newVisibleSections);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Scroll Progress Bar */}
      <div 
        className="scroll-progress" 
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <Navigation />
      <main className="pt-24">
        {/* Hero Section - IMThrive Inspired Bold Asymmetric */}
        <section className="relative overflow-hidden py-32 md:py-56 bg-white">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#CCFF00] opacity-10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C8102E] opacity-5 blur-3xl"></div>
          </div>
          
          <div className="container relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-6 inline-block">
                  <span className="inline-block bg-[#C8102E] text-white text-xs font-black px-4 py-2 tracking-widest">LAUNCH LABS</span>
                </div>
                <h1 className="font-serif font-black text-7xl md:text-8xl text-foreground mb-6 leading-tight">
                  From Idea<br />to<br /><span className="text-[#C8102E]">Impact</span>.
                </h1>
                <p className="text-lg md:text-xl text-foreground/70 leading-relaxed mb-10 max-w-xl font-light">
                  Work on real-world projects with students from every background. Bridge classroom learning with hands-on impact.
                </p>
                <div className="flex gap-4 flex-wrap">
                  <Button asChild>
                    <Link href="/forms" className="bg-[#C8102E] hover:bg-[#A60826] text-white font-black px-8 py-3 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center justify-center gap-2">
                      START YOUR JOURNEY
                      <ArrowRight size={18} />
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/about" className="border-3 border-[#C8102E] text-[#C8102E] font-black px-8 py-3 transition-all duration-300 hover:bg-[#C8102E] hover:text-white hover:shadow-lg">
                      LEARN MORE
                    </Link>
                  </Button>
                </div>
              </div>
              
              {/* Right side - Bold graphic element */}
              <div className="hidden md:flex items-center justify-center relative h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C8102E] to-[#A60826] opacity-10 blur-2xl"></div>
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="w-64 h-64 bg-[#C8102E] flex items-center justify-center shadow-2xl">
                    <div className="text-center text-white">
                      <div className="text-6xl font-black mb-2">50+</div>
                      <div className="text-lg font-bold tracking-widest">MEMBERS</div>
                    </div>
                  </div>
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#CCFF00] flex items-center justify-center shadow-lg">
                    <div className="text-center text-black font-black">
                      <div className="text-4xl">10+</div>
                      <div className="text-xs font-bold tracking-widest">PROJECTS</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Work - Feature Cards with Dark Background */}
        <section data-section="how-we-work" className="relative py-32 md:py-48 bg-[#0F172A]">
          <div className="container">
            <h2 className="font-serif font-black text-5xl md:text-6xl text-white mb-16">How We Work</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Launch Teams Card */}
              <div className="group relative p-8 bg-white border-l-8 border-[#C8102E] hover:shadow-2xl transition-all duration-300">
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-[#C8102E] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-serif font-black text-2xl text-foreground mb-4">Launch Teams</h3>
                  <p className="text-foreground/70 leading-relaxed mb-4">
                    Partners directly with early-stage startups to design, build, and deliver real-world solutions.
                  </p>
                  <div className="text-sm font-bold text-[#C8102E] tracking-widest">5+ ACTIVE PARTNERS</div>
                </div>
              </div>
              
              {/* Innovation Teams Card */}
              <div className="group relative p-8 bg-white border-l-8 border-[#CCFF00] hover:shadow-2xl transition-all duration-300">
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-[#CCFF00] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Lightbulb className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="font-serif font-black text-2xl text-foreground mb-4">Innovation Teams</h3>
                  <p className="text-foreground/70 leading-relaxed mb-4">
                    Focus on internally scoped, end-to-end projects designed to mirror real-world professional work.
                  </p>
                  <div className="text-sm font-bold text-[#CCFF00] tracking-widest">8 INTERNAL VENTURES</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Gain - Icon Grid */}
        <section data-section="what-you-gain" className="relative py-32 md:py-48 bg-white">
          <div className="container">
            <h2 className="font-serif font-black text-5xl md:text-6xl text-foreground mb-16">What You'll Gain</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: Briefcase, title: "Real Experience", desc: "Work on projects that matter" },
                { icon: Users, title: "Community", desc: "Connect with ambitious peers" },
                { icon: Zap, title: "Skills", desc: "Learn industry best practices" },
                { icon: Award, title: "Portfolio", desc: "Build your professional story" },
              ].map((item, idx) => (
                <div key={idx} className="group p-6 bg-white border-2 border-foreground/10 hover:border-[#C8102E] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <item.icon className="w-10 h-10 text-[#C8102E] mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-serif font-black text-lg text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/60">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Carousel */}
        <ProjectCarousel />

        {/* Instagram Feed */}
        <section className="relative py-32 md:py-48 bg-white">
          <div className="container">
            <h2 className="font-serif font-black text-5xl md:text-6xl text-foreground mb-16">Latest from Instagram</h2>
            <InstagramFeed />
          </div>
        </section>

        {/* CTA Section - Dark with Lime Accent */}
        <section className="relative py-32 md:py-48 bg-[#0F172A] overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#CCFF00] opacity-10 blur-3xl"></div>
          </div>
          <div className="container text-center relative z-10">
            <h2 className="font-serif font-black text-5xl md:text-6xl text-white mb-8">Ready to Make an Impact?</h2>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-2xl mx-auto font-light">
              Join a community of ambitious students working on projects that matter.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild>
                <Link href="/forms" className="bg-[#C8102E] hover:bg-[#A60826] text-white font-black px-10 py-3 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center justify-center gap-2">
                  APPLY NOW
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact" className="border-3 border-[#CCFF00] text-[#CCFF00] hover:bg-[#CCFF00]/10 font-black px-10 py-3 transition-all duration-300">
                  GET IN TOUCH
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
