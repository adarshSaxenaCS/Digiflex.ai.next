"use client";
import Image from "next/image";

import React from "react";
import { ArrowRight, Star } from "lucide-react";
import WrapperContainer from "@/Layout/WrapperContainer";

function App() {
  const scrollToReviews = () => {
    const reviewsSection = document.getElementById("reviews-section");
    if (reviewsSection) {
      reviewsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="bg-white">
      <WrapperContainer>
        <div className="container mx-auto py-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-8 xl:gap-12 items-center">
            {/* Left Side - Images (Stack on mobile) */}
            <div className="relative h-[300px] sm:h-[500px] md:h-[550px] lg:h-[500px] xl:h-[600px] order-2 lg:order-1 mt-8 lg:mt-0">
              {/* Main image - reduced height for mobile */}
              <div className="relative z-10 h-[220px] sm:h-[400px] md:h-[450px] lg:h-[400px] xl:h-[500px]">
                <Image
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1200&h=800&q=80"
                  width={1200}
                  height={800}
                  alt="Team Meeting"
                  className="rounded-lg w-full h-full object-cover"
                  priority={false}
                />
                {/* Experience badge - adjusted for better mobile positioning */}
                <div className="absolute right-10 sm:right-4 top-1/4 sm:top-1/3 bg-blue-500 text-white px-3 sm:px-6 lg:px-4 xl:px-6 py-2 sm:py-4 lg:py-3 xl:py-4 rounded-xl z-30 translate-y-14">
                  <div className="text-center">
                    <div className="text-xl sm:text-3xl lg:text-2xl xl:text-3xl font-bold">
                      +25 Years
                    </div>
                    <div className="text-xs sm:text-sm">Of Experience</div>
                  </div>
                </div>
              </div>
              {/* Bottom image - reduced size for mobile */}
              <div className="absolute bottom-0 right-0 transform translate-x-2 sm:translate-x-5 lg:translate-x-3 xl:translate-x-5 -translate-y-1 z-10 w-3/4 h-[120px] sm:h-[180px] md:h-[200px] lg:h-[160px] xl:h-[200px]">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&h=800&q=80"
                  width={1200}
                  height={800}
                  alt="Team Collaboration"
                  className="rounded-lg w-full h-full object-cover grayscale"
                  priority={false}
                />
              </div>
              {/* Accent line - adjusted for mobile */}
              <div className="absolute left-0 bottom-0 w-12 sm:w-20 md:w-24 lg:w-16 xl:w-24 h-1 sm:h-2 bg-blue-500 transform -translate-y-16 sm:-translate-y-20"></div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-4 xl:space-y-6 lg:pl-6 xl:pl-8 order-1 lg:order-2">
              <div className="inline-block">
                <span className="bg-blue-500/10 text-blue-400 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                  About Our Company
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-3xl xl:text-5xl font-bold text-blue-700 leading-tight">
                Professional And Dedicated IT Services
              </h2>

              <p className="text-slate-600 text-base sm:text-lg lg:text-base xl:text-lg">
                Empowering businesses through cutting-edge technology solutions
                and strategic consulting. We deliver comprehensive IT services
                that drive growth and innovation in the digital age.
              </p>

              <blockquote className="text-blue-500 text-lg sm:text-xl lg:text-lg xl:text-xl font-medium italic">
                "Above all, we believe that real change is possible and that
                tomorrow doesn't have to be like today"
              </blockquote>

              <p className="text-slate-600 text-base sm:text-lg lg:text-base xl:text-lg">
                With over two decades of experience in IT consulting, we've
                helped countless businesses transform their digital landscape.
                Our dedicated team combines technical expertise with strategic
                insight to create lasting value for our clients.
              </p>

              {/* Review Section - Responsive layout */}
              <div className="bg-slate-900 text-white p-4 sm:p-6 lg:p-4 xl:p-6 rounded-xl sm:rounded-2xl mt-8 sm:mt-12 lg:mt-8 xl:mt-12">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 lg:gap-4 xl:gap-8">
                  <button
                    className="text-blue-400 font-medium flex items-center gap-1 sm:gap-2 lg:gap-1 xl:gap-2 hover:gap-3 transition-all"
                    onClick={scrollToReviews}
                  >
                    READ MORE{" "}
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-4 lg:h-4 xl:w-5 xl:h-5" />
                  </button>

                  <div className="flex items-center gap-4 sm:gap-6 lg:gap-4 xl:gap-8">
                    <div className="flex -space-x-2 sm:-space-x-3 lg:-space-x-2 xl:-space-x-3">
                      <Image
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=faces&q=80"
                        width={48}
                        height={48}
                        className="w-10 h-10 sm:w-12 sm:h-12 lg:w-10 lg:h-10 xl:w-12 xl:h-12 rounded-full border-2 border-white"
                        alt="Client"
                        priority={false}
                      />
                      <Image
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=faces&q=80"
                        width={48}
                        height={48}
                        className="w-10 h-10 sm:w-12 sm:h-12 lg:w-10 lg:h-10 xl:w-12 xl:h-12 rounded-full border-2 border-white"
                        alt="Client"
                        priority={false}
                      />
                      <Image
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&fit=crop&crop=faces&q=80"
                        width={48}
                        height={48}
                        className="w-10 h-10 sm:w-12 sm:h-12 lg:w-10 lg:h-10 xl:w-12 xl:h-12 rounded-full border-2 border-white"
                        alt="Client"
                        priority={false}
                      />
                      <Image
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&fit=crop&crop=faces&q=80"
                        width={48}
                        height={48}
                        className="w-10 h-10 sm:w-12 sm:h-12 lg:w-10 lg:h-10 xl:w-12 xl:h-12 rounded-full border-2 border-white"
                        alt="Client"
                        priority={false}
                      />
                    </div>

                    <div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 sm:w-5 sm:h-5 lg:w-4 lg:h-4 xl:w-5 xl:h-5 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <div className="text-xs sm:text-sm lg:text-xs xl:text-sm mt-1">
                        Original reviews
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </WrapperContainer>
    </div>
  );
}

export default App;
