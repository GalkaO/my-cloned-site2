"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

type MenuLink = { label: string; href: string };

type MenuOverlayProps = {
  isOpen: boolean;
  onClose: () => void;
  links: MenuLink[];
};

const EASE_OUT = [0, 0, 0.2, 1] as const;
const EASE_IN_OUT = [0.4, 0, 0.2, 1] as const;

export function MenuOverlay({ isOpen, onClose, links }: MenuOverlayProps) {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="menu-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: EASE_IN_OUT }}
          className="fixed inset-0 z-[60] bg-blue text-white"
        >
          <motion.div
            initial={{ y: -8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -8, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE_OUT, delay: 0.1 }}
            className="absolute top-0 left-0 right-0 flex items-center justify-between px-5 sm:px-10 py-6"
          >
            <span className="text-[15px]">NewStudio</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={onClose}
              className="relative h-8 w-8 hover:opacity-80 transition-opacity"
            >
              <span className="absolute inset-x-0 top-1/2 h-px bg-white rotate-45" />
              <span className="absolute inset-x-0 top-1/2 h-px bg-white -rotate-45" />
            </button>
          </motion.div>

          <nav className="flex h-full items-center justify-center">
            <ul className="flex flex-col items-center gap-6 sm:gap-8">
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 60, filter: "blur(12px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: 30, filter: "blur(8px)", transition: { duration: 0.2 } }}
                  transition={{
                    duration: 0.7,
                    ease: EASE_OUT,
                    delay: 0.18 + i * 0.08,
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="font-serif text-5xl sm:text-7xl leading-[1] hover:italic transition-[font-style] duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE_OUT, delay: 0.45 }}
            className="absolute bottom-8 left-0 right-0 flex flex-col sm:flex-row items-center justify-between px-5 sm:px-10 gap-4 text-sm"
          >
            <p>25 Broadway, 10th Floor · New York, NY 10004</p>
            <a
              href="mailto:hello@new.studio"
              className="hover:opacity-80 transition-opacity"
            >
              hello@new.studio
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
