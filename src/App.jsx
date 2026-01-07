import React, { Suspense, lazy, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Experience from "@/components/Experience";
const TherapeuticAreas = lazy(() => import("@/components/TherapeuticAreas"));
import ToolsTechnologies from "@/components/ToolsTechnologies";
import Contact from "@/components/Contact";
import Footer from "./components/Footer";
import GravitonFooter from "./components/GravitonFooter";
const BackgroundAnimation = lazy(() => import("./components/BackgroundAnimation"));

gsap.registerPlugin(ScrollTrigger);

function App() {
  const heroRef = useRef();
  const aboutRef = useRef();
  const expertiseRef = useRef();
  const experienceRef = useRef();
  const therapeuticRef = useRef();
  const toolsRef = useRef();
  const contactRef = useRef();

  useEffect(() => {
    const animateSection = (section) => {
      if (section) {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    };

    // Animate immediately available sections
    animateSection(heroRef.current);
    animateSection(aboutRef.current);
    animateSection(expertiseRef.current);
    animateSection(experienceRef.current);
    animateSection(toolsRef.current);
    animateSection(contactRef.current);

    // For lazy-loaded TherapeuticAreas, delay animation
    const checkTherapeutic = () => {
      if (therapeuticRef.current) {
        animateSection(therapeuticRef.current);
      } else {
        setTimeout(checkTherapeutic, 100);
      }
    };
    checkTherapeutic();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen font-sans text-slate-900 relative">
      <Suspense fallback={null}>
        <BackgroundAnimation />
      </Suspense>

      <Navbar />
      <main>
        <div ref={heroRef}>
          <Hero />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={expertiseRef}>
          <Expertise />
        </div>
        <div ref={experienceRef}>
          <Experience />
        </div>
        <Suspense fallback={null}>
          <div ref={therapeuticRef}>
            <TherapeuticAreas />
          </div>
        </Suspense>
        <div ref={toolsRef}>
          <ToolsTechnologies />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </main>
      <Footer />
      <GravitonFooter />
    </div>
  );
}

export default App;
