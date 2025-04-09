import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import {
  DollarSign,
  Banknote,
  ShieldCheck,
  CalendarCheck,
  FileBarChart,
  Users2,
} from "lucide-react";

const PayrollCompensation = () => {
  return (
    <WrapperContainer>
      <div className="bg-gray-900 text-white p-12 rounded-lg shadow-xl border-l-8 border-blue-900">
        <Heading className="text-center text-3xl font-bold">
          Payroll & Compensation
        </Heading>
        <Paragraph className="text-center text-white mt-4 max-w-2xl mx-auto">
          Automate payroll processing, tax deductions, and employee benefits distribution
          with a <strong>reliable, error-free, and fully integrated system</strong>.
          Ensure accuracy, compliance, and employee satisfaction effortlessly.
        </Paragraph>

        {/* Payroll Features */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature Cards */}
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-md flex flex-col items-center hover:scale-105 hover:shadow-2xl hover:bg-white/20 transition-all duration-500 ease-in-out border border-transparent hover:border-blue-500"
            >
              <feature.icon className={`${feature.color} text-5xl mb-4 transition-transform duration-500 hover:rotate-3 hover:scale-110`} />
              <h3 className={`text-xl font-semibold ${feature.color}`}>
                {feature.title}
              </h3>
              <p className="text-gray-300 mt-2 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

const features = [
  {
    icon: DollarSign,
    title: "Automated Salary Processing",
    description:
      "Eliminate manual calculations with real-time payroll automation, ensuring timely and accurate payments to employees.",
    color: "text-blue-400",
  },
  {
    icon: Banknote,
    title: "Advanced Tax & Compliance",
    description:
      "Stay compliant with automated tax deductions, regulatory filings, and transparent financial reports.",
    color: "text-green-400",
  },
  {
    icon: ShieldCheck,
    title: "Comprehensive Benefits Management",
    description:
      "Seamlessly manage insurance, bonuses, incentives, and retirement plans, ensuring employee satisfaction and retention.",
    color: "text-purple-400",
  },
  {
    icon: CalendarCheck,
    title: "Attendance & Leave Sync",
    description:
      "Auto-sync payroll with attendance, leaves, and overtime for accurate monthly payouts.",
    color: "text-yellow-400",
  },
  {
    icon: FileBarChart,
    title: "Dynamic Payroll Reports",
    description:
      "Generate customized payroll reports for audits, analysis, and compliance needs.",
    color: "text-cyan-400",
  },
  {
    icon: Users2,
    title: "Multi-Department Allocation",
    description:
      "Assign and manage salaries across departments and teams with ease.",
    color: "text-pink-400",
  },
];

export default PayrollCompensation;
