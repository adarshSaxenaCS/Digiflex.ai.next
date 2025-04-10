
import Heading from '@/Layout/Heading'
import WrapperContainer from '@/Layout/WrapperContainer'

const benefits = [
  {
    title: "Increased Sales Productivity",
    description: "Automate routine tasks and focus on closing deals",
    icon: "⚡",
  },
  {
    title: "Better Lead Management",
    description: "Track and nurture leads more effectively",
    icon: "🎯",
  },
  {
    title: "Improved Forecasting",
    description: "Make data-driven decisions with accurate predictions",
    icon: "📈",
  },
  {
    title: "Enhanced Collaboration",
    description: "Work seamlessly across sales teams and departments",
    icon: "🤝",
  },
  {
    title: "Mobile Accessibility",
    description: "Access your sales data anywhere, anytime",
    icon: "📱",
  },
  {
    title: "Scalable Solution",
    description: "Grow your sales operations without limitations",
    icon: "🚀",
  },
];

const Benefits = () => {
  return (
    <WrapperContainer>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <Heading>Benefits of Sales Cloud</Heading>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transform your sales process and drive better results with these key advantages
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{benefit.icon}</span>
                <h3 className="text-xl font-bold">{benefit.title}</h3>
              </div>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default Benefits;
