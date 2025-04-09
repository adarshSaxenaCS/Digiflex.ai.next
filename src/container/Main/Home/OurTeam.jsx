import React from 'react';
import WrapperContainer from '../../../Layout/WrapperContainer';

const teamMembers = [
  {
    id: 1,
    name: 'Rishika Patni',
    role: 'Managing Director',
    image: 'https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/RishikaMaam.jpg'
  },
  {
    id: 2,
    name: 'Tuhinanshu Jain',
    role: 'Managing Director',
    image: 'https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:images/digiflex/ttj3.png'
  },
  {
    id: 3,
    name: 'Hemraj Prajapat',
    role: 'Marketing Manager',
    image: 'https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:images/digiflex/hemusir111.png'
  },
  {
    id: 4,
    name: 'Tanish Sharma',
    role: 'Project Manager',
    image: 'https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:images/digiflex/tanishsir.jpeg'
  },
  {
    id: 5,
    name: 'Shubham Jat',
    role: 'Business Development Manager',
    image: 'https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/shubhamsir.webp'
  }
];

function App() {
  return (
    <div className="bg-blue-950 min-h px-4 md:px-8 rounded">
      <WrapperContainer>
        <div className="pb-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 italic tracking-wider">
              Our Leadership Team
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
              Meet the exceptional individuals who drive our vision forward and lead us to success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-6 lg:gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="group text-center px-2 sm:px-3">
                <div className="relative mx-auto w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 lg:w-52 lg:h-52">
                  {/* Outer circle with bright blue border */}
                  <div className="absolute inset-0 rounded-full border-[4px] border-[#0099ff]/30 group-hover:border-[#0099ff]/50 transition-colors duration-300"></div>
                  
                  {/* Glow effect container */}
                  <div className="absolute inset-2 rounded-full bg-[#0099ff] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
                  
                  {/* Image container */}
                  <div className="absolute inset-2 overflow-hidden rounded-full border-2 border-[#0099ff] group-hover:border-[#0099ff]/80 transition-colors duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
                
                <div className="mt-4 lg:mt-6">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#0099ff]">
                    {typeof member.name === "string" ? member.name : "Unknown Name"}
                  </h3>
                  <p className="text-gray-400 mt-2 italic text-sm">
                    {typeof member.role === "string" ? member.role : "Unknown Role"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </WrapperContainer>
    </div>
  );
}

export default App;