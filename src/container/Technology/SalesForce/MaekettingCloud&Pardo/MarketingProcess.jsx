
import Heading from '@/Layout/Heading'
import WrapperContainer from '@/Layout/WrapperContainer'

const MarketingProcess = () => {
    const processes = [
        { step: "1", title: "Data Integration", description: "Unify customer data from multiple sources into a single view" },
        { step: "2", title: "Audience Segmentation", description: "Create targeted segments based on behavior and preferences" },
        { step: "3", title: "Journey Design", description: "Build automated customer journeys across channels" },
        { step: "4", title: "Campaign Execution", description: "Deploy personalized marketing campaigns" },
        { step: "5", title: "Lead Nurturing", description: "Nurture leads through the sales funnel" },
        { step: "6", title: "Performance Analysis", description: "Measure and optimize marketing ROI" }
    ];

    return (
        <WrapperContainer>
            <div className="max-w-6xl mx-auto px-4">
                <Heading>Marketing Automation Process</Heading>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {processes.map((process, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
                            <div className="text-2xl font-bold text-blue-600 mb-3">{process.step}</div>
                            <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                            <p className="text-gray-600">{process.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </WrapperContainer>
    );
};

export default MarketingProcess;
