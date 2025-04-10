
// import React from "react";
// import { ShieldCheck } from "lucide-react";

// const PrivacyPolicy = () => {
//   const sections = [
//     {
//       title: "Introduction",
//       content:
//         "Welcome to Quest Digiflex. Founded in 2015, we are a global technology company specializing in AI, Blockchain, E-commerce websites, Cloud solutions, and Web Development. We are headquartered in India, with additional offices in Dubai, the USA, and the UK.",
//     },
//     {
//       title: "Information We Collect",
//       content:
//         "We collect personal information such as your name, email, contact number, and business information when you interact with our services or submit forms on our website.",
//     },
//     {
//       title: "Use of Information",
//       content:
//         "Your information helps us respond to inquiries, improve our services, personalize your experience, and keep you updated with relevant information.",
//     },
//     {
//       title: "Sharing Information",
//       content:
//         "We do not sell your data. We may share your information with trusted third-party vendors solely for business operations and only under strict confidentiality agreements.",
//     },
//     {
//       title: "Security",
//       content:
//         "We implement robust security measures to protect your data. However, no method of transmission over the internet is 100% secure.",
//     },
//     {
//       title: "Cookies",
//       content:
//         "Our website uses cookies to enhance your browsing experience. You can disable cookies through your browser settings.",
//     },
//     {
//       title: "Changes to This Policy",
//       content:
//         "We may update this Privacy Policy from time to time. All changes will be posted on this page.",
//     },
//     {
//       title: "Contact Us",
//       content:
//         'For any questions regarding this Privacy Policy, please contact us at <a href="mailto:info@questdigiflex.com" class="text-blue-600 underline hover:text-blue-800">info@questdigiflex.com</a>.',
//     },
//   ];

//   return (
//     <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 px-6 min-h-screen">
//       <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-3xl border border-blue-100 p-8 md:p-14">
//         <h1 className="text-center text-4xl md:text-5xl font-bold text-blue-800 mb-12">
//           <span className="inline-flex items-center gap-3 justify-center">
//             <ShieldCheck className="w-10 h-10 text-green-600" />
//             Privacy Policy
//           </span>
//         </h1>

//         {sections.map((section, index) => (
//           <section key={index} className="mb-10">
//             <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-3">
//               {section.title}
//             </h2>
//             <p
//               className="text-lg md:text-xl leading-relaxed text-gray-700"
//               dangerouslySetInnerHTML={{ __html: section.content }}
//             />
//           </section>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PrivacyPolicy;

import React from "react";
import { ShieldCheck } from "lucide-react";
import Heading from "@/Layout/Heading";
import WrapperContainer from "@/Layout/WrapperContainer";
import Subheading from "@/Layout/Subheading";

const PrivacyPolicy = () => {
    const sections = [
        {
            title: "Introduction",
            content:
                "Welcome to Quest Digiflex. Founded in 2015, we are a global technology company specializing in AI, Blockchain, E-commerce websites, Cloud solutions, and Web Development. We are headquartered in India, with additional offices in Dubai, the USA, and the UK.",
        },
        {
            title: "Information We Collect",
            content:
                "We collect personal information such as your name, email, contact number, IP address, and business details when you interact with our services, contact us, or submit forms on our website.",
        },
        {
            title: "How We Use Your Information",
            content:
                "Your data helps us to improve our services, provide customer support, personalize user experience, communicate updates or marketing offers, and fulfill contractual obligations.",
        },
        {
            title: "Sharing of Information",
            content:
                "We do not sell your personal data. We may share your data with trusted third-party service providers (e.g., analytics tools, hosting platforms) to operate our services. These providers are bound by strict confidentiality agreements.",
        },
        {
            title: "Third-Party Services",
            content:
                "Our website may contain links to third-party platforms or tools. We are not responsible for the privacy practices or content of these third-party services. Please review their policies separately.",
        },
        {
            title: "User Rights",
            content:
                "You have the right to access, update, or delete your personal data. If you wish to exercise these rights, please contact us. We will respond in accordance with applicable laws.",
        },
        {
            title: "Data Retention",
            content:
                "We retain personal data for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.",
        },
        {
            title: "Security",
            content:
                "We implement advanced technical and organizational measures to protect your personal data from unauthorized access, loss, or misuse. However, no system is 100% secure over the internet.",
        },
        {
            title: "Cookies",
            content:
                "Our site uses cookies and similar technologies to enhance user experience, analyze website traffic, and support marketing efforts. You can adjust your browser settings to disable cookies.",
        },
        {
            title: "Children's Privacy",
            content:
                "Our services are not directed to individuals under the age of 13. We do not knowingly collect data from children. If we become aware of such data, we will take steps to delete it.",
        },
        {
            title: "Changes to This Policy",
            content:
                "We may update this Privacy Policy occasionally. Changes will be posted on this page, and we encourage you to review it periodically.",
        },
        {
            title: "Contact Us",
            content:
                'If you have any questions about this Privacy Policy, feel free to reach out at <a href="mailto:info@questdigiflex.com" class="text-blue-600 underline hover:text-blue-800">info@questdigiflex.com</a>.',
        },
    ];

    return (
        <WrapperContainer>
            <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 px-6 min-h-screen">
            

                <Heading className="inline-flex items-center justify-center gap-3 text-center w-full">
                    <ShieldCheck className="w-10 h-10 text-green-600" />
                    Privacy Policy
                </Heading>


                {sections.map((section, index) => (
                    <section key={index} className="mb-10">
                        <Subheading>
                        {section.title}
                        </Subheading>
                           
                           
                        
                        <p
                            className="text-lg md:text-xl leading-relaxed text-gray-700"
                            dangerouslySetInnerHTML={{ __html: section.content }}
                        />
                    </section>
                ))}
            
        </div>
        </WrapperContainer>
        
    );
};

export default PrivacyPolicy;
