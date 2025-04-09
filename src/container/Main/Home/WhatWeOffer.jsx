"use client";
import Image from "next/image";

import React from "react";
import { Lightbulb, Palette, CheckCircle, Code } from "lucide-react";
import WrapperContainer from "@/Layout/WrapperContainer";

function App() {
  return (
    <>
      <WrapperContainer>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          {/* {/ Header Section /} */}
          <div className="text-center mb-4 md:mb-8">
            <div className="inline-flex items-center justify-center px-4 py-2 bg-blue-50 rounded-full mb-2">
              <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2" />
              <span className="text-blue-600 font-semibold text-xs sm:text-sm">
                WHAT WE OFFER
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 lg:mb-4 md:mb-6 leading-tight text-blue-700 px-2">
              Comprehensive Digital Solutions for Your Business
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-2 pb-4 lg:pb-0">
              From ideation to execution, we provide expert consulting, design,
              development, and quality assurance to bring your vision to life.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Image Collage */}
            <div className="relative order-2 lg:order-1 h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] mx-auto w-full max-w-xl lg:max-w-none">
              {/* Main Large Image */}
              <div className="absolute left-0 top-0 w-[65%] sm:w-[70%] h-[70%] sm:h-[75%] lg:h-[80%] bg-white rounded-3xl shadow-lg">
                <Image
                  src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/AI Technology.avif"
                  width={500}
                  height={300}
                  alt="AI Technology"
                  className="w-full h-full object-cover rounded-2xl"
                  priority={false}
                />
              </div>

              {/* Top Right Image */}
              <div className="absolute right-0 sm:-right-4 lg:-right-8 top-[10%] w-[35%] h-[45%] sm:h-[50%] -translate-x-12 rounded-2xl border-4 sm:border-8 border-white">
                <Image
                  src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Data Analysis.avif"
                  width={500}
                  height={300}
                  alt="Data Analysis"
                  className="w-full h-full object-cover rounded-xl"
                  priority={false}
                />
              </div>

              {/* Bottom Right Image */}
              <div className="absolute right-0 sm:-right-6 lg:-right-10 bottom-0 w-[55%] sm:w-[60%] h-[45%] sm:h-[50%] border-4 rounded-2xl sm:border-8 border-white  shadow-lg">
                <Image
                  src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Machine Learning.avif"
                  width={500}
                  height={300}
                  alt="Machine Learning"
                  className="w-full h-full object-cover rounded-xl"
                  priority={false}
                />
              </div>

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div
                  className="bg-blue-900 text-white rounded-full flex flex-col items-center justify-center shadow-2xl border-white translate-x-4
              h-20 w-20 border-4
              sm:h-20 sm:w-20 
              md:h-28 md:w-28 md:border-3
              lg:h-36 lg:w-36 lg:border-4"
                >
                  <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                    80%
                  </span>
                  <span className="text-[8px] sm:text-xs md:text-sm font-medium leading-tight text-center">
                    Success Project
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side - Services List */}
            <div className="order-1 lg:order-2">
              <div className="space-y-10 lg:space-y-8 md:space-y-10">
                {/* Consulting */}
                <div className="flex items-start gap-5 lg:gap-4 md:gap-6">
                  <div className="bg-blue-50 p-4 lg:p-3 md:p-4 rounded-xl md:rounded-2xl flex-shrink-0">
                    <Lightbulb className="w-5 h-5 md:w-7 md:h-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 lg:mb-2 md:mb-3">
                      Consulting
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      Strategic guidance and innovative solutions to help
                      businesses harness technology and drive growth
                      effectively.
                    </p>
                  </div>
                </div>

                {/* UI & UX Design */}
                <div className="flex items-start gap-5 lg:gap-4 md:gap-6">
                  <div className="bg-blue-50 p-4 lg:p-3 md:p-4 rounded-xl md:rounded-2xl flex-shrink-0">
                    <Palette className="w-5 h-5 md:w-7 md:h-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 lg:mb-2 md:mb-3">
                      UI & UX Design
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      Crafting seamless, engaging, and intuitive digital
                      experiences that enhance user interaction and
                      satisfaction.
                    </p>
                  </div>
                </div>

                {/* Testing & QA */}
                <div className="flex items-start gap-5 lg:gap-4 md:gap-6">
                  <div className="bg-blue-50 p-4 lg:p-3 md:p-4 rounded-xl md:rounded-2xl flex-shrink-0">
                    <CheckCircle className="w-5 h-5 md:w-7 md:h-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 lg:mb-2 md:mb-3">
                      Testing & QA
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      Ensuring high-quality, bug-free, and efficient
                      applications through rigorous testing and quality
                      assurance processes.
                    </p>
                  </div>
                </div>

                {/* Development */}
                <div className="flex items-start gap-5 lg:gap-4 md:gap-6">
                  <div className="bg-blue-50 p-4 lg:p-3 md:p-4 rounded-xl md:rounded-2xl flex-shrink-0">
                    <Code className="w-5 h-5 md:w-7 md:h-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 lg:mb-2 md:mb-3">
                      Development
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      Full-cycle development services, from frontend and backend
                      to cloud and AI integrations, ensuring scalable and robust
                      solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </WrapperContainer>
    </>
  );
}

export default App;
