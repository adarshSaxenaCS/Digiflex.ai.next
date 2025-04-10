import { Zap, Layout, Clock, Smartphone, Users, Sparkles } from 'lucide-react'
import Heading from '@/Layout/Heading'
import WrapperContainer from '@/Layout/WrapperContainer'

const benefits = [
  {
    icon: <Zap className="w-12 h-12 text-blue-500" />,
    title: 'Enhanced Performance',
    description: 'Lightning-fast navigation and data loading'
  },
  {
    icon: <Layout className="w-12 h-12 text-cyan-500" />,
    title: 'Modern Interface',
    description: 'Sleek, intuitive, and user-friendly design'
  },
  {
    icon: <Clock className="w-12 h-12 text-sky-500" />,
    title: 'Time Savings',
    description: 'Streamlined workflows and automation'
  },
  {
    icon: <Smartphone className="w-12 h-12 text-indigo-500" />,
    title: 'Mobile Ready',
    description: 'Work seamlessly across all devices'
  },
  {
    icon: <Users className="w-12 h-12 text-blue-600" />,
    title: 'Better Collaboration',
    description: 'Enhanced team communication tools'
  },
  {
    icon: <Sparkles className="w-12 h-12 text-cyan-600" />,
    title: 'Innovation Ready',
    description: 'Built for future Salesforce features'
  }
]

const Benefits = () => {
  return (
    <WrapperContainer>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading>Benefits of Lightning Experience</Heading>
          <p className="text-gray-600 mt-4">
            Discover why businesses are switching to Lightning Experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-cyan-500 to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative h-full p-8 bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50 rounded-2xl group-hover:bg-white transition-colors duration-500">
                <div className="mb-6">
                  <div className="relative transform group-hover:scale-110 transition-transform duration-300">
                    <div className="absolute inset-0 bg-white opacity-20 blur-xl group-hover:opacity-30 transition-opacity"></div>
                    <div className="relative  group-hover:text-white transition-colors duration-500">
                      {benefit.icon}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4   ">
                  {benefit.title}
                </h3>
                <p className="text-gray-600   ">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-cyan-600 to-sky-600 p-8 md:p-12">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10"></div>
            <div className="relative max-w-3xl mx-auto text-center text-white space-y-6">
              <h3 className="text-3xl font-bold">
                Ready to Transform Your Salesforce Experience?
              </h3>
              <p className="text-white/90">
                Join thousands of organizations that have upgraded to Lightning Experience 
                and revolutionized their Salesforce usage. Experience the future of CRM today.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mt-8">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3">
                  <Zap className="w-5 h-5" />
                  <span>Lightning Fast</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3">
                  <Layout className="w-5 h-5" />
                  <span>Modern UI</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3">
                  <Smartphone className="w-5 h-5" />
                  <span>Mobile Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </WrapperContainer>
  )
}

export default Benefits
