import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { LenisProvider } from "@/components/LenisProvider";

const foundersGrotesk = localFont({
  src: [
    { path: "../../public/fonts/FoundersGrotesk-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/FoundersGrotesk-RegularItalic.woff2", weight: "400", style: "italic" },
    { path: "../../public/fonts/FoundersGrotesk-Bold.woff2", weight: "700", style: "normal" },
    { path: "../../public/fonts/FoundersGrotesk-BoldItalic.woff2", weight: "700", style: "italic" },
  ],
  variable: "--font-founders-grotesk",
  display: "swap",
});

const martinaPlantijn = localFont({
  src: [
    { path: "../../public/fonts/MartinaPlantijn-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/MartinaPlantijn-Italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-martina-plantijn",
  display: "swap",
});

export const metadata: Metadata = {
  title: "New Studio | New York Brand Transformation Studio",
  description:
    "New Studio is a New York–based brand transformation studio helping organizations navigate growth, reinvention, and change through strategy, design, and digital.",
  openGraph: {
    title: "New Studio | New York Brand Transformation Studio",
    description:
      "New Studio is a New York–based brand transformation studio helping organizations navigate growth, reinvention, and change through strategy, design, and digital.",
    url: "https://www.new.studio",
    locale: "en_US",
    type: "website",
    images: [{ url: "/seo/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "New Studio | New York Brand Transformation Studio",
    description:
      "New Studio is a New York–based brand transformation studio helping organizations navigate growth, reinvention, and change through strategy, design, and digital.",
    images: ["/seo/og-image.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${foundersGrotesk.variable} ${martinaPlantijn.variable}`}
    >
      <body className="bg-white text-black antialiased">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
