import React from "react";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import WrapperContainer from "@/Layout/WrapperContainer";

function OnlyFansContent() {
  return (
    <WrapperContainer className="py-16 bg-[#F9FAFB]">
      <div className="text-center mb-12">
        <Heading className="text-4xl font-extrabold text-[#172453] mb-4">
          Exclusive Content
        </Heading>
        <Paragraph className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
          Access premium content available only for our subscribers. Get exclusive behind-the-scenes access, live streams, and more. Become a part of an exclusive community and enjoy content that’s just for you!
        </Paragraph>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Content 1 */}
        <div className="bg-[#172453] text-white p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
          <h4 className="text-2xl font-semibold mb-4">Exclusive Video 1</h4>
          <p className="text-sm">
            An exclusive behind-the-scenes video that is only available for subscribers. Get insights into the content creation process, behind-the-scenes action, and more.
          </p>
        </div>

        {/* Content 2 */}
        <div className="bg-[#172453] text-white p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
          <h4 className="text-2xl font-semibold mb-4">Private Live Stream</h4>
          <p className="text-sm">
            Join me for a private live stream session where I answer your questions, share tips, and interact with you directly. It’s your time to engage with me on a personal level.
          </p>
        </div>

        {/* Content 3 */}
        <div className="bg-[#172453] text-white p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
          <h4 className="text-2xl font-semibold mb-4">Premium Photoshoot</h4>
          <p className="text-sm">
            A photoshoot collection that only premium subscribers can view. This exclusive collection will showcase high-quality images from my recent photo shoots. Don't miss it!
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Heading className="text-2xl font-semibold text-[#172453] mb-4">
          More Premium Content Coming Soon!
        </Heading>
        <Paragraph className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
          Stay tuned for more exclusive content coming your way! From fitness routines to personal travel stories, there’s always something new for you to explore. Join now and never miss out on the latest updates.
        </Paragraph>
      </div>
    </WrapperContainer>
  );
}

export default OnlyFansContent;
