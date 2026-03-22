import Navigation from "@/components/sections/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, TrendingUp, Zap, Clock, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Partners() {
  return (
    <div>
      <Navigation />
      <main className="pt-16">
        {/* Header */}
        <section className="bg-white py-32 md:py-40">
          <div className="container">
            <h1 className="font-serif font-bold text-6xl md:text-7xl text-foreground mb-8 leading-tight">
              Our Startup Partners
            </h1>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl">
              Launch Labs works with forward-thinking startups committed to providing meaningful learning experiences.
            </p>
          </div>
        </section>

        {/* Why Partner Section */}
        <section className="bg-white border-t border-border py-32 md:py-40">
          <div className="container">
            <h2 className="font-serif font-bold text-5xl md:text-6xl text-foreground mb-16">
              Why Partner With Us?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border border-foreground/10 shadow-none hover:shadow-md transition-shadow">
                <CardContent className="p-10">
                  <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-red-900 mb-6">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-3">Skilled Student Teams</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Access talented students from all programs—engineering, design, business, and more.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-foreground/10 shadow-none hover:shadow-md transition-shadow">
                <CardContent className="p-10">
                  <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-red-900 mb-6">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-3">Cost-Effective Development</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    High-quality work for early-stage ventures at a fraction of traditional agency costs.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-foreground/10 shadow-none hover:shadow-md transition-shadow">
                <CardContent className="p-10">
                  <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-red-900 mb-6">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-3">Fresh Perspectives</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Students bring emerging technologies and new approaches to your challenges.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-foreground/10 shadow-none hover:shadow-md transition-shadow">
                <CardContent className="p-10">
                  <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-red-900 mb-6">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-3">Flexible Commitment</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Semester-long engagements with defined scope that fits your timeline.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Current Partners */}
        <section className="bg-white border-t border-border py-32 md:py-40">
          <div className="container">
            <h2 className="font-serif font-bold text-5xl md:text-6xl text-foreground mb-10">
              Current Startup Partners
            </h2>
            <div className="bg-foreground/5 border border-foreground/10 rounded-xl p-10 text-center">
              <p className="text-foreground/70 text-lg">
                Partner profiles and logos coming soon. Check back for information about our current startup collaborations.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-white border-t border-border py-32 md:py-40">
          <div className="container">
            <h2 className="font-serif font-bold text-5xl md:text-6xl text-foreground mb-16">
              How It Works
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-900 text-white font-bold text-lg">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2">Initial Consultation</h3>
                  <p className="text-foreground/70">
                    We discuss your project scope, timeline, and team needs to ensure the right fit.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-900 text-white font-bold text-lg">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2">Team Formation</h3>
                  <p className="text-foreground/70">
                    We assemble a cross-functional team of students with the skills and interests for your project.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-900 text-white font-bold text-lg">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2">Execution</h3>
                  <p className="text-foreground/70">
                    Your team works on the project with regular check-ins and support from Launch Labs leadership.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-900 text-white font-bold text-lg">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2">Delivery & Feedback</h3>
                  <p className="text-foreground/70">
                    Project completion with final presentation and feedback session with your team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gray-100 border-t border-border py-32 md:py-40">
          <div className="container text-center">
            <h2 className="font-bold text-3xl text-foreground mb-4">Interested in Partnering?</h2>
            <p className="text-foreground/70 mb-10 text-lg">
              Let's talk about how Launch Labs can support your startup's growth.
            </p>
            <Link href="/contact">
              <Button className="bg-red-900 hover:bg-red-900 text-white font-bold px-8 h-12 rounded-lg shadow-md hover:shadow-lg inline-flex items-center gap-2">
                Get in Touch
                <ArrowRight size={18} />
              </Button>
            </Link>
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
                <li><Link href="/" className="text-foreground/70 hover:text-red-900 transition-colors font-medium">Home</Link></li>
                <li><Link href="/about" className="text-foreground/70 hover:text-red-900 transition-colors font-medium">About</Link></li>
                <li><Link href="/launch-teams" className="text-foreground/70 hover:text-red-900 transition-colors font-medium">Launch Teams</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Get Involved</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/forms" className="text-foreground/70 hover:text-red-900 transition-colors font-medium">Apply</Link></li>
                <li><Link href="/leadership" className="text-foreground/70 hover:text-red-900 transition-colors font-medium">Leadership</Link></li>
                <li><Link href="/innovation-teams" className="text-foreground/70 hover:text-red-900 transition-colors font-medium">Innovation Teams</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Connect</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/contact" className="text-foreground/70 hover:text-red-900 transition-colors font-medium">Contact</Link></li>
                <li><a href="#" className="text-foreground/70 hover:text-red-900 transition-colors font-medium">LinkedIn</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-red-900 transition-colors font-medium">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-base md:text-lg text-foreground/70 font-light">
            <p>&copy; 2025 Northeastern Launch Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
