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
    <div className="bg-[#F5F0EB] min-h-screen text-[#1a1a1a] font-sans">
      <Navigation />
      <main>
        {/* Header */}
        <section className="pt-40 pb-24 md:pt-56 md:pb-32 border-b border-[#1a1a1a]/8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(139,26,19,0.06)_1px,transparent_1px)] [background-size:24px_24px] opacity-50" />
          <svg
            className="absolute top-[-80px] right-[-180px] w-[600px] h-[600px] pointer-events-none"
            viewBox="0 0 600 600"
            fill="none"
          >
            <circle cx="600" cy="0" r="400" stroke="#8B1A13" strokeWidth="1.5" opacity="0.12" />
            <circle cx="600" cy="0" r="500" stroke="#8B1A13" strokeWidth="0.8" opacity="0.06" />
          </svg>
          <div className="container relative z-10">
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 border border-[#8B1A13]/20 bg-[#8B1A13]/5 text-xs font-mono text-[#8B1A13] uppercase tracking-wider">
                <span className="w-2 h-2 bg-[#8B1A13]" />
                Leadership
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 leading-[0.9]">
              LEADERSHIP.
            </h1>
            <p className="text-lg md:text-xl text-[#1a1a1a]/55 leading-relaxed max-w-3xl">
              Meet the students driving Launch Labs forward — and join the next team.
            </p>
          </div>
        </section>

        {/* Fall 2026 — Open Positions (TOP) — Red accent background */}
        <section className="py-24 md:py-32 bg-[#8B1A13] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:24px_24px]" />

          <div className="container relative z-10">
            {/* Section Label */}
            <div className="mb-12 flex items-center gap-4">
              <span className="font-mono text-[10px] text-white/40 uppercase tracking-[0.2em]">
                Fall 2026 E-Board
              </span>
              <div className="flex-1 h-px bg-white/15" />
              <span className="inline-flex items-center gap-2 px-3 py-1 border border-[#f5c518]/40 bg-[#f5c518]/10">
                <span className="w-1.5 h-1.5 bg-[#f5c518] animate-pulse" />
                <span className="font-mono text-[10px] text-[#f5c518] uppercase tracking-[0.15em] font-bold">
                  Now Recruiting
                </span>
              </span>
            </div>

            <div className="mb-12 max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                OPEN POSITIONS
              </h2>
              <p className="text-white/65 text-base leading-relaxed">
                We're looking for motivated students to lead Launch Labs into the Fall 2026 semester. Read through the role descriptions and apply to the position that best fits your interests.
              </p>
            </div>

            {/* Roles List */}
            <div className="space-y-4 mb-16">
              {fall2026Roles.map((role, idx) => (
                <div
                  key={role.title}
                  className="group border border-white/10 bg-white/5 p-6 md:p-8 hover:border-[#f5c518]/40 hover:bg-white/8 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                    {/* Index */}
                    <span className="font-mono text-[10px] text-[#f5c518] pt-1 flex-shrink-0 font-bold">
                      {String(idx + 1).padStart(2, "0")}
                    </span>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                        <h3 className="text-lg font-bold text-white">
                          {role.title}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-[10px] text-[#f5c518]/80 uppercase tracking-[0.1em]">
                            {role.spots}
                          </span>
                          <span className="text-white/20">|</span>
                          <span className="font-mono text-[10px] text-white/40 uppercase tracking-[0.1em]">
                            {role.commitment}
                          </span>
                        </div>
                      </div>
                      <p className="text-white/55 text-sm leading-relaxed">
                        {role.summary}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Apply CTA */}
            <div className="bg-white/5 border border-white/10 p-10 md:p-16 text-center relative overflow-hidden group hover:border-[#f5c518]/30 transition-colors duration-300">
              <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-4 text-white">
                READY TO LEAD?
              </h3>
              <p className="text-white/55 mb-8 max-w-xl mx-auto leading-relaxed">
                Applications for Fall 2026 leadership positions are now open. You'll need your resume as a Google Drive link with public access.
              </p>
              <a
                href={APPLICATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#8B1A13] font-mono text-[11px] uppercase tracking-[0.15em] font-bold hover:bg-[#f5c518] hover:text-[#1a1a1a] transition-colors duration-200"
              >
                Apply for E-Board
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* Spring 2026 Team (BELOW) */}
        <section className="py-24 md:py-32 border-b border-[#1a1a1a]/8 relative">
          <div className="container">
            {/* Section Label */}
            <div className="mb-12 flex items-center gap-4">
              <span className="font-mono text-[10px] text-[#1a1a1a]/30 uppercase tracking-[0.2em]">
                Spring 2026 E-Board
              </span>
              <div className="flex-1 h-px bg-[#1a1a1a]/8" />
              <span className="inline-flex items-center gap-2 px-3 py-1 border border-[#1a1a1a]/10 bg-[#1a1a1a]/3">
                <span className="w-1.5 h-1.5 bg-green-500" />
                <span className="font-mono text-[10px] text-[#1a1a1a]/40 uppercase tracking-[0.15em]">
                  Current Team
                </span>
              </span>
            </div>

            {/* Member Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {spring2026Team.map((member, idx) => (
                <div
                  key={member.name}
                  className="group bg-white border border-[#1a1a1a]/5 p-8 hover:border-[#8B1A13] transition-colors duration-300 relative overflow-hidden"
                >
                  {/* Red top stripe on hover */}
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-[#8B1A13] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B1A13] opacity-0 group-hover:opacity-5 rounded-full blur-3xl transition-opacity duration-500" />
                  <span className="font-mono text-[10px] text-[#8B1A13]/40 uppercase tracking-[0.2em] mb-4 block">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h4 className="text-lg md:text-xl font-bold mb-2 text-[#1a1a1a]">
                    {member.name}
                  </h4>
                  <p className="text-[#8B1A13] font-mono text-[11px] uppercase tracking-[0.15em]">
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
