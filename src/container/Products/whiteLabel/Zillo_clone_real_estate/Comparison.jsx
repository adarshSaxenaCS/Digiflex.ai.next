import WrapperContainer from "@/Layout/WrapperContainer";
import { Check, X } from "lucide-react";

const Comparison = () => {
  return (
    <WrapperContainer>
      <div className="py-10 mb-[50px] h-[550px] bg-gray-100">
        <div className="px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            Why Choose Us Over Zillow?
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="py-3 px-6 text-left">Features</th>
                  <th className="py-3 px-6 text-left">Zillow</th>
                  <th className="py-3 px-6 text-left">Our Platform</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                {[
                  [
                    "Real-Time Listings",
                    "Limited",
                    <>
                      <Check className="inline text-green-600 w-5 h-5 mr-2" />
                      Live & Instant Updates
                    </>,
                  ],
                  [
                    "User Experience",
                    "Cluttered",
                    <>
                      <Check className="inline text-green-600 w-5 h-5 mr-2" />
                      Clean & Modern UI
                    </>,
                  ],
                  [
                    "AI Recommendations",
                    <>
                      <X className="inline text-red-600 w-5 h-5 mr-2" />
                      Not Available
                    </>,
                    <>
                      <Check className="inline text-green-600 w-5 h-5 mr-2" />
                      Personalized Suggestions
                    </>,
                  ],
                  [
                    "Support",
                    "Email Only",
                    <>
                      <Check className="inline text-green-600 w-5 h-5 mr-2" />
                      Live Chat + Phone
                    </>,
                  ],
                  [
                    "Customization",
                    "Limited",
                    <>
                      <Check className="inline text-green-600 w-5 h-5 mr-2" />
                      Full Theme Control
                    </>,
                  ],
                ].map(([feature, zillow, ours], index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-blue-50 hover:shadow-sm transition-all duration-200"
                  >
                    <td className="py-4 px-6 font-medium">{feature}</td>
                    <td className="py-4 px-6">{zillow}</td>
                    <td className="py-4 px-6">{ours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
};

export default Comparison;
