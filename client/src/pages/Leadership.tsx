import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import { ArrowRight } from "lucide-react";

const APPLICATION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeRnvxsGPbkl7Nuo4WX77wV6sB8twjy5v5W1SP7oqjrjZ6CAw/viewform";

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

const fall2026Roles = [
  "President",
  "Vice President",
  "Director of Engineering",
  "Director of Design",
  "Director of Marketing",
  "Events Coordinator",
  "Treasurer",
  "Secretary",
];

function MemberCard({ member, index }: { member: LeadershipMember; index: number }) {
  return (
    <div className="group bg-secondary border border-[rgba(255,255,255,0.05)] p-8 hover:border-red transition-colors duration-300 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-red opacity-0 group-hover:opacity-5 rounded-full blur-3xl transition-opacity duration-500" />
      {/* Index number */}
      <span className="font-mono text-[10px] text-white/20 uppercase tracking-[0.2em] mb-4 block">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h4 className="text-xl md:text-2xl font-bold mb-2 text-white">{member.name}</h4>
      <p className="text-red font-mono text-[11px] uppercase tracking-[0.15em]">
        {member.role}
      </p>
    </div>
  );
}

export default function Leadership() {
  return (
    <div className="bg-primary min-h-screen text-white font-sans">
      <Navigation />
      <main>
        {/* Header */}
        <section className="pt-40 pb-24 md:pt-56 md:pb-32 border-b border-[rgba(255,255,255,0.1)] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:24px_24px] opacity-50" />
          {/* Subtle arc */}
          <svg
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.04] pointer-events-none"
            viewBox="0 0 800 800"
            fill="none"
          >
            <circle cx="400" cy="400" r="350" stroke="white" strokeWidth="1" />
            <circle cx="400" cy="400" r="250" stroke="white" strokeWidth="0.5" />
          </svg>
          <div className="container relative z-10">
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 border border-[rgba(255,255,255,0.1)] bg-secondary text-xs font-mono text-muted uppercase tracking-wider">
                <span className="w-2 h-2 bg-red" />
                Leadership
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
              LEADERSHIP.
            </h1>
            <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-3xl font-medium">
              Meet the students driving Launch Labs forward.
            </p>
          </div>
        </section>

        {/* Spring 2026 Team */}
        <section className="py-24 md:py-32 border-b border-[rgba(255,255,255,0.1)] relative">
          <div className="container">
            {/* Section Label */}
            <div className="mb-12 flex items-center gap-4">
              <span className="font-mono text-[10px] text-white/30 uppercase tracking-[0.2em]">
                Spring 2026 E-Board
              </span>
              <div className="flex-1 h-px bg-[rgba(255,255,255,0.08)]" />
              <span className="inline-flex items-center gap-2 px-3 py-1 border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)]">
                <span className="w-1.5 h-1.5 bg-green-500" />
                <span className="font-mono text-[10px] text-white/40 uppercase tracking-[0.15em]">
                  Active
                </span>
              </span>
            </div>

            {/* Member Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {spring2026Team.map((member, idx) => (
                <MemberCard key={member.name} member={member} index={idx} />
              ))}
            </div>
          </div>
        </section>

        {/* Fall 2026 — Open Roles */}
        <section className="py-24 md:py-32 border-b border-[rgba(255,255,255,0.1)] relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute -right-[10%] top-[10%] w-[500px] h-[500px] border border-red/10 pointer-events-none" />
          <div className="absolute -left-[5%] bottom-[5%] w-[300px] h-[300px] border border-red/5 pointer-events-none" />

          <div className="container relative z-10">
            {/* Section Label */}
            <div className="mb-12 flex items-center gap-4">
              <span className="font-mono text-[10px] text-white/30 uppercase tracking-[0.2em]">
                Fall 2026 E-Board
              </span>
              <div className="flex-1 h-px bg-[rgba(255,255,255,0.08)]" />
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
              <p className="text-muted text-lg leading-relaxed">
                We're looking for motivated students to lead Launch Labs into the Fall 2026 semester. If you're passionate about building, organizing, or growing a community, apply below.
              </p>
            </div>

            {/* Roles Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
              {fall2026Roles.map((role, idx) => (
                <div
                  key={role}
                  className="group border border-[rgba(255,255,255,0.08)] bg-secondary p-6 hover:border-red/40 transition-colors duration-300"
                >
                  <span className="font-mono text-[10px] text-white/20 block mb-3">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <p className="font-sans text-sm font-semibold text-white/80 group-hover:text-white transition-colors">
                    {role}
                  </p>
                </div>
              ))}
            </div>

            {/* Apply CTA */}
            <div className="bg-secondary border border-[rgba(255,255,255,0.05)] p-10 md:p-16 text-center relative overflow-hidden group hover:border-red/30 transition-colors duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red opacity-0 group-hover:opacity-5 rounded-full blur-3xl transition-opacity duration-500" />
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                READY TO LEAD?
              </h3>
              <p className="text-muted mb-8 max-w-xl mx-auto leading-relaxed">
                Applications for Fall 2026 leadership positions are now open. Join the team shaping the next generation of builders at Northeastern.
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
      </main>

      <Footer />
    </div>
  );
}
