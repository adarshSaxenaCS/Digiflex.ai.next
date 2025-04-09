import Image from "next/image";
import React from "react";

import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Subheading from "@/Layout/Subheading";
import Paragraph from "@/Layout/Paragraph";
import { SoftwareTestManagementFAQData } from "../FAQData";
import Faq from "@/components/Faq";

const Card = ({ image, title, description, points }) => (
    <div className="relative w-full h-56 sm:w-72 bg-black border border-green-500 text-white rounded-xl overflow-hidden shadow-2xl group transition-all duration-300 hover:scale-105">
        <div className="relative">
            <Image
                src={image}
                alt={title}
                className="w-full h-48 object-cover opacity-60 group-hover:opacity-90 transition-all duration-500"
                priority={false}
                width={100}
                height={100}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>
        <div className="absolute top-0 left-0 w-full p-4">
            <h3 className="font-bold text-xl text-white drop-shadow-lg mb-2 transform group-hover:translate-x-2 transition-transform">
                {title}
            </h3>
            <p className="text-sm text-white/80 mb-2">{description}</p>
            <ul className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 drop-shadow-md">
                {Object.values(points).map((point, index) => (
                    <li key={index} className="mb-1 text-start">
                        {point}
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

const AccelerateBusiness = () => {
    const cards = [
        {
            image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Automation.jpeg",
            title: "QA Advisory",
            description: "Guiding digital assurance to excellence",
            points: {
                p1: "Comprehensive digital assurance strategies",
                p2: "Custom testing plans tailored to your needs",
                p3: "Reliable insights to enhance performance",
            },
        },
        {
            image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Cybersecurity.jpeg",
            title: "AI Powered Testing",
            description: "Smarter, faster, more reliable",
            points: {
                p1: "AI-driven test case generation",
                p2: "Automated bug detection with machine learning",
                p3: "Improved accuracy and reduced testing time",
            },
        },
        {
            image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Shield.jpeg",
            title: "Quality Engineering",
            description: "Quality assured through our services",
            points: {
                p1: "Seamless integration into development workflows",
                p2: "Ensuring high-quality output at every stage",
                p3: "Focus on customer-centric quality improvement",
            },
        },
        {
            image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Automation.jpeg",
            title: "Next Gen Apps Testing",
            description: "Assuring tomorrow's solutions",
            points: {
                p1: "Next-gen tools for modern application testing",
                p2: "Support for complex and dynamic systems",
                p3: "Uncompromised reliability in testing solutions",
            },
        },
        {
            image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Cybersecurity.jpeg",
            title: "Enterprise Apps Testing",
            description: "Driving quality in platforms",
            points: {
                p1: "Scalable testing for large applications",
                p2: "Focus on enterprise security and compliance",
                p3: "Enhancing business continuity through testing",
            },
        },
        {
            image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Shield.jpeg",
            title: "Data & Analytics Testing",
            description: "Confidence through data insights",
            points: {
                p1: "Testing for data integrity and accuracy",
                p2: "Advanced analytics validation processes",
                p3: "Support for data-driven decision-making",
            },
        },
        {
            image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Automation.jpeg",
            title: "Automation Testing",
            description: "Scale with speed and quality",
            points: {
                p1: "Fast-track testing with automation frameworks",
                p2: "Improve coverage while reducing manual efforts",
                p3: "Integrate seamlessly into CI/CD pipelines",
            },
        },
        {
            image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Cybersecurity.jpeg",
            title: "QA for AI Systems",
            description: "Reliable AI with comprehensive QA",
            points: {
                p1: "AI-specific test case strategies",
                p2: "Validation of machine learning models",
                p3: "Ensuring ethical and unbiased AI behavior",
            },
        },
    ];

    return (
        <WrapperContainer>
            <div className="bg-white text-center">
                <Heading>What we do?</Heading>
                <Subheading className="text-center">
                    Accelerate your business
                </Subheading>
                <Paragraph className="text-center">
                    We strengthen enterprises for digital transformation.
                </Paragraph>

                <div className="flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 max-w-6xl">
                        {cards.map((card, index) => (
                            <Card
                                key={index}
                                image={card.image}
                                title={card.title}
                                description={card.description}
                                points={card.points}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Faq faqs={SoftwareTestManagementFAQData} />
        </WrapperContainer>
    );
};

export default AccelerateBusiness;
