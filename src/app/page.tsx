import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { AmbitionPress } from "@/components/sections/AmbitionPress";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Approach } from "@/components/sections/Approach";
import { Insights } from "@/components/sections/Insights";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AmbitionPress />
        <SelectedWork />
        <Approach />
        <Insights />
      </main>
      <Footer />
    </>
  );
}
