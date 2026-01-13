import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-background border-t border-border/30">
      <div className="container">
        <h2 className="font-sans font-bold text-3xl lg:text-4xl text-foreground mb-10 leading-tight">
          Get in Touch
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 max-w-3xl">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="font-sans font-bold text-base text-foreground mb-2">Questions?</h3>
              <p className="text-foreground/70 leading-relaxed font-regular text-sm">
                Reach out to us. We'd love to hear from you.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-foreground/60 text-xs font-regular mb-1">General Inquiries</p>
                <a href="mailto:hello@launchlabs.northeastern.edu" className="text-foreground hover:text-primary transition-colors font-bold text-sm">
                  hello@launchlabs.northeastern.edu
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border/50 rounded-lg p-6">
            <form className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-foreground mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-background border border-border/50 rounded px-3 py-2 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-foreground mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-background border border-border/50 rounded px-3 py-2 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-foreground mb-2">Subject</label>
                <select className="w-full bg-background border border-border/50 rounded px-3 py-2 text-sm text-foreground focus:outline-none focus:border-primary transition-colors">
                  <option value="">Select a subject</option>
                  <option value="apply">I want to apply</option>
                  <option value="partnership">Partnership inquiry</option>
                  <option value="project">Project proposal</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-foreground mb-2">Message</label>
                <textarea
                  placeholder="Tell us more..."
                  rows={3}
                  className="w-full bg-background border border-border/50 rounded px-3 py-2 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors resize-none"
                ></textarea>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-background font-bold h-10 rounded text-sm transition-all duration-200">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
