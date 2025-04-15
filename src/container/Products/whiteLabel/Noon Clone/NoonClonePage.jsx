import Image from "next/image";
import WrapperContainer from "@/Layout/WrapperContainer";
import Paragraph from "@/Layout/Paragraph";
import Subheading from "@/Layout/Subheading";
import Heading from "@/Layout/Heading";

const NoonClonePage = () => {
  const reasons = [
    {
      title: "Massive E-commerce Growth",
      content:
        "Noon is dominating the MENA region. Launching a similar platform taps into a booming online marketplace.",
    },
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
  ];

  const useCases = [
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
    {
      heading: "🧾 Invoice & Tax Reports",
      content:
        "Vendors and admins can download tax-ready reports, simplifying accounting.",
    },
  ];

  return (
    <WrapperContainer>
      {/* Why Build a Noon Clone? */}
      <section className="py-12 bg-amber-100">
  <Heading className="text-4xl font-bold text-center  text-yellow-600 mb-10">
    Why Build a Noon.com Clone?
  </Heading>

  <div className="flex flex-col md:flex-row gap-6 items-stretch">
    {/* Left: Box 1 (Same Height as Right) */}
    <div className="flex-1">
  <div
    className="h-full w-[300px] ml-[50px] bg-white p-6 rounded-lg border border-gray-200 shadow transition-all duration-300 transform hover:scale-105 hover:border-yellow-400 hover:bg-yellow-50 flex flex-col justify-center bg-cover bg-center"
    style={{
      backgroundImage: "url('https://i.pinimg.com/736x/c9/0f/4c/c90f4ca1d3cde4f1d29652e4279eca4a.jpg')",
    }}
  >
    <Subheading className="text-2xl text-center mb-2 font-bold text-white">Massive E-commerce Growth</Subheading>
    <Paragraph className="font-bold">
      Noon is dominating the MENA region. Launching a similar platform taps into a booming online marketplace.
    </Paragraph>
  </div>
</div>


    {/* Right: Boxes 2, 3, 4 - Vertical Stack */}
    <div className="flex-1 flex flex-col gap-6">
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
          className="bg-white mr-[50px] w-[800px] p-6 rounded-lg border border-gray-200 shadow transition-all duration-300 transform hover:scale-105 hover:border-yellow-400 hover:bg-yellow-50"
        >
          <Subheading className="text-2xl font-semibold mb-2">{title}</Subheading>
          <Paragraph>{content}</Paragraph>
        </div>
      ))}
    </div>
  </div>
</section>




      {/* Real World Use Cases */}
      <section className="py-12 mt-[100px] bg-gray-50">
  <h2 className="text-4xl font-bold text-center text-yellow-600 mb-10">
    Real-World Use Cases
  </h2>

  {/* Layout Split into Left + Right */}
  <div className="flex flex-col md:flex-row gap-6 items-stretch">
    {/* Left: Last Box - Vertical Full Height */}
    

    {/* Right: First 3 Boxes - Vertical Stack */}
    <div className="flex-1 flex flex-col gap-6">
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
          className="h-full w-[800px] ml-[50px] bg-white p-6 rounded-lg border border-gray-200 shadow transition-all duration-300 transform hover:scale-105 hover:border-yellow-400 hover:bg-yellow-50 flex flex-col justify-center"
        >
          <Subheading>{heading}</Subheading>
          <Paragraph>{content}</Paragraph>
        </div>
      ))}
    </div>

    <div className="flex-1">
      <div className="h-full mr-[50px] w-[300px] bg-white p-6 rounded-lg border border-gray-200 shadow transition-all duration-300 transform hover:scale-105 hover:border-yellow-400 hover:bg-yellow-50 flex flex-col justify-center"
      style={{
        backgroundImage: "url('https://i.pinimg.com/736x/1c/27/97/1c27978b1672fa20c87c2ba401b1e8ae.jpg')",
      }}
      >
        <Subheading>🧾 Invoice & Tax Reports</Subheading>
        <Paragraph>
          Vendors and admins can download tax-ready reports, simplifying accounting.
        </Paragraph>
      </div>
    </div>
  </div>
</section>


      {/* Concept Designs */}
      <section className="py-12">
        <h2 className="text-4xl font-bold text-center text-yellow-600 mb-8">
          Concept Designs
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            {
              src: "",
              alt: "Noon Clone Home Page Design",
              label: "Home Page Concept",
            },
            {
              src: "",
              alt: "Product Page Design",
              label: "Product Detail Page",
            },
          ].map(({ src, alt, label }, index) => (
            <div
              key={index}
              className="w-full md:w-1/3 transform transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={src}
                alt={alt}
                width={500}
                height={300}
                className="rounded-lg shadow-md"
              />
              <p className="mt-2 text-center text-gray-700">{label}</p>
            </div>
          ))}
        </div>
      </section>
    </WrapperContainer>
  );
};

export default NoonClonePage;
