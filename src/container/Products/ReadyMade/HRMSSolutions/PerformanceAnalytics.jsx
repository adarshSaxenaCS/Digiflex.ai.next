import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import {
  BarChart,
  TrendingUp,
  ClipboardList,
  Gauge,
  Activity,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: BarChart,
    title: "Data-Driven Insights",
    description: "Utilize AI-powered analytics to measure performance trends and optimize workflow efficiency.",
    bgColor: "bg-green-600",
    textColor: "text-green-700",
  },
  {
    icon: TrendingUp,
    title: "Performance Tracking",
    description: "Monitor employee growth, task completion rates, and key productivity metrics in real time.",
    bgColor: "bg-blue-600",
    textColor: "text-blue-700",
  },
  {
    icon: ClipboardList,
    title: "Custom Reports",
    description: "Generate personalized performance reports with visual insights to improve decision-making.",
    bgColor: "bg-purple-600",
    textColor: "text-purple-700",
  },
  {
    icon: Gauge,
    title: "Efficiency Dashboards",
    description: "Access real-time dashboards to visualize departmental performance and identify bottlenecks.",
    bgColor: "bg-yellow-500",
    textColor: "text-yellow-600",
  },
  {
    icon: Activity,
    title: "Live Activity Monitoring",
    description: "Track employee engagement, login hours, and task switching patterns live.",
    bgColor: "bg-cyan-600",
    textColor: "text-cyan-700",
  },
  {
    icon: BarChart3,
    title: "Goal Analytics",
    description: "Review team and individual performance against predefined OKRs and goals.",
    bgColor: "bg-pink-600",
    textColor: "text-pink-700",
  },
  // ------- New Data Added Below --------
  {
    icon: Gauge,
    title: "Skill Gap Analysis",
    description: "Identify skills shortages in teams and recommend targeted training programs for employee development.",
    bgColor: "bg-indigo-600",
    textColor: "text-indigo-700",
  },
  {
    icon: Activity,
    title: "Workload Distribution",
    description: "Analyze task distribution across teams to ensure balanced workloads and prevent burnout.",
    bgColor: "bg-rose-600",
    textColor: "text-rose-700",
  },
  {
    icon: ClipboardList,
    title: "Project Milestone Tracking",
    description: "Monitor project timelines, deadlines, and milestone achievements with visual progress indicators.",
    bgColor: "bg-orange-600",
    textColor: "text-orange-700",
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description: "Forecast employee performance trends and potential risks using predictive AI models.",
    bgColor: "bg-teal-600",
    textColor: "text-teal-700",
  },
];


const PerformanceAnalytics = () => {
  return (
    <WrapperContainer>
      <div className="rounded-lg border-l-8 border-blue-900 bg-white">
        <Heading className="text-center text-blue-700 text-3xl font-bold">
          Performance & Analytics
        </Heading>
        <Paragraph className="text-center text-gray-700 mt-4 max-w-2xl mx-auto">
          Unlock valuable workforce insights with <strong>real-time analytics, performance tracking, and data-driven reports</strong>. 
          Enhance productivity and make informed decisions effortlessly.
        </Paragraph>

        {/* Analytics Features */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className={`w-16 h-12 flex items-center justify-center ${feature.bgColor} text-white rounded-full`}>
                  <Icon size={28} />
                </div>
                <div>
                  <h3 className={`text-lg font-semibold ${feature.textColor}`}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description.split(" ").map((word, i) => 
                      word.startsWith("AI-powered") || word.startsWith("employee") || word.startsWith("personalized") || word.startsWith("real-time") || word.startsWith("employee") || word.startsWith("team") ? 
                      <strong key={i}>{word} </strong> : word + " "
                    )}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default PerformanceAnalytics;
