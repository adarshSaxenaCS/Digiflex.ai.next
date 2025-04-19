'use client';
import Image from 'next/image';
import WrapperContainer from "@/Layout/WrapperContainer";

const projects = [
  {
    id: 1,
    category: "GYM",
    title: "Virtual MD - A HIPAA Compliant Telemedicine App",
    description:
      "A cutting-edge fitness app designed to help users track workouts, monitor progress, and connect with personal trainers for a healthier lifestyle.",
    image: "https://media.istockphoto.com/id/1391410249/es/foto/deportes-y-actividades-de-gimnasio.jpg?b=1&s=612x612&w=0&k=20&c=vwoVPPQv7M9gfhgSovfwKIF1X9zohwsjr4ftxax_yH4=", 
    logo: "/virtualmd-logo.png",
  },
  {
    id: 2,
    category: "Kanha",
    title: "Soultriibe - An Online Dating App Platform",
    description: "Experience the rich wildlife and scenic beauty of Kanha National Park with guided safaris and eco-stays.",
    image: "https://img.freepik.com/premium-photo/rear-view-man-standing-field_1048944-24397735.jpg?uid=R185211144&ga=GA1.1.710522061.1738221959&semt=ais_hybrid",
    logo: "/soultriibe-logo.png",
  },
  {
    id: 3,
    category: "Tractor 24",
    title: "Snapshopy - An On-Demand Grocery Delivery App",
    description: "Discover the best high-performance tractors for modern farming. Tractor 24 offers durable, efficient, and affordable tractors designed to maximize productivity. Shop now for the latest models and unbeatable prices!",
    image: "https://media.istockphoto.com/id/491151340/photo/tractor-on-the-field.jpg?b=1&s=612x612&w=0&k=20&c=wwf8mN3xR5mNJLo4-bLL-r030XjiB1XeXlzGWZshgIg=",
    logo: "/snapshopy-logo.png",
  },
];

export default function Portfolio_project() {
  return (
    <WrapperContainer>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative bg-[#EFF6FF] border shadow-md rounded-xl pt-16 pb-6 px-4 sm:px-6 lg:ml-8 transition duration-300 hover:shadow-2xl"
          >
            {/* Floating Image */}
            <div className="absolute -top-10 left-4 right-4 mx-auto w-[90%] h-40 rounded-xl overflow-hidden shadow-md">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
              />
            </div>

            {/* Category */}
            <div className="text-xs mt-20 uppercase font-bold text-center text-white bg-blue-600 py-1 rounded-full w-fit mx-auto mb-4 px-4">
              {project.category}
            </div>

            {/* Description */}
            <p className="text-gray-700 text-sm mb-4 h-32">{project.description}</p>

            {/* Footer */}
            <div className="flex items-center justify-between mt-auto">
              <Image src={project.logo} alt="Logo" width={30} height={30} className="h-6" />
              <button className="bg-black text-white px-4 py-2 rounded text-sm hover:bg-gray-800">
                View Case Study
              </button>
            </div>
          </div>
        ))}
      </div>
    </WrapperContainer>
  );
}
