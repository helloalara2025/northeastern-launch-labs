import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
              Work on real projects that matter
            </h1>
          </div>
          
          <p className="text-lg text-foreground/70 leading-relaxed max-w-lg font-regular">
            Join Northeastern Launch Labs and work on real-world projects with startups and student teams. 3–5 hours per week.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <a href="/forms">
              <Button 
                className="bg-primary hover:bg-primary/90 text-white font-medium px-6 h-11 rounded text-base"
              >
                Apply Now
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
        
        {/* Digital Visual */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="relative w-full h-96">
            {/* Background gradient circle */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl"></div>
            
            {/* Floating shapes */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
              {/* Grid pattern */}
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-foreground/10" />
                </pattern>
              </defs>
              <rect width="400" height="400" fill="url(#grid)" />
              
              {/* Floating circles */}
              <circle cx="100" cy="80" r="30" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary/30" />
              <circle cx="300" cy="150" r="50" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary/20" />
              <circle cx="150" cy="280" r="40" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary/25" />
              
              {/* Accent dots */}
              <circle cx="100" cy="80" r="6" fill="currentColor" className="text-primary" />
              <circle cx="300" cy="150" r="6" fill="currentColor" className="text-primary/60" />
              <circle cx="150" cy="280" r="6" fill="currentColor" className="text-primary/40" />
              
              {/* Connecting lines */}
              <line x1="100" y1="80" x2="300" y2="150" stroke="currentColor" strokeWidth="1" className="text-primary/15" />
              <line x1="300" y1="150" x2="150" y2="280" stroke="currentColor" strokeWidth="1" className="text-primary/15" />
              <line x1="150" y1="280" x2="100" y2="80" stroke="currentColor" strokeWidth="1" className="text-primary/15" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
