import Image from 'next/image';
import WrapperContainer from '@/Layout/WrapperContainer';
import Heading from '@/Layout/Heading';
import Paragraph from '@/Layout/Paragraph';
import Subheading from '@/Layout/Subheading';

const ShowcaseImages = () => {
  const imageSections = [
    {
      title: 'Homepage Design Mockup',
      image: 'https://i.pinimg.com/736x/a1/e7/9c/a1e79ca260f7d742347e553e652b327e.jpg',
      description: 'A clean and modern homepage design showcasing job categories, featured freelancers, and a call-to-action to post jobs.'
    },
    {
      title: 'Freelancer Dashboard UI',
      image: 'https://img.freepik.com/free-vector/freelancer-working-laptop-her-house_1150-35054.jpg?t=st=1744199061~exp=1744202661~hmac=94b324a0b2bf32e98dfcbcb0e2c81d36a2ab836efa9d1e8bba93e5d01da4b84a&w=740',
      description: 'Dashboard interface for freelancers, showing proposals, messages, and project status in a sleek layout.'
    },
    {
      title: 'Client Workflow Diagram',
      image: 'https://img.freepik.com/free-vector/teem-discussing-project-kanban-board_1262-19963.jpg?t=st=1744199218~exp=1744202818~hmac=f873d770eefa6c1530c71a98d255e1a5f882f593d6cd836d2d1109ab6123154d&w=996',
      description: 'Visual representation of how clients interact with the platform from job posting to hiring and payment.'
    },
    {
      title: 'Real-time Chat UI',
      image: 'https://img.freepik.com/free-vector/appointment-booking-with-smartphone_23-2148546549.jpg?t=st=1744199258~exp=1744202858~hmac=ffbee230cb8fc943e5057b1ae9d6c3ea3a0367957664424ba4e611704cea7780&w=996',
      description: 'Preview of real-time messaging system, enabling smooth communication between clients and freelancers.'
    },
    {
      title: 'Tech Stack Highlight',
      image: 'https://img.freepik.com/free-vector/computer-technology-isometric-icon-server-room-digital-device-set-element-design-pc-laptop_39422-1026.jpg?t=st=1744199371~exp=1744202971~hmac=6224971af185fdb95793ee6354ed2981ea662bc0959e23b5fb6ea2a513214bf3&w=996',
      description: 'Tools and technologies used to build the platform — React, Node.js, MongoDB, Tailwind CSS, Stripe and more.'
    },
  ];

  return (
    <WrapperContainer>
      <section className="text-center my-20">
        <Heading>🎨 Visuals & Concepts for Upwork Clone</Heading>
        <Paragraph className="text-gray-600 mt-3 max-w-2xl mx-auto">
          These UI concepts and diagrams illustrate our capability to create a stunning and functional freelancing platform.
        </Paragraph>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {imageSections.map((section, index) => (
            <div key={index} className="bg-white shadow-md hover:shadow-xl rounded-xl overflow-hidden transition duration-300">
              <Image
                src={section.image}
                alt={section.title}
                width={500}
                height={300}
                className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-5">
                <Subheading className="text-lg font-semibold text-gray-800 mb-2">{section.title}</Subheading>
                <Paragraph className="text-sm text-gray-600">{section.description}</Paragraph>
              </div>
            </div>
          ))}
        </div>
      </section>
    </WrapperContainer>
  );
};

export default ShowcaseImages;
