import Heading from '@/Layout/Heading'
import WrapperContainer from '@/Layout/WrapperContainer'

const CommunityFeatures = () => {
  const features = [
    {
      title: "Custom Branding",
      description: "Create branded digital experiences that reflect your company's identity",
      icon: "🎨",
    },
    {
      title: "Pre-built Templates",
      description: "Start quickly with ready-to-use templates for various use cases",
      icon: "📝",
    },
    {
      title: "CMS Integration",
      description: "Manage content easily with built-in CMS capabilities",
      icon: "📱",
    },
    {
      title: "Security & Compliance",
      description: "Enterprise-grade security and compliance features",
      icon: "🔒",
    },
  ];

  return (
    <WrapperContainer>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <Heading>Key Features of Experience Cloud</Heading>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the powerful features that make Salesforce Experience Cloud 
            the ideal platform for building digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md animate-fade-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      </WrapperContainer>
  
  );
};

export default CommunityFeatures;
