import Navigation from "@/components/sections/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { Link } from "wouter";
import { CheckCircle } from "lucide-react";

export default function ApplyLeadership() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    major: "",
    year: "Junior",
    position: "General",
    experience: "",
    vision: "",
    commitment: "",
    agreeToTerms: false
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Leadership Application submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        major: "",
        year: "Junior",
        position: "General",
        experience: "",
        vision: "",
        commitment: "",
        agreeToTerms: false
      });
    }, 3000);
  };

  return (
    <div>
      <Navigation />
      <main className="pt-16">
        {/* Header */}
        <section className="bg-white py-24 md:py-32">
          <div className="container max-w-3xl">
            <Link href="/forms">
              <a className="text-red-900 hover:text-red-900 font-bold text-sm mb-6 inline-block">← Back to Forms</a>
            </Link>
            <h1 className="font-sans font-bold text-5xl md:text-6xl text-foreground mb-6 leading-tight">
              Leadership Application
            </h1>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Join our leadership team and help shape the future of Launch Labs. We're looking for passionate, driven students ready to lead and inspire others.
            </p>
          </div>
        </section>

        {/* Application Form */}
        <section className="bg-foreground/5 border-t border-foreground/10 py-24 md:py-32">
          <div className="container max-w-3xl">
            {submitted ? (
              <Card className="border border-gray-100 bg-gray-100 shadow-none">
                <CardContent className="p-12 text-center">
                  <CheckCircle className="w-16 h-16 text-gray-100 mx-auto mb-6" />
                  <h2 className="font-bold text-3xl md:text-4xl text-gray-100 mb-3">Application Submitted!</h2>
                  <p className="text-gray-100 mb-6">
                    Thank you for applying to join our leadership team. We'll review your application and get back to you soon at the email address you provided.
                  </p>
                  <Link href="/">
                    <Button className="bg-gray-100 hover:bg-gray-100 text-white font-bold px-8 h-12 ">
                      Return to Home
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white border border-foreground/10  p-10">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-bold text-foreground mb-2">
                      Full Name <span className="text-red-900">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3  border border-foreground/10 bg-white text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-red-900/20 focus:border-red-900 transition-all"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-foreground mb-2">
                      Email <span className="text-red-900">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3  border border-foreground/10 bg-white text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-red-900/20 focus:border-red-900 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3  border border-foreground/10 bg-white text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-red-900/20 focus:border-red-900 transition-all"
                      placeholder="(123) 456-7890"
                    />
                  </div>

                  <div>
                    <label htmlFor="major" className="block text-sm font-bold text-foreground mb-2">
                      Major/Field of Study <span className="text-red-900">*</span>
                    </label>
                    <input
                      type="text"
                      id="major"
                      name="major"
                      value={formData.major}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3  border border-foreground/10 bg-white text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-red-900/20 focus:border-red-900 transition-all"
                      placeholder="e.g., Computer Science, Business"
                    />
                  </div>

                  <div>
                    <label htmlFor="year" className="block text-sm font-bold text-foreground mb-2">
                      Year <span className="text-red-900">*</span>
                    </label>
                    <select
                      id="year"
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      className="w-full px-4 py-3  border border-foreground/10 bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-red-900/20 focus:border-red-900 transition-all"
                    >
                      <option value="Sophomore">Sophomore</option>
                      <option value="Junior">Junior</option>
                      <option value="Senior">Senior</option>
                      <option value="Graduate">Graduate</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="position" className="block text-sm font-bold text-foreground mb-2">
                      Position of Interest <span className="text-red-900">*</span>
                    </label>
                    <select
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      className="w-full px-4 py-3  border border-foreground/10 bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-red-900/20 focus:border-red-900 transition-all"
                    >
                      <option value="General">General Leadership</option>
                      <option value="President">President</option>
                      <option value="Vice President">Vice President</option>
                      <option value="Operations Lead">Operations Lead</option>
                      <option value="Partnerships Lead">Partnerships Lead</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="experience" className="block text-sm font-bold text-foreground mb-2">
                    Leadership & Organizational Experience <span className="text-red-900">*</span>
                  </label>
                  <textarea
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3  border border-foreground/10 bg-white text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-red-900/20 focus:border-red-900 transition-all resize-none"
                    placeholder="Tell us about your leadership experience, roles you've held, and how you've made an impact..."
                  ></textarea>
                </div>

                <div className="mb-6">
                  <label htmlFor="vision" className="block text-sm font-bold text-foreground mb-2">
                    What's your vision for Launch Labs? <span className="text-red-900">*</span>
                  </label>
                  <textarea
                    id="vision"
                    name="vision"
                    value={formData.vision}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3  border border-foreground/10 bg-white text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-red-900/20 focus:border-red-900 transition-all resize-none"
                    placeholder="Share your vision for how Launch Labs can grow and impact the Northeastern community..."
                  ></textarea>
                </div>

                <div className="mb-6">
                  <label htmlFor="commitment" className="block text-sm font-bold text-foreground mb-2">
                    What is your expected time commitment? <span className="text-red-900">*</span>
                  </label>
                  <textarea
                    id="commitment"
                    name="commitment"
                    value={formData.commitment}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3  border border-foreground/10 bg-white text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-red-900/20 focus:border-red-900 transition-all resize-none"
                    placeholder="Tell us about your availability and commitment level for this leadership role..."
                  ></textarea>
                </div>

                <div className="mb-8 flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    required
                    className="w-5 h-5 rounded border-foreground/20 text-red-900 focus:ring-red-900 mt-1"
                  />
                  <label htmlFor="agreeToTerms" className="text-base md:text-lg text-foreground/70 font-light">
                    I understand the responsibilities of a leadership role and am committed to supporting Launch Labs' mission and members. <span className="text-red-900">*</span>
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-red-900 hover:bg-red-900 text-white font-bold h-12  transition-all duration-200 shadow-sm hover:shadow-lg"
                >
                  Submit Application
                </Button>
              </form>
            )}
          </div>
        </section>

        {/* Info Section */}
        <section className="bg-white border-t border-foreground/10 py-24 md:py-32">
          <div className="container max-w-3xl">
            <h2 className="font-sans font-bold text-3xl text-foreground mb-10">Leadership Roles</h2>
            <div className="space-y-6">
              <Card className="border border-foreground/10 shadow-none">
                <CardContent className="p-8">
                  <h3 className="font-bold text-lg text-foreground mb-3">President</h3>
                  <p className="text-foreground/70">
                    Provides overall vision and direction for Launch Labs, leads strategic initiatives, and represents the organization.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-foreground/10 shadow-none">
                <CardContent className="p-8">
                  <h3 className="font-bold text-lg text-foreground mb-3">Vice President</h3>
                  <p className="text-foreground/70">
                    Supports the President, oversees day-to-day operations, and ensures smooth execution of programs and initiatives.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-foreground/10 shadow-none">
                <CardContent className="p-8">
                  <h3 className="font-bold text-lg text-foreground mb-3">Operations Lead</h3>
                  <p className="text-foreground/70">
                    Manages logistics, scheduling, team coordination, and ensures all programs run smoothly and on schedule.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-foreground/10 shadow-none">
                <CardContent className="p-8">
                  <h3 className="font-bold text-lg text-foreground mb-3">Partnerships Lead</h3>
                  <p className="text-foreground/70">
                    Builds relationships with startups, manages partnerships, and identifies collaboration opportunities for Launch Labs.
                  </p>
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
              <p className="text-base md:text-lg text-foreground/70 font-light leading-relaxed">
                Northeastern University's hub for real-world project work.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Explore</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/" className="text-foreground/70 hover:text-red-900 transition-colors font-medium">Home</Link></li>
                <li><Link href="/about" className="text-foreground/70 hover:text-red-900 transition-colors font-medium">About</Link></li>
                <li><Link href="/launch-teams" className="text-foreground/70 hover:text-red-900 transition-colors font-medium">Launch Teams</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Get Involved</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/forms" className="text-foreground/70 hover:text-red-900 transition-colors font-medium">Apply</Link></li>
                <li><Link href="/innovation-teams" className="text-foreground/70 hover:text-red-900 transition-colors font-medium">Innovation Teams</Link></li>
                <li><Link href="/partners" className="text-foreground/70 hover:text-red-900 transition-colors font-medium">Partners</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Connect</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/contact" className="text-foreground/70 hover:text-red-900 transition-colors font-medium">Contact</Link></li>
                <li><a href="#" className="text-foreground/70 hover:text-red-900 transition-colors font-medium">LinkedIn</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-red-900 transition-colors font-medium">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-foreground/10 pt-8 text-center text-base md:text-lg text-foreground/70 font-light">
            <p>&copy; 2025 Northeastern Launch Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
