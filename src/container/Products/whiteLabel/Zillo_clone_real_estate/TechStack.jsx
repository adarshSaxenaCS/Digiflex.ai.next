import React from 'react';
import { FaReact, FaVuejs, FaAngular, FaSass, FaNodeJs, FaPython, FaLaravel } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiSvelte, SiRedux, SiBootstrap, SiDjango, SiExpress, SiSpringboot, SiNestjs, SiRubyonrails, SiFlask, SiMongodb, SiPostgresql, SiRedis, SiMysql } from 'react-icons/si';
import Heading from '@/Layout/Heading';
import Subheading from '@/Layout/Subheading';
import Paragraph from '@/Layout/Paragraph';
import WrapperContainer from '@/Layout/WrapperContainer';

const TechStack = () => {
  const categories = {
    frontend: {
      title: 'Frontend Technologies',
      icons: [
        <FaReact key="react" size={40} className="text-[#61DAFB]" />, 
        <SiNextdotjs key="nextjs" size={40} className="text-black" />, 
        <FaVuejs key="vue" size={40} className="text-[#4FC08D]" />, 
        <FaAngular key="angular" size={40} className="text-[#DD0031]" />, 
        <FaSass key="sass" size={40} className="text-[#CC6699]" />, 
        <SiTailwindcss key="tailwind" size={40} className="text-[#38B2AC]" />,
        <SiSvelte key="svelte" size={40} className="text-[#FF3E00]" />,
        <SiRedux key="redux" size={40} className="text-[#764ABC]" />,
        <SiBootstrap key="bootstrap" size={40} className="text-[#7952B3]" />
      ]
    },
    backend: {
      title: 'Backend Technologies',
      icons: [
        <FaNodeJs key="nodejs" size={40} className="text-[#339933]" />, 
        <FaPython key="python" size={40} className="text-[#3776AB]" />, 
        <SiDjango key="django" size={40} className="text-[#092E20]" />,
        <SiExpress key="express" size={40} className="text-gray-800" />,
        <SiSpringboot key="springboot" size={40} className="text-[#6DB33F]" />,
        <FaLaravel key="laravel" size={40} className="text-[#FF2D20]" />,
        <SiNestjs key="nestjs" size={40} className="text-[#E0234E]" />,
        <SiRubyonrails key="rails" size={40} className="text-[#CC0000]" />,
        <SiFlask key="flask" size={40} className="text-gray-600" />
      ]
    },
    database: {
      title: 'Databases & Storage',
      icons: [
        <SiMongodb key="mongodb" size={40} className="text-[#47A248]" />,
        <SiPostgresql key="postgresql" size={40} className="text-[#336791]" />,
        <SiRedis key="redis" size={40} className="text-[#DC382D]" />,
        <SiMysql key="mysql" size={40} className="text-[#4479A1]" />
      ]
    }
  };

  return (
    <WrapperContainer>
      <div className='mb-[50px] relative'>
        {/* Heading */}
        <div className="mb-8 text-center">
          <Heading>
            Technologies & Frameworks We Use
          </Heading>
          <Paragraph className="text-gray-700 text-lg md:text-xl leading-relaxed">
            Our expertise spans a variety of frontend, backend, and database technologies, ensuring robust and scalable solutions.
          </Paragraph>
        </div>

        {/* Connecting Line */}
        <div className="hidden md:block absolute top-full left-0 right-0 mt-[-100] z-0">
          <div className="w-full h-1 bg-blue-300 max-w-[90%] mx-auto rounded-full" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {Object.entries(categories).map(([key, category]) => (
            <div 
              key={key}
              className="bg-gray-50 rounded-lg py-6 px-4 shadow-lg flex flex-col items-center border hover:shadow-xl transition"
            >
              <div className="flex gap-4 flex-wrap justify-center">
                {category.icons.map((icon) => icon)}
              </div>
              <Subheading className="text-xl font-semibold text-[#4A90E2] mt-4 text-center">
                {category.title}
              </Subheading>
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default TechStack;
