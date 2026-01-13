import { Button } from "@/components/ui/button";
import { Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white border-t border-foreground/5">
      <div className="container">
        <h2 className="font-sans font-bold text-5xl lg:text-6xl text-foreground mb-20 leading-tight tracking-tight">
          Get In Touch
        </h2>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-sans font-bold text-foreground mb-2">General Inquiries</h3>
                <p className="text-foreground/60 font-regular text-base">Coming soon</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-sans font-bold text-foreground mb-2">Student Questions</h3>
                <p className="text-foreground/60 font-regular text-base">Coming soon</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-sans font-bold text-foreground mb-2">Startup Partnerships</h3>
                <p className="text-foreground/60 font-regular text-base">Coming soon</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-sans font-bold text-foreground mb-2">Office Hours</h3>
                <p className="text-foreground/60 font-regular text-base">TBD</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-sans font-bold text-foreground mb-2">Location</h3>
                <p className="text-foreground/60 font-regular text-base">TBD</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-foreground mb-2">Name</label>
                <input 
                  type="text" 
                  placeholder="Your name" 
                  className="w-full px-4 py-3 border border-foreground/15 rounded-lg bg-white text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 font-regular"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-foreground mb-2">Email</label>
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="w-full px-4 py-3 border border-foreground/15 rounded-lg bg-white text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 font-regular"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-foreground mb-2">Subject</label>
                <select className="w-full px-4 py-3 border border-foreground/15 rounded-lg bg-white text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 font-regular">
                  <option>General Inquiry</option>
                  <option>Student Interest</option>
                  <option>Startup Partnership</option>
                  <option>Leadership</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-foreground mb-2">Message</label>
                <textarea 
                  placeholder="Your message..." 
                  rows={5}
                  className="w-full px-4 py-3 border border-foreground/15 rounded-lg bg-white text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 resize-none font-regular"
                  required
                ></textarea>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12 rounded-lg text-base transition-all duration-200 shadow-lg hover:shadow-xl">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
