export type WorkCard = {
  slug: string;
  title: string;
  description: string;
  href: string;
  image: { src: string; alt: string };
  tags: string[];
  span: "half-left" | "half-right" | "full";
};

export type InsightCard = {
  slug: string;
  title: string;
  postedDaysAgo: number;
  category: "Opinion" | "Press";
  href: string;
} & (
  | { kind: "image"; image: { src: string; alt: string } }
  | { kind: "video"; muxPlaybackId: string; poster?: string }
);

export type NavLink = {
  label: string;
  href: string;
};
