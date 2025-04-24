import * as LucideIcons from "lucide-react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Paragraph from "@/Layout/Paragraph";
import Subheading from "@/Layout/Subheading";
import Image from "next/image";

const SelfOpenFeatureList = ({ title, description, services }) => {
  return (
    <WrapperContainer>
      {/* Section Heading */}
      <div className="text-center mb-8">
        <h3 className="text-5xl font-extrabold text-center text-blue-600">{title}</h3>
        <Paragraph className="text-center text-lg text-gray-700 mt-6">{description}</Paragraph>
      </div>

      {/* Service Cards */}
      <div className="bg-white shadow-lg rounded-xl">
        {services.map((service) => {
          const IconComponent = LucideIcons[service.icon] || LucideIcons.HelpCircle;

          return (
            <details
              key={service.title}
              className="mb-6 border border-gray-300 bg-white rounded-xl shadow-md p-5 transition-all duration-300 relative group hover:shadow-xl hover:-translate-y-1"
            >
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <div className="flex items-center gap-2 group-hover:text-blue-800">
                  {IconComponent && (
                    <IconComponent className="w-6 h-6 text-blue-600 group-hover:text-blue-800 transition-colors duration-300" />
                  )}
                  <Subheading className="text-black text-xl font-medium transition-colors duration-300 group-hover:text-blue-800">
                    {service.title}
                  </Subheading>
                </div>
                <LucideIcons.ChevronDown className="w-6 h-6 text-gray-700 group-open:rotate-180 transition-transform duration-300" />
              </summary>

              <div className="flex flex-col md:flex-row gap-6 mt-4 items-start">
                <Paragraph className="text-gray-700 text-lg md:w-2/3">
                  {service.description}
                </Paragraph>

                {service.image && (
                  <div className="md:w-1/3 w-full ml-auto flex justify-end">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={300}
                      height={200}
                      className="rounded-lg shadow-lg object-cover w-full h-auto max-w-[300px] transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                )}
              </div>
            </details>
          );
        })}
      </div>
    </WrapperContainer>
  );
};

export default SelfOpenFeatureList;
