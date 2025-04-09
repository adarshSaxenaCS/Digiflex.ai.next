import WrapperContainer from "../Layout/WrapperContainer";
import { submitContactForm } from "./actions";

export default function ContactForm() {
  async function handleSubmit(event) {
    event.preventDefault(); // Prevent page reload

    const formData = new FormData(event.target); // Get form data
    const result = await submitContactForm(formData); // Send to server

    if (result.success) {
      alert("Form submitted successfully!");
    } else {
      alert("Form submission failed. Please try again.");
    }
    
  }

  return (
    <WrapperContainer>
      <div className="flex flex-col justify-between w-full md:flex-row mx-auto bg-white rounded-lg pb-8">
        {/* Left Section */}
        <div className="md:w-1/2 md:pr-8">
          <h2 className="text-5xl md:text-5xl font-bold mb-4 text-blue-700">
            Get in Touch
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6">
            Let's explore how Digiflex.ai can transform your IT infrastructure.
          </p>

          <ul className="space-y-4 text-sm md:text-base border rounded-md bg-blue-50 px-3 py-4">
            <li className="flex items-start">
              <span className="text-blue-500 font-bold text-lg mr-2">✓</span>
              <span className="font-semibold text-blue-900">
                Advanced AI-powered IT solutions tailored for your business needs.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 font-bold text-lg mr-2">✓</span>
              <span className="font-semibold text-blue-900">
                Enterprise-grade security and compliance measures.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 font-bold text-lg mr-2">✓</span>
              <span className="font-semibold text-blue-900">
                24/7 dedicated technical support and consulting services.
              </span>
            </li>
          </ul>

          <p className="text-xs md:text-sm text-gray-500 p-6">
            Looking for support? Visit{" "}
            <a href="#" className="text-blue-600 underline">
              help & documentation
            </a>
          </p>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 md:mt-0 pb-2">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-700">First name *</label>
                <input
                  type="text"
                  name="firstName"
                  required
                  placeholder="John"
                  className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm text-sm border-gray-300 focus:ring-blue-300 focus:border-blue-400"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700">Last name *</label>
                <input
                  type="text"
                  name="lastName"
                  required
                  placeholder="Doe"
                  className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm text-sm border-gray-300 focus:ring-blue-300 focus:border-blue-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700">Work email *</label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@company.com"
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm text-sm border-gray-300 focus:ring-blue-300 focus:border-blue-400"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700">Company name *</label>
              <input
                type="text"
                name="companyName"
                required
                placeholder="Your Company"
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm text-sm border-gray-300 focus:ring-blue-300 focus:border-blue-400"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700">Company size *</label>
              <select
                name="companySize"
                required
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm text-sm border-gray-300 focus:ring-blue-300 focus:border-blue-400"
              >
                <option value="">Please select</option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-200">51-200</option>
                <option value="201-500">201-500</option>
                <option value="500+">500+</option>
              </select>
            </div>


            <div>
              <label className="block text-xs font-medium text-gray-700">Country or region *</label>
              <select
                name="country"
                required
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm text-sm border-gray-300 focus:ring-blue-300 focus:border-blue-400"
              >
                <option value="">Please select</option>
                <option value="India">India</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Australia">Australia</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700">Anything else?</label>
              <textarea
                name="inquiry"
                placeholder="Tell us how we can help..."
                className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm text-sm focus:ring-blue-500 focus:border-blue-500"
                rows={4}
              />
            </div>

            <button
              type="submit"
              className="mt-4 w-full sm:w-auto px-6 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 text-sm font-medium transition-colors duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </WrapperContainer>
  );
}
