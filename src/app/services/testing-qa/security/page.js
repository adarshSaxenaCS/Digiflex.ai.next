import HeroSection from "../../../../container/Services/Testing and QA/Security Testing/HeroSection";
import CyberDefenseSection from '../../../../container/Services/Testing and QA/Security Testing/CyberDefenseSection';
import SecurityOperations from '../../../../container/Services/Testing and QA/Security Testing/SecurityOperations';
import DigitalTransformation from '../../../../container/Services/Testing and QA/Security Testing/DigitalTransformation';
import WebAppPenetrationTesting from '../../../../container/Services/Testing and QA/Security Testing/WebAppPenetrationTesting';
import WebAppPenetrationTestingProcess from '../../../../container/Services/Testing and QA/Security Testing/WebAppPenetrationTestingProcess';
import SecurityApproach from '../../../../container/Services/Testing and QA/Security Testing/SecurityApproach';

export const metadata = {
  title: 'Security Testing Services | Web Application Security Testing',
  description: 'Comprehensive security testing services including web application penetration testing, vulnerability assessment, and security operations. Protect your digital assets with expert security testing solutions.',
  keywords: 'security testing, web application security, penetration testing, vulnerability assessment, security operations, web app security testing',
};

export default function SecurityTestingPage() {
  return (
    <div>
      <HeroSection />
      <CyberDefenseSection />
      <SecurityOperations />
      <DigitalTransformation />
      <WebAppPenetrationTesting />
      <WebAppPenetrationTestingProcess />
      <SecurityApproach />
    </div>
  );
} 