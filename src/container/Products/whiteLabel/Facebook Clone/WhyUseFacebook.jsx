import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import { 
  FaUsers, FaNewspaper, FaPhotoVideo, FaUserFriends, FaCalendarAlt, 
  FaStore, FaLock, FaRobot, FaGlobe, FaPuzzlePiece, FaBullhorn, FaCogs 
} from "react-icons/fa";

const reasons = [
  {
    icon: FaUsers,
    title: "Stay Connected With Friends & Family",
    desc: "Keep in touch with people across the world through posts, messages, comments, and reactions."
  },
  {
    icon: FaNewspaper,
    title: "Personalized News Feed",
    desc: "Stay updated with relevant posts from friends, groups, and pages you follow."
  },
  {
    icon: FaPhotoVideo,
    title: "Media Sharing",
    desc: "Upload and share photos, videos, stories, and go live — all in one platform."
  },
  {
    icon: FaUserFriends,
    title: "Community & Groups",
    desc: "Engage in communities based on hobbies, local events, or professional interests."
  },
  {
    icon: FaCalendarAlt,
    title: "Event Management",
    desc: "Create, share, and RSVP to events like birthdays or concerts with reminders and maps."
  },
  {
    icon: FaStore,
    title: "Marketplace",
    desc: "Buy and sell items locally without extra fees using Facebook Marketplace."
  },
  {
    icon: FaLock,
    title: "Privacy Controls",
    desc: "Manage who sees your posts, friend list, and data with strong privacy settings."
  },
  {
    icon: FaRobot,
    title: "Smart Recommendations",
    desc: "AI/ML recommends friends, pages, and content based on your interests."
  },
  {
    icon: FaGlobe,
    title: "Global & Multi-language Support",
    desc: "Supports various languages for users worldwide."
  },
  {
    icon: FaBullhorn,
    title: "Business & Brand Building",
    desc: "Use Pages, Ads, and Shops to build your brand and connect with audiences."
  },
  {
    icon: FaPuzzlePiece,
    title: "Interactive Plugins",
    desc: "Enjoy games, mini apps, and integrations to enhance your experience."
  },
  {
    icon: FaCogs,
    title: "Plug-and-Play Experience",
    desc: "Customize your profile and experience with a wide array of tools and settings."
  }
];

export default function WhyUseFacebook() {
  return (
    <div className="p-10">
      <Heading>Why Use Facebook?</Heading>
      <WrapperContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-[-25px]">
          {reasons.map((item, i) => (
            <div key={i} className="group flex items-start gap-4 p-5 bg-white rounded-xl shadow hover:shadow-lg hover:bg-blue-200 border transition-all duration-300">
            <item.icon className="text-blue-600 text-3xl mt-1 group-hover:text-green-600 transition-colors duration-300" />          
              <div>
                <h3 className="text-xl font-semibold mb-1 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </WrapperContainer>
    </div>
  );
}
