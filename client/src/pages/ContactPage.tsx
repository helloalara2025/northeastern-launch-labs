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
      <footer className="bg-secondary border-t border-[rgba(255,255,255,0.1)] py-20">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-16 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(255,255,255,0.1)] bg-primary mb-6">
                <span className="w-2 h-2 rounded-full bg-red"></span>
                <span className="text-xs font-mono text-muted uppercase tracking-wider">Launch Labs</span>
              </div>
              <p className="text-muted leading-relaxed">
                Northeastern University's hub for real-world project work.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-mono text-white uppercase tracking-widest mb-6">Explore</h4>
              <ul className="space-y-4">
                <li><Link href="/"><a className="text-muted hover:text-yellow transition-colors">Home</a></Link></li>
                <li><Link href="/about"><a className="text-muted hover:text-yellow transition-colors">About</a></Link></li>
                <li><Link href="/launch-teams"><a className="text-muted hover:text-yellow transition-colors">Launch Teams</a></Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-mono text-white uppercase tracking-widest mb-6">Get Involved</h4>
              <ul className="space-y-4">
                <li><Link href="/forms"><a className="text-muted hover:text-yellow transition-colors">Apply</a></Link></li>
                <li><Link href="/leadership"><a className="text-muted hover:text-yellow transition-colors">Leadership</a></Link></li>
                <li><Link href="/innovation-teams"><a className="text-muted hover:text-yellow transition-colors">Innovation Teams</a></Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-mono text-white uppercase tracking-widest mb-6">Connect</h4>
              <ul className="space-y-4">
                <li><a href="https://www.linkedin.com/company/nulaunchlabs/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-yellow transition-colors">LinkedIn</a></li>
                <li><a href="https://www.instagram.com/nulaunchlabs/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-yellow transition-colors">Instagram</a></li>
                <li><a href="https://discord.gg/EVSEDPDv" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-yellow transition-colors">Discord</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[rgba(255,255,255,0.1)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted text-sm font-mono">
              &copy; 2026 NORTHEASTERN LAUNCH LABS.
            </p>
            <p className="text-muted text-sm font-mono">
              BUILD REAL THINGS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
