import Navigation from "@/components/sections/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Mail, Linkedin, Instagram, MessageCircle, ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-primary pt-20">
      <Navigation />
      <main>
        {/* Header */}
        <section className="section-padding bg-primary relative overflow-hidden">
          <div className="arc-top-right"></div>
          <div className="container text-center relative z-10">
            <div className="label text-yellow mb-8">CONTACT</div>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-tight">
              Get In Touch
            </h1>
            <p className="text-lg md:text-2xl text-muted leading-relaxed max-w-3xl mx-auto font-light">
              Have questions? Want to collaborate? Reach out to us directly. We'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="section-padding bg-secondary relative overflow-hidden">
          <div className="arc-bottom-left"></div>
          <div className="container relative z-10">
            <div className="label text-yellow mb-12">REACH OUT</div>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-20">Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-3xl">
              {/* Email */}
              <div className="card-accent group hover:border-yellow transition-colors duration-300">
                <div className="icon-box mb-6 group-hover:bg-yellow group-hover:text-black transition-all duration-300">
                  <Mail size={28} />
                </div>
                <h3 className="text-2xl font-black text-white mb-4">Email</h3>
                <a 
                  href="mailto:NU-launchlabs@northeastern.edu" 
                  className="text-red hover:text-yellow transition-colors font-bold text-lg break-all inline-flex items-center gap-2"
                >
                  NU-launchlabs@northeastern.edu
                  <ArrowRight size={16} />
                </a>
              </div>

              {/* Message */}
              <div className="card-accent group hover:border-yellow transition-colors duration-300">
                <div className="icon-box mb-6 group-hover:bg-yellow group-hover:text-black transition-all duration-300">
                  <MessageCircle size={28} />
                </div>
                <h3 className="text-2xl font-black text-white mb-4">Quick Question?</h3>
                <p className="text-muted text-lg leading-relaxed">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Links */}
        <section className="section-padding bg-primary">
          <div className="container">
            <div className="label text-yellow mb-12">FOLLOW</div>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-20">Connect With Us</h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-2xl">
              {[
                {
                  icon: Linkedin,
                  title: "LinkedIn",
                  desc: "Follow us for updates, job opportunities, and industry insights.",
                  url: "https://www.linkedin.com/company/nulaunchlabs/"
                },
                {
                  icon: Instagram,
                  title: "Instagram",
                  desc: "See behind-the-scenes moments and celebrate wins with our community.",
                  url: "https://www.instagram.com/nulaunchlabs/"
                }
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-accent group hover:border-yellow transition-colors duration-300"
                >
                  <div className="icon-box mb-6 group-hover:bg-yellow group-hover:text-black transition-all duration-300">
                    <social.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4">{social.title}</h3>
                  <p className="text-muted text-lg leading-relaxed mb-6">{social.desc}</p>
                  <span className="text-red font-black hover:text-yellow inline-flex items-center gap-2 transition-all duration-300 label">
                    Follow
                    <ArrowRight size={16} />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="section-padding bg-secondary relative overflow-hidden">
          <div className="arc-top-right"></div>
          <div className="container relative z-10 max-w-2xl">
            <div className="label text-yellow mb-12">MESSAGE</div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-12">Send us a Message</h2>
            <form className="space-y-8">
              <div>
                <label className="label text-white mb-3 block">Your Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/20 text-white placeholder-white/40 px-6 py-4 focus:outline-none focus:border-red transition-colors duration-300"
                />
              </div>
              <div>
                <label className="label text-white mb-3 block">Email</label>
                <input 
                  type="email" 
                  placeholder="you@example.com"
                  className="w-full bg-white/5 border border-white/20 text-white placeholder-white/40 px-6 py-4 focus:outline-none focus:border-red transition-colors duration-300"
                />
              </div>
              <div>
                <label className="label text-white mb-3 block">Subject</label>
                <input 
                  type="text" 
                  placeholder="How can we help?"
                  className="w-full bg-white/5 border border-white/20 text-white placeholder-white/40 px-6 py-4 focus:outline-none focus:border-red transition-colors duration-300"
                />
              </div>
              <div>
                <label className="label text-white mb-3 block">Message</label>
                <textarea 
                  placeholder="Your message here..."
                  rows={6}
                  className="w-full bg-white/5 border border-white/20 text-white placeholder-white/40 px-6 py-4 focus:outline-none focus:border-red transition-colors duration-300 resize-none"
                ></textarea>
              </div>
              <Button className="btn-primary w-full justify-center">
                Send Message
                <ArrowRight size={20} />
              </Button>
            </form>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-red relative overflow-hidden">
          <div className="container text-center relative z-10">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8">Ready to Build Together?</h2>
            <p className="text-lg md:text-2xl text-white/90 mb-16 max-w-3xl mx-auto font-light">
              Whether you're interested in joining, partnering, or just learning more, we're here to help.
            </p>
            <Button asChild>
              <Link href="/forms" className="bg-white text-red font-black px-8 py-4 hover:bg-yellow transition-all inline-flex items-center gap-3 uppercase tracking-wider text-sm">
                Explore Opportunities
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-secondary border-t border-white/10 py-24">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-16 mb-20">
            <div>
              <div className="label text-yellow mb-8">NU LAUNCH LABS</div>
              <p className="text-muted leading-relaxed text-lg">
                Connecting builders at Northeastern. Founded Spring 2026.
              </p>
            </div>
            <div>
              <div className="label text-white mb-8">EXPLORE</div>
              <ul className="space-y-4">
                <li><Link href="/" className="text-muted hover:text-red transition-colors duration-300 text-lg">Home</Link></li>
                <li><Link href="/about" className="text-muted hover:text-red transition-colors duration-300 text-lg">About</Link></li>
                <li><Link href="/launch-teams" className="text-muted hover:text-red transition-colors duration-300 text-lg">Launch Teams</Link></li>
              </ul>
            </div>
            <div>
              <div className="label text-white mb-8">GET INVOLVED</div>
              <ul className="space-y-4">
                <li><Link href="/forms" className="text-muted hover:text-red transition-colors duration-300 text-lg">Apply</Link></li>
                <li><Link href="/leadership" className="text-muted hover:text-red transition-colors duration-300 text-lg">Leadership</Link></li>
                <li><Link href="/innovation-teams" className="text-muted hover:text-red transition-colors duration-300 text-lg">Innovation Teams</Link></li>
              </ul>
            </div>
            <div>
              <div className="label text-white mb-8">CONNECT</div>
              <ul className="space-y-4">
                <li><Link href="/contact" className="text-muted hover:text-red transition-colors duration-300 text-lg">Contact</Link></li>
                <li><a href="https://www.linkedin.com/company/nulaunchlabs/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-red transition-colors duration-300 text-lg">LinkedIn</a></li>
                <li><a href="https://www.instagram.com/nulaunchlabs/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-red transition-colors duration-300 text-lg">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-12 text-center text-muted font-light text-lg">
            <p>&copy; 2026 NU Launch Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
