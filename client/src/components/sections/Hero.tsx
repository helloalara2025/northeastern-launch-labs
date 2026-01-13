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
    <section id="home" className="relative min-h-screen flex items-center pt-20 bg-white">
      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
            Student Organization
          </div>
          
          <h1 className="font-sans font-bold text-5xl md:text-6xl tracking-tight text-foreground leading-tight">
            Work on real projects that matter
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed max-w-lg font-medium">
            Join Northeastern Launch Labs and work on real-world projects with startups and student teams. 3-5 hours/week.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white font-bold px-6 h-12 rounded"
              onClick={() => scrollToSection("#get-involved")}
            >
              Apply Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border border-foreground/20 text-foreground font-bold px-6 h-12 rounded hover:bg-foreground/5"
              onClick={() => scrollToSection("#about")}
            >
              Learn More
            </Button>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="hidden lg:block">
          <div className="rounded-lg overflow-hidden shadow-lg">
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
