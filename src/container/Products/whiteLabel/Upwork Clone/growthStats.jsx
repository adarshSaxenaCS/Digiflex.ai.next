import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";

const growthStats = [
  {
    title: "Active Users",
    value: "10K+",
    description: "Freelancers and clients using the platform every month.",
    color: "text-blue-600",
  },
  {
    title: "Projects Completed",
    value: "25K+",
    description: "Successful collaborations completed via the platform.",
    color: "text-green-600",
  },
  {
    title: "Total Earnings",
    value: "$1M+",
    description: "Total amount transacted between clients and freelancers.",
    color: "text-purple-600",
  },
  {
    title: "Job Success Rate",
    value: "97%",
    description: "Percentage of jobs completed with positive feedback.",
    color: "text-emerald-600",
  },
  {
    title: "Avg. Response Time",
    value: "1.2 hrs",
    description: "Time taken by freelancers to respond to job posts.",
    color: "text-orange-600",
  },
  {
    title: "Platform Uptime",
    value: "99.99%",
    description: "Ensuring reliability and smooth experience for users.",
    color: "text-cyan-600",
  },
];

const GrowthMetrics = () => {
  return (
    <WrapperContainer>
      <section className="mb-[80px] text-center">
        <Heading>📈 Platform Growth Metrics</Heading>
        <p className="text-gray-600 mt-3 max-w-xl mx-auto">
          These key performance indicators reflect the growth, stability, and
          trustworthiness of our Upwork clone platform.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {growthStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white shadow-lg hover:shadow-2xl transition duration-300 p-6 rounded-xl border border-gray-100"
            >
              <h3 className={`text-4xl font-bold ${stat.color}`}>{stat.value}</h3>
              <p className="mt-2 text-lg font-semibold text-gray-800">{stat.title}</p>
              <p className="mt-1 text-sm text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </section>
    </WrapperContainer>
  );
};

export default GrowthMetrics;
