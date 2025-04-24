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
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/AlibabaFeaturesImg1-jpg.jpg",
    alt:"AlibabaFeaturesImg1-jpg"
  },
  {
    title: "Secure Payment System",
    icon: <CreditCard className="w-8 h-8 text-green-600" />,
    description: "Multiple payment options.",
    detailContent:
      "Offers secure escrow payment system, credit card support, and multiple payment gateways like PayPal and Stripe. Ensures both buyer and seller transactions are safe and trusted.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/AlibabaFeaturesImg2-jpg.jpg",
    alt:"AlibabaFeaturesImg2-jpg"
  },
  {
    title: "Bulk Ordering",
    icon: <ShoppingCart className="w-8 h-8 text-orange-600" />,
    description: "Special pricing for wholesale.",
    detailContent:
      "Buy in large quantities at discounted prices directly from manufacturers and verified suppliers. Perfect for resellers and B2B buyers looking for inventory at scale.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/AlibabaFeaturesImg3-jpg.jpg",
    alt:"AlibabaFeaturesImg3-jpg"
  },
  {
    title: "Messaging System",
    icon: <MessageSquare className="w-8 h-8 text-purple-600" />,
    description: "Chat with sellers.",
    detailContent:
      "Built-in chat system allows real-time messaging with suppliers, request for quotes, send attachments, and negotiate terms before placing orders.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/AlibabaFeaturesImg4-jpg.jpg",
    alt:"AlibabaFeaturesImg4-jpg"
  },
  {
    title: "Verified Suppliers",
    icon: <ShieldCheck className="w-8 h-8 text-indigo-600" />,
    description: "Trusted seller base.",
    detailContent:
      "Only suppliers who have passed a strict verification process can list products. Buyers can view company details, certifications, and reviews to ensure trust and transparency.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/AlibabaFeaturesImg5-jpg.jpg",
    alt:"AlibabaFeaturesImg5-jpg"
  },
  {
    title: "Global Shipping",
    icon: <Truck className="w-8 h-8 text-red-600" />,
    description: "Deliver anywhere.",
    detailContent:
      "Integration with global logistics partners to deliver orders in over 200 countries. Track your shipment live and get updates until your order reaches the doorstep.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/AlibabaFeaturesImg6-jpg.jpg",
    alt:"AlibabaFeaturesImg6-jpg"
  },
  {
    title: "Customer Management",
    icon: <Users className="w-8 h-8 text-teal-600" />,
    description: "Handle inquiries better.",
    detailContent:
      "Manage customer relationships through an intuitive dashboard. Respond to inquiries, handle reviews, and maintain strong communication with clients.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/AlibabaFeaturesImg7-jpg.jpg",
    alt:"AlibabaFeaturesImg7-jpg"
  },
  {
    title: "International Marketplace",
    icon: <Globe className="w-8 h-8 text-yellow-600" />,
    description: "Sell globally.",
    detailContent:
      "List your products in multiple languages and currencies. Expand your reach to a global audience with built-in SEO, translation support, and country-specific promotions.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/AlibabaFeaturesImg8-jpg.jpg",
    alt:"AlibabaFeaturesImg8-jpg"
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
