
import Image from 'next/image'
import { Zap , LineChart, Search, Sparkles, Bot, Lightbulb } from 'lucide-react'
import Heading from '@/Layout/Heading'
import WrapperContainer from '@/Layout/WrapperContainer'

const features = [
  {
    icon: <Zap className="w-6 h-6 text-purple-600" />,
    title: 'AI-Powered Analytics',
    description: 'Advanced analytics powered by artificial intelligence for deeper insights'
  },
  {
    icon: <LineChart className="w-6 h-6 text-blue-600" />,
    title: 'Predictive Analytics',
    description: 'Forecast trends and make data-driven decisions with predictive models'
  },
  {
    icon: <Search className="w-6 h-6 text-green-600" />,
    title: 'Smart Data Discovery',
    description: 'Automatically uncover hidden patterns and relationships in your data'
  },
  {
    icon: <Sparkles className="w-6 h-6 text-pink-600" />,
    title: 'Natural Language Processing',
    description: 'Ask questions in plain language and get instant insights'
  },
  {
    icon: <Bot className="w-6 h-6 text-orange-600" />,
    title: 'Automated Insights',
    description: 'Get AI-generated explanations and recommendations'
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-yellow-600" />,
    title: 'Intelligent Recommendations',
    description: 'Receive smart suggestions for business improvements'
  }
]

const EinsteinFeatures = () => {
  return (
    <WrapperContainer>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading>Einstein Analytics & Discovery Features</Heading>
          <p className="text-gray-600 mt-4">
            Harness the power of AI to transform your data into actionable insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative z-10">
                <div className="p-3 rounded-lg bg-gray-50 inline-block mb-4 group-hover:bg-opacity-75 transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Transform Data into Intelligence
                </h3>
                <p className="text-gray-600">
                  Einstein Analytics & Discovery combines powerful AI capabilities with intuitive 
                  visualization tools to help you make smarter decisions faster.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-purple-100">
                      <span className="text-purple-600 text-lg">✓</span>
                    </span>
                    <span>Real-time analytics and insights</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-blue-100">
                      <span className="text-blue-600 text-lg">✓</span>
                    </span>
                    <span>AI-driven recommendations</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-indigo-100">
                      <span className="text-indigo-600 text-lg">✓</span>
                    </span>
                    <span>Automated data preparation</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-[400px]">
                <Image
                  src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/EinsteinAnalytics.jpg"
                  alt="Einstein Analytics Dashboard"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </WrapperContainer>
  )
}

export default EinsteinFeatures
