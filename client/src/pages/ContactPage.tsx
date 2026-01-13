import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Linkedin, Instagram } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-24 pb-20">
        <div className="container max-w-5xl">
          <div className="mb-16 text-center">
            <h1 className="font-sans font-semibold text-5xl md:text-6xl text-foreground mb-6 leading-tight">
              Get In Touch
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed font-regular max-w-2xl mx-auto">
              Have questions about Launch Labs? Want to collaborate? We'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="font-sans font-semibold text-2xl text-foreground mb-6">Contact Information</h2>
              </div>

              <Card className="border border-foreground/5 shadow-sm hover:shadow-md hover:border-primary/20 transition-all bg-white rounded-xl">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <h3 className="font-sans font-semibold text-base text-foreground mb-2">General Inquiries</h3>
                  <a href="mailto:hello@launchlabs.neu.edu" className="text-primary hover:text-primary/80 transition-colors font-medium text-sm">
                    hello@launchlabs.neu.edu
                  </a>
                </CardContent>
              </Card>

              <Card className="border border-foreground/5 shadow-sm hover:shadow-md hover:border-primary/20 transition-all bg-white rounded-xl">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="font-sans font-semibold text-base text-foreground mb-2">Location</h3>
                  <p className="text-foreground/70 text-sm font-regular">
                    Northeastern University<br />
                    Boston, MA
                  </p>
                </CardContent>
              </Card>

              <div className="bg-foreground/5 border border-foreground/5 rounded-xl p-6">
                <h3 className="font-sans font-semibold text-base text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-sans font-semibold text-2xl text-foreground mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-foreground/10 bg-white text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-foreground/10 bg-white text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-foreground/10 bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Student Interest">Student Interest</option>
                    <option value="Startup Partnership">Startup Partnership</option>
                    <option value="Leadership">Leadership</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2.5 rounded-lg border border-foreground/10 bg-white text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-medium h-11 rounded-lg transition-all duration-200"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
