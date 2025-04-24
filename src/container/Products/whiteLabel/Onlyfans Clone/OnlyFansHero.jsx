import React from "react";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import { Star, ShieldCheck, PhoneCall, User, Heart } from "lucide-react"; 
import WrapperContainer from "@/Layout/WrapperContainer";

function OnlyFansHero() {
  return (
    <WrapperContainer className="py-10 bg-[#F9FAFB]">
      <div className="text-center mb-10">
        <Heading className="text-4xl font-extrabold text-[#172453]">
          Welcome to the{" "}
          <span className="bg-[#172554] text-white px-2 py-0.5 rounded-md">
            OnlyFans Clone
          </span>
        </Heading>
        <Paragraph className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
          Discover exclusive content, support your favorite creators, and gain access to premium posts, live sessions, and more. Join now to unlock a whole new world of creativity!
        </Paragraph>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Content Section */}
        <div className="flex-1 bg-white p-8 rounded-xl h-[500px] flex flex-col justify-between">
          <div className="space-y-4">
            {/* Creator Engagement */}
            <div>
              <div className="flex items-center space-x-4 mb-2">
                <div className="bg-[#172554] p-2 rounded-md text-white">
                  <User size={20} />
                </div>
                <h3 className="text-2xl font-semibold text-[#172453]">Creator Engagement</h3>
              </div>
              <p className="text-lg text-gray-700">
                Interact directly with your favorite creators. Join live sessions, share your feedback, and connect with like-minded fans.
              </p>
            </div>

            {/* Fan Interaction */}
            <div>
              <div className="flex items-center space-x-4 mb-2">
                <div className="bg-[#172554] p-2 rounded-md text-white">
                  <Heart size={20} />
                </div>
                <h3 className="text-2xl font-semibold text-[#172453]">Fan Interaction</h3>
              </div>
              <p className="text-lg text-gray-700">
                Build a community by liking, sharing, and commenting on posts. Every interaction supports your favorite creators!
              </p>
            </div>

            {/* Exclusive Access */}
            <div>
              <div className="flex items-center space-x-4 mb-2">
                <div className="bg-[#172554] p-2 rounded-md text-white">
                  <ShieldCheck size={20} />
                </div>
                <h3 className="text-2xl font-semibold text-[#172453]">Exclusive Access</h3>
              </div>
              <p className="text-lg text-gray-700">
                Gain early access to premium content and behind-the-scenes footage. As a member, you get a sneak peek into the creator's world.
              </p>
            </div>
          </div>

          {/* Safety Features */}
          <div className="mt-4">
            <div className="flex items-center space-x-4 mb-2">
              <div className="bg-[#172554] p-2 rounded-md text-white">
                <PhoneCall size={20} />
              </div>
              <h3 className="text-2xl font-semibold text-[#172453]">Safety Features</h3>
            </div>
            <p className="text-lg text-gray-700">
              Our platform prioritizes your safety. Quickly reach support or emergency services with a tap of the safety button.
            </p>
          </div>
        </div>

        {/* Right Information Section */}
        <div className="flex-1 h-[500px] bg-[#172554] p-8 rounded-xl shadow-lg text-white">
          <h3 className="text-2xl font-semibold mb-4">Why Join Us?</h3>
          <p className="text-lg">
            By joining the OnlyFans Clone, you’re not just subscribing to content. You’re becoming part of a supportive community that encourages creativity, inclusivity, and safety. Explore exclusive content, get personalized recommendations, and show your support for creators you love!
          </p>
          <div className="mt-6 space-y-4">
            <div className="flex items-center space-x-4">
              <div className="bg-[#172453] p-3 rounded-md">
                <Star size={20} />
              </div>
              <span className="text-lg">Exclusive Ratings</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-[#172453] p-3 rounded-md">
                <ShieldCheck size={20} />
              </div>
              <span className="text-lg">Verified Creators</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-[#172453] p-3 rounded-md">
                <PhoneCall size={20} />
              </div>
              <span className="text-lg">Safety & Support</span>
            </div>
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
}

export default OnlyFansHero;
