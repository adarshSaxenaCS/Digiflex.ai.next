import WrapperContainer from "@/Layout/WrapperContainer";
import { PenTool, Wallet, ShoppingCart, DollarSign, User, Clock, Search, BarChart2 } from "lucide-react";
import Heading from "@/Layout/Heading";

const features = [
  {
    title: "User Authentication",
    icon: User,
    description: "Allow users and taskers to register, log in securely, and manage their credentials through a robust authentication system."
  },
  {
    title: "Location-based Search",
    icon: Search,
    description: "Enables clients to find nearby taskers based on their live or selected location using integrated map functionality."
  },
  {
    title: "Task Posting System",
    icon: PenTool,
    description: "Clients can post tasks with details like category, location, deadline, and budget for taskers to apply."
  },
  {
    title: "Real-time Chat",
    icon: Clock,
    description: "Facilitates direct communication between clients and taskers to discuss task requirements and availability instantly."
  },
  {
    title: "Secure Payment Integration",
    icon: Wallet,
    description: "Allows users to pay for completed tasks through integrated gateways like Stripe, Razorpay, or PayPal."
  },
  {
    title: "Tasker Profiles & Reviews",
    icon: User,
    description: "Displays tasker ratings, reviews, skills, and completed tasks to help clients choose the right professional."
  },
  {
    title: "Dynamic Dashboard",
    icon: BarChart2,
    description: "Provides a personalized dashboard for clients and taskers to manage their activities, earnings, and tasks."
  },
  {
    title: "Booking & Scheduling",
    icon: ShoppingCart,
    description: "Users can schedule tasks based on date and time, and taskers can accept or decline based on availability."
  },
  {
    title: "Earnings & Royalties",
    icon: DollarSign,
    description: "Taskers can track their earnings and receive timely payments for each completed and approved task."
  }
];

export default function FeaturesPage() {
  return (
    <WrapperContainer>
      <Heading>Features of our TaskRabbit clone</Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, idx) => (
        <div
          key={idx}
          className="shadow-xl border rounded-2xl p-4 transition-all duration-300 bg-white hover:bg-gradient-to-l from-green-100 to-green-300"
        >
          <div className="flex flex-col items-start gap-4">
            <feature.icon className="h-8 w-8 text-blue-500" />
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
    </WrapperContainer>
  );
}