'use client';

import Hero from "./_components/hero";
import WhatWeDo from "./_components/whatWeDo";
import Goal from "./_components/goal";
import Contact from "./_components/Contact";
import { useRef } from "react";

export default function Home() {
  const contactRef = useRef<HTMLDivElement>(null);

  const handleScrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="overflow-x-hidden h-screen snap-y snap-mandatory">
      <section className="snap-start h-screen">
        <Hero handleScroll={handleScrollToContact} />
      </section>
      <section className="snap-start">
        <WhatWeDo />
      </section>
      <section className="snap-start">
        <Goal />
      </section>
      
      {/* Excluding Contact section from snapping */}
      <section
        ref={contactRef}
        className="h-auto !snap-none !snap-center"
        style={{
          scrollSnapAlign: 'none',  // No snap alignment
          scrollSnapStop: 'normal', // Allow normal scrolling
        }}
      >
        <Contact />
      </section>
    </main>
  );
}
