import WrapperContainer from '@/Layout/WrapperContainer'
import React from 'react'
import { FaUserPlus, FaHeart, FaComments, FaMapMarkerAlt, FaCamera, FaStar, FaUnlockAlt, FaRegUserCircle, FaUsers } from 'react-icons/fa'
import { SiFirebase, SiTailwindcss, SiReact, SiNextdotjs, SiSpotify } from 'react-icons/si'

const features = [
    {
        icon: <FaUserPlus />,
        title: 'Profile Creation',
        description:
            'Easily create a personalized profile by adding your photos, bio, and interests. Sign up with email or social media accounts for seamless access.',
    },
    {
        icon: <FaHeart />,
        title: 'Swipe Functionality',
        description:
            'Swipe right to like or left to dislike users based on their profiles. Enjoy smooth swipe animations for a fun experience.',
    },
    {
        icon: <FaComments />,
        title: 'Messaging',
        description:
            'Connect with your matches through private, real-time messaging. Send text, images, and emojis to get to know each other better.',
    },
    {
        icon: <FaMapMarkerAlt />,
        title: 'Geolocation-Based Matching',
        description:
            'Find people near you! Geolocation-based matching helps you connect with people in your city or anywhere around the world.',
    },
    {
        icon: <FaCamera />,
        title: 'Photo Sharing',
        description:
            'Share your favorite moments with your matches. Upload unlimited images and videos to enhance your profile and interactions.',
    },
    {
        icon: <FaStar />,
        title: 'Boost Your Profile',
        description:
            'Increase your profile visibility with the Boost feature. Stand out to more people by getting your profile shown to more users for a limited time.',
    },
    {
        icon: <FaUnlockAlt />,
        title: 'Premium Features',
        description:
            'Unlock exclusive features such as seeing who liked you, unlimited swipes, and the ability to undo accidental swipes with Tinder Gold and Tinder Plus.',
    },
    {
        icon: <FaRegUserCircle />,
        title: 'Verification',
        description:
            'Verify your profile to build trust and increase your chances of getting matched. Verified profiles are more likely to be taken seriously.',
    },
    {
        icon: <FaUsers />,
        title: 'Group Matches',
        description:
            'Find people with similar interests by creating or joining group matches. Connect with others based on shared activities or hobbies.',
    },
    {
        icon: <SiSpotify />,
        title: 'Music Integration',
        description:
            'Integrate your Spotify account to showcase your favorite music tracks and playlists. Find matches with similar music tastes to help break the ice.',
    },
]

export default function FeaturesPage() {
    return (
        <WrapperContainer>
            <div className="container mx-auto p-8">
                {/* Hero Section */}
                <section className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-blue-600">🔥 Tinder Clone Features</h1>
                    <p className="text-xl text-gray-600 mt-4">
                        Experience a modern dating app with our Tinder clone. Swipe, connect, chat, and more!
                    </p>
                </section>

                {/* Features Section */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="bg-white hover:bg-gradient-to-r hover:from-pink-200 hover:to-purple-300 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="text-blue-500 text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-3 text-blue-600">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </section>



            </div>
        </WrapperContainer>
    )
}
