import Image from 'next/image';
import Heading from '@/Layout/Heading'
import WrapperContainer from '@/Layout/WrapperContainer'


const features = [
  "Customizable Digital Experiences",
  "Seamless Integration with Salesforce",
  "Mobile-First Design"
];

export default function CommunityIntro() {
  return (
    <WrapperContainer>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-slide-from-left">
            <Heading>Salesforce Community Experience Cloud</Heading>
            <p className="text-lg text-gray-600 mb-6">
              Transform your digital experience with Salesforce Community Experience Cloud. 
              Build engaging portals, websites, and mobile experiences that connect your 
              customers, partners, and employees in one powerful platform.
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li
                  key={feature}
                  className="flex items-center animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-blue-600 mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-video animate-slide-from-right">
            <Image
              src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/CommunityExperienceCloud.avif"
              alt="Community Experience Cloud"
              fill
              className="rounded-lg shadow-xl object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
}
