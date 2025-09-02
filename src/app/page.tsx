import Navbar from "./components/ui/Navbar";
import Hero from "./components/sections/Hero";

export default function Home() {
  return (
    <main className="bg-neutral-100 dark:bg-neutral-950">
      <Navbar />
      <Hero />
    </main>
  );
}
