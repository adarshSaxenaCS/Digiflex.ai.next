import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import {
    FaUserFriends, FaRegNewspaper, FaGamepad, FaVideo, FaCalendarAlt, FaStore, FaRobot, FaBrain,
    FaBell, FaLock, FaComments, FaSearch, FaImages, FaHeart, FaMobileAlt, FaLanguage, FaPuzzlePiece
  } from "react-icons/fa";
  import { FaUserPen, FaUserPlus } from "react-icons/fa6"; // newer icons for profile editing & friend requests
  

// Modified to include `key` as a parameter
const featureItem = (Icon, text, color, direction, key) => (
  <li key={key} className="relative group flex items-center gap-3 cursor-pointer">
    <Icon className={`text-${color}-500 mr-[20px] text-[30px]`} />
    <span className="relative overflow-hidden text-black text-[18px]">
      <span className="relative z-10">{text}</span>
      <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-${color}-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${direction === "left" ? "origin-left" : "origin-right"}`}></span>
    </span>
  </li>
);

export default function FacebookCloneFeatures() {

    const core = [
        { icon: FaUserFriends, text: "User Authentication – Signup/Login using email or social logins", dir: "right" },
        { icon: FaUserPen, text: "User Profiles – Editable bios, profile pictures, covers", dir: "left" },
        { icon: FaUserPlus, text: "Friend Requests – Send, receive, cancel, accept", dir: "right" },
        { icon: FaRegNewspaper, text: "News Feed – Post updates, images, and see friend activity", dir: "left" },
        { icon: FaHeart, text: "Reactions & Comments – Like, comment, share posts", dir: "right" },
        { icon: FaImages, text: "Photo Albums – Upload multiple photos, create albums", dir: "left" },
        { icon: FaBell, text: "Notifications – Real-time or email-based", dir: "right" },
        { icon: FaComments, text: "Messaging – Chat system or real-time DMs", dir: "left" },
        { icon: FaSearch, text: "Search Functionality – Find users, posts, groups", dir: "right" },
        { icon: FaLock, text: "Privacy Controls – Who can see posts, friend list, etc.", dir: "left" },
      ];
      

      const additional = [
        { icon: FaVideo, text: "Live Video Streaming", dir: "left" },
        { icon: FaCalendarAlt, text: "Events & Group Creation", dir: "right" },
        { icon: FaStore, text: "Marketplace System", dir: "left" },
        { icon: FaRobot, text: "Smart Feed via AI/ML – Personalized content recommendations", dir: "right" },
        { icon: FaMobileAlt, text: "Mobile Responsiveness or PWA – Progressive Web App", dir: "left" },
        { icon: FaLanguage, text: "Multi-language Support", dir: "right" },
        { icon: FaPuzzlePiece, text: "Plugin-based Architecture – For scalability", dir: "left" },
        { icon: FaGamepad, text: "Mini Games Integration", dir: "right" },
        { icon: FaBrain, text: "AI/ML Based Feed – Smart Recommendations", dir: "left" },
      ];

  return (
    <div className="p-10">
      <Heading>Facebook Clone Features</Heading>
      <WrapperContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-[-50px]">

          {/* Left Side - Additional Features */}
          <div className="bg-white p-6 rounded-2xl shadow-md border hover:shadow-xl transition duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-blue-500">Additional Features</h2>
            <ul className="space-y-4">
              {additional.map((item, i) => featureItem(item.icon, item.text, "blue", item.dir, `add-${i}`))}
            </ul>
          </div>

          {/* Right Side - Core Features */}
          <div className="bg-white p-6 rounded-2xl shadow-md border hover:shadow-xl transition duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-green-500">Core Features</h2>
            <ul className="space-y-4">
              {core.map((item, i) => featureItem(item.icon, item.text, "green", item.dir, `core-${i}`))}
            </ul>
          </div>

        </div>
      </WrapperContainer>
    </div>
  );
}
