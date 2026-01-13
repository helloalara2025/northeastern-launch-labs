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
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Bold Red Background Shape */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-in slide-in-from-left-10 duration-700 fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest border-2 border-primary/20">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
            Student Organization
          </div>
          
          <h1 className="font-sans font-black text-6xl md:text-7xl lg:text-8xl tracking-tight text-foreground leading-[0.95]">
            Build Real <br />
            <span className="text-primary">Products.</span> <br />
            Make Real <span className="text-blue-600">Impact.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed max-w-lg font-medium">
            Join Northeastern Launch Labs and work on real-world projects with startups and student teams. 3-5 hours/week.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 h-14 rounded-lg shadow-xl shadow-primary/30 transition-all hover:scale-105 active:scale-95"
              onClick={() => scrollToSection("#get-involved")}
            >
              Apply Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-foreground/20 text-foreground font-bold text-lg px-8 h-14 rounded-lg hover:bg-foreground/5 group"
              onClick={() => scrollToSection("#about")}
            >
              Learn More
            </Button>
          </div>
          
          <div className="pt-8 flex flex-wrap items-center gap-6 text-sm font-bold text-foreground">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              Real-World Projects
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              Cross-Disciplinary
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              3-5 Hours/Week
            </div>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="hidden lg:block relative animate-in slide-in-from-right-10 duration-1000 fade-in delay-200">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20 transform hover:scale-105 transition-transform duration-500">
            <img 
              src="/images/students-advice.jpg" 
              alt="Northeastern students collaborating" 
              className="w-full h-auto object-cover aspect-[4/3]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
          
          {/* Floating Badge */}
          <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-2xl border-4 border-primary animate-bounce">
            <div className="text-center">
              <div className="text-3xl font-black text-primary">100+</div>
              <div className="text-sm font-bold text-foreground">Students</div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-300/20 rounded-full blur-2xl"></div>
        </div>
      </div>
    </section>
  );
}
