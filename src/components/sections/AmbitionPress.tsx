"use client";

import MuxPlayer from "@mux/mux-player-react";
import { RevealText, type Segment } from "@/components/ui/RevealText";

const MANIFESTO_SEGMENTS: Segment[] = [
  { text: "We" },
  { text: "exist" },
  { text: "to" },
  { text: "make" },
  { text: "the" },
  { text: "new", italic: true },
  { text: "possible.", italic: true, lineBreak: true },
  { text: "New" },
  { text: "clarity." },
  { text: "New" },
  { text: "systems." },
  { text: "New" },
  { text: "futures.", noSpace: true },
];

export function AmbitionPress() {
  return (
    <section className="relative z-1 -mt-15 sm:-mt-30 bg-white">
      <div className="container pt-15 sm:pt-30">
        <p className="p1 text-dark-gray mb-4 sm:mb-8">Ambition</p>
        <div className="mb-10 flex flex-col justify-between gap-8 sm:mb-24 md:flex-row md:items-end">
          <RevealText
            as="h2"
            className="h2 inline sm:block max-w-5xl"
            segments={MANIFESTO_SEGMENTS}
            staggerDelay={0.05}
          />
        </div>
      </div>

      <div className="container">
        <div className="aspect-video overflow-hidden rounded-md">
          <MuxPlayer
            playbackId="s8H3pNmZW02tke0000DMG9V4q1g3phV005QOmpFOSbRBcz00"
            streamType="on-demand"
            autoPlay="muted"
            loop
            playsInline
            preload="auto"
            poster="/images/poster-press-carousel.jpg"
            title="Press carousel"
            style={{
              width: "100%",
              height: "auto",
              aspectRatio: "16/9",
              "--controls": "none",
              "--media-object-fit": "cover",
            }}
            className="h-auto w-full border-0 outline-none"
          />
        </div>
      </div>
    </section>
  );
}
