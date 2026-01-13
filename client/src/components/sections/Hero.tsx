import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 bg-white overflow-hidden">
      {/* Minimal background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/6 rounded-full blur-3xl -z-10"></div>

      <div className="container relative z-10 grid lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/12 text-primary text-xs font-semibold uppercase tracking-wider">
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
                className="bg-primary hover:bg-primary/90 text-foreground font-semibold px-8 h-12 rounded-lg text-base flex items-center gap-2 transition-all duration-200 shadow-sm hover:shadow-md"
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
        
        {/* Minimal visual - just a simple gradient shape */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="w-64 h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl"></div>
        </div>
      </div>
    </section>
  );
}
