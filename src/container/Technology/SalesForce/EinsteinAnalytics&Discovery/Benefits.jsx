import { Zap , TrendingUp , Users, Lock, LineChart } from 'lucide-react'
import Heading from '@/Layout/Heading'
import WrapperContainer from '@/Layout/WrapperContainer'

const benefits = [
  {
    icon: <Zap  className="w-12 h-12 text-purple-500" />,
    title: 'AI-Powered Insights',
    description: 'Automatically uncover patterns and trends in your data'
  },
  {
    icon: <TrendingUp className="w-12 h-12 text-blue-500" />,
    title: 'Predictive Analytics',
    description: 'Make data-driven decisions with future predictions'
  },
  {
    icon: <Zap className="w-12 h-12 text-yellow-500" />,
    title: 'Instant Analysis',
    description: 'Get real-time insights as your data changes'
  },
  {
    icon: <Users className="w-12 h-12 text-green-500" />,
    title: 'User-Friendly',
    description: 'Intuitive interface for users of all skill levels'
  },
  {
    icon: <Lock className="w-12 h-12 text-red-500" />,
    title: 'Secure Analytics',
    description: 'Enterprise-grade security for your data'
  },
  {
    icon: <LineChart className="w-12 h-12 text-indigo-500" />,
    title: 'Custom Dashboards',
    description: 'Create personalized analytics views'
  }
]

const Benefits = () => {
  return (
    <WrapperContainer>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading>Benefits of Einstein Analytics</Heading>
          <p className="text-gray-600 mt-4">
            Transform your business with AI-powered analytics and insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <div className="relative p-8 bg-white rounded-2xl shadow-lg group-hover:bg-opacity-0 transition-colors duration-500 z-10">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <div className="group-hover:text-white transition-colors duration-500">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-white transition-colors duration-500">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-500">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="bg-gradient-to-br from-purple-900 to-blue-900 text-white rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold">
                Ready to Transform Your Analytics?
              </h3>
              <p className="text-gray-300">
                Join thousands of companies using Einstein Analytics to drive better business decisions 
                with AI-powered insights. Experience the power of intelligent analytics today.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                  <Zap className="w-5 h-5 text-purple-300" />
                  <span>Smart Insights</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                  <TrendingUp className="w-5 h-5 text-blue-300" />
                  <span>Predictive Analysis</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                  <Zap className="w-5 h-5 text-yellow-300" />
                  <span>Real-time Analytics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WrapperContainer>
  )
}

export default Benefits
