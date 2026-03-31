import Navigation from "@/components/sections/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Instagram, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function ContactPage() {
  return (
    <div>
      <Navigation />
      <main className="pt-24">
        {/* Header */}
        <section className="section-padding bg-white border-b-4 border-[#C8102E]">
          <div className="container text-center">
            <h1 className="text-7xl md:text-8xl font-black text-black mb-8 leading-tight">
              Get In Touch
            </h1>
            <p className="text-2xl text-black/70 leading-relaxed max-w-2xl mx-auto font-light">
              Have questions? Want to collaborate? Reach out to us directly.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding bg-[#0F172A]">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div className="space-y-8">
                <h2 className="text-5xl font-black text-white mb-12">Contact Us</h2>

                {/* Email */}
                <Card className="border-l-8 border-l-[#C8102E] hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-10">
                    <div className="flex items-start gap-6">
                      <div className="icon-box flex-shrink-0">
                        <Mail className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-black mb-3">Email</h3>
                        <a href="mailto:NU-launchlabs@northeastern.edu" className="text-[#C8102E] hover:text-[#A60826] transition-colors font-bold text-lg break-all">
                          NU-launchlabs@northeastern.edu
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Links */}
                <Card className="border-l-8 border-l-[#CCFF00] hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-10">
                    <h3 className="text-2xl font-black text-black mb-8">Follow Us</h3>
                    <div className="space-y-4">
                      <a href="https://www.linkedin.com/company/nulaunchlabs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-black/70 hover:text-[#C8102E] transition-colors font-bold text-lg">
                        <Linkedin size={24} className="text-[#C8102E]" />
                        LinkedIn
                      </a>
                      <a href="https://instagram.com/nulaunchlabs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-black/70 hover:text-[#C8102E] transition-colors font-bold text-lg">
                        <Instagram size={24} className="text-[#C8102E]" />
                        Instagram
                      </a>
                      <a href="https://discord.gg/EVSEDPDv" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-black/70 hover:text-[#C8102E] transition-colors font-bold text-lg">
                        <MessageCircle size={24} className="text-[#C8102E]" />
                        Discord
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions */}
              <div className="space-y-8">
                <h2 className="text-5xl font-black text-white mb-12">Next Steps</h2>

                <Card className="border-l-8 border-l-[#C8102E] hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-10">
                    <h3 className="text-2xl font-black text-black mb-4">Ready to Apply?</h3>
                    <p className="text-black/70 text-lg leading-relaxed mb-8">
                      Check out our application forms and join Launch Labs.
                    </p>
                    <Link href="/forms">
                      <Button className="btn-primary w-full inline-flex items-center justify-center gap-3">
                        View Forms
                        <ArrowRight size={18} />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="border-l-8 border-l-[#CCFF00] hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-10">
                    <h3 className="text-2xl font-black text-black mb-4">Explore Teams</h3>
                    <p className="text-black/70 text-lg leading-relaxed mb-8">
                      Learn more about our Launch and Innovation teams.
                    </p>
                    <Link href="/launch-teams">
                      <Button className="btn-secondary w-full inline-flex items-center justify-center gap-3">
                        View Teams
                        <ArrowRight size={18} />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-white">
          <div className="container text-center">
            <h2 className="text-6xl md:text-7xl font-black text-black mb-8">Questions?</h2>
            <p className="text-2xl text-black/70 mb-12 max-w-2xl mx-auto font-light">
              We're here to help. Reach out anytime and we'll get back to you as soon as possible.
            </p>
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
                <li><a href="https://www.linkedin.com/company/nulaunchlabs/" target="_blank" rel="noopener noreferrer" className="text-black/70 hover:text-[#C8102E] transition-colors font-medium">LinkedIn</a></li>
                <li><a href="https://www.instagram.com/nulaunchlabs/" target="_blank" rel="noopener noreferrer" className="text-black/70 hover:text-[#C8102E] transition-colors font-medium">Instagram</a></li>
                <li><a href="https://discord.gg/EVSEDPDv" target="_blank" rel="noopener noreferrer" className="text-black/70 hover:text-[#C8102E] transition-colors font-medium">Discord</a></li>
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
