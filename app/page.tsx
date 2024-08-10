'use client'

import Hero from "./_components/hero";
import WhatWeDo from "./_components/whatWeDo";
import Goal from "./_components/goal";
import Contact from "./_components/Contact";
import { useRef } from "react";

export default function Home() {
  const contactRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="overflow-x-hidden">
      <Hero handleScroll={handleScroll} />
      <WhatWeDo />
      <Goal />
      <div ref={contactRef}>
        <Contact />
      </div>
    </main>
  );
}
