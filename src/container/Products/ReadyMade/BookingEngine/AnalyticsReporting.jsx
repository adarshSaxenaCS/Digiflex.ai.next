import React from "react";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import WrapperContainer from "@/Layout/WrapperContainer";
import { BarChart3, LineChart, Filter, CalendarClock, PieChart, Activity, TrendingUp, Users, Layers3, LayoutDashboard, ClipboardList } from "lucide-react";

const AnalyticsReporting = () => {
  return (
    <WrapperContainer>
      <div className="py-20">
        
        {/* Main Heading */}
        <Heading className="text-center text-[#0a2540] text-4xl font-bold leading-tight">
          Analytics & Reporting
        </Heading>

        {/* Subheading */}
        <Paragraph className="text-center text-[#5a7184] mt-6 max-w-2xl mx-auto text-lg">
          Drive smarter decisions with real-time insights, visual dashboards, and predictive analytics designed to empower your business growth.
        </Paragraph>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
          
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-white to-blue-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 ease-in-out border border-transparent hover:border-blue-300"
            >
              <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition duration-300"></div>

              <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-all">
                <feature.icon className="text-blue-700 w-8 h-8" />
              </div>

              <h4 className="text-2xl font-semibold text-[#0a2540] mb-3 group-hover:text-blue-800 transition-colors duration-300">
                {feature.title}
              </h4>

              <p className="text-[#5a7184] text-base leading-relaxed group-hover:text-[#3d5060] transition-colors">
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </WrapperContainer>
  );
};

export default AnalyticsReporting;

// Features Data
const features = [
  {
    icon: BarChart3,
    title: "Real-Time Metrics",
    description: "Stay on top of your operations with real-time updates on bookings, cancellations, and payments.",
  },
  {
    icon: LineChart,
    title: "Revenue Growth Analysis",
    description: "Analyze and visualize your revenue streams with powerful trendline analytics.",
  },
  {
    icon: Filter,
    title: "Advanced Data Filters",
    description: "Quickly drill down into key performance indicators by date, location, and customer segments.",
  },
  {
    icon: CalendarClock,
    title: "Demand Forecasting",
    description: "Predict peak seasons and optimize your inventory and marketing campaigns proactively.",
  },
  {
    icon: PieChart,
    title: "Interactive Charts",
    description: "Visualize your data with dynamic pie, bar, and line charts for faster understanding.",
  },
  {
    icon: Activity,
    title: "Live System Monitoring",
    description: "Track live activities, system logs, and monitor uptime to ensure smooth operations.",
  },
  {
    icon: TrendingUp,
    title: "Conversion Analytics",
    description: "Understand your conversion funnels and optimize your customer journeys to boost sales.",
  },
  {
    icon: Users,
    title: "Customer Retention Reports",
    description: "Identify loyal customers, analyze retention rates, and lower churn with targeted actions.",
  },
  {
    icon: Layers3,
    title: "Custom Report Builder",
    description: "Create and export customized reports tailored to your business needs in just a few clicks.",
  },
  {
    icon: LayoutDashboard,
    title: "Executive Dashboards",
    description: "Get a bird’s eye view of your entire business health with beautiful, real-time dashboards.",
  },
  {
    icon: ClipboardList,
    title: "Performance Benchmarks",
    description: "Measure your business performance against industry benchmarks to stay competitive.",
  },
];
