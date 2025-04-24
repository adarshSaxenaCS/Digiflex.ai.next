import Heading from '@/Layout/Heading';
import { FaRegHandshake, FaCogs, FaCreditCard, FaVideo, FaRegHeart, FaRocket } from 'react-icons/fa';
import WrapperContainer from '@/Layout/WrapperContainer';

const steps = [
  {
    icon: <FaRegHandshake size={40} />,
    title: '1. Set Up User Authentication',
    description: 'Users sign up, log in, and create profiles to get started with the platform.',
  },
  {
    icon: <FaCogs size={40} />,
    title: '2. Add Content Management',
    description: 'Admins can upload movies, TV shows, and manage categories for easy access.',
  },
  {
    icon: <FaCreditCard size={40} />,
    title: '3. Implement Subscription Models',
    description: 'Offer subscription plans with secure payment gateway integration for premium content.',
  },
  {
    icon: <FaVideo size={40} />,
    title: '4. Build Streaming and Playback Functionality',
    description: 'Integrate a video player with adaptive streaming quality for seamless playback.',
  },
  {
    icon: <FaRegHeart size={40} />,
    title: '5. Create Recommendation System',
    description: 'Use machine learning or a basic algorithm to suggest content based on user preferences.',
  },
  {
    icon: <FaRocket size={40} />,
    title: '6. Final Testing and Deployment',
    description: 'Test everything thoroughly to ensure a smooth user experience and deploy on the cloud.',
  },
];

function StepCard({ step }) {
  return (
    <div className="relative overflow-hidden bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 text-center group">
  <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
  
  <div className="relative z-10">
    <div className="text-blue-500 mb-4 group-hover:text-white transition-all duration-300 group-hover:translate-x-2 transform">
      {step.icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors duration-300">{step.title}</h3>
    <p className="text-gray-600 group-hover:text-white transition-colors duration-300">{step.description}</p>
  </div>
</div>

  );
}

export default function HowItWorks() {
  return (
    <>
      <Heading>
        <title>How It Works</title>
      </Heading>

      <WrapperContainer>
        <section className="py-14 px-6 bg-gray-100">
          <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-10">
            How It Works
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto ">
            {steps.map((step, index) => (
              <StepCard key={index} step={step} />
            ))}
          </div>
        </section>
      </WrapperContainer>
    </>
  );
}
