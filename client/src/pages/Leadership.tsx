import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import { ArrowRight } from "lucide-react";

const APPLICATION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeRnvxsGPbkl7Nuo4WX77wV6sB8twjy5v5W1SP7oqjrjZ6CAw/viewform";

interface OpenRole {
  title: string;
  spots: string;
  commitment: string;
  summary: string;
}

const fall2026Roles: OpenRole[] = [
  {
    title: "Secretary",
    spots: "1 position",
    commitment: "5–10 hrs/week",
    summary:
      "Manage communications, scheduling, meeting notes, and internal records to keep the org running smoothly.",
  },
  {
    title: "Treasurer",
    spots: "1 position",
    commitment: "5–10 hrs/week",
    summary:
      "Oversee the organization's budget, track spending, process reimbursements, and support fundraising efforts.",
  },
  {
    title: "Events Chair",
    spots: "2 positions",
    commitment: "5–10 hrs/week",
    summary:
      "Plan, organize, and execute events that strengthen community, visibility, and member experience.",
  },
  {
    title: "Operations Chair",
    spots: "6–7 positions",
    commitment: "~10 hrs/week",
    summary:
      "Oversee project teams, check in on progress and blockers, and help build internal processes for team management.",
  },
  {
    title: "Graphic Designer / Branding Associate",
    spots: "1 position",
    commitment: "5–10 hrs/week",
    summary:
      "Maintain the visual identity across all platforms, create graphics and templates, and support internal teams with design needs.",
  },
];

interface LeadershipMember {
  name: string;
  role: string;
}

const spring2026Team: LeadershipMember[] = [
  { name: "Drew Hill", role: "Co-Founder / President" },
  { name: "Prisha Srivastava", role: "Co-Founder / President" },
  { name: "Alara Hakki", role: "Communication & Outreach Chair" },
  { name: "Grace Ou", role: "Events Coordinator" },
  { name: "Neha Bhende", role: "Cybersecurity" },
  { name: "Vansh Samaiya", role: "Secretary" },
  { name: "Sanay Kumar", role: "Treasurer" },
  { name: "Shaunak Soni", role: "Operations" },
  { name: "Ihika Reddy", role: "Operations" },
];

