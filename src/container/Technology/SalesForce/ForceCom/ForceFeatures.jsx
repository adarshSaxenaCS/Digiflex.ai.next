import Image from 'next/image'
import { Code2, Zap, Shield, Workflow, GitBranch, Layers } from 'lucide-react'
import Heading from '@/Layout/Heading'
import WrapperContainer from '@/Layout/WrapperContainer'

const features = [
  {
    icon: <Code2 className="w-6 h-6 text-blue-600" />,
    title: 'Visual Development',
    description: 'Build apps using drag-and-drop tools and declarative programming'
  },
  {
    icon: <Zap className="w-6 h-6 text-purple-600" />,
    title: 'Lightning Components',
    description: 'Create reusable UI components with the Lightning framework'
  },
  {
    icon: <Shield className="w-6 h-6 text-green-600" />,
    title: 'Enterprise Security',
    description: 'Built-in security features and compliance controls'
  },
  {
    icon: <Workflow className="w-6 h-6 text-orange-600" />,
    title: 'Process Builder',
    description: 'Automate complex business processes without code'
  },
  {
    icon: <GitBranch className="w-6 h-6 text-red-600" />,
    title: 'Version Control',
    description: 'Track changes and manage deployments effectively'
  },
  {
    icon: <Layers className="w-6 h-6 text-indigo-600" />,
    title: 'Multi-Tenant Architecture',
    description: 'Scale your apps with shared cloud infrastructure'
  }
]

const ForceFeatures = () => {
  return (
    <WrapperContainer>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading>Key Features of Force.com</Heading>
          <p className="text-gray-600 mt-4">
            Discover the powerful features that make Force.com the leading enterprise development platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="p-3 rounded-lg bg-gray-50 inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className=" from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Build Enterprise Apps 5x Faster
                </h3>
                <p className="text-gray-600">
                  Force.com's low-code platform and pre-built components accelerate development while maintaining 
                  enterprise-grade quality and security.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Rapid prototyping and deployment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Built-in testing and debugging tools</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Seamless integration capabilities</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-[300px]">
                <Image
                  src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Force com Development.avif"
                  alt="Force.com Development"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
    </WrapperContainer>
  )
}

export default ForceFeatures
