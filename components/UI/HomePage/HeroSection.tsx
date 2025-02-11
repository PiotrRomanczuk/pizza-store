"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
};

export const HeroSection = () => {
  return (
    <motion.section
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{
        type: "linear",
        duration: 5,
      }}
    >
      <div className="flex h-screen items-center justify-center">
        <div className="relative h-full w-full">
          <Image
            src="/unSplash/mainPage/CookedFood.jpg"
            alt="Cooked Food"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </motion.section>
  );
};
