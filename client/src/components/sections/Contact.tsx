import { Button } from "@/components/ui/button";
import { Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white border-t border-foreground/5">
      <div className="container">
        <h2 className="font-sans font-bold text-4xl lg:text-5xl text-foreground mb-12 leading-tight tracking-tight">
          Get In Touch
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-sans font-bold text-foreground text-sm mb-1">General Inquiries</h3>
                <p className="text-foreground/60 font-regular text-sm">Coming soon</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-sans font-bold text-foreground text-sm mb-1">Student Questions</h3>
                <p className="text-foreground/60 font-regular text-sm">Coming soon</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-sans font-bold text-foreground text-sm mb-1">Startup Partnerships</h3>
                <p className="text-foreground/60 font-regular text-sm">Coming soon</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-sans font-bold text-foreground text-sm mb-1">Office Hours</h3>
                <p className="text-foreground/60 font-regular text-sm">TBD</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-sans font-bold text-foreground text-sm mb-1">Location</h3>
                <p className="text-foreground/60 font-regular text-sm">TBD</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-foreground mb-1.5">Name</label>
                <input type="text" placeholder="Your name" className="w-full px-3 py-2.5 border border-foreground/15 rounded-lg bg-white text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 text-sm font-regular" required />
              </div>

              <div>
                <label className="block text-xs font-bold text-foreground mb-1.5">Email</label>
                <input type="email" placeholder="your@email.com" className="w-full px-3 py-2.5 border border-foreground/15 rounded-lg bg-white text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 text-sm font-regular" required />
              </div>

              <div>
                <label className="block text-xs font-bold text-foreground mb-1.5">Subject</label>
                <select className="w-full px-3 py-2.5 border border-foreground/15 rounded-lg bg-white text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 text-sm font-regular">
                  <option>General Inquiry</option>
                  <option>Student Interest</option>
                  <option>Startup Partnership</option>
                  <option>Leadership</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-foreground mb-1.5">Message</label>
                <textarea placeholder="Your message..." rows={4} className="w-full px-3 py-2.5 border border-foreground/15 rounded-lg bg-white text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 resize-none text-sm font-regular" required></textarea>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-10 rounded-lg text-sm transition-all duration-200 shadow-lg hover:shadow-xl">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
