import Image from "next/image";
import Link from "next/link";
import type { WorkCard } from "@/types";
import { cn } from "@/lib/utils";

const WORK: WorkCard[] = [
  {
    slug: "soros",
    title: "SOROS",
    description: "Designing trust for decentralized commerce.",
    href: "/work/soros",
    image: { src: "/images/work-soros.webp", alt: "SOROS logo on gradient" },
    tags: [
      "Brand Strategy",
      "Naming",
      "Brand Identity",
      "Logo",
      "Guidelines",
      "Product Design",
      "Digital Experience",
      "Design Systems",
      "Web",
      "Engineering",
    ],
    span: "half-left",
  },
  {
    slug: "robotic-implant-center",
    title: "Robotic Implant Center",
    description: "Positioning robotic dentistry as a category leader.",
    href: "/work/robotic-implant-center",
    image: { src: "/images/work-robotic-implant.webp", alt: "Robotic Implant Center" },
    tags: ["Brand Strategy", "Naming", "Logo", "Digital Experience", "Web", "Engineering", "Motion & Video"],
    span: "half-right",
  },
  {
    slug: "utica-public-library",
    title: "Utica Public Library",
    description: "Rebuilding clarity for a historic institution at the heart of Utica.",
    href: "/work/utica-public-library",
    image: { src: "/images/work-utica-library.webp", alt: "Front of a library building with banners." },
    tags: ["Brand Strategy", "Research", "Brand Identity", "Logo", "Guidelines", "Campaigns"],
    span: "full",
  },
  {
    slug: "citi-bike-plus",
    title: "Citi Bike Plus",
    description: "Extending Citi Bike into a smarter way to move through the city.",
    href: "/work/citi-bike-plus",
    image: { src: "/images/work-citi-bike.webp", alt: "Side view of a branded Citi Bike+ van" },
    tags: ["Brand Strategy", "Naming", "Brand Identity", "Logo", "Guidelines", "Campaigns"],
    span: "half-left",
  },
  {
    slug: "hint",
    title: "Hint",
    description: "Designing a new category for everyday scent.",
    href: "/work/hint",
    image: { src: "/images/work-hint.webp", alt: "Bus stop ad for Hint" },
    tags: ["Naming", "Research", "Brand Identity", "Logo", "Guidelines", "Campaigns", "Packaging"],
    span: "half-right",
  },
];

const spanClasses: Record<WorkCard["span"], string> = {
  "half-left": "col-span-4 sm:col-span-6",
  "half-right": "col-span-4 sm:col-span-6",
  full: "col-span-4 sm:col-span-12",
};

export function SelectedWork() {
  return (
    <section className="relative pb-15 sm:pb-30">
      <div className="container pt-15 sm:pt-30 relative z-1">
        <div className="mb-10 flex flex-col gap-8 sm:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="flex-1">
            <p className="p1 text-dark-gray mb-4 sm:mb-8">Selected Work</p>
            <h2 className="h2 max-w-4xl">
              Work created at moments where change becomes <em className="italic">inevitable by design</em>.
            </h2>
          </div>
          <Link href="/work" className="btn-blue self-start md:self-end">
            All Work
          </Link>
        </div>
      </div>

      <div className="custom-grid container gap-y-6 sm:gap-y-16 relative z-1">
        {WORK.map((card) => (
          <article key={card.slug} className={cn(spanClasses[card.span], "h-fit")}>
            <Link
              href={card.href}
              className="relative h-fit hover:opacity-80 transition-opacity duration-300 ease-out block"
            >
              <div className="overflow-hidden rounded-md mb-6">
                <Image
                  src={card.image.src}
                  alt={card.image.alt}
                  width={1600}
                  height={1067}
                  className="h-auto w-full object-cover"
                  style={{ aspectRatio: card.span === "full" ? "16/9" : "3/2" }}
                  priority={card.span === "half-left"}
                />
              </div>
              <p className="p1 mb-1 text-black">{card.title}</p>
              <p className="p2 text-dark-gray mb-4">{card.description}</p>
              <ul className="flex flex-wrap gap-1">
                {card.tags.map((tag) => (
                  <li
                    key={tag}
                    className="bg-light-gray flex w-fit items-center rounded-xs px-2 pb-1 text-black text-base"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
