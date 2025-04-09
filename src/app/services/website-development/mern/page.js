import HeroSection from '../../../../container/Technology/WebsiteDevlopment/Mern/HeroSection';
import TechBreakdown from '../../../../container/Technology/WebsiteDevlopment/Mern/TechBreakdown';

export const metadata = {
  title: 'MERN Stack Development Services | Full-Stack Web Solutions',
  description: 'Expert MERN stack development services for building scalable web applications. Create powerful full-stack solutions using MongoDB, Express.js, React, and Node.js.',
  keywords: 'mern stack development, full stack development, web development, mongodb development, express.js development, react development, node.js development',
};

export default function MernStackDevelopmentPage() {
  return (
    <div>
      <HeroSection />
      <TechBreakdown />
    </div>
  );
} 