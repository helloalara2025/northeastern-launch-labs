import { Card, CardContent } from "@/components/ui/card";

export default function Leadership() {
  const leaders = [
    {
      name: "Coming Soon",
      role: "Co-President",
      major: "TBD",
      color: "from-primary/20 to-primary/10",
      initial: "A"
    },
    {
      name: "Coming Soon",
      role: "Co-President",
      major: "TBD",
      color: "from-primary/15 to-primary/5",
      initial: "B"
    },
    {
      name: "Coming Soon",
      role: "Launch Teams Lead",
      major: "TBD",
      color: "from-primary/25 to-primary/15",
      initial: "C"
    },
    {
      name: "Coming Soon",
      role: "Innovation Teams Lead",
      major: "TBD",
      color: "from-primary/20 to-primary/10",
      initial: "D"
    },
    {
      name: "Coming Soon",
      role: "Operations Lead",
      major: "TBD",
      color: "from-primary/18 to-primary/8",
      initial: "E"
    },
    {
      name: "Coming Soon",
      role: "Partnerships Lead",
      major: "TBD",
      color: "from-primary/22 to-primary/12",
      initial: "F"
    }
  ];

  return (
    <section id="leadership" className="py-20 bg-white border-t border-foreground/5">
      <div className="container">
        <div className="max-w-3xl mb-12">
          <h2 className="font-sans font-semibold text-4xl md:text-5xl text-foreground mb-4 leading-tight">
            Our Leadership
          </h2>
          <p className="text-lg text-foreground/70 font-regular">
            Passionate students committed to creating opportunities for hands-on learning and real-world impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {leaders.map((leader, index) => (
            <Card key={index} className="border border-foreground/5 overflow-hidden shadow-sm hover:shadow-md hover:border-foreground/10 transition-all bg-white">
              <div className={`h-40 overflow-hidden bg-gradient-to-br ${leader.color} flex items-center justify-center`}>
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/40 to-primary/20 flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary/60">{leader.initial}</span>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-sans font-semibold text-base text-foreground mb-1">{leader.name}</h3>
                <p className="text-primary font-semibold text-xs mb-1">{leader.role}</p>
                <p className="text-foreground/60 text-xs">{leader.major}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-foreground/5 border border-foreground/5 rounded-lg p-6 text-center">
          <p className="text-foreground/70 text-sm font-regular">
            Leadership bios and photos coming soon! Meet the team at our info sessions and events.
          </p>
        </div>
      </div>
    </section>
  );
}
