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
        
        {/* Hero Image */}
        <div className="hidden lg:block">
          <div className="rounded-lg overflow-hidden bg-foreground/5 shadow-sm">
            <img 
              src="/images/students-advice.jpg" 
              alt="Northeastern students collaborating" 
              className="w-full h-auto object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
