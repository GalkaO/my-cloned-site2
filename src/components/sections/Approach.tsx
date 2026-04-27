import Image from "next/image";
import Link from "next/link";

export function Approach() {
  return (
    <section className="container">
      <div
        className="relative overflow-hidden rounded-md"
        style={{ height: "calc(var(--svh, 1vh) * 90)" }}
      >
        {/* Overlay text + CTA */}
        <div className="absolute top-0 left-0 z-10 flex h-full w-full flex-col justify-end gap-4 sm:gap-8 p-6 sm:p-12 text-white">
          <h2 className="h2 max-w-4xl">
            Growing Products by Redefining <em className="italic">Culture</em>.
          </h2>
          <Link href="/approach" className="btn-blue w-fit">
            Our Approach
          </Link>
        </div>

        {/* Background image */}
        <Image
          src="/images/approach-hand-drawing.webp"
          alt="Hand drawing logo concepts"
          fill
          sizes="100vw"
          className="relative z-0 object-cover"
          priority={false}
        />
      </div>
    </section>
  );
}
