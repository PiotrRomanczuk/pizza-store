import { HeroSection } from "@/components/UI/HeroSection";
import { About } from "@/components/UI/About";
import { Places } from "@/components/UI/Places";
import { Gallery } from "../components/UI/Gallery";

import { FadingComponent } from "@/components/FadingComponent";

const components = [HeroSection, About, Places, Gallery];

export default function Home() {
  return (
    <main>
      {components.map((Component, index) => (
        <FadingComponent key={index}>
          <Component />
        </FadingComponent>
      ))}
    </main>
  );
}
