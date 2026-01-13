import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Users, Clock } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white border-t border-foreground/5">
      <div className="container">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="font-sans font-semibold text-4xl md:text-5xl text-foreground mb-6 leading-tight">
            What is Launch Labs?
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed font-regular">
            Northeastern Launch Labs brings together students across disciplines and experience levels to work on real-world, end-to-end projects that bridge classroom learning with practical impact. Through two distinct tracks—Launch Teams and Innovation Teams—members gain hands-on experience tackling real problems, building portfolio-ready work, and developing professional skills in collaborative environments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <Card className="border border-foreground/5 shadow-sm hover:shadow-md hover:border-primary/20 transition-all bg-white rounded-xl">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="font-sans font-semibold text-base mb-2 text-foreground">Real-World Projects</h3>
              <p className="text-sm text-foreground/70 leading-relaxed font-regular">
                Work that ships and makes impact. Move beyond theoretical assignments to deliver tangible value.
              </p>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="border border-foreground/5 shadow-sm hover:shadow-md hover:border-primary/20 transition-all bg-white rounded-xl">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-sans font-semibold text-base mb-2 text-foreground">Cross-Disciplinary</h3>
              <p className="text-sm text-foreground/70 leading-relaxed font-regular">
                Engineers, designers, business students, and more working together to solve complex problems.
              </p>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card className="border border-foreground/5 shadow-sm hover:shadow-md hover:border-primary/20 transition-all bg-white rounded-xl">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-sans font-semibold text-base mb-2 text-foreground">3–5 Hours/Week</h3>
              <p className="text-sm text-foreground/70 leading-relaxed font-regular">
                Meaningful commitment with a manageable workload, designed to fit your busy schedule.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
