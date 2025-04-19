// pages/rarible-features.js
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import Subheading from "@/Layout/Subheading";

const features = [
  {
    title: "NFT Minting (No Code)",
    description:
      "Allow users to mint NFTs directly from the UI — no coding required.",
  },
  {
    title: "Multi-Wallet Support",
    description:
      "Connect MetaMask, WalletConnect, Coinbase Wallet, and others.",
  },
  {
    title: "Community Governance",
    description:
      "Let NFT holders vote on platform upgrades, royalties, and more.",
  },
  {
    title: "Custom Royalty Distribution",
    description:
      "Enable creators to set custom royalties that auto-pay on resale.",
  },
  {
    title: "Multiple Asset Types",
    description:
      "Support Art, Music, Domains, Photography, Gaming items, etc.",
  },
  {
    title: "Lazy Minting",
    description:
      "Mint NFTs only when purchased to save on gas fees.",
  },
];

export default function RaribleFeaturesPage() {
  return (
    <WrapperContainer>
      <section className="py-12">
        <Heading className="text-4xl font-bold text-center  mb-10">
          Key Features of a Rarible Clone
        </Heading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="relative p-6 rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105 group"
            >
              {/* Background split */}
              <div className="absolute inset-0 z-0 flex">
                <div className="w-1/2 bg-gradient-to-tr from-white-200 to-seashell-300 group-hover:from-purple-400  transition-all duration-500"></div>
                <div className="w-1/2 bg-gradient-to-br from-green-200 to-pink-300 group-hover:from-pink-400  transition-all duration-500"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 text-gray-800">
                <Subheading className="text-xl font-bold mb-2">
                  {feature.title}
                </Subheading>
                <Paragraph>{feature.description}</Paragraph>
              </div>
            </div>
          ))}
        </div>
      </section>
    </WrapperContainer>
  );
}
