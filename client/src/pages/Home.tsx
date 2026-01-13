import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Teams from "@/components/sections/Teams";
import GetInvolved from "@/components/sections/GetInvolved";
import Leadership from "@/components/sections/Leadership";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <About />
      <Teams />
      <GetInvolved />
      <Leadership />
    </div>
  );
}
