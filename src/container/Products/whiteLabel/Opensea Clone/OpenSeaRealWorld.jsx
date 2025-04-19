// components/OpenSeaRealWorld.js

import { Brush, Gamepad2, Music, Landmark, Shirt, PackageSearch } from "lucide-react";
import Subheading from "@/Layout/Subheading";
import Paragraph from "@/Layout/Paragraph";
import WrapperContainer from "@/Layout/WrapperContainer";

const scenarios = [
  {
    icon: <Brush size={36} className="text-blue-700 mb-4" />,
    title: "Artist NFT Marketplace",
    description:
      "Independent artists mint unique digital artworks and sell them as NFTs. Fans can buy limited editions, providing direct revenue to creators.",
  },
  {
    icon: <Gamepad2 size={36} className="text-blue-700 mb-4" />,
    title: "In-Game Asset Trading",
    description:
      "Gamers trade weapons, skins, and characters as NFTs. Players fully own and resell assets across compatible blockchain games.",
  },
  {
    icon: <Music size={36} className="text-blue-700 mb-4" />,
    title: "Music & Album Rights",
    description:
      "Musicians tokenize music rights. Fans buy fractional ownership of songs and earn royalties as passive income.",
  },
  {
    icon: <Landmark size={36} className="text-blue-700 mb-4" />,
    title: "Virtual Real Estate",
    description:
      "Investors purchase, sell, and lease digital land parcels in metaverses like Decentraland or The Sandbox.",
  },
  {
    icon: <Shirt size={36} className="text-blue-700 mb-4" />,
    title: "Limited-Edition Merch Drops",
    description:
      "Brands launch exclusive merchandise as redeemable NFTs, creating hype and offering authenticity verification.",
  },
  {
    icon: <PackageSearch size={36} className="text-blue-700 mb-4" />,
    title: "Collectible Trading Cards",
    description:
      "Fans collect and trade rare digital cards (e.g. sports, anime, comics) with provable rarity and ownership on-chain.",
  },
];

export default function OpenSeaRealWorld() {
  return (
    <WrapperContainer>
        <section className="bg-gray-100 py-16">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
        Real-World Use Cases of NFT Marketplaces
      </h2>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {scenarios.map(({ icon, title, description }, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 transition-transform transform hover:scale-105 hover:border-blue-500 hover:bg-blue-50"
          >
            <div className="flex justify-center">{icon}</div>
            <Subheading className="text-xl font-bold mb-2 text-center">{title}</Subheading>
            <Paragraph className="text-gray-700 text-center">{description}</Paragraph>
          </div>
        ))}
      </div>
    </section>
    </WrapperContainer>
  );
}
