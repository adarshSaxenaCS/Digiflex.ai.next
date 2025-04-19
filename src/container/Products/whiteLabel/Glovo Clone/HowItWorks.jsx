import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import WrapperContainer from '@/Layout/WrapperContainer';

const steps = [
  {
    title: "Choose Your Location",
    description: "Find the best restaurants near you.",
    image: "https://i.pinimg.com/736x/9e/72/83/9e7283e54993097e203f5e59c2acba82.jpg",
  },
  {
    title: "Browse Restaurants",
    description: "Select from a wide range of cuisines.",
    image: "https://i.pinimg.com/736x/38/c3/bc/38c3bce39976d5d6163c1575d2f32b18.jpg",
  },
  {
    title: "Select Your Meal",
    description: "Add delicious meals to your cart.",
    image: "https://i.pinimg.com/736x/4f/a6/93/4fa6935e9d51ba5394b1fc4bb843bcc8.jpg",
  },
  {
    title: "Place Order",
    description: "Checkout and pay securely.",
    image: "https://i.pinimg.com/736x/28/11/38/28113820459ee44f84c2495caf1a7b00.jpg",
  },
  {
    title: "Track Delivery",
    description: "Watch your meal arrive in real-time.",
    image: "https://i.pinimg.com/736x/fd/5d/36/fd5d360ff078dc897e88dbed7c95118e.jpg",
  },
  {
    title: "Enjoy Your Food",
    description: "Bon appétit! Enjoy your meal at home.",
    image: "https://i.pinimg.com/originals/43/c4/96/43c49644d093033abad16722568704c3.gif",
  },
];

const HowItWorks = () => {
  return (
    <WrapperContainer>
        <section className="px-6 py-16 relative">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">How It Works</h2>
      
      <div className="relative max-w-7xl mx-auto grid grid-cols-3 gap-20">
      {steps.map((step, index) => {
  return (
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
          className="rounded-full object-cover w-[100px] h-[100px]"
        />
      </div>
      <h3 className="font-semibold text-lg text-gray-800 mb-2">{step.title}</h3>
      <p className="text-gray-600 text-sm">{step.description}</p>

      {/* Horizontal line to the next step */}
      {index % 3 !== 2 && (
        <div className="absolute right-[-79px] top-12 w-[22%] h-[5px] bg-gray-300 hidden md:block" />
      )}

      {/* Vertical lines between rows */}
      {index === 2 && (
        <div className="absolute bottom-[-41px] left-1/2 transform -translate-x-1/2 w-[5px] h-10 bg-gray-300 hidden md:block" />
      )}
      {index === 3 && (
        <div className="absolute top-[-39px] left-1/2 transform -translate-x-1/2 w-[5px] h-10 bg-gray-300 hidden md:block" />
      )}
    </div>
  );
})}

      </div>

      {/* Zig-zag line from step 3 to 4 */}
      {/* <div className="hidden md:block absolute left-1/2 top-[calc(50%-8px)] w-[2px] h-8 bg-gray-300 transform -translate-x-1/2 rotate-45" /> */}

      {/* 🔥 New horizontal line between top and bottom rows */}
      <div className="hidden md:block absolute top-[390px] left-1/2 transform -translate-x-1/2 w-[68.9%] h-[5px] bg-gray-300 z-0" />
    </section>
    </WrapperContainer>
  );
};

export default HowItWorks;
