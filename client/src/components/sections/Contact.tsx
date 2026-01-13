import { Button } from "@/components/ui/button";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-background border-t border-border/50">
      <div className="container">
        <h2 className="font-sans font-bold text-4xl lg:text-5xl text-foreground mb-12 leading-tight tracking-tight">
          Get in Touch
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="font-sans font-bold text-lg text-foreground">Questions?</h3>
              <p className="text-foreground/60 leading-relaxed font-regular">
                Reach out to us. We'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground/60 text-sm font-regular">General Inquiries</p>
                  <a href="mailto:hello@launchlabs.northeastern.edu" className="text-foreground hover:text-primary transition-colors font-bold">
                    hello@launchlabs.northeastern.edu
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground/60 text-sm font-regular">Location</p>
                  <p className="text-foreground font-bold">Northeastern University, Boston</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border/50 rounded-lg p-8">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-foreground mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-background border border-border/50 rounded-lg px-4 py-2 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-foreground mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-background border border-border/50 rounded-lg px-4 py-2 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-foreground mb-2">Subject</label>
                <select className="w-full bg-background border border-border/50 rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-primary transition-colors">
                  <option value="">Select a subject</option>
                  <option value="apply">I want to apply</option>
                  <option value="partnership">Partnership inquiry</option>
                  <option value="project">Project proposal</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-foreground mb-2">Message</label>
                <textarea
                  placeholder="Tell us more..."
                  rows={4}
                  className="w-full bg-background border border-border/50 rounded-lg px-4 py-2 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors resize-none"
                ></textarea>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-background font-bold h-11 rounded-lg text-base transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-primary/40">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
