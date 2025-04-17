import Heading from "../../../../Layout/Heading";
import WrapperContainer from "../../../../Layout/WrapperContainer";

export default function AwsDevOpsAdvantages() {
    const advantages = [
      { title: "Faster Time to Market", description: "Automate workflows for rapid deployment." },
      { title: "High Scalability & Flexibility", description: "Easily scale applications based on demand." },
      { title: "Improved Collaboration", description: "Enhance teamwork between developers and IT teams." },
      { title: "Enhanced Security", description: "Automate security updates and compliance checks." },
      { title: "Reduced Operational Costs", description: "Optimize infrastructure to minimize expenses." }
    ];
  
    return (
        <WrapperContainer>
        <Heading>Advantages of AWS DevOps
</Heading>
      <div className="flex flex-wrap gap-2">
        {advantages.map((advantage, index) => (
          <div
            key={index}
            className="relative border border-gray-300 p-4 text-lg font-semibold cursor-pointer group w-60 text-center"
          >
            <div className="group-hover:h-auto group-hover:pb-4 transition-all group-hover:text-blue-600 overflow-hidden h-8">
              <span className=" transition-colors block">{advantage.title}</span>
              <p className="text-sm text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity mt-2">
                {advantage.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      </WrapperContainer>
    );
  }