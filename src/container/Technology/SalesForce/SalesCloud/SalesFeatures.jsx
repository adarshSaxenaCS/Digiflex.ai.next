import Heading from '@/Layout/Heading'
import WrapperContainer from '@/Layout/WrapperContainer'

const features = [
  {
    title: "Lead Management",
    description: "Track and manage leads through the entire sales pipeline with automated lead scoring and routing.",
    icon: "📊",
  },
  {
    title: "Opportunity Management",
    description: "Monitor deals from start to close with customizable sales processes and stages.",
    icon: "💼",
  },
  {
    title: "Sales Forecasting",
    description: "Make data-driven decisions with AI-powered sales forecasting and pipeline visibility.",
    icon: "📈",
  },
  {
    title: "Contact Management",
    description: "Keep all your customer information organized and accessible in one central location.",
    icon: "👥",
  },
];

const SalesFeatures = () => {
  return (
    <WrapperContainer>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <Heading>Key Features of Sales Cloud</Heading>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the powerful features that make Sales Cloud the most comprehensive sales solution for businesses of all sizes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default SalesFeatures;
