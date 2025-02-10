"use client";

import Image from "next/image";
import { VaraHandwriting } from "./VaraHandwriting";
import { motion } from "framer-motion";

export const Gallery = () => {
  return (
    <div className="mt-6 h-screen">
      <div className="mx-auto grid h-5/6 w-4/5 grid-cols-2 grid-rows-3 gap-4 md:grid-cols-3 md:grid-rows-4">
        <motion.div
          className="relative row-span-1 bg-indigo-100 md:row-span-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/unSplash/mainPage/DoughMaking1.jpg"
            alt="Cooked Food"
            fill
            layout=""
            objectFit="cover"
          />
        </motion.div>
        <motion.div
          className="relative col-span-1 bg-red-100 md:col-span-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/unSplash/mainPage/PizzaOven.jpg"
            alt=""
            fill
            layout=""
            objectFit="cover"
          />
        </motion.div>
        <div className="flex items-center justify-center bg-red-700 text-center">
          <VaraHandwriting
            text="We are here for you !"
            fontSize={52}
            divID="vara-container-1"
          />
        </div>
        <motion.div
          className="relative row-span-1 bg-violet-100 md:row-span-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/unSplash/mainPage/PizzaLED.jpg"
            alt=""
            fill
            layout=""
            objectFit="cover"
          />
        </motion.div>
        <motion.div
          className="relative col-span-1 row-span-1 bg-sky-100 md:col-span-2 md:row-span-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/unSplash/mainPage/PizzaOnWooden.jpg"
            alt=""
            fill
            layout=""
            objectFit="cover"
          />
        </motion.div>
        <motion.div
          className="relative bg-emerald-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/unSplash/mainPage/DoughMaking.jpg"
            alt=""
            fill
            layout=""
            objectFit="cover"
          />
        </motion.div>
      </div>
    </div>
  );
};
