import WrapperContainer from "@/Layout/WrapperContainer";
import { Server, Code, Database, Cloud, Code2 } from "lucide-react";

const techStacks = [
  {
    id: 1,
    title: "MERN Stack",
    icon: <Server className="w-10 h-10 text-blue-500 mx-auto mb-3" />,
    frontend: "React.js",
    backend: "Node.js + Express.js",
    database: "MongoDB",
    authentication: "JWT, OAuth (Google, Facebook)",
    payments: "Stripe, Razorpay, PayPal",
    description: "Fast development, scalable, and widely supported.",
  },
  {
    id: 2,
    title: "MEVN Stack",
    icon: <Code className="w-10 h-10 text-green-500 mx-auto mb-3" />,
    frontend: "Vue.js",
    backend: "Node.js + Express.js",
    database: "MongoDB",
    authentication: "JWT, OAuth",
    payments: "Stripe, PayPal",
    description: "Simpler than React, faster UI performance.",
  },
  {
    id: 3,
    title: "LAMP Stack",
    icon: <Database className="w-10 h-10 text-orange-500 mx-auto mb-3" />,
    frontend: "HTML, CSS, JavaScript, Bootstrap",
    backend: "PHP (Laravel/CodeIgniter)",
    database: "MySQL",
    authentication: "Sessions, JWT",
    payments: "PayPal, Stripe",
    description: "Cost-effective, widely used, and good for shared hosting.",
  },
  {
    id: 4,
    title: "JAMstack",
    icon: <Cloud className="w-10 h-10 text-purple-500 mx-auto mb-3" />,
    frontend: "Next.js / React.js",
    backend: "Serverless (AWS Lambda, Firebase)",
    database: "Firestore / Supabase",
    authentication: "Firebase Auth, Auth0",
    payments: "Stripe",
    description: "Fast, secure, and scalable with minimal backend maintenance.",
  },
  {
    id: 5,
    title: "Django + React",
    icon: <Code2 className="w-10 h-10 text-yellow-500 mx-auto mb-3" />,
    frontend: "React.js",
    backend: "Django (Python, DRF)",
    database: "PostgreSQL / SQLite",
    authentication: "Django Auth, JWT",
    payments: "Stripe, Razorpay",
    description: "Secure, robust, and great for AI/ML-based analytics.",
  },
];

export default function TechStackList() {
  return (
    <WrapperContainer>
      <div className="mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-black drop-shadow-lg">
          Tech Stacks You Can Use in a Fiverr Clone
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStacks.map((stack) => (
            <div
              key={stack.id}
              className="p-6 rounded-xl shadow-lg bg-white/10 backdrop-blur-md border border-white/20 hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center"
            >
              {stack.icon}
              <h3 className="text-xl font-semibold text-black mb-2">
                {stack.title}
              </h3>
              <p className="text-blue-800 mb-4">{stack.description}</p>
              <div className="text-left text-sm text-gray-800 space-y-1">
                <p><strong>Frontend:</strong> {stack.frontend}</p>
                <p><strong>Backend:</strong> {stack.backend}</p>
                <p><strong>Database:</strong> {stack.database}</p>
                <p><strong>Authentication:</strong> {stack.authentication}</p>
                <p><strong>Payments:</strong> {stack.payments}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
}
