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
    <main className="overflow-x-hidden h-screen">
      <section className="h-screen">
        <Hero handleScroll={handleScrollToContact} />
      </section>
      <section className="">
        <WhatWeDo />
      </section>
      <section className="">
        <Goal />
      </section>
      
      {/* Excluding Contact section from snapping */}
      <section
        ref={contactRef}
        className="h-auto"
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
