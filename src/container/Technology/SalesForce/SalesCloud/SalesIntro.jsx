import Image from "next/image";
import Heading from '@/Layout/Heading'  
import WrapperContainer from '@/Layout/WrapperContainer'

const SalesIntro = () => {
  return (
    <WrapperContainer>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-slide-left">
            <Heading>Salesforce Sales Cloud</Heading>
            <p className="text-gray-600">
              Transform your sales process with Salesforce Sales Cloud, the world's #1 CRM platform. 
              Streamline your sales operations, boost productivity, and drive revenue growth with 
              powerful automation and AI-driven insights.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <span className="text-primary">✓</span>
                <span>Complete sales process automation</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-primary">✓</span>
                <span>AI-powered sales forecasting</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-primary">✓</span>
                <span>360-degree customer view</span>
              </li>
            </ul>
          </div>
          <div className="relative h-[400px] animate-slide-right">
            <Image
              src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/SalesCloud.jpg"
              alt="Sales Cloud Overview"
              width={900} 
              height={400}
              className="w-full h-full object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
};

export default SalesIntro;
