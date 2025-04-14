import Heading from "@/Layout/Heading";
import Subheading from "@/Layout/Subheading";
import WrapperContainer from "@/Layout/WrapperContainer";

export default function Features() {
  const features = [
    {
      title: "Trusted AI for Increased Efficiency",
      description:
        "Field Service with AI and automation helps organizations balance customer demands and drive more productivity. Also, FSL can prioritize jobs based on customer issues and technical skills to solve the prior queries earlier with the Trusted AI feature.",
      icon: "🤖",
    },
    {
      title: "Mobile App Accessibility",
      description:
        "Field Service Lightning in Salesforce is also available as a mobile app for both iOS and Android. It is designed to tailor today’s workforce demands with an 'Offline-first' feature that allows front-line ones to save changes even without WiFi.",
      icon: "📱",
    },
    {
      title: "Scheduling and Dispatch Management",
      description:
        "This feature allows businesses to efficiently manage field service appointments, optimize technician schedules, and ensure timely job completion.",
      icon: "📅",
    },
    {
      title: "Manage Work and Assets",
      description:
        "With FSL, businesses can track and manage assets, ensuring all equipment is properly maintained and utilized.",
      icon: "🛠️",
    },
    {
      title: "Work Order Management",
      description:
        "Streamline work order assignments, track job completion, and improve overall field service efficiency.",
      icon: "📄",
    },
    {
      title: "Field Service Intelligence",
      description:
        "Advanced analytics and AI-driven insights help businesses make data-driven decisions to improve field operations.",
      icon: "📊",
    },
    {
      title: "Visual Remote Assistant",
      description:
        "Technicians can use augmented reality to provide remote assistance, reducing the need for on-site visits.",
      icon: "🖥️",
    },
  ];

  return (
    <WrapperContainer>
      <div className="max-w-5xl mx-auto flex flex-col items-center  ">
        <Heading>7 Key Features of Salesforce Field Service Lightning</Heading>

        {/* Feature Icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 justify-center items-center mt-6">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-4xl">{feature.icon}</div>
              <p className="text-sm font-semibold ">{feature.title}</p>
            </div>
          ))}
        </div>

        {/* Feature Details */}
        <div className="mt-10 space-y-8">
          {features.map((feature, index) => (
            <div key={index}>
              <Subheading>
                {index + 1}. {feature.title}
              </Subheading>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
}
