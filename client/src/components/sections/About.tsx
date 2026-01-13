import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Users, Clock } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-full mb-6 border-2 border-primary/20">
            About Us
          </div>
          <h2 className="font-sans font-black text-5xl md:text-6xl text-foreground mb-6 leading-tight">
            What is Launch Labs?
          </h2>
          <p className="text-xl text-foreground/70 leading-relaxed font-medium">
            Northeastern Launch Labs brings together students across disciplines to work on real-world, end-to-end projects. Through Launch Teams (partnering with startups) and Innovation Teams (internal projects), you'll gain hands-on experience, build portfolio-ready work, and develop professional skills in collaborative environments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 - Red */}
          <div className="group relative bg-white border-4 border-primary rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/80">
            <div className="absolute top-0 left-0 w-full h-2 bg-primary rounded-t-lg"></div>
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
              <Briefcase className="w-8 h-8" />
            </div>
            <h3 className="font-sans font-black text-2xl mb-4 text-foreground">Real-World Projects</h3>
            <p className="text-foreground/70 font-medium leading-relaxed">
              Work that ships and makes impact. Move beyond theoretical assignments to deliver tangible value to real clients.
            </p>
          </div>

          {/* Card 2 - Blue */}
          <div className="group relative bg-white border-4 border-blue-600 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-700">
            <div className="absolute top-0 left-0 w-full h-2 bg-blue-600 rounded-t-lg"></div>
            <div className="w-16 h-16 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="font-sans font-black text-2xl mb-4 text-foreground">Cross-Disciplinary</h3>
            <p className="text-foreground/70 font-medium leading-relaxed">
              Engineers, designers, business students, and more working together to solve complex problems from multiple angles.
            </p>
          </div>

          {/* Card 3 - Orange */}
          <div className="group relative bg-white border-4 border-orange-500 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-orange-600">
            <div className="absolute top-0 left-0 w-full h-2 bg-orange-500 rounded-t-lg"></div>
            <div className="w-16 h-16 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform duration-300">
              <Clock className="w-8 h-8" />
            </div>
            <h3 className="font-sans font-black text-2xl mb-4 text-foreground">3-5 Hours/Week</h3>
            <p className="text-foreground/70 font-medium leading-relaxed">
              Meaningful commitment with a manageable workload, designed to fit into your busy student schedule.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
