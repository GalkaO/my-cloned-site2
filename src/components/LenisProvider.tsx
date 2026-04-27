"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      lerp: 0.1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const id = requestAnimationFrame(raf);

    const setSvh = () => {
      const svh = window.innerHeight / 100;
      document.documentElement.style.setProperty("--svh", `${svh}px`);
      document.documentElement.style.setProperty("--dvh", `${svh}px`);
      document.documentElement.style.setProperty("--lvh", `${svh}px`);
    };
    setSvh();
    window.addEventListener("resize", setSvh);

    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
      window.removeEventListener("resize", setSvh);
    };
  }, []);

  return <>{children}</>;
}
