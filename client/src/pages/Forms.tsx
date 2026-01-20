import Navigation from "@/components/sections/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, FileText, Heart, Lightbulb } from "lucide-react";

export default function Forms() {
  return (
    <div>
      <Navigation />
      <main className="pt-24">
        {/* Header */}
        <section className="bg-white py-24 md:py-32">
          <div className="container max-w-4xl">
            <h1 className="font-sans font-bold text-6xl md:text-7xl text-foreground mb-6 leading-tight">
              Get Involved
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Join Northeastern Launch Labs and start working on real-world projects.
            </p>
          </div>
        </section>

        {/* Express Interest Section */}
        <section className="bg-foreground/5 border-t border-foreground/10 py-24 md:py-32">
          <div className="container max-w-4xl">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-10">Join</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Join Launch Teams */}
              <Card className="border-2 border-gray-300 shadow-none hover:shadow-lg transition-all">
                <CardContent className="p-10">
                  <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-red-800 mb-6">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-2xl text-foreground mb-4">Launch Team Application</h3>
                  <p className="text-foreground/70 leading-relaxed mb-8">
                    Apply to work directly with startups on real-world product development, implementation, and iterative testing.
                  </p>
                  <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=gcLuqKOqrk2sm5o5i5IV58t6J076SB1BnXzyi1fYH2VUOVlLR1RJSllIQUFSWFBLSDdBNjg2Wk5IOS4u" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-red-800 font-bold hover:gap-3 transition-all">
                    Join
                    <ArrowRight size={18} />
                  </a>
                </CardContent>
              </Card>

              {/* Join Innovation Teams */}
              <Card className="border-2 border-gray-300 shadow-none hover:shadow-lg transition-all">
                <CardContent className="p-10">
                  <div className="w-12 h-12 rounded-lg bg-gray-200 flex items-center justify-center text-gray-700 mb-6">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-2xl text-foreground mb-4">Innovation Team Application</h3>
                  <p className="text-foreground/70 leading-relaxed mb-8">
                    Apply to lead end-to-end projects designed to mirror real-world professional work and build your leadership skills.
                  </p>
                  <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=gcLuqKOqrk2sm5o5i5IV5-Bq-_-Nf69MkfguH-cGnHlUMldMQk9PVVU4Q0xFSlhYUzVGQU1LRTJQNS4u" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gray-700 font-bold hover:gap-3 transition-all">
                    Join
                    <ArrowRight size={18} />
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Leadership Application */}
        <section className="bg-white border-t border-foreground/10 py-24 md:py-32">
          <div className="container max-w-4xl">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-10">Leadership Opportunities</h2>
            <Card className="border border-foreground/10 shadow-none">
              <CardContent className="p-10">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-red-800 flex-shrink-0">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-2xl text-foreground mb-4">Leadership Application</h3>
                    <p className="text-foreground/70 leading-relaxed mb-8">
                      Are you passionate about building community and driving innovation? Apply to join our leadership team. We're looking for students who want to help shape the future of Northeastern Launch Labs.
                    </p>
                    <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=gcLuqKOqrk2sm5o5i5IV58t6J076SB1BnXzyi1fYH2VUNVU1NFZPWkNMSlU3NFlQRlpGNVhWR1lQVS4u" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-red-800 font-bold hover:gap-3 transition-all">
                      Join
                      <ArrowRight size={18} />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Propose a Project */}
        <section className="bg-foreground/5 border-t border-foreground/10 py-24 md:py-32">
          <div className="container max-w-4xl">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-10">Propose a Project</h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-10">
              Have an idea for a startup collaboration or internal initiative? We'd love to hear from you. Submit your project proposal and choose which team structure works best.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Launch Team Project */}
              <Card className="border-2 border-gray-300 shadow-none hover:shadow-lg transition-all">
                <CardContent className="p-10">
                  <h3 className="font-bold text-xl text-foreground mb-4">Startup Collaboration</h3>
                  <p className="text-foreground/70 leading-relaxed mb-8">
                    Propose a startup partnership where our Launch Team can contribute to product development and implementation.
                  </p>
                  <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=gcLuqKOqrk2sm5o5i5IV58t6J076SB1BnXzyi1fYH2VUQVA4SFlMRTBXUVVKRk9aSFJKUjdGNVhKWS4u" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-red-800 font-bold hover:gap-3 transition-all">
                    Submit Project
                    <ArrowRight size={18} />
                  </a>
                </CardContent>
              </Card>

              {/* Innovation Team Project */}
              <Card className="border-2 border-gray-300 shadow-none hover:shadow-lg transition-all">
                <CardContent className="p-10">
                  <h3 className="font-bold text-xl text-foreground mb-4">Internal Innovation Project</h3>
                  <p className="text-foreground/70 leading-relaxed mb-8">
                    Propose an internal project for our Innovation Team to tackle from problem definition through delivery.
                  </p>
                  <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=gcLuqKOqrk2sm5o5i5IV58t6J076SB1BnXzyi1fYH2VUQVA4SFlMRTBXUVVKRk9aSFJKUjdGNVhKWS4u" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gray-700 font-bold hover:gap-3 transition-all">
                    Submit Project
                    <ArrowRight size={18} />
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white border-t border-foreground/10 py-24 md:py-32">
          <div className="container max-w-4xl">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-14">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <Card className="border border-foreground/10 shadow-none">
                <CardContent className="p-8">
                  <h3 className="font-bold text-lg text-foreground mb-3">What's the difference between Launch Teams and Innovation Teams?</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Launch Teams work directly with external startups on real product development. Innovation Teams focus on internally scoped projects designed to mirror real-world professional work. Both provide hands-on experience and skill development.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-foreground/10 shadow-none">
                <CardContent className="p-8">
                  <h3 className="font-bold text-lg text-foreground mb-3">Do I need prior experience to apply?</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    No! We welcome students from all disciplines and experience levels. Whether you're an engineer, designer, business student, or something else entirely, we have opportunities for you.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-foreground/10 shadow-none">
                <CardContent className="p-8">
                  <h3 className="font-bold text-lg text-foreground mb-3">How much time does this require?</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Time commitment varies by project and team. We'll discuss expectations during the application process and matching phase to ensure it works with your schedule.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-foreground/10 shadow-none">
                <CardContent className="p-8">
                  <h3 className="font-bold text-lg text-foreground mb-3">Can I apply for both Launch and Innovation Teams?</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Yes! You can express interest in both. During the matching process, we'll help you find the best fit based on your interests and availability.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-foreground/10 shadow-none">
                <CardContent className="p-8">
                  <h3 className="font-bold text-lg text-foreground mb-3">When are applications open?</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    We accept applications on a rolling basis throughout the year. Check back regularly for updates on application windows and deadlines.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-100 border-t border-gray-300 py-24 md:py-32">
          <div className="container max-w-4xl text-center">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-foreground/70 mb-10">
              Apply to join a team or propose your own project. We're excited to work with you!
            </p>
            <Link href="/contact" className="inline-block">
              <Button className="bg-red-800 hover:bg-red-900 text-white font-bold px-8 h-12 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
                Have Questions? Contact Us
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-foreground/10 py-16">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="font-bold text-foreground mb-4">Launch Labs</h4>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Northeastern University's hub for real-world project work.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Explore</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/" className="text-foreground/70 hover:text-red-800 transition-colors font-medium">Home</Link></li>
                <li><Link href="/about" className="text-foreground/70 hover:text-red-800 transition-colors font-medium">About</Link></li>
                <li><Link href="/launch-teams" className="text-foreground/70 hover:text-red-800 transition-colors font-medium">Launch Teams</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Get Involved</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/forms" className="text-foreground/70 hover:text-red-800 transition-colors font-medium">Apply</Link></li>
                <li><Link href="/leadership" className="text-foreground/70 hover:text-red-800 transition-colors font-medium">Leadership</Link></li>
                <li><Link href="/partners" className="text-foreground/70 hover:text-red-800 transition-colors font-medium">Partners</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Connect</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/contact" className="text-foreground/70 hover:text-red-800 transition-colors font-medium">Contact</Link></li>
                <li><a href="#" className="text-foreground/70 hover:text-red-800 transition-colors font-medium">LinkedIn</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-red-800 transition-colors font-medium">Instagram</a></li>
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
