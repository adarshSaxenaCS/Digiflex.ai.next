import { Layout, Paintbrush, Wrench, Zap, Users, ArrowRight } from 'lucide-react'
import Heading from '@/Layout/Heading'
import WrapperContainer from '@/Layout/WrapperContainer'

const steps = [
  {
    icon: <Layout className="w-12 h-12 text-blue-500" />,
    title: 'Modern Interface',
    description: 'Experience the new Salesforce interface'
  },
  {
    icon: <Paintbrush className="w-12 h-12 text-cyan-500" />,
    title: 'Customize',
    description: 'Personalize your workspace layout'
  },
  {
    icon: <Wrench className="w-12 h-12 text-sky-500" />,
    title: 'Configure',
    description: 'Set up features and automation'
  },
  {
    icon: <Zap className="w-12 h-12 text-indigo-500" />,
    title: 'Optimize',
    description: 'Enhance performance and workflows'
  },
  {
    icon: <Users className="w-12 h-12 text-blue-600" />,
    title: 'Collaborate',
    description: 'Work together with your team'
  }
]

const LightningProcess = () => {
  return (
    <WrapperContainer>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading>Lightning Experience Journey</Heading>
          <p className="text-gray-600 mt-4">
            Follow these steps to transform your Salesforce experience
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 left-12 right-12 h-0.5 bg-gradient-to-r from-blue-200 via-cyan-200 to-sky-200 hidden lg:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-50 to-cyan-50 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>

                {index !== steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 transform translate-x-1/2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50">
              <div className="p-3 rounded-xl bg-white inline-block mb-4">
                <Zap className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Quick Setup</h3>
              <p className="text-gray-600">Easy transition to the new interface</p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-50 to-sky-50">
              <div className="p-3 rounded-xl bg-white inline-block mb-4">
                <Layout className="w-8 h-8 text-cyan-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Modern Design</h3>
              <p className="text-gray-600">Intuitive and user-friendly layout</p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-sky-50 to-indigo-50">
              <div className="p-3 rounded-xl bg-white inline-block mb-4">
                <Users className="w-8 h-8 text-sky-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Team Ready</h3>
              <p className="text-gray-600">Built for collaboration and efficiency</p>
            </div>
          </div>
        </div>
    </WrapperContainer>
  )
}

export default LightningProcess
