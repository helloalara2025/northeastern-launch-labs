import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white border-t border-border">
      <div className="container">
        <h2 className="font-sans font-bold text-4xl lg:text-5xl text-foreground mb-12 leading-tight">
          Get in Touch
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-sans font-bold text-xl text-foreground mb-3">Questions?</h3>
              <p className="text-foreground/70 leading-relaxed font-regular text-base">
                Reach out to us. We'd love to hear from you.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="text-foreground/60 text-sm font-regular mb-1">General Inquiries</p>
                <a href="mailto:hello@launchlabs.northeastern.edu" className="text-foreground hover:text-primary transition-colors font-bold text-base">
                  hello@launchlabs.northeastern.edu
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 border border-border rounded-lg p-8">
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-foreground mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-white border border-border rounded-lg px-4 py-2.5 text-base text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-foreground mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-white border border-border rounded-lg px-4 py-2.5 text-base text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-foreground mb-2">Subject</label>
                <select className="w-full bg-white border border-border rounded-lg px-4 py-2.5 text-base text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors">
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
                  className="w-full bg-white border border-border rounded-lg px-4 py-2.5 text-base text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                ></textarea>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-11 rounded-lg text-base transition-all duration-200 shadow-md hover:shadow-lg">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
