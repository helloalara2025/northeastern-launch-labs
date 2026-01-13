import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Lightbulb } from "lucide-react";

export default function Teams() {
  return (
    <section id="teams" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-foreground mb-4">
            Two Ways to Get Involved
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the path that aligns with your goals and interests. Both tracks offer hands-on experience and professional growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Launch Teams Card */}
          <div className="group relative bg-card rounded-3xl border border-border/50 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-primary/50"></div>
            <div className="p-8 md:p-12 flex flex-col h-full">
              <div className="flex items-start justify-between mb-8">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary p-4">
                  <img src="/images/launch-team-icon.png" alt="Launch Team" className="w-full h-full object-contain" />
                </div>
                <div className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                  Startup Partner
                </div>
              </div>
              
              <h3 className="font-sans font-bold text-3xl mb-4 group-hover:text-primary transition-colors">Launch Teams</h3>
              <p className="text-muted-foreground text-lg mb-8 flex-grow">
                Partner directly with early-stage startups to design, build, and deliver real solutions. Work alongside founders on product development, prototyping, and strategy.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  Startup Operations Experience
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  Professional Development
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  Technical Growth
                </div>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold h-12 rounded-xl group-hover:shadow-lg group-hover:shadow-primary/20 transition-all">
                Learn More about Launch Teams
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Innovation Teams Card */}
          <div className="group relative bg-card rounded-3xl border border-border/50 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-blue-400"></div>
            <div className="p-8 md:p-12 flex flex-col h-full">
              <div className="flex items-start justify-between mb-8">
                <div className="w-20 h-20 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-600 p-4">
                  <img src="/images/innovation-team-icon.png" alt="Innovation Team" className="w-full h-full object-contain" />
                </div>
                <div className="px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 text-xs font-bold uppercase tracking-wider">
                  Internal Project
                </div>
              </div>
              
              <h3 className="font-sans font-bold text-3xl mb-4 group-hover:text-blue-600 transition-colors">Innovation Teams</h3>
              <p className="text-muted-foreground text-lg mb-8 flex-grow">
                Take internally scoped projects from concept to completion. Own the full product lifecycle from research through execution and presentation.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  Product Thinking
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  Cross-Functional Collaboration
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  Full Ownership
                </div>
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold h-12 rounded-xl group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all">
                Learn More about Innovation Teams
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
