import WrapperContainer from "@/Layout/WrapperContainer";
import {
  CreditCard,
  MessageSquare,
  Search,
  ShoppingCart,
  ShieldCheck,
  Truck,
  Users,
  Globe,
} from "lucide-react";


const alibabaServices = [
  {
    title: "Advanced Search & Filters",
    icon: <Search className="w-8 h-8 text-blue-600" />,
    description: "Find products easily.",
    detailContent:
      "Use advanced filtering options such as category, price range, supplier type, and location to narrow down results. The intelligent search algorithm helps buyers quickly find the most relevant products.",
    image: "https://i.pinimg.com/736x/8f/8e/29/8f8e290b00fae2eb29b181411cf92b4a.jpg",
  },
  {
    title: "Secure Payment System",
    icon: <CreditCard className="w-8 h-8 text-green-600" />,
    description: "Multiple payment options.",
    detailContent:
      "Offers secure escrow payment system, credit card support, and multiple payment gateways like PayPal and Stripe. Ensures both buyer and seller transactions are safe and trusted.",
    image: "https://i.pinimg.com/736x/00/24/16/0024169553fe4753a71ea990e66eb858.jpg",
  },
  {
    title: "Bulk Ordering",
    icon: <ShoppingCart className="w-8 h-8 text-orange-600" />,
    description: "Special pricing for wholesale.",
    detailContent:
      "Buy in large quantities at discounted prices directly from manufacturers and verified suppliers. Perfect for resellers and B2B buyers looking for inventory at scale.",
    image: "https://i.pinimg.com/736x/84/14/be/8414be6f3386164b247b5af90bf3dc48.jpg",
  },
  {
    title: "Messaging System",
    icon: <MessageSquare className="w-8 h-8 text-purple-600" />,
    description: "Chat with sellers.",
    detailContent:
      "Built-in chat system allows real-time messaging with suppliers, request for quotes, send attachments, and negotiate terms before placing orders.",
    image: "https://i.pinimg.com/736x/cd/5d/40/cd5d400c39e3891914066593b96d610c.jpg",
  },
  {
    title: "Verified Suppliers",
    icon: <ShieldCheck className="w-8 h-8 text-indigo-600" />,
    description: "Trusted seller base.",
    detailContent:
      "Only suppliers who have passed a strict verification process can list products. Buyers can view company details, certifications, and reviews to ensure trust and transparency.",
    image: "https://i.pinimg.com/736x/51/e6/88/51e6886bc430a322751635f17d3a1880.jpg",
  },
  {
    title: "Global Shipping",
    icon: <Truck className="w-8 h-8 text-red-600" />,
    description: "Deliver anywhere.",
    detailContent:
      "Integration with global logistics partners to deliver orders in over 200 countries. Track your shipment live and get updates until your order reaches the doorstep.",
    image: "https://i.pinimg.com/736x/ba/84/8d/ba848dafe8bb880af6010553de7df766.jpg",
  },
  {
    title: "Customer Management",
    icon: <Users className="w-8 h-8 text-teal-600" />,
    description: "Handle inquiries better.",
    detailContent:
      "Manage customer relationships through an intuitive dashboard. Respond to inquiries, handle reviews, and maintain strong communication with clients.",
    image: "https://i.pinimg.com/736x/d0/cb/94/d0cb94f91650faca295b139e54590661.jpg",
  },
  {
    title: "International Marketplace",
    icon: <Globe className="w-8 h-8 text-yellow-600" />,
    description: "Sell globally.",
    detailContent:
      "List your products in multiple languages and currencies. Expand your reach to a global audience with built-in SEO, translation support, and country-specific promotions.",
    image: "https://i.pinimg.com/736x/11/39/66/113966a9b2049ede6ce8ab84facdbbe5.jpg",
  },
];


const AlibabaCloneFeatures = () => {
  return (
    <WrapperContainer>
      <div className="p-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-4 text-blue-700">Key Features of Our Alibaba Clone</h2>
      <p className="text-center text-gray-600 mb-10">
        A comprehensive B2B marketplace solution connecting buyers and sellers globally.
      </p>

      <div className="overflow-x-auto">
        <div className="flex gap-6 w-max">
          {alibabaServices.map((service, index) => (
            <div
              key={index}
              className="w-72 h-[500px] min-w-[18rem] bg-white rounded-xl shadow-md hover:shadow-lg transition-all flex-shrink-0"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-5 flex flex-col justify-between h-[calc(100%-12rem)]">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    {service.icon}
                    <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-1">{service.description}</p>
                  <p className="text-sm text-gray-500">{service.detailContent}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </WrapperContainer>
  );
};

export default AlibabaCloneFeatures;
