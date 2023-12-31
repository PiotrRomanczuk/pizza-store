"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HandWritingAnimation } from "./HandWritingAnimation";
import { VaraHandwriting } from "./VaraHandwriting";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
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
      <div className="relative flex h-screen items-center justify-center">
        <Image
          src="/unSplash/CookedFood.jpg"
          alt="Cooked Food"
          layout="fill"
          objectFit="cover"
        />
        {/* TODO: Switching font size depends on a width size screen */}
        {/* <div className="mb-44 rounded-3xl py-6 text-white backdrop-blur-md transition duration-300 hover:scale-110 xl:w-2/3">
          <VaraHandwriting text="The best pizza in town!" fontSize={64} />
        </div> */}
      </div>
    </motion.section>
  );
};
