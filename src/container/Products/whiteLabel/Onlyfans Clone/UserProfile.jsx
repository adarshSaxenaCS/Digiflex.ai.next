import React from "react";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import WrapperContainer from "@/Layout/WrapperContainer";
import { User, Heart, Book, Star } from "lucide-react"; // Importing Lucide icons

function UserProfile() {
  return (
    <WrapperContainer className="py-10 bg-[#F9FAFB]">
      <div className="text-center mb-10">
        <Heading className="text-4xl font-extrabold text-[#172453]">
          Creator Profile
        </Heading>
        <Paragraph className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
          A Creator Profile is your personal space where you can share your creativity, experiences, and insights with your audience. 
          It’s where you can build a community, monetize your content, and engage with fans directly. Here’s how to build one!
        </Paragraph>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
        {/* Left Profile Section */}
        <div className="flex-1 text-center">
          <div className="mb-4">
            <User className="text-6xl text-[#172453] mx-auto mt-8" /> {/* Lucide User Icon */}
          </div>
          <h2 className="text-2xl font-semibold text-[#172453]">John Doe</h2>
          <p className="text-gray-700 text-lg">Lifestyle Blogger</p>
          <div className="bg-[#172453] text-white py-2 px-4 rounded-md mt-4">
            <span>Subscribed</span>
          </div>
        </div>

        {/* Right Bio Section */}
        <div className="flex-1 bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-[#172453] mb-4">About Me</h3>
          <p className="text-gray-700">
            Hi, I'm John! I love sharing my experiences with lifestyle tips, health & wellness advice,
            and personal stories. My mission is to inspire others to live a healthy, balanced, and meaningful life. 
            I share everything from fitness routines, mindfulness techniques, to travel adventures. 
            Subscribe for exclusive content and join the community!
          </p>
        </div>
      </div>

      {/* Recent Posts */}
      <div>
        <Heading className="text-3xl font-semibold text-[#172453] mb-4 text-center">
          Recent Posts
        </Heading>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Post 1 */}
          <div className="bg-[#172453] text-white p-6 rounded-lg shadow-lg">
            <div className="bg-gray-200 h-40 rounded-lg mb-4 flex items-center justify-center">
              <Heart className="text-5xl text-[#172453] transition-transform duration-300 ease-in-out hover:scale-125 hover:text-[#FF6347]" /> {/* Heart Icon with hover effect */}
            </div>
            <h4 className="text-xl font-semibold">Tips for Healthy Living</h4>
            <p className="text-gray-200 text-sm">
              A detailed guide on how to maintain a balanced and healthy lifestyle through diet, exercise, and mindfulness.
            </p>
          </div>

          {/* Post 2 */}
          <div className="bg-[#172453] text-white p-6 rounded-lg shadow-lg">
            <div className="bg-gray-200 h-40 rounded-lg mb-4 flex items-center justify-center">
              <Book className="text-5xl text-[#172453] transition-transform duration-300 ease-in-out hover:scale-125 hover:text-[#FF6347]" /> {/* Book Icon with hover effect */}
            </div>
            <h4 className="text-xl font-semibold">Mindfulness Meditation</h4>
            <p className="text-gray-200 text-sm">
              Learn how meditation can help reduce stress, improve mental clarity, and enhance overall well-being.
            </p>
          </div>

          {/* Post 3 */}
          <div className="bg-[#172453] text-white p-6 rounded-lg shadow-lg">
            <div className="bg-gray-200 h-40 rounded-lg mb-4 flex items-center justify-center">
              <Star className="text-5xl text-[#172453] transition-transform duration-300 ease-in-out hover:scale-125 hover:text-[#FF6347]" /> {/* Star Icon with hover effect */}
            </div>
            <h4 className="text-xl font-semibold">Fitness Routine for Beginners</h4>
            <p className="text-gray-200 text-sm">
              An easy-to-follow workout routine for beginners to get started on their fitness journey with a focus on strength and endurance.
            </p>
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
}

export default UserProfile;
