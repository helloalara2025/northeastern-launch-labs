import Navigation from "@/components/sections/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Briefcase, Lightbulb, Users, Award, Zap, Rocket, TrendingUp, Code, Compass, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import InstagramFeed from "@/components/InstagramFeed";

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
        {/* Hero Section - Modern Bold */}
        <section className="relative overflow-hidden py-32 md:py-48">
          <div className="absolute inset-0 bg-gradient-to-br from-rgba(200, 16, 46, 0.05)/30 to-transparent pointer-events-none"></div>
          <div className="container relative z-10">
            <div className="mb-8 inline-block">
              <span className="inline-block bg-#C8102E text-white text-sm font-bold px-4 py-2 ">Student Club at Northeastern</span>
            </div>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h1 className="font-serif font-black text-8xl md:text-9xl text-foreground mb-8 leading-tight">
                  From Idea to Impact.
                </h1>
                <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed mb-12 max-w-2xl font-light">
                  Work on real-world projects with students from every background. Bridge classroom learning with hands-on impact.
                </p>
                <div className="flex gap-4">
                  <Button asChild>
                    <Link href="/forms" className="bg-#C8102E hover:bg-#A60826 text-white font-bold px-10 h-12  transition-all duration-300 shadow-lg hover:shadow-lg hover:scale-100 hover:shadow-lg inline-flex items-center justify-center gap-2">
                      Start Your Journey
                      <ArrowRight size={18} />
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/about" className="border-4 border-foreground/20 text-foreground font-bold px-10 h-12  transition-all duration-300 hover:border-#C8102E hover:text-#C8102E">
                      Learn More
                    </Link>
                  </Button>
                </div>
              </div>
              
              {/* Floating Tech Stack - Modern */}
              <div className="hidden md:flex items-center justify-center relative h-96">
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Central circle */}
                  <div className="absolute w-28 h-28 bg-gradient-to-br from-rgba(200, 16, 46, 0.1) to-rgba(200, 16, 46, 0.1)  flex items-center justify-center float-animation shadow-lg">
                    <div className="w-20 h-20 bg-gradient-to-br from-#C8102E to-#A60826  flex items-center justify-center text-white font-bold text-2xl">
                      NU
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute top-0 left-1/4 w-20 h-20 bg-white border-4 border-#C8102E  flex items-center justify-center float-animation shadow-sm hover:shadow-lg transition-all" style={{ animationDelay: "0.2s" }}>
                    <Code className="w-10 h-10 text-#C8102E" />
                  </div>
                  
                  <div className="absolute top-1/4 right-0 w-20 h-20 bg-white border-4 border-#C8102E  flex items-center justify-center float-animation shadow-sm hover:shadow-lg transition-all" style={{ animationDelay: "0.4s" }}>
                    <Lightbulb className="w-10 h-10 text-#C8102E" />
                  </div>
                  
                  <div className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-white border-4 border-#C8102E  flex items-center justify-center float-animation shadow-sm hover:shadow-lg transition-all" style={{ animationDelay: "0.6s" }}>
                    <Users className="w-10 h-10 text-#C8102E" />
                  </div>
                  
                  <div className="absolute bottom-0 left-1/3 w-20 h-20 bg-white border-4 border-#C8102E  flex items-center justify-center float-animation shadow-sm hover:shadow-lg transition-all" style={{ animationDelay: "0.8s" }}>
                    <Rocket className="w-10 h-10 text-#C8102E" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Work - Feature Cards */}
        <section data-section="how-we-work" className="relative py-32 md:py-48 bg-gradient-to-b from-transparent via-cyan-50/20 to-transparent">
          <div className="container">
            <h2 className="font-serif font-black text-6xl md:text-7xl text-foreground mb-16">How We Work</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Launch Teams Card */}
              <div className="group relative p-8 bg-white border-4 border-foreground/10  hover:border-#C8102E transition-all duration-300 hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-rgba(200, 16, 46, 0.05) to-transparent opacity-0 group-hover:opacity-100  transition-opacity duration-300 pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-#C8102E  flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-serif font-bold text-3xl text-foreground mb-4">Launch Teams</h3>
                  <p className="text-foreground/70 leading-relaxed mb-6 font-light">
                    Partner with early-stage startups on real projects. Design, build, and deliver solutions that matter.
                  </p>
                  <div className="inline-block px-4 py-2 bg-cyan-100 text-cyan-700  text-sm font-bold">
                    5+ Active Partners
                  </div>
                </div>
              </div>

              {/* Innovation Teams Card */}
              <div className="group relative p-8 bg-white border-4 border-foreground/10  hover:border-#C8102E transition-all duration-300 hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-rgba(200, 16, 46, 0.05) to-transparent opacity-0 group-hover:opacity-100  transition-opacity duration-300 pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-#C8102E  flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-serif font-bold text-3xl text-foreground mb-4">Innovation Teams</h3>
                  <p className="text-foreground/70 leading-relaxed mb-6 font-light">
                    Lead end-to-end projects from problem definition to delivery. Develop leadership and execution skills.
                  </p>
                  <div className="inline-block px-4 py-2 bg-cyan-100 text-cyan-700  text-sm font-bold">
                    8 Internal Ventures
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Gain - Icon Grid */}
        <section data-section="what-you-gain" className="relative py-32 md:py-48">
          <div className="container">
            <h2 className="font-serif font-black text-6xl md:text-7xl text-foreground mb-16">What You'll Gain</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: Code, title: "Technical Mastery", desc: "Build real products with modern tech stacks" },
                { icon: Users, title: "Leadership", desc: "Lead teams and drive strategic decisions" },
                { icon: TrendingUp, title: "Career Growth", desc: "Portfolio-ready projects and mentorship" },
                { icon: Compass, title: "Network", desc: "Connect with founders, investors, and peers" }
              ].map((item, idx) => (
                <div key={idx} className="group p-8 bg-white border border-foreground/10  hover:border-#C8102E hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <div className="w-14 h-14 bg-gradient-to-br from-rgba(200, 16, 46, 0.1) to-rgba(200, 16, 46, 0.1)  flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7 text-#C8102E" />
                  </div>
                  <h3 className="font-bold text-xl text-foreground mb-3">{item.title}</h3>
                  <p className="text-foreground/70 font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section data-section="mission" className="relative py-32 md:py-48 bg-gradient-to-r from-#C8102E to-#A60826">
          <div className="container">
            <div className="max-w-3xl">
              <h2 className="font-serif font-black text-5xl md:text-6xl text-white mb-8">Our Mission</h2>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light mb-12">
                To empower students to bridge the gap between classroom learning and real-world impact by working on meaningful projects that solve actual problems.
              </p>
              <Button asChild>
                <Link href="/about" className="bg-white text-#C8102E hover:bg-cyan-50 font-bold px-10 h-12  transition-all duration-300 shadow-lg hover:shadow-lg inline-flex items-center justify-center gap-2">
                  Explore Our Story
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Instagram Feed */}
        <section data-section="instagram" className="relative py-32 md:py-48">
          <div className="container">
            <h2 className="font-serif font-black text-6xl md:text-7xl text-foreground mb-16">Latest from Instagram</h2>
            <InstagramFeed />
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 md:py-48 bg-gradient-to-br from-foreground to-slate-800">
          <div className="container text-center">
            <h2 className="font-serif font-black text-5xl md:text-6xl text-white mb-8">Ready to Make an Impact?</h2>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-2xl mx-auto font-light">
              Join a community of ambitious students working on projects that matter.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild>
                <Link href="/forms" className="bg-#C8102E hover:bg-#A60826 text-white font-bold px-10 h-12  transition-all duration-300 shadow-lg hover:shadow-lg hover:scale-100 hover:shadow-lg inline-flex items-center justify-center gap-2">
                  Apply Now
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact" className="border-4 border-white text-white hover:bg-white/10 font-bold px-10 h-12  transition-all duration-300">
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
