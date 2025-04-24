import Image from 'next/image';
import WrapperContainer from '@/Layout/WrapperContainer';
import Heading from '@/Layout/Heading';
import Paragraph from '@/Layout/Paragraph';
import Subheading from '@/Layout/Subheading';

const ShowcaseImages = () => {
  const imageSections = [
    {
      title: 'Homepage Design Mockup',
      image: 'https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/UpworkHomepage.jpg',
      description: 'A clean and modern homepage design showcasing job categories, featured freelancers, and a call-to-action to post jobs.'
    },
    {
      title: 'Freelancer Dashboard UI',
      image: 'https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/UpworkFreelancer.avif',
      description: 'Dashboard interface for freelancers, showing proposals, messages, and project status in a sleek layout.'
    },
    {
      title: 'Client Workflow Diagram',
      image: 'https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/UpworkClientWorkFlow.avif',
      description: 'Visual representation of how clients interact with the platform from job posting to hiring and payment.'
    },
    {
      title: 'Real-time Chat UI',
      image: 'https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/UpworkRealTimeChat.avif',
      description: 'Preview of real-time messaging system, enabling smooth communication between clients and freelancers.'
    },
    {
      title: 'Tech Stack Highlight',
      image: 'https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/UpworkTechStackHighlights.avif',
      description: 'Tools and technologies used to build the platform — React, Node.js, MongoDB, Tailwind CSS, Stripe and more.'
    },
  ];

  return (
    <WrapperContainer>
      <section className="text-center">
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
