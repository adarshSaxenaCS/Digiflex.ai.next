
import Heading from '@/Layout/Heading'
import WrapperContainer from '@/Layout/WrapperContainer'

const MarketingTools = () => {
    const tools = [
        {
            category: "Marketing Cloud Tools",
            items: [
                { name: "Journey Builder", description: "Create and automate customer journeys" },
                { name: "Email Studio", description: "Design and send personalized emails" },
                { name: "Mobile Studio", description: "Manage mobile messaging campaigns" }
            ]
        },
        {
            category: "Pardot Tools",
            items: [
                { name: "Engagement Studio", description: "Build sophisticated nurture programs" },
                { name: "Landing Page Builder", description: "Create conversion-optimized pages" },
                { name: "Form Builder", description: "Design lead capture forms" }
            ]
        }
    ];

    return (
        <WrapperContainer>
            <div className="max-w-6xl mx-auto px-4">
                <Heading>Marketing Solutions Tools</Heading>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {tools.map((toolSet, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                            <h3 className="text-2xl font-semibold mb-4 text-blue-600">{toolSet.category}</h3>
                            {toolSet.items.map((tool, idx) => (
                                <div key={idx} className="mb-4 border-l-4 border-blue-500 pl-4">
                                    <h4 className="text-xl font-semibold">{tool.name}</h4>
                                    <p className="text-gray-600">{tool.description}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </WrapperContainer>
    );
};

export default MarketingTools;
