import WrapperContainer from "@/Layout/WrapperContainer";
import Head from "next/head";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";

const WhyPinduoduoClone = () => {
  return (
    <>
      <Head>
        <title>Why Build a Pinduoduo Clone | Social Commerce Revolution</title>
      </Head>

      <WrapperContainer>
        <div className="py-10">
          <Heading className="text-4xl md:text-5xl font-bold text-center text-blue-600 mb-8 hover:scale-105 transition-transform duration-300">
            Why Build a Pinduoduo Clone?
          </Heading>

          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-l-4 border-blue-600 hover:border-blue-800">
              <Heading className="text-2xl font-semibold text-blue-800 group-hover:text-blue-900 transition">
                1. The Rise of Social Commerce
              </Heading>
              <Paragraph className="mt-2">
                Pinduoduo revolutionized the e-commerce industry by combining social engagement with group purchasing. This unique model creates a fun, interactive shopping experience while offering better pricing through group buying incentives. As social media continues to dominate user attention, social commerce is clearly the next frontier in online shopping.
              </Paragraph>
            </div>

            <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-l-4 border-green-600 hover:border-green-800">
              <Heading className="text-2xl font-semibold text-green-800 group-hover:text-green-900 transition">
                2. Market Opportunity & Demand
              </Heading>
              <Paragraph className="mt-2">
                There is an emerging market for platforms that combine affordability, fun, and community-driven purchases. By creating a Pinduoduo-like platform, developers can tap into this massive and growing market, especially in regions where traditional e-commerce is still evolving or underserved.
              </Paragraph>
            </div>

            <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-l-4 border-purple-600 hover:border-purple-800">
              <Heading className="text-2xl font-semibold text-purple-800 group-hover:text-purple-900 transition">
                3. Skill Showcase & Career Leverage
              </Heading>
              <Paragraph className="mt-2">
                Building a clone of a real-world application like Pinduoduo allows developers to demonstrate their technical skills and business understanding. From frontend animations and responsive UI to backend architecture, data handling, and role-based access, it’s a full-stack challenge and an excellent portfolio project.
              </Paragraph>
            </div>

            <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-l-4 border-red-600 hover:border-red-800">
              <Heading className="text-2xl font-semibold text-red-800 group-hover:text-red-900 transition">
                4. Real-World Tech Stack Application
              </Heading>
              <Paragraph className="mt-2">
                This project allows the use of modern tools like <span className="font-semibold">Next.js</span>, <span className="font-semibold">MongoDB</span>, <span className="font-semibold">Tailwind CSS</span>, and <span className="font-semibold">JWT Authentication</span>. It’s an opportunity to implement real-world functionality like image uploads, group deals, social interactions, and performance optimization.
              </Paragraph>
            </div>

            <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-l-4 border-yellow-600 hover:border-yellow-800">
              <Heading className="text-2xl font-semibold text-yellow-800 group-hover:text-yellow-900 transition">
                5. Future Monetization Possibilities
              </Heading>
              <Paragraph className="mt-2">
                A Pinduoduo-style platform opens doors to monetization through seller subscriptions, product promotions, in-app purchases, affiliate marketing, and personalized ads — making it not just a practice project but also a potential startup idea.
              </Paragraph>
            </div>
          </div>
        </div>
      </WrapperContainer>
    </>
  );
};

export default WhyPinduoduoClone;
