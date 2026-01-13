import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-20 bg-white">
      <div className="container relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider">
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
                className="bg-primary hover:bg-primary/90 text-white font-medium px-6 h-11 rounded text-base"
              >
                Apply to Join
              </Button>
            </a>
            <a href="/about">
              <Button 
                variant="outline" 
                className="border border-foreground/20 text-foreground font-medium px-6 h-11 rounded text-base hover:bg-foreground/5"
              >
                Learn More
              </Button>
            </a>
          </div>
        </div>
        
        {/* Mission-Relevant Digital Visual */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="relative w-full h-96">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-primary/3 rounded-2xl"></div>
            
            {/* SVG: Collaboration & Growth Visual */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
              {/* Team nodes representing collaboration */}
              <g className="text-primary">
                {/* Central hub */}
                <circle cx="200" cy="200" r="40" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" />
                <circle cx="200" cy="200" r="8" fill="currentColor" />
                
                {/* Four team members around hub */}
                <circle cx="100" cy="120" r="24" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4" />
                <circle cx="100" cy="120" r="6" fill="currentColor" opacity="0.7" />
                
                <circle cx="300" cy="120" r="24" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4" />
                <circle cx="300" cy="120" r="6" fill="currentColor" opacity="0.7" />
                
                <circle cx="100" cy="280" r="24" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4" />
                <circle cx="100" cy="280" r="6" fill="currentColor" opacity="0.7" />
                
                <circle cx="300" cy="280" r="24" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4" />
                <circle cx="300" cy="280" r="6" fill="currentColor" opacity="0.7" />
                
                {/* Connecting lines showing collaboration */}
                <line x1="200" y1="200" x2="100" y2="120" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
                <line x1="200" y1="200" x2="300" y2="120" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
                <line x1="200" y1="200" x2="100" y2="280" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
                <line x1="200" y1="200" x2="300" y2="280" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
              </g>
              
              {/* Growth arrows */}
              <g className="text-primary" opacity="0.3">
                <path d="M 150 150 Q 170 130 190 150" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path d="M 250 150 Q 230 130 210 150" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path d="M 150 250 Q 170 270 190 250" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path d="M 250 250 Q 230 270 210 250" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </g>
              
              {/* Accent grid background */}
              <defs>
                <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.08" />
                </pattern>
              </defs>
              <rect width="400" height="400" fill="url(#grid)" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
