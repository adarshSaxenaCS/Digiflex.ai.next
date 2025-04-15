import ColChangeFeatureList from "@/container/products/whiteLabel/AllInOneCode/ColChangeFeatureList";

const FiverrServices = [
  {
    title: "Service Listings",
    icon: "List",
    description: "Create and manage services.",
    detailContent: "Freelancers can offer service packages with pricing, descriptions, and delivery timelines.",
    image: "https://i.pinimg.com/236x/43/99/4f/43994f53d8feec27770ce7dca2d63d39.jpg",
  },
  {
    title: "User Authentication & Profiles",
    icon: "UserCheck",
    description: "Secure user management.",
    detailContent: "Buyers and sellers can create detailed profiles with secure sign-up/login.",
    image: "https://i.pinimg.com/736x/22/09/79/220979c254f575f755997ab812fc535e.jpg",
  },
  {
    title: "Advanced Search & Filters",
    icon: "Search",
    description: "Find services easily.",
    detailContent: "Powerful search tools and filters to locate relevant services quickly.",
    image: "https://i.pinimg.com/736x/a0/72/01/a0720158ee319cd8ab25c8cbe3720c4d.jpg",
  },
  {
    title: "Secure Payments",
    icon: "CreditCard",
    description: "Multiple payment options.",
    detailContent: "Integrated payment gateways ensure safe transactions with escrow services.",
    image: "https://i.pinimg.com/736x/e3/47/65/e34765f06dd62a5b348f41c0b8f3f66e.jpg",
  },
  {
    title: "Order Management",
    icon: "ClipboardCheck",
    description: "Manage and track orders.",
    detailContent: "Buyers can place, track, and manage their service orders efficiently.",
    image: "https://i.pinimg.com/736x/ea/39/ae/ea39aeab05dcc5a2e0f63bd3b7071e85.jpg",
  },
  {
    title: "Messaging System",
    icon: "MessageSquare",
    description: "Chat with sellers.",
    detailContent: "Secure messaging for seamless communication between buyers and sellers.",
    image: "https://i.pinimg.com/736x/cd/5d/40/cd5d400c39e3891914066593b96d610c.jpg",
  },
  {
    title: "Ratings & Reviews",
    icon: "Star",
    description: "User feedback system.",
    detailContent: "Users can rate and review services to ensure quality and trust.",
    image: "https://i.pinimg.com/736x/98/2b/fb/982bfb2c3894f29c9bed4d13d7b0488d.jpg",
  },
  {
    title: "Admin Dashboard",
    icon: "Monitor",
    description: "Manage platform activities.",
    detailContent: "Admins can monitor transactions, user activity, and handle disputes.",
    image: "https://i.pinimg.com/736x/05/6e/8f/056e8f6d11d6f6fb3bd90dd0aef35541.jpg",
  },
];

const FiverrCloneFeatures = () => {
  return (
    <ColChangeFeatureList
      title="Key Features of Our Fiverr Clone"
      description="A marketplace platform designed to replicate the core functionality of Fiverr, enabling freelancers to offer services and clients to hire them. It provides a digital space where users can browse services, communicate, and complete transactions seamlessly."
      services={FiverrServices}
    />
  );
};

export default FiverrCloneFeatures;
