// components/CRMFeatures.jsx
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import WrapperContainer from "@/Layout/WrapperContainer";
import React from "react";

function CRMFeatures() {
  return (
    <WrapperContainer>
      <div className="relative">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-center">
            <Heading className="text-4xl font-extrabold text-[#162350] tracking-wide relative inline-block after:content-[''] after:block after:h-1 after:w-16 after:bg-blue-500 after:mx-auto after:mt-3">
              Features of Travel CRM
            </Heading>

            <Paragraph className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              <span className="text-blue-600 font-semibold">Discover</span> the
              powerful features that make our
              <span className="text-indigo-600 font-semibold">
                {" "}
                Travel CRM{" "}
              </span>{" "}
              the perfect choice for your travel agency.
              <span className="text-green-600 font-semibold">
                {" "}
                Streamline operations
              </span>
              , enhance customer experience, and
              <span className="text-pink-600 font-semibold">
                {" "}
                grow your business
              </span>{" "}
              with ease.
            </Paragraph>
          </div>

          {/* Left-Right Layout for Video and Features */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Video Section on Left */}
            <div className="relative flex justify-center items-center">
              <video
                autoPlay
                loop
                muted
                className="w-full object-cover rounded-lg"
                style={{ maxHeight: "500px" }}
              >
                <source
                  src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/TravelCRM-Feature_video.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

            {/* Features Section on Right */}
            {/* Features Section on Right */}
            <div className="text-left space-y-6 max-h-[500px] overflow-y-auto pr-4">
              {/* Heading */}
              <div className="relative inline-block">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#162350] tracking-wide">
                  Our <span className="text-[#3c66ff]">CRM</span> Features
                </h2>
                <span className="block w-16 h-1 bg-blue-400 mt-2 rounded-full"></span>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Box 1 */}
                <div className="p-6 rounded-2xl border border-blue-100 shadow-md hover:shadow-lg hover:-translate-y-2 transform transition duration-300 bg-white group">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 text-transparent bg-clip-text">
                    Booking Management
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition">
                    Track and manage bookings with real-time updates and
                    notifications.
                  </p>
                </div>

                {/* Box 2 */}
                <div className="p-6 rounded-2xl border border-blue-100 shadow-md hover:shadow-lg hover:-translate-y-2 transform transition duration-300 bg-white group">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                    Customer Insights
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition">
                    Analyze customer behavior for personalized experiences.
                  </p>
                </div>

                {/* Box 3 */}
                <div className="p-6 rounded-2xl border border-blue-100 shadow-md hover:shadow-lg hover:-translate-y-2 transform transition duration-300 bg-white group">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
                    Tour Management
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition">
                    Create and customize tour packages to boost sales.
                  </p>
                </div>

                {/* Box 4 */}
                <div className="p-6 rounded-2xl border border-blue-100 shadow-md hover:shadow-lg hover:-translate-y-2 transform transition duration-300 bg-white group">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text">
                    Real-Time Reports
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition">
                    Get instant reports on bookings and customer data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
}

export default CRMFeatures;
