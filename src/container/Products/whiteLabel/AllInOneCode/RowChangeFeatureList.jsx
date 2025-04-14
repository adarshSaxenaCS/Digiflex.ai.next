import WrapperContainer from '@/Layout/WrapperContainer';
import Heading from '@/Layout/Heading';
import Paragraph from '@/Layout/Paragraph';
import Subheading from '@/Layout/Subheading';
import * as LucideIcons from 'lucide-react';

const FeatureList = ({ title, description, services }) => {
  return (
    <WrapperContainer>
      <div className="font-sans antialiased flex justify-center bg-gradient-to-b from-white via-blue-50 to-blue-100 py-16">
        <section className="w-full max-w-6xl">
          <div className="text-center mb-12">
            <Heading>{title}</Heading>
            <Paragraph className="text-center">{description}</Paragraph>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
            {services.slice(0, 3).map((service, index) => {
              const IconComponent = LucideIcons[service.icon];

              return (
                <div
                  key={index}
                  className="rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border border-gray-100 p-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-tr from-blue-200 to-blue-400 rounded-full flex items-center justify-center mb-4 shadow-md">
                    {IconComponent && <IconComponent size={28} className="text-white" />}
                  </div>

                  <Subheading>{service.title}</Subheading>
                  <Paragraph className="text-gray-700 text-center">{service.description}</Paragraph>

                  <div className="mt-4 pt-4 border-t border-gray-200 text-sm text-gray-700 w-full text-left backdrop-blur-md bg-white/60 rounded-md p-3 shadow-inner">
                    <p>{service.detailContent}</p>
                    <button className="mt-3 text-blue-700 font-medium flex items-center hover:text-blue-900 transition">
                      <span>Request Consultation</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </WrapperContainer>
  );
};

export default FeatureList;
