"use client";

import Link from "next/link";
import Image from "next/image";
import {  useState } from "react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 flex h-[100px] items-center justify-between bg-red-600 px-4 py-8 md:px-8">
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

      <button
        className="text-white lg:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isMenuOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      <div className="hidden flex-grow justify-center lg:flex">
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
              src="/logo_transparent.png"
              alt="logo"
              width={300}
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

      {isMenuOpen && (
        <div className="absolute left-0 top-[100px] w-full bg-red-600 px-4 py-4 lg:hidden">
          <ul className="flex flex-col gap-4 font-kalam text-xl text-white">
            {navigationItems.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer transition duration-200 hover:text-black"
              >
                <Link href={item.link} onClick={() => setIsMenuOpen(false)}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="lg:hidden">
        <Link href="/">
          <Image
            src="/logo_transparent.png"
            alt="logo"
            width={300}
            height={69}
            className="cursor-pointer transition hover:scale-110"
          />
        </Link>
      </div>

      <div>
        <CartButton
          onClick={() => {
            setshowModal(!showModal);
          }}
        />
      </div>
      {showModal && <CartModal showModal={showModal} toggle={() => setshowModal(!showModal)} />}
    </div>
  );
};
