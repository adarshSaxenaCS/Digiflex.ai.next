import {
  Home, Key, Building, Users,
  Banknote, ClipboardCheck, Megaphone,
  ArrowRight
} from 'lucide-react';
import WrapperContainer from '@/Layout/WrapperContainer';
import Heading from '@/Layout/Heading';
import Paragraph from '@/Layout/Paragraph';
import Subheading from '@/Layout/Subheading';
import Image from 'next/image';

const services = [
  {
    title: "Buy a Home",
    icon: Home,
    description: "Explore a variety of properties tailored to meet your needs and budget. Our expert agents help you every step of the way to find your perfect home.",
    image: "https://img.freepik.com/free-photo/couple-holding-small-house-medium-shot_23-2148889747.jpg?t=st=1744185683~exp=1744189283~hmac=c2e50dbd8aa41050e6da84dea7e067650f141aa71fc0288dfb563d32ea6c322a&w=996"
  },
  {
    title: "Sell a Home",
    icon: Key,
    description: "Get the best price for your home with our tailored selling strategies. We ensure maximum exposure and a smooth selling experience.",
    image: "https://img.freepik.com/free-photo/close-up-woman-s-hand-giving-house-key-man-wooden-table_23-2148204009.jpg?t=st=1744185309~exp=1744188909~hmac=9cc6fed7b9cb4b6b7b2d814c01b1c01abbcf933a5d2cf374e412e9f236688c68&w=996"
  },
  {
    title: "Rent a Home",
    icon: Building,
    description: "Find rental homes that offer comfort, convenience, and affordability. Browse listings and connect with landlords easily.",
    image: "https://img.freepik.com/free-vector/family-moving-countryside-area-realtor-shows-townhouse-house-rent-booking-hose-online-best-rental-property-real-estate-services-concept-bright-vibrant-violet-isolated-illustration_335657-1129.jpg?t=st=1744185765~exp=1744189365~hmac=02cb8a534e797abe77e4da48c212420e929a62bb41e776d4dd9bad2da5fa996d&w=996"
  },
  {
    title: "Find an Agent",
    icon: Users,
    description: "Connect with top-rated real estate agents who understand your goals. Personalized service to ensure your satisfaction.",
    image: "https://img.freepik.com/free-photo/medium-shot-woman-working-as-real-estate-agent_23-2151064946.jpg?t=st=1744185814~exp=1744189414~hmac=9c0611b1cb912ac65e487f93c94ac6f660f873d3576295e272bc1e0c84df0f17&w=826"
  },
  {
    title: "Home Loans",
    icon: Banknote,
    description: "Compare loan offers and secure competitive mortgage rates through our trusted partners. We simplify the process for you.",
    image: "https://img.freepik.com/free-vector/mortgage-concept-illustration_114360-21883.jpg?t=st=1744185856~exp=1744189456~hmac=a79e30b3920c030f711d1d1955597bff8eed74cccd3f8a0236b74cc9bba4cb4c&w=996"
  },
  {
    title: "Manage Rentals",
    icon: ClipboardCheck,
    description: "Streamline rental management with our tools. Track payments, maintain communication, and keep everything organized effortlessly.",
    image: "https://img.freepik.com/free-vector/flat-design-real-estate-searching-with-gadgets_23-2148653817.jpg?t=st=1744185903~exp=1744189503~hmac=b74a692d4d2d62bcbc6a5012f2dbf9a640ef5f1d4ce40e9bd61443875617298f&w=996"
  },
  {
    title: "Advertise",
    icon: Megaphone,
    description: "Reach more buyers and renters through targeted advertising options. Showcase your property to the right audience.",
    image: "https://img.freepik.com/free-vector/mobile-marketing-isometric-style_23-2148896785.jpg?t=st=1744185736~exp=1744189336~hmac=c1fa835146e1834a7a1f353503d2171c11dcee889ae2e42709addde58426fd6e&w=740"
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
            
              {/* ARROW ICON */}
              <div className="hidden md:flex items-center justify-center shrink-0">
                <ArrowRight className="text-blue-600" size={32} />
              </div>
            
              {/* IMAGE */}
              <div className="flex-shrink-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={200}
                  height={200}
                  className="rounded-xl object-cover shadow-md"
                />
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
