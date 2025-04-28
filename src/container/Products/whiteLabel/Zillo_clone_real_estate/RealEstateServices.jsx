import {
  Home, Key, Building, Users,
  Banknote, ClipboardCheck, Megaphone
} from 'lucide-react';
import WrapperContainer from '@/Layout/WrapperContainer';
import Heading from '@/Layout/Heading';
import Paragraph from '@/Layout/Paragraph';
import Subheading from '@/Layout/Subheading';

const services = [
  {
    title: "Buy a Home",
    icon: Home,
    description: "Explore a wide range of properties that cater to various budgets and preferences, from cozy apartments to luxurious villas. Our expert agents are here to guide you through each step of the process, including property visits, legal formalities, and finalizing the deal. We aim to make your journey of finding the perfect home stress-free and rewarding.",
  },
  {
    title: "Sell a Home",
    icon: Key,
    description: "Leverage our in-depth market analysis and marketing strategies to sell your property at the best possible price. From professional photography and online listings to open houses and negotiations, we handle every aspect with precision. Our team ensures your home reaches the right buyers while making the selling process smooth and efficient.",
  },
  {
    title: "Rent a Home",
    icon: Building,
    description: "Browse through verified rental listings including apartments, houses, and condos in prime locations. Whether you're looking for short-term or long-term stays, we offer personalized rental solutions that fit your lifestyle. Enjoy peace of mind with transparent lease terms and responsive landlord communication.",
  },
  {
    title: "Find an Agent",
    icon: Users,
    description: "Connect with experienced and reliable real estate agents who specialize in your desired location and property type. Our agents offer personalized assistance, market insights, and professional advice to help you make informed decisions whether you're buying, selling, or renting a property.",
  },
  {
    title: "Home Loans",
    icon: Banknote,
    description: "Navigate the complexities of home financing with ease by comparing competitive mortgage options from top lenders. Our platform helps you estimate your eligibility, understand interest rates, and get pre-approved quickly. We simplify paperwork and assist you from application to approval.",
  },
  {
    title: "Manage Rentals",
    icon: ClipboardCheck,
    description: "Efficiently handle your rental properties with our intuitive management tools. Monitor rent payments, schedule maintenance, communicate with tenants, and keep all important documents organized in one place. Whether you manage one unit or multiple properties, we help you stay in control effortlessly.",
  },
  {
    title: "Advertise",
    icon: Megaphone,
    description: "Promote your property to a broad and targeted audience using our advanced advertising tools. From social media campaigns and featured listings to professional visuals and copywriting, we help highlight the best features of your property and attract serious inquiries quickly.",
  },
];

const RealEstateServices = () => {
  return (
    <div className="py-12 px-4 sm:px-10">
      <Heading>Our Real Estate Services</Heading>
      <Paragraph className="text-center text-gray-600 mb-10">
        Comprehensive solutions to help you buy, sell, rent, and manage properties effortlessly.
      </Paragraph>

      <WrapperContainer>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-[-30px]">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 text-center group relative overflow-hidden"
              >
                {/* Hover gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-blue-600  opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-xl" />
                
                {/* ICON */}
                <div className="text-blue-600 text-4xl mb-4 group-hover:text-green-600 transition-all duration-300 relative z-10">
                  <Icon size={36} />
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-semibold mb-2 text-gray-800 relative z-10">{service.title}</h3>

                {/* DESCRIPTION */}
                <p className="text-gray-600 text-sm leading-relaxed relative z-10">{service.description}</p>
              </div>
            );
          })}
        </div>
      </WrapperContainer>
    </div>
  );
};

export default RealEstateServices;
