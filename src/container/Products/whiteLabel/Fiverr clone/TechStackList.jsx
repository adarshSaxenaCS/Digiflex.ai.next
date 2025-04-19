import Paragraph from "@/Layout/Paragraph";
import WrapperContainer from "@/Layout/WrapperContainer";
import { Server, Code, Database, Cloud, Code2 } from "lucide-react";
import Heading from "@/Layout/Heading";
import Image from "next/image";

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
    image: "https://i.pinimg.com/736x/a9/93/ea/a993ea7eb618687a31506f3d48588579.jpg",
  },
  {
    id: 2,
    title: "MEAN Stack",
    icon: <Code className="w-10 h-10 text-green-500 mx-auto mb-3" />,
    frontend: "Angular.js",
    backend: "Node.js + Express.js",
    database: "MongoDB",
    authentication: "JWT, OAuth",
    payments: "Stripe, PayPal",
    description: "Simpler than React, faster UI performance.",
    image: "https://i.pinimg.com/736x/11/b3/ed/11b3ed74041de5683ebec0b2d9df9879.jpg",
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
    image: "https://i.pinimg.com/736x/09/f8/5b/09f85b5c6bb86b2d1c6625d3a177d880.jpg",
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
    image: "https://i.pinimg.com/736x/30/a1/34/30a1344f94ec2918e0de4c560d27c998.jpg",
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
    image: "https://i.pinimg.com/736x/f0/6a/f6/f06af6a4c0dd85055ff3d0fa4cbb956a.jpg",
  },
];

export default function TechStackList() {
  return (
    <WrapperContainer>
      <div className="mx-auto mt-[50px]">
        <Heading className="text-3xl font-bold text-center mb-8 text-black drop-shadow-lg">
          Tech Stacks You Can Use in a Fiverr Clone
        </Heading>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStacks.map((stack) => (
            <div
              key={stack.id}
              className="group relative p-6 rounded-xl shadow-lg bg-white/10 backdrop-blur-md border border-white/20 hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center"
            >
              {stack.icon}
              <Heading className="text-xl font-semibold text-black mb-2">
                {stack.title}
              </Heading>
              <Paragraph className="text-blue-800 mb-4">{stack.description}</Paragraph>
              <div className="text-left text-sm text-gray-800 space-y-1">
                <Paragraph><strong>Frontend:</strong> {stack.frontend}</Paragraph>
                <Paragraph><strong>Backend:</strong> {stack.backend}</Paragraph>
                <Paragraph><strong>Database:</strong> {stack.database}</Paragraph>
                <Paragraph><strong>Authentication:</strong> {stack.authentication}</Paragraph>
                <Paragraph><strong>Payments:</strong> {stack.payments}</Paragraph>
              </div>

              {/* HIDDEN IMAGE SHOWN ON HOVER */}
              <div className="hidden group-hover:flex absolute inset-0 bg-white/90 backdrop-blur-md justify-center items-center rounded-xl transition-all duration-300 z-10">
                <Image
                  src={stack.image}
                  alt={stack.title}
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
}
