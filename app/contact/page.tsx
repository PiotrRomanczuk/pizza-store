export default function Home() {
  return (
    <div className="min-h-max bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-red-700 mb-8">
          Contact PizzaYOLO
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
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
          
          <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
            <img
              src="/unSplash/mainPage/PizzaOven.jpg"
              alt="Our Traditional Pizza Oven"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            About Our Kitchen
          </h2>
          <p className="text-gray-600 mb-4">
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