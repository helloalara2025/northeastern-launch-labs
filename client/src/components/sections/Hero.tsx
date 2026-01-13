import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 bg-white overflow-hidden">
      {/* Figma-inspired playful background elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10"></div>
      <div className="absolute bottom-40 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl -z-10"></div>

      <div className="container relative z-10">
        <div className="max-w-4xl space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 text-primary text-xs font-bold uppercase tracking-wider border border-primary/30">
              ✨ Student Organization
            </div>
            <h1 className="font-sans font-bold text-7xl md:text-8xl lg:text-9xl tracking-tight text-foreground leading-tight">
              From Idea to Impact
            </h1>
          </div>
          
          <p className="text-2xl text-foreground/70 leading-relaxed max-w-2xl font-regular">
            Work on real products with startups. Build your own projects. Collaborate with ambitious students across all majors.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <a href="/forms">
              <Button 
                className="bg-primary hover:bg-primary/90 text-white font-bold px-8 h-14 rounded-xl text-lg flex items-center gap-2 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Apply Now
                <ArrowRight size={20} />
              </Button>
            </a>
            <a href="/about">
              <Button 
                variant="outline" 
                className="border-2 border-primary text-primary font-bold px-8 h-14 rounded-xl text-lg hover:bg-primary/5 transition-all duration-200"
              >
                Learn More
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
