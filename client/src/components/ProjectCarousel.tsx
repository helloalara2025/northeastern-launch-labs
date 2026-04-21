import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Link } from "wouter";

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: 6,
      title: "AI/ML Pipeline Security",
      subtitle: "End-to-End Protection for the Modern AI Lifecycle",
      theme: "Security",
      status: "Active",
      focus: "Adversarial robustness testing & compliance frameworks",
      description: "Building a comprehensive security framework protecting AI systems across their entire lifecycle with adversarial robustness testing, cryptographic data integrity, and real-time monitoring.",
      bullets: [
        "Adversarial defense and inference monitoring prototype",
        "Compliance reporting against NIST AI RMF standards",
        "Real-time anomaly detection dashboard"
      ]
    },
    {
      id: 19,
      title: "Campus Navigation",
      subtitle: "Interactive Wayfinding for Northeastern",
      theme: "EdTech",
      status: "Active",
      focus: "Mobile wayfinding with interactive floor plans",
      description: "Cross-platform React Native app helping students and staff locate and navigate campus buildings with interactive SVG floor plans and searchable room directory.",
      bullets: [
        "Cross-platform React Native with SVG floor plans",
        "Searchable room directory with Firebase backend",
        "Single-building MVP with pinch-to-zoom navigation"
      ]
    },
    {
      id: 7,
      title: "Indoor Navigation",
      subtitle: "Visual Intelligence Without Infrastructure",
      theme: "Computer Vision",
      status: "Active",
      focus: "Landmark-based visual localization & pathfinding",
      description: "Mobile indoor navigation using only a phone's camera to guide users without WiFi, Bluetooth beacons, or installed infrastructure.",
      bullets: [
        "OpenCV-based image matching for landmark recognition",
        "A* pathfinding on digitized floor plan graphs",
        "Turn-by-turn visual directions inside buildings"
      ]
    },
    {
      id: 11,
      title: "Document Intelligence",
      subtitle: "Visual Reasoning Beyond OCR",
      theme: "FinTech",
      status: "Active",
      focus: "Vision-Language Models for document extraction",
      description: "Autonomous document extraction system using Vision-Language Models to transform loan document processing beyond brittle OCR.",
      bullets: [
        "VLM-based field extraction for synthetic pay stubs",
        "Basic anomaly detection and consistency validation",
        "Accuracy benchmarking against traditional OCR"
      ]
    },
    {
      id: 12,
      title: "Roommate Matching",
      subtitle: "Data-Driven Compatibility for Student Housing",
      theme: "Social",
      status: "Active",
      focus: "Intelligent matching algorithm & compatibility scoring",
      description: "Intelligent roommate matching platform helping students find compatible living partners based on preferences, habits, lifestyle, and values.",
      bullets: [
        "Centralized database for user profiles and criteria",
        "Weighted preference comparison scoring system",
        "Browsing interface with compatibility filtering"
      ]
    },
    {
      id: 16,
      title: "Geospatial Analysis for Climate",
      subtitle: "Community-Driven Climate Resilience Platform",
      theme: "Impact",
      status: "Active",
      focus: "Open-source platform for citizen science geospatial analysis",
      description: "Open-source platform empowering communities to conduct rigorous geospatial analyses exploring sustainable urban development and climate resilience.",
      bullets: [
        "Pedagogical research environment for community data exploration",
        "Urban heat mitigation analysis package",
        "Reusable tools for park cooling effects evaluation"
      ]
    },
    {
      id: 17,
      title: "Environment-Aware Fitness Routing",
      subtitle: "Safe Running Through Real-Time Hazard Intelligence",
      theme: "HealthTech",
      status: "Active",
      focus: "Mobile routing with ice risk & air quality awareness",
      description: "Mobile fitness routing app generating safe running routes by incorporating real-time environmental awareness of ice, snow, air quality, and transit proximity.",
      bullets: [
        "Heuristic ice risk model using weather and building shadows",
        "EPA AirNow air quality overlays and MBTA transit constraints",
        "Crowdsourced validation layer for real-time sidewalk reports"
      ]
    },
    {
      id: 18,
      title: "AI-Driven Cybersecurity Platform",
      subtitle: "Risk & Governance for Organizations",
      theme: "Security",
      status: "Active",
      focus: "NIST CSF compliance and AI-powered risk assessment",
      description: "AI-powered cybersecurity risk and governance platform helping organizations identify, assess, and manage cyber risks through structured compliance frameworks.",
      bullets: [
        "Guided questionnaire-based risk assessment engine",
        "Weighted scoring algorithm across NIST core functions",
        "AI-driven remediation recommendations and incident response plans"
      ]
    }
  ];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentProject = projects[currentIndex];

  return (
    <section className="relative py-32 md:py-48 bg-primary border-b border-[rgba(255,255,255,0.1)]">
      <div className="container">
        <div className="mb-16">
          <h2 className="text-sm font-mono text-red uppercase tracking-widest mb-4">Featured Work</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            INNOVATION TEAMS
          </h3>
          <p className="text-xl text-muted font-light">
            Explore our 8 active teams driving real-world impact
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Card */}
          <div className="bg-secondary border border-[rgba(255,255,255,0.05)] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red opacity-0 group-hover:opacity-5 rounded-full blur-3xl transition-opacity duration-500"></div>
            <div className="grid md:grid-cols-2 gap-12 p-12 relative z-10">
              {/* Left: Project Info */}
              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <Star className="w-6 h-6 text-red" />
                    <span className="text-sm font-bold uppercase tracking-widest text-red">
                      {currentProject.theme}
                    </span>
                  </div>

                  <h3 className="font-sans font-black text-4xl md:text-5xl text-white mb-3">
                    {currentProject.title}
                  </h3>

                  <p className="text-lg text-muted font-light italic mb-8">
                    {currentProject.subtitle}
                  </p>

                  <p className="text-lg text-white/70 font-light leading-relaxed mb-8">
                    {currentProject.description}
                  </p>

                  <div className="mb-8">
                    <span className="inline-block text-xs font-mono uppercase tracking-widest px-4 py-2 border border-red/30 bg-red/10 text-red">
                      {currentProject.status}
                    </span>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-4">
                  <button
                    onClick={goToPrevious}
                    className="flex items-center justify-center w-12 h-12 border border-[rgba(255,255,255,0.2)] hover:border-red hover:bg-red/10 transition-all duration-300 text-white"
                    aria-label="Previous project"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={goToNext}
                    className="flex items-center justify-center w-12 h-12 border border-[rgba(255,255,255,0.2)] hover:border-red hover:bg-red/10 transition-all duration-300 text-white"
                    aria-label="Next project"
                  >
                    <ChevronRight size={20} />
                  </button>
                  <div className="flex-1 flex items-center justify-end">
                    <span className="text-sm font-mono text-muted">
                      {currentIndex + 1} / {projects.length}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: Bullets & Focus */}
              <div className="border-l border-[rgba(255,255,255,0.1)] pl-12 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-muted mb-6">
                    Focus Area
                  </p>
                  <p className="text-2xl font-bold text-white mb-12">
                    {currentProject.focus}
                  </p>

                  <p className="text-xs font-mono uppercase tracking-widest text-muted mb-6">
                    Current Work
                  </p>
                  <ul className="space-y-4">
                    {currentProject.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex gap-4">
                        <span className="text-red font-bold flex-shrink-0">▸</span>
                        <span className="text-lg text-white/70 font-light">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="/portfolio" className="inline-flex items-center gap-2 text-red font-bold hover:text-white transition-colors duration-200 text-sm uppercase tracking-wider mt-8">
                  View All Teams
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex gap-2 mt-8 justify-center">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1 transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-8 bg-red"
                    : "w-4 bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.4)]"
                }`}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
