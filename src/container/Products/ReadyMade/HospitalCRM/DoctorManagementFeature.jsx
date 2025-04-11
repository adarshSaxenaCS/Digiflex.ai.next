import React from "react";
import Image from "next/image";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import {
  CalendarDays,
  Activity,
  Repeat,
  AlarmClock,
  UserPlus,
  Stethoscope,
} from "lucide-react";

function DoctorManagementFeature() {
  return (
    <WrapperContainer>
      {/* Top Section - Heading and Paragraph */}
      <div className="text-center">
        <div className="inline-block relative">
          <Heading>Doctor Management Made Easy</Heading>
          <div className="absolute left-1/2 -bottom-2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400 rounded-full animate-pulse" />
        </div>
        <Paragraph className="mt-8 text-gray-700 max-w-3xl mx-auto text-center leading-relaxed text-lg animate-fade-in">
          <span className="font-semibold text-blue-600">
            Our Doctor Management system
          </span>{" "}
          is crafted to streamline your hospital workflows. Empower your
          healthcare professionals with smart tools to manage
          <span className="font-semibold text-green-600"> schedules</span>,
          <span className="font-semibold text-purple-600"> appointments</span>,
          and
          <span className="font-semibold text-pink-600">
            {" "}
            patient interactions
          </span>{" "}
          efficiently.
        </Paragraph>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#F9FAFB] rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
        {/* Left Side - Image Section */}
        <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-lg group">
          <Image
            src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Doctor-Management-Main.png"
            alt="Doctor Management Main"
            fill
            className="object-cover group-hover:scale-105 transition-all duration-500"
          />
          <div className="absolute bottom-6 right-6 w-28 h-28 md:w-32 md:h-32 rounded-xl border-4 border-white overflow-hidden">
            <Image
              src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Doctor-Extra-Image.png"
              alt="Doctor Extra Image"
              fill
              className="object-cover"
            />
          </div>

          {/* Overlay Content */}
          <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-start p-6 md:p-10 space-y-4 rounded-3xl">
            <span className="bg-white/80 text-blue-600 font-semibold text-xs px-3 py-1 rounded-full shadow">
              Smart Healthcare CRM
            </span>
            <div className="inline-block backdrop-blur-md bg-white/10 border border-white/20 rounded-lg px-4 py-2 shadow-lg">
              <h2 className="text-white text-2xl md:text-3xl font-bold leading-tight">
                Manage Doctors Seamlessly
              </h2>
            </div>

            <div className="inline-block mt-4 backdrop-blur-md bg-white/10 border border-white/20 rounded-lg px-4 py-2 shadow-lg">
              <p className="text-white text-sm md:text-base">
                Simplify operations, streamline doctor schedules, and improve
                patient care with our intuitive platform.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Features Section */}
        <div className="flex flex-col justify-between space-y-8 h-[500px]">
          {/* Highlights */}
          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              { number: "500+", label: "Doctors Managed" },
              { number: "10K+", label: "Appointments Monthly" },
              { number: "99.9%", label: "System Uptime" },
            ].map(({ number, label }, idx) => (
              <div
                key={idx}
                className="p-4 bg-white rounded-xl shadow hover:shadow-md transition"
              >
                <h3 className="text-2xl font-bold text-blue-600">{number}</h3>
                <p className="text-sm text-gray-600 mt-1">{label}</p>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 overflow-y-auto pr-2">
            {[
              {
                icon: <CalendarDays className="text-blue-600" />,
                title: "Smart Scheduling",
                desc: "Easily plan doctor shifts and avoid conflicts with smart recommendations.",
              },
              {
                icon: <Activity className="text-green-600" />,
                title: "Real-Time Tracking",
                desc: "Monitor doctor's activities and presence live inside the hospital premises.",
              },
              {
                icon: <Repeat className="text-purple-600" />,
                title: "System Integrations",
                desc: "Seamlessly connect schedules with hospital ERP and CRM systems.",
              },
              {
                icon: <AlarmClock className="text-red-500" />,
                title: "Automated Shift Alerts",
                desc: "Instant alerts for upcoming shifts, emergencies, and schedule changes.",
              },
              {
                icon: <UserPlus className="text-orange-500" />,
                title: "One-Click Onboarding",
                desc: "Add new doctors, verify credentials, and assign roles within minutes.",
              },
              {
                icon: <Stethoscope className="text-pink-500" />,
                title: "Specialization Tracking",
                desc: "Filter and assign doctors based on specialization and experience.",
              },
            ].map(({ icon, title, desc }, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-5 bg-white rounded-xl hover:shadow-md transition"
              >
                <div className="p-3 bg-blue-100 rounded-full">{icon}</div>
                <div>
                  <h4 className="font-semibold text-lg">{title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
}

export default DoctorManagementFeature;
