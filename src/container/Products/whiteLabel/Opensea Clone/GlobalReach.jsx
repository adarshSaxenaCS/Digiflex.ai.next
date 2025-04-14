import Image from "next/image";
import WrapperContainer from "@/Layout/WrapperContainer";

const GlobalReach = () => {
  return (
    <WrapperContainer>
      <section className="text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
          Expand Your NFT Marketplace to a Global Audience
        </h1>
        <p className="text-gray-600 text-lg mb-10">
          Our OpenSea clone is built for creators and collectors worldwide with multi-language support, local currency integration, and global scalability.
        </p>

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
          <h2 className="text-3xl font-semibold text-primary mb-6">Why Go Global?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Reaching a global market is no longer optional—it's essential. Tapping into global audiences gives your NFT marketplace unlimited growth potential. 
            Our platform is designed to meet the unique needs of users from various countries, languages, and payment systems.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-primary mb-2">Multilingual UI</h3>
            <p className="text-gray-600">Support for multiple languages to reach diverse users and regions.</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-primary mb-2">Multi-Currency Payments</h3>
            <p className="text-gray-600">Accept payments in ETH, USDT, MATIC, BNB, and more for international reach.</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-primary mb-2">Global Creator Network</h3>
            <p className="text-gray-600">Enable artists from any country to mint and sell their NFTs easily.</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-primary mb-2">Real-Time Analytics</h3>
            <p className="text-gray-600">Monitor global user behavior and trends with our integrated analytics dashboard.</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-primary mb-2">Localized Experience</h3>
            <p className="text-gray-600">Auto-detect location and provide region-specific content and offers.</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-primary mb-2">Fast CDN Access</h3>
            <p className="text-gray-600">Deliver lightning-fast content through a distributed global content delivery network.</p>
          </div>
        </div>

      </section>
    </WrapperContainer>
  );
};

export default GlobalReach;
