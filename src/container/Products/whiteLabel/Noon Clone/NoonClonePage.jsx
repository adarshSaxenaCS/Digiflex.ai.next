import Image from "next/image";
import WrapperContainer from "@/Layout/WrapperContainer";
import Paragraph from "@/Layout/Paragraph";
import Subheading from "@/Layout/Subheading";
import Heading from "@/Layout/Heading";

const NoonClonePage = () => {
  return (
    <WrapperContainer>
      {/* Why Build a Noon Clone? */}
      <section className="py-12 bg-amber-100 px-4">
        <Heading className="text-4xl font-bold text-center text-yellow-600 mb-10">
          Why Build a Noon.com Clone?
        </Heading>

        <div className="flex flex-col md:flex-row gap-6 items-stretch">
          {/* Left Box */}
          <div className="w-full md:w-1/3">
            <div
              className="h-full bg-white p-6 rounded-lg border border-gray-200 shadow transition-all duration-300 transform hover:scale-105 hover:border-yellow-400 hover:bg-yellow-50 flex flex-col justify-center bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/NoonMassiveEcommerce-gif.gif')",
              }}
            >
              <Subheading className="text-2xl text-center mb-2 font-bold text-black">
                Massive E-commerce Growth
              </Subheading>
              <Paragraph className="font-bold text-black">
                Noon is dominating the MENA region. Launching a similar platform
                taps into a booming online marketplace.
              </Paragraph>
            </div>
          </div>

          {/* Right Boxes */}
          <div className="w-full md:w-2/3 flex flex-col gap-6">
            {[
              {
                title: "Diverse Revenue Streams",
                content:
                  "Earn via commissions, featured listings, vendor subscriptions, and in-app advertisements.",
              },
              {
                title: "User-Centric Experience",
                content:
                  "Advanced search, cart, and checkout mimic Noon’s customer-friendly interface for higher conversions.",
              },
              {
                title: "Scalable for Growth",
                content:
                  "Built on modern tech to support 1000s of users and vendors with ease.",
              },
            ].map(({ title, content }, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg border border-gray-200 shadow transition-all duration-300 transform hover:scale-105 hover:border-yellow-400 hover:bg-yellow-50"
              >
                <Subheading className="text-2xl font-semibold mb-2">{title}</Subheading>
                <Paragraph>{content}</Paragraph>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real World Use Cases */}
      <section className="py-12 mt-20 bg-gray-50 px-4">
        <h2 className="text-4xl font-bold text-center text-yellow-600 mb-10">
          Real-World Use Cases
        </h2>

        <div className="flex flex-col md:flex-row gap-6 items-stretch">
          {/* Left 3 Boxes */}
          <div className="w-full md:w-2/3 flex flex-col gap-6">
            {[
              {
                heading: "📦 Vendor Onboarding & Product Upload",
                content:
                  "A new vendor can list 100+ products in minutes through bulk upload or a dashboard — saving time and boosting early sales.",
              },
              {
                heading: "⚡ Flash Sales Management",
                content:
                  "Admins launch limited-time deals using a backend panel, creating urgency and increasing order volume.",
              },
              {
                heading: "📈 Real-Time Order Tracking",
                content:
                  "Customers can track their delivery live, reducing anxiety and support calls.",
              },
            ].map(({ heading, content }, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg border border-gray-200 shadow transition-all duration-300 transform hover:scale-105 hover:border-yellow-400 hover:bg-yellow-50"
              >
                <Subheading>{heading}</Subheading>
                <Paragraph>{content}</Paragraph>
              </div>
            ))}
          </div>

          {/* Right Last Box */}
          <div className="w-full md:w-1/3">
            <div
              className="h-full bg-white p-6 rounded-lg border border-gray-200 shadow transition-all duration-300 transform hover:scale-105 hover:border-yellow-400 hover:bg-yellow-50 flex flex-col justify-center bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/NoonTaxInvoice-gif.gif')",
              }}
            >
              <Subheading className="text-black font-bold text-lg">🧾 Invoice & Tax Reports</Subheading>
              <Paragraph className="text-black">
                Vendors and admins can download tax-ready reports, simplifying accounting.
              </Paragraph>
            </div>
          </div>
        </div>
      </section>

    </WrapperContainer>
  );
};

export default NoonClonePage;
