import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Users, Clock } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-foreground mb-6">
            What is Launch Labs?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Northeastern Launch Labs brings together students across disciplines and experience levels to work on real-world, end-to-end projects that bridge classroom learning with practical impact. Through two distinct tracks—Launch Teams and Innovation Teams—members gain hands-on experience tackling real problems, building portfolio-ready work, and developing professional skills in collaborative environments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-card border-border/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
            <CardContent className="p-8 flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="w-8 h-8" />
              </div>
              <h3 className="font-sans font-bold text-xl mb-3">Real-World Projects</h3>
              <p className="text-muted-foreground">
                Work that ships and makes impact. Move beyond theoretical assignments to deliver tangible value.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
            <CardContent className="p-8 flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="font-sans font-bold text-xl mb-3">Cross-Disciplinary</h3>
              <p className="text-muted-foreground">
                Engineers, designers, and business students working together to solve complex problems from multiple angles.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
            <CardContent className="p-8 flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="font-sans font-bold text-xl mb-3">3-5 Hours/Week</h3>
              <p className="text-muted-foreground">
                Meaningful commitment with a manageable workload, designed to fit into a busy student schedule.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
