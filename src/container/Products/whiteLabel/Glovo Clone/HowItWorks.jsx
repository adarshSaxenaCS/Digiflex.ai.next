import Image from 'next/image';
import WrapperContainer from '@/Layout/WrapperContainer';

const steps = [
  {
    title: "Choose Your Location",
    description: "Find the best restaurants near you.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/GlovoChooseLocation-jpg.jpg",
    alt:"GlovoChooseLocation-jpg"
  },
  {
    title: "Browse Restaurants",
    description: "Select from a wide range of cuisines.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/GlovoBrowseRestaurant-jpg.jpg",
    alt:"GlovoBrowseRestaurant-jpg"
  },
  {
    title: "Select Your Meal",
    description: "Add delicious meals to your cart.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/GlovoSelectYourMeal-jpg.jpg",
    alt:"GlovoSelectYourMeal-jpg"
  },
  {
    title: "Place Order",
    description: "Checkout and pay securely.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/GlovoPlaceOrder-jpg.jpg",
    alt:"GlovoPlaceOrder-jpg"
  },
  {
    title: "Track Delivery",
    description: "Watch your meal arrive in real-time.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/GlovoTrackDelivery-jpg.jpg",
    alt:"GlovoTrackDelivery-jpg"
  },
  {
    title: "Enjoy Your Food",
    description: "Bon appétit! Enjoy your meal at home.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/GlovoEnjoyYourFood-gif.jpg",
    alt:"GlovoEnjoyYourFood-gif"
  },
];

const HowItWorks = () => {
  return (
    <WrapperContainer>
      <section className="px-4 md:px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">How It Works</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white hover:bg-yellow-200 transition-colors duration-300 p-4 rounded-xl shadow-md flex flex-col items-center text-center border border-gray-200"
            >
              <div className="w-24 h-24 mb-4">
                <Image
                  src={step.image}
                  alt={step.title}
                  width={100}
                  height={100}
                  className="rounded-full object-cover w-full h-full"
                />
              </div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>

              {/* Horizontal line to the next step (desktop only) */}
              {index % 3 !== 2 && (
                <div className="hidden md:block absolute right-[-40px] top-12 w-[40px] h-[4px] bg-gray-300" />
              )}

              {/* Vertical lines between rows (desktop only) */}
              {index === 2 && (
                <div className="hidden md:block absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 w-[4px] h-10 bg-gray-300" />
              )}
              {index === 3 && (
                <div className="hidden md:block absolute top-[-30px] left-1/2 transform -translate-x-1/2 w-[4px] h-10 bg-gray-300" />
              )}
            </div>
          ))}
        </div>

      </section>
    </WrapperContainer>
  );
};

export default HowItWorks;
