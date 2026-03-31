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
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-white border-b-2 border-[#D0D0D0]">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-6">
                  <span className="badge">NORTHEASTERN LAUNCH LABS</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight">
                  From Idea to Impact
                </h1>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-xl">
                  Work on real-world projects with students from every background. Bridge classroom learning with hands-on impact.
                </p>
                <div className="flex gap-4 flex-wrap">
                  <Button asChild>
                    <Link href="/forms" className="btn-primary inline-flex items-center gap-2">
                      Get Started
                      <ArrowRight size={18} />
                    </Link>
                  </Button>
                  <Button asChild>
                    <Link href="/about" className="btn-secondary">
                      Learn More
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="bg-[#F5F5F5] p-12 border-l-4 border-[#C8102E]">
                  <div className="space-y-4">
                    <div>
                      <div className="text-4xl font-bold text-[#C8102E]">50+</div>
                      <div className="text-gray-600">Active Members</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-[#C8102E]">10+</div>
                      <div className="text-gray-600">Projects Completed</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-[#C8102E]">5+</div>
                      <div className="text-gray-600">Active Partners</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="section-padding bg-white">
          <div className="container">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">How We Work</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Launch Teams */}
              <div className="card-hover">
                <div className="flex items-start gap-4 mb-4">
                  <Briefcase className="w-8 h-8 text-[#C8102E] flex-shrink-0" />
                  <h3 className="text-2xl font-bold text-black">Launch Teams</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Partners directly with early-stage startups to design, build, and deliver real-world solutions. Members work closely with founders and stakeholders on development-focused projects.
                </p>
                <div className="text-sm font-semibold text-[#C8102E]">5+ Active Partners</div>
              </div>

              {/* Innovation Teams */}
              <div className="card-hover">
                <div className="flex items-start gap-4 mb-4">
                  <Lightbulb className="w-8 h-8 text-[#C8102E] flex-shrink-0" />
                  <h3 className="text-2xl font-bold text-black">Innovation Teams</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Focus on internally scoped, end-to-end projects designed to mirror real-world professional work. Members take projects from problem definition through execution and presentation.
                </p>
                <div className="text-sm font-semibold text-[#C8102E]">8 Internal Ventures</div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Carousel */}
        <ProjectCarousel />

        {/* Instagram Feed */}
        <section className="section-padding bg-white border-t-2 border-[#D0D0D0]">
          <div className="container">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">Latest from Instagram</h2>
            <InstagramFeed />
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-[#C8102E]">
          <div className="container text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Make an Impact?</h2>
            <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
              Join a community of ambitious students working on projects that matter.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild>
                <Link href="/forms" className="bg-white text-[#C8102E] font-bold px-8 py-3 hover:bg-gray-100 transition-all inline-flex items-center gap-2">
                  Apply Now
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button asChild>
                <Link href="/contact" className="border-2 border-white text-white font-bold px-8 py-3 hover:bg-white/10 transition-all">
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
