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
    <WrapperContainer>
      <section>
        <div className="text-center mb-12">
          <Heading>Our Real Estate Services</Heading>
          <Paragraph className="text-center text-gray-600">
            Comprehensive solutions to help you buy, sell, rent, and manage properties effortlessly.
          </Paragraph>
        </div>

        <div className="flex flex-col gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center md:items-start bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 ease-in-out group p-6 gap-6"
              >
                {/* ICON */}
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center shadow-md group-hover:bg-blue-600 transition shrink-0">
                  <Icon size={28} className="text-blue-600 group-hover:text-white transition" />
                </div>

                {/* TEXT */}
                <div className="flex-1 text-left">
                  <Subheading className="mb-2 text-gray-800 text-xl group-hover:text-blue-600 transition">
                    {service.title}
                  </Subheading>
                  <Paragraph className="text-gray-600 text-[16px] leading-relaxed group-hover:text-gray-800 transition">
                    {service.description}
                  </Paragraph>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </WrapperContainer>
  );
};

export default RealEstateServices;
