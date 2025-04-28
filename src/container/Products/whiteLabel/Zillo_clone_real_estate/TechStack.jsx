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
        <FaReact key="react" size={35} className="text-[#61DAFB]" />, 
        <SiNextdotjs key="nextjs" size={35} className="text-black" />, 
        <FaVuejs key="vue" size={35} className="text-[#4FC08D]" />, 
        <FaAngular key="angular" size={35} className="text-[#DD0031]" />, 
        <FaSass key="sass" size={35} className="text-[#CC6699]" />, 
        <SiTailwindcss key="tailwind" size={35} className="text-[#38B2AC]" />,
        <SiSvelte key="svelte" size={35} className="text-[#FF3E00]" />,
        <SiRedux key="redux" size={35} className="text-[#764ABC]" />,
        <SiBootstrap key="bootstrap" size={35} className="text-[#7952B3]" />
      ]
    },
    backend: {
      title: 'Backend Technologies',
      icons: [
        <FaNodeJs key="nodejs" size={35} className="text-[#339933]" />, 
        <FaPython key="python" size={35} className="text-[#3776AB]" />, 
        <SiDjango key="django" size={35} className="text-[#092E20]" />,
        <SiExpress key="express" size={35} className="text-gray-800" />,
        <SiSpringboot key="springboot" size={35} className="text-[#6DB33F]" />,
        <FaLaravel key="laravel" size={35} className="text-[#FF2D20]" />,
        <SiNestjs key="nestjs" size={35} className="text-[#E0234E]" />,
        <SiRubyonrails key="rails" size={35} className="text-[#CC0000]" />,
        <SiFlask key="flask" size={35} className="text-gray-600" />
      ]
    },
    database: {
      title: 'Databases & Storage',
      icons: [
        <SiMongodb key="mongodb" size={35} className="text-[#47A248]" />,
        <SiPostgresql key="postgresql" size={35} className="text-[#336791]" />,
        <SiRedis key="redis" size={35} className="text-[#DC382D]" />,
        <SiMysql key="mysql" size={35} className="text-[#4479A1]" />
      ]
    }
  };

  return (
    <WrapperContainer>
      <div className="mb-[50px] relative">
        {/* Heading */}
        <div className="mb-8 text-center">
          <Heading>
            Technologies & Frameworks We Use
          </Heading>
          <Paragraph className="text-gray-700 text-lg md:text-xl leading-relaxed">
            Our expertise spans a variety of frontend, backend, and database technologies, ensuring robust and scalable solutions.
          </Paragraph>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 relative z-10">
          {Object.entries(categories).map(([key, category]) => (
            <div 
              key={key}
              className="bg-gray-50 rounded-full w-72 h-72 flex flex-col items-center justify-center shadow-lg border hover:shadow-2xl transition transform hover:scale-105 mx-auto"
            >
              <div className="flex gap-4 flex-wrap justify-center mb-4">
                {category.icons.map((icon) => icon)}
              </div>
              <Subheading className="text-center text-lg font-semibold text-[#4A90E2] mt-2">
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
