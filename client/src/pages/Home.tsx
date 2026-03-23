import Navigation from "@/components/sections/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Briefcase, Lightbulb, Users, Award, Zap, Rocket, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";
import InstagramFeed from "@/components/InstagramFeed";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleSections, setVisibleSections] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = window.scrollY;
      const progress = windowHeight > 0 ? (scrolled / windowHeight) * 100 : 0;
      setScrollProgress(progress);

      // Detect visible sections for fade-in-up animations
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
        {/* Hero Section */}
        <section className="bg-white py-32 md:py-40 relative overflow-hidden">
          <div className="absolute top-10 right-10 text-red-900/10 text-6xl">✦</div>
          <div className="absolute bottom-20 left-5 text-red-900/10 text-5xl">◆</div>
          <div className="container relative z-10">
            <div className="mb-8 inline-block">
              <span className="inline-block bg-red-900 text-white text-sm font-bold px-4 py-2 rounded-full">Student club at Northeastern University</span>
            </div>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h1 className="font-serif font-bold text-8xl md:text-9xl text-foreground mb-10 leading-tight">
                  From Idea to Impact.
                </h1>
                <p className="text-xl md:text-3xl md:text-4xl text-foreground/75 leading-relaxed mb-12 max-w-3xl font-light">
                  Work on real-world projects with students from every background. Bridge classroom learning with hands-on impact.
                </p>
                <Button asChild>
                  <Link href="/forms" className="bg-red-900 hover:bg-red-900 text-white font-bold px-8 h-12 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center justify-center gap-2">
                    Start Your Journey
                    <ArrowRight size={18} />
                  </Link>
                </Button>
              </div>
              
              {/* Floating Tech Stack */}
              <div className="hidden md:flex items-center justify-center relative h-96">
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Central circle */}
                  <div className="absolute w-24 h-24 bg-red-900/10 rounded-full flex items-center justify-center float-animation">
                    <div className="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center text-white font-bold text-3xl md:text-4xl">
                      NU
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute top-0 left-1/4 w-16 h-16 bg-white border-2 border-red-900/20 rounded-lg flex items-center justify-center float-animation" style={{ animationDelay: "0.2s" }}>
                    <Briefcase className="w-8 h-8 text-red-900" />
                  </div>
                  
                  <div className="absolute top-1/4 right-0 w-16 h-16 bg-white border-2 border-red-900/20 rounded-lg flex items-center justify-center float-animation" style={{ animationDelay: "0.4s" }}>
                    <Lightbulb className="w-8 h-8 text-red-900" />
                  </div>
                  
                  <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-white border-2 border-red-900/20 rounded-lg flex items-center justify-center float-animation" style={{ animationDelay: "0.6s" }}>
                    <Users className="w-8 h-8 text-red-900" />
                  </div>
                  
                  <div className="absolute bottom-0 left-1/3 w-16 h-16 bg-white border-2 border-red-900/20 rounded-lg flex items-center justify-center float-animation" style={{ animationDelay: "0.8s" }}>
                    <Rocket className="w-8 h-8 text-red-900" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-white border-t border-border py-32 md:py-40">
          <div className="container">
            <h2 className="font-serif font-bold text-5xl md:text-6xl text-foreground mb-12">Our Mission</h2>
            <p className="text-xl md:text-3xl md:text-4xl text-foreground/70 leading-relaxed mb-0 font-light max-w-4xl">
              We bring together students from all backgrounds to work on real-world projects that matter. Through Launch Teams partnering with startups and Innovation Teams developing internal initiatives, members gain practical experience, develop professional skills, and explore pathways to entrepreneurship and innovation.
            </p>
          </div>
        </section>

        {/* How We Work Section - Feature Cards */}
        <section className="bg-white border-t border-border py-32 md:py-40" data-section="how-we-work">
          <div className="container">
            <div className="flex items-center gap-3 mb-16">
              <span className="text-red-900/20 text-4xl">✦</span>
              <h2 className="font-serif font-bold text-5xl md:text-6xl text-foreground">How We Work</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              {/* Launch Teams Card */}
              <Card className="glass-card rounded-xl group cursor-pointer h-full hover:shadow-lg transition-all duration-300">
                <Link href="/launch-teams" className="block h-full">
                  <CardContent className="p-12">
                    <div className="flex items-start justify-between mb-8">
                      <div className="w-14 h-14 rounded-lg bg-white flex items-center justify-center text-red-900 group-hover:scale-110 transition-transform duration-300 font-bold text-xl shadow-md">
                        <Briefcase className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-bold text-red-900 bg-red-50 px-3 py-1 rounded-full">5+ Active Partners</span>
                    </div>
                    <h3 className="font-bold text-3xl md:text-4xl text-foreground mb-6">Launch Teams</h3>
                    <p className="text-lg md:text-xl text-foreground/70 leading-relaxed mb-8 font-light">
                      Partner directly with early-stage startups to design, build, and deliver real-world solutions. Work on product development, software implementation, prototyping, and iterative testing.
                    </p>
                    <div className="text-red-900 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-200 text-base">
                      Learn More
                      <ArrowRight size={16} />
                    </div>
                  </CardContent>
                </Link>
              </Card>

              {/* Innovation Teams Card */}
              <Card className="glass-card rounded-xl group cursor-pointer h-full hover:shadow-lg transition-all duration-300">
                <Link href="/innovation-teams" className="block h-full">
                  <CardContent className="p-12">
                    <div className="flex items-start justify-between mb-8">
                      <div className="w-14 h-14 rounded-lg bg-white flex items-center justify-center text-red-900 group-hover:scale-110 transition-transform duration-300 font-bold text-xl shadow-md">
                        <Lightbulb className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-bold text-red-900 bg-red-50 px-3 py-1 rounded-full">3 Internal Ventures</span>
                    </div>
                    <h3 className="font-bold text-3xl md:text-4xl text-foreground mb-6">Innovation Teams</h3>
                    <p className="text-lg md:text-xl text-foreground/70 leading-relaxed mb-8 font-light">
                      Focus on internally scoped, end-to-end projects designed to mirror real-world professional work. Take projects from problem definition through delivery with full ownership.
                    </p>
                    <div className="text-red-900 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-200 text-base">
                      Learn More
                      <ArrowRight size={16} />
                    </div>
                  </CardContent>
                </Link>
              </Card>
            </div>
          </div>
        </section>

        {/* What You'll Gain Section - Icon Grid */}
        <section className="bg-white border-t border-border py-32 md:py-40" data-section="what-you-gain">
          <div className="container">
            <div className="flex items-center gap-3 mb-16">
              <span className="text-red-900/20 text-4xl">✦</span>
              <h2 className="font-serif font-bold text-5xl md:text-6xl text-foreground">What You'll Gain</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              <Card className="gain-card border border-border hover:border-red-900/30 transition-all duration-300 bg-white rounded-xl">
                <CardContent className="p-10">
                  <div className="w-14 h-14 rounded-lg bg-red-50 flex items-center justify-center text-red-900 mb-6 font-bold text-xl shadow-sm">
                    <Zap className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-xl md:text-3xl md:text-4xl text-foreground mb-4">Real-World Experience</h3>
                  <p className="text-base md:text-lg text-foreground/70 leading-relaxed font-light">
                    Work on projects that matter, from startup collaborations to internal initiatives that produce tangible outcomes.
                  </p>
                </CardContent>
              </Card>

              <Card className="gain-card border border-border hover:border-red-900/30 transition-all duration-300 bg-white rounded-xl">
                <CardContent className="p-10">
                  <div className="w-14 h-14 rounded-lg bg-red-50 flex items-center justify-center text-red-900 mb-6 font-bold text-xl shadow-sm">
                    <Users className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-xl md:text-3xl md:text-4xl text-foreground mb-4">Cross-Disciplinary Collaboration</h3>
                  <p className="text-base md:text-lg text-foreground/70 leading-relaxed font-light">
                    Work alongside engineers, designers, business students, and more to solve complex problems from multiple angles.
                  </p>
                </CardContent>
              </Card>

              <Card className="gain-card border border-border hover:border-red-900/30 transition-all duration-300 bg-white rounded-xl">
                <CardContent className="p-10">
                  <div className="w-14 h-14 rounded-lg bg-red-50 flex items-center justify-center text-red-900 mb-6 font-bold text-xl shadow-sm">
                    <Award className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-xl md:text-3xl md:text-4xl text-foreground mb-4">Professional Skills</h3>
                  <p className="text-base md:text-lg text-foreground/70 leading-relaxed font-light">
                    Build communication, project management, leadership, and stakeholder collaboration skills in real contexts.
                  </p>
                </CardContent>
              </Card>

              <Card className="gain-card border border-border hover:border-red-900/30 transition-all duration-300 bg-white rounded-xl">
                <CardContent className="p-10">
                  <div className="w-14 h-14 rounded-lg bg-red-50 flex items-center justify-center text-red-900 mb-6 font-bold text-xl shadow-sm">
                    <Rocket className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-xl md:text-3xl md:text-4xl text-foreground mb-4">Portfolio-Ready Work</h3>
                  <p className="text-base md:text-lg text-foreground/70 leading-relaxed font-light">
                    Build a portfolio of real projects that demonstrate your capabilities to employers and future collaborators.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How to Get Involved Section */}
        <section className="bg-white border-t border-border py-32 md:py-40" data-section="get-involved">
          <div className="container">
            <h2 className="font-serif font-bold text-5xl md:text-6xl text-foreground mb-16">How to Get Involved</h2>
            <div className="space-y-12">
              <div className="flex gap-8">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-red-900 text-white font-bold text-xl">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-3xl md:text-4xl md:text-3xl text-foreground mb-3">Apply to Join</h3>
                  <p className="text-base md:text-lg text-foreground/70 leading-relaxed font-light">
                    Complete an application form to become a member. Students interested in leadership opportunities should indicate this in their application.
                  </p>
                </div>
              </div>

              <div className="flex gap-8">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-red-900 text-white font-bold text-xl">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-3xl md:text-4xl md:text-3xl text-foreground mb-3">Attend an Info Session</h3>
                  <p className="text-base md:text-lg text-foreground/70 leading-relaxed font-light">
                    Join an information meeting to learn more about the club structure, teams, and expectations.
                  </p>
                </div>
              </div>

              <div className="flex gap-8">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-red-900 text-white font-bold text-xl">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-3xl md:text-4xl md:text-3xl text-foreground mb-3">Propose a Project</h3>
                  <p className="text-base md:text-lg text-foreground/70 leading-relaxed font-light">
                    Members with an idea for a startup collaboration or internal initiative may submit a project proposal for consideration. Choose between Launch Teams or Innovation Teams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section className="bg-white border-t border-border py-32 md:py-40" data-section="events">
          <div className="container">
            <h2 className="font-serif font-bold text-5xl md:text-6xl text-foreground mb-16">Upcoming Events</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <a href="https://www.instagram.com/p/DVMmqHYjkrT/" target="_blank" rel="noopener noreferrer" className="block">
                <Card className="border border-border hover:border-red-900/30 transition-all duration-300 bg-white rounded-xl h-full hover:shadow-lg cursor-pointer">
                  <CardContent className="p-10">
                    <div className="text-sm font-bold text-red-900 mb-2">Info Session</div>
                    <h3 className="font-bold text-lg text-foreground mb-2">Launch Labs Overview</h3>
                    <p className="text-base md:text-lg text-foreground/70 leading-relaxed font-light">View details on Instagram</p>
                  </CardContent>
                </Card>
              </a>

              <Card className="border border-border hover:border-border transition-all duration-300 bg-white rounded-xl">
                <CardContent className="p-10">
                  <div className="text-sm font-bold text-red-900 mb-2">Application Deadline</div>
                  <h3 className="font-bold text-lg text-foreground mb-2">Spring 2026 Cohort</h3>
                  <p className="text-foreground/70 text-sm mb-4">Submit your application to join our next cohort of Launch Teams and Innovation Teams.</p>
                  <p className="text-xs text-foreground/50">Date coming soon</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Instagram Feed Section */}
        <section className="bg-white border-t border-border py-32 md:py-40" data-section="instagram">
          <div className="container">
            <h2 className="font-serif font-bold text-5xl md:text-6xl text-foreground mb-16">Latest from Instagram</h2>
            <InstagramFeed />
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white border-t border-border py-32 md:py-40" data-section="cta">
          <div className="container">
            <div className="p-12 bg-gradient-to-br from-red-50 to-white border border-red-900/10 rounded-xl text-center">
              <p className="text-foreground font-semibold mb-6 text-lg">Ready to get started?</p>
              <Button asChild>
                <Link href="/forms" className="bg-red-900 hover:bg-red-900 text-white font-bold px-10 h-12 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center justify-center gap-2">
                  Join Now
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-border py-20">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-16 mb-16">
            <div>
              <h4 className="font-serif font-bold text-foreground mb-6">Launch Labs</h4>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Connecting students across disciplines to work on real-world projects.
              </p>
            </div>
            <div>
              <h4 className="font-serif font-bold text-foreground mb-6">Teams</h4>
              <ul className="space-y-3">
                <li><Link href="/launch-teams" className="text-foreground/70 hover:text-red-900 text-sm transition-colors">Launch Teams</Link></li>
                <li><Link href="/innovation-teams" className="text-foreground/70 hover:text-red-900 text-sm transition-colors">Innovation Teams</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-bold text-foreground mb-6">Organization</h4>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-foreground/70 hover:text-red-900 text-sm transition-colors">About</Link></li>
                <li><Link href="/leadership" className="text-foreground/70 hover:text-red-900 text-sm transition-colors">Leadership</Link></li>
                <li><Link href="/partners" className="text-foreground/70 hover:text-red-900 text-sm transition-colors">Partners</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-bold text-foreground mb-6">Connect</h4>
              <ul className="space-y-3">
                <li><a href="mailto:NU-launchlabs@northeastern.edu" className="text-foreground/70 hover:text-red-900 text-sm transition-colors">Email</a></li>
                <li><a href="https://www.linkedin.com/company/nulaunchlabs/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-red-900 text-sm transition-colors">LinkedIn</a></li>
                <li><a href="https://www.instagram.com/nulaunchlabs/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-red-900 text-sm transition-colors">Instagram</a></li>
                <li><a href="https://discord.gg/EVSEDPDv" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-red-900 text-sm transition-colors">Discord</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8">
            <p className="text-foreground/50 text-xs text-center">
              © 2026 Northeastern Launch Labs. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
