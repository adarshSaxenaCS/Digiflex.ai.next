import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import WrapperContainer from "@/Layout/WrapperContainer";
import React from "react";

function PatientManagementFeature() {
  return (
    <WrapperContainer>
      <div className="bg-gradient-to-r  rounded-3xl  flex flex-col md:flex-row items-center gap-12">

        {/* Left Side: Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-[#1e293b]">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#3b82f6] mb-2">
            Feature Highlight
          </span>

          <Heading>Smarter Patient Management</Heading>

          <Paragraph>
            Modernize your healthcare practice with our advanced patient management system. 
            Reduce manual workload, enhance patient experience, and keep your operations running smoothly — all in one place.
          </Paragraph>

          {/* Updated Features List */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5 text-gray-700">
            <div className="flex items-start gap-3">
              <span className="text-[#3b82f6] text-2xl">✔️</span>
              <p>Centralized patient profiles with secure cloud access</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#3b82f6] text-2xl">✔️</span>
              <p>AI-powered appointment scheduling & reminders</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#3b82f6] text-2xl">✔️</span>
              <p>Complete treatment history & document storage</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#3b82f6] text-2xl">✔️</span>
              <p>Smart billing integration for faster invoicing</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#3b82f6] text-2xl">✔️</span>
              <p>Multi-device accessibility (Mobile, Tablet, Desktop)</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#3b82f6] text-2xl">✔️</span>
              <p>Role-based access control for staff and doctors</p>
            </div>
          </div>
        </div>

        {/* Right Side: Video */}
        <div className="w-full md:w-1/2">
          <div className="relative rounded-3xl overflow-hidden shadow-lg">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover"
            >
              <source
                src="https://video-previews.elements.envatousercontent.com/h264-video-previews/169b73f5-7c5a-474f-a05b-64f53047daed/33099258.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-black/10"></div> {/* Soft overlay */}
          </div>
        </div>

      </div>
    </WrapperContainer>
  );
}

export default PatientManagementFeature;
