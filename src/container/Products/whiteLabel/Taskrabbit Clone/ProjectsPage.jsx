import WrapperContainer from '@/Layout/WrapperContainer';
import Image from 'next/image';
import Heading from '@/Layout/Heading';

const services = [
  {
    title: "Furniture Assembly",
    imageSrc: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/TaskRabbitFurnitureAssembly-gif.gif",
    altText: "FurnitureAssembly-gif"
  },
  {
    title: "Mount Art or Shelves",
    imageSrc: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/TaskRabbitMountArt-gif.gif",
    altText: "MountArt-gif"
  },
  {
    title: "Mount a TV",
    imageSrc: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/TaskRabbitMountTv.gif",
    altText: "MountTv-gif"
  },
  {
    title: "Help Moving",
    imageSrc: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/TaskRabbitHelpMoving-gif.gif",
    altText: "HelpMoving-gif"
  },
  {
    title: "Home & Apartment Cleaning",
    imageSrc: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/TaskRabbitCleaning-gif.gif",
    altText: "Cleaning-gif"
  },
  {
    title: "Minor Plumbing Repairs",
    imageSrc: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/TaskRabbitPlumbing-gif.gif",
    altText: "Plumbing-gif"
  },
  {
    title: "Electrical Help",
    imageSrc: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/TaskRabbitElictricalHelp-gif.gif",
    altText: "ElictricalHelp-gif"
  },
  {
    title: "Heavy Lifting",
    imageSrc: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/TaskRabbitHeavyLifting-gif.gif",
    altText: "HeavyLifting-gif"
  }
];

export default function ProjectsPage() {
  return (
    <WrapperContainer>
        <Heading>Popular Projects</Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((service, idx) => (
        <div key={idx} className="flex flex-col items-center border rounded-lg shadow-lg overflow-hidden">
          <Image
            src={service.imageSrc}
            alt={service.altText}
            width={100}
            height={100}
            className='w-[250px] h-[200px]'
          />
          <h3 className="text-lg font-semibold mt-4 mb-4">{service.title}</h3>
        </div>
      ))}
    </div>
    </WrapperContainer>
  );
}
