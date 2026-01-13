import { Card, CardContent } from "@/components/ui/card";

export default function Leadership() {
  const leaders = [
    {
      name: "Coming Soon",
      role: "Co-President",
      major: "TBD",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      color: "border-primary"
    },
    {
      name: "Coming Soon",
      role: "Co-President",
      major: "TBD",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      color: "border-blue-600"
    },
    {
      name: "Coming Soon",
      role: "Launch Teams Lead",
      major: "TBD",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      color: "border-orange-500"
    },
    {
      name: "Coming Soon",
      role: "Innovation Teams Lead",
      major: "TBD",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      color: "border-yellow-500"
    },
    {
      name: "Coming Soon",
      role: "Operations Lead",
      major: "TBD",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      color: "border-green-500"
    },
    {
      name: "Coming Soon",
      role: "Partnerships Lead",
      major: "TBD",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      color: "border-purple-500"
    }
  ];

  return (
    <section id="leadership" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-full mb-6 border-2 border-primary/20">
            Our Team
          </div>
          <h2 className="font-sans font-black text-5xl md:text-6xl text-foreground mb-4 leading-tight">
            Meet the Team
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto font-medium">
            Launch Labs is led by passionate students committed to creating opportunities for hands-on learning and real-world impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <Card key={index} className={`border-4 ${leader.color} overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group`}>
              <div className="relative h-64 overflow-hidden bg-foreground/5">
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-sans font-black text-xl text-foreground mb-1">{leader.name}</h3>
                <p className="text-primary font-bold text-sm mb-2">{leader.role}</p>
                <p className="text-foreground/60 text-sm">{leader.major}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center p-8 bg-primary/5 border-2 border-primary/20 rounded-xl">
          <p className="text-foreground/70 font-medium">
            Leadership bios and photos coming soon! Meet the team at our info sessions and events.
          </p>
        </div>
      </div>
    </section>
  );
}
