import React from 'react';
import { FaReact, FaVuejs, FaAngular, FaSass, FaNodeJs, FaPython, FaLaravel, FaWordpress, FaShopify } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiSvelte, SiRedux, SiBootstrap, SiDjango, SiExpress, SiSpringboot, SiNestjs, SiRubyonrails, SiFlask, SiMongodb, SiPostgresql, SiRedis, SiMysql } from 'react-icons/si';
import Heading from '@/Layout/Heading';
import Subheading from '@/Layout/Subheading';
import Paragraph from '@/Layout/Paragraph';
import WrapperContainer from '@/Layout/WrapperContainer';

const RaribleTechStack = () => {
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
    },
    tools: {
      title: 'Other Tools & Platforms',
      icons: [
        <FaWordpress key="wordpress" size={40} className="text-[#21759B]" />,
        <FaShopify key="shopify" size={40} className="text-[#95BF47]" />
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
        <div className="hidden md:block absolute top-full left-0 right-0 mt-[-290] z-0">
          <div className="w-full h-1 bg-blue-300 max-w-[77.5%] mx-auto rounded-full" />
        </div>
        <div className="hidden md:block absolute top-full left-0 right-0 mt-[47] z-0">
          <div className="w-full h-1 bg-blue-300 max-w-[77.5%] mx-auto rounded-full" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
          {Object.entries(categories).map(([key, category]) => (
            <div key={key} className="relative flex flex-col items-center">
              <Subheading className="text-xl font-semibold text-[#4A90E2] mb-4 text-center">
                {category.title}
              </Subheading>
              <div className="w-60 h-60 transform rotate-45 bg-gray-50 shadow-lg border mt-[40px] flex flex-wrap justify-center items-center p-3 overflow-hidden hover:shadow-xl transition">
  {category.icons.map((icon, i) => (
    <div key={i} className="transform -rotate-45 m-1">
      {React.cloneElement(icon, { size: 45 })}
    </div>
  ))}
</div>

            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default RaribleTechStack;
