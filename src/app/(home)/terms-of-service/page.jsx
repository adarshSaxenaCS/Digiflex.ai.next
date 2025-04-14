
import Heading from "@/Layout/Heading";
import Subheading from "@/Layout/Subheading";
import WrapperContainer from "@/Layout/WrapperContainer";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const TermsAndConditions = () => {
  const sections = [
    {
      title: "Introduction",
      text:
        "Welcome to Quest Digiflex. By accessing or using our services, you agree to be bound by these terms and conditions. Please read them carefully.",
    },
    {
      title: "Services Offered",
      text:
        "Quest Digiflex provides professional services in AI, Blockchain, UI/UX Design, Cloud Solutions, Game Development, and E-commerce Application Development.",
    },
    {
      title: "Use of Services",
      text:
        "You agree to use our services only for lawful purposes. Any misuse or unauthorized use may result in termination of your access.",
    },
    {
      title: "Intellectual Property",
      text:
        "All content, trademarks, and data on our website and provided through our services are the property of Quest Digiflex or its licensors.",
    },
    {
      title: "Privacy Policy",
      text:
        "Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information.",
    },
    {
      title: "Limitation of Liability",
      text:
        "Quest Digiflex shall not be held liable for any damages arising out of the use or inability to use our services.",
    },
    {
      title: "Changes to Terms",
      text:
        "We reserve the right to modify these terms at any time. Continued use of the services implies acceptance of the updated terms.",
    },
    {
      title: "Contact Us",
      text:
        "If you have any questions or concerns about these Terms, please contact us at info@questdigiflex.com.",
    },
  ];

  return (
    <WrapperContainer>
    <div className="">
      <div className="px-5 rounded-3xl shadow-2xl border">
       <Heading className="pt-5"> Terms & Conditions</Heading>

        {sections.map((section, index) => (
          <section key={index} className="mb-10">
            <Subheading>{section.title}</Subheading>
            <p className="text-lg text-gray-700 leading-relaxed">
              {section.text.includes("info@questdigiflex.com") ? (
                <>
                
                  If you have any questions or concerns about these Terms, please contact us at{" "}
                  <a
                    href="mailto:info@questdigiflex.com"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    info@questdigiflex.com
                  </a>
                  .
                </>
              ) : (
                section.text
              )}
            </p>
          </section>
        ))}
      </div>
    </div>
    </WrapperContainer>
  );
};

export default TermsAndConditions;

// import React from "react";
// import { FaCheckCircle } from "react-icons/fa";

// const TermsAndConditions = () => {
//   const sections = [
//     {
//       title: "Introduction",
//       text:
//         "Welcome to Quest Digiflex. By accessing or using our services, you agree to be bound by these terms and conditions. Please read them carefully.",
//     },
//     {
//       title: "Services Offered",
//       text:
//         "Quest Digiflex provides professional services in AI, Blockchain, UI/UX Design, Cloud Solutions, Game Development, and E-commerce Application Development.",
//     },
//     {
//       title: "Use of Services",
//       text:
//         "You agree to use our services only for lawful purposes. Any misuse or unauthorized use may result in termination of your access.",
//     },
//     {
//       title: "Intellectual Property",
//       text:
//         "All content, trademarks, and data on our website and provided through our services are the property of Quest Digiflex or its licensors.",
//     },
//     {
//       title: "Privacy Policy",
//       text:
//         "Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information.",
//     },
//     {
//       title: "Limitation of Liability",
//       text:
//         "Quest Digiflex shall not be held liable for any damages arising out of the use or inability to use our services.",
//     },
//     {
//       title: "Changes to Terms",
//       text:
//         "We reserve the right to modify these terms at any time. Continued use of the services implies acceptance of the updated terms.",
//     },
//     {
//       title: "Contact Us",
//       text:
//         "If you have any questions or concerns about these Terms, please contact us at info@questdigiflex.com.",
//     },
//   ];

//   return (
//     <div className="bg-gradient-to-b from-white to-indigo-50 py-16 px-4 md:px-10 min-h-screen">
//       <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-14 border border-gray-100">
//         <h1 className="text-4xl md:text-5xl font-extrabold text-center text-indigo-700 mb-12 tracking-tight">
//           Terms & Conditions
//         </h1>

//         <div className="space-y-10">
//           {sections.map((section, index) => (
//             <section
//               key={index}
//               className="group border-l-4 border-indigo-600 pl-6 pr-4 py-4 transition-transform hover:shadow-md bg-white rounded-lg"
//             >
//               <h2 className="text-2xl md:text-3xl font-semibold text-indigo-600 flex items-center gap-3 mb-3">
                
//                 {section.title}
//               </h2>
//               <p className="text-lg text-gray-700 leading-relaxed">
//                 {section.text.includes("info@questdigiflex.com") ? (
//                   <>
//                     If you have any questions or concerns about these Terms, please contact us at{" "}
//                     <a
//                       href="mailto:info@questdigiflex.com"
//                       className="text-indigo-600 font-medium underline hover:text-indigo-800"
//                     >
//                       info@questdigiflex.com
//                     </a>
//                     .
//                   </>
//                 ) : (
//                   section.text
//                 )}
//               </p>
//             </section>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TermsAndConditions;


