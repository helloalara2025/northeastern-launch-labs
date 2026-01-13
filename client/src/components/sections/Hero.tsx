import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-20 bg-white overflow-hidden">
      <div className="container relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/8 text-primary text-xs font-semibold uppercase tracking-wider">
              Student Organization
            </div>
            <h1 className="font-sans font-semibold text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground leading-tight">
              Build Real Products. Make Real Impact.
            </h1>
          </div>
          
          <p className="text-lg text-foreground/70 leading-relaxed max-w-lg font-regular">
            Northeastern Launch Labs connects students across all majors to work on end-to-end projects with startups and internal teams.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <a href="/forms">
              <Button 
                className="bg-primary hover:bg-primary/90 text-white font-medium px-6 h-11 rounded-lg text-base"
              >
                Apply to Join
              </Button>
            </a>
            <a href="/about">
              <Button 
                variant="outline" 
                className="border border-foreground/20 text-foreground font-medium px-6 h-11 rounded-lg text-base hover:bg-foreground/5"
              >
                Learn More
              </Button>
            </a>
          </div>
        </div>
        
        {/* Refined Notion/Figma-inspired Visual */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="relative w-full h-96">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
              {/* Subtle background grid */}
              <defs>
                <pattern id="subtleGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-foreground" />
                </pattern>
              </defs>
              <rect width="400" height="400" fill="url(#subtleGrid)" fillOpacity="0.05" />
              
              {/* Organized blocks representing structured work - Notion/Figma style */}
              <g className="text-primary">
                {/* Top left block */}
                <rect x="30" y="40" width="100" height="80" rx="8" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="50" cy="60" r="4" fill="currentColor" fillOpacity="0.6" />
                <line x1="60" y1="60" x2="110" y2="60" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
                <line x1="60" y1="70" x2="110" y2="70" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
                
                {/* Top right block */}
                <rect x="270" y="40" width="100" height="80" rx="8" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="290" cy="60" r="4" fill="currentColor" fillOpacity="0.5" />
                <line x1="300" y1="60" x2="350" y2="60" stroke="currentColor" strokeWidth="1" strokeOpacity="0.25" />
                <line x1="300" y1="70" x2="350" y2="70" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" />
                
                {/* Center large block */}
                <rect x="80" y="160" width="240" height="120" rx="8" fill="currentColor" fillOpacity="0.04" stroke="currentColor" strokeWidth="2" />
                <circle cx="110" cy="190" r="5" fill="currentColor" fillOpacity="0.7" />
                <circle cx="200" cy="190" r="5" fill="currentColor" fillOpacity="0.5" />
                <circle cx="290" cy="190" r="5" fill="currentColor" fillOpacity="0.6" />
                <line x1="120" y1="190" x2="190" y2="190" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
                <line x1="210" y1="190" x2="280" y2="190" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
                
                {/* Bottom blocks */}
                <rect x="30" y="310" width="120" height="60" rx="8" fill="currentColor" fillOpacity="0.07" stroke="currentColor" strokeWidth="1.5" />
                <rect x="250" y="310" width="120" height="60" rx="8" fill="currentColor" fillOpacity="0.07" stroke="currentColor" strokeWidth="1.5" />
              </g>
              
              {/* Connecting lines - minimal, refined */}
              <g stroke="currentColor" strokeWidth="1" strokeOpacity="0.12" fill="none" className="text-primary">
                <path d="M 130 120 L 130 160" />
                <path d="M 320 120 L 320 160" />
                <path d="M 130 280 L 130 310" />
                <path d="M 320 280 L 320 310" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
