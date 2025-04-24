import WrapperContainer from "@/Layout/WrapperContainer";
import { FaReact, FaVuejs, FaAngular, FaSass, FaNodeJs, FaPython, FaLaravel } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiSvelte, SiRedux,  SiRubyonrails, SiBootstrap, SiDjango, SiExpress, SiSpringboot, SiNestjs, SiFlask, SiMongodb, SiPostgresql, SiRedis, SiMysql, SiKubernetes, SiDocker } from 'react-icons/si';

const TechStackWeUse = () => {
  return (
    <WrapperContainer>
      <div className="bg-gray-100 py-16">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
          Tech Stack We Use
        </h2>
        
        {/* Frontend Section */}
        <div className="tech-box-container">
          <section className="tech-box relative before:content-[''] before:block before:w-full before:h-9 before:bg-blue-500 before:rounded-t-full">
            <h3 className="text-2xl font-semibold text-center text-blue-600 mb-6 mt-3">
              Frontend
            </h3>
            <div className="flex justify-center space-x-8 flex-wrap">
              <div className="flex flex-col items-center">
                <FaReact size={48} className="mb-4 text-blue-500" />
                <p className="text-lg">React</p>
              </div>
              <div className="flex flex-col items-center">
                <SiRedux size={48} className="mb-4 text-blue-500" />
                <p className="text-lg">Redux</p>
              </div>
              <div className="flex flex-col items-center">
                <FaVuejs size={48} className="mb-4 text-green-500" />
                <p className="text-lg">Vue.js</p>
              </div>
              <div className="flex flex-col items-center">
                <FaAngular size={48} className="mb-4 text-red-600" />
                <p className="text-lg">Angular</p>
              </div>
              <div className="flex flex-col items-center">
                <SiNextdotjs size={48} className="mb-4 text-black" />
                <p className="text-lg">Next.js</p>
              </div>
              <div className="flex flex-col items-center">
                <SiTailwindcss size={48} className="mb-4 text-blue-400" />
                <p className="text-lg">Tailwind CSS</p>
              </div>
              <div className="flex flex-col items-center">
                <SiSvelte size={48} className="mb-4 text-orange-500" />
                <p className="text-lg">Svelte</p>
              </div>
              <div className="flex flex-col items-center">
                <SiBootstrap size={48} className="mb-4 text-purple-600" />
                <p className="text-lg">Bootstrap</p>
              </div>
            </div>
          </section>

          {/* Backend Section */}
          <section className="tech-box relative mt-12 before:content-[''] before:block before:w-full before:h-9 before:bg-green-500 before:rounded-t-full">
            <h3 className="text-2xl font-semibold text-center text-blue-600 mb-6 mt-3">
              Backend
            </h3>
            <div className="flex justify-center space-x-8 flex-wrap">
              <div className="flex flex-col items-center">
                <FaNodeJs size={48} className="mb-4 text-green-500" />
                <p className="text-lg">Node.js</p>
              </div>
              <div className="flex flex-col items-center">
                <SiExpress size={48} className="mb-4 text-black" />
                <p className="text-lg">Express</p>
              </div>
              <div className="flex flex-col items-center">
                <SiDjango size={48} className="mb-4 text-green-600" />
                <p className="text-lg">Django</p>
              </div>
              <div className="flex flex-col items-center">
                <SiFlask size={48} className="mb-4 text-black" />
                <p className="text-lg">Flask</p>
              </div>
              <div className="flex flex-col items-center">
                <SiNestjs size={48} className="mb-4 text-black" />
                <p className="text-lg">NestJS</p>
              </div>
              <div className="flex flex-col items-center">
                <SiSpringboot size={48} className="mb-4 text-blue-600" />
                <p className="text-lg">Spring Boot</p>
              </div>
              <div className="flex flex-col items-center">
                <SiKubernetes size={48} className="mb-4 text-blue-500" />
                <p className="text-lg">Kubernetes</p>
              </div>
              <div className="flex flex-col items-center">
                <SiDocker size={48} className="mb-4 text-blue-700" />
                <p className="text-lg">Docker</p>
              </div>
            </div>
          </section>

          {/* Database Section */}
          <section className="tech-box relative mt-12 before:content-[''] before:block before:w-full before:h-9 before:bg-yellow-500 before:rounded-t-full">
            <h3 className="text-2xl font-semibold text-center text-blue-600 mb-6 mt-3">
              Database
            </h3>
            <div className="flex justify-center space-x-8 flex-wrap">
              <div className="flex flex-col items-center">
                <SiMongodb size={48} className="mb-4 text-green-600" />
                <p className="text-lg">MongoDB</p>
              </div>
              <div className="flex flex-col items-center">
                <SiPostgresql size={48} className="mb-4 text-blue-700" />
                <p className="text-lg">PostgreSQL</p>
              </div>
              <div className="flex flex-col items-center">
                <SiMysql size={48} className="mb-4 text-yellow-600" />
                <p className="text-lg">MySQL</p>
              </div>
              <div className="flex flex-col items-center">
                <SiRedis size={48} className="mb-4 text-red-500" />
                <p className="text-lg">Redis</p>
              </div>
            </div>
          </section>

          {/* UI/UX Section */}
          <section className="tech-box relative mt-12 before:content-[''] before:block before:w-full before:h-9 before:bg-pink-500 before:rounded-t-full">
            <h3 className="text-2xl font-semibold text-center text-blue-600 mb-6 mt-3">
              UI/UX
            </h3>
            <div className="flex justify-center space-x-8 flex-wrap">
              <div className="flex flex-col items-center">
                <FaSass size={48} className="mb-4 text-pink-500" />
                <p className="text-lg">Sass</p>
              </div>
              <div className="flex flex-col items-center">
                <SiSvelte size={48} className="mb-4 text-orange-500" />
                <p className="text-lg">Svelte</p>
              </div>
              <div className="flex flex-col items-center">
                <SiBootstrap size={48} className="mb-4 text-purple-600" />
                <p className="text-lg">Bootstrap</p>
              </div>
            </div>
          </section>

          {/* Other Tools Section */}
          <section className="tech-box relative mt-12 before:content-[''] before:block before:w-full before:h-9 before:bg-indigo-500 before:rounded-t-full">
            <h3 className="text-2xl font-semibold text-center text-blue-600 mb-6 mt-3">
              Other Tools
            </h3>
            <div className="flex justify-center space-x-8 flex-wrap">
              <div className="flex flex-col items-center">
                <SiRedis size={48} className="mb-4 text-red-500" />
                <p className="text-lg">Redis</p>
              </div>
              <div className="flex flex-col items-center">
                <SiSpringboot size={48} className="mb-4 text-blue-600" />
                <p className="text-lg">Spring Boot</p>
              </div>
              <div className="flex flex-col items-center">
                <SiNestjs size={48} className="mb-4 text-black" />
                <p className="text-lg">NestJS</p>
              </div>
              <div className="flex flex-col items-center">
                <SiRubyonrails size={48} className="mb-4 text-red-500" />
                <p className="text-lg">Ruby on Rails</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </WrapperContainer>
  );
};

export default TechStackWeUse;
