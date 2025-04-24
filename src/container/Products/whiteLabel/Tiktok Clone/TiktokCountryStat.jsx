import WrapperContainer from '@/Layout/WrapperContainer';
import Image from 'next/image';

export default function TikTokCountryStats() {
    const countries = [
        { name: 'Bangladesh', users: 37.5 },
        { name: 'Thailand', users: 50.8 },
        { name: 'Russia', users: 56.0 },
        { name: 'Philippines', users: 56.1 },
        { name: 'Pakistan', users: 62.1 },
        { name: 'Vietnam', users: 65.6 },
        { name: 'Mexico', users: 77.5 },
        { name: 'Brazil', users: 105.3 },
        { name: 'United States', users: 120.5 },
        { name: 'Indonesia', users: 157.6 },
    ];

    return (
        <WrapperContainer>
            <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
                TikTok User Statistics by Country
            </h2>

            <div className="flex flex-col md:flex-row h-auto md:h-[600px] border-2 p-4 rounded-md border-gray-400 gap-4">
                {/* Left Image Section */}
                <div className="w-full md:w-1/2 h-64 md:h-full">
                    <div className="relative w-full h-full rounded-md overflow-hidden">
                        <Image
                            src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/TikTokWorld-gif.gif"
                            alt="TikTokWorld-gif"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Right Scrollable Country List */}
                <div className="w-full md:w-1/2 md:p-10 p-4 overflow-y-auto max-h-[400px] md:max-h-full">
                    <ul className="space-y-4">
                        {countries
                            .sort((a, b) => a.users - b.users)
                            .map((country, index) => (
                                <li
                                    key={index}
                                    className="bg-white p-4 rounded-lg shadow hover:bg-gray-200 transition"
                                >
                                    <div className="text-xl font-semibold text-gray-700">
                                        {country.name}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        Users: {country.users} million
                                    </div>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </WrapperContainer>
    );
}
