import Image from "next/image";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import Subheading from "@/Layout/Subheading";

const GlobalReach = () => {
  return (
    <WrapperContainer>
      <section className="text-center py-16 px-4">
        <Heading className="text-4xl md:text-5xl font-bold mb-4 text-primary">
          Expand Your NFT Marketplace to a Global Audience
        </Heading>
        <Paragraph className="text-gray-600 text-lg mb-10">
          Our OpenSea clone is built for creators and collectors worldwide with multi-language support, local currency integration, and global scalability.
        </Paragraph>

        <div className="relative h-[400px] mb-12">
          <Image
            src="https://img.freepik.com/free-vector/global-network-connection-world-map-point-line-composition-concept_41981-1681.jpg"
            alt="Global Network"
            layout="fill"
            objectFit="contain"
            className="rounded-2xl shadow-xl"
          />
        </div>

        {/* Why Go Global Section */}
        <div className="mb-16">
          <Heading className="text-3xl font-semibold text-primary mb-6">Why Go Global?</Heading>
          <Paragraph className="text-gray-600 max-w-3xl mx-auto">
            Reaching a global market is no longer optional—it's essential. Tapping into global audiences gives your NFT marketplace unlimited growth potential. 
            Our platform is designed to meet the unique needs of users from various countries, languages, and payment systems.
          </Paragraph>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition duration-300">
            <Subheading className="text-xl font-semibold text-primary mb-2">Multilingual UI</Subheading>
            <Paragraph className="text-gray-600">Support for multiple languages to reach diverse users and regions.</Paragraph>
          </div>
          <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition duration-300">
            <Subheading className="text-xl font-semibold text-primary mb-2">Multi-Currency Payments</Subheading>
            <Paragraph className="text-gray-600">Accept payments in ETH, USDT, MATIC, BNB, and more for international reach.</Paragraph>
          </div>
          <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition duration-300">
            <Subheading className="text-xl font-semibold text-primary mb-2">Global Creator Network</Subheading>
            <Paragraph className="text-gray-600">Enable artists from any country to mint and sell their NFTs easily.</Paragraph>
          </div>
          <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition duration-300">
            <Subheading className="text-xl font-semibold text-primary mb-2">Real-Time Analytics</Subheading>
            <Paragraph className="text-gray-600">Monitor global user behavior and trends with our integrated analytics dashboard.</Paragraph>
          </div>
          <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition duration-300">
            <Subheading className="text-xl font-semibold text-primary mb-2">Localized Experience</Subheading>
            <Paragraph className="text-gray-600">Auto-detect location and provide region-specific content and offers.</Paragraph>
          </div>
          <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition duration-300">
            <Subheading className="text-xl font-semibold text-primary mb-2">Fast CDN Access</Subheading>
            <Paragraph className="text-gray-600">Deliver lightning-fast content through a distributed global content delivery network.</Paragraph>
          </div>
        </div>

      </section>
    </WrapperContainer>
  );
};

export default GlobalReach;
