import Head from "next/head";
import {
  FaLock,
  FaCode,
  FaHeadset,
  FaMobileAlt,
  FaTools,
  FaRocket,
  FaUserShield,
  FaRegSmile,
  FaHandHoldingUsd,
} from "react-icons/fa";
import WrapperContainer from "@/Layout/WrapperContainer";

const reasons = [
  {
    icon: <FaLock size={28} />,
    title: "Bank-Grade Security",
    desc: "We implement encryption, 2FA, HTTPS, JWT, and other enterprise-grade measures to secure your app.",
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: <FaCode size={28} />,
    title: "Clean, Scalable Code",
    desc: "We use Next.js, Node.js, MongoDB, and RESTful APIs to ensure your PayPal clone is fast and scalable.",
    color: "from-green-500 to-green-700",
  },
  {
    icon: <FaMobileAlt size={28} />,
    title: "Responsive UI/UX",
    desc: "Whether mobile or desktop, your PayPal clone will offer a smooth and modern experience.",
    color: "from-purple-500 to-purple-700",
  },
  {
    icon: <FaTools size={28} />,
    title: "Custom Features",
    desc: "KYC, wallet system, real-time transfers, admin dashboard – everything tailored to your needs.",
    color: "from-yellow-500 to-yellow-700",
  },
  {
    icon: <FaHeadset size={28} />,
    title: "Full Support & Handover",
    desc: "We provide complete documentation, deployment, and support post-delivery.",
    color: "from-pink-500 to-pink-700",
  },
  {
    icon: <FaRocket size={28} />,
    title: "Fast Delivery",
    desc: "We follow an agile approach with clear timelines to launch your PayPal clone quickly.",
    color: "from-red-500 to-red-700",
  },
  {
    icon: <FaUserShield size={28} />,
    title: "Compliance Friendly",
    desc: "We build systems that are GDPR-ready and can be extended to meet PCI-DSS standards.",
    color: "from-indigo-500 to-indigo-700",
  },
  {
    icon: <FaRegSmile size={28} />,
    title: "Client Satisfaction First",
    desc: "We value long-term partnerships, and prioritize transparency, communication, and client success.",
    color: "from-teal-500 to-teal-700",
  },
  {
    icon: <FaHandHoldingUsd size={28} />,
    title: "Cost Effective",
    desc: "Top-tier quality without agency-level pricing. We give you real value for your investment.",
    color: "from-amber-500 to-amber-700",
  },
];

function ReasonCard({ reason }) {
  return (
    <div className={`bg-gradient-to-br ${reason.color} text-white p-6 rounded-xl shadow-md hover:shadow-2xl transition duration-300 hover:scale-[1.03]`}>
      <div className="bg-white text-black w-12 h-12 flex items-center justify-center rounded-full mb-4">
        {reason.icon}
      </div>
      <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
      <p className="text-sm opacity-90">{reason.desc}</p>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <>
      <Head>
        <title>Why Choose Us – PayPal Clone Experts</title>
      </Head>

      <WrapperContainer>
        <section className="min-h-screen py-16 px-4 bg-gray-50">
          {/* 🔵 Section: Header */}
          <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-4">
            Why Choose Us to Build Your PayPal Clone?
          </h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            We specialize in developing modern fintech applications with speed, security, and scalability. Here's why we’re the perfect team for your PayPal-style app.
          </p>

          {/* 🔶 Section: Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {reasons.map((reason, idx) => (
              <ReasonCard key={idx} reason={reason} />
            ))}
          </div>

          {/* 💡 Section: CTA */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Launch Your Fintech Idea?</h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-6">
              Let's collaborate to build a custom PayPal-like platform that’s secure, scalable, and future-proof. Reach out today and we’ll show you how we can make it happen!
            </p>
            <a
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition"
            >
              Let’s Get Started
            </a>
          </div>
        </section>
      </WrapperContainer>
    </>
  );
}
