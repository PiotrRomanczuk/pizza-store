"use client";

import { navigation } from "./FooterNav";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-red-600">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-10 sm:py-12 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <button
                onClick={() => scrollToTop()}
                className="text-md cursor-pointer leading-6 text-white transition duration-200 hover:text-black"
              >
                {item.name}
              </button>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <a key={item.name} href={item.href} className="text-white">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="text-s mt-10 text-center leading-5 text-white">
          &copy; 2024 Romanczuk Co, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
