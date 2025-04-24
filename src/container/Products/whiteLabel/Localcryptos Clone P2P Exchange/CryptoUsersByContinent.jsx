import React from "react";
import Image from "next/image";
import { Globe, User, Flame } from "lucide-react";
import WrapperContainer from "@/Layout/WrapperContainer";

const cryptoData = [
  {
    continent: "Asia",
    users: "~260M",
    highlight:
      "High adoption in India, China (despite ban), Vietnam, Philippines, South Korea, Japan",
  },
  {
    continent: "North America",
    users: "~55M",
    highlight: "Strong in USA, Canada; institutional investors active",
  },
  {
    continent: "Europe",
    users: "~50M",
    highlight: "Widespread adoption; especially Germany, UK, France",
  },
  {
    continent: "Africa",
    users: "~45M",
    highlight: "Nigeria, Kenya, South Africa are crypto hotspots",
  },
  {
    continent: "South America",
    users: "~35M",
    highlight:
      "Brazil, Argentina, Venezuela adopt crypto to fight inflation",
  },
  {
    continent: "Oceania",
    users: "~5M",
    highlight: "Australia leads adoption here",
  },
];

const CryptoUsersByContinent = () => {
  return (
    <WrapperContainer>
      <div className=" bg-gray-50 py-10 px-4 mb-[50px]">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-10 flex justify-center items-center gap-2">
          <Globe className="w-8 h-8 text-blue-600" />
          Continent-wise Crypto User Distribution
        </h1>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Left image */}
          <div className="md:w-1/2 w-full">
            <Image
              src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/LocalCryptoUsersWorldwide-gif.gif"
              alt="LocalCryptoUsersWorldwide-gif"
              width={500}
              height={500}
              className="rounded-xl shadow-md w-full h-[500px]"
            />
          </div>

          {/* Right data rows */}
          <div className="md:w-1/2 w-full overflow-x-auto">
            <div className="min-w-[600px] h-[500px]">
              {/* Table Heading */}
              <div className="grid grid-cols-3 gap-4 bg-blue-100 text-blue-800 font-semibold p-3 rounded-t-xl">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-blue-600" />
                  Continent
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-blue-600" />
                  Users
                </div>
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-orange-500" />
                  Highlights
                </div>
              </div>

              {/* Data Rows */}
              {cryptoData.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 gap-4 bg-white border-b border-gray-200 p-3"
                >
                  <div className="text-gray-800 font-medium">{item.continent}</div>
                  <div className="text-gray-700">{item.users}</div>
                  <div className="text-gray-600">{item.highlight}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
};

export default CryptoUsersByContinent;
