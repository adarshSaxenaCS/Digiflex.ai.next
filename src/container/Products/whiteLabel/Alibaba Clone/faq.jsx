import {
  FileCode,
  Code,
  React as ReactIcon,
  GitBranch,
  Github,
  Database,
  ShieldCheck,
  LockKeyhole,
  Paintbrush,
  Terminal,
  Globe,
  UploadCloud,
  Send,
  LayoutDashboard,
  Flame,
  FileJson,
  Server,
} from "lucide-react";

const techStack = {
  Frontend: [
    { icon: <FileCode />, name: "HTML5" },
    { icon: <FileCode />, name: "CSS3" },
    { icon: <Code />, name: "JavaScript" },
    { icon: <ReactIcon />, name: "React.js" },
    { icon: <Globe />, name: "Next.js" },
    { icon: <Flame />, name: "Vite" },
  ],
  Backend: [
    { icon: <Server />, name: "Node.js" },
    { icon: <Terminal />, name: "Express.js" },
  ],
  Database: [
    { icon: <Database />, name: "MongoDB" },
  ],
  Authentication: [
    { icon: <LockKeyhole />, name: "JWT" },
    { icon: <ShieldCheck />, name: "Firebase Auth" },
  ],
  "Styling / UI": [
    { icon: <Paintbrush />, name: "TailwindCSS" },
    { icon: <LayoutDashboard />, name: "Bootstrap" },
  ],
  "Tools & Deployment": [
    { icon: <GitBranch />, name: "Git" },
    { icon: <Github />, name: "GitHub" },
    { icon: <FileJson />, name: "Postman" },
    { icon: <UploadCloud />, name: "Netlify" },
    { icon: <Send />, name: "Vercel" },
  ],
};

const TechStack = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-8 text-center">🚀 Tech Stack</h2>
      <div className="space-y-10">
        {Object.entries(techStack).map(([category, techs]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold mb-4">{category}</h3>
            <div className="space-y-2">
              {techs.map((tech, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-800">
                  <div className="text-xl">{tech.icon}</div>
                  <div className="text-lg">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
