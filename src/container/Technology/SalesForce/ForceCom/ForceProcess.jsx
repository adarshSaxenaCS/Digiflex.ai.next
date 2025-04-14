import { PenTool, Code, Database, Workflow, Server, CheckCircle } from 'lucide-react'
import Heading from '@/Layout/Heading'
import WrapperContainer from '@/Layout/WrapperContainer'

const steps = [
  {
    icon: <PenTool className="w-12 h-12 text-blue-600" />,
    title: 'Design',
    description: 'Design your data model and user interface using visual tools'
  },
  {
    icon: <Database className="w-12 h-12 text-purple-600" />,
    title: 'Create Objects',
    description: 'Define custom objects, fields, and relationships'
  },
  {
    icon: <Code className="w-12 h-12 text-indigo-600" />,
    title: 'Develop',
    description: 'Build functionality using Apex and Lightning components'
  },
  {
    icon: <Workflow className="w-12 h-12 text-pink-600" />,
    title: 'Automate',
    description: 'Implement business processes and workflows'
  },
  {
    icon: <Server className="w-12 h-12 text-orange-600" />,
    title: 'Deploy',
    description: 'Deploy your application to production environment'
  },
  {
    icon: <CheckCircle className="w-12 h-12 text-green-600" />,
    title: 'Monitor',
    description: 'Track performance and maintain your application'
  }
]

const ForceProcess = () => {
  return (
    <WrapperContainer>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading>Force.com Development Process</Heading>
          <p className="text-gray-600 mt-4">
            Follow our proven development methodology to build enterprise-grade applications efficiently
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative group"
            >
              <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                
                {index !== steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300 transform -translate-y-1/2" />
                )}
              </div>
              <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-blue-500 rounded-full text-white flex items-center justify-center font-semibold">
                {index + 1}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our development process ensures high-quality applications that meet your business requirements 
            while maintaining scalability and security standards.
          </p>
        </div>
    </WrapperContainer>
  )
}

export default ForceProcess
