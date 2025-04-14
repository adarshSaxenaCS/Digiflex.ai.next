
import { CheckCircle } from 'lucide-react';
import Heading from '@/Layout/Heading'
import WrapperContainer from '@/Layout/WrapperContainer'

const MarketingIntro = () => {
    return (
        <WrapperContainer>
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Text Content */}
                    <div>
                        <Heading>Transform Your Marketing with Salesforce</Heading>
                        <p className="text-lg mb-4">
                            Combine the power of Marketing Cloud and Pardot to deliver exceptional marketing experiences across B2B and B2C channels.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center text-gray-700">
                                <CheckCircle className="text-green-500 mr-2" size={20} />
                                Personalized customer journeys at scale
                            </li>
                            <li className="flex items-center text-gray-700">
                                <CheckCircle className="text-green-500 mr-2" size={20} />
                                Advanced B2B marketing automation
                            </li>
                            <li className="flex items-center text-gray-700">
                                <CheckCircle className="text-green-500 mr-2" size={20} />
                                AI-powered marketing insights
                            </li>
                        </ul>
                    </div>

                    {/* Image Section */}
                    <div>
                        <img
                            src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/MaekettingCloud&Pardo.avif"
                            alt="Marketing Cloud and Pardot"
                            className="w-full rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </WrapperContainer>
    );
};

export default MarketingIntro;
