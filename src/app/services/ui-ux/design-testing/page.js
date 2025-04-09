import AutomationTesting from '../../../../container/Services/UI-UX/DesignTestingsection/Automation';
import Engagementsection from '../../../../container/Services/UI-UX/DesignTestingsection/Engagementmodel';
import Futuresection from '../../../../container/Services/UI-UX/DesignTestingsection/Future';
import ComprehensiveSection from '../../../../container/Services/UI-UX/DesignTestingsection/Comprehensive';
import Hero from '../../../../container/Services/UI-UX/DesignTestingsection/Hero';

export const metadata = {
  title: 'Comprehensive UX & Web Design Testing | Usability & Cross-Browser Testing',
  description: 'Ensure a seamless user experience with our UX design testing services, including responsive design testing, usability testing, cross-browser compatibility, and development testing for flawless performance.',
  keywords: 'responsive design testing, usability testing in ux design, cross browser design, regular testing in web design, ux design testing, development testing services',
};

export default function DesignTestingPage() {
  return (
    <section>
      <Hero />
      <AutomationTesting />
      <Engagementsection />
      <Futuresection />
      <ComprehensiveSection />
    </section>
  );
} 