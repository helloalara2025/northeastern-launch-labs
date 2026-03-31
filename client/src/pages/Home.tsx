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

        {/* How We Work - Dark Section with Contrast */}
        <section className="section-padding bg-navy">
          <div className="container">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-16">How We Work</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Launch Teams Card */}
              <div className="card-dark group">
                <div className="icon-box mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-black text-black mb-4">Launch Teams</h3>
                <p className="text-charcoal text-lg leading-relaxed mb-6">
                  Partners directly with early-stage startups to design, build, and deliver real-world solutions. Members work closely with founders and stakeholders on development-focused projects.
                </p>
                <div className="text-sm font-black text-red tracking-widest">5+ ACTIVE PARTNERS</div>
              </div>

              {/* Innovation Teams Card */}
              <div className="card-accent group">
                <div className="icon-box-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-black text-black mb-4">Innovation Teams</h3>
                <p className="text-charcoal text-lg leading-relaxed mb-6">
                  Focus on internally scoped, end-to-end projects designed to mirror real-world professional work. Members take projects from problem definition through execution and presentation.
                </p>
                <div className="text-sm font-black text-gold tracking-widest">8 INTERNAL VENTURES</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Join Section */}
        <section className="section-padding bg-stone">
          <div className="container">
            <h2 className="text-5xl md:text-6xl font-black text-black mb-16">Why Join Launch Labs?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Users, title: "Build Your Network", desc: "Connect with ambitious students and industry leaders across all disciplines." },
                { icon: Zap, title: "Real-World Experience", desc: "Work on projects that matter, with real clients and measurable impact." },
                { icon: Briefcase, title: "Develop Leadership", desc: "Lead teams, make decisions, and develop skills that matter in your career." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-lg border-l-8 border-l-red hover:shadow-lg transition-shadow duration-300">
                  <div className="icon-box mb-6">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-black text-black mb-3">{item.title}</h3>
                  <p className="text-charcoal text-lg leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Carousel */}
        <ProjectCarousel />

        {/* Instagram Feed */}
        <section className="section-padding bg-white border-t-4 border-red">
          <div className="container">
            <h2 className="text-5xl md:text-6xl font-black text-black mb-16">Latest from Instagram</h2>
            <InstagramFeed />
          </div>
        </section>

        {/* CTA Section - Bold Red */}
        <section className="section-padding bg-red">
          <div className="container text-center">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Ready to Make an Impact?</h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Join a community of ambitious students working on projects that matter.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild>
                <Link href="/forms" className="bg-white text-red font-black px-8 py-3 hover:bg-stone transition-all inline-flex items-center gap-3 uppercase tracking-wider">
                  Apply Now
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button asChild>
                <Link href="/contact" className="border-3 border-white text-white font-black px-8 py-3 hover:bg-white/10 transition-all uppercase tracking-wider">
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
