import Navigation from "@/components/sections/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, TrendingUp, Zap, Clock, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Partners() {
  return (
    <div>
      <Navigation />
      <main className="pt-24">
        {/* Header */}
        <section className="section-padding bg-white border-b-4 border-[#C8102E]">
          <div className="container">
            <h1 className="text-7xl md:text-8xl font-black text-black mb-8 leading-tight">
              Our Startup Partners
            </h1>
            <p className="text-2xl text-black/70 leading-relaxed max-w-3xl font-light">
              Launch Labs works with forward-thinking startups committed to providing meaningful learning experiences.
            </p>
          </div>
        </section>

        {/* Why Partner Section */}
        <section className="section-padding bg-[#0F172A]">
          <div className="container">
            <h2 className="text-6xl md:text-7xl font-black text-white mb-16">Why Partner With Us?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-l-8 border-l-[#C8102E] hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-10">
                  <div className="icon-box mb-6">
                    <Users className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-black text-black mb-4">Skilled Student Teams</h3>
                  <p className="text-black/70 text-lg leading-relaxed">
                    Access talented students from all programs—engineering, design, business, and more.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-8 border-l-[#CCFF00] hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-10">
                  <div className="icon-box-accent mb-6">
                    <TrendingUp className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-black text-black mb-4">Cost-Effective Development</h3>
                  <p className="text-black/70 text-lg leading-relaxed">
                    High-quality work for early-stage ventures at a fraction of traditional agency costs.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-8 border-l-[#C8102E] hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-10">
                  <div className="icon-box mb-6">
                    <Zap className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-black text-black mb-4">Fresh Perspectives</h3>
                  <p className="text-black/70 text-lg leading-relaxed">
                    Students bring emerging technologies and new approaches to your challenges.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-8 border-l-[#CCFF00] hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-10">
                  <div className="icon-box-accent mb-6">
                    <Clock className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-black text-black mb-4">Flexible Commitment</h3>
                  <p className="text-black/70 text-lg leading-relaxed">
                    Semester-long engagements with defined scope that fits your timeline.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Current Partners */}
        <section className="section-padding bg-white">
          <div className="container">
            <h2 className="text-6xl md:text-7xl font-black text-black mb-12">Current Startup Partners</h2>
            <div className="bg-[#F5F5F5] border-l-8 border-l-[#C8102E] p-12 text-center">
              <p className="text-black/70 text-2xl font-light leading-relaxed">
                Partner profiles and logos coming soon. Check back for information about our current startup collaborations.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section-padding bg-[#F5F5F5]">
          <div className="container">
            <h2 className="text-6xl md:text-7xl font-black text-black mb-16">How It Works</h2>
            <div className="space-y-8 max-w-4xl">
              {[
                { step: "1", title: "Initial Consultation", desc: "We discuss your project scope, timeline, and team needs to ensure the right fit." },
                { step: "2", title: "Team Formation", desc: "We assemble a cross-functional team of students with the skills and interests for your project." },
                { step: "3", title: "Execution", desc: "Your team works on the project with regular check-ins and support from Launch Labs leadership." },
                { step: "4", title: "Delivery & Feedback", desc: "Project completion with final presentation and feedback session with your team." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#C8102E] text-white font-black text-2xl flex items-center justify-center">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-black text-black mb-3">{item.title}</h3>
                    <p className="text-black/70 text-lg leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-[#C8102E]">
          <div className="container text-center">
            <h2 className="text-6xl md:text-7xl font-black text-white mb-8">Interested in Partnering?</h2>
            <p className="text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-light">
              Let's talk about how Launch Labs can support your startup's growth.
            </p>
            <Button asChild>
              <Link href="/contact" className="bg-white text-[#C8102E] font-black px-10 py-4 hover:bg-[#F5F5F5] transition-all inline-flex items-center gap-3 uppercase tracking-wider">
                Get in Touch
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
                <li><Link href="/about" className="text-black/70 hover:text-[#C8102E] transition-colors font-medium">About</Link></li>
                <li><Link href="/launch-teams" className="text-black/70 hover:text-[#C8102E] transition-colors font-medium">Launch Teams</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-black text-black mb-6 uppercase tracking-wider">Get Involved</h4>
              <ul className="space-y-3 text-lg">
                <li><Link href="/forms" className="text-black/70 hover:text-[#C8102E] transition-colors font-medium">Apply</Link></li>
                <li><Link href="/leadership" className="text-black/70 hover:text-[#C8102E] transition-colors font-medium">Leadership</Link></li>
                <li><Link href="/innovation-teams" className="text-black/70 hover:text-[#C8102E] transition-colors font-medium">Innovation Teams</Link></li>
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
