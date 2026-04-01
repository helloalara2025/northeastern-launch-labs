import Navigation from "@/components/sections/Navigation";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "Project Alpha",
      description: "A comprehensive platform for managing student organization resources and events.",
      tags: ["React", "Node.js", "PostgreSQL"],
      status: "Active",
      link: "#"
    },
    {
      title: "Project Beta",
      description: "An innovative mobile application designed to help students navigate campus facilities.",
      tags: ["React Native", "Firebase", "Maps API"],
      status: "In Development",
      link: "#"
    },
    {
      title: "Project Gamma",
      description: "A data analytics dashboard for tracking sustainability metrics across university buildings.",
      tags: ["Python", "Django", "D3.js"],
      status: "Completed",
      link: "#"
    }
  ];

  return (
    <div className="bg-primary min-h-screen text-white font-sans">
      <Navigation />
      <main>
        {/* Header */}
        <section className="pt-40 pb-24 md:pt-56 md:pb-32 border-b border-[rgba(255,255,255,0.1)] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:24px_24px] opacity-50"></div>
          
          {/* Red Arc SVG Strokes */}
          <svg className="absolute top-[-100px] right-[-200px] w-[600px] h-[600px] pointer-events-none" viewBox="0 0 600 600" fill="none">
            <circle cx="600" cy="0" r="400" stroke="#dc2626" strokeWidth="1" opacity="0.3"/>
            <circle cx="600" cy="0" r="500" stroke="#dc2626" strokeWidth="0.5" opacity="0.15"/>
          </svg>

          <div className="container relative z-10">
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(255,255,255,0.1)] bg-secondary text-xs font-mono text-muted uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-red"></span>
                Portfolio
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9] uppercase">
              OUR <br />
              <span className="text-red">WORK.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-3xl font-medium">
              Explore the projects built by our Launch and Innovation teams. Real-world solutions created by Northeastern students.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-24 md:py-32 relative">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-secondary border border-[rgba(255,255,255,0.05)] p-8 rounded-xl group hover:border-red transition-colors duration-300 flex flex-col h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red opacity-0 group-hover:opacity-5 rounded-full blur-2xl transition-opacity duration-500"></div>
                  
                  <div className="flex justify-between items-start mb-6 relative z-10">
                    <span className={`px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider ${
                      project.status === 'Active' ? 'bg-green-500/10 text-green-500 border border-green-500/20' :
                      project.status === 'Completed' ? 'bg-blue-500/10 text-blue-500 border border-blue-500/20' :
                      'bg-yellow/10 text-yellow border border-yellow/30'
                    }`}>
                      {project.status}
                    </span>
                    <div className="flex gap-3">
                      <a href={project.link} className="text-muted hover:text-white transition-colors">
                        <Github size={20} />
                      </a>
                      <a href={project.link} className="text-muted hover:text-white transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 uppercase relative z-10">{project.title}</h3>
                  <p className="text-muted mb-8 flex-grow relative z-10">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs font-mono text-white/60 bg-[rgba(255,255,255,0.03)] px-2 py-1 rounded border border-[rgba(255,255,255,0.05)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
