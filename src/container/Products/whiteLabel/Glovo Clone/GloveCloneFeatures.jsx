import AlternateGridFeatures from "@/container/products/WhiteLabel/AllInOneCode/AlternateGridFeatures";

const Features = [
  {
    title: "Real-Time Order Tracking",
    icon: "MapPin",
    description: "Track your food live.",
    detailContent:
      "Customers can track the exact location of their orders from the moment they are placed until delivery. This feature enhances transparency and builds trust by offering estimated delivery times and real-time updates on rider movement.",
    image: "https://i.pinimg.com/736x/0d/f5/10/0df510ae2cbbf74fe409a5c64856d1bb.jpg",
  },
  {
    title: "Multiple Payment Options",
    icon: "CreditCard",
    description: "Fast & secure checkout.",
    detailContent:
      "Offer flexibility at checkout with seamless integration of various payment gateways like Razorpay, Stripe, and options such as Cash on Delivery (COD), digital wallets, and UPI. This ensures a smooth and secure payment experience for users across all devices.",
    image: "https://i.pinimg.com/736x/40/27/fb/4027fbff729c9ac9d44c67a04a7ff9ed.jpg",
  },
  {
    title: "Restaurant & Menu Management",
    icon: "List",
    description: "Manage dishes with ease.",
    detailContent:
      "Admins and restaurant owners can easily manage restaurant listings, update food items, add new dishes, remove outdated ones, and customize pricing or availability—all in a user-friendly dashboard.",
    image: "https://i.pinimg.com/736x/e1/22/79/e12279b84731015c73480cbff6d748d0.jpg",
  },
  {
    title: "Delivery Partner Module",
    icon: "Truck",
    description: "Separate dashboard for riders.",
    detailContent:
      "Delivery partners get a dedicated interface to accept orders, track their delivery route, manage active deliveries, and view earnings and delivery history—empowering them with full control and clarity.",
    image: "https://i.pinimg.com/736x/93/59/45/935945bf9f0a86074cb97379dc478453.jpg",
  },
  {
    title: "Live Order Notifications",
    icon: "Bell",
    description: "Instant alerts for each step.",
    detailContent:
      "Real-time notifications keep everyone informed. Users receive updates at every stage—from order confirmation to dispatch and delivery—while restaurants and delivery personnel get alerts for new tasks or status changes.",
    image: "https://i.pinimg.com/736x/34/d5/f8/34d5f84b9d3d1490e5aaf7027b1d9079.jpg",
  },
  {
    title: "Discounts & Promo Codes",
    icon: "Percent",
    description: "Engage users with offers.",
    detailContent:
      "Admins can create, schedule, and manage promotional offers to attract and retain customers. Set percentage or fixed-value discounts, time-based deals, or first-order incentives with detailed analytics to track performance.",
    image: "https://i.pinimg.com/736x/88/2d/52/882d52f3282b6b8e689f6213cf343929.jpg",
  },
  {
    title: "Ratings & Reviews",
    icon: "Star",
    description: "Gather valuable feedback.",
    detailContent:
      "Users can leave detailed reviews and ratings for dishes, delivery experience, and restaurants. This feedback loop helps improve service quality and builds credibility through community-driven insights.",
    image: "https://i.pinimg.com/736x/47/27/cc/4727cc2cfd2a63a5dc1e4e3bfe0c24e9.jpg",
  },
  {
    title: "User Profile Management",
    icon: "User",
    description: "Personalized experiences.",
    detailContent:
      "Users can update their personal details, manage saved addresses, view past orders, reorder with one click, and set preferences to get personalized recommendations and a smoother app experience.",
    image: "https://i.pinimg.com/736x/f1/35/da/f135da4dcb1e87702db820dfe68217a1.jpg",
  },
];
  

const GloveCloneFeatures = () => {
  return (
    <div className="space-y-12">
      <AlternateGridFeatures
        title="Key Features of Our Glovo Clone"
        description="A complete food delivery app clone with real-time tracking, secure payments, and restaurant management."
        services={Features}
        cardClassName="transition duration-500 transform hover:scale-105 hover:-rotate-1 hover:bg-yellow-50 shadow-md hover:shadow-2xl rounded-xl"
      />
    </div>
  );
};

export default GloveCloneFeatures;
