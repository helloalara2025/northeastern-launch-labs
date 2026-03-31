import Navigation from "@/components/sections/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Briefcase, TrendingUp, CheckCircle } from "lucide-react";

export default function LaunchTeams() {
  const currentPartners = [
    {
      id: 1,
      title: "FinTech Market Dynamics",
      theme: "Finance",
      status: "Discovery",
      focus: "Competitor mapping & API research",
      bullets: [
        "Mapping competitive landscape in payment processing",
        "Researching third-party API integrations",
        "Analyzing market trends and opportunities"
      ]
    },
    {
      id: 2,
      title: "Healthcare Systems",
      theme: "Healthcare",
      status: "Coming Soon",
      focus: "Patient data management",
      bullets: [
        "Building secure data infrastructure",
        "Designing user-centric interfaces",
        "Implementing compliance frameworks"
      ],
      isPlaceholder: true
    },
    {
      id: 3,
      title: "E-commerce Optimization",
      theme: "Retail",
      status: "Coming Soon",
      focus: "Conversion rate optimization",
      bullets: [
        "Analyzing user behavior patterns",
        "A/B testing checkout flows",
        "Implementing personalization engines"
      ],
      isPlaceholder: true
    }
  ];

  return (
    <div>
      <Navigation />
      <main className="pt-24">
        {/* Header */}
        <section className="section-padding bg-white border-b-4 border-[#C8102E]">
          <div className="container">
            <h1 className="text-7xl md:text-8xl font-black text-black mb-8 leading-tight">
              Launch Teams
            </h1>
            <p className="text-2xl text-black/70 leading-relaxed max-w-3xl font-light">
              Partner directly with early-stage startups to design, build, and deliver real-world solutions.
            </p>
          </div>
        </section>

        {/* What We Do */}
        <section className="section-padding bg-[#0F172A]">
          <div className="container">
            <h2 className="text-6xl md:text-7xl font-black text-white mb-16">What We Do</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-l-8 border-l-[#C8102E] hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-10">
                  <div className="icon-box mb-6">
                    <Briefcase className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-black text-black mb-4">Product Development</h3>
                  <p className="text-black/70 text-lg leading-relaxed">
                    Build and iterate on startup products with hands-on development work alongside founders.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-8 border-l-[#CCFF00] hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-10">
                  <div className="icon-box-accent mb-6">
                    <TrendingUp className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-black text-black mb-4">Market Research</h3>
                  <p className="text-black/70 text-lg leading-relaxed">
                    Analyze competitive landscapes, market trends, and opportunities for growth.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-8 border-l-[#C8102E] hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-10">
                  <div className="icon-box mb-6">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-black text-black mb-4">Real Impact</h3>
                  <p className="text-black/70 text-lg leading-relaxed">
                    Deliver tangible results that directly contribute to startup success.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Current Partners */}
        <section className="section-padding bg-white">
          <div className="container">
            <h2 className="text-6xl md:text-7xl font-black text-black mb-16">Current Partners</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {currentPartners.map((partner) => (
                <Card 
                  key={partner.id}
                  className={`border-l-8 hover:shadow-2xl transition-all duration-300 ${
                    partner.isPlaceholder 
                      ? 'border-l-[#CCFF00] opacity-75' 
                      : 'border-l-[#C8102E]'
                  }`}
                >
                  <CardContent className="p-10">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-black text-black flex-1">{partner.title}</h3>
                      <span className="badge ml-2">{partner.status}</span>
                    </div>
                    <p className="text-sm font-black text-[#C8102E] uppercase tracking-wider mb-4">{partner.theme}</p>
                    <p className="text-black/70 text-lg font-semibold mb-6">{partner.focus}</p>
                    <ul className="space-y-3">
                      {partner.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex gap-3 text-black/70 text-lg">
                          <span className="text-[#C8102E] font-black">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How to Apply */}
        <section className="section-padding bg-[#F5F5F5]">
          <div className="container">
            <h2 className="text-6xl md:text-7xl font-black text-black mb-16">How to Apply</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { step: "1", title: "Express Interest", desc: "Fill out the interest form to learn more about Launch Teams" },
                { step: "2", title: "Application", desc: "Complete the Launch Team application with your background and interests" },
                { step: "3", title: "Matching", desc: "Get matched with a team that aligns with your skills and goals" }
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 bg-[#C8102E] text-white font-black text-3xl flex items-center justify-center mx-auto mb-6">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-black text-black mb-3">{item.title}</h3>
                  <p className="text-black/70 text-lg leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Button asChild>
                <Link href="/forms" className="btn-primary inline-flex items-center gap-3">
                  Start Your Application
                  <ArrowRight size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-[#C8102E]">
          <div className="container text-center">
            <h2 className="text-6xl md:text-7xl font-black text-white mb-8">Ready to Partner With Us?</h2>
            <p className="text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-light">
              Join a Launch Team and work directly with startups on real-world challenges.
            </p>
            <Button asChild>
              <Link href="/forms" className="bg-white text-[#C8102E] font-black px-10 py-4 hover:bg-[#F5F5F5] transition-all inline-flex items-center gap-3 uppercase tracking-wider">
                Apply Now
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
