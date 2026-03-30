import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white border-t border-border">
      <div className="container">
        <h2 className="font-sans font-bold text-4xl lg:text-5xl text-foreground mb-12 leading-tight">
          Get In Touch
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-sans font-bold text-xl text-foreground mb-3">Contact Information</h3>
              <p className="text-foreground/70 leading-relaxed font-regular text-base">
                Have questions? Reach out to us using the form or contact us directly.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground/60 text-sm font-regular mb-1">General Inquiries</p>
                  <p className="text-foreground text-base font-bold">hello@launchlabs.northeastern.edu</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground/60 text-sm font-regular mb-1">Student Questions</p>
                  <p className="text-foreground text-base font-bold">students@launchlabs.northeastern.edu</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground/60 text-sm font-regular mb-1">Startup Partnerships</p>
                  <p className="text-foreground text-base font-bold">partners@launchlabs.northeastern.edu</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-foreground/60 text-sm font-regular mb-2">Office Hours & Location</p>
              <p className="text-foreground text-base font-regular">TBD</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white border border-border  p-8">
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-foreground mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-white border border-border  px-4 py-2.5 text-base text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-foreground mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-white border border-border  px-4 py-2.5 text-base text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-foreground mb-2">Subject</label>
                <select className="w-full bg-white border border-border  px-4 py-2.5 text-base text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors">
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="student">Student Interest</option>
                  <option value="partnership">Startup Partnership</option>
                  <option value="leadership">Leadership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-foreground mb-2">Message</label>
                <textarea
                  placeholder="Tell us more..."
                  rows={4}
                  className="w-full bg-white border border-border  px-4 py-2.5 text-base text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                ></textarea>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-11  text-base transition-all duration-200 shadow-sm hover:shadow-lg">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
