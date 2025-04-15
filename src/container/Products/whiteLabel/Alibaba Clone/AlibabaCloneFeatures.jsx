import ColChangeFeatureList from "@/container/products/whiteLabel/AllInOneCode/ColChangeFeatureList";

const alibabaServices = [
  {
    title: "Advanced Search & Filters",
    icon: "Search",
    description: "Find products easily.",
    detailContent: "Powerful search tools and filters.",
    image: "https://i.pinimg.com/736x/c9/37/9e/c9379e79f82b41eff422032d85e4bd04.jpg",
  },
  {
    title: "Secure Payment System",
    icon: "CreditCard",
    description: "Multiple payment options.",
    detailContent: "Escrow services and multiple gateways.",
    image: "https://i.pinimg.com/736x/6c/b2/e3/6cb2e3304316076c0fb1a943cac006bf.jpg",
  },
  {
    title: "Bulk Ordering",
    icon: "ShoppingCart",
    description: "Special pricing for wholesale.",
    detailContent: "Buy in bulk at discounted prices.",
    image: "https://i.pinimg.com/736x/b0/8e/b6/b08eb6f3bb297dc2467b4d1305ecdd47.jpg",
  },
  {
    title: "Messaging System",
    icon: "MessageSquare",
    description: "Chat with sellers.",
    detailContent: "Secure messaging between buyers and sellers.",
    image: "https://i.pinimg.com/736x/b4/fd/b7/b4fdb7dc8efe5b92b5b7862b939981ba.jpg",
  },
];

const AlibabaCloneFeatures = () => {
  return (
    <ColChangeFeatureList
      title="Key Features of Our Alibaba Clone"
      description="A comprehensive B2B marketplace solution connecting buyers and sellers globally."
      services={alibabaServices}
    />
  );
};

export default AlibabaCloneFeatures;
