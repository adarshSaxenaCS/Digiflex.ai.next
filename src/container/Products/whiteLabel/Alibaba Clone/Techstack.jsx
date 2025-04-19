import Paragraph from '@/Layout/Paragraph';
import WrapperContainer from '@/Layout/WrapperContainer';
import Heading from '@/Layout/Heading';
import React from 'react';
import {
  FaReact, FaVuejs, FaAngular, FaSass, FaNodeJs, FaPython, FaLaravel,
  FaWordpress, FaShopify, FaAws, FaGitAlt, FaGithub
} from 'react-icons/fa';
import {
  SiNextdotjs, SiTailwindcss, SiSvelte, SiRedux, SiBootstrap, SiDjango,
  SiExpress, SiSpringboot, SiNestjs, SiRubyonrails, SiFlask,
  SiMongodb, SiPostgresql, SiRedis, SiMysql, SiVercel, SiNetlify, SiFirebase
} from 'react-icons/si';
import Heading from '@/Layout/Heading';

const TechStack = () => {
  const categories = {
    "Frontend Technologies": [
      "React.js", "Next.js", "Vue.js", "Angular", "Sass", "Tailwind CSS", "Svelte", "Redux", "Bootstrap"
    ],
    "Backend Technologies": [
      "Node.js", "Python", "Django", "Express.js", "Spring Boot", "Laravel", "NestJS", "Ruby on Rails", "Flask"
    ],
    "Databases": [
      "MongoDB", "PostgreSQL", "Redis", "MySQL"
    ],
    "Hosting & Deployment": [
      "Vercel", "Netlify", "Firebase", "AWS"
    ],
    "Other Tech Tools": [
      "Git", "GitHub", "WordPress", "Shopify"
    ]
  };

  const allTechIcons = [
    <FaReact key="react" size={40} className="text-[#61DAFB]" />,
    <SiNextdotjs key="next" size={40} className="text-black" />,
    <FaVuejs key="vue" size={40} className="text-[#42b883]" />,
    <FaAngular key="angular" size={40} className="text-[#DD0031]" />,
    <FaSass key="sass" size={40} className="text-[#CD6799]" />,
    <SiTailwindcss key="tailwind" size={40} className="text-[#38B2AC]" />,
    <SiSvelte key="svelte" size={40} className="text-[#FF3E00]" />,
    <SiRedux key="redux" size={40} className="text-[#764ABC]" />,
    <SiBootstrap key="bootstrap" size={40} className="text-[#7952B3]" />,
    <FaNodeJs key="node" size={40} className="text-[#3C873A]" />,
    <FaPython key="python" size={40} className="text-[#3776AB]" />,
    <SiDjango key="django" size={40} className="text-[#092E20]" />,
    <SiExpress key="express" size={40} className="text-gray-800" />,
    <SiSpringboot key="springboot" size={40} className="text-[#6DB33F]" />,
    <FaLaravel key="laravel" size={40} className="text-[#FF2D20]" />,
    <SiNestjs key="nestjs" size={40} className="text-[#E0234E]" />,
    <SiRubyonrails key="rails" size={40} className="text-[#CC0000]" />,
    <SiFlask key="flask" size={40} className="text-gray-700" />,
    <SiMongodb key="mongo" size={40} className="text-[#47A248]" />,
    <SiPostgresql key="postgresql" size={40} className="text-[#336791]" />,
    <SiRedis key="redis" size={40} className="text-[#DC382D]" />,
    <SiMysql key="mysql" size={40} className="text-[#00758F]" />,
    <SiVercel key="vercel" size={40} className="text-black" />,
    <SiNetlify key="netlify" size={40} className="text-[#00C7B7]" />,
    <SiFirebase key="firebase" size={40} className="text-[#FFCA28]" />,
    <FaAws key="aws" size={40} className="text-[#FF9900]" />,
    <FaGitAlt key="git" size={40} className="text-[#F05032]" />,
    <FaGithub key="github" size={40} className="text-black" />,
    <FaWordpress key="wordpress" size={40} className="text-[#21759B]" />,
    <FaShopify key="shopify" size={40} className="text-[#96BF48]" />
  ];

  return (
    <WrapperContainer>
      <div className="bg-white mr-[40px]">
        <Heading className="text-3xl font-bold text-center mb-6 text-blue-700">🚀 Tech Stack Overview</Heading>
        <Paragraph className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
          Explore the technologies and tools we use for frontend, backend, databases, hosting, and beyond.
        </Paragraph>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left: Icons in 2 per row */}
          <div className="grid grid-cols-3 gap-4 justify-items-center">
            {allTechIcons.map((icon, index) => (
              <div
                key={index}
                className="transition transform hover:scale-110 hover:shadow-md duration-300"
              >
                {icon}
              </div>
            ))}
          </div>


          {/* Right: Text Categories */}
          <div className="flex flex-col gap-12 ml-[40px]">
            {Object.entries(categories).map(([category, techs]) => (
              <div key={category}>
                <Heading className="text-xl font-semibold text-blue-600 mb-2">{category}</Heading>
                <div className="flex flex-wrap gap-3">
                  {techs.map((tech, idx) => (
                    <span
                    key={idx}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 hover:bg-blue-600 hover:text-white"
                  >
                    {tech}
                  </span>
                  
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
};

export default TechStack;
