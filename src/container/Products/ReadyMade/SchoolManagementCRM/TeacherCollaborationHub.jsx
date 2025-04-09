import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import { BookOpen, UserCheck, Share, MessageCircle, Users } from "lucide-react";

const steps = [
  {
    icon: BookOpen,
    title: "Step 1: Lesson Planning",
    description: "Collaborate on lesson materials effectively.",
    gradient: "from-green-400 to-green-600",
    textColor: "text-green-700",
    width: "w-[50%]",
    
    hoverWidth: "group-hover:w-[95%]",
  },
  {
    icon: UserCheck,
    title: "Step 2: Student Reports",
    description: "Monitor student progress in real-time.",
    gradient: "from-blue-400 to-blue-600",
    textColor: "text-blue-700",
    width: "w-[50%]",
    hoverWidth: "group-hover:w-[94%]",
  },
  {
    icon: Share,
    title: "Step 3: Resource Sharing",
    description: "Easily share teaching resources across the network.",
    gradient: "from-purple-400 to-purple-600",
    textColor: "text-purple-700",
    width: "w-[50%]",
    hoverWidth: "group-hover:w-[88%]",
  },
  {
    icon: MessageCircle,
    title: "Step 4: Communication Hub",
    description: "Facilitate real-time discussions and Q&A sessions.",
    gradient: "from-rose-400 to-rose-600",
    textColor: "text-rose-700",
    width: "w-[50%]",
    hoverWidth: "group-hover:w-[82%]",
  },
  {
    icon: Users,
    title: "Step 5: Team Collaboration",
    description: "Work together on interdisciplinary projects seamlessly.",
    gradient: "from-yellow-400 to-yellow-600",
    textColor: "text-yellow-700",
    width: "w-[50%]",
    hoverWidth: "group-hover:w-[78%]",
  },
];

const TeacherCollaborationHub = () => {
  return (
    <WrapperContainer>
      <div className="rounded-lg">
        <Heading className="text-center text-blue-700 text-3xl font-bold">
          Teacher Collaboration Hub
        </Heading>
        <Paragraph className="text-center text-gray-700 mt-4 max-w-xl mx-auto">
          Enhance communication among teachers with a centralized hub for lesson planning, student progress, and resource sharing.
        </Paragraph>

        <div className="mt-12 flex flex-col items-center gap-12 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className={`relative flex justify-center w-full group transition-all duration-300`}
                style={{ zIndex: steps.length - index }}
              >
                <div
                  className={`bg-white rounded-xl shadow-xl border-t-4 border-blue-900 max-w-3xl px-6 py-5 transition-all duration-300 ${step.width} ${step.hoverWidth}`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 flex items-center justify-center bg-gradient-to-br ${step.gradient} text-white rounded-full shadow`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold ${step.textColor}`}>
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </div>

                {/* Connecting line */}
                {index !== steps.length - 1 && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-1 h-6 bg-blue-900"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default TeacherCollaborationHub;
