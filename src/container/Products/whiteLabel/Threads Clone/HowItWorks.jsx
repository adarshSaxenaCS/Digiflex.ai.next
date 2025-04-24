import React from "react";
import { FaUserPlus, FaUsers, FaPenFancy, FaHeart, FaComments, FaShieldAlt } from "react-icons/fa";
import Image from "next/image";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";

const steps = [
    {
      icon: <FaUserPlus />,
      title: "Sign Up",
      description: "Join the Threads community by signing up with your email or social account. Customize your profile with a username, profile picture, and bio to express who you are.",
    },
    {
      icon: <FaUsers />,
      title: "Connect",
      description: "Find and follow friends or discover new people. Build your network by sending friend requests or following users whose content you love.",
    },
    {
      icon: <FaPenFancy />,
      title: "Create Threads",
      description: "Start conversations by posting short text updates, photos, or videos. Share your thoughts, ask questions, or showcase your creativity through engaging threads.",
    },
    {
      icon: <FaHeart />,
      title: "Engage",
      description: "Show appreciation by liking, reposting, or quoting others' threads. Build interaction and grow your visibility by engaging with the community.",
    },
    {
      icon: <FaComments />,
      title: "Conversations",
      description: "Chat privately with individuals or participate in group discussions. Stay connected, exchange ideas, or just catch up with your friends — all in real time.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Privacy & Insights",
      description: "Take full control of your account with advanced privacy settings. See who’s engaging with your content and get insights to understand your audience better.",
    },
  ];
  

const FeatureBox = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg transition hover:scale-105 group text-center relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-purple-300 to-pink-400 opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-500" />
    <div className="text-blue-600 text-3xl mb-4 group-hover:text-purple-600 transition">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

export default function HowItWorks() {
  return (
    <div className="py-12 px-4 sm:px-10">
      <Heading>How It Works</Heading>
      <WrapperContainer className="space-y-14 mt-12">

        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 mt-[-100px]">
          <div>
            <Image src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Threads1-gif.gif" width={100} height={100} alt="Step 1" className="rounded-xl mx-auto h-[300px] w-[400px]" />
          </div>
          <FeatureBox {...steps[0]} />
          <FeatureBox {...steps[1]} />
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 mt-[-80px]">
          <FeatureBox {...steps[2]} />
          <div>
            <Image src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Threads2-gif.gif" width={100} height={100} alt="Step 2" className="rounded-xl mx-auto h-[300px] w-[400px]" />
          </div>
          <FeatureBox {...steps[3]} />
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8">
          <FeatureBox {...steps[4]} />
          <FeatureBox {...steps[5]} />
          <div>
            <Image src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Threads3-gif.gif" width={100} height={100} alt="Step 3" className="rounded-xl mx-auto h-[300px] w-[400px]" />
          </div>
        </div>
      </WrapperContainer>
    </div>
  );
}
