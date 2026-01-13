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
    <div className="min-h-screen bg-white">
      <div className="pt-24 pb-20">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <h1 className="font-sans font-bold text-5xl md:text-6xl text-foreground mb-6">
              Our Leadership
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Launch Labs is led by passionate students committed to creating opportunities for hands-on learning and real-world impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {leaders.map((leader, index) => (
              <Card key={index} className="border border-foreground/10 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden bg-foreground/5">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg text-foreground mb-1">{leader.name}</h3>
                  <p className="text-primary font-bold text-sm mb-1">{leader.role}</p>
                  <p className="text-foreground/60 text-sm">{leader.major}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gray-50 border border-foreground/10 rounded-lg p-8 text-center max-w-2xl mx-auto">
            <p className="text-foreground/70">
              Leadership bios and photos coming soon! Meet the team at our info sessions and events.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
