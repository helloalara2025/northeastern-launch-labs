import Navigation from "@/components/sections/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";

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
        <section className="bg-white py-20 md:py-28">
          <div className="container max-w-4xl">
            <h1 className="font-sans font-bold text-5xl md:text-6xl text-foreground mb-6">
              Our Leadership
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Meet the students driving Launch Labs forward and making real impact across the Northeastern community.
            </p>
          </div>
        </section>

        {/* Team Members */}
        <section className="bg-foreground/5 border-t border-foreground/10 py-20 md:py-28">
          <div className="container max-w-4xl">
            <div className="grid md:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="border border-foreground/10 shadow-none hover:shadow-md transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-red-100 rounded-lg mb-6 flex items-center justify-center">
                      <div className="w-12 h-12 bg-red-800 rounded-md"></div>
                    </div>
                    <h3 className="font-bold text-xl text-foreground mb-1">{member.name}</h3>
                    <p className="text-red-800 font-bold text-sm mb-4">{member.title}</p>
                    <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                      {member.bio}
                    </p>
                    <div className="flex gap-3">
                      <a 
                        href={`mailto:${member.email}`}
                        className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-red-800 hover:bg-red-100 transition-colors"
                        title="Email"
                      >
                        <Mail size={18} />
                      </a>
                      <a 
                        href={member.linkedin}
                        className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-red-800 hover:bg-red-100 transition-colors"
                        title="LinkedIn"
                      >
                        <Linkedin size={18} />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 bg-white border border-foreground/10 rounded-lg p-8 text-center">
              <h2 className="font-bold text-2xl text-foreground mb-4">Join Our Leadership Team</h2>
              <p className="text-foreground/70 mb-6">
                Interested in leading Launch Labs? We're always looking for passionate students to help drive our mission.
              </p>
              <a href="/forms" className="inline-block">
                <button className="bg-red-800 hover:bg-red-900 text-white font-bold px-8 h-12 rounded-lg transition-all duration-200">
                  Apply for Leadership
                </button>
              </a>
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
                <li><a href="/forms" className="text-foreground/70 hover:text-red-800 transition-colors">Forms</a></li>
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
