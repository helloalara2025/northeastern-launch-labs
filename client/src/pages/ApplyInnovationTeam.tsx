import Navigation from "@/components/sections/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { Link } from "wouter";
import { CheckCircle } from "lucide-react";

export default function ApplyInnovationTeam() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    major: "",
    year: "Freshman",
    skills: "",
    motivation: "",
    availability: "3-5 hours per week",
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
    console.log("Innovation Team Application submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        major: "",
        year: "Freshman",
        skills: "",
        motivation: "",
        availability: "3-5 hours per week",
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
              <a className="text-gray-100 hover:text-gray-100 font-bold text-sm mb-6 inline-block">← Back to Forms</a>
            </Link>
            <h1 className="font-sans font-bold text-5xl md:text-6xl text-foreground mb-6 leading-tight">
              Innovation Team Application
            </h1>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Apply to join an Innovation Team and lead an end-to-end project from conception to delivery. We're looking for students ready to take ownership and create portfolio-ready work.
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
                    Thank you for applying to Launch Labs. We'll review your application and get back to you soon at the email address you provided.
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
                      Full Name <span className="text-gray-100">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3  border border-foreground/10 bg-white text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-gray-100 transition-all"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-foreground mb-2">
                      Email <span className="text-gray-100">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3  border border-foreground/10 bg-white text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-gray-100 transition-all"
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
                      className="w-full px-4 py-3  border border-foreground/10 bg-white text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-gray-100 transition-all"
                      placeholder="(123) 456-7890"
                    />
                  </div>

                  <div>
                    <label htmlFor="major" className="block text-sm font-bold text-foreground mb-2">
                      Major/Field of Study <span className="text-gray-100">*</span>
                    </label>
                    <input
                      type="text"
                      id="major"
                      name="major"
                      value={formData.major}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3  border border-foreground/10 bg-white text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-gray-100 transition-all"
                      placeholder="e.g., Computer Science, Business"
                    />
                  </div>

                  <div>
                    <label htmlFor="year" className="block text-sm font-bold text-foreground mb-2">
                      Year <span className="text-gray-100">*</span>
                    </label>
                    <select
                      id="year"
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      className="w-full px-4 py-3  border border-foreground/10 bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-gray-100 transition-all"
                    >
                      <option value="Freshman">Freshman</option>
                      <option value="Sophomore">Sophomore</option>
                      <option value="Junior">Junior</option>
                      <option value="Senior">Senior</option>
                      <option value="Graduate">Graduate</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="availability" className="block text-sm font-bold text-foreground mb-2">
                      Weekly Availability <span className="text-gray-100">*</span>
                    </label>
                    <select
                      id="availability"
                      name="availability"
                      value={formData.availability}
                      onChange={handleChange}
                      className="w-full px-4 py-3  border border-foreground/10 bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-gray-100 transition-all"
                    >
                      <option value="3-5 hours per week">3-5 hours per week</option>
                      <option value="5-8 hours per week">5-8 hours per week</option>
                      <option value="8+ hours per week">8+ hours per week</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="skills" className="block text-sm font-bold text-foreground mb-2">
                    Key Skills & Expertise <span className="text-gray-100">*</span>
                  </label>
                  <textarea
                    id="skills"
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3  border border-foreground/10 bg-white text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-gray-100 transition-all resize-none"
                    placeholder="Tell us about your key skills, technical expertise, and areas of strength..."
                  ></textarea>
                </div>

                <div className="mb-6">
                  <label htmlFor="motivation" className="block text-sm font-bold text-foreground mb-2">
                    Why do you want to join an Innovation Team? <span className="text-gray-100">*</span>
                  </label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3  border border-foreground/10 bg-white text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-gray-100 transition-all resize-none"
                    placeholder="Share your motivation and what you hope to accomplish through this experience..."
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
                    className="w-5 h-5 rounded border-foreground/20 text-gray-100 focus:ring-amber-600 mt-1"
                  />
                  <label htmlFor="agreeToTerms" className="text-base md:text-lg text-foreground/70 font-light">
                    I understand that this is a semester-long commitment and I'm prepared to lead my team through a complete project cycle from conception to delivery. <span className="text-gray-100">*</span>
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gray-100 hover:bg-gray-100 text-white font-bold h-12  transition-all duration-200 shadow-sm hover:shadow-lg"
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
            <h2 className="font-sans font-bold text-3xl text-foreground mb-10">What to Expect</h2>
            <div className="space-y-6">
              <Card className="border border-foreground/10 shadow-none">
                <CardContent className="p-8">
                  <h3 className="font-bold text-lg text-foreground mb-3">Project Selection</h3>
                  <p className="text-foreground/70">
                    If selected, you'll choose from available project briefs or propose your own. We'll help you scope and plan your project for success.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-foreground/10 shadow-none">
                <CardContent className="p-8">
                  <h3 className="font-bold text-lg text-foreground mb-3">Team Building</h3>
                  <p className="text-foreground/70">
                    You'll lead a cross-functional team of students with complementary skills to help bring your project to life.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-foreground/10 shadow-none">
                <CardContent className="p-8">
                  <h3 className="font-bold text-lg text-foreground mb-3">Mentorship & Support</h3>
                  <p className="text-foreground/70">
                    Launch Labs leadership will provide guidance, resources, and support throughout your project journey.
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
                <li><Link href="/innovation-teams" className="text-foreground/70 hover:text-red-900 transition-colors font-medium">Innovation Teams</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Get Involved</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/forms" className="text-foreground/70 hover:text-red-900 transition-colors font-medium">Apply</Link></li>
                <li><Link href="/leadership" className="text-foreground/70 hover:text-red-900 transition-colors font-medium">Leadership</Link></li>
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
