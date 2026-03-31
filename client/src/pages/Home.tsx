import Navigation from "@/components/sections/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Briefcase, Lightbulb } from "lucide-react";
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
    <div className="bg-white">
      {/* Scroll Progress Bar */}
      <div 
        className="scroll-progress" 
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <Navigation />
      <main className="pt-20">
        {/* Hero Section - Bold & Impactful */}
        <section className="section-padding bg-white border-b-4 border-[#C8102E]">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="animate-slide-in-left">
                <div className="mb-8">
                  <span className="badge">NORTHEASTERN LAUNCH LABS</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-black text-black mb-8 leading-tight">
                  From Idea to<br />
                  <span className="text-[#C8102E]">Impact</span>
                </h1>
                <p className="text-xl md:text-2xl text-black/70 mb-10 leading-relaxed max-w-xl font-light">
                  Work on real-world projects with students from every background. Bridge classroom learning with hands-on impact.
                </p>
                <div className="flex gap-6 flex-wrap">
                  <Button asChild>
                    <Link href="/forms" className="btn-primary inline-flex items-center gap-3">
                      Get Started
                      <ArrowRight size={20} />
                    </Link>
                  </Button>
                  <Button asChild>
                    <Link href="/about" className="btn-secondary inline-flex items-center gap-3">
                      Learn More
                      <ArrowRight size={20} />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Right side - Empty space for visual balance */}
              <div className="hidden md:flex items-center justify-center relative h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C8102E] to-[#A60826] opacity-5 blur-3xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Work - Dark Section with Contrast */}
        <section className="section-padding bg-[#0F172A]">
          <div className="container">
            <h2 className="text-6xl md:text-7xl font-black text-white mb-16">How We Work</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Launch Teams Card */}
              <div className="group card-dark">
                <div className="icon-box mb-6">
                  <Briefcase className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-black text-black mb-4">Launch Teams</h3>
                <p className="text-black/70 text-lg leading-relaxed mb-6">
                  Partners directly with early-stage startups to design, build, and deliver real-world solutions. Members work closely with founders and stakeholders on development-focused projects.
                </p>
                <div className="text-sm font-black text-[#C8102E] tracking-widest">5+ ACTIVE PARTNERS</div>
              </div>

              {/* Innovation Teams Card */}
              <div className="group card-accent">
                <div className="icon-box-accent mb-6">
                  <Lightbulb className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-black text-black mb-4">Innovation Teams</h3>
                <p className="text-black/70 text-lg leading-relaxed mb-6">
                  Focus on internally scoped, end-to-end projects designed to mirror real-world professional work. Members take projects from problem definition through execution and presentation.
                </p>
                <div className="text-sm font-black text-[#CCFF00] tracking-widest">8 INTERNAL VENTURES</div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Carousel */}
        <ProjectCarousel />

        {/* Instagram Feed */}
        <section className="section-padding bg-[#F5F5F5] border-t-4 border-[#C8102E]">
          <div className="container">
            <h2 className="text-6xl md:text-7xl font-black text-black mb-16">Latest from Instagram</h2>
            <InstagramFeed />
          </div>
        </section>

        {/* CTA Section - Bold Red */}
        <section className="section-padding bg-[#C8102E]">
          <div className="container text-center">
            <h2 className="text-6xl md:text-7xl font-black text-white mb-8">Ready to Make an Impact?</h2>
            <p className="text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Join a community of ambitious students working on projects that matter.
            </p>
            <div className="flex gap-6 justify-center flex-wrap">
              <Button asChild>
                <Link href="/forms" className="bg-white text-[#C8102E] font-black px-10 py-4 hover:bg-[#F5F5F5] transition-all inline-flex items-center gap-3 uppercase tracking-wider">
                  Apply Now
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button asChild>
                <Link href="/contact" className="border-3 border-white text-white font-black px-10 py-4 hover:bg-white/10 transition-all uppercase tracking-wider">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
