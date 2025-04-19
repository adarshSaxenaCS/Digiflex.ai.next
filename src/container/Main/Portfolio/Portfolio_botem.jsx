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
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative w-full h-[500px] rounded-lg overflow-hidden group"
            style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="absolute top-4 right-4">
              <Image src={project.logo} alt="Logo" width={50} height={50} className="h-10" />
            </div>
            <div className="absolute bg-white w-28 rounded-lg text-center top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[blue] text-xl font-bold  group-hover:opacity-100 transition-opacity duration-300">
              {project.category}
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 text-center text-white">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-base mt-2">{project.description}</p>
              <button className="mt-4 bg-white text-black px-5 py-2 rounded text-base hover:bg-gray-200">
                View Case Study
              </button>
            </div>
          </div>
        ))}
      </div>
    </WrapperContainer>
  );
}