"use client";

import Link from "next/link";
import Image from "next/image";
import { Suspense, useState } from "react";
import CartButton from "@/components/Cart/CartButton";
import CartModal from "@/components/Cart/CartModal";

export const Navbar = () => {
  const navigationItems = [
    { title: "Homepage", link: "/" },
    // { title: "Products", link: "/products" },
    { title: "Menu", link: "/menu" },
    // { title: "Events", link: "/events" },
    { title: "Blog", link: "/blog" },
    { title: "Contact", link: "/contact" },
  ];
  const middleIndex = Math.ceil(navigationItems.length / 2);

  const [showModal, setshowModal] = useState(false);

  return (
    <div className="sticky top-0 z-50 flex h-[100px] items-center justify-between bg-red-600 px-8 py-8">
      <div className="hidden items-center 2xl:flex ">
        <div className="absolute left-6">
          <div className="rounded-full bg-white p-2">
            <Image
              src="/img/telephone.png"
              alt="telephone"
              width={32}
              height={32}
            />
          </div>
        </div>
        <div className="ml-12 text-white">
          <div className="font-medium">ORDER NOW!</div>
          <div className="text-2xl font-semibold">123-456-789-007</div>
        </div>
      </div>
      <div className="flex flex-grow justify-center">
        <ul className="flex items-center gap-8 font-kalam text-xl text-white 2xl:-ml-48">
          {navigationItems.slice(0, middleIndex).map((item, index) => (
            <li
              key={index}
              className="cursor-pointer transition duration-200 hover:text-black"
            >
              <Link href={item.link}>{item.title}</Link>
            </li>
          ))}
          <Link href={"/"}>
            <Image
              src="/img/logo.png"
              alt="logo"
              width={160}
              height={69}
              className="cursor-pointer transition hover:scale-110"
            />
          </Link>
          {navigationItems.slice(middleIndex).map((item, index) => (
            <li
              key={middleIndex + index}
              className="cursor-pointer transition duration-200 hover:text-black"
            >
              <Link href={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <CartButton onClick={() => {
          setshowModal(true);
        }} />
      </div>
      {/* <Suspense fallback={<OpenCart />}>
          <Cart />
        </Suspense> */}
        {showModal && <CartModal />}
    </div>
  );
};
