import Heading from '@/Layout/Heading'
import WrapperContainer from '@/Layout/WrapperContainer'

const CommunityTools = () => {
  const tools = [
    {
      name: "Lightning Components",
      description: "Reusable UI components for rapid development",
      icon: "⚡",
    },
    {
      name: "Experience Builder",
      description: "Drag-and-drop interface for page layouts",
      icon: "🔧",
    },
    {
      name: "Community Templates",
      description: "Pre-built solutions for common use cases",
      icon: "📋",
    },
    {
      name: "CMS Connect",
      description: "Integration with external content management systems",
      icon: "🔄",
    },
    {
      name: "Analytics Dashboard",
      description: "Built-in reporting and analytics tools",
      icon: "📊",
    },
    {
      name: "Mobile Publisher",
      description: "Create branded mobile apps",
      icon: "📱",
    },
  ];

  return (
    < WrapperContainer>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <Heading>Experience Cloud Tools & Components</Heading>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Powerful tools and components to build your digital experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4">{tool.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
              <p className="text-gray-600">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default CommunityTools;
