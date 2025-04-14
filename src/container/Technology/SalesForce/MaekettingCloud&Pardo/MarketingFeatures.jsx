
import { CheckCircle } from 'lucide-react';
import Heading from '@/Layout/Heading'
import WrapperContainer from '@/Layout/WrapperContainer'

const features = [
    {
        title: "Marketing Cloud Features",
        items: [
            "Journey Builder for customer engagement",
            "Email Studio for email marketing",
            "Mobile Studio for SMS and push notifications",
            "Social Studio for social media marketing",
            "Advertising Studio for digital advertising"
        ]
    },
    {
        title: "Pardot Features",
        items: [
            "Lead Management and Scoring",
            "Email Marketing Automation",
            "Landing Page Builder",
            "B2B Analytics and ROI Tracking",
            "Sales-Marketing Alignment Tools"
        ]
    }
];

const MarketingFeatures = () => {
    return (
        <WrapperContainer>
            <div className="max-w-6xl mx-auto px-4">
                <Heading>Platform Features</Heading>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="p-6 bg-white shadow-md rounded-lg">
                            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                            <ul className="space-y-2">
                                {feature.items.map((item, idx) => (
                                    <li key={idx} className="flex items-center text-gray-700">
                                        <CheckCircle className="text-green-500 mr-2" size={20} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </WrapperContainer>
    );
};

export default MarketingFeatures;
