import WrapperContainer from '@/Layout/WrapperContainer';
import React from 'react';

const techStack = [
  {
    title: 'Frontend',
    tools: [
      'React.js',
      'Next.js',
      'Tailwind CSS',
      'React Router',
      'HTML5',
      'CSS3',
      'JavaScript (ES6+)',
    ],
  },
  {
    title: 'State Management',
    tools: ['useState', 'useContext', 'Redux Toolkit', 'React Query (for data caching)'],
  },
  {
    title: 'Backend (optional)',
    tools: ['Node.js', 'Express.js', 'REST APIs', 'Nodemailer (for OTP / email features)'],
  },
  {
    title: 'Database',
    tools: ['MongoDB', 'Mongoose', 'Firebase (optional)', 'Cloudinary (for image hosting)'],
  },
  {
    title: 'Authentication & Security',
    tools: ['JWT', 'OAuth 2.0', 'bcrypt.js', 'Helmet.js', 'CORS', 'dotenv'],
  },
  {
    title: 'Version Control & CI/CD',
    tools: ['Git', 'GitHub', 'GitHub Actions (optional)', 'Husky (pre-commit hooks)'],
  },
  {
    title: 'Testing',
    tools: ['Jest', 'React Testing Library', 'Postman'],
  },
  {
    title: 'Deployment & Hosting',
    tools: ['Vercel', 'Netlify', 'Render', 'Railway', 'MongoDB Atlas'],
  },
];

const TechStackSection = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="text-center mx-auto mb-10 px-4">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">🛠️ Tech Stack</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          While building the Amazon Clone, We utilized several modern technologies that are commonly used in real-world scalable applications. Every layer — from the frontend to the backend — was developed with careful planning and thoughtful implementation.
        </p>
      </div>

      <WrapperContainer>
        <div className="grid sm:grid-cols-2 gap-6 text-left px-4">
          {techStack.map((stack, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 border-blue-600 overflow-hidden"
            >
              {/* Upper Left Triangle */}
              <div className="absolute top-0 left-0 w-0 h-0 border-l-[60px] border-l-transparent border-b-[60px] border-b-blue-200 z-0" />

              {/* Lower Right Triangle */}
              <div className="absolute bottom-0 right-0 w-0 h-0 border-r-[60px] border-r-transparent border-t-[60px] border-t-yellow-200 z-0" />

              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-3 justify-center text-center text-blue-600">{stack.title}</h3>
                <ul className="list-disc list-inside space-y-1 justify-center text-center text-gray-700">
                  {stack.tools.map((tool, i) => (
                    <li key={i}>{tool}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </WrapperContainer>

      <div className="mt-12 text-center px-4">
        <p className="text-md text-gray-700 max-w-2xl mx-auto">
          This tech stack provides us the flexibility to confidently develop a clone of a large-scale platform like Amazon — including features such as product listings, cart system, user authentication, and secure payment integration
        </p>
        <p className="mt-2 text-blue-600 font-semibold">Production-ready. Scalable. Performant. 🔥</p>
      </div>
    </section>
  );
};

export default TechStackSection;
