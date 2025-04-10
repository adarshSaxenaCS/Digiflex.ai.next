'use client'

import React, { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import WrapperContainer from '@/Layout/WrapperContainer';
import Heading from '@/Layout/Heading';
import Paragraph from '@/Layout/Paragraph';
import Subheading from '@/Layout/Subheading';
import * as LucideIcons from 'lucide-react';

const techStacks = [
    {
        title: 'MERN Stack',
        icon: 'Server',
        description: 'Fast development, scalable, and widely supported.',
        detailContent: `Frontend: React.js\nBackend: Node.js + Express.js\nDatabase: MongoDB\nAuthentication: JWT, OAuth (Google, Facebook)\nPayments: Stripe, Razorpay, PayPal`
    },
    {
        title: 'MEVN Stack',
        icon: 'Code',
        description: 'Simpler than React, faster UI performance.',
        detailContent: `Frontend: Vue.js\nBackend: Node.js + Express.js\nDatabase: MongoDB\nAuthentication: JWT, OAuth\nPayments: Stripe, PayPal`
    },
    {
        title: 'LAMP Stack',
        icon: 'Database',
        description: 'Cost-effective, widely used, and good for shared hosting.',
        detailContent: `Frontend: HTML, CSS, JavaScript, Bootstrap\nBackend: PHP (Laravel/CodeIgniter)\nDatabase: MySQL\nAuthentication: Sessions, JWT\nPayments: PayPal, Stripe`
    },
    {
        title: 'JAMstack',
        icon: 'Cloud',
        description: 'Fast, secure, and scalable with minimal backend maintenance.',
        detailContent: `Frontend: Next.js / React.js\nBackend: Serverless (AWS Lambda, Firebase)\nDatabase: Firestore / Supabase\nAuthentication: Firebase Auth, Auth0\nPayments: Stripe`
    },
    {
        title: 'Django + React',
        icon: 'Code2',
        description: 'Secure, robust, and great for AI/ML-based analytics.',
        detailContent: `Frontend: React.js\nBackend: Django (Python, DRF)\nDatabase: PostgreSQL / SQLite\nAuthentication: Django Auth, JWT\nPayments: Stripe, Razorpay`
    }
];

const FeatureList = ({ title = 'Tech Stacks You Can Use in a Noon Clone', description = 'Popular and powerful tech stacks to build scalable, modern e-commerce platforms like Noon.', services = techStacks }) => {
    const [activeService, setActiveService] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleServiceClick = (index) => {
        setActiveService(activeService === index ? null : index);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
    };

    return (
        <WrapperContainer>
            <div className="font-sans antialiased flex justify-center">
                <section className="w-full max-w-6xl">
                    <div className="text-center mb-12">
                        <Heading>{title}</Heading>
                        <Paragraph className="text-center">{description}</Paragraph>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                        <button
                            onClick={handlePrev}
                            className="p-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 mr-[20px]"
                        >
                            <ArrowLeft size={24} />
                        </button>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto">
                            {services.slice(currentIndex, currentIndex + 3).map((service, index) => {
                                const IconComponent = LucideIcons[service.icon];
                                const isActive = activeService === index;

                                return (
                                    <div
                                        key={index}
                                        className={`border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 bg-white p-6 flex flex-col items-center text-center ${isActive ? 'ring-2 ring-blue-600' : ''
                                            }`}
                                    >
                                        <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mb-4 shadow-md">
                                            {IconComponent && <IconComponent size={28} className="text-green-600" />}
                                        </div>

                                        <Subheading>{service.title}</Subheading>
                                        <Paragraph className="text-center">{service.description}</Paragraph>

                                        <button
                                            onClick={() => handleServiceClick(index)}
                                            className="mt-4 border border-blue-600 text-blue-600 font-medium py-2 px-6 rounded-lg hover:bg-blue-600 hover:text-white transition flex items-center"
                                        >
                                            <span>{isActive ? 'Hide Details' : 'View Details'}</span>
                                            <ArrowRight size={16} className="ml-2" />
                                        </button>

                                        {isActive && (
                                            <div className="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-700 w-full text-left whitespace-pre-line">
                                                <p>{service.detailContent}</p>
                                                <button className="mt-3 text-blue-600 font-medium flex items-center hover:text-blue-800 transition">
                                                    <span>Request Consultation</span>
                                                    <ArrowRight size={16} className="ml-1" />
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        <button
                            onClick={handleNext}
                            className="p-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 ml-[20px]"
                        >
                            <ArrowRight size={24} />
                        </button>
                    </div>
                </section>
            </div>
        </WrapperContainer>
    );
};

export default FeatureList;