import WrapperContainer from "@/Layout/WrapperContainer";
import { ShoppingCart, Search, MapPin, User, Store, Percent, Bell, Heart, Calendar, Globe, FileText, Repeat, ChefHat } from "lucide-react";

const instacartItems = [
  {
    title: "Instacart Logo",
    description: "Acts as a home button. Clicking it navigates to the homepage.",
    icon: <Store size={28} className="text-blue-600" />,
  },
  {
    title: "Location Selector",
    description: "Allows users to set their delivery address or ZIP code to check availability of delivery.",
    icon: <MapPin size={28} className="text-blue-600" />,
  },
  {
    title: "Search Bar",
    description: "Lets users search for groceries, categories, and store products quickly.",
    icon: <Search size={28} className="text-blue-600" />,
  },
  {
    title: "Store Selection",
    description: "Users can pick their favorite store like Costco, Safeway, etc., for a personalized shopping experience.",
    icon: <Store size={28} className="text-blue-600" />,
  },
  {
    title: "Categories",
    description: "Browse grocery items by categories like Dairy, Snacks, Beverages, etc.",
    icon: <Percent size={28} className="text-blue-600" />,
  },
  {
    title: "Sign In / Account",
    description: "Access user account, order history, saved addresses, and payment methods.",
    icon: <User size={28} className="text-blue-600" />,
  },
  {
    title: "Cart",
    description: "Shows a cart icon with item count. Clicking it opens cart details and checkout options.",
    icon: <ShoppingCart size={28} className="text-blue-600" />,
  },
  {
    title: "Offers",
    description: "Displays ongoing promotions, discount banners, or free delivery deals.",
    icon: <Percent size={28} className="text-blue-600" />,
  },
];

const cloneExtraItems = [
  {
    title: "Your Orders",
    description: "Quick access to past orders, reordering, refunds, and tracking.",
    icon: <Repeat size={28} className="text-blue-600" />,
  },
  {
    title: "Saved Items / Wishlist",
    description: "Users can save frequently ordered or liked products for future use.",
    icon: <Heart size={28} className="text-blue-600" />,
  },
  {
    title: "Notifications",
    description: "For order updates, delivery status, discounts, and reminders.",
    icon: <Bell size={28} className="text-blue-600" />,
  },
  {
    title: "Subscription Plans",
    description: "Highlight membership options like free delivery, priority support, etc.",
    icon: <User size={28} className="text-blue-600" />,
  },
  {
    title: "Delivery Calendar",
    description: "Lets users see available delivery slots before adding items.",
    icon: <Calendar size={28} className="text-blue-600" />,
  },
  {
    title: "Language Selector",
    description: "Allow multilingual UI (English, Spanish, Hindi, etc.)",
    icon: <Globe size={28} className="text-blue-600" />,
  },
  {
    title: "Invoices / Bills",
    description: "Download or email receipts for business/family use.",
    icon: <FileText size={28} className="text-blue-600" />,
  },
  {
    title: "Recipe Suggestions",
    description: "Based on cart items, suggest recipes & auto-add missing ingredients.",
    icon: <ChefHat size={28} className="text-blue-600" />,
  },
];

export default function WhatWeProvide() {
  return (
    <WrapperContainer>
      <main className="min-h-screen bg-gray-50 px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
        What Instacart Navbar Provides
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {instacartItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 transition duration-300 hover:bg-black hover:text-white hover:shadow-xl"
          >
            <div className="flex items-center gap-3 mb-3">
              {item.icon}
              <h2 className="text-xl font-semibold text-blue-700 hover:text-white">
                {item.title}
              </h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed hover:text-white">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <h1 className="text-4xl font-bold text-center text-blue-700 my-16">
        What Our Clone Provides (Extra Features)
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cloneExtraItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 transition duration-300 hover:bg-black hover:text-white hover:shadow-xl"
          >
            <div className="flex items-center gap-3 mb-3">
              {item.icon}
              <h2 className="text-xl font-semibold text-blue-700 hover:text-white">
                {item.title}
              </h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed hover:text-white">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </main>
    </WrapperContainer>
  );
}
