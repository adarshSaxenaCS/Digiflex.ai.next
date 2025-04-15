import {
  Briefcase,
  UserCheck,
  Search,
  CreditCard,
  MessageSquare,
  ClipboardCheck,
  Star,
  Monitor,
  Clock,
} from "lucide-react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Subheading from "@/Layout/Subheading";
import Paragraph from "@/Layout/Paragraph";

const upworkFeatures = [
  {
    id: 1,
    title: "Job Posting & Proposals",
    icon: <Briefcase className="w-8 h-8 text-blue-500" />,
    description: "Clients can post job listings, and freelancers can submit proposals.",
  },
  {
    id: 2,
    title: "User Authentication & Profiles",
    icon: <UserCheck className="w-8 h-8 text-green-500" />,
    description: "Secure login/signup, detailed profiles with skills and experience.",
  },
  {
    id: 3,
    title: "Advanced Search & Filters",
    icon: <Search className="w-8 h-8 text-purple-500" />,
    description: "Search freelancers/jobs based on skills, rates, and location.",
  },
  {
    id: 4,
    title: "Secure Payments & Escrow",
    icon: <CreditCard className="w-8 h-8 text-red-500" />,
    description: "Multiple payment gateways with milestone-based escrow payments.",
  },
  {
    id: 5,
    title: "Messaging & Video Calls",
    icon: <MessageSquare className="w-8 h-8 text-orange-500" />,
    description: "Built-in chat for real-time communication and video calls.",
  },
  {
    id: 6,
    title: "Order & Contract Management",
    icon: <ClipboardCheck className="w-8 h-8 text-yellow-500" />,
    description: "Workroom for tracking contracts, milestones, and deadlines.",
  },
  {
    id: 7,
    title: "Ratings & Reviews",
    icon: <Star className="w-8 h-8 text-pink-500" />,
    description: "Clients and freelancers can rate each other with verified reviews.",
  },
  {
    id: 8,
    title: "Time Tracking & Work Diary",
    icon: <Clock className="w-8 h-8 text-cyan-500" />,
    description: "Automatic time tracking with screenshot logging and activity monitoring.",
  },
  {
    id: 9,
    title: "Admin Dashboard & Analytics",
    icon: <Monitor className="w-8 h-8 text-teal-500" />,
    description: "Manage users, disputes, financial transactions, and insights.",
  },
];

export default function UpworkFeatures() {
  return (
    <WrapperContainer>
      <div>
        <Heading className="text-3xl font-bold text-center mb-8 text-black drop-shadow-lg">
          Upwork Clone Features
        </Heading>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upworkFeatures.map((feature) => (
            <div
              key={feature.id}
              className="p-6 rounded-xl shadow-lg bg-white/10 backdrop-blur-md border border-white/20 hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                {feature.icon}
                <Subheading className="text-xl font-semibold text-black">{feature.title}</Subheading>
              </div>
              <Paragraph className="text-gray-800 mt-2">{feature.description}</Paragraph>
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
}
