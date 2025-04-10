import Image from 'next/image'
import { Zap, Layout, Palette, Smartphone, Gauge, Users } from 'lucide-react'
import Heading from '@/Layout/Heading'
import WrapperContainer from '@/Layout/WrapperContainer'

const features = [
  {
    icon: <Layout className="w-6 h-6 text-blue-500" />,
    title: 'Modern Interface',
    description: 'Sleek and intuitive user interface designed for productivity'
  },
  {
    icon: <Zap className="w-6 h-6 text-cyan-500" />,
    title: 'Lightning Fast',
    description: 'Optimized performance for quick navigation and actions'
  },
  {
    icon: <Palette className="w-6 h-6 text-sky-500" />,
    title: 'Customizable UI',
    description: 'Personalize your workspace with drag-and-drop components'
  },
  {
    icon: <Smartphone className="w-6 h-6 text-indigo-500" />,
    title: 'Mobile Ready',
    description: 'Responsive design that works on any device'
  },
  {
    icon: <Gauge className="w-6 h-6 text-blue-600" />,
    title: 'Enhanced Productivity',
    description: 'Streamlined workflows and automated processes'
  },
  {
    icon: <Users className="w-6 h-6 text-cyan-600" />,
    title: 'Collaborative',
    description: 'Built-in tools for team collaboration'
  }
]

const LightningFeatures = () => {
  return (
    <WrapperContainer>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 mb-4">
            <Zap className="w-5 h-5 text-blue-500" />
            <span className="text-blue-700 font-medium">Lightning Experience</span>
          </div>
          <Heading>Modern Salesforce Interface</Heading>
          <p className="text-gray-600 mt-4">
            Experience the next generation of Salesforce with a modern, intelligent, and beautiful interface
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative"
            >
              <div className="absolute inset-0.5 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative p-6 bg-white rounded-2xl  hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 group-hover:from-blue-100 group-hover:to-cyan-100 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-600">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10"></div>
            <div className="relative grid md:grid-cols-2 gap-12 items-center p-8 md:p-12">
              <div className="space-y-6 text-white">
                <h3 className="text-3xl font-bold">
                  Transform Your Salesforce Experience
                </h3>
                <p className="text-white/90">
                  Lightning Experience brings a modern, intelligent interface to Salesforce. 
                  Boost productivity with a faster, more intuitive CRM experience designed 
                  for the way you work.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-lg bg-white/10">
                      <Layout className="w-5 h-5" />
                    </div>
                    <span>Intuitive Layout</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-lg bg-white/10">
                      <Zap className="w-5 h-5" />
                    </div>
                    <span>Lightning Fast Performance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-lg bg-white/10">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <span>Mobile-First Design</span>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] ml-auto">
                <Image
                  src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/LightningInterface.jpg"
                  alt="Lightning Experience Interface"
                  className="object-contain rounded-3xl"
                  width={400}
                  height={400}
                  quality={100}
                  
                />
              </div>
            </div>
          </div>
        </div>
      
    </WrapperContainer>
  )
}

export default LightningFeatures
