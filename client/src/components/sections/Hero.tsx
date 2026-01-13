import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-20 bg-white overflow-hidden">
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
        
        {/* Original Digital Visual - Abstract Project Layers */}
        <div className="hidden lg:flex items-center justify-center relative h-96">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            {/* Background animated layers */}
            <defs>
              <linearGradient id="layerGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" className="text-primary" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" className="text-primary" />
              </linearGradient>
            </defs>

            {/* Stacked project layers - representing layered work */}
            <g>
              {/* Layer 1 - Bottom */}
              <rect x="40" y="240" width="320" height="100" rx="8" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary/20" />
              <text x="60" y="275" fontSize="12" fontWeight="600" className="text-primary/40" fill="currentColor">Research & Discovery</text>
              
              {/* Layer 2 - Middle */}
              <rect x="30" y="160" width="340" height="90" rx="8" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary/35" />
              <text x="50" y="195" fontSize="12" fontWeight="600" className="text-primary/60" fill="currentColor">Design & Build</text>
              
              {/* Layer 3 - Top */}
              <rect x="20" y="80" width="360" height="85" rx="8" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-primary" />
              <text x="40" y="115" fontSize="12" fontWeight="600" className="text-primary" fill="currentColor">Launch & Iterate</text>
            </g>

            {/* Connecting flow lines */}
            <g stroke="currentColor" strokeWidth="1.5" className="text-primary/25" fill="none">
              <path d="M 200 240 Q 200 200 200 170" />
              <path d="M 200 160 Q 200 120 200 90" />
            </g>

            {/* Progress indicators */}
            <g className="text-primary">
              <circle cx="200" cy="240" r="5" fill="currentColor" />
              <circle cx="200" cy="160" r="5" fill="currentColor" opacity="0.6" />
              <circle cx="200" cy="80" r="5" fill="currentColor" opacity="0.3" />
            </g>

            {/* Side accent marks */}
            <g stroke="currentColor" strokeWidth="2" className="text-primary/15">
              <line x1="15" y1="100" x2="15" y2="280" />
              <line x1="385" y1="100" x2="385" y2="280" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
