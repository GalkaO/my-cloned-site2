import { RevealText, type Segment } from "@/components/ui/RevealText";

const HERO_SEGMENTS: Segment[] = [
  { text: "Transforming", italic: true },
  { text: "Brands,", lineBreak: true },
  { text: "Building" },
  { text: "Futures", italic: true, noSpace: true },
];

export function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "var(--full-height, 100svh)" }}
    >
      <div className="absolute inset-0 z-0 silk-bg" aria-hidden="true" />

      <div className="absolute top-1/2 left-1/2 z-1 w-full -translate-x-1/2 -translate-y-1/2 px-5 text-center text-white flex justify-center items-center">
        <RevealText
          as="h1"
          className="h1 inline sm:block w-fit"
          segments={HERO_SEGMENTS}
          immediate
          startDelay={0.2}
          staggerDelay={0.09}
        />
      </div>

      <div className="absolute bottom-8 left-1/2 z-1 w-full -translate-x-1/2 px-5 text-center">
        <p className="p1 text-white">
          A New York–based brand transformation studio working across strategy, design, and digital.
        </p>
      </div>

      <style>{`
        .silk-bg {
          background:
            radial-gradient(70% 90% at 25% 30%, rgba(110, 130, 255, 0.85) 0%, transparent 55%),
            radial-gradient(60% 80% at 75% 65%, rgba(40, 60, 200, 0.95) 0%, transparent 60%),
            radial-gradient(45% 65% at 60% 25%, rgba(140, 170, 255, 0.7) 0%, transparent 60%),
            radial-gradient(40% 60% at 30% 80%, rgba(80, 100, 230, 0.8) 0%, transparent 65%),
            linear-gradient(135deg, #0010d8 0%, #1f3fff 25%, #0a1ab8 55%, #1030e8 100%);
          filter: saturate(1.1) contrast(1.05);
          animation: silk-drift 22s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          background-size: 220% 220%, 200% 200%, 200% 200%, 200% 200%, 100% 100%;
        }
        @keyframes silk-drift {
          0%, 100% {
            background-position: 0% 0%, 100% 0%, 0% 100%, 100% 100%, 0% 0%;
          }
          50% {
            background-position: 100% 50%, 0% 100%, 100% 0%, 0% 50%, 50% 50%;
          }
        }
      `}</style>
    </section>
  );
}
