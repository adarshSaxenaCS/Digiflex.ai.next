import WrapperContainer from "@/Layout/WrapperContainer";
import { Check, X, Star, ShieldCheck, Sparkles, DollarSign, Clock } from "lucide-react";
import Heading from "@/Layout/Heading";

const Comparison = () => {
  return (
    <WrapperContainer>
      <div className="py-10 mb-12 bg-gray-100">
        <div className="px-4 sm:px-6 lg:px-8">
          <Heading>
            Why Choose Us Over Zillow?
          </Heading>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden text-sm sm:text-base">
              <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="py-3 px-4 sm:px-6 text-left">Features</th>
                  <th className="py-3 px-4 sm:px-6 text-left">Zillow</th>
                  <th className="py-3 px-4 sm:px-6 text-left">Our Platform</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                {[
                  [
                    <>
                      <Clock className="inline w-5 h-5 text-blue-500 mr-2" />
                      Real-Time Listings
                    </>,
                    "Limited",
                    <>
                      <Check className="inline text-green-600 w-5 h-5 mr-2" />
                      Live & Instant Updates
                    </>,
                  ],
                  [
                    <>
                      <Sparkles className="inline w-5 h-5 text-purple-500 mr-2" />
                      User Experience
                    </>,
                    "Cluttered",
                    <>
                      <Check className="inline text-green-600 w-5 h-5 mr-2" />
                      Clean & Modern UI
                    </>,
                  ],
                  [
                    <>
                      <Star className="inline w-5 h-5 text-yellow-500 mr-2" />
                      AI Recommendations
                    </>,
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
                    <>
                      <ShieldCheck className="inline w-5 h-5 text-green-600 mr-2" />
                      Security & Privacy
                    </>,
                    "Standard",
                    <>
                      <Check className="inline text-green-600 w-5 h-5 mr-2" />
                      Advanced Data Protection
                    </>,
                  ],
                  [
                    <>
                      <DollarSign className="inline w-5 h-5 text-indigo-500 mr-2" />
                      Cost to Use
                    </>,
                    "High Fees",
                    <>
                      <Check className="inline text-green-600 w-5 h-5 mr-2" />
                      Affordable Pricing
                    </>,
                  ],
                  [
                    <>
                      <Sparkles className="inline w-5 h-5 text-pink-500 mr-2" />
                      Customization
                    </>,
                    "Limited",
                    <>
                      <Check className="inline text-green-600 w-5 h-5 mr-2" />
                      Full Theme Control
                    </>,
                  ],
                  [
                    <>
                      <ShieldCheck className="inline w-5 h-5 text-green-600 mr-2" />
                      Customer Support
                    </>,
                    "Email Only",
                    <>
                      <Check className="inline text-green-600 w-5 h-5 mr-2" />
                      24/7 Live Chat + Phone
                    </>,
                  ],
                ].map(([feature, zillow, ours], index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-blue-200 hover:shadow-sm transition-all duration-200"
                  >
                    <td className="py-3 px-4 sm:px-6 font-medium">{feature}</td>
                    <td className="py-3 px-4 sm:px-6">{zillow}</td>
                    <td className="py-3 px-4 sm:px-6">{ours}</td>
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
