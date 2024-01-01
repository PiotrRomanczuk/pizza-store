"use client";

import Image from "next/image";
import { HandWritingAnimation } from "./HandWritingAnimation";
import { VaraHandwriting } from "./VaraHandwriting";

export const Gallery = () => {
  return (
    <div className="mt-6 h-screen">
      <div className="mx-auto grid h-5/6 w-4/5 grid-cols-2 grid-rows-3 gap-4 md:grid-cols-3 md:grid-rows-4">
        <div className="relative row-span-1 bg-indigo-100 md:row-span-2">
          <Image
            src="/unSplash/DoughMaking1.jpg"
            alt="Cooked Food"
            fill
            layout=""
            objectFit="cover"
          />
        </div>
        <div className="relative col-span-1 bg-red-100 md:col-span-2">
          <Image
            src="/unSplash/PizzaOven.jpg"
            alt=""
            fill
            layout=""
            objectFit="cover"
          />
        </div>
        <div className="flex items-center justify-center bg-red-700 text-center">
          {/* <VaraHandwriting
            text="We are here for you"
            fontSize={24}
            fontUrl="https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json"
            strokeWidth={1.8}
            textAlign="center"
            containerId="vara-container-1"
            zIndex={20}
          /> */}
        </div>
        <div className="relative row-span-1 bg-violet-100 md:row-span-2">
          <Image
            src="/unSplash/PizzaLED.jpg"
            alt=""
            fill
            layout=""
            objectFit="cover"
          />
        </div>
        <div className="relative col-span-1 row-span-1 bg-sky-100 md:col-span-2 md:row-span-2">
          <Image
            src="/unSplash/PizzaOnWooden.jpg"
            alt=""
            fill
            layout=""
            objectFit="cover"
          />
        </div>
        <div className="relative bg-emerald-100">
          <Image
            src="/unSplash/DoughMaking.jpg"
            alt=""
            fill
            layout=""
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};
