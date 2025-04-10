
import Image from 'next/image'
import { Layout, Blocks, Workflow, Layers, Settings, Paintbrush } from 'lucide-react'
import Heading from '@/Layout/Heading'
import WrapperContainer from '@/Layout/WrapperContainer'

const tools = [
  {
    icon: <Layout className="w-10 h-10 text-blue-500" />,
    title: 'App Builder',
    description: 'Create custom apps with drag-and-drop tools'
  },
  {
    icon: <Blocks className="w-10 h-10 text-cyan-500" />,
    title: 'Component Library',
    description: 'Pre-built and custom Lightning components'
  },
  {
    icon: <Workflow className="w-10 h-10 text-sky-500" />,
    title: 'Process Builder',
    description: 'Automate business processes visually'
  },
  {
    icon: <Layers className="w-10 h-10 text-indigo-500" />,
    title: 'Page Layouts',
    description: 'Design dynamic page layouts'
  },
  {
    icon: <Settings className="w-10 h-10 text-blue-600" />,
    title: 'Setup Tools',
    description: 'Configure and customize your org'
  },
  {
    icon: <Paintbrush className="w-10 h-10 text-cyan-600" />,
    title: 'Theme Builder',
    description: 'Create custom branded themes'
  }
]

const LightningTools = () => {
  return (
    <WrapperContainer>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading>Lightning Experience Tools</Heading>
          <p className="text-gray-600 mt-4">
            Powerful tools to customize and enhance your Salesforce experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {tools.map((tool, index) => (
            <div 
              key={index}
              className="group relative p-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-cyan-500 to-sky-500 rounded-2xl opacity-10 blur-xl group-hover:opacity-20 transition-opacity"></div>
              <div className="relative p-6 bg-white rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 group-hover:from-blue-100 group-hover:to-cyan-100 transition-colors">
                    {tool.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
                    <p className="text-gray-600">{tool.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-cyan-500 to-sky-500 opacity-10"></div>
          <div className="relative p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Build Beautiful Experiences
                </h3>
                <p className="text-gray-600">
                  Lightning Experience provides a suite of powerful tools that help you create 
                  stunning, responsive, and user-friendly interfaces. From drag-and-drop builders 
                  to component libraries, you have everything you need.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                    <Layout className="w-6 h-6 text-blue-500" />
                    <div>
                      <h4 className="font-semibold">Visual Builder</h4>
                      <p className="text-sm text-gray-600">Create pages without code</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-cyan-50 to-sky-50 rounded-xl">
                    <Blocks className="w-6 h-6 text-cyan-500" />
                    <div>
                      <h4 className="font-semibold">Component Library</h4>
                      <p className="text-sm text-gray-600">Ready-to-use UI elements</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-sky-50 to-indigo-50 rounded-xl">
                    <Paintbrush className="w-6 h-6 text-sky-500" />
                    <div>
                      <h4 className="font-semibold">Theme Customization</h4>
                      <p className="text-sm text-gray-600">Brand your experience</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[500px]">
                <Image
                  src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Lightning Experience.jpg"
                  alt="Lightning Experience Tools"
                  fill
                  className="object-contain rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
    </WrapperContainer>
  )
}

export default LightningTools
