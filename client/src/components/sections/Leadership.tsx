import { Card, CardContent } from "@/components/ui/card";

export default function Leadership() {
  const leaders = [
    {
      name: "Coming Soon",
      role: "Co-President",
      major: "TBD",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      name: "Coming Soon",
      role: "Co-President",
      major: "TBD",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      name: "Coming Soon",
      role: "Launch Teams Lead",
      major: "TBD",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    },
    {
      name: "Coming Soon",
      role: "Innovation Teams Lead",
      major: "TBD",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      name: "Coming Soon",
      role: "Operations Lead",
      major: "TBD",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      name: "Coming Soon",
      role: "Partnerships Lead",
      major: "TBD",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
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
              <div className="h-40 overflow-hidden bg-foreground/5">
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="w-full h-full object-cover"
                />
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
