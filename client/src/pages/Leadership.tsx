import Navigation from "@/components/sections/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Leadership() {
  return (
    <div>
      <Navigation />
      <main className="pt-16">
        {/* Header */}
        <section className="section-padding bg-white border-b-4 border-[#C8102E]">
          <div className="container">
            <h1 className="text-7xl md:text-8xl font-black text-black mb-8 leading-tight">
              Our Leadership
            </h1>
            <p className="text-2xl text-black/70 leading-relaxed max-w-3xl font-light">
              Meet the students driving Launch Labs forward and making real impact across the Northeastern community.
            </p>
          </div>
        </section>

        {/* Leadership CTA */}
        <section className="section-padding bg-[#0F172A]">
          <div className="container">
            <Card className="border-l-8 border-l-[#CCFF00] hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-16 text-center">
                <h2 className="text-5xl md:text-6xl font-black text-black mb-6">Join Our Leadership Team</h2>
                <p className="text-2xl text-black/70 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                  Interested in leading Launch Labs? We are always looking for passionate students to help drive our mission forward and shape the future of the organization.
                </p>
                <Link href="/forms">
                  <Button className="btn-primary inline-flex items-center gap-3">
                    Apply for Leadership
                    <ArrowRight size={20} />
                  </Button>
                </Link>
              </CardContent>
            </Card>
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
                <li><Link href="/innovation-teams" className="text-black/70 hover:text-[#C8102E] transition-colors font-medium">Innovation Teams</Link></li>
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
