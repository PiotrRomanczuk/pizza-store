import Image from "next/image";

export const About = () => {
  return (
    <section className="container mx-auto py-16 px-4">
      <div className="flex flex-col-reverse lg:flex-row gap-12 max-w-7xl mx-auto">
        {/* Images Container */}
        <div className="lg:w-1/2 flex flex-col justify-between">
          {/* First Image */}
          <div className="relative w-full h-[400px] rounded-2xl shadow-lg">
            <Image
              src="/unSplash/mainPage/DoughMaking.jpg"
              alt="Artisanal dough making process"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          
          {/* Second Image */}
          <div className="relative w-full h-[400px] rounded-2xl shadow-lg mt-6">
            <Image
              src="/unSplash/mainPage/DoughMaking1.jpg"
              alt="Additional dough making process"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Content Container */}
        <div className="lg:w-1/2 space-y-6">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-bold mb-6">About Us</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              At our pizzeria, tradition meets passion. Nestled in the heart of town, our family-owned pizzeria has been serving authentic Italian flavors for generations. We take pride in crafting pizzas the old-fashioned way—using hand-kneaded dough, rich tomato sauce made from sun-ripened Italian tomatoes, and the finest mozzarella, all baked to perfection in our stone ovens.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Our recipes have been passed down through the years, blending the rustic charm of Naples with the warmth of a family kitchen. Whether it's a classic Margherita, a savory Quattro Formaggi, or a special recipe from Nonna's cookbook, each bite is a taste of Italy's rich culinary heritage.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              We believe that great pizza is about more than just ingredients—it's about the experience. From the moment you step inside, the aroma of fresh basil, bubbling cheese, and wood-fired crust fills the air, transporting you straight to the bustling trattorias of Italy.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Come join us, savor a slice, and become part of our story—where every pizza is made with love, just like in the old days.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
