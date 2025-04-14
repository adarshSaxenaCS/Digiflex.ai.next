import WrapperContainer from "@/Layout/WrapperContainer";

export default function WhatWeProvide() {
  const boxColors = [
    "hover:bg-blue-100",
    "hover:bg-green-100",
    "hover:bg-yellow-100",
    "hover:bg-pink-100",
    "hover:bg-purple-100",
    "hover:bg-red-100",
    "hover:bg-orange-100",
    "hover:bg-emerald-100",
  ];

  return (
    <WrapperContainer>
      <div className="min-h-[60vh] mb-20 bg-gray-100 p-10">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
          What We Provide
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-2 ${boxColors[index % boxColors.length]}`}
            >
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                {feature.title}
              </h2>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
}

const features = [
  { title: "Modern UI Design", description: "A clean, intuitive, and mobile-friendly interface." },
  { title: "Dark Mode Support", description: "An optional dark theme for user comfort." },
  { title: "Product Animation", description: "Smooth hover effects and transitions for better UX." },
  { title: "Commission-Based Selling", description: "Take a percentage of each sale from sellers." },
  { title: "Ads & Sponsored Listings", description: "Allow sellers to pay for better visibility." },
  { title: "Live Chat Support", description: "Real-time assistance for customers." },
  { title: "GDPR Compliance", description: "Privacy protection for users." },
  { title: "SSL Encryption", description: "Secure data transmission." },
];


