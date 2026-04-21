import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Instagram, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function ContactPage() {
  return (
    <div className="bg-primary min-h-screen text-foreground">
      <Navigation />
      <main className="pt-24">
        {/* Header */}
        <section className="section-padding bg-primary border-b border-foreground/8">
          <div className="container text-center">
            <h1 className="text-7xl md:text-8xl font-black text-foreground mb-8 leading-tight">
              Get In Touch
            </h1>
            <p className="text-2xl text-foreground/55 leading-relaxed max-w-2xl mx-auto font-light">
              Have questions? Want to collaborate? Reach out to us directly.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding bg-secondary">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div className="space-y-8">
                <h2 className="text-5xl font-black text-foreground mb-12">Contact Us</h2>

                {/* Email */}
                <Card className="border-l-8 border-l-red hover:shadow-2xl transition-all duration-300 bg-primary">
                  <CardContent className="p-10">
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 bg-red/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-7 h-7 text-red" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-foreground mb-3">Email</h3>
                        <a href="mailto:NU-launchlabs@northeastern.edu" className="text-red hover:text-red/80 transition-colors font-bold text-lg break-all">
                          NU-launchlabs@northeastern.edu
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Links */}
                <Card className="border-l-8 border-l-yellow hover:shadow-2xl transition-all duration-300 bg-primary">
                  <CardContent className="p-10">
                    <h3 className="text-2xl font-black text-foreground mb-8">Follow Us</h3>
                    <div className="space-y-4">
                      <a href="https://www.linkedin.com/company/nulaunchlabs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground/70 hover:text-red transition-colors font-bold text-lg">
                        <Linkedin size={24} className="text-red" />
                        LinkedIn
                      </a>
                      <a href="https://instagram.com/nulaunchlabs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground/70 hover:text-red transition-colors font-bold text-lg">
                        <Instagram size={24} className="text-red" />
                        Instagram
                      </a>
                      <a href="https://discord.gg/EVSEDPDv" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground/70 hover:text-red transition-colors font-bold text-lg">
                        <MessageCircle size={24} className="text-red" />
                        Discord
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions */}
              <div className="space-y-8">
                <h2 className="text-5xl font-black text-foreground mb-12">Next Steps</h2>

                <Card className="border-l-8 border-l-red hover:shadow-2xl transition-all duration-300 bg-primary">
                  <CardContent className="p-10">
                    <h3 className="text-2xl font-black text-foreground mb-4">Ready to Apply?</h3>
                    <p className="text-foreground/70 text-lg leading-relaxed mb-8">
                      Check out our application forms and join Launch Labs.
                    </p>
                    <Link href="/forms">
                      <Button className="w-full inline-flex items-center justify-center gap-3 bg-red text-white hover:bg-red/90">
                        View Forms
                        <ArrowRight size={18} />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="border-l-8 border-l-yellow hover:shadow-2xl transition-all duration-300 bg-primary">
                  <CardContent className="p-10">
                    <h3 className="text-2xl font-black text-foreground mb-4">Explore Teams</h3>
                    <p className="text-foreground/70 text-lg leading-relaxed mb-8">
                      Learn more about our Launch and Innovation teams.
                    </p>
                    <Link href="/portfolio">
                      <Button className="w-full inline-flex items-center justify-center gap-3 bg-foreground/10 text-foreground hover:bg-foreground/15 border border-foreground/10">
                        View Projects
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
        <section className="section-padding bg-primary">
          <div className="container text-center">
            <h2 className="text-6xl md:text-7xl font-black text-foreground mb-8">Questions?</h2>
            <p className="text-2xl text-foreground/55 mb-12 max-w-2xl mx-auto font-light">
              We're here to help. Reach out anytime and we'll get back to you as soon as possible.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
