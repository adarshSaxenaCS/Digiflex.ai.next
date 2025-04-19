import ColChangeFeatureList from "@/container/products/WhiteLabel/AllInOneCode/ColChangeFeatureList";

const FiverrServices = [
  {
    title: "Service Listings",
    icon: "List",
    description: "Create and manage services.",
    detailContent:
      "Freelancers can create detailed service listings including package tiers, pricing structures, descriptions, FAQs, and delivery timelines. This allows buyers to understand exactly what they're getting and choose the best fit for their needs.",
  },
  {
    title: "User Authentication & Profiles",
    icon: "UserCheck",
    description: "Secure user management.",
    detailContent:
      "Users can register securely and maintain professional profiles that include skills, portfolio samples, work experience, and client testimonials. The authentication process ensures account safety for both buyers and sellers.",
  },
  {
    title: "Advanced Search & Filters",
    icon: "Search",
    description: "Find services easily.",
    detailContent:
      "An intuitive search system helps users discover relevant services quickly using filters like price, delivery time, category, rating, and seller level, providing a streamlined browsing experience.",
  },
  {
    title: "Secure Payments",
    icon: "CreditCard",
    description: "Multiple payment options.",
    detailContent:
      "Integrated payment gateways support multiple payment methods such as credit/debit cards, PayPal, and wallet systems. Escrow functionality ensures that payments are only released when the buyer is satisfied with the delivery.",
  },
  {
    title: "Order Management",
    icon: "ClipboardCheck",
    description: "Manage and track orders.",
    detailContent:
      "Both buyers and sellers can manage order timelines, status updates, delivery deadlines, and revisions. Automated notifications and tracking help ensure transparency and timely delivery of services.",
  },
  {
    title: "Messaging System",
    icon: "MessageSquare",
    description: "Chat with sellers.",
    detailContent:
      "A real-time messaging system enables smooth communication between buyers and freelancers. It supports file attachments, custom offers, and negotiation to ensure all project details are discussed and agreed upon clearly.",
  },
  {
    title: "Ratings & Reviews",
    icon: "Star",
    description: "User feedback system.",
    detailContent:
      "After order completion, buyers can leave ratings and detailed reviews based on their experience. This feedback helps future buyers make informed decisions and motivates sellers to maintain high-quality standards.",
  },
  {
    title: "Admin Dashboard",
    icon: "Monitor",
    description: "Manage platform activities.",
    detailContent:
      "Admins have access to a powerful dashboard where they can monitor service listings, user registrations, transactions, disputes, and platform metrics. Tools for moderation and user management ensure a safe and trustworthy environment.",
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
