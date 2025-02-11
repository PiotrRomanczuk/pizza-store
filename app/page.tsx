import { HeroSection } from "@/components/UI/HomePage/HeroSection";
import { About } from "@/components/UI/HomePage/About";
import { Places } from "@/components/UI/HomePage/Places";
import { Gallery } from "../components/UI/HomePage/Gallery";

import { FadingComponent } from "@/components/UI/HomePage/FadingComponent";

const componentsToFaide: React.ElementType[] = [HeroSection, About, Places, Gallery];

export default function Home() {
  return (
    <main>
      {componentsToFaide.map((Component, index) => {
        const ComponentElement = Component as React.ElementType;
        return (
          <FadingComponent key={index}>
            <ComponentElement />
          </FadingComponent>
        );
      })}
    </main>
  );
}
