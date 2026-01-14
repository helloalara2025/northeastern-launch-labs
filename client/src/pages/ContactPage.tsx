import Navigation from "@/components/sections/Navigation";
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
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <Navigation />
      <main className="pt-16">
        {/* Header */}
        <section className="bg-white py-20 md:py-28">
          <div className="container max-w-4xl text-center">
            <h1 className="font-sans font-bold text-5xl md:text-6xl text-foreground mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed max-w-2xl mx-auto">
              Have questions about Launch Labs? Want to collaborate? We'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-foreground/5 border-t border-foreground/10 py-20 md:py-28">
          <div className="container max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-6">
                <div>
                  <h2 className="font-sans font-bold text-3xl text-foreground mb-6">Contact Information</h2>
                </div>

                <Card className="border border-foreground/10 shadow-none hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center text-red-800 mb-4">
                      <Mail className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground mb-2">General Inquiries</h3>
                    <a href="mailto:hello@launchlabs.neu.edu" className="text-red-800 hover:text-red-900 transition-colors font-medium text-sm">
                      hello@launchlabs.neu.edu
                    </a>
                  </CardContent>
                </Card>

                <Card className="border border-foreground/10 shadow-none hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center text-red-800 mb-4">
                      <Mail className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground mb-2">Student Inquiries</h3>
                    <a href="mailto:students@launchlabs.neu.edu" className="text-red-800 hover:text-red-900 transition-colors font-medium text-sm">
                      students@launchlabs.neu.edu
                    </a>
                  </CardContent>
                </Card>

                <Card className="border border-foreground/10 shadow-none hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center text-red-800 mb-4">
                      <Mail className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground mb-2">Startup Partnerships</h3>
                    <a href="mailto:partnerships@launchlabs.neu.edu" className="text-red-800 hover:text-red-900 transition-colors font-medium text-sm">
                      partnerships@launchlabs.neu.edu
                    </a>
                  </CardContent>
                </Card>

                <Card className="border border-foreground/10 shadow-none hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center text-red-800 mb-4">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground mb-2">Location</h3>
                    <p className="text-foreground/70 text-sm font-medium">
                      Northeastern University<br />
                      Boston, MA
                    </p>
                  </CardContent>
                </Card>

                <div className="bg-white border border-foreground/10 rounded-lg p-6">
                  <h3 className="font-bold text-lg text-foreground mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <a href="#" className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center text-red-800 hover:bg-red-200 transition-colors">
                      <Linkedin size={24} />
                    </a>
                    <a href="#" className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center text-red-800 hover:bg-red-200 transition-colors">
                      <Instagram size={24} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white border border-foreground/10 rounded-lg p-8">
                <h2 className="font-sans font-bold text-3xl text-foreground mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-foreground mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-foreground/10 bg-white text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-red-800/20 focus:border-red-800 transition-all text-sm"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-foreground/10 bg-white text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-red-800/20 focus:border-red-800 transition-all text-sm"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-bold text-foreground mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-foreground/10 bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-red-800/20 focus:border-red-800 transition-all text-sm"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Student Interest">Student Interest</option>
                      <option value="Startup Partnership">Startup Partnership</option>
                      <option value="Leadership">Leadership</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2.5 rounded-lg border border-foreground/10 bg-white text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-red-800/20 focus:border-red-800 transition-all text-sm resize-none"
                      placeholder="Your message..."
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-red-800 hover:bg-red-900 text-white font-bold h-11 rounded-lg transition-all duration-200"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-foreground/10 py-12">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-foreground mb-4">Launch Labs</h4>
              <p className="text-sm text-foreground/70">
                Northeastern University's hub for real-world project work.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Explore</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="text-foreground/70 hover:text-red-800 transition-colors">Home</a></li>
                <li><a href="/about" className="text-foreground/70 hover:text-red-800 transition-colors">About</a></li>
                <li><a href="/launch-teams" className="text-foreground/70 hover:text-red-800 transition-colors">Launch Teams</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Get Involved</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/forms" className="text-foreground/70 hover:text-red-800 transition-colors">Apply</a></li>
                <li><a href="/leadership" className="text-foreground/70 hover:text-red-800 transition-colors">Leadership</a></li>
                <li><a href="/partners" className="text-foreground/70 hover:text-red-800 transition-colors">Partners</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/contact" className="text-foreground/70 hover:text-red-800 transition-colors">Contact</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-red-800 transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-red-800 transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-foreground/10 pt-8 text-center text-sm text-foreground/70">
            <p>&copy; 2025 Northeastern Launch Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
