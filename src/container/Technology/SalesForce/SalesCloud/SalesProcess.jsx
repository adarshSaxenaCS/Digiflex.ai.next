
import Heading from '@/Layout/Heading'
import WrapperContainer from '@/Layout/WrapperContainer'

const processes = [
  {
    step: "1",
    title: "Lead Generation",
    description: "Capture and qualify leads from multiple sources automatically",
  },
  {
    step: "2",
    title: "Lead Nurturing",
    description: "Engage prospects with personalized content and automated follow-ups",
  },
  {
    step: "3",
    title: "Opportunity Management",
    description: "Convert qualified leads into opportunities and track deal progress",
  },
  {
    step: "4",
    title: "Deal Closure",
    description: "Close deals faster with automated quotes and contract management",
  },
];

const SalesProcess = () => {
  return (
    <WrapperContainer>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <Heading>Sales Cloud Process Flow</Heading>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Streamline your sales process with our proven methodology for success
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((process, index) => (
            <div
              key={index}
              className="relative animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-primary">
                <div className="text-4xl font-bold text-primary mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
              {index < processes.length -1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default SalesProcess;
