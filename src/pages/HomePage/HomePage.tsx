import React, { useEffect, useRef } from "react";
import Hero from "./HomePageComponents/Hero";
import Plans from "./HomePageComponents/Plans";
const App: React.FC = () => {
  const lastScrollTop = useRef(0);
  const scrollDirection = useRef<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      const direction = st > lastScrollTop.current ? "down" : "up";
      if (Math.abs(st - lastScrollTop.current) > 5) {
        document.body.setAttribute("scroll-direction", direction);
      }
      scrollDirection.current = direction;
      lastScrollTop.current = st <= 0 ? 0 : st;
    };

    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const elementsToReveal = document.querySelectorAll(".subject");

    const addRevealEffect = (elements: NodeListOf<Element>) => {
      const observer = new IntersectionObserver(
        (entries) => {
          let revealClass;
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              revealClass = scrollDirection.current === "up" ? "reveal-up" : "reveal-down";
              entry.target.classList.add(revealClass);
            } else {
              entry.target.className = "subject";
            }
          });
        },
        { threshold: 0.1 }
      );

      elements.forEach((element) => {
        observer.observe(element);
      });
    };

    addRevealEffect(elementsToReveal);
  }, []);

  useEffect(() => {
    const NORMAL_PLAYBACK_RATE = 200;
    const REDUCED_PLAYBACK_RATE = 1000;

    let rate = NORMAL_PLAYBACK_RATE;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) rate = REDUCED_PLAYBACK_RATE;

    const words = ["passion", "success", "goals", "rhythm", "fun", "energy", "opportunity"];

    const textReplace = (words: string[], targetElement: string, rate: number) => {
      let wordIndex = 0;

      const randomWordElement = document.getElementById(targetElement);

      if (!randomWordElement) return;

      const changeWordWithAnimation = () => {
        randomWordElement.style.opacity = "0"; // Fade out
        setTimeout(function () {
          wordIndex = (wordIndex + 1) % words.length;
          randomWordElement.textContent = words[wordIndex];
          randomWordElement.style.opacity = "1"; // Fade in
        }, 50);
      };

      setInterval(changeWordWithAnimation, rate);
    };

    textReplace(words, "target-word", rate);
  }, []);

  return (
    <div>
      <main>
        <Hero />
        <Plans />
      </main>
    </div>
  );
};

export default App;
