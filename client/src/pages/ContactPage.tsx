import Navigation from "@/components/sections/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Linkedin, Instagram } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

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
      <main className="pt-24">
        {/* Header */}
        <section className="bg-white py-24 md:py-32">
          <div className="container max-w-4xl text-center">
            <h1 className="font-sans font-bold text-6xl md:text-7xl text-foreground mb-6 leading-tight">
              Get In Touch
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed max-w-2xl mx-auto">
              Have questions about Launch Labs? Want to collaborate? We'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-foreground/5 border-t border-foreground/10 py-24 md:py-32">
          <div className="container max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-6">
                <div>
                  <h2 className="font-sans font-bold text-3xl text-foreground mb-8">Contact Information</h2>
                </div>

                <Card className="border border-foreground/10 shadow-none hover:shadow-md transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center text-red-800 mb-4">
                      <Mail className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground mb-3">General Inquiries</h3>
                    <a href="mailto:hello@launchlabs.neu.edu" className="text-red-800 hover:text-red-900 transition-colors font-medium break-all">
                      hello@launchlabs.neu.edu
                    </a>
                  </CardContent>
                </Card>

                <Card className="border border-foreground/10 shadow-none hover:shadow-md transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center text-red-800 mb-4">
                      <Mail className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground mb-3">Student Inquiries & Applications</h3>
                    <a href="mailto:students@launchlabs.neu.edu" className="text-red-800 hover:text-red-900 transition-colors font-medium break-all">
                      students@launchlabs.neu.edu
                    </a>
                  </CardContent>
                </Card>

                <Card className="border border-foreground/10 shadow-none hover:shadow-md transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center text-red-800 mb-4">
                      <Mail className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground mb-3">Startup Partnerships</h3>
                    <a href="mailto:partnerships@launchlabs.neu.edu" className="text-red-800 hover:text-red-900 transition-colors font-medium break-all">
                      partnerships@launchlabs.neu.edu
                    </a>
                  </CardContent>
                </Card>

                <Card className="border border-foreground/10 shadow-none hover:shadow-md transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center text-red-800 mb-4">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground mb-3">Location</h3>
                    <p className="text-foreground/70 font-medium">
                      Northeastern University<br />
                      Boston, MA 02115<br />
                      USA
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-foreground/10 shadow-none">
                  <CardContent className="p-8">
                    <h3 className="font-bold text-lg text-foreground mb-6">Follow Us</h3>
                    <div className="flex gap-4">
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center text-red-800 hover:bg-red-200 transition-colors" title="LinkedIn">
                        <Linkedin size={24} />
                      </a>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center text-red-800 hover:bg-red-200 transition-colors" title="Instagram">
                        <Instagram size={24} />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="bg-white border border-foreground/10 rounded-lg p-10">
                <h2 className="font-sans font-bold text-3xl text-foreground mb-8">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-foreground mb-2">
                      Name <span className="text-red-800">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-foreground/10 bg-white text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-red-800/20 focus:border-red-800 transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-foreground mb-2">
                      Email <span className="text-red-800">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-foreground/10 bg-white text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-red-800/20 focus:border-red-800 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-bold text-foreground mb-2">
                      Subject <span className="text-red-800">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-foreground/10 bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-red-800/20 focus:border-red-800 transition-all"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Student Interest">Student Interest</option>
                      <option value="Startup Partnership">Startup Partnership</option>
                      <option value="Leadership">Leadership</option>
                      <option value="Technical Issue">Technical Issue</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-foreground mb-2">
                      Message <span className="text-red-800">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-foreground/10 bg-white text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-red-800/20 focus:border-red-800 transition-all resize-none"
                      placeholder="Your message..."
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-red-800 hover:bg-red-900 text-white font-bold h-12 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="bg-white border-t border-foreground/10 py-24 md:py-32">
          <div className="container max-w-4xl">
            <h2 className="font-sans font-bold text-3xl text-foreground mb-10">Quick Links</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border border-foreground/10 shadow-none hover:shadow-md transition-shadow">
                <CardContent className="p-8 text-center">
                  <h3 className="font-bold text-lg text-foreground mb-3">Apply Now</h3>
                  <p className="text-foreground/70 mb-6">
                    Ready to join Launch Labs? Check out our applications.
                  </p>
                  <Link href="/forms">
                    <Button className="w-full bg-red-800 hover:bg-red-900 text-white font-bold h-10 rounded-lg">
                      View Applications
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border border-foreground/10 shadow-none hover:shadow-md transition-shadow">
                <CardContent className="p-8 text-center">
                  <h3 className="font-bold text-lg text-foreground mb-3">Learn More</h3>
                  <p className="text-foreground/70 mb-6">
                    Explore our teams and discover what we do.
                  </p>
                  <Link href="/about">
                    <Button className="w-full bg-red-800 hover:bg-red-900 text-white font-bold h-10 rounded-lg">
                      About Us
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border border-foreground/10 shadow-none hover:shadow-md transition-shadow">
                <CardContent className="p-8 text-center">
                  <h3 className="font-bold text-lg text-foreground mb-3">Partner With Us</h3>
                  <p className="text-foreground/70 mb-6">
                    Interested in collaborating with Launch Labs?
                  </p>
                  <Link href="/partners">
                    <Button className="w-full bg-red-800 hover:bg-red-900 text-white font-bold h-10 rounded-lg">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-foreground/10 py-16">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="font-bold text-foreground mb-4">Launch Labs</h4>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Northeastern University's hub for real-world project work.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Explore</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/"><a className="text-foreground/70 hover:text-red-800 transition-colors font-medium">Home</a></Link></li>
                <li><Link href="/about"><a className="text-foreground/70 hover:text-red-800 transition-colors font-medium">About</a></Link></li>
                <li><Link href="/launch-teams"><a className="text-foreground/70 hover:text-red-800 transition-colors font-medium">Launch Teams</a></Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Get Involved</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/forms"><a className="text-foreground/70 hover:text-red-800 transition-colors font-medium">Apply</a></Link></li>
                <li><Link href="/leadership"><a className="text-foreground/70 hover:text-red-800 transition-colors font-medium">Leadership</a></Link></li>
                <li><Link href="/partners"><a className="text-foreground/70 hover:text-red-800 transition-colors font-medium">Partners</a></Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Connect</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-foreground/70 hover:text-red-800 transition-colors font-medium">LinkedIn</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-red-800 transition-colors font-medium">Instagram</a></li>
                <li><Link href="/contact"><a className="text-foreground/70 hover:text-red-800 transition-colors font-medium">Contact</a></Link></li>
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
