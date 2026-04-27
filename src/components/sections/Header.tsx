"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { MenuIcon, NewStudioLogo } from "@/components/icons";

const NAV_LINKS = [
  { label: "Case Studies", href: "/work" },
  { label: "Approach", href: "/approach" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <header className="fixed top-5 left-1/2 z-50 w-full -translate-x-1/2 px-5 sm:px-10 flex justify-center pointer-events-none">
      <nav
        className={cn(
          "pointer-events-auto bg-light-gray relative rounded-lg backdrop-blur-lg ring-2 ring-white/30",
          "transition-[max-width] duration-300 ease-in-out",
          "w-full",
          isScrolled ? "max-w-[472px]" : "max-w-[1456px]",
        )}
        style={{
          boxShadow:
            "inset 0 0 60px 0 rgba(255,255,255,0.3), inset 0 0 60px 0 rgba(255,255,255,0.3), 0 4px 20px 0 rgba(0,0,20,0.2)",
        }}
      >
        <div className="flex w-full h-14 items-center justify-between px-4 sm:px-6">
          <Link href="/" className="block w-22" aria-label="Home">
            <NewStudioLogo />
          </Link>
          <div className="relative flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "w-fit text-[15px] text-black hover:opacity-80 transition-opacity duration-200",
                  "hidden sm:block",
                  isScrolled && "sm:hidden",
                )}
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              aria-label="Open menu"
              className="flex items-center justify-center text-black hover:opacity-80 transition-opacity"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
