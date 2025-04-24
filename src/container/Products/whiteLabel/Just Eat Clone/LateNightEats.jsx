import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import Image from "next/image";

const eateries = [
  {
    name: "Midnight Munchies",
    distance: "2.1 km",
    rating: 4.4,
    location: "Defence Colony, Delhi",
  },
  {
    name: "Night Owl Cafe",
    distance: "3.5 km",
    rating: 4.6,
    location: "Lajpat Nagar, Delhi",
  },
  {
    name: "24x7 Bites",
    distance: "5.0 km",
    rating: 4.7,
    location: "Rajendra Place, Delhi",
  },
];

const LateNightEats = () => {
  return (
    <WrapperContainer>
      {/* Hero Section */}
      <div className="relative bg-[#172554] p-4 rounded-lg overflow-hidden mb-2">
  <div className="relative z-10 text-center">
    <Heading className="text-5xl text-[#f9f9f9] font-bold leading-tight">
      Late Night Eats
    </Heading>
    <Paragraph className="text-xl text-white bg-[#172554] rounded-3xl p-1 font-bold max-w-4xl mx-auto">
      For those post-midnight cravings, we've got you covered with the
      best spots around town!
    </Paragraph>
  </div>
</div>


      {/* Menu Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* First Section: Veg/Non-Veg */}
        <div className="bg-[#172554] text-white p-6 rounded-lg">
          <h3 className="text-3xl font-semibold mb-6">Menu</h3>

          {/* Veg Section */}
          <div className="mb-6">
            <h4 className="text-2xl font-semibold text-[#FACC15] mb-4">
              Veg Options
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <p>Veg Pizza - A delightful pizza topped with fresh veggies.</p>
              </div>
              <div className="flex items-center space-x-4">
                <p>Veg Burger - A tasty burger packed with crispy veggies.</p>
              </div>
              <div className="flex items-center space-x-4">
                <p>
                  Veg Sandwich - A fresh sandwich with crunchy veggies and
                  cheese.
                </p>
              </div>
            </div>
          </div>

          {/* Non-Veg Section */}
          <div>
            <h4 className="text-2xl font-semibold text-[#FACC15] mb-4">
              Non-Veg Options
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <p>
                  Chicken Pizza - A flavorful pizza topped with grilled chicken.
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <p>
                  Non-Veg Burger - A juicy burger filled with tender chicken
                  patty.
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <p>
                  Chicken Sandwich - A delicious sandwich with grilled chicken
                  and veggies.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section: Image */}
        <div className="bg-[#EAB308] text-center p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 max-w-[90%] mx-auto hover:bg-gradient-to-r hover:from-[#FFEB3B] hover:to-[#FACC15]">
          <Heading className="text-3xl font-semibold mb-6 text-[#172554] tracking-tighter relative">
            Delicious Food
          </Heading>

          {/* Subheading or Tagline */}
          <p className="text-xl text-[#172554] font-medium mb-4">
            Taste the Best, Enjoy the Rest
          </p>

          {/* Image Section */}
          <div className="mb-6 relative">
            <Image
              src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Food.png"
              alt="Food"
              width={144}
              height={144}
              className="mx-auto mb-4 rounded-full object-cover border-4 border-[#172554] transition-transform duration-300 ease-in-out hover:scale-110"
            />
            {/* Label for Special Offer */}
            <div className="absolute top-0 right-0 bg-[#ffffff] border-black border-2 text-[#172554] px-4 py-2 rounded-full text-sm font-semibold">
              Special 🍔
            </div>
          </div>

          {/* Paragraph Section */}
          <Paragraph className="mt-4 text-lg text-[#172554] leading-relaxed px-6 py-4 rounded-lg bg-white mx-auto max-w-[100%] shadow-lg">
            Indulge in our mouthwatering selection of late-night food options,
            from pizzas to pastas, burgers, and more!
          </Paragraph>

          {/* Gradient Border on Hover */}
          <div className="mt-6 p-1 rounded-lg border-2 border-transparent hover:border-[#F8B400] transition-all duration-300">
            Okay.
          </div>
        </div>

        {/* Last Section: Dishes */}
        <div className="bg-[#172554] text-white p-6 rounded-lg">
          <h3 className="text-3xl font-semibold mb-6 border-b-2 border-[#FACC15] pb-4">
            Popular Dishes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {/* Top Row */}
            <div className="bg-[#1C3D64] p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <img
                  src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Pizza.png"
                  alt="Pizza"
                  className="w-16 h-16"
                />
              </div>
              <h4 className="text-2xl font-semibold text-center mb-4  text-[#FACC15]">Pizza</h4>
              <p className="text-center text-sm">
                Enjoy a classic pizza with your favorite toppings!
              </p>
            </div>

            <div className="bg-[#1C3D64] p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <img
                  src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Pasta.png"
                  alt="Pasta"
                  className="w-16 h-16"
                />
              </div>
              <h4 className="text-2xl font-semibold text-center mb-4  text-[#FACC15]">Pasta</h4>
              <p className="text-center text-sm">
                A creamy pasta dish with a variety of sauces.
              </p>
            </div>

            {/* Bottom Row */}
            <div className="bg-[#1C3D64] p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center justify-center mb-4  text-[#FACC15]">
                <img
                  src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Burger.png"
                  alt="Burger"
                  className="w-16 h-16"
                />
              </div>
              <h4 className="text-2xl font-semibold text-center mb-4  text-[#FACC15]">
                Burger
              </h4>
              <p className="text-center text-sm">
                Juicy burgers served with crispy fries.
              </p>
            </div>

            <div className="bg-[#1C3D64] p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <img
                  src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Sandwich.png"
                  alt="Sandwich"
                  className="w-16 h-16"
                />
              </div>
              <h4 className="text-2xl font-semibold text-center mb-4  text-[#FACC15]">
                Sandwich
              </h4>
              <p className="text-center text-sm">
                A delicious sandwich with fresh vegetables and cheese.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Eatery Listings */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {eateries.map((e, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-l-4 border-[#FACC15]"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-2xl font-semibold text-[#172554]">
                  {e.name}
                </h4>
                <div className="flex items-center text-yellow-500">
                  <span className="ml-2">{e.rating}</span>
                </div>
              </div>
              <div className="text-gray-700 mb-2 flex items-center">
                <p>{e.location}</p>
              </div>
              <div className="text-gray-700 mb-2 flex items-center">
                <p>Open Now: 24/7</p>
              </div>
              <div className="flex justify-between mt-4 text-gray-600">
                <p className="font-semibold">Distance: {e.distance}</p>
                <button className="bg-[#162350] text-[#ffffff] px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:bg-[#f8b000]">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <Paragraph className="text-[#162350] text-lg mb-4">
          Ready to satisfy those late-night cravings? Get your order now and
          enjoy hot food delivered right to your doorstep!
        </Paragraph>
        <button className="bg-[#FACC15] text-[#162350] px-8 py-4 rounded-lg text-xl font-semibold transition-all duration-300 hover:bg-[#f8b000]">
          Browse More Options
        </button>
      </div>
    </WrapperContainer>
  );
};

export default LateNightEats;
