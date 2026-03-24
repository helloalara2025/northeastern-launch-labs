import Navigation from "@/components/sections/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Leadership() {
  const teamMembers = [
    {
      name: "Leadership Team Member",
      title: "President",
      bio: "Leading Launch Labs with a vision to connect students with real-world impact.",
      email: "leader@launchlabs.neu.edu",
      linkedin: "#"
    },
    {
      name: "Leadership Team Member",
      title: "Vice President",
      bio: "Driving innovation and ensuring every team has the support they need to succeed.",
      email: "vp@launchlabs.neu.edu",
      linkedin: "#"
    },
    {
      name: "Leadership Team Member",
      title: "Operations Lead",
      bio: "Keeping Launch Labs organized and ensuring smooth execution across all initiatives.",
      email: "ops@launchlabs.neu.edu",
      linkedin: "#"
    },
    {
      name: "Leadership Team Member",
      title: "Partnerships Lead",
      bio: "Building relationships with startups and fostering collaboration opportunities.",
      email: "partnerships@launchlabs.neu.edu",
      linkedin: "#"
    }
  ];

  return (
    <div>
      <Navigation />
      <main className="pt-16">
        {/* Header */}
        <section className="bg-white py-32 md:py-40">
          <div className="container">
            <h1 className="font-serif font-bold text-6xl md:text-7xl text-foreground mb-8 leading-tight">
              Our Leadership
            </h1>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl font-medium">
              Meet the students driving Launch Labs forward and making real impact across the Northeastern community.
            </p>
          </div>
        </section>

        {/* Team Members */}
        <section className="bg-white border-t border-border py-32 md:py-40">
          <div className="container">
            <h2 className="font-sans font-bold text-3xl text-foreground mb-16">Leadership Team</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {teamMembers.map((member, index) => (
                <Card key={index} className="border border-border border-border hover:border-border transition-all duration-300 bg-white">
                  <CardContent className="p-10">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg mb-6 flex items-center justify-center">
                      <div className="w-12 h-12 bg-cyan-600 rounded-md"></div>
                    </div>
                    <h3 className="font-bold text-xl text-foreground mb-2">{member.name}</h3>
                    <p className="text-cyan-600 font-bold text-sm mb-4">{member.title}</p>
                    <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                      {member.bio}
                    </p>
                    <div className="flex gap-3">
                      <a 
                        href={`mailto:${member.email}`}
                        className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-cyan-600 hover:bg-gray-100 transition-colors"
                        title="Email"
                      >
                        <Mail size={18} />
                      </a>
                      <a 
                        href={member.linkedin}
                        className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-cyan-600 hover:bg-gray-100 transition-colors"
                        title="LinkedIn"
                      >
                        <Linkedin size={18} />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border border-border border-border hover:border-border transition-all duration-300 bg-white">
              <CardContent className="p-12 text-center">
                <h2 className="font-sans font-bold text-3xl text-foreground mb-4">Join Our Leadership Team</h2>
                <p className="text-foreground/70 mb-10 max-w-2xl mx-auto">
                  Interested in leading Launch Labs? We are always looking for passionate students to help drive our mission.
                </p>
                <Link href="/apply/leadership">
                  <Button className="bg-cyan-600 hover:bg-cyan-600 text-white font-bold px-8 h-12 rounded-lg shadow-md hover:shadow-lg inline-flex items-center gap-2 transition-all duration-200">
                    Apply for Leadership
                    <ArrowRight size={18} />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-border py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-16 mb-12">
            <div>
              <h4 className="font-bold text-foreground mb-4">Launch Labs</h4>
              <p className="text-base md:text-lg text-foreground/70 font-light leading-relaxed">
                Northeastern University's hub for real-world project work.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Explore</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/" className="text-foreground/70 hover:text-cyan-600 transition-colors font-medium">Home</Link></li>
                <li><Link href="/about" className="text-foreground/70 hover:text-cyan-600 transition-colors font-medium">About</Link></li>
                <li><Link href="/launch-teams" className="text-foreground/70 hover:text-cyan-600 transition-colors font-medium">Launch Teams</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Get Involved</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/forms" className="text-foreground/70 hover:text-cyan-600 transition-colors font-medium">Apply</Link></li>
                <li><Link href="/innovation-teams" className="text-foreground/70 hover:text-cyan-600 transition-colors font-medium">Innovation Teams</Link></li>
                <li><Link href="/partners" className="text-foreground/70 hover:text-cyan-600 transition-colors font-medium">Partners</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Connect</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/contact" className="text-foreground/70 hover:text-cyan-600 transition-colors font-medium">Contact</Link></li>
                <li><a href="#" className="text-foreground/70 hover:text-cyan-600 transition-colors font-medium">LinkedIn</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-cyan-600 transition-colors font-medium">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-base md:text-lg text-foreground/70 font-light">
            <p>&copy; 2025 Northeastern Launch Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
