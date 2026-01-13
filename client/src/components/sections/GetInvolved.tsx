import { Button } from "@/components/ui/button";

export default function GetInvolved() {
  const opportunities = [
    {
      title: "Become a Member",
      description: "Join either a Launch Team or Innovation Team. Open to all Northeastern students regardless of major or experience level.",
      commitment: "3–5 hours/week",
      buttonText: "Apply to Join",
      href: "/forms",
      color: "from-primary/8 to-primary/3"
    },
    {
      title: "Propose a Project",
      description: "Have an idea? Submit a project proposal for an Innovation Team to bring it to life.",
      commitment: null,
      buttonText: "Propose a Project",
      href: "/forms",
      color: "from-primary/6 to-primary/2"
    },
    {
      title: "Startup Partnership",
      description: "Are you a founder? Partner with talented student teams to build your product.",
      commitment: null,
      buttonText: "Partner With Us",
      href: "/forms",
      color: "from-primary/7 to-primary/2"
    },
    {
      title: "Leadership Opportunities",
      description: "Shape the direction of Launch Labs and mentor peers through leadership roles.",
      commitment: "5–8 hours/week",
      buttonText: "Apply for Leadership",
      href: "/forms",
      color: "from-primary/9 to-primary/3"
    }
  ];

  return (
    <section id="get-involved" className="py-20 bg-white border-t border-foreground/5">
      <div className="container">
        <div className="max-w-3xl mb-16">
          <h2 className="font-sans font-semibold text-4xl md:text-5xl text-foreground mb-4 leading-tight">
            Join Launch Labs
          </h2>
          <p className="text-lg text-foreground/70 font-regular">
            Whether you're a student, founder, or aspiring leader, there's a place for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {opportunities.map((item, index) => (
            <div key={index} className={`bg-gradient-to-br ${item.color} border border-foreground/5 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 flex flex-col`}>
              {/* Accent line */}
              <div className="w-8 h-1 bg-primary rounded-full mb-4"></div>
              
              <h3 className="font-sans font-semibold text-base mb-3 text-foreground">
                {item.title}
              </h3>
              
              <p className="text-foreground/70 text-sm leading-relaxed mb-4 font-regular flex-grow">
                {item.description}
              </p>
              
              {item.commitment && (
                <div className="text-xs text-foreground/60 font-semibold mb-4 uppercase tracking-wider">
                  {item.commitment}
                </div>
              )}
              
              <a href={item.href} className="block">
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-white font-medium h-10 rounded-lg text-sm transition-all duration-200"
                >
                  {item.buttonText}
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
