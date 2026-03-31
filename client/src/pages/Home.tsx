import Navigation from "@/components/sections/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Briefcase, Lightbulb, Users, Zap } from "lucide-react";
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
      <main>
        {/* Hero Section - Bold & Impactful with Image */}
        <section className="relative section-padding bg-white border-b-4 border-red overflow-hidden">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-slide-in-left z-10">
              <div className="mb-8">
                <span className="badge">NORTHEASTERN LAUNCH LABS</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-black mb-8 leading-tight">
                From Idea to<br />
                <span className="text-red">Impact</span>
              </h1>
              <p className="text-xl md:text-2xl text-charcoal mb-10 leading-relaxed max-w-xl font-light">
                Work on real-world projects with students from every background. Bridge classroom learning with hands-on impact.
              </p>
              <div className="flex gap-4 flex-wrap">
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

            {/* Right - Hero Image */}
            <div className="hidden md:block animate-slide-in-right">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663293706215/2bVaappDG4coBuhzggSTVT/hero-innovation-PLbqY4pRUnpzpMNzgFmJdu.webp"
                alt="Diverse team collaborating on innovation projects"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
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
                  <Link href="/launch-teams">
                    <a className="text-red hover:text-white transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
                      Explore <ArrowRight className="w-4 h-4" />
                    </a>
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
                  <Link href="/innovation-teams">
                    <a className="text-yellow hover:text-white transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
                      Explore <ArrowRight className="w-4 h-4" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* For Builders Section */}
        <section className="py-24 md:py-32 border-b border-[rgba(255,255,255,0.1)] relative overflow-hidden">
          <div className="absolute -left-[20%] top-[20%] w-[600px] h-[600px] rounded-full border-[1px] border-yellow opacity-10 pointer-events-none"></div>
          
          <div className="container relative z-10">
            <h2 className="text-sm font-mono text-yellow uppercase tracking-widest mb-4">The Value</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">FOR BUILDERS, BY BUILDERS</h3>
            
            <div className="grid md:grid-cols-3 gap-px bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)]">
              <div className="bg-primary p-10 group hover:bg-secondary transition-colors duration-300">
                <Users className="w-8 h-8 text-white mb-8 group-hover:text-red transition-colors" />
                <h4 className="text-xl font-bold mb-4">Elite Network</h4>
                <p className="text-muted leading-relaxed">
                  Surround yourself with the most ambitious engineers, designers, and operators at Northeastern.
                </p>
              </div>
              
              <div className="bg-primary p-10 group hover:bg-secondary transition-colors duration-300">
                <Zap className="w-8 h-8 text-white mb-8 group-hover:text-yellow transition-colors" />
                <h4 className="text-xl font-bold mb-4">Real Reps</h4>
                <p className="text-muted leading-relaxed">
                  Stop building toy projects. Ship production code, conduct real user interviews, and manage actual stakeholders.
                </p>
              </div>
              
              <div className="bg-primary p-10 group hover:bg-secondary transition-colors duration-300">
                <Briefcase className="w-8 h-8 text-white mb-8 group-hover:text-red transition-colors" />
                <h4 className="text-xl font-bold mb-4">Career Velocity</h4>
                <p className="text-muted leading-relaxed">
                  Our alumni go on to top tech companies, prestigious accelerators, and found their own backed startups.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Project Carousel */}
        <ProjectCarousel />

        {/* Instagram Feed */}
        <section className="py-24 md:py-32 border-b border-[rgba(255,255,255,0.1)]">
          <div className="container">
            <h2 className="text-sm font-mono text-red uppercase tracking-widest mb-4">Community</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">LATEST FROM INSTAGRAM</h3>
            <InstagramFeed />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-red"></div>
          <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.2)_1px,transparent_1px)] [background-size:24px_24px]"></div>
          
          <div className="container relative z-10 text-center max-w-4xl">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-white">
              READY TO BUILD?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 font-medium">
              Applications are open for the upcoming cohort. Join the most ambitious builder community at Northeastern.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-black text-white hover:bg-black/80 rounded-none text-lg px-10 py-8 font-bold tracking-widest uppercase border border-black">
                <Link href="/forms">Apply Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red rounded-none text-lg px-10 py-8 font-bold tracking-widest uppercase">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
