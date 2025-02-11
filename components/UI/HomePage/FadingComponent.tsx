"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";

export const FadingComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [isVisible, setIsVisible] = useState(false);

  if (!isVisible && inView) {
    setIsVisible(true);
  }

  return (
    <div
      ref={ref}
      className={`opacity-0 transition-opacity duration-500 ease-in-out ${
        isVisible ? "opacity-100" : ""
      }`}
    >
      {children}
    </div>
  );
};
