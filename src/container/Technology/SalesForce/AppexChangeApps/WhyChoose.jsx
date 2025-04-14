import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import Subheading from "@/Layout/Subheading";
import WrapperContainer from "@/Layout/WrapperContainer";

const cardData = [
  { icon: "🚀", color: "text-blue-500", title: "Expert Development", description: "We build high-quality, scalable, and secure applications for Salesforce AppExchange." },
  { icon: "🔒", color: "text-green-500", title: "Secure & Compliant", description: "We ensure top-notch security and compliance with Salesforce best practices." },
  { icon: "📈", color: "text-purple-500", title: "Optimized Performance", description: "Our solutions are optimized for speed, reliability, and seamless user experience." },
  { icon: "🤝", color: "text-orange-500", title: "Seamless Integration", description: "We ensure smooth integration with your existing Salesforce ecosystem." },
  { icon: "📊", color: "text-red-500", title: "Data-Driven Insights", description: "Our solutions provide actionable insights to drive your business growth." },
  { icon: "💡", color: "text-teal-500", title: "Innovative Solutions", description: "We leverage the latest technologies to build cutting-edge Salesforce applications." },
];

export default function WhyChooseUs() {
  return (
    <WrapperContainer>
      <section className="md:px-20 lg:px-32">
        <div className="text-center">
          <Heading>Why Choose Us for AppExchange Development?</Heading>
          <Paragraph>Delivering expert Salesforce solutions tailored to your business needs.</Paragraph>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition duration-300">
              <div className={`text-5xl ${card.color} mb-4`}>{card.icon}</div>
              <Subheading>{card.title}</Subheading>
              <div className="h-1 w-16 bg-blue-500 mx-auto mb-4"></div>
              <Paragraph>{card.description}</Paragraph>
            </div>
          ))}
        </div>
      </section>
    </WrapperContainer>
  );
}
