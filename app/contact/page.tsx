import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-max bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-center text-4xl font-bold text-red-700">
          Contact PizzaYOLO
        </h1>

        <div className="mb-8 grid gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              Visit Our Restaurant
            </h2>
            <div className="space-y-3 text-gray-600">
              <p>📍 123 Pizza Street, Little Italy</p>
              <p>📞 (555) 123-4567</p>
              <p>✉️ info@PizzaYOLO.com</p>
              <p>🕒 Hours:</p>
              <ul className="list-none pl-6">
                <li>Tuesday - Thursday: 11:00 AM - 10:00 PM</li>
                <li>Friday - Saturday: 11:00 AM - 11:00 PM</li>
                <li>Sunday: 12:00 PM - 9:00 PM</li>
                <li>Monday: Closed</li>
              </ul>
            </div>
          </div>

          <div className="relative h-[300px] overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/unSplash/mainPage/PizzaOven.jpg"
              alt="Our Traditional Pizza Oven"
              className="h-full w-full object-cover"
              width={500}
              height={300}
            />
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            About Our Kitchen
          </h2>
          <p className="mb-4 text-gray-600">
            Since 1985, PizzaYOLO has been serving authentic Neapolitan pizza
            made in our wood-fired oven imported directly from Naples. Our dough
            is made fresh daily using Italian 00 flour, and we source the finest
            San Marzano tomatoes and buffalo mozzarella for our pizzas.
          </p>
          <p className="text-gray-600">
            For reservations or special events, please call us or send an email.
            We look forward to serving you the best pizza this side of Italy!
            🍕🇮🇹
          </p>
        </div>
      </div>
    </div>
  );
}
