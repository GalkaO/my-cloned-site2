"use client";

import Image from "next/image";
import Link from "next/link";
import MuxPlayer from "@mux/mux-player-react";
import type { InsightCard } from "@/types";

const INSIGHTS: InsightCard[] = [
  {
    slug: "the-future-of-design-isnt-design",
    title: "The Future of Design Isn't Design",
    postedDaysAgo: 75,
    category: "Opinion",
    href: "/insights/the-future-of-design-isnt-design",
    kind: "image",
    image: {
      src: "/images/insight-future-of-design.webp",
      alt: 'Gradient image with title "the future of design isn\'t design"',
    },
  },
  {
    slug: "new-studio-featured-on-navbar-gallery",
    title: "New Studio featured on Navbar Gallery",
    postedDaysAgo: 85,
    category: "Press",
    href: "/insights/new-studio-featured-on-navbar-gallery",
    kind: "video",
    muxPlaybackId: "WJpYMc8gU02NaYZqRjqpPrI76aCCoGi4wZ2TJfaZdp3E",
    poster: "/images/poster-insight-navbar.jpg",
  },
  {
    slug: "jonathan-lin-gives-talk-at-aicad-conference",
    title: "Jonathan Lin gives talk at AICAD Conference",
    postedDaysAgo: 153,
    category: "Press",
    href: "/insights/jonathan-lin-gives-talk-at-aicad-conference",
    kind: "image",
    image: { src: "/images/insight-aicad.webp", alt: "Jonathan Lin gives talk at AICAD Conference" },
  },
];

export function Insights() {
  return (
    <section className="relative pb-15 sm:pb-30">
      <div className="container pt-15 sm:pt-30 relative z-1">
        <div className="mb-10 flex flex-col gap-8 sm:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="flex-1">
            <p className="p1 text-dark-gray mb-4 sm:mb-8">Insights</p>
            <h2 className="h2 max-w-4xl">
              The latest from <em className="italic">our world and beyond</em>.
            </h2>
          </div>
          <Link href="/insights" className="btn-blue self-start md:self-end">
            Explore All
          </Link>
        </div>
      </div>

      <div className="custom-grid container gap-y-6 sm:gap-y-16 relative z-1">
        {INSIGHTS.map((card) => (
          <article key={card.slug} className="col-span-4 h-auto">
            <Link
              href={card.href}
              className="relative h-fit hover:opacity-80 transition-opacity duration-300 ease-out block"
            >
              <div className="overflow-hidden rounded-md mb-6 aspect-[4/3] bg-light-gray">
                {card.kind === "image" ? (
                  <Image
                    src={card.image.src}
                    alt={card.image.alt}
                    width={1200}
                    height={900}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <MuxPlayer
                    playbackId={card.muxPlaybackId}
                    streamType="on-demand"
                    autoPlay="muted"
                    loop
                    playsInline
                    preload="auto"
                    poster={card.poster}
                    style={{
                      width: "100%",
                      height: "100%",
                      "--controls": "none",
                    }}
                    className="h-full w-full"
                  />
                )}
              </div>
              <div className="flex justify-between items-start gap-4">
                <div>
                  <p className="p1 mb-1 text-black">{card.title}</p>
                  <p className="p2 text-dark-gray mb-3">Posted {card.postedDaysAgo} days ago</p>
                  <span className="bg-light-gray inline-flex w-fit items-center rounded-xs px-2 pb-1 text-black text-base">
                    {card.category}
                  </span>
                </div>
                <span className="p2 underline whitespace-nowrap text-black">Read more</span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
