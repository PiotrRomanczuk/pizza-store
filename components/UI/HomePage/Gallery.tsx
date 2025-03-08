"use client";

import "./Gallery-styles.css";
import Image from "next/image";
import { VaraHandwriting } from "@/components/UI/HomePage/VaraHandwriting";
import { motion } from "framer-motion";

export const Gallery = () => {
  return (
    <div className="mt-6 bg-neutral-50 py-12">
      <div className="mx-auto grid h-[800px] w-11/12 grid-cols-2 grid-rows-3 gap-6 md:grid-cols-3 md:grid-rows-4">
        <motion.div
          className="relative z-10 row-span-1 overflow-hidden rounded-2xl bg-indigo-100 shadow-lg transition-transform hover:scale-[1.02] md:row-span-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/unSplash/mainPage/DoughMaking1.jpg"
            alt="Pizza dough making process"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </motion.div>
        <motion.div
          className="relative col-span-1 overflow-hidden rounded-2xl bg-red-100 shadow-lg transition-transform hover:scale-[1.02] md:col-span-2"
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
        <div className="flex items-center justify-center overflow-hidden rounded-2xl bg-red-700 text-center shadow-lg transition-transform hover:scale-[1.02]">
          <VaraHandwriting
            text="We are here for you!"
            fontSize={44}
            divID="vara-container-1"
          />
        </div>
        <motion.div
          className="relative row-span-1 overflow-hidden rounded-2xl bg-violet-100 shadow-lg transition-transform hover:scale-[1.02] md:row-span-2"
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
          className="relative col-span-1 row-span-1 overflow-hidden rounded-2xl bg-sky-100 shadow-lg transition-transform hover:scale-[1.02] md:col-span-2 md:row-span-2"
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
          className="relative overflow-hidden rounded-2xl bg-emerald-100 shadow-lg transition-transform hover:scale-[1.02]"
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
