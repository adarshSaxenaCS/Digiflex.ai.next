import React from 'react';
import Image from 'next/image';
import WrapperContainer from '@/Layout/WrapperContainer';
import Heading from '@/Layout/Heading';

const alibabaApps = [
    { name: "Taobao", description: "China’s largest mobile commerce destination." },
    { name: "Tmall", description: "Premium B2C retail platform for branded products." },
    { name: "AliExpress", description: "Retail marketplace for consumers worldwide." },
    { name: "Lazada", description: "Leading eCommerce platform in Southeast Asia." },
    { name: "Cainiao Network", description: "Smart logistics platform for global deliveries." },
    { name: "Alimama", description: "Marketing technology platform for data-driven advertising." },
    { name: "Alibaba Cloud", description: "Leading cloud computing and data intelligence platform." },
    { name: "Youku", description: "Online video hosting service, like YouTube." },
    { name: "DingTalk", description: "Enterprise communication and collaboration platform." },
    { name: "Ant Group", description: "Financial services including Alipay, digital banking, etc." },
];

const AlibabaApps = () => {
    return (
        <WrapperContainer>
            <div className="min-h-screen p-6 md:p-10 bg-gradient-to-br from-white to-blue-50 transition-all duration-300">
                <Heading className="text-4xl font-bold mb-10 text-blue-800 text-center drop-shadow-sm">🚀 Apps & Platforms by Alibaba Group</Heading>

                <div className="flex flex-col md:flex-row items-start gap-10">
                    {/* Left Images */}
                    <div className="md:w-1/2 w-full space-y-6">
                        {[
                            "https://th.bing.com/th/id/R.41519705e2b396d1ca68541d0b7c4d32?rik=EZkBfOUXF%2fxqBw&riu=http%3a%2f%2fwww.nadhir.me%2fwp-content%2fuploads%2f2018%2f04%2fAlibabaEcosystem.jpg&ehk=7QEXGOYYqfzggsw6WH3SYlArfgyKcv3fnn%2bwG4b1VFo%3d&risl=&pid=ImgRaw&r=0",
                            "https://s.alicdn.com/@img/tfs/TB1F90RM8r0gK0jSZFnXXbRRXXa-1302-685.jpg",
                            "https://examinechina.com/wp-content/uploads/alibaba-group-hol-companies.jpg"
                        ].map((src, index) => (
                            <div key={index} className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                                <Image
                                    src={src}
                                    alt={`Alibaba ${index + 1}`}
                                    width={600}
                                    height={500}
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Right Content */}
                    <div className="md:w-1/2 w-full space-y-5">
                        {alibabaApps.map((app, index) => (
                            <div
                                key={index}
                                className="p-5 border border-gray-200 rounded-xl shadow-sm bg-white/80 backdrop-blur-sm
                 hover:bg-blue-100 hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                            >
                                <h2 className="text-xl font-semibold text-blue-700 mb-1">{app.name}</h2>
                                <p className="text-gray-700">{app.description}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </WrapperContainer>
    );
};

export default AlibabaApps;
