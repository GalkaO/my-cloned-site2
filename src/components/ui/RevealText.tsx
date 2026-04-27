"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export type Segment = {
  text: string;
  italic?: boolean;
  /** Insert a hard line break AFTER this word (only above sm: breakpoint). */
  lineBreak?: boolean;
  /** Don't insert a trailing space (e.g., for punctuation). */
  noSpace?: boolean;
};

type RevealTextProps = {
  segments: Segment[];
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
  staggerDelay?: number;
  startDelay?: number;
  /** Trigger immediately on mount instead of when scrolled into view. */
  immediate?: boolean;
};

export function RevealText({
  segments,
  className,
  as: Tag = "h2",
  staggerDelay = 0.07,
  startDelay = 0,
  immediate = false,
}: RevealTextProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(immediate);

  useEffect(() => {
    if (immediate) {
      // Activate next frame so the initial styles are committed first,
      // then transition to the target.
      const id = requestAnimationFrame(() => setActive(true));
      return () => cancelAnimationFrame(id);
    }
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(true);
            obs.disconnect();
            break;
          }
        }
      },
      { threshold: 0, rootMargin: "0px 0px -15% 0px" },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [immediate]);

  const renderWord = (seg: Segment, i: number) => (
    <React.Fragment key={i}>
      <span
        className="reveal-word"
        style={{
          transitionDelay: `${startDelay + i * staggerDelay}s`,
        }}
      >
        {seg.italic ? <em className="italic">{seg.text}</em> : seg.text}
      </span>
      {seg.lineBreak ? (
        <>
          <span className="inline sm:hidden">{seg.noSpace ? "" : " "}</span>
          <br className="hidden sm:inline" />
        </>
      ) : seg.noSpace ? null : (
        " "
      )}
    </React.Fragment>
  );

  return (
    <Tag
      ref={ref as React.Ref<HTMLHeadingElement>}
      className={cn("reveal-text", active && "is-active", className)}
    >
      {segments.map(renderWord)}
    </Tag>
  );
}
