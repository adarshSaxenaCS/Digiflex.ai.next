import WrapperContainer from "@/Layout/WrapperContainer";
import {
  PackageCheck,
  Zap,
  Truck,
  FileText,
  Users,
  UploadCloud,
  CheckCircle,
  DollarSign,
  Clipboard,
  Layers,
  Calendar,
} from "lucide-react";

const useCases = [
  {
    icon: <UploadCloud className="text-blue-500 w-6 h-6" />,
    title: "NFT Upload & Minting",
    description:
      "Creators can upload files and mint them as NFTs in a few clicks using smart contract integration.",
  },
  {
    icon: <PackageCheck className="text-green-500 w-6 h-6" />,
    title: "Creator Verification",
    description:
      "Admins can verify artists and sellers for credibility, preventing fake or plagiarized work.",
  },
  {
    icon: <Zap className="text-yellow-500 w-6 h-6" />,
    title: "Royalties Setup",
    description:
      "Set royalty percentages for creators, ensuring lifetime earnings from resales.",
  },
  {
    icon: <Truck className="text-purple-500 w-6 h-6" />,
    title: "NFT Transfer & Tracking",
    description:
      "Buyers can track NFT transfers between wallets using real-time blockchain updates.",
  },
  {
    icon: <FileText className="text-pink-500 w-6 h-6" />,
    title: "Smart Contract Management",
    description:
      "Users can deploy custom smart contracts or choose from templates to manage drops.",
  },
  {
    icon: <Users className="text-red-500 w-6 h-6" />,
    title: "Community Auctions",
    description:
      "Launch time-based auctions and bidding systems to boost engagement and discoverability.",
  },
  {
    icon: <CheckCircle className="text-teal-500 w-6 h-6" />,
    title: "Content Approval",
    description:
      "Admins can approve or reject NFT submissions based on quality and content guidelines.",
  },
  {
    icon: <DollarSign className="text-orange-500 w-6 h-6" />,
    title: "Payment Integration",
    description:
      "Integrate multiple payment options to facilitate smooth transactions for NFT sales.",
  },
  {
    icon: <Clipboard className="text-indigo-500 w-6 h-6" />,
    title: "Transaction History",
    description:
      "Track every transaction history of NFTs bought and sold to ensure full transparency.",
  },
  {
    icon: <Layers className="text-yellow-600 w-6 h-6" />,
    title: "Layered Art Creation",
    description:
      "Create and combine layers to make unique and customizable NFTs using a design tool.",
  },
  {
    icon: <Calendar className="text-blue-600 w-6 h-6" />,
    title: "Scheduled Drops",
    description:
      "Set specific drop times for NFT releases, creating urgency and exclusivity for buyers.",
  },
];

export default function RealWorldUseCasesPage() {
  return (
    <WrapperContainer>
      <div className="bg-gray-50 h-[45%]">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-10">
          Real-World Use Cases
        </h1>

        <div className="flex justify-center items-center">
          <div className="overflow-x-auto w-full max-w-6xl">
            <table className="min-w-full border border-gray-300 rounded-md overflow-hidden">
              <thead className="bg-indigo-100">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-indigo-700">
                    Icon
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-indigo-700">
                    Use Case
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-indigo-700">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {useCases.map((item, index) => (
                  <tr
                    key={index}
                    className="border-t border-gray-200 group transition-colors duration-300 hover:bg-indigo-50"
                  >
                    <td className="px-6 py-4">{item.icon}</td>
                    <td className="px-6 py-4 transition duration-300 group-hover:text-indigo-600 font-medium">
                      {item.title}
                    </td>
                    <td className="px-6 py-4 transition duration-300 group-hover:text-gray-800 group-hover:bg-indigo-100 rounded-md">
                      {item.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
}
