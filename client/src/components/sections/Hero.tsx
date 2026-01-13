import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 bg-white overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/3 rounded-full blur-3xl -z-10"></div>

      <div className="container relative z-10 grid lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/8 text-primary text-xs font-semibold uppercase tracking-wider">
              Student Organization
            </div>
            <h1 className="font-sans font-semibold text-6xl md:text-7xl lg:text-8xl tracking-tight text-foreground leading-tight">
              Build Real Products. Make Real Impact.
            </h1>
          </div>
          
          <p className="text-xl text-foreground/60 leading-relaxed max-w-xl font-regular">
            Northeastern Launch Labs connects students across all majors to work on end-to-end projects with startups and internal teams.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <a href="/forms">
              <Button 
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 h-12 rounded-lg text-base flex items-center gap-2 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Apply to Join
                <ArrowRight size={18} />
              </Button>
            </a>
            <a href="/about">
              <Button 
                variant="outline" 
                className="border-2 border-foreground/15 text-foreground font-semibold px-8 h-12 rounded-lg text-base hover:bg-foreground/5 hover:border-foreground/25 transition-all duration-200"
              >
                Learn More
              </Button>
            </a>
          </div>
        </div>
        
        {/* Enhanced Notion/Figma-inspired Visual */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="relative w-full h-full min-h-96">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
              {/* Refined background grid */}
              <defs>
                <pattern id="refinedGrid" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-foreground" />
                </pattern>
              </defs>
              <rect width="400" height="400" fill="url(#refinedGrid)" fillOpacity="0.04" />
              
              {/* Sophisticated block hierarchy */}
              <g className="text-primary">
                {/* Primary block - center */}
                <rect x="60" y="80" width="280" height="140" rx="12" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3" />
                <circle cx="95" cy="120" r="5" fill="currentColor" fillOpacity="0.7" />
                <line x1="110" y1="120" x2="200" y2="120" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.25" />
                <line x1="110" y1="140" x2="280" y2="140" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" />
                <circle cx="95" cy="180" r="5" fill="currentColor" fillOpacity="0.5" />
                <line x1="110" y1="180" x2="220" y2="180" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.2" />
                
                {/* Secondary blocks - top */}
                <rect x="40" y="20" width="110" height="50" rx="8" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.2" />
                <rect x="250" y="20" width="110" height="50" rx="8" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.2" />
                
                {/* Secondary blocks - bottom */}
                <rect x="40" y="250" width="110" height="50" rx="8" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.2" />
                <rect x="250" y="250" width="110" height="50" rx="8" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.2" />
              </g>
              
              {/* Elegant connecting lines */}
              <g stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.12" fill="none" className="text-primary">
                <path d="M 95 70 L 95 80" />
                <path d="M 305 70 L 305 80" />
                <path d="M 95 220 L 95 250" />
                <path d="M 305 220 L 305 250" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
