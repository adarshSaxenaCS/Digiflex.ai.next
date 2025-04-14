


import Heading from '@/Layout/Heading'
import WrapperContainer from '@/Layout/WrapperContainer'

const tools = [
  {
    name: "Einstein AI",
    description: "AI-powered insights and predictions for smarter selling",
    icon: "🤖",
  },
  {
    name: "Mobile App",
    description: "Access your sales data anywhere, anytime",
    icon: "📱",
  },
  {
    name: "Sales Analytics",
    description: "Real-time dashboards and reporting tools",
    icon: "📊",
  },
  {
    name: "CPQ",
    description: "Configure, Price, Quote automation",
    icon: "💰",
  },
  {
    name: "Sales Dialer",
    description: "Built-in calling capabilities",
    icon: "☎️",
  },
  {
    name: "Email Integration",
    description: "Seamless email sync with major providers",
    icon: "📧",
  },
];

const SalesTools = () => {
  return (
    <WrapperContainer>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <Heading>Sales Cloud Tools & Integrations</Heading>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Enhance your sales process with powerful tools and integrations
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{tool.icon}</span>
                <h3 className="text-xl font-bold">{tool.name}</h3>
              </div>
              <p className="text-gray-600">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default SalesTools;
