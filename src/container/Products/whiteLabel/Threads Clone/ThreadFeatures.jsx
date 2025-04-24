import React from "react";
import { FaUserPlus, FaRegCommentDots, FaHeart, FaRetweet, FaSearch, FaImage, FaUserCircle, FaMoon, FaBell, FaShieldAlt } from "react-icons/fa";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";

const features = [
  {
    icon: <FaUserPlus />,
    title: "Follow & Connect",
    description: "Follow users and grow your personalized network just like Threads.",
  },
  {
    icon: <FaRegCommentDots />,
    title: "Threaded Conversations",
    description: "Reply to posts and create engaging conversation chains with ease.",
  },
  {
    icon: <FaHeart />,
    title: "Like & React",
    description: "React to posts to engage with your community and show appreciation.",
  },
  {
    icon: <FaRetweet />,
    title: "Repost Threads",
    description: "Easily share threads to your own profile to reach your followers.",
  },
  {
    icon: <FaSearch />,
    title: "Explore & Search",
    description: "Discover trending posts, search users, and explore public content.",
  },
  {
    icon: <FaImage />,
    title: "Media Support",
    description: "Upload and share images in your posts to enhance communication.",
  },
  {
    icon: <FaUserCircle />,
    title: "User Profiles",
    description: "Each user has a customizable profile page with their own bio and posts.",
  },
  {
    icon: <FaMoon />,
    title: "Dark / Light Mode",
    description: "Switch between dark and light themes for a comfortable experience.",
  },
  {
    icon: <FaBell />,
    title: "Notifications",
    description: "Get real-time updates when someone likes, comments, or follows you.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure Authentication",
    description: "Signup, login, and protected routes handled with JWT for safety.",
  },
];

export default function ThreadFeatures() {
  return (
    <div className="py-12 px-4 sm:px-10">
      <Heading>Key Features of Our Threads Clone</Heading>
      <WrapperContainer>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-[-30px]">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 text-center group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-300 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-xl" />
              <div className="text-purple-600 text-4xl mb-4 group-hover:text-pink-600 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </WrapperContainer>
    </div>
  );
}
