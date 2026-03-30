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
        <section className="bg-white py-32 md:py-40">
          <div className="container text-center">
            <h1 className="font-serif font-bold text-6xl md:text-5xl text-foreground mb-8 leading-tight">
              Get In Touch
            </h1>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto">
              Have questions? Want to collaborate? Reach out to us directly.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white border-t border-border py-32 md:py-40">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div className="space-y-6">
                <h2 className="font-sans font-bold text-3xl text-foreground mb-8">Contact Us</h2>

                {/* Email */}
                <Card className="border border-border border-border hover:border-border transition-all duration-300">
                  <CardContent className="p-10">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12  bg-white flex items-center justify-center text-[#C8102E] flex-shrink-0">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-foreground mb-2">Email</h3>
                        <a href="mailto:NU-launchlabs@northeastern.edu" className="text-[#C8102E] hover:text-[#C8102E] transition-colors font-medium break-all">
                          NU-launchlabs@northeastern.edu
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Links */}
                <Card className="border border-border border-border hover:border-border transition-all duration-300">
                  <CardContent className="p-10">
                    <h3 className="font-bold text-lg text-foreground mb-6">Follow Us</h3>
                    <div className="space-y-3">
                      <a href="https://www.linkedin.com/company/nulaunchlabs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground/70 hover:text-[#C8102E] transition-colors font-medium">
                        <Linkedin size={20} className="text-[#C8102E]" />
                        LinkedIn
                      </a>
                      <a href="https://instagram.com/nulaunchlabs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground/70 hover:text-[#C8102E] transition-colors font-medium">
                        <Instagram size={20} className="text-[#C8102E]" />
                        Instagram
                      </a>
                      <a href="https://discord.gg/EVSEDPDv" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground/70 hover:text-[#C8102E] transition-colors font-medium">
                        <MessageCircle size={20} className="text-[#C8102E]" />
                        Discord
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions */}
              <div className="space-y-6">
                <h2 className="font-sans font-bold text-3xl text-foreground mb-8">Next Steps</h2>

                <Card className="border border-border border-border hover:border-border transition-all duration-300">
                  <CardContent className="p-10">
                    <h3 className="font-bold text-lg text-foreground mb-3">Ready to Apply?</h3>
                    <p className="text-foreground/70 mb-6">
                      Check out our application forms and join Launch Labs.
                    </p>
                    <Link href="/forms">
                      <Button className="w-full bg-[#C8102E] hover:bg-[#C8102E] text-black font-bold h-10  inline-flex items-center justify-center gap-2 transition-all duration-200 shadow-sm hover:shadow-lg">
                        View Forms
                        <ArrowRight size={16} />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="border border-border border-border hover:border-border transition-all duration-300">
                  <CardContent className="p-10">
                    <h3 className="font-bold text-lg text-foreground mb-3">Explore Teams</h3>
                    <p className="text-foreground/70 mb-6">
                      Learn more about our Launch and Innovation teams.
                    </p>
                    <Link href="/launch-teams">
                      <Button className="w-full bg-[#C8102E] hover:bg-[#C8102E] text-black font-bold h-10  inline-flex items-center justify-center gap-2 transition-all duration-200 shadow-sm hover:shadow-lg">
                        View Teams
                        <ArrowRight size={16} />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
