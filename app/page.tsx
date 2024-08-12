'use client'

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
    <main className="overflow-x-hidden scroll-smooth">
      <Hero handleScroll={handleScrollToContact} />
      <WhatWeDo />
      <Goal />
      <div ref={contactRef}>
        <Contact />
      </div>
    </main>
  );
}

// 'use client'

// import Hero from "./_components/hero";
// import WhatWeDo from "./_components/whatWeDo";
// import Goal from "./_components/goal";
// import Contact from "./_components/Contact";
// import { useRef, useEffect, useState } from "react";

// export default function Home() {
//   const sectionsRef = useRef<HTMLDivElement[]>([]);
//   const [currentSection, setCurrentSection] = useState(0);

//   const scrollToSection = (index: number) => {
//     sectionsRef.current[index]?.scrollIntoView({ behavior: 'smooth' });
//   };

//   const handleScroll = (event: WheelEvent) => {
//     if (event.deltaY > 0 && currentSection < sectionsRef.current.length - 1) {
//       setCurrentSection((prev) => prev + 1);
//     } else if (event.deltaY < 0 && currentSection > 0) {
//       setCurrentSection((prev) => prev - 1);
//     }
//   };

//   useEffect(() => {
//     scrollToSection(currentSection);
//   }, [currentSection]);

//   useEffect(() => {
//     window.addEventListener('wheel', handleScroll, { passive: true });
//     return () => {
//       window.removeEventListener('wheel', handleScroll);
//     };
//   }, [currentSection]);

//   return (
//     <main className="overflow-x-hidden scroll-smooth">
//       <div ref={(el) => { if (el) sectionsRef.current[0] = el; }}>
//         <Hero />
//       </div>
//       <div ref={(el) => { if (el) sectionsRef.current[1] = el; }}>
//         <WhatWeDo />
//       </div>
//       <div ref={(el) => { if (el) sectionsRef.current[2] = el; }}>
//         <Goal />
//       </div>
//       <div ref={(el) => { if (el) sectionsRef.current[3] = el; }}>
//         <Contact />
//       </div>
//     </main>
//   );
// }
