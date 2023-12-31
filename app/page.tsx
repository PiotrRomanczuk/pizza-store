import { HeroSection } from "@/components/UI/HeroSection";
import { About } from "@/components/UI/About";
import { Places } from "@/components/UI/Places";
// import { Slider } from "@/components/UI/Slider";
// import { SwiperComponent } from "@/components/UI/SwiperComponent";
import Image from "next/image";
import { Gallery } from "../components/UI/Gallery";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <About />
      <Places />
      <Gallery />
    </main>
  );
}
