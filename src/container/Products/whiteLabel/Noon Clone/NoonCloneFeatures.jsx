import React from "react";
import {
  UserCheck,
  List,
  FileText,
  ShoppingCart,
  Heart,
  LayoutDashboard,
  Clock,
  Monitor
} from "lucide-react";
import Image from "next/image";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";

const NoonServices = [
  {
    title: "User Authentication",
    icon: <UserCheck className="w-8 h-8 text-indigo-600" />,
    description: "Signup/Login with secure methods.",
    detailContent: "Signup/Login with Email, OTP, Google, and Apple. Includes secure password reset flow.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/NoonUserAuthentication-gif.gif",
  },
  {
    title: "Product Listings with Filters",
    icon: <List className="w-8 h-8 text-indigo-600" />,
    description: "Easily browse and filter products.",
    detailContent: "Filter by categories, price range, brand, rating, and more for quick navigation.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/NoonProductListing-gif.gif",
  },
  {
    title: "Product Details Page",
    icon: <FileText className="w-8 h-8 text-indigo-600" />,
    description: "Detailed product view.",
    detailContent: "Includes zoomable images, ratings, availability by location, and seller info.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/NoonProductDetails-gif.gif",
  },
  {
    title: "Cart & Checkout",
    icon: <ShoppingCart className="w-8 h-8 text-indigo-600" />,
    description: "Manage your purchases easily.",
    detailContent: "Add/remove items, apply coupons, and place orders using multiple payment options.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/NoonCart-gif.gif",
  },
  {
    title: "Wishlist",
    icon: <Heart className="w-8 h-8 text-indigo-600" />,
    description: "Save items for later.",
    detailContent: "Let users save their favorite items and easily access them anytime.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/NoonWishlist-gif.gif",
  },
  {
    title: "User Dashboard",
    icon: <LayoutDashboard className="w-8 h-8 text-indigo-600" />,
    description: "Manage orders and profile.",
    detailContent: "Users can view order history, manage addresses, and update account information.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/NoonUserDashBoard-gif.gif",
  },
  {
    title: "Flash Sales & Deals",
    icon: <Clock className="w-8 h-8 text-indigo-600" />,
    description: "Limited-time offers.",
    detailContent: "Timer-based flash sales and deals sections to boost conversions.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/NoonFlashSales-gif.gif",
  },
  {
    title: "Admin Dashboard",
    icon: <Monitor className="w-8 h-8 text-indigo-600" />,
    description: "Manage the platform backend.",
    detailContent: "Admins can manage users, view transactions, add products, and handle disputes.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/NoonAdminDashBoard-gif.gif",
  },
];

const NoonCloneFeatures = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <Heading className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-6">
          Key Features of Our Noon Clone
        </Heading>
        <Paragraph className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          A robust eCommerce platform replicating Noon’s core capabilities. Designed to provide a seamless online shopping experience with extensive seller and buyer functionality.
        </Paragraph>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8">
          {NoonServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full"
            >
              {/* Hide image on small screens */}
              <Image
                src={service.image}
                alt={service.title}
                width={500}
                height={300}
            className="hidden sm:block w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <Heading className="text-lg font-semibold text-gray-800 mb-1 break-words">
                    {service.title}
                  </Heading>
                  <Paragraph className="text-sm text-gray-600 mb-2 break-words">
                    {service.description}
                  </Paragraph>
                  <Paragraph className="text-sm text-gray-500 break-words">
                    {service.detailContent}
                  </Paragraph>
                </div>
               
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default NoonCloneFeatures;