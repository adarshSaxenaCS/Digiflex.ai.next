import FeatureList from "@/container/products/whiteLabel/AllInOneCode/ColChangeFeatureList";
import WrapperContainer from "@/Layout/WrapperContainer";

const NoonServices = [
  {
    title: "User Authentication",
    icon: "UserCheck",
    description: "Signup/Login with secure methods.",
    detailContent: "Signup/Login with Email, OTP, Google, and Apple. Includes secure password reset flow.",
    image: "https://i.pinimg.com/736x/22/09/79/220979c254f575f755997ab812fc535e.jpg",
    link: "https://www.noon.com/authentication",
  },
  {
    title: "Product Listings with Filters",
    icon: "List",
    description: "Easily browse and filter products.",
    detailContent: "Filter by categories, price range, brand, rating, and more for quick navigation.",
    image: "https://i.pinimg.com/736x/a0/72/01/a0720158ee319cd8ab25c8cbe3720c4d.jpg",
    link: "https://www.noon.com/listings",
  },
  {
    title: "Product Details Page",
    icon: "FileText",
    description: "Detailed product view.",
    detailContent: "Includes zoomable images, ratings, availability by location, and seller info.",
    image: "https://th.bing.com/th/id/R.b271591a3a8d08c31167693e0f65043f?rik=XoojtLZO3FyhOA&riu=http%3a%2f%2fcoupon.shopyub.com%2fwp-content%2fuploads%2f2023%2f08%2fnoon.com-Banner.webp&ehk=9ysV9dRfOGMkE6JGNpmCQkg385uy45pf1Wyq%2bpR2zLs%3d&risl=&pid=ImgRaw&r=0",
    link: "https://www.noon.com/product-details",
  },
  {
    title: "Cart & Checkout",
    icon: "ShoppingCart",
    description: "Manage your purchases easily.",
    detailContent: "Add/remove items, apply coupons, and place orders using multiple payment options.",
    image: "https://i0.wp.com/www.menabytes.com/wp-content/uploads/2017/11/Noon-Souq-CX-09.jpeg?resize=800%2C508",
    link: "https://www.noon.com/cart",
  },
  {
    title: "Wishlist",
    icon: "Heart",
    description: "Save items for later.",
    detailContent: "Let users save their favorite items and easily access them anytime.",
    image: "https://colorlib.com/wp-content/uploads/sites/2/ti-woocommerce-wishlist-plugin.png",
    link: "https://www.noon.com/wishlist",
  },
  {
    title: "User Dashboard",
    icon: "LayoutDashboard",
    description: "Manage orders and profile.",
    detailContent: "Users can view order history, manage addresses, and update account information.",
    image: "https://i.pinimg.com/736x/98/2b/fb/982bfb2c3894f29c9bed4d13d7b0488d.jpg",
    link: "https://www.noon.com/dashboard",
  },
  {
    title: "Flash Sales & Deals",
    icon: "Clock",
    description: "Limited-time offers.",
    detailContent: "Timer-based flash sales and deals sections to boost conversions.",
    image: "https://th.bing.com/th/id/OIP.LlbF5kBw1wCWEBX4z2nJXAHaHa?rs=1&pid=ImgDetMain",
    link: "https://www.noon.com/deals",
  },
  {
    title: "Admin Dashboard",
    icon: "Monitor",
    description: "Manage the platform backend.",
    detailContent: "Admins can manage users, view transactions, add products, and handle disputes.",
    image: "https://i.pinimg.com/736x/05/6e/8f/056e8f6d11d6f6fb3bd90dd0aef35541.jpg",
    link: "https://www.noon.com/admin",
  }
];

const NoonCloneFeatures = () => {
  return (
    <WrapperContainer>
      <FeatureList
      title="Key Features of Our Noon Clone"
      description="A robust eCommerce platform replicating Noon’s core capabilities. Designed to provide a seamless online shopping experience with extensive seller and buyer functionality."
      services={NoonServices}
    />
    </WrapperContainer>
  );
};

export default NoonCloneFeatures;
