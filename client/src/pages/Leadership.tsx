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
        <section className="bg-white py-32 md:py-40">
          <div className="container">
            <h1 className="font-serif font-bold text-6xl md:text-5xl text-foreground mb-8 leading-tight">
              Our Leadership
            </h1>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl font-medium">
              Meet the students driving Launch Labs forward and making real impact across the Northeastern community.
            </p>
          </div>
        </section>

        {/* Join Leadership CTA */}
        <section className="bg-white border-t border-border py-32 md:py-40">
          <div className="container">
            <Card className="border border-border hover:border-border transition-all duration-300 bg-white">
              <CardContent className="p-12 text-center">
                <h2 className="font-sans font-bold text-3xl text-foreground mb-4">Join Our Leadership Team</h2>
                <p className="text-foreground/70 mb-10 max-w-2xl mx-auto">
                  Interested in leading Launch Labs? We are always looking for passionate students to help drive our mission forward.
                </p>
                <Link href="/forms">
                  <Button className="bg-[#C8102E] hover:bg-[#C8102E] text-black font-bold px-8 h-12  shadow-sm hover:shadow-lg inline-flex items-center gap-2 transition-all duration-200">
                    Apply for Leadership
                    <ArrowRight size={18} />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-border py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-16 mb-12">
            <div>
              <h4 className="font-bold text-foreground mb-4">Launch Labs</h4>
              <p className="text-base md:text-lg text-foreground/70 font-light leading-relaxed">
                Northeastern University's hub for real-world project work.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Explore</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/" className="text-foreground/70 hover:text-[#C8102E] transition-colors font-medium">Home</Link></li>
                <li><Link href="/about" className="text-foreground/70 hover:text-[#C8102E] transition-colors font-medium">About</Link></li>
                <li><Link href="/launch-teams" className="text-foreground/70 hover:text-[#C8102E] transition-colors font-medium">Launch Teams</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Get Involved</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/forms" className="text-foreground/70 hover:text-[#C8102E] transition-colors font-medium">Apply</Link></li>
                <li><Link href="/innovation-teams" className="text-foreground/70 hover:text-[#C8102E] transition-colors font-medium">Innovation Teams</Link></li>
                <li><Link href="/partners" className="text-foreground/70 hover:text-[#C8102E] transition-colors font-medium">Partners</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Connect</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/contact" className="text-foreground/70 hover:text-[#C8102E] transition-colors font-medium">Contact</Link></li>
                <li><a href="https://www.linkedin.com/company/nulaunchlabs/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-[#C8102E] transition-colors font-medium">LinkedIn</a></li>
                <li><a href="https://www.instagram.com/nulaunchlabs/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-[#C8102E] transition-colors font-medium">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-base md:text-lg text-foreground/70 font-light">
            <p>&copy; 2026 Northeastern Launch Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
