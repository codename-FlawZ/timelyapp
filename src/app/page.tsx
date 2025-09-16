"use client"
import Link from "next/link";
import Hero from "./components/Hero";
import About from "./components/About";
import Plans from "./components/Plans";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="bg-global">      
      <Hero />
      <About />
      <Plans />
      <Contact />
    </main>
  );
}
