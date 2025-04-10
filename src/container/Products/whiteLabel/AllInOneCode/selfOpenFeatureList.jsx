import * as LucideIcons from "lucide-react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Paragraph from "@/Layout/Paragraph";
import Subheading from "@/Layout/Subheading";

const FeatureList = ({ title, description, services }) => {
  return (
    <WrapperContainer>
      <div className="fade-in">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <h3 className="text-5xl font-extrabold text-center text-blue-600">{title}</h3>
          <Paragraph className="text-center text-lg text-gray-700 mt-6">{description}</Paragraph>
        </div>

        {/* Service Cards */}
        <div className="bg-white shadow-lg rounded-xl p-6 md:p-8">
          {services.map((service) => {
            const IconComponent = LucideIcons[service.icon] || LucideIcons.HelpCircle;

            return (
              <details
                key={service.title}
                className="mb-6 border border-gray-300 bg-white rounded-xl shadow-md p-5 transition-all duration-300 relative group hover:shadow-xl hover:-translate-y-1"
              >
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <div className="flex items-center gap-2 group-hover:text-blue-800 ">
                    {IconComponent && (
                      <IconComponent className="w-6 h-6 text-blue-600 group-hover:text-blue-800 transition-colors duration-300" />
                    )}
                    <Subheading className="text-black text-xl font-medium transition-colors duration-300 group-hover:text-blue-800">
                      {service.title}
                    </Subheading>
                  </div>
                  <LucideIcons.ChevronDown className="w-6 h-6 text-gray-700 group-open:rotate-180 transition-transform duration-300" />
                </summary>

                {/* Description */}
                <Paragraph className="text-gray-700 text-lg mt-4">{service.description}</Paragraph>

                {/* Image */}
                {service.image && (
                  <div className="mt-4">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full md:w-[200px] h-auto rounded-lg shadow-lg object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                )}
              </details>
            );
          })}
        </div>

        {/* Fade-in Animation */}
        <style jsx>{`
          .fade-in {
            animation: fadeIn 1s ease-out forwards;
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </WrapperContainer>
  );
};

export default FeatureList;
