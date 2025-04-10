import { Database, LineChart, PieChart, Zap, Share2 } from 'lucide-react'
import Heading from '@/Layout/Heading'
import WrapperContainer from '@/Layout/WrapperContainer'

const steps = [
  {
    icon: <Database className="w-12 h-12 text-blue-600" />,
    title: 'Data Integration',
    description: 'Connect and combine data from multiple sources'
  },
  {
    icon: <Zap   className="w-12 h-12 text-purple-600" />,
    title: 'AI Processing',
    description: 'Apply AI models to analyze patterns and trends'
  },
  {
    icon: <LineChart className="w-12 h-12 text-green-600" />,
    title: 'Pattern Recognition',
    description: 'Identify key patterns and correlations in data'
  },
  {
    icon: <PieChart className="w-12 h-12 text-pink-600" />,
    title: 'Visualization',
    description: 'Create interactive dashboards and reports'
  },
  {
    icon: <Zap className="w-12 h-12 text-yellow-600" />,
    title: 'Insights Generation',
    description: 'Generate AI-powered insights and predictions'
  },
  {
    icon: <Share2 className="w-12 h-12 text-indigo-600" />,
    title: 'Action & Sharing',
    description: 'Share insights and take data-driven actions'
  }
]

const EinsteinProcess = () => {
  return (
    <WrapperContainer>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading>How Einstein Analytics Works</Heading>
          <p className="text-gray-600 mt-4">
            Discover how Einstein Analytics transforms your raw data into actionable insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative group"
            >
              <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg transform -rotate-6 group-hover:rotate-0 transition-transform duration-300"></div>
                  <div className="relative transform group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mt-6 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                
                {index !== steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-300 to-blue-300"></div>
                )}
              </div>
              <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full text-white flex items-center justify-center font-semibold">
                {index + 1}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl">
            <p className="text-gray-600 max-w-2xl mx-auto">
              Einstein Analytics uses advanced AI algorithms to process your data and deliver 
              insights that drive better business decisions. The platform continuously learns 
              and improves its predictions over time.
            </p>
          </div>
        </div>
      </div>
    </WrapperContainer>
  )
}

export default EinsteinProcess
