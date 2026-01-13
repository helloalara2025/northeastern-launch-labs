import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function LaunchTeams() {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-24 pb-20">
        <div className="container max-w-4xl">
          <div className="mb-12">
            <h1 className="font-sans font-bold text-5xl md:text-6xl text-foreground mb-6">
              Launch Teams
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Partner directly with early-stage startups to design, build, and deliver real-world solutions.
            </p>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="font-sans font-bold text-3xl text-foreground mb-4">What We Do</h2>
              <p className="text-lg text-foreground/70 leading-relaxed mb-4">
                Launch Teams work closely with founders and stakeholders on development-focused projects. Members contribute to product development, software or data implementation, prototyping, and iterative testing, alongside strategy and research.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Teams operate with defined scopes, timelines, and deliverables, providing hands-on experience contributing to live products and systems that directly impact real companies.
              </p>
            </section>

            <section>
              <h2 className="font-sans font-bold text-3xl text-foreground mb-6">Key Experiences</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border border-foreground/10 shadow-none">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-foreground mb-3">Startup Operations</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      Experience firsthand how early-stage companies operate, make decisions, and iterate on their products.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border border-foreground/10 shadow-none">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-foreground mb-3">Real Impact</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      Your work directly contributes to products and systems that serve real users and customers.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border border-foreground/10 shadow-none">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-foreground mb-3">Professional Development</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      Build communication, project management, and stakeholder collaboration skills in real contexts.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border border-foreground/10 shadow-none">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-foreground mb-3">Technical Growth</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      Apply and expand your technical skills in production environments with real constraints.
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
                  <span>Students interested in working with real startups and founders</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Those looking to gain practical experience in product development</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Anyone eager to explore entrepreneurship and startup culture</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Students from any discipline—engineers, designers, business students, and more</span>
                </li>
              </ul>
            </section>

            <section className="border-t border-foreground/10 pt-12">
              <h2 className="font-sans font-bold text-3xl text-foreground mb-6">Current Startups</h2>
              <p className="text-foreground/70 mb-8">
                Coming soon. Check back for information about our current startup partners.
              </p>
            </section>

            <section className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
              <h3 className="font-bold text-2xl text-foreground mb-4">Interested in Joining a Launch Team?</h3>
              <Button className="bg-primary hover:bg-primary/90 text-white font-bold px-8 h-12 rounded">
                Apply Now
              </Button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
