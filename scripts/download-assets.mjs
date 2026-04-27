/**
 * Download all assets (fonts, images) from new.studio.
 * Runs once after extraction; produces public/fonts/, public/images/, public/seo/.
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, "..", "public");

const FONTS = [
  { url: "https://www.new.studio/_next/static/media/FoundersGrotesk_Regular-s.p.d171bb32.woff2", out: "fonts/FoundersGrotesk-Regular.woff2" },
  { url: "https://www.new.studio/_next/static/media/FoundersGrotesk_RegularItalic-s.p.94b2d89a.woff2", out: "fonts/FoundersGrotesk-RegularItalic.woff2" },
  { url: "https://www.new.studio/_next/static/media/FoundersGrotesk_Bold-s.p.04542d9f.woff2", out: "fonts/FoundersGrotesk-Bold.woff2" },
  { url: "https://www.new.studio/_next/static/media/FoundersGrotesk_BoldItalic-s.p.5259acbc.woff2", out: "fonts/FoundersGrotesk-BoldItalic.woff2" },
  { url: "https://www.new.studio/_next/static/media/MartinaPlantijn_Regular-s.p.b8a9860b.woff2", out: "fonts/MartinaPlantijn-Regular.woff2" },
  { url: "https://www.new.studio/_next/static/media/MartinaPlantijn_Italic-s.p.0823f51b.woff2", out: "fonts/MartinaPlantijn-Italic.woff2" },
];

const sanityImageUrl = (id, w = 2400) =>
  `https://cdn.sanity.io/images/sym1v71u/production/${id}?auto=format&fm=webp&q=90&w=${w}`;

const IMAGES = [
  { id: "d640a2e343fa1d753235836b8508b6a8b11caba5-4000x3000.jpg", out: "images/work-soros.webp", w: 2400 },
  { id: "3737ada2253f517d8c9bc9753968339a5f9cb7ef-2186x1061.png", out: "images/work-robotic-implant.webp", w: 2186 },
  { id: "f88416219d0a433d8614c6de800531a268f0f06a-3712x2296.webp", out: "images/work-utica-library.webp", w: 2400 },
  { id: "20d282c91ade23ed3d2d70e5fef1d3cd8f49813f-3000x1856.webp", out: "images/work-citi-bike.webp", w: 2400 },
  { id: "a970dee8916f3ebb0ede4eaae4bd213f41bd6e71-2000x1237.webp", out: "images/work-hint.webp", w: 2000 },
  { id: "c0b578d987b607848633e1e2cc17859e5afcd796-3840x2160.png", out: "images/approach-hand-drawing.webp", w: 2400 },
  { id: "676693ce38aa94109fe9795a1751e278d9f6bcc1-3072x2048.jpg", out: "images/insight-future-of-design.webp", w: 1600 },
  { id: "d1de234d30087c8ce232fb9323970314217262e7-5993x3995.jpg", out: "images/insight-aicad.webp", w: 1600 },
  { id: "81cba4c0f167d7d49cea64b0118a8cfe703f5551-1200x630.jpg", out: "seo/og-image.jpg", w: 1200 },
];

// Mux player thumbnails (used as poster images / fallbacks).
// Mux delivers JPEG thumbnails directly via image.mux.com.
const MUX_POSTERS = [
  { id: "s8H3pNmZW02tke0000DMG9V4q1g3phV005QOmpFOSbRBcz00", out: "images/poster-press-carousel.jpg" },
  { id: "WJpYMc8gU02NaYZqRjqpPrI76aCCoGi4wZ2TJfaZdp3E", out: "images/poster-insight-navbar.jpg" },
];

async function download(url, outRel) {
  const out = path.join(publicDir, outRel);
  await fs.mkdir(path.dirname(out), { recursive: true });
  const res = await fetch(url, {
    headers: { "user-agent": "Mozilla/5.0 (clone-bot)" },
  });
  if (!res.ok) {
    console.error(`! ${url} → HTTP ${res.status}`);
    return false;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  await fs.writeFile(out, buf);
  console.log(`✓ ${outRel} (${(buf.length / 1024).toFixed(1)} KB)`);
  return true;
}

async function main() {
  const tasks = [
    ...FONTS.map(({ url, out }) => () => download(url, out)),
    ...IMAGES.map(({ id, out, w }) => () => download(sanityImageUrl(id, w), out)),
    ...MUX_POSTERS.map(({ id, out }) => () => download(`https://image.mux.com/${id}/thumbnail.jpg?width=2000`, out)),
  ];

  const concurrency = 4;
  for (let i = 0; i < tasks.length; i += concurrency) {
    await Promise.all(tasks.slice(i, i + concurrency).map((t) => t()));
  }
  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
