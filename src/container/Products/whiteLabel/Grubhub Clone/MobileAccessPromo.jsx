import React from "react";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import Subheading from "@/Layout/Subheading";
import WrapperContainer from "@/Layout/WrapperContainer";
import {
  Utensils,
  Truck,
  BadgePercent,
  ShieldCheck,
  Globe2,
  Smartphone,
} from "lucide-react";
import Image from "next/image"; // Assuming you're using Next.js

const MobileAccessPromo = () => {
  return (
    <WrapperContainer>
      {/* Heading */}
      <Heading className="text-center text-3xl sm:text-4xl font-extrabold text-[#162451] mb-4">
        Download the GrubHub Clone App
      </Heading>

      {/* Subheading */}
      <Paragraph className="max-w-2xl mx-auto text-base sm:text-lg text-center text-[#162451] mb-10">
        Your favorite meals, now at your fingertips. Enjoy quick ordering, live
        tracking, and app-exclusive deals with our mobile app.
      </Paragraph>

      {/* Two-Column Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-8 items-stretch">
        {/* Left: App Screens */}
        <div className="flex justify-center">
          <Image
            src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/App-Preview.png"
            alt="App-Preview"
            width={740} // Set the width to match the image source
            height={540} // Set the height for the image
            className="shadow-lg max-w-md h-auto sm:h-[540px] object-cover rounded-xl"
          />
        </div>

        {/* Right: Text Content */}
        <div className="h-auto sm:h-[520px] flex flex-col justify-between bg-[#E8F0FE] p-6 rounded-xl border border-[#162451]">
          <div>
            <Subheading className="text-xl sm:text-2xl font-semibold text-[#162451] mb-2">
              A Better Way to Order Food
            </Subheading>
            <ul className="space-y-5 text-base sm:text-lg text-gray-800 leading-relaxed">
              {[
                {
                  icon: <Utensils className="text-[#162451] mt-1      " />,
                  text: (
                    <>
                      <strong>Explore Local Favorites:</strong> Browse full
                      menus from top-rated restaurants.
                    </>
                  ),
                },
                {
                  icon: <Truck className="text-[#162451] mt-1" />,
                  text: (
                    <>
                      <strong>Track Deliveries Live:</strong> Real-time updates
                      from kitchen to doorstep.
                    </>
                  ),
                },
                {
                  icon: <BadgePercent className="text-[#162451] mt-1" />,
                  text: (
                    <>
                      <strong>App-Only Discounts:</strong> Get access to special
                      offers and cashback deals.
                    </>
                  ),
                },
                {
                  icon: <ShieldCheck className="text-[#162451] mt-1" />,
                  text: (
                    <>
                      <strong>Secure & Fast Checkout:</strong> Multiple payment
                      options with encryption.
                    </>
                  ),
                },
                {
                  icon: <Globe2 className="text-[#162451] mt-1" />,
                  text: (
                    <>
                      <strong>Available Nationwide:</strong> Our app is
                      supported in major cities across the country.
                    </>
                  ),
                },
                {
                  icon: <Smartphone className="text-[#162451] mt-1" />,
                  text: (
                    <>
                      <strong>Easy Account Management:</strong> Save favorite
                      orders, addresses & payment details with ease.
                    </>
                  ),
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 p-2 rounded-lg transition-all duration-200 hover:bg-[#162451]   hover:scale-[1.02] cursor-pointer"
                >
                  {item.icon}
                  <span className="hover:text-white">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4 text-sm text-gray-500">
            *Features may vary by location and availability.
          </div>
        </div>
      </div>

      {/* Download Badges */}
      <div className="flex justify-center gap-6 mt-14">
        <Image
          src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Download-on-App-Store.png"
          alt="Download-on-App-Store"
          width={60} // Set the width to match the image source
          height={30} // Set a suitable height for the image
          className="h-12 sm:h-16"
        />
      </div>

      {/* Final Tagline */}
      <Subheading className="text-center mt-12 text-[#162451] font-semibold text-lg sm:text-xl">
        Food at your fingertips—anywhere, anytime.
      </Subheading>
    </WrapperContainer>
  );
};

export default MobileAccessPromo;
