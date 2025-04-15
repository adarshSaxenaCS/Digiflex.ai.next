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
      <div className="bg-white shadow-lg rounded-xl p-6 md:p-8">
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

              <div className="mt-4">
                <Paragraph className="text-gray-700 text-lg">
                  {service.description}
                </Paragraph>

                {service.image ? (
                  <div className="mt-4">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={400} // <-- add width
                      height={300} // <-- add height
                      className="w-full md:w-[200px] h-auto rounded-lg shadow-lg object-cover transition-transform duration-300 hover:scale-105"
                    />

                  </div>
                ) : null}
              </div>
            </details>
          );
        })}

      </div>
    </WrapperContainer>
  );
};

export default SelfOpenFeatureList;
