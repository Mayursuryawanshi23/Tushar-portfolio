import React, { Suspense, lazy } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Experience from "@/components/Experience";
import TherapeuticAreas from "@/components/TherapeuticAreas";
import ToolsTechnologies from "@/components/ToolsTechnologies";
import Contact from "@/components/Contact";
import Footer from "./components/Footer";
import GravitonFooter from "./components/GravitonFooter";

const BackgroundAnimation = lazy(() => import("./components/BackgroundAnimation"));
const FullPageScroll = lazy(() => import("./components/FullPageScroll"));

function MainContent() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <TherapeuticAreas />
        <ToolsTechnologies />
        <Contact />
      </main>
      <Footer />
      <GravitonFooter />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen font-sans text-slate-900 relative">
      <Suspense fallback={null}>
        <BackgroundAnimation />
      </Suspense>

      {/* Lazy-load pager: while loading, render the plain MainContent to keep UX immediate */}
      <Suspense fallback={<MainContent />}>
        <FullPageScroll>
          <MainContent />
        </FullPageScroll>
      </Suspense>
    </div>
  );
}

export default App;