export default function Leadership() {
  return (
    <div className="bg-primary min-h-screen text-foreground font-sans">
      <Navigation />
      <main>
        {/* Header */}
        <section className="pt-40 pb-24 md:pt-56 md:pb-32 border-b border-foreground/8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(26,26,26,0.04)_1px,transparent_1px)] [background-size:24px_24px] opacity-50" />
          <svg
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03] pointer-events-none"
            viewBox="0 0 800 800"
            fill="none"
          >
            <circle cx="400" cy="400" r="350" stroke="currentColor" strokeWidth="1" />
            <circle cx="400" cy="400" r="250" stroke="currentColor" strokeWidth="0.5" />
          </svg>
          <div className="container relative z-10">
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 border border-foreground/10 bg-secondary text-xs font-mono text-foreground/55 uppercase tracking-wider">
                <span className="w-2 h-2 bg-red" />
                Leadership
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
              LEADERSHIP.
            </h1>
            <p className="text-xl md:text-2xl text-foreground/55 leading-relaxed max-w-3xl font-medium">
              Meet the students driving Launch Labs forward — and join the next team.
            </p>
          </div>
        </section>

        {/* Fall 2026 — Open Positions (TOP) */}
        <section className="py-24 md:py-32 border-b border-foreground/8 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute -right-[10%] top-[10%] w-[500px] h-[500px] border border-red/10 pointer-events-none" />
          <div className="absolute -left-[5%] bottom-[5%] w-[300px] h-[300px] border border-red/5 pointer-events-none" />

          <div className="container relative z-10">
            {/* Section Label */}
            <div className="mb-12 flex items-center gap-4">
              <span className="font-mono text-[10px] text-foreground/30 uppercase tracking-[0.2em]">
                Fall 2026 E-Board
              </span>
              <div className="flex-1 h-px bg-foreground/8" />
              <span className="inline-flex items-center gap-2 px-3 py-1 border border-red/30 bg-red/5">
                <span className="w-1.5 h-1.5 bg-red animate-pulse" />
                <span className="font-mono text-[10px] text-red/80 uppercase tracking-[0.15em]">
                  Now Recruiting
                </span>
              </span>
            </div>

            <div className="mb-12 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                OPEN POSITIONS
              </h2>
              <p className="text-foreground/55 text-lg leading-relaxed">
                We're looking for motivated students to lead Launch Labs into the Fall 2026 semester. Read through the role descriptions and apply to the position that best fits your interests.
              </p>
            </div>

            {/* Roles List */}
            <div className="space-y-4 mb-16">
              {fall2026Roles.map((role, idx) => (
                <div
                  key={role.title}
                  className="group border border-foreground/8 bg-secondary p-6 md:p-8 hover:border-red/40 transition-colors duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                    {/* Index */}
                    <span className="font-mono text-[10px] text-foreground/20 pt-1 flex-shrink-0">
                      {String(idx + 1).padStart(2, "0")}
                    </span>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                        <h3 className="text-lg font-bold text-foreground group-hover:text-foreground transition-colors">
                          {role.title}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-[10px] text-red/70 uppercase tracking-[0.1em]">
                            {role.spots}
                          </span>
                          <span className="text-foreground/10">|</span>
                          <span className="font-mono text-[10px] text-foreground/30 uppercase tracking-[0.1em]">
                            {role.commitment}
                          </span>
                        </div>
                      </div>
                      <p className="text-foreground/50 text-sm leading-relaxed">
                        {role.summary}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Apply CTA */}
            <div className="bg-secondary border border-foreground/5 p-10 md:p-16 text-center relative overflow-hidden group hover:border-red/30 transition-colors duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red opacity-0 group-hover:opacity-5 rounded-full blur-3xl transition-opacity duration-500" />
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                READY TO LEAD?
              </h3>
              <p className="text-foreground/55 mb-8 max-w-xl mx-auto leading-relaxed">
                Applications for Fall 2026 leadership positions are now open. You'll need your resume as a Google Drive link with public access.
              </p>
              <a
                href={APPLICATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-red text-white font-mono text-[11px] uppercase tracking-[0.15em] hover:bg-red/90 transition-colors duration-200"
              >
                Apply for E-Board
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* Spring 2026 Team (BELOW) */}
        <section className="py-24 md:py-32 border-b border-foreground/8 relative">
          <div className="container">
            {/* Section Label */}
            <div className="mb-12 flex items-center gap-4">
              <span className="font-mono text-[10px] text-foreground/30 uppercase tracking-[0.2em]">
                Spring 2026 E-Board
              </span>
              <div className="flex-1 h-px bg-foreground/8" />
              <span className="inline-flex items-center gap-2 px-3 py-1 border border-foreground/10 bg-foreground/3">
                <span className="w-1.5 h-1.5 bg-green-500" />
                <span className="font-mono text-[10px] text-foreground/40 uppercase tracking-[0.15em]">
                  Current Team
                </span>
              </span>
            </div>

            {/* Member Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {spring2026Team.map((member, idx) => (
                <div
                  key={member.name}
                  className="group bg-secondary border border-foreground/5 p-8 hover:border-red transition-colors duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red opacity-0 group-hover:opacity-5 rounded-full blur-3xl transition-opacity duration-500" />
                  <span className="font-mono text-[10px] text-foreground/20 uppercase tracking-[0.2em] mb-4 block">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h4 className="text-xl md:text-2xl font-bold mb-2 text-foreground">
                    {member.name}
                  </h4>
                  <p className="text-red font-mono text-[11px] uppercase tracking-[0.15em]">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
