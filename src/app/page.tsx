import Navbar from "./components/ui/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Plans from "./components/sections/Plans";

export default function Home() {
  return (
    <main className="bg-global">
      <Navbar />
      <Hero />
      <About />
      <Plans />
    </main>
  );
}
