import Navigation from "@/components/sections/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, TrendingUp, Zap, Clock } from "lucide-react";
import { Link } from "wouter";

export default function Partners() {
  return (
    <div>
      <Navigation />
      <main className="pt-16">
        {/* Header */}
        <section className="bg-white py-20 md:py-28">
          <div className="container max-w-4xl">
            <h1 className="font-sans font-bold text-5xl md:text-6xl text-foreground mb-6">
              Our Startup Partners
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Launch Labs works with forward-thinking startups committed to providing meaningful learning experiences.
            </p>
          </div>
        </section>

        {/* Why Partner Section */}
        <section className="bg-foreground/5 border-t border-foreground/10 py-20 md:py-28">
          <div className="container max-w-4xl">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-12">
              Why Partner With Us?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border border-foreground/10 shadow-none hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center text-red-800 mb-4">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-3">Skilled Student Teams</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Access talented students from all programs—engineering, design, business, and more.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-foreground/10 shadow-none hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center text-red-800 mb-4">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-3">Cost-Effective Development</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    High-quality work for early-stage ventures at a fraction of traditional agency costs.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-foreground/10 shadow-none hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center text-red-800 mb-4">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-3">Fresh Perspectives</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Students bring emerging technologies and new approaches to your challenges.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-foreground/10 shadow-none hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center text-red-800 mb-4">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-3">Flexible Commitment</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Semester-long engagements with defined scope that fits your timeline.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Current Partners */}
        <section className="bg-white border-t border-foreground/10 py-20 md:py-28">
          <div className="container max-w-4xl">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-8">
              Current Startup Partners
            </h2>
            <div className="bg-foreground/5 border border-foreground/10 rounded-lg p-8 text-center">
              <p className="text-foreground/70">
                Partner profiles and logos coming soon. Check back for information about our current startup collaborations.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-foreground/5 border-t border-foreground/10 py-20 md:py-28">
          <div className="container max-w-4xl">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-12">
              How It Works
            </h2>
            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-red-800 text-white font-bold">
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
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-red-800 text-white font-bold">
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
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-red-800 text-white font-bold">
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
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-red-800 text-white font-bold">
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
        <section className="bg-red-50 border-t border-red-200 py-20 md:py-28">
          <div className="container max-w-4xl text-center">
            <h2 className="font-bold text-3xl text-foreground mb-4">Interested in Partnering?</h2>
            <p className="text-foreground/70 mb-8">
              Let's talk about how Launch Labs can support your startup's growth.
            </p>
            <Link href="/contact">
              <Button className="bg-red-800 hover:bg-red-900 text-white font-bold px-8 h-12 rounded-lg">
                Get in Touch
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-foreground/10 py-12">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-foreground mb-4">Launch Labs</h4>
              <p className="text-sm text-foreground/70">
                Northeastern University's hub for real-world project work.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Explore</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="text-foreground/70 hover:text-red-800 transition-colors">Home</a></li>
                <li><a href="/about" className="text-foreground/70 hover:text-red-800 transition-colors">About</a></li>
                <li><a href="/launch-teams" className="text-foreground/70 hover:text-red-800 transition-colors">Launch Teams</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Get Involved</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/forms" className="text-foreground/70 hover:text-red-800 transition-colors">Apply</a></li>
                <li><a href="/leadership" className="text-foreground/70 hover:text-red-800 transition-colors">Leadership</a></li>
                <li><a href="/innovation-teams" className="text-foreground/70 hover:text-red-800 transition-colors">Innovation Teams</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/contact" className="text-foreground/70 hover:text-red-800 transition-colors">Contact</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-red-800 transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-red-800 transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-foreground/10 pt-8 text-center text-sm text-foreground/70">
            <p>&copy; 2025 Northeastern Launch Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
