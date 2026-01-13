import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Teams from "@/components/sections/Teams";
import GetInvolved from "@/components/sections/GetInvolved";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground selection:bg-primary/20 selection:text-primary">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <About />
        <Teams />
        <GetInvolved />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
