import SelfOpenFeatureList from "@/container/products/WhiteLabel/AllInOneCode/SelfOpenFeatureList";
import WrapperContainer from '@/Layout/WrapperContainer'

const PinduoduoFeatures = [
  {
    title: "Group Buying Discounts",
    icon: "Users",
    description: "Pinduoduo revolutionizes online shopping by enabling users to form buying teams with friends, family, or even strangers. When more people join a group purchase, the price per unit drops significantly, offering greater savings. This social commerce model not only saves money but also makes shopping a shared, engaging experience.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/PinduoGroupBuyingDiscount-jpg.jpg",
  },
  {
    title: "AI-Powered Product Recommendations",
    icon: "Activity",
    description: "Utilizing advanced artificial intelligence and big data analytics, Pinduoduo studies user preferences, browsing behavior, and past purchases to deliver personalized shopping suggestions. This intelligent recommendation engine ensures users discover products that truly match their interests and needs, enhancing overall satisfaction.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/PinduoAiPowered-jpg.jpg",
  },
  {
    title: "Flash Sales & Limited-Time Deals",
    icon: "Clock",
    description: "Pinduoduo hosts daily flash sales and time-sensitive promotional events where customers can access massive discounts on a variety of popular and trending items. These events create urgency and excitement, encouraging quick decision-making and active engagement with the platform.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/PinduoFlashSales-jpg.jpg",
  },
  {
    title: "Interactive Shopping Experience",
    icon: "MessageCircle",
    description: "The platform blends entertainment and shopping by incorporating live-streaming e-commerce. Merchants present their products in real time, interact with viewers, answer questions, and provide demos, making the shopping experience dynamic, transparent, and more trustworthy.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/PinduoInteractiveShopping-jpg.jpg",
  },
  {
    title: "Gamified Discounts & Coupons",
    icon: "Gift",
    description: "Pinduoduo incorporates gamification into its shopping app, offering users engaging games and challenges that reward them with discounts, vouchers, and special deals. These mini-games create a fun, interactive experience and encourage users to return to the app frequently.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/PinduoGamified-jpg.jpg",
  },
  {
    title: "Seamless Logistics & Fast Delivery",
    icon: "Truck",
    description: "With strong partnerships across a wide logistics network, Pinduoduo ensures prompt and reliable deliveries. Its efficient supply chain management allows orders to be processed quickly, reducing waiting times and improving the customer experience, especially in rural and less urbanized areas.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/PinduoLogistic-jpg.jpg",
  },
  {
    title: "Supplier & Manufacturer Direct Sales",
    icon: "Factory",
    description: "By bypassing traditional retail middlemen, Pinduoduo connects consumers directly with manufacturers and suppliers. This model significantly reduces product costs while maintaining quality, enabling consumers to purchase goods at factory-direct prices.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/PinduoSupplier-jpg.jpg",
  },
  {
    title: "Secure Payments & Buyer Protection",
    icon: "ShieldCheck",
    description: "Pinduoduo offers a safe and reliable checkout process, supporting various secure payment options. Its buyer protection policy ensures customer satisfaction by covering issues like delayed deliveries, product discrepancies, or damaged items, with efficient dispute resolution support.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/PinduoSecurePayment-jpg.jpg",
  },
];


const PinduoduoCloneFeatures = () => {
  return (
    <WrapperContainer>
      <SelfOpenFeatureList
      title="Key Features of Our Pinduoduo Clone"
      description="A social commerce platform that enables group buying, interactive shopping, and gamified discounts, providing a unique shopping experience."
      services={PinduoduoFeatures}
    />
    </WrapperContainer>
  );
};

export default PinduoduoCloneFeatures;
