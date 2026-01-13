import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Teams from "@/components/sections/Teams";
import LaunchTeamsDetail from "@/components/sections/LaunchTeamsDetail";
import InnovationTeamsDetail from "@/components/sections/InnovationTeamsDetail";
import GetInvolved from "@/components/sections/GetInvolved";
import Leadership from "@/components/sections/Leadership";
import Partners from "@/components/sections/Partners";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div>
      <Navigation />
      <main className="pt-16">
        <Hero />
        <About />
        <Teams />
        <LaunchTeamsDetail />
        <InnovationTeamsDetail />
        <GetInvolved />
        <Leadership />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
