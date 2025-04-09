import PerformanceTestingHero from "../../../../container/Services/Testing and QA/Performance Testing/PerformanceTestingHero";
import PerformanceTestingSection from '../../../../container/Services/Testing and QA/Performance Testing/PerformanceTestingSection';
import Services from '../../../../container/Services/Testing and QA/Performance Testing/Services';
import PerformanceTestingDiagram from "../../../../container/Services/Testing and QA/Performance Testing/PerformanceTestingDiagram";
import TestingTools from '../../../../container/Services/Testing and QA/Performance Testing/TestingTools';
import BusinessSolutions from "../../../../container/Services/Testing and QA/Performance Testing/BusinessSolutions";
import PerformanceChallenges from "../../../../container/Services/Testing and QA/Performance Testing/PerformanceChallenges";

export const metadata = {
  title: 'Performance Testing Services | Application Performance Optimization',
  description: 'Comprehensive performance testing services to ensure your applications meet speed, scalability, and stability requirements. Expert performance optimization solutions.',
  keywords: 'performance testing, load testing, stress testing, scalability testing, performance optimization, application testing services',
};

export default function PerformanceTestingPage() {
  return (
    <>
      <PerformanceTestingHero />
      <PerformanceTestingSection />
      <Services />
      <PerformanceTestingDiagram />
      <TestingTools />
      <BusinessSolutions />
      <PerformanceChallenges />
    </>
  );
} 