import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import {
  BadgePercent,
  Gift,
  ShoppingCart,
  Smartphone,
  MapPin,
} from "lucide-react";

const uberDeals = [
  {
    title: "50% Off First Order",
    code: "UBERFIRST",
    detail: "Valid on orders above ₹199 from new users only.",
  },
  {
    title: "Free Dessert with Meals",
    code: "SWEETUBER",
    detail: "Get a free dessert on select restaurants with meals over ₹349.",
  },
  {
    title: "Buy 1 Get 1 Free Pizza",
    code: "PIZZALOVE",
    detail: "Only between 4PM - 7PM at participating outlets.",
  },
  {
    title: "Flat ₹100 Off on Lunch",
    code: "LUNCH100",
    detail: "Applicable on orders placed between 12PM - 3PM.",
  },
  {
    title: "Free Delivery on Weekends",
    code: "WEEKENDDEL",
    detail: "Enjoy zero delivery fee every Saturday and Sunday.",
  },
  {
    title: "15% Off for Students",
    code: "STUDENT15",
    detail: "Valid student ID required. Up to ₹120 off.",
  },
];

const primaryColor = "#162452";
const lightBackground = "#f0f4ff";
const badgeBg = "#dbeafe";
const badgeText = "#162452";

const steps = [
  {
    icon: ShoppingCart,
    title: "Browse & Order",
    desc: "Pick your favorite meals from top restaurants.",
  },
  {
    icon: Smartphone,
    title: "Checkout",
    desc: "Add special instructions & choose payment options.",
  },
  {
    icon: MapPin,
    title: "Track & Enjoy",
    desc: "Follow your delivery in real-time until it arrives.",
  },
  {
    icon: Gift,
    title: "Grab Offers",
    desc: "Use exclusive promo codes and save on every bite.",
  },
  {
    icon: BadgePercent,
    title: "Earn Rewards",
    desc: "Get loyalty points with every successful order.",
  },
];

const UberDealsAndOffers = () => {
  return (
    <WrapperContainer>
      {/* Deals Heading */}
      <div className="text-center mb-10">
        <Heading
          className="text-4xl font-extrabold"
          style={{ color: primaryColor }}
        >
          UberEats Exclusive Offers
        </Heading>
        <Paragraph
          className="mt-3 max-w-xl mx-auto"
          style={{ color: primaryColor }}
        >
          Unlock delicious savings with these limited-time offers, only on
          UberEats!
        </Paragraph>
      </div>

      {/* Deals Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {uberDeals.map((deal, i) => (
          <div
            key={i}
            className="rounded-xl transition transform duration-300 hover:-translate-y-1 hover:shadow-xl p-5"
            style={{
              backgroundColor: lightBackground,
              borderLeft: `4px solid ${primaryColor}`,
              boxShadow: "0 4px 10px rgba(22, 36, 82, 0.1)",
            }}
          >
            <div
              className="flex items-center gap-3 text-lg font-semibold mb-2"
              style={{ color: primaryColor }}
            >
              <Gift size={22} style={{ color: primaryColor }} />
              {deal.title}
            </div>

            <div className="flex items-center gap-2 mb-2">
              <BadgePercent size={16} style={{ color: primaryColor }} />
              <span
                style={{
                  backgroundColor: badgeBg,
                  color: badgeText,
                  padding: "2px 8px",
                  borderRadius: "6px",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                }}
              >
                {deal.code}
              </span>
            </div>

            <p className="text-sm text-gray-700 italic">{deal.detail}</p>
          </div>
        ))}
      </div>

      {/* How It Works Section */}
      <div className="mt-16 text-center">
        <Heading
          className="text-3xl font-bold mb-4"
          style={{ color: primaryColor }}
        >
          How It Works
        </Heading>
        <Paragraph
          className="mb-8 max-w-2xl mx-auto"
          style={{ color: "#475569" }}
        >
          Fast. Easy. Delicious.
        </Paragraph>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center rounded-xl p-5 transition transform duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{
                  backgroundColor: lightBackground,
                  borderTop: `4px solid ${primaryColor}`,
                }}
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-3"
                  style={{ backgroundColor: `${primaryColor}33` }}
                >
                  <Icon size={32} style={{ color: primaryColor }} />
                </div>
                <h4
                  className="text-lg font-semibold mb-1"
                  style={{ color: primaryColor }}
                >
                  {step.title}
                </h4>
                <p className="text-sm text-gray-700 text-center">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default UberDealsAndOffers;
