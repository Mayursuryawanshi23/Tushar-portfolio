import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function FullPageScroll({ children }) {
  const [active, setActive] = useState(0);
  const lenisRef = useRef(null);
  const lockRef = useRef(false);

  useEffect(() => {
    const isDesktop = window.innerWidth >= 1024;

    // Init Lenis for smooth scrolling on all sizes
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1 - Math.pow(1 - t, 3)),
      smooth: true,
      direction: "vertical",
    });
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const sections = Array.from(document.querySelectorAll("main > section"));

    // Ensure sections participate visually as full-page panes on desktop
    if (isDesktop) {
      sections.forEach((s) => {
        s.style.minHeight = "100vh";
        s.style.display = "block";
      });

      // wheel navigation / paging
      const onWheel = (e) => {
        if (lockRef.current) return;
        const delta = e.deltaY;
        if (Math.abs(delta) < 5) return;
        const direction = delta > 0 ? 1 : -1;
        const curIndex = getActiveIndex();
        const nextIndex = Math.min(Math.max(0, curIndex + direction), sections.length - 1);
        if (nextIndex !== curIndex) goTo(nextIndex);
      };

      window.addEventListener("wheel", onWheel, { passive: true });

      // Keyboard navigation
      const onKey = (e) => {
        if (lockRef.current) return;
        if (e.key === "PageDown" || e.key === "ArrowDown") {
          goTo(Math.min(sections.length - 1, getActiveIndex() + 1));
        }
        if (e.key === "PageUp" || e.key === "ArrowUp") {
          goTo(Math.max(0, getActiveIndex() - 1));
        }
      };
      window.addEventListener("keydown", onKey);

      // update active index on scroll
      function getActiveIndex() {
        const scrollY = window.scrollY || window.pageYOffset;
        let idx = 0;
        sections.forEach((s, i) => {
          const top = s.offsetTop;
          if (scrollY >= top - 10) idx = i;
        });
        return idx;
      }

      function goTo(i) {
        lockRef.current = true;
        const target = sections[i];
        gsap.to(window, {
          duration: 1.1,
          ease: "power2.inOut",
          scrollTo: { y: target.offsetTop, autoKill: false },
          onUpdate: ScrollTrigger.update,
          onComplete: () => {
            lockRef.current = false;
            setActive(i);
          },
        });
      }

      // Create ScrollTriggers for section inner stagger animations
      sections.forEach((sec, i) => {
        const targets = sec.querySelectorAll("h1, h2, h3, p, ul, li, img, .card, .badge, button");
        gsap.fromTo(
          targets,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sec,
              start: "top 60%",
              end: "bottom top",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // update active on refresh
      ScrollTrigger.addEventListener("refresh", () => setActive(getActiveIndex()));

      // initial active
      setActive(getActiveIndex());

      return () => {
        window.removeEventListener("wheel", onWheel);
        window.removeEventListener("keydown", onKey);
        ScrollTrigger.removeEventListener("refresh", () => setActive(getActiveIndex()));
        lenis.destroy();
      };
    }

    // If not desktop, keep Lenis running but don't enforce full-page snapping. Still animate elements on scroll via ScrollTrigger.
    sections.forEach((sec) => {
      const targets = sec.querySelectorAll("h1, h2, h3, p, ul, li, img, .card, .badge, button");
      gsap.fromTo(
        targets,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.06,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sec,
            start: "top 85%",
            end: "bottom top",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // cleanup for non-desktop scenario
    return () => {
      lenis.destroy();
    };
  }, []);

  // nav click handler (works across sizes but only visually relevant on desktop)
  const handleNav = (index) => {
    const sections = Array.from(document.querySelectorAll("main > section"));
    const target = sections[index];
    if (!target) return;
    gsap.to(window, {
      duration: 1.1,
      ease: "power2.inOut",
      scrollTo: { y: target.offsetTop, autoKill: false },
      onUpdate: ScrollTrigger.update,
      onComplete: () => setActive(index),
    });
  };

  const sectionsCount = typeof window !== "undefined" ? document.querySelectorAll("main > section").length : 0;

  return (
    <div className="relative">
      {children}

      {/* Navigation Indicator */}
      <nav className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        <ul className="flex flex-col gap-3 text-sm font-mono text-slate-500">
          {Array.from({ length: sectionsCount }).map((_, i) => (
            <li key={i}>
              <button
                onClick={() => handleNav(i)}
                className={`px-2 py-1 rounded-sm transition-colors duration-300 ${
                  active === i ? "text-slate-900 font-semibold opacity-100" : "opacity-50"
                }`}
                aria-current={active === i}
                aria-label={`Go to section ${i + 1}`}>
                {String(i + 1).padStart(2, "0")}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
