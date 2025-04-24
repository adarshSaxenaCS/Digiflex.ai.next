import Head from "next/head";
import { FaTools, FaMoneyBillWave, FaServer, FaGraduationCap, FaChartBar, FaUserCircle, FaLightbulb, FaLaptopCode } from "react-icons/fa";
import WrapperContainer from "@/Layout/WrapperContainer";

const benefits = [
  {
    icon: <FaTools size={28} />,
    title: "Full Control Over Features",
    description: "Design custom features that match your vision, with no platform limitations.",
  },
  {
    icon: <FaMoneyBillWave size={28} />,
    title: "Monetize via Transaction Fees",
    description: "Add revenue models like commissions, subscriptions, or withdrawal fees.",
  },
  {
    icon: <FaServer size={28} />,
    title: "Scalable Infrastructure",
    description: "Build using modern stacks that scale easily with user growth.",
  },
  {
    icon: <FaGraduationCap size={28} />,
    title: "Great Learning Experience",
    description: "Understand how fintech apps work end-to-end — from UX to backend logic.",
  },
  {
    icon: <FaChartBar size={28} />,
    title: "High Market Demand",
    description: "Tap into the booming digital payments and finance management market.",
  },
  {
    icon: <FaUserCircle size={28} />,
    title: "User Insights",
    description: "Get feedback and analyze behavior to improve app usability and value.",
  },
  {
    icon: <FaLightbulb size={28} />,
    title: "Branding Flexibility",
    description: "Personalize UI/UX, logo, and tone to match your brand or startup goals.",
  },
  {
    icon: <FaLaptopCode size={28} />,
    title: "Boost Your Developer Portfolio",
    description: "Showcase your ability to build real-world, high-impact applications.",
  },
];

function BenefitCard({ benefit }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition duration-300 transform hover:-translate-y-1 text-center group">
      <div className="text-green-500 mb-4 group-hover:animate-bounce">{benefit.icon}</div>
      <h3 className="text-lg font-semibold text-gray-800">{benefit.title}</h3>
      <p className="text-gray-600 mt-2">{benefit.description}</p>
    </div>
  );
}

export default function BenefitsPage() {
  return (
    <>
      <Head>
        <title>Benefits of Building a Cash App Clone</title>
      </Head>

      <WrapperContainer>
        <section className="py-14 px-6 bg-gray-100">
          <h1 className="text-4xl font-bold text-center text-green-600 mb-10">
            Benefits of Building a Cash App Clone
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} benefit={benefit} />
            ))}
          </div>
        </section>
      </WrapperContainer>
    </>
  );
}
