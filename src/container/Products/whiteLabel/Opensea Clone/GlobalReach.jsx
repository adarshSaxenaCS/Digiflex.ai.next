import Image from "next/image";
import WrapperContainer from "@/Layout/WrapperContainer";

const GlobalReach = () => {
  return (
    <WrapperContainer>
      <section className="text-center py-16 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
          Expand Your NFT Marketplace to a Global Audience
        </h1>
        <p className="text-gray-600 text-lg mb-10">
          Our OpenSea clone is built for creators and collectors worldwide with multi-language support, local currency integration, and global scalability.
        </p>

        <div className="relative w-full max-w-4xl mx-auto h-[400px] mb-12">
          <Image
            src="https://img.freepik.com/free-vector/global-network-connection-world-map-point-line-composition-concept_41981-1681.jpg"
            alt="Global Network"
            layout="fill"
            objectFit="contain"
            className="rounded-2xl shadow-xl"
          />
        </div>

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
        </div>

        <div className="text-center mt-10">
          <h2 className="text-2xl font-semibold mb-4">Ready to Launch Globally?</h2>
          <button className="bg-primary text-white px-6 py-3 rounded-full shadow hover:bg-primary-dark transition duration-300">
            Get in Touch
          </button>
        </div>
      </section>
    </WrapperContainer>
  );
};

export default GlobalReach;
