import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 bg-white overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-32 right-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl -z-10"></div>

      <div className="container relative z-10">
        <div className="max-w-3xl space-y-6">
          <h1 className="font-sans font-bold text-7xl md:text-8xl text-foreground leading-tight">
            From Idea to Impact
          </h1>
          
          <p className="text-xl text-foreground/65 leading-relaxed max-w-xl font-regular">
            Work on real products with startups. Build your own projects. Collaborate with ambitious students.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <a href="/forms">
              <Button 
                className="bg-primary hover:bg-primary/90 text-white font-bold px-8 h-12 rounded-lg text-base flex items-center gap-2 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Apply Now
                <ArrowRight size={18} />
              </Button>
            </a>
            <a href="/about">
              <Button 
                variant="outline" 
                className="border-2 border-primary text-primary font-bold px-8 h-12 rounded-lg text-base hover:bg-primary/5 transition-all duration-200"
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
