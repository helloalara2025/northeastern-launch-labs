import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function InnovationTeams() {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-24 pb-20">
        <div className="container max-w-4xl">
          <div className="mb-12">
            <h1 className="font-sans font-bold text-5xl md:text-6xl text-foreground mb-6">
              Innovation Teams
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Take internally scoped, end-to-end projects from concept to completion.
            </p>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="font-sans font-bold text-3xl text-foreground mb-4">What We Do</h2>
              <p className="text-lg text-foreground/70 leading-relaxed mb-4">
                Innovation Teams focus on internally scoped, end-to-end projects designed to mirror real-world professional work. Members take projects from problem definition through execution, including research, planning, implementation, iteration, and final presentation.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                These projects emphasize skill-building, cross-functional collaboration, and ownership, resulting in portfolio-ready work that reflects practical experience in product development, consulting, and applied problem-solving.
              </p>
            </section>

            <section>
              <h2 className="font-sans font-bold text-3xl text-foreground mb-6">The Innovation Process</h2>
              <div className="space-y-4">
                {[
                  { step: "1. Problem Definition", desc: "Identify and scope the problem you'll solve" },
                  { step: "2. Research & Planning", desc: "Conduct research and develop a strategy" },
                  { step: "3. Implementation", desc: "Build, design, or develop your solution" },
                  { step: "4. Iteration", desc: "Test, gather feedback, and refine" },
                  { step: "5. Presentation", desc: "Present your work and learnings to the community" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 pb-4 border-b border-foreground/10 last:border-0">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                      {item.step.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">{item.step}</h3>
                      <p className="text-foreground/70 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-sans font-bold text-3xl text-foreground mb-6">Key Benefits</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border border-foreground/10 shadow-none">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-foreground mb-3">Product Thinking</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      Learn to identify problems worth solving and develop solutions that create real value.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border border-foreground/10 shadow-none">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-foreground mb-3">Full Ownership</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      Take responsibility for your project from start to finish, making key decisions along the way.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border border-foreground/10 shadow-none">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-foreground mb-3">Cross-Functional Collaboration</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      Work with engineers, designers, business students, and more to tackle complex problems.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border border-foreground/10 shadow-none">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-foreground mb-3">Portfolio-Ready Work</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      Create tangible projects you can showcase to employers and future collaborators.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="bg-gray-50 border border-foreground/10 rounded-lg p-8">
              <h2 className="font-sans font-bold text-2xl text-foreground mb-4">Who Should Apply?</h2>
              <ul className="space-y-3 text-foreground/70">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Students with ideas for projects they want to build</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Those interested in taking ownership of end-to-end projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Anyone looking to develop product thinking and problem-solving skills</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Students from any discipline—no prior experience necessary</span>
                </li>
              </ul>
            </section>

            <section className="border-t border-foreground/10 pt-12">
              <h2 className="font-sans font-bold text-3xl text-foreground mb-6">Current Projects</h2>
              <p className="text-foreground/70 mb-8">
                Coming soon. Check back for information about our current Innovation Teams and their projects.
              </p>
            </section>

            <section className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
              <h3 className="font-bold text-2xl text-foreground mb-4">Have a Project Idea?</h3>
              <p className="text-foreground/70 mb-6">Join an Innovation Team or propose your own project.</p>
              <Button className="bg-primary hover:bg-primary/90 text-white font-bold px-8 h-12 rounded">
                Get Involved
              </Button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
