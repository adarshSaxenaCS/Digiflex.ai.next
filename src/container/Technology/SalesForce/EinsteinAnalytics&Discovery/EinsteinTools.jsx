import Image from 'next/image'
import { LineChart, PieChart, BarChart3, Table, Gauge, Share2, Zap } from 'lucide-react'
import Heading from '@/Layout/Heading'
import WrapperContainer from '@/Layout/WrapperContainer'

const tools = [
  {
    icon: <LineChart className="w-10 h-10 text-purple-600" />,
    title: 'Analytics Studio',
    description: 'Create and customize interactive analytics dashboards'
  },
  {
    icon: <PieChart className="w-10 h-10 text-blue-600" />,
    title: 'Discovery Insights',
    description: 'Automated AI-powered data analysis and insights'
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-green-600" />,
    title: 'Prediction Builder',
    description: 'Build and deploy predictive models without coding'
  },
  {
    icon: <Table className="w-10 h-10 text-pink-600" />,
    title: 'Data Manager',
    description: 'Prepare and transform data for analysis'
  },
  {
    icon: <Gauge className="w-10 h-10 text-orange-600" />,
    title: 'Performance Monitoring',
    description: 'Track KPIs and metrics in real-time'
  },
  {
    icon: <Share2 className="w-10 h-10 text-indigo-600" />,
    title: 'Story Gallery',
    description: 'Share and collaborate on analytics insights'
  }
]

const EinsteinTools = () => {
  return (
    <WrapperContainer>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading>Einstein Analytics Tools</Heading>
          <p className="text-gray-600 mt-4">
            Powerful tools that make data analysis and visualization intuitive and effective
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {tools.map((tool, index) => (
            <div 
              key={index}
              className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              <div className="flex items-start">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg transform rotate-6 group-hover:rotate-0 transition-transform duration-300"></div>
                  <div className="relative p-3">
                    {tool.icon}
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
                  <p className="text-gray-600">{tool.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Intuitive Analytics for Everyone
              </h3>
              <p className="text-gray-600">
                Einstein Analytics provides a suite of powerful tools that make it easy for anyone 
                to explore data, create visualizations, and uncover insights. From business users 
                to data scientists, our tools adapt to your expertise level.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-white rounded-lg shadow-sm">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <LineChart className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Interactive Dashboards</h4>
                    <p className="text-sm text-gray-600">Drag-and-drop interface for custom analytics</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-white rounded-lg shadow-sm">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">AI-Powered Analysis</h4>
                    <p className="text-sm text-gray-600">Automated insights and predictions</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-white rounded-lg shadow-sm">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <Share2 className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Collaborative Features</h4>
                    <p className="text-sm text-gray-600">Share and work together on analytics</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px]">
              <Image
                src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Einstein Analytics Tools.avif"
                alt="Einstein Analytics Tools"
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </WrapperContainer>
  )
}

export default EinsteinTools
