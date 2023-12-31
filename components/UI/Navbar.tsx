import Image from "next/image";

export const Navbar = () => {
  const navigationItems = [
    "Homepage",
    "Products",
    "Menu",
    "Events",
    "Blog",
    "Contact",
  ];
  const middleIndex = Math.ceil(navigationItems.length / 2);

  return (
    <div className="h-{100px} sticky top-0 z-50 flex items-center justify-between bg-red-600 px-8 py-8">
      <div className=" flex items-center">
        <div className="rounded-full bg-white p-2">
          <Image
            src="/img/telephone.png"
            alt="telephone"
            width={32}
            height={32}
          />
        </div>
        <div className="ml-6 text-white">
          <div className="font-medium">ORDER NOW!</div>
          <div className="text-2xl font-semibold">612 313 817</div>
        </div>
      </div>
      <div>
        <ul className="flex items-center gap-8 font-kalam text-xl text-white">
          {navigationItems.slice(0, middleIndex).map((item, index) => (
            <li
              key={index}
              className="cursor-pointer transition duration-200 hover:text-black"
            >
              {item}
            </li>
          ))}
          <Image
            src="/img/logo.png"
            alt="logo"
            width={160}
            height={69}
            className="cursor-pointer transition hover:scale-110"
          />
          {navigationItems.slice(middleIndex).map((item, index) => (
            <li
              key={middleIndex + index}
              className="cursor-pointer transition duration-200 hover:text-black"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        {/* // TODO: Add the relativeness for that cart count */}
        <div className="relative">
          <Image
            src="/img/cart.png"
            alt="cart"
            width={50}
            height={50}
            className="relative"
          />
          <div className="absolute right-0 top-0 h-10 w-10 pb-6 pl-20 text-white">
            10
          </div>
        </div>
      </div>
    </div>
  );
};
