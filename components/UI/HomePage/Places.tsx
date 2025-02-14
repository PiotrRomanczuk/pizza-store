import Image from "next/image";

export const Places = () => {
  return (
    <section className="container mx-auto py-16 px-4">
      <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
        {/* Content Container */}
        <div className="lg:w-1/2 space-y-6">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-bold mb-6">About us</h2>
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                Our team is driven by a deep passion for crafting the perfect pizza. Every member, from our skilled pizzaiolos to our welcoming staff, shares a love for authentic Italian flavors and a dedication to excellence. We don't just make pizza—we create an experience, pouring our heart and soul into every dough we knead, every sauce we simmer, and every topping we carefully select.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Behind each pizza is a story of craftsmanship, patience, and tradition. Our team works tirelessly to ensure that every slice reflects the rich heritage of Italian cuisine. We source the finest ingredients, from hand-picked basil to creamy mozzarella, and use time-honored techniques to bring out the best flavors.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                For us, pizza-making is an art. From the crackling crust of a wood-fired pie to the perfect balance of tangy tomato and melted cheese, every detail matters. It's not just about feeding people—it's about creating moments of joy, bringing friends and families together over a meal that's made with love.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This is more than a job for us—it's a calling. With every pizza we serve, we share a piece of our passion, ensuring that every guest leaves with a satisfied heart and a taste of something truly special.
              </p>
            </div>
          </div>
        </div>

        {/* Image Container */}
        <div className="lg:w-1/2">
          <div className="relative w-full h-[800px] rounded-2xl shadow-lg">
            <Image
              src="/unSplash/mainPage/Outside.jpg"
              alt="Dough Making"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
