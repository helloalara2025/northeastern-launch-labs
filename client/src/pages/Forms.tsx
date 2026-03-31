import Navigation from "@/components/sections/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, FileText, Lightbulb, Users } from "lucide-react";

export default function Forms() {
  return (
    <div className="bg-primary pt-20">
      <Navigation />
      <main>
        {/* Header */}
        <section className="section-padding bg-primary relative overflow-hidden">
          <div className="arc-top-right"></div>
          <div className="container relative z-10">
            <div className="label text-yellow mb-8">GET INVOLVED</div>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-tight">
              Join the Community
            </h1>
            <p className="text-lg md:text-2xl text-muted leading-relaxed max-w-4xl font-light">
              Ready to build real things? Apply to join a Launch Team, Innovation Team, or our leadership operations.
            </p>
          </div>
        </section>

        {/* Quick Links */}
        <section className="section-padding bg-secondary relative overflow-hidden">
          <div className="arc-bottom-left"></div>
          <div className="container relative z-10">
            <div className="label text-yellow mb-12">QUICK LINKS</div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-16">Application Forms</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "Interest Form", url: "https://forms.office.com/Pages/ResponsePage.aspx?id=gcLuqKOqrk2sm5o5i5IV58t6J076SB1BnXzyi1fYH2VUOVlLR1RJSllIQUFSWFBLSDdBNjg2Wk5IOS4u" },
                { label: "Launch Team App", url: "https://forms.office.com/Pages/ResponsePage.aspx?id=gcLuqKOqrk2sm5o5i5IV58t6J076SB1BnXzyi1fYH2VUNVU1NFZPWkNMSlU3NFlQRlpGNVhWR1lQVS4u" },
                { label: "Innovation App", url: "https://forms.office.com/Pages/ResponsePage.aspx?id=gcLuqKOqrk2sm5o5i5IV5-Bq-_-Nf69MkfguH-cGnHlUMldMQk9PVVU4Q0xFSlhYUzVGQU1LRTJQNS4u" },
                { label: "Leadership App", url: "https://forms.office.com/Pages/ResponsePage.aspx?id=gcLuqKOqrk2sm5o5i5IV58t6J076SB1BnXzyi1fYH2VUQVA4SFlMRTBXUVVKRk9aSFJKUjdGNVhKWS4u" }
              ].map((form, idx) => (
                <a 
                  key={idx}
                  href={form.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-secondary inline-flex items-center justify-center gap-2 text-center"
                >
                  {form.label}
                  <ArrowRight size={18} />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Application Paths */}
        <section className="section-padding bg-primary">
          <div className="container">
            <div className="label text-yellow mb-12">APPLICATION PATHS</div>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-20">Three Ways to Get Involved</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  icon: FileText,
                  title: "Launch Team",
                  desc: "Work directly with startups on real-world product development, implementation, and iterative testing. Partner with founders and bring ideas to life.",
                  url: "https://forms.office.com/Pages/ResponsePage.aspx?id=gcLuqKOqrk2sm5o5i5IV58t6J076SB1BnXzyi1fYH2VUNVU1NFZPWkNMSlU3NFlQRlpGNVhWR1lQVS4u"
                },
                {
                  icon: Lightbulb,
                  title: "Innovation Team",
                  desc: "Lead end-to-end projects designed to mirror real-world professional work. Build your leadership skills and deliver measurable impact.",
                  url: "https://forms.office.com/Pages/ResponsePage.aspx?id=gcLuqKOqrk2sm5o5i5IV5-Bq-_-Nf69MkfguH-cGnHlUMldMQk9PVVU4Q0xFSlhYUzVGQU1LRTJQNS4u"
                },
                {
                  icon: Users,
                  title: "Leadership",
                  desc: "Join our operations team and help shape the future of Launch Labs. Lead initiatives, manage partnerships, and grow our community.",
                  url: "https://forms.office.com/Pages/ResponsePage.aspx?id=gcLuqKOqrk2sm5o5i5IV58t6J076SB1BnXzyi1fYH2VUQVA4SFlMRTBXUVVKRk9aSFJKUjdGNVhKWS4u"
                }
              ].map((path, idx) => (
                <div key={idx} className="card-accent group hover:border-yellow transition-colors duration-300">
                  <div className="icon-box mb-8 group-hover:bg-yellow group-hover:text-black transition-all duration-300">
                    <path.icon size={28} />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-6">{path.title}</h3>
                  <p className="text-muted text-lg leading-relaxed mb-8">{path.desc}</p>
                  <a 
                    href={path.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-red font-black hover:text-yellow inline-flex items-center gap-2 transition-all duration-300 label"
                  >
                    Apply Now
                    <ArrowRight size={16} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-secondary relative overflow-hidden">
          <div className="arc-top-right"></div>
          <div className="container relative z-10">
            <div className="label text-yellow mb-12">FAQ</div>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-20">Common Questions</h2>
            <div className="max-w-3xl space-y-12">
              {[
                {
                  q: "What's the time commitment?",
                  a: "Launch Teams typically meet 1-2 times per week for 2-3 hours. Innovation Teams have flexible schedules based on project needs. Leadership roles vary based on the position."
                },
                {
                  q: "Do I need prior experience?",
                  a: "No prior experience is required. We're looking for builders with curiosity, drive, and willingness to learn. We provide mentorship and support throughout your journey."
                },
                {
                  q: "Can I apply to multiple teams?",
                  a: "Yes, you can express interest in multiple opportunities. However, we recommend focusing on one primary application to demonstrate genuine commitment."
                }
              ].map((item, idx) => (
                <div key={idx} className="border-t border-white/10 pt-8">
                  <h3 className="text-2xl font-black text-white mb-4">{item.q}</h3>
                  <p className="text-muted text-lg leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-red relative overflow-hidden">
          <div className="container text-center relative z-10">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8">Ready to Build?</h2>
            <p className="text-lg md:text-2xl text-white/90 mb-16 max-w-3xl mx-auto font-light">
              Don't wait. Apply today and join a community of builders making real impact.
            </p>
            <Button asChild>
              <a 
                href="https://forms.office.com/Pages/ResponsePage.aspx?id=gcLuqKOqrk2sm5o5i5IV58t6J076SB1BnXzyi1fYH2VUOVlLR1RJSllIQUFSWFBLSDdBNjg2Wk5IOS4u" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-red font-black px-8 py-4 hover:bg-yellow transition-all inline-flex items-center gap-3 uppercase tracking-wider text-sm"
              >
                Start Your Application
                <ArrowRight size={20} />
              </a>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-secondary border-t border-white/10 py-24">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-16 mb-20">
            <div>
              <div className="label text-yellow mb-8">NU LAUNCH LABS</div>
              <p className="text-muted leading-relaxed text-lg">
                Connecting builders at Northeastern. Founded Spring 2026.
              </p>
            </div>
            <div>
              <div className="label text-white mb-8">EXPLORE</div>
              <ul className="space-y-4">
                <li><Link href="/" className="text-muted hover:text-red transition-colors duration-300 text-lg">Home</Link></li>
                <li><Link href="/about" className="text-muted hover:text-red transition-colors duration-300 text-lg">About</Link></li>
                <li><Link href="/launch-teams" className="text-muted hover:text-red transition-colors duration-300 text-lg">Launch Teams</Link></li>
              </ul>
            </div>
            <div>
              <div className="label text-white mb-8">GET INVOLVED</div>
              <ul className="space-y-4">
                <li><Link href="/forms" className="text-muted hover:text-red transition-colors duration-300 text-lg">Apply</Link></li>
                <li><Link href="/leadership" className="text-muted hover:text-red transition-colors duration-300 text-lg">Leadership</Link></li>
                <li><Link href="/innovation-teams" className="text-muted hover:text-red transition-colors duration-300 text-lg">Innovation Teams</Link></li>
              </ul>
            </div>
            <div>
              <div className="label text-white mb-8">CONNECT</div>
              <ul className="space-y-4">
                <li><Link href="/contact" className="text-muted hover:text-red transition-colors duration-300 text-lg">Contact</Link></li>
                <li><a href="https://www.linkedin.com/company/nulaunchlabs/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-red transition-colors duration-300 text-lg">LinkedIn</a></li>
                <li><a href="https://www.instagram.com/nulaunchlabs/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-red transition-colors duration-300 text-lg">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-12 text-center text-muted font-light text-lg">
            <p>&copy; 2026 NU Launch Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
