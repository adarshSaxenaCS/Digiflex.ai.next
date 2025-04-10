import Image from 'next/image'
import { Terminal, Code2, Wrench, Gauge, Workflow, Database } from 'lucide-react'
import Heading from '@/Layout/Heading'
import WrapperContainer from '@/Layout/WrapperContainer'

const tools = [
  {
    icon: <Terminal className="w-10 h-10 text-blue-600" />,
    title: 'Developer Console',
    description: 'Integrated development environment for Force.com'
  },
  {
    icon: <Code2 className="w-10 h-10 text-purple-600" />,
    title: 'Visual Studio Code Extension',
    description: 'Modern development tools for Salesforce DX'
  },
  {
    icon: <Wrench className="w-10 h-10 text-green-600" />,
    title: 'Setup Tools',
    description: 'Configure and customize your org settings'
  },
  {
    icon: <Gauge className="w-10 h-10 text-red-600" />,
    title: 'Performance Optimizer',
    description: 'Monitor and optimize app performance'
  },
  {
    icon: <Workflow className="w-10 h-10 text-orange-600" />,
    title: 'Process Builder',
    description: 'Visual process automation tool'
  },
  {
    icon: <Database className="w-10 h-10 text-indigo-600" />,
    title: 'Schema Builder',
    description: 'Visual database design tool'
  }
]

const ForceTools = () => {
  return (
    <WrapperContainer>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading>Force.com Development Tools</Heading>
          <p className="text-gray-600 mt-4">
            Powerful tools to streamline your development process and boost productivity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {tools.map((tool, index) => (
            <div 
              key={index}
              className="flex items-start p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="p-3 rounded-lg bg-gray-50">
                {tool.icon}
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
                <p className="text-gray-600">{tool.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px]">
              <Image
                src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/ForceComTools.jpg"
                alt="Force.com Development Tools"
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Modern Development Experience
              </h3>
              <p className="text-gray-600">
                Force.com provides a comprehensive suite of development tools that help you build, 
                test, and deploy applications faster. From visual builders to integrated IDEs, 
                you have everything you need to create enterprise-grade solutions.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="p-1 rounded-full bg-green-100">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Integrated development environments</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="p-1 rounded-full bg-green-100">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Visual builders and designers</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="p-1 rounded-full bg-green-100">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Testing and debugging tools</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </WrapperContainer>
  )
}

export default ForceTools
