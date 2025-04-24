import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import {
  FaUserPlus,
  FaUserFriends,
  FaCameraRetro,
  FaHeart,
  FaComments,
  FaLock,
} from "react-icons/fa";
import Image from "next/image";

const steps = [
  {
    icon: FaUserPlus,
    title: "Sign Up & Create Profile",
    desc: "Get started by signing up with email or social login, and personalize your profile.",
  },
  {
    icon: FaUserFriends,
    title: "Connect With Friends",
    desc: "Send and receive friend requests to build your social circle.",
  },
  {
    icon: FaCameraRetro,
    title: "Share Posts, Photos & Videos",
    desc: "Create updates with images, videos, or just text to share with your friends.",
  },
  {
    icon: FaHeart,
    title: "Engage with Content",
    desc: "React to posts with likes, leave comments, and share your favorite updates.",
  },
  {
    icon: FaComments,
    title: "Chat Privately or in Groups",
    desc: "Use real-time messaging to chat one-on-one or with groups of friends.",
  },
  {
    icon: FaLock,
    title: "Control Privacy & Insights",
    desc: "Adjust your privacy settings and view engagement metrics easily.",
  },
];

export default function HowItWorks() {
  return (
    <div className="p-10">
      <Heading>How It Works</Heading>
      <WrapperContainer>
        <div className="flex flex-col lg:flex-row justify-between gap-10 mt-[-20px]">
          {/* Left Boxes */}
          <div className="flex flex-col gap-6 w-full lg:w-1/3">
            {steps.slice(0, 3).map((step, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 p-5 bg-white rounded-xl shadow hover:shadow-lg hover:bg-blue-100 border transition-all duration-300"
              >
                <step.icon className="text-blue-600 text-3xl mt-1 group-hover:text-green-400 transition-colors duration-300" />
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-gray-800">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Middle Images */}
          <div className="flex flex-col items-center justify-center gap-6 w-full lg:w-1/3">
            <Image
              src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/FbConnect-gif.gif"
              alt="FbConnect-gif"
              width={100}
              height={100}
              className="rounded-xl w-[330px] h-[192px] object-cover"
            />
            <img
              src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/FbPost-gif.gif"
              alt="FbPost-gif"
              width={100}
              height={100}
              className="rounded-xl w-[330px] h-[192px] object-cover"
            />
          </div>

          {/* Right Boxes */}
          <div className="flex flex-col gap-6 w-full lg:w-1/3">
            {steps.slice(3).map((step, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 p-5 bg-white rounded-xl shadow hover:shadow-lg hover:bg-blue-100 border transition-all duration-300"
              >
                <step.icon className="text-blue-600 text-3xl mt-1 group-hover:text-green-600 transition-colors duration-300" />
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-gray-800">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </WrapperContainer>
    </div>
  );
}
