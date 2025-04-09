import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import {
  Users,
  UserPlus,
  BadgeCheck,
  ClipboardCheck,
  FileCheck2,
  BarChart3,
} from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    color: "bg-blue-600",
    title: "Recruitment",
    desc: "Automate hiring workflows with AI-driven screening, resume parsing, and interview scheduling.",
  },
  {
    icon: BadgeCheck,
    color: "bg-green-600",
    title: "Employee Verification",
    desc: "Secure background verification, ID authentication, and compliance checks for a reliable workforce.",
  },
  {
    icon: Users,
    color: "bg-purple-600",
    title: "Team Collaboration",
    desc: "Boost productivity with integrated team dashboards, task management, and seamless communication tools.",
  },
  {
    icon: ClipboardCheck,
    color: "bg-yellow-500",
    title: "Onboarding Process",
    desc: "Provide digital onboarding kits, training modules, and company policy walkthroughs.",
  },
  {
    icon: FileCheck2,
    color: "bg-cyan-600",
    title: "Document Management",
    desc: "Easily upload, track, and manage all employee documents in a secure digital vault.",
  },
  {
    icon: BarChart3,
    color: "bg-pink-600",
    title: "Performance Monitoring",
    desc: "Track KPIs, conduct evaluations, and set goals with regular performance insights.",
  },
];

const EmployeeManagementSystem = () => {
  return (
    <WrapperContainer>
      <div className="bg-gradient-to-br from-blue-50 to-white p-12 rounded-2xl shadow-2xl border-l-8 border-blue-900">
        <Heading className="text-blue-700 text-3xl font-bold text-center">
          Employee Management System
        </Heading>
        <Paragraph className="text-gray-700 mt-4 text-center max-w-2xl mx-auto">
          A seamless end-to-end solution for recruiting, verifying, and managing employees efficiently.
        </Paragraph>

        {/* Timeline Steps */}
        <div className="mt-12 relative">
          {/* Vertical Line */}
          <div className="absolute top-0 left-5 h-full w-1 bg-blue-200"></div>

          {/* Steps */}
          <div className="space-y-10">
            {steps.map((step, index) => (
              <div key={index} className="relative flex items-start gap-6 group">
                {/* Badge Number */}
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-110 transition-transform`}>
                    <step.icon />
                  </div>
                  {/* Connector */}
                  {index !== steps.length - 1 && (
                    <div className="flex-1 w-px bg-blue-300 mt-2"></div>
                  )}
                </div>

                {/* Step Content */}
                <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition duration-300">
                  <div className="flex items-center gap-2 ">
                    <span className="text-blue-500 font-bold text-lg">{`Step ${index + 1}`}</span>
                    <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
};

export default EmployeeManagementSystem;
