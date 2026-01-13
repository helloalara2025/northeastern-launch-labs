import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-bg.jpg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background"></div>
      </div>

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-in slide-in-from-left-10 duration-700 fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Northeastern University
          </div>
          
          <h1 className="font-sans font-extrabold text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground leading-[1.1]">
            Build Real Products. <br />
            <span className="text-primary">Make Real Impact.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            Northeastern Launch Labs connects students across all majors to work on end-to-end projects with startups and internal teams.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white font-semibold text-lg px-8 h-14 rounded-full shadow-lg shadow-primary/20 transition-all hover:scale-105"
              onClick={() => scrollToSection("#get-involved")}
            >
              Apply to Join
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-background/50 backdrop-blur-sm border-2 border-primary/10 hover:border-primary/30 text-foreground font-semibold text-lg px-8 h-14 rounded-full group"
              onClick={() => scrollToSection("#about")}
            >
              Learn More
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="pt-8 flex items-center gap-8 text-sm text-muted-foreground font-medium">
            <div className="flex items-center gap-2">
              <div className="w-1 h-4 bg-primary/40 rounded-full"></div>
              Real-World Projects
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-4 bg-primary/40 rounded-full"></div>
              Cross-Disciplinary
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-4 bg-primary/40 rounded-full"></div>
              3-5 Hours/Week
            </div>
          </div>
        </div>
        
        {/* Abstract Visual Element */}
        <div className="hidden lg:block relative animate-in slide-in-from-right-10 duration-1000 fade-in delay-200">
          <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <img 
              src="/images/collaboration.jpg" 
              alt="Students collaborating" 
              className="rounded-2xl shadow-inner w-full h-auto object-cover aspect-[4/3]"
            />
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl shadow-xl border border-border/50 flex items-center gap-4 animate-bounce-slow">
              <div className="bg-primary/10 p-3 rounded-xl text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
              </div>
              <div>
                <div className="font-bold text-foreground">Launch Teams</div>
                <div className="text-xs text-muted-foreground">Partner with Startups</div>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
}
