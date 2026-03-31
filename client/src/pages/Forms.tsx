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
        <section className="section-padding bg-white border-b-4 border-[#C8102E]">
          <div className="container">
            <h1 className="text-7xl md:text-8xl font-black text-black mb-8 leading-tight">
              Get Involved
            </h1>
            <p className="text-2xl text-black/70 leading-relaxed max-w-3xl font-light">
              Join Northeastern Launch Labs and start working on real-world projects.
            </p>
          </div>
        </section>

        {/* Quick Links */}
        <section className="section-padding-sm bg-[#F5F5F5] border-b-2 border-[#D0D0D0]">
          <div className="container">
            <h3 className="text-xl font-black text-black mb-8 uppercase tracking-wider">Quick Links</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=gcLuqKOqrk2sm5o5i5IV58t6J076SB1BnXzyi1fYH2VUOVlLR1RJSllIQUFSWFBLSDdBNjg2Wk5IOS4u" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center justify-center gap-2">
                Interest Form
                <ArrowRight size={18} />
              </a>
              <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=gcLuqKOqrk2sm5o5i5IV58t6J076SB1BnXzyi1fYH2VUNVU1NFZPWkNMSlU3NFlQRlpGNVhWR1lQVS4u" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center justify-center gap-2">
                Launch Team App
                <ArrowRight size={18} />
              </a>
              <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=gcLuqKOqrk2sm5o5i5IV5-Bq-_-Nf69MkfguH-cGnHlUMldMQk9PVVU4Q0xFSlhYUzVGQU1LRTJQNS4u" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center justify-center gap-2">
                Innovation App
                <ArrowRight size={18} />
              </a>
              <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=gcLuqKOqrk2sm5o5i5IV58t6J076SB1BnXzyi1fYH2VUQVA4SFlMRTBXUVVKRk9aSFJKUjdGNVhKWS4u" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center justify-center gap-2">
                Leadership App
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* Join Section */}
        <section className="section-padding bg-white">
          <div className="container">
            <h2 className="text-6xl md:text-7xl font-black text-black mb-16">Join</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Launch Teams */}
              <Card className="border-l-8 border-l-[#C8102E] hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-10">
                  <div className="icon-box mb-6">
                    <FileText className="w-7 h-7" />
                  </div>
                  <h3 className="text-4xl font-black text-black mb-6">Launch Team Application</h3>
                  <p className="text-black/70 text-lg leading-relaxed mb-8">
                    Apply to work directly with startups on real-world product development, implementation, and iterative testing.
                  </p>
                  <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=gcLuqKOqrk2sm5o5i5IV58t6J076SB1BnXzyi1fYH2VUNVU1NFZPWkNMSlU3NFlQRlpGNVhWR1lQVS4u" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-[#C8102E] font-black hover:gap-4 transition-all duration-200 uppercase tracking-wider">
                    Apply Now
                    <ArrowRight size={20} />
                  </a>
                </CardContent>
              </Card>

              {/* Innovation Teams */}
              <Card className="border-l-8 border-l-[#CCFF00] hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-10">
                  <div className="icon-box-accent mb-6">
                    <Lightbulb className="w-7 h-7" />
                  </div>
                  <h3 className="text-4xl font-black text-black mb-6">Innovation Team Application</h3>
                  <p className="text-black/70 text-lg leading-relaxed mb-8">
                    Apply to lead end-to-end projects designed to mirror real-world professional work and build your leadership skills.
                  </p>
                  <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=gcLuqKOqrk2sm5o5i5IV5-Bq-_-Nf69MkfguH-cGnHlUMldMQk9PVVU4Q0xFSlhYUzVGQU1LRTJQNS4u" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-[#CCFF00] font-black hover:gap-4 transition-all duration-200 uppercase tracking-wider">
                    Apply Now
                    <ArrowRight size={20} />
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="section-padding bg-[#0F172A]">
          <div className="container">
            <h2 className="text-6xl md:text-7xl font-black text-white mb-12">Leadership Opportunities</h2>
            <Card className="border-l-8 border-l-[#CCFF00]">
              <CardContent className="p-12">
                <div className="flex gap-8 items-start">
                  <div className="icon-box-accent flex-shrink-0">
                    <Heart className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-4xl font-black text-black mb-6">Leadership Application</h3>
                    <p className="text-black/70 text-lg leading-relaxed mb-8">
                      Are you passionate about building community and driving innovation? Apply to join our leadership team. We're looking for students who want to help shape the future of Northeastern Launch Labs.
                    </p>
                    <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=gcLuqKOqrk2sm5o5i5IV58t6J076SB1BnXzyi1fYH2VUQVA4SFlMRTBXUVVKRk9aSFJKUjdGNVhKWS4u" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-[#C8102E] font-black hover:gap-4 transition-all duration-200 uppercase tracking-wider">
                      Apply Now
                      <ArrowRight size={20} />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-white">
          <div className="container">
            <h2 className="text-6xl md:text-7xl font-black text-black mb-16">Frequently Asked Questions</h2>
            <div className="space-y-6 max-w-4xl">
              <Card className="border-l-8 border-l-[#C8102E] hover:shadow-xl transition-all duration-300">
                <CardContent className="p-10">
                  <h3 className="text-2xl font-black text-black mb-4">What's the difference between Launch Teams and Innovation Teams?</h3>
                  <p className="text-black/70 text-lg leading-relaxed">
                    Launch Teams work directly with external startups on real product development. Innovation Teams focus on internally scoped projects designed to mirror real-world professional work. Both provide hands-on experience and skill development.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-8 border-l-[#CCFF00] hover:shadow-xl transition-all duration-300">
                <CardContent className="p-10">
                  <h3 className="text-2xl font-black text-black mb-4">Do I need prior experience to apply?</h3>
                  <p className="text-black/70 text-lg leading-relaxed">
                    No! We welcome students from all disciplines and experience levels. Whether you're an engineer, designer, business student, or something else entirely, we have opportunities for you.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-8 border-l-[#C8102E] hover:shadow-xl transition-all duration-300">
                <CardContent className="p-10">
                  <h3 className="text-2xl font-black text-black mb-4">How much time does this require?</h3>
                  <p className="text-black/70 text-lg leading-relaxed">
                    Time commitment varies by project and team, typically 3-5 hours per week. We'll discuss expectations during the application process and matching phase to ensure it works with your schedule.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-8 border-l-[#CCFF00] hover:shadow-xl transition-all duration-300">
                <CardContent className="p-10">
                  <h3 className="text-2xl font-black text-black mb-4">Can I apply for both Launch and Innovation Teams?</h3>
                  <p className="text-black/70 text-lg leading-relaxed">
                    Yes! You can express interest in both. During the matching process, we'll help you find the best fit based on your interests and availability.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-8 border-l-[#C8102E] hover:shadow-xl transition-all duration-300">
                <CardContent className="p-10">
                  <h3 className="text-2xl font-black text-black mb-4">When are applications open?</h3>
                  <p className="text-black/70 text-lg leading-relaxed">
                    We accept applications on a rolling basis throughout the year. Check back regularly for updates on application windows and deadlines.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-[#C8102E]">
          <div className="container text-center">
            <h2 className="text-6xl md:text-7xl font-black text-white mb-8">Ready to Get Started?</h2>
            <p className="text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-light">
              Apply to join a team or propose your own project. We're excited to work with you!
            </p>
            <Link href="/contact" className="inline-block">
              <Button className="bg-white text-[#C8102E] font-black px-10 py-4 hover:bg-[#F5F5F5] transition-all inline-flex items-center gap-3 uppercase tracking-wider">
                Have Questions? Contact Us
                <ArrowRight size={20} />
              </Button>
            </Link>
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
