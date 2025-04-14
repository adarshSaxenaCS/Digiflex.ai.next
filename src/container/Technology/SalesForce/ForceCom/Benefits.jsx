import { Zap, Shield, Clock, Repeat, Users, Laptop } from 'lucide-react'
import Heading from '@/Layout/Heading'
import WrapperContainer from '@/Layout/WrapperContainer'

const benefits = [
  {
    icon: <Zap className="w-12 h-12 text-yellow-500" />,
    title: 'Rapid Development',
    description: 'Build and deploy applications up to 5x faster than traditional development'
  },
  {
    icon: <Shield className="w-12 h-12 text-blue-500" />,
    title: 'Enterprise Security',
    description: 'Built-in security features and compliance with industry standards'
  },
  {
    icon: <Clock className="w-12 h-12 text-green-500" />,
    title: 'Time to Market',
    description: 'Accelerate your development cycle and launch products faster'
  },
  {
    icon: <Repeat className="w-12 h-12 text-purple-500" />,
    title: 'Scalability',
    description: 'Easily scale your applications as your business grows'
  },
  {
    icon: <Users className="w-12 h-12 text-red-500" />,
    title: 'Collaboration',
    description: 'Enhanced team collaboration with built-in version control'
  },
  {
    icon: <Laptop className="w-12 h-12 text-indigo-500" />,
    title: 'Cross-Platform',
    description: 'Build once and deploy across multiple platforms'
  }
]

const Benefits = () => {
  return (
    <WrapperContainer>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading>Benefits of Force.com Platform</Heading>
          <p className="text-gray-600 mt-4">
            Discover why leading enterprises choose Force.com for their application development needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Build on Force.com?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join thousands of companies that trust Force.com for their enterprise application development. 
              Start building scalable, secure, and powerful applications today.
            </p>
          </div>
        </div>
    </WrapperContainer>
  )
}

export default Benefits
