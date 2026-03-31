import Navigation from "@/components/sections/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div>
      <Navigation />
      <main className="pt-24">
        {/* Header */}
        <section className="section-padding bg-white border-b-4 border-[#C8102E]">
          <div className="container">
            <h1 className="text-7xl md:text-8xl font-black text-black mb-8 leading-tight">
              About Launch Labs
            </h1>
            <p className="text-2xl text-black/70 leading-relaxed max-w-3xl font-light">
              Northeastern Launch Labs brings together students across disciplines and experience levels to work on real-world, end-to-end projects that bridge classroom learning with practical impact.
            </p>
          </div>
        </section>

        {/* Our Mission */}
        <section className="section-padding bg-[#0F172A]">
          <div className="container">
            <h2 className="text-6xl md:text-7xl font-black text-white mb-16">Our Mission</h2>
            <div className="space-y-8 max-w-4xl">
              <p className="text-2xl text-white/90 font-light leading-relaxed">
                Our goal is to bring together students across disciplines and experience levels to work on real-world, end-to-end projects that bridge classroom learning with practical impact.
              </p>
              <p className="text-2xl text-white/90 font-light leading-relaxed">
                Through Launch Teams partnering with startups and Innovation Teams developing internal, end-to-end projects, members gain practical experience tackling real-world problems. The club emphasizes collaboration, professional skill development, and ownership, enabling students to produce portfolio-ready work, strengthen cross-functional teamwork, and explore pathways to entrepreneurship and innovation within and beyond the Northeastern community.
              </p>
            </div>
          </div>
        </section>

        {/* How to Get Involved */}
        <section className="section-padding bg-white">
          <div className="container">
            <h2 className="text-6xl md:text-7xl font-black text-black mb-16">How to Get Involved</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-l-8 border-l-[#C8102E] hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-10">
                  <h3 className="text-3xl font-black text-black mb-4">Apply to Join</h3>
                  <p className="text-black/70 text-lg leading-relaxed">
                    Complete the general application form to become a member. Students interested in leadership opportunities should indicate this in their application.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-8 border-l-[#CCFF00] hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-10">
                  <h3 className="text-3xl font-black text-black mb-4">Propose a Project</h3>
                  <p className="text-black/70 text-lg leading-relaxed">
                    Members with an idea for a startup collaboration or internal initiative may submit a project proposal for consideration.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-8 border-l-[#C8102E] hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-10">
                  <h3 className="text-3xl font-black text-black mb-4">Attend an Info Session</h3>
                  <p className="text-black/70 text-lg leading-relaxed">
                    Join an information meeting to learn more about the club structure, teams, and expectations.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-8 border-l-[#CCFF00] hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-10">
                  <h3 className="text-3xl font-black text-black mb-4">Stay Engaged</h3>
                  <p className="text-black/70 text-lg leading-relaxed">
                    Members are expected to actively contribute to their team's work, with an average time commitment of 3-5 hours per week.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="section-padding bg-[#F5F5F5]">
          <div className="container">
            <h2 className="text-6xl md:text-7xl font-black text-black mb-16">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-l-8 border-l-[#C8102E] hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-10">
                  <h3 className="text-3xl font-black text-black mb-4">Real Impact</h3>
                  <p className="text-black/70 text-lg leading-relaxed">
                    We focus on projects that create tangible value for real users and customers. Our work matters.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-8 border-l-[#CCFF00] hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-10">
                  <h3 className="text-3xl font-black text-black mb-4">Collaboration</h3>
                  <p className="text-black/70 text-lg leading-relaxed">
                    We believe the best solutions come from diverse perspectives. We bring together students from all backgrounds.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-8 border-l-[#C8102E] hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-10">
                  <h3 className="text-3xl font-black text-black mb-4">Ownership & Accountability</h3>
                  <p className="text-black/70 text-lg leading-relaxed">
                    Our members take ownership of their projects and drive outcomes. We hold ourselves to professional standards.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-8 border-l-[#CCFF00] hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-10">
                  <h3 className="text-3xl font-black text-black mb-4">Continuous Learning</h3>
                  <p className="text-black/70 text-lg leading-relaxed">
                    We embrace challenges as opportunities to grow. Every project teaches us something new.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-[#C8102E]">
          <div className="container text-center">
            <h2 className="text-6xl md:text-7xl font-black text-white mb-8">Ready to Join Us?</h2>
            <p className="text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-light">
              Become part of the Launch Labs community and start making real impact.
            </p>
            <Button asChild>
              <Link href="/forms" className="bg-white text-[#C8102E] font-black px-10 py-4 hover:bg-[#F5F5F5] transition-all inline-flex items-center gap-3 uppercase tracking-wider">
                Join Us
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t-4 border-[#C8102E] py-20">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-16 mb-16">
            <div>
              <h4 className="text-2xl font-black text-black mb-6">Launch Labs</h4>
              <p className="text-lg text-black/70 font-light leading-relaxed">
                Northeastern University's hub for real-world project work.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-black text-black mb-6 uppercase tracking-wider">Explore</h4>
              <ul className="space-y-3 text-lg">
                <li><Link href="/" className="text-black/70 hover:text-[#C8102E] transition-colors font-medium">Home</Link></li>
                <li><Link href="/launch-teams" className="text-black/70 hover:text-[#C8102E] transition-colors font-medium">Launch Teams</Link></li>
                <li><Link href="/innovation-teams" className="text-black/70 hover:text-[#C8102E] transition-colors font-medium">Innovation Teams</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-black text-black mb-6 uppercase tracking-wider">Get Involved</h4>
              <ul className="space-y-3 text-lg">
                <li><Link href="/forms" className="text-black/70 hover:text-[#C8102E] transition-colors font-medium">Apply</Link></li>
                <li><Link href="/leadership" className="text-black/70 hover:text-[#C8102E] transition-colors font-medium">Leadership</Link></li>
                <li><Link href="/partners" className="text-black/70 hover:text-[#C8102E] transition-colors font-medium">Partners</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-black text-black mb-6 uppercase tracking-wider">Connect</h4>
              <ul className="space-y-3 text-lg">
                <li><Link href="/contact" className="text-black/70 hover:text-[#C8102E] transition-colors font-medium">Contact</Link></li>
                <li><a href="https://www.linkedin.com/company/nulaunchlabs/" target="_blank" rel="noopener noreferrer" className="text-black/70 hover:text-[#C8102E] transition-colors font-medium">LinkedIn</a></li>
                <li><a href="https://www.instagram.com/nulaunchlabs/" target="_blank" rel="noopener noreferrer" className="text-black/70 hover:text-[#C8102E] transition-colors font-medium">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t-2 border-[#D0D0D0] pt-8 text-center text-lg text-black/70 font-light">
            <p>&copy; 2026 Northeastern Launch Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
