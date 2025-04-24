import Head from "next/head";
import { FaLightbulb, FaPencilRuler, FaCode, FaShieldAlt, FaVial, FaRocket } from "react-icons/fa";
import WrapperContainer from "@/Layout/WrapperContainer";

const steps = [
  {
    icon: <FaLightbulb size={30} />,
    title: "1. Requirement Gathering",
    desc: "Understand business needs, feature expectations, and use cases from clients or market research.",
    color: "from-yellow-400 to-yellow-600",
  },
  {
    icon: <FaPencilRuler size={30} />,
    title: "2. Design & Wireframes",
    desc: "Create UI wireframes, high-fidelity mockups, and ensure smooth user experience and brand consistency.",
    color: "from-pink-400 to-pink-600",
  },
  {
    icon: <FaCode size={30} />,
    title: "3. Frontend Development",
    desc: "Build the user interface using React, Tailwind CSS, and Next.js with responsive design.",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: <FaShieldAlt size={30} />,
    title: "4. Secure Backend APIs",
    desc: "Develop RESTful APIs with Node.js & Express, implement JWT Auth, bcrypt, and secure DB schemas.",
    color: "from-red-400 to-red-600",
  },
  {
    icon: <FaVial size={30} />,
    title: "5. Testing & QA",
    desc: "Conduct manual and automated testing, fix bugs, validate flows, and ensure app is production ready.",
    color: "from-indigo-400 to-indigo-600",
  },
  {
    icon: <FaRocket size={30} />,
    title: "6. Deployment & Monitoring",
    desc: "Deploy to platforms like Vercel or Render, monitor APIs, logs, and optimize performance.",
    color: "from-green-400 to-green-600",
  },
];

function StepCard({ step }) {
    return (
      <div
        className={`bg-gradient-to-br ${step.color} text-white p-6 rounded-2xl transform transition duration-500 hover:scale-[1.03] hover:shadow-2xl`}
      >
        <div className="bg-white text-black w-14 h-14 flex items-center justify-center rounded-full mb-4">
          {step.icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
        <p className="text-sm opacity-90">{step.desc}</p>
      </div>
    );
  }
  

export default function PaypalWorkflow() {
  return (
    <>
      <Head>
        <title>Workflow – PayPal Clone Process</title>
      </Head>

      <WrapperContainer>
        <section className="py-14 px-6 bg-gray-100 ">
          <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-10">
            Workflow to Build a PayPal Clone
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {steps.map((step, index) => (
              <StepCard key={index} step={step} />
            ))}
          </div>
        </section>
      </WrapperContainer>
    </>
  );
}
