import Head from 'next/head';
import { FaMoneyBillWave, FaCreditCard, FaUniversity, FaBitcoin, FaChartLine, FaLock } from 'react-icons/fa';
import WrapperContainer from '@/Layout/WrapperContainer';

const features = [
  {
    icon: <FaMoneyBillWave size={40} />,
    title: 'Instant Money Transfers',
    description: 'Send and receive money instantly using phone number, email, or $cashtag.',
  },
  {
    icon: <FaCreditCard size={40} />,
    title: 'Cash Card Integration',
    description: 'Get a virtual or physical debit card to use funds directly from your balance.',
  },
  {
    icon: <FaUniversity size={40} />,
    title: 'Direct Deposit',
    description: 'Receive your salary, government benefits, or other payments directly in the app.',
  },
  {
    icon: <FaBitcoin size={40} />,
    title: 'Bitcoin Support',
    description: 'Buy, sell, or hold Bitcoin directly from your wallet securely.',
  },
  {
    icon: <FaChartLine size={40} />,
    title: 'Stock Investments',
    description: 'Invest in stocks easily with fractional shares and real-time data.',
  },
  {
    icon: <FaLock size={40} />,
    title: 'Secure Authentication',
    description: 'Use Face ID, PIN, or Two-Factor Authentication for enhanced security.',
  },
];

function FeatureCard({ feature }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 text-center group">
      <div className="text-green-500 mb-4 transform group-hover:translate-x-2 transition-transform duration-300">
        {feature.icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </div>
  );
}

export default function FeaturesPage() {
  return (
    <>
      <Head>
        <title>Cash App Clone - Features</title>
      </Head>

      <WrapperContainer>
        <section className="py-14 px-6 bg-gray-100">
          <h1 className="text-4xl font-extrabold text-center text-green-600 mb-10">
            Features of Cash App Clone
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </section>
      </WrapperContainer>
    </>
  );
}
