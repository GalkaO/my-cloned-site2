import Link from "next/link";

type FooterRowProps = {
  title: string;
  children: React.ReactNode;
};

function FooterRow({ title, children }: FooterRowProps) {
  return (
    <div className="custom-grid border-t border-white/20 py-8">
      <p className="col-span-4 sm:col-span-3 p2 text-white">{title}</p>
      <div className="col-span-4 sm:col-span-9 flex flex-col gap-1 p2 text-white sm:items-end">
        {children}
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-blue text-white pt-15 pb-8 sm:pt-30">
      <div className="container flex flex-col gap-15 sm:gap-30">
        {/* Top headline + description */}
        <div className="custom-grid">
          <div className="col-span-4 sm:col-span-7">
            <h2 className="h2 text-white">
              Build Your New
              <br />
              Future With Us
            </h2>
          </div>
          <div className="col-span-4 sm:col-span-5 flex sm:items-end">
            <p className="p2 text-white max-w-md">
              New Studio is a New York-based brand transformation studio helping organizations navigate growth, reinvention, and change through strategy, design, and digital.
            </p>
          </div>
        </div>

        {/* Sitemap rows */}
        <div className="flex flex-col">
          <FooterRow title="Sitemap">
            <Link href="/" className="hover:opacity-80 transition-opacity">Home</Link>
            <Link href="/work" className="hover:opacity-80 transition-opacity">Case Studies</Link>
            <Link href="/approach" className="hover:opacity-80 transition-opacity">Approach</Link>
            <Link href="/insights" className="hover:opacity-80 transition-opacity">Insights</Link>
            <Link href="/contact" className="hover:opacity-80 transition-opacity">Contact</Link>
          </FooterRow>
          <FooterRow title="Visit">
            <a
              href="https://maps.app.goo.gl/viig1nF1h1BKwkhWA"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              25 Broadway, 10th Floor
            </a>
            <span>New York, NY 10004</span>
          </FooterRow>
          <FooterRow title="Work With Us">
            <a href="mailto:hello@new.studio" className="hover:opacity-80 transition-opacity">
              hello@new.studio
            </a>
            <a
              href="https://book.new.studio/#/newstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              Schedule a call
            </a>
          </FooterRow>
          <div className="border-t border-white/20" />
        </div>

        {/* Big NewStudio wordmark */}
        <div className="w-full overflow-hidden">
          <p
            className="font-sans text-white whitespace-nowrap"
            style={{
              fontSize: "clamp(4rem, 17.4vw, 16rem)",
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              fontWeight: 400,
            }}
          >
            NewStudio
          </p>
        </div>

        {/* Socials + copyright */}
        <div className="flex w-full flex-col gap-y-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-x-6 gap-y-2 p2 text-white">
            <a href="https://instagram.com/newstudio" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">Instagram</a>
            <a href="https://tiktok.com/@newstudio" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">TikTok</a>
            <a href="https://github.com/newstudio" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">GitHub</a>
            <a href="https://linkedin.com/company/newstudio" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">LinkedIn</a>
            <a href="https://x.com/newstudio" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">X</a>
          </div>
          <p className="p2 text-white">© 2026 New Studio Partners Inc.</p>
        </div>
      </div>
    </footer>
  );
}
