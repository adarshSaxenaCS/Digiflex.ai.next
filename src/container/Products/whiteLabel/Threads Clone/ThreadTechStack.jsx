import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaCloudUploadAlt, FaLock, FaDocker, FaAws, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiExpress, SiAngular, SiTailwindcss, SiVercel, SiRender, SiRailway, SiCloudinary, SiPostman, SiSwagger, SiNginx, SiTypescript, SiFirebase, SiGithub } from "react-icons/si";

const stack = [
  {
    title: "Frontend",
    tools: [
      { icon: <FaReact />, name: "React.js" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiAngular />, name: "Angular" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <SiTypescript />, name: "TypeScript" }
    ],
  },
  {
    title: "Backend",
    tools: [
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <SiExpress />, name: "Express.js" },
      { icon: <FaPython />, name: "Python" },
      { icon: <SiPostman />, name: "Postman" },
      { icon: <SiSwagger />, name: "Swagger" }
    ],
  },
  {
    title: "Database",
    tools: [
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <FaDatabase />, name: "SQL / NoSQL" },
      { icon: <SiFirebase />, name: "Firebase DB" }
    ],
  },
  {
    title: "Authentication",
    tools: [
      { icon: <FaLock />, name: "JWT" },
      { icon: <SiFirebase />, name: "Firebase Auth" },
    ],
  },
  {
    title: "File Storage",
    tools: [
      { icon: <SiCloudinary />, name: "Cloudinary" },
      { icon: <FaCloudUploadAlt />, name: "Local & Cloud Uploads" }
    ],
  },
  {
    title: "Deployment",
    tools: [
      { icon: <SiVercel />, name: "Vercel" },
      { icon: <SiRender />, name: "Render" },
      { icon: <SiRailway />, name: "Railway" },
      { icon: <FaAws />, name: "AWS" },
      { icon: <FaDocker />, name: "Docker" },
      { icon: <SiNginx />, name: "Nginx" }
    ],
  },
  {
    title: "DevOps & Version Control",
    tools: [
      { icon: <FaGitAlt />, name: "Git" },
      { icon: <SiGithub />, name: "GitHub" },
    ],
  }
];

export default function ThreadTechStack() {
  return (
    <WrapperContainer>
        <div className="p-10 mt-[-50px]">
      <Heading className="text-3xl font-bold text-center mb-[50px]">⚙️ Our Tech Stack</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stack.map((section, idx) => (
          <div
          key={idx}
          className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition-all duration-500 relative group overflow-hidden"
        >
          {/* Gradient background overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-300 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none rounded-xl" />
          
          <h2 className="text-xl font-semibold mb-4 text-blue-600 relative z-10">{section.title}</h2>
          <div className="flex flex-wrap gap-4 relative z-10">
            {section.tools.map((tool, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg hover:bg-blue-100 transition"
              >
                <div className="text-xl text-blue-500">{tool.icon}</div>
                <span className="text-sm font-medium">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        ))}
      </div>
    </div>
    </WrapperContainer>
  );
}
