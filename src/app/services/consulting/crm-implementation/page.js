import Hero from '../../../../container/Services/SALESFORCE/CRMImplementation/Hero';
import Body from '../../../../container/Services/SALESFORCE/CRMImplementation/Body';

export const metadata = {
  title: 'CRM Implementation Services | Customer Relationship Management Solutions',
  description: 'Professional CRM implementation services for businesses. Streamline customer relationships with customized CRM solutions and expert implementation support.',
  keywords: 'crm implementation, customer relationship management, crm solutions, crm services, salesforce crm, crm consulting, crm development',
};

export default function CRMImplementationPage() {
  return (
    <div>
      <Hero />
      <Body />
    </div>
  );
} 