import { LineChart, Users, Mail, Smartphone, Bot, BarChart } from 'lucide-react';
import Heading from '@/Layout/Heading'
import WrapperContainer from '@/Layout/WrapperContainer'

const benefits = [
    {
        icon: <LineChart size={40} />,
        title: "Unified Marketing Platform",
        description: "Combine Marketing Cloud and Pardot for comprehensive marketing solutions"
    },
    {
        icon: <Users size={40} />,
        title: "Advanced Lead Management",
        description: "Track and nurture leads across B2B and B2C customer journeys"
    },
    {
        icon: <Mail size={40} />,
        title: "Multi-Channel Engagement",
        description: "Reach customers through email, mobile, social, and web channels"
    },
    {
        icon: <Smartphone size={40} />,
        title: "Marketing Automation",
        description: "Automate marketing campaigns and lead nurturing processes"
    },
    {
        icon: <Bot size={40} />,
        title: "AI-Powered Insights",
        description: "Leverage Einstein AI for predictive analytics and personalization"
    },
    {
        icon: <BarChart size={40} />,
        title: "ROI Tracking",
        description: "Measure campaign performance and marketing ROI"
    }
];

const Benefits = () => {
    return (
        <WrapperContainer>
            <div className="max-w-6xl mx-auto px-4">
                <Heading>Marketing Solutions Benefits</Heading>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="p-6 bg-white shadow-md rounded-lg text-center">
                            <div className="flex justify-center mb-4 text-blue-500">{benefit.icon}</div>
                            <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                            <p className="text-gray-600">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </WrapperContainer>
    );
};

export default Benefits;
