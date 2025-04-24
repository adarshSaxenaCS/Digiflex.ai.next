import Head from "next/head";
import WrapperContainer from "@/Layout/WrapperContainer";

const benefits = [
  {
    title: "Customizability",
    description: "Tailor the platform to your unique business requirements.",
  },
  {
    title: "Cost-Effective",
    description: "Save time and money by using a pre-built solution that can be easily customized.",
  },
  {
    title: "Scalability",
    description: "Built on modern technologies, making it easy to scale as your user base grows.",
  },
  {
    title: "User-Friendly Interface",
    description: "The clone will have a modern, intuitive UI that users are familiar with.",
  },
  {
    title: "Monetization Options",
    description: "Monetize through subscriptions, ads, or partnerships with content providers.",
  },
  {
    title: "Faster Time-to-Market",
    description: "With a ready-made foundation, you can launch your platform quicker and start acquiring users sooner.",
  },
  {
    title: "Advanced Features",
    description: "Integrate features like content recommendations, watch history, and multiple user profiles.",
  },
  {
    title: "Content Control",
    description: "Full control over the content you offer, including options to create your own exclusive shows, series, or movies.",
  },
  {
    title: "Multi-Device Support",
    description: "Reach users on various devices, from mobile phones to tablets, desktops, and smart TVs.",
  },
  {
    title: "Security & Data Privacy",
    description: "Implement robust security measures to protect users' data, ensuring compliance with regulations like GDPR.",
  },
];

export default function BenefitsPage() {
  return (
    <>
      <Head>
        <title>Benefits of Building a Netflix Clone</title>
      </Head>

      <WrapperContainer>
        <section className="py-14 px-6 bg-gray-100 min-h-screen">
          <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-10">
            Benefits of Building a Netflix Clone
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="text-2xl font-semibold text-blue-800 mb-4 relative z-10">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 relative z-10">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>
      </WrapperContainer>
    </>
  );
}
