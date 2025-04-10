import Heading from '@/Layout/Heading'
import WrapperContainer from '@/Layout/WrapperContainer'

const Benefits = () => {
  const benefits = [
    {
      title: "Enhanced Customer Engagement",
      description: "Create personalized experiences that drive customer satisfaction and loyalty",
      icon: "🤝",
    },
    {
      title: "Improved Partner Collaboration",
      description: "Streamline partner relationships with dedicated portals and tools",
      icon: "🤲",
    },
    {
      title: "Increased Productivity",
      description: "Automate processes and provide self-service options",
      icon: "📈",
    },
    {
      title: "Better Data Insights",
      description: "Access real-time analytics and reporting capabilities",
      icon: "📊",
    },
    {
      title: "Scalable Solution",
      description: "Grow your community as your business expands",
      icon: "🚀",
    },
    {
      title: "Cost Effective",
      description: "Reduce support costs through self-service and automation",
      icon: "💰",
    },
  ];

  return (
    
      <WrapperContainer>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <Heading>Benefits of Experience Cloud</Heading>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how Experience Cloud can transform your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out animate-fade-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
      </WrapperContainer>
    
  );
};

export default Benefits;
