import Navigation from "@/components/sections/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Briefcase, TrendingUp, Users, Code, CheckCircle } from "lucide-react";

export default function LaunchTeams() {
  const teams = [
    {
      id: 1,
      name: "Team Python",
      description: "Work on product development and software implementation for early-stage startups",
      members: 4,
      status: "Active",
      focus: "Product Development",
      details: "Focus on building and iterating on startup products with hands-on development work"
    }
  ];

  const currentPartners = [
    {
      id: 1,
      title: "FinTech Market Dynamics",
      theme: "Finance",
      status: "Discovery",
      focus: "Competitor mapping & API research",
      bullets: [
        "Mapping competitive landscape in payment processing",
        "Researching third-party API integrations",
        "Analyzing market trends and opportunities"
      ]
    },
    {
      id: 2,
      title: "Healthcare Systems",
      theme: "Healthcare",
      status: "Coming Soon",
      focus: "Patient data management",
      bullets: [
        "Building secure data infrastructure",
        "Designing user-centric interfaces",
        "Implementing compliance frameworks"
      ],
      isPlaceholder: true
    },
    {
      id: 3,
      title: "E-commerce Optimization",
      theme: "Retail",
      status: "Coming Soon",
      focus: "Conversion rate optimization",
      bullets: [
        "Analyzing user behavior patterns",
        "A/B testing checkout flows",
        "Implementing personalization engines"
      ],
      isPlaceholder: true
    }
  ];

  return (
    <div>
      <Navigation />
      <main className="pt-24">
        {/* Header */}
        <section className="bg-white py-32 md:py-40">
          <div className="container">
            <h1 className="font-serif font-bold text-6xl md:text-7xl text-foreground mb-8 leading-tight">
              Launch Teams
            </h1>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl">
              Partner directly with early-stage startups to design, build, and deliver real-world solutions.
            </p>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="bg-white border-t border-border py-16 md:py-20">
          <div className="container">
            <h3 className="font-bold text-sm uppercase tracking-wider text-foreground/60 mb-8">On This Page</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <a href="#current-partners" className="text-foreground/70 hover:text-cyan-600 transition-colors font-medium text-sm">Current Partners</a>
              <a href="#what-we-do" className="text-foreground/70 hover:text-cyan-600 transition-colors font-medium text-sm">What We Do</a>
              <a href="#key-experiences" className="text-foreground/70 hover:text-cyan-600 transition-colors font-medium text-sm">Key Experiences</a>
              <a href="#who-should-apply" className="text-foreground/70 hover:text-cyan-600 transition-colors font-medium text-sm">Who Should Apply</a>
            </div>
          </div>
        </section>

        {/* Current Partners */}
        <section id="current-partners" className="bg-white border-t border-border py-32 md:py-40">
          <div className="container">
            <h2 className="font-serif font-bold text-5xl md:text-6xl text-foreground mb-16">
              Current Partners
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {currentPartners.map((partner) => (
                <div key={partner.id} className={`project-card ${partner.isPlaceholder ? 'placeholder-card' : 'glass-card'} rounded-xl p-8 border`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-serif font-bold text-lg text-foreground mb-2">{partner.title}</h3>
                      <span className="text-xs font-semibold uppercase tracking-widest text-cyan-600">{partner.theme}</span>
                    </div>
                  </div>
                  <div className="mb-6">
                    <span className="inline-block text-xs font-bold px-3 py-1 bg-cyan-600 text-white rounded-full">{partner.status}</span>
                  </div>
                  <p className="text-base md:text-lg text-foreground/70 font-light font-medium mb-4">{partner.focus}</p>
                  <ul className="space-y-3 mb-6">
                    {partner.bullets.map((bullet, idx) => (
                      <li key={idx} className="text-base md:text-lg text-foreground/70 font-light flex gap-2">
                        <span className="text-cyan-600 font-bold">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  {!partner.isPlaceholder && (
                    <Link href="/forms" className="inline-flex items-center gap-2 text-cyan-600 font-semibold hover:gap-3 transition-all duration-200 text-sm">
                      Learn More
                      <ArrowRight size={16} />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section id="what-we-do" className="bg-white border-t border-border py-32 md:py-40">
          <div className="container">
            <h2 className="font-serif font-bold text-5xl md:text-6xl text-foreground mb-12">
              What We Do
            </h2>
            <div className="space-y-8">
              <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed">
                Launch Teams work closely with founders and stakeholders on development-focused projects. Members contribute to product development, software or data implementation, prototyping, and iterative testing, alongside strategy and research.
              </p>
              <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed">
                Teams operate with defined scopes, timelines, and deliverables, providing hands-on experience contributing to live products and systems that directly impact real companies.
              </p>
            </div>
          </div>
        </section>

        {/* Our Teams */}
        <section className="bg-white border-t border-border py-32 md:py-40">
          <div className="container">
            <h2 className="font-serif font-bold text-5xl md:text-6xl text-foreground mb-16">
              Our Teams
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
              {teams.map((team) => (
                <Card key={team.id} className="project-card border border-border hover:border-border transition-all duration-300 bg-white rounded-xl">
                  <CardContent className="p-12">
                    <div className="flex items-start justify-between mb-6">
                      <h3 className="font-bold text-xl text-foreground">{team.name}</h3>
                      <span className="text-xs font-bold px-3 py-1 bg-white text-cyan-600 border border-cyan-600 rounded-full">{team.status}</span>
                    </div>
                    <p className="text-foreground/70 leading-relaxed mb-8 text-sm">{team.description}</p>
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center gap-3">
                        <Users size={16} className="text-cyan-600" />
                        <span className="text-base md:text-lg text-foreground/70 font-light">{team.members} members</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Briefcase size={16} className="text-cyan-600" />
                        <span className="text-base md:text-lg text-foreground/70 font-light">{team.focus}</span>
                      </div>
                    </div>
                    <p className="text-base md:text-lg text-foreground/70 font-light mb-8">{team.details}</p>
                    <Link href="https://forms.office.com/Pages/ResponsePage.aspx?id=gcLuqKOqrk2sm5o5i5IV58t6J076SB1BnXzyi1fYH2VUNVU1NFZPWkNMSlU3NFlQRlpGNVhWR1lQVS4u" target="_blank" className="inline-flex items-center gap-2 text-cyan-600 font-semibold hover:gap-3 transition-all duration-200 text-sm">
                      Apply Now
                      <ArrowRight size={16} />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Key Experiences */}
        <section id="key-experiences" className="bg-white border-t border-border py-32 md:py-40">
          <div className="container">
            <h2 className="font-serif font-bold text-5xl md:text-6xl text-foreground mb-16">
              Key Experiences
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="project-card border border-border hover:border-border transition-all duration-300 bg-white rounded-xl">
                <CardContent className="p-10">
                  <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-cyan-600 mb-6 font-bold">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-3">Startup Operations</h3>
                  <p className="text-foreground/70 leading-relaxed text-sm">
                    Experience firsthand how early-stage companies operate, make decisions, and iterate on their products.
                  </p>
                </CardContent>
              </Card>
              <Card className="project-card border border-border hover:border-border transition-all duration-300 bg-white rounded-xl">
                <CardContent className="p-10">
                  <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-cyan-600 mb-6 font-bold">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-3">Real Impact</h3>
                  <p className="text-foreground/70 leading-relaxed text-sm">
                    Your work directly contributes to products and systems that serve real users and customers.
                  </p>
                </CardContent>
              </Card>
              <Card className="project-card border border-border hover:border-border transition-all duration-300 bg-white rounded-xl">
                <CardContent className="p-10">
                  <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-cyan-600 mb-6 font-bold">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-3">Professional Development</h3>
                  <p className="text-foreground/70 leading-relaxed text-sm">
                    Build communication, project management, and stakeholder collaboration skills in real contexts.
                  </p>
                </CardContent>
              </Card>
              <Card className="project-card border border-border hover:border-border transition-all duration-300 bg-white rounded-xl">
                <CardContent className="p-10">
                  <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-cyan-600 mb-6 font-bold">
                    <Code className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-3">Technical Growth</h3>
                  <p className="text-foreground/70 leading-relaxed text-sm">
                    Develop technical skills across design, engineering, data, and product management disciplines.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="bg-white border-t border-border py-32 md:py-40">
          <div className="container">
            <h2 className="font-serif font-bold text-5xl md:text-6xl text-foreground mb-16">
              Application Process
            </h2>
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-lg bg-cyan-600 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2">Submit Your Application</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">Complete the Launch Team application form with your background, interests, and experience.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-lg bg-cyan-600 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2">Team Review</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">Our leadership team reviews your application and matches you with the best team based on your skills and interests.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-lg bg-cyan-600 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2">Interview & Onboarding</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">Meet with your team lead for an interview, then get onboarded to start working on real projects.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who Should Apply */}
        <section id="who-should-apply" className="bg-white border-t border-border py-32 md:py-40">
          <div className="container">
            <h2 className="font-serif font-bold text-5xl md:text-6xl text-foreground mb-12">
              Who Should Apply
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-0.5" />
                <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed">Students from any discipline or background interested in startup environments</p>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-0.5" />
                <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed">Those seeking hands-on experience with real-world product development</p>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-0.5" />
                <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed">Individuals who want to develop professional skills in a collaborative environment</p>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-0.5" />
                <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed">Anyone passionate about contributing to innovative solutions</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white border-t border-border py-32 md:py-40">
          <div className="container text-center">
            <h2 className="font-serif font-bold text-5xl md:text-6xl text-foreground mb-8">Ready to Join a Launch Team?</h2>
            <p className="text-lg text-foreground/70 mb-12 max-w-2xl mx-auto">
              Apply today and start working on real-world projects with early-stage startups.
            </p>
            <Link href="/forms">
              <Button className="bg-cyan-600 hover:bg-cyan-600 text-white font-bold px-8 h-12 rounded-full transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center gap-2">
                Join
                <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-border py-20">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-16 mb-16">
            <div>
              <h4 className="font-serif font-bold text-foreground mb-6">Launch Labs</h4>
              <p className="text-base md:text-lg text-foreground/70 font-light leading-relaxed">
                Northeastern University's hub for real-world project work.
              </p>
            </div>
            <div>
              <h4 className="font-serif font-bold text-foreground mb-6">Explore</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/" className="text-foreground/70 hover:text-cyan-600 transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-foreground/70 hover:text-cyan-600 transition-colors">About</Link></li>
                <li><Link href="/innovation-teams" className="text-foreground/70 hover:text-cyan-600 transition-colors">Innovation Teams</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-bold text-foreground mb-6">Get Involved</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/forms" className="text-foreground/70 hover:text-cyan-600 transition-colors">Apply</Link></li>
                <li><Link href="/leadership" className="text-foreground/70 hover:text-cyan-600 transition-colors">Leadership</Link></li>
                <li><Link href="/partners" className="text-foreground/70 hover:text-cyan-600 transition-colors">Partners</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-bold text-foreground mb-6">Connect</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/contact" className="text-foreground/70 hover:text-cyan-600 transition-colors">Contact</Link></li>
                <li><a href="https://www.linkedin.com/company/nulaunchlabs/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-cyan-600 transition-colors">LinkedIn</a></li>
                <li><a href="https://www.instagram.com/nulaunchlabs/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-cyan-600 transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-base md:text-lg text-foreground/70 font-light">
            <p>&copy; 2026 Northeastern Launch Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
