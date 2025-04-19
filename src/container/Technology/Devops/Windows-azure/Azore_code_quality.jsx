import Heading from "../../../../Layout/Heading";
import Paragraph from "../../../../Layout/Paragraph";
import Subheading from "../../../../Layout/Subheading";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import {
  LayoutDashboard,
  GitPullRequest,
  ListChecks,
  ShieldCheck,
  GitBranch,
  Package2,
} from "lucide-react";

const services = [
  {
    title: "Azure Boards",
    description:
      "Efficiently track and manage your projects with customizable Kanban boards, interactive backlogs, and powerful planning tools—ensuring seamless workflow and end-to-end traceability.",
    icon: LayoutDashboard,
  },
  {
    title: "Azure Pipelines",
    description:
      "Automate your CI/CD process with Azure Pipelines, supporting any language, platform, and cloud. Seamlessly integrate with GitHub or other Git providers for continuous deployment.",
    icon: GitPullRequest, // ✅ Replaced invalid Pipeline with GitPullRequest
  },
  {
    title: "Azure Test Plans",
    description:
      "Deliver high-quality software with confidence using manual and exploratory testing tools designed for comprehensive test management.",
    icon: ListChecks,
  },
  {
    title: "GitHub Advanced Security for Azure DevOps",
    description:
      "Strengthen your development security from start to finish with built-in security testing tools tailored for Azure DevOps.",
    icon: ShieldCheck,
  },
  {
    title: "Azure Repos",
    description:
      "Collaborate seamlessly with cloud-hosted, unlimited private Git repositories. Utilize pull requests and advanced file management for better code quality.",
    icon: GitBranch,
  },
  {
    title: "Azure Artifacts",
    description:
      "Easily create, host, and share packages within your team. Integrate artifacts into your CI/CD pipelines with a single click, ensuring smooth software delivery.",
    icon: Package2,
  },
];
export default function AzureCodeQuality() {
  return (
    <>
    <WrapperContainer>
        <Heading>
          Enhance Code Quality and Boost Productivity with Azure DevOps
        </Heading>
        <Subheading className="text-center">
          At <span className="font-semibold text-black">Digiflex.ai</span>, we
          empower businesses with Azure DevOps to streamline software
          development, enhance collaboration, and accelerate delivery with
          cutting-edge DevOps solutions.
        </Subheading>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group flex items-start gap-4 p-6 rounded-lg  transition-all duration-300 "
          >
            {/* Expanding Left Line */}
            <div className="absolute left-0 top-1/2 h-10 w-1 bg-blue-500 transition-all duration-300 group-hover:top-0 group-hover:h-full" />

            {/* Icon and Text Content */}
            <div className="pl-6 flex items-start gap-4">
              <service.icon className="w-40 h-40 text-blue-600" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>
                <Paragraph className="text-start"> {service.description}</Paragraph>
              </div>
            </div>
          </div>
        ))}
      </div>
      </WrapperContainer>
      </>
  );
}
