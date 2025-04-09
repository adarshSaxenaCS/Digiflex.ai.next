import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";

const StudentPerformanceTracking = () => {
  return (
    <WrapperContainer>
      <div className="bg-gray-900 text-white p-12 rounded-lg shadow-xl">
        <Heading className="text-center text-3xl font-bold">
          Student Performance Tracking
        </Heading>
        <Paragraph className="text-center text-white mt-4 max-w-xl mx-auto">
          Monitor academic progress, attendance trends, and student performance using AI-powered analytics for smarter decision-making.
        </Paragraph>

        {/* Performance Stats Table */}
        <div className="overflow-x-auto mt-8">
          <table className="w-full text-left border-collapse border border-gray-700">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="p-4 border border-gray-700">Feature</th>
                <th className="p-4 border border-gray-700">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-800">
                <td className="p-4 border border-gray-700">AI-Powered Reports</td>
                <td className="p-4 border border-gray-700">In-depth analysis of student performance based on multiple parameters.</td>
              </tr>
              <tr className="bg-gray-700">
                <td className="p-4 border border-gray-700">Attendance Insights</td>
                <td className="p-4 border border-gray-700">Real-time tracking of attendance patterns and absenteeism trends.</td>
              </tr>
              <tr className="bg-gray-800">
                <td className="p-4 border border-gray-700">Custom Scorecards</td>
                <td className="p-4 border border-gray-700">Automated score generation with detailed breakdowns of strengths and weaknesses.</td>
              </tr>
              <tr className="bg-gray-700">
                <td className="p-4 border border-gray-700">Comparative Analysis</td>
                <td className="p-4 border border-gray-700">Benchmark student progress against class or national averages.</td>
              </tr>
              <tr className="bg-gray-800">
                <td className="p-4 border border-gray-700">Parental Reports</td>
                <td className="p-4 border border-gray-700">Generate detailed progress reports for easy parent-teacher communication.</td>
              </tr>
              <tr className="bg-gray-700">
                <td className="p-4 border border-gray-700">Skill Development Tracking</td>
                <td className="p-4 border border-gray-700">Monitor extracurricular and co-curricular activities for holistic growth.</td>
              </tr>
              <tr className="bg-gray-800">
                <td className="p-4 border border-gray-700">Personalized Learning Paths</td>
                <td className="p-4 border border-gray-700">Adaptive learning suggestions based on individual strengths and weaknesses.</td>
              </tr>
              <tr className="bg-gray-700">
                <td className="p-4 border border-gray-700">Behavioral Insights</td>
                <td className="p-4 border border-gray-700">Track student behavior patterns for better mentorship and counseling.</td>
              </tr>
              <tr className="bg-gray-800">
                <td className="p-4 border border-gray-700">Exam Performance Predictions</td>
                <td className="p-4 border border-gray-700">AI-driven predictions on student exam results for early intervention.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </WrapperContainer>
  );
};

export default StudentPerformanceTracking;
