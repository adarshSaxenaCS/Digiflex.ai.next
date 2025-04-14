import Heading from '@/Layout/Heading'
import WrapperContainer from '@/Layout/WrapperContainer'

const CommunityProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "Analyze requirements and plan your community structure",
    },
    {
      number: "02",
      title: "Design & Configuration",
      description: "Create branded layouts and configure features",
    },
    {
      number: "03",
      title: "Development & Integration",
      description: "Implement custom features and integrate with existing systems",
    },
    {
      number: "04",
      title: "Testing & Deployment",
      description: "Quality assurance and launch preparation",
    },
    {
      number: "05",
      title: "Training & Support",
      description: "User training and ongoing maintenance",
    },
  ];

  return (
    <WrapperContainer>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <Heading>Implementation Process</Heading>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our structured approach ensures successful deployment of your 
            Experience Cloud community
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-start space-x-8 animate-slide-in ${
                index % 2 === 0 ? 'animate-slide-from-left' : 'animate-slide-from-right'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                {step.number}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default CommunityProcess;
