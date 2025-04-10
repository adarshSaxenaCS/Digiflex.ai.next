import FeatureList from "@/container/products/whiteLabel/AllInOneCode/selfOpenFeatureList";
import WrapperContainer from "@/Layout/WrapperContainer";

const PinduoduoFeatures = [
  {
    title: "Group Buying Discounts",
    icon: "Users",
    description: "Pinduoduo's social commerce model allows users to invite friends and family to purchase together, reducing the cost per unit.",
    detailContent: "Pinduoduo's social commerce model allows users to invite friends and family to purchase together, reducing the cost per unit.",
    image: "https://i.pinimg.com/736x/c0/79/af/c079af8520b9638bbded167d884d2b05.jpg",
    link: "https://www.pinduoduo.com/group-buying",
  },
  {
    title: "AI-Powered Product Recommendations",
    icon: "Activity",
    description: "Pinduoduo leverages AI and big data to analyze user behavior and provide customized product recommendations.",
    detailContent: "Pinduoduo leverages AI and big data to analyze user behavior and provide customized product recommendations.",
    image: "https://i.pinimg.com/736x/e7/7e/eb/e77eebe84978fe1fe651941f0052fb38.jpg",
    link: "https://www.pinduoduo.com/recommendations",
  },
  {
    title: "Flash Sales & Limited-Time Deals",
    icon: "Clock",
    description: "Users can participate in limited-time sales events that offer significant discounts on popular products.",
    detailContent: "Users can participate in limited-time sales events that offer significant discounts on popular products.",
    image: "https://i.pinimg.com/736x/ea/9e/12/ea9e12a3f3cd82dd42569b9acd787eda.jpg",
    link: "https://www.pinduoduo.com/flash-sales",
  },
  {
    title: "Interactive Shopping Experience",
    icon: "MessageCircle",
    description: "Pinduoduo integrates live-streaming features where merchants showcase products and answer customer questions in real time.",
    detailContent: "Pinduoduo integrates live-streaming features where merchants showcase products and answer customer questions in real time.",
    image: "https://i.pinimg.com/736x/00/95/cf/0095cfd4c657406ec994239036b8a824.jpg",
    link: "https://www.pinduoduo.com/live-stream",
  },
  {
    title: "Gamified Discounts & Coupons",
    icon: "Gift",
    description: "Earn rewards through interactive games.Users can participate in in-app games to win discounts, vouchers, and exclusive deals",
    detailContent: "Users can participate in in-app games to win discounts, vouchers, and exclusive deals.",
    image: "https://i.pinimg.com/736x/12/ef/90/12ef90ce7b561aa9b330a34d9bc9bf37.jpg",
    link: "https://www.pinduoduo.com/gamification",
  },
  {
    title: "Seamless Logistics & Fast Delivery",
    icon: "Truck",
    description: "Efficient supply chain management.Pinduoduo partners with local and international logistics providers to ensure quick and reliable deliveries.",
    detailContent: "Pinduoduo partners with local and international logistics providers to ensure quick and reliable deliveries.",
    image: "https://i.pinimg.com/736x/11/b3/e6/11b3e659eb3a5127670cd63ca5957d40.jpg",
    link: "https://www.pinduoduo.com/logistics",
  },
  {
    title: "Supplier & Manufacturer Direct Sales",
    icon: "Factory",
    description: "Lower costs by cutting out the middleman.Pinduoduo connects buyers directly with manufacturers to provide cost-effective deals.",
    detailContent: "Pinduoduo connects buyers directly with manufacturers to provide cost-effective deals.",
    image: "https://i.pinimg.com/736x/de/06/80/de0680d1890df73455a69c756459ccc1.jpg",
    link: "https://www.pinduoduo.com/direct-sales",
  },
  {
    title: "Secure Payments & Buyer Protection",
    icon: "ShieldCheck",
    description: "Ensuring safe transactions.Pinduoduo offers secure payment methods and a buyer protection policy to safeguard customer purchases.",
    detailContent: "Pinduoduo offers secure payment methods and a buyer protection policy to safeguard customer purchases.",
    image: "https://i.pinimg.com/736x/4f/bd/7d/4fbd7d210302612c311d640e51ba9d3c.jpg",
    link: "https://www.pinduoduo.com/security",
  },
];

const PinduoduoCloneFeatures = () => {
  return (
    <WrapperContainer>
      <FeatureList
      title="Key Features of Our Pinduoduo Clone"
      description="A social commerce platform that enables group buying, interactive shopping, and gamified discounts, providing a unique shopping experience."
      services={PinduoduoFeatures}
    />
    </WrapperContainer>
  );
};

export default PinduoduoCloneFeatures;
