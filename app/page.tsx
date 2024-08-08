import Image from "next/image";
import Hero from "./_components/hero";
import WhatWeDo from "./_components/whatWeDo";
import Goal from "./_components/goal";
import Contact from "./_components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatWeDo />
      <Goal />
      <Contact />
    </main>
  );
}
