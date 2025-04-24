import WrapperContainer from '@/Layout/WrapperContainer'
import Heading from '@/Layout/Heading'
import { FaShieldAlt, FaUserPlus, FaLock, FaComments, FaMapMarkerAlt, FaCamera, FaCloudUploadAlt } from 'react-icons/fa'
import { SiFirebase, SiNginx, SiGithub } from 'react-icons/si'

const safetyFeatures = [
    {
        icon: <FaUserPlus />,
        title: 'Profile Verification',
        description:
            'Tinder uses photo verification to ensure that the person in the profile picture is the person using the account. Verified profiles provide authenticity and reduce the risk of catfishing.',
    },
    {
        icon: <FaShieldAlt />,
        title: 'Privacy & Data Security',
        description:
            'Tinder encrypts user data and uses secure authentication methods to protect user information. Personal data is kept private and not shared without consent.',
    },
    {
        icon: <FaLock />,
        title: 'Secure Messaging',
        description:
            'Only mutual matches can send messages to each other. This feature minimizes unsolicited messages and ensures that communication is safe and respectful.',
    },
    {
        icon: <FaComments />,
        title: 'Reporting & Blocking',
        description:
            'Users can easily report or block inappropriate behavior, harassment, or abusive content. Tinder investigates all reports to ensure a safe environment for everyone.',
    },
    {
        icon: <FaMapMarkerAlt />,
        title: 'Geolocation-Based Matching',
        description:
            'Tinder uses geolocation to match users based on their proximity. This allows you to meet people in your area and helps reduce risks related to meeting strangers.',
    },
    {
        icon: <FaCamera />,
        title: 'Photo Sharing & Verification',
        description:
            'Tinder allows users to upload photos and videos to enhance their profile. Photo verification helps ensure profiles are genuine and safe.',
    },
    {
        icon: <FaCloudUploadAlt />,
        title: 'Data Encryption',
        description:
            'Tinder uses data encryption to ensure that all messages, photos, and personal information are securely transmitted and protected from unauthorized access.',
    },
    {
        icon: <SiFirebase />,
        title: 'Account Authentication & 2FA',
        description:
            'Tinder supports two-factor authentication (2FA) to add an extra layer of security for user accounts, ensuring that only authorized individuals can access them.',
    },
    {
        icon: <SiGithub />,
        title: 'Moderation Tools',
        description:
            'Tinder employs both AI-driven and human moderators to ensure that users comply with community guidelines, keeping the platform safe and welcoming.',
    },
]

const SafetyPage = () => {
    return (
        <WrapperContainer>
            <div className="p-10 mt-[-80px]">
                <Heading className="text-3xl font-bold text-center mb-10">🔒 How Tinder Keeps You Safe</Heading>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {safetyFeatures.map((feature, idx) => (
    <div
      key={idx}
      className="bg-white hover:bg-gradient-to-r hover:from-pink-200 hover:to-purple-300 p-6 rounded-xl shadow hover:shadow-xl transition-all duration-500"
    >
      <div className="text-4xl text-blue-600 mb-4">{feature.icon}</div>
      <h2 className="text-xl font-semibold mb-4 text-blue-600">{feature.title}</h2>
      <p className="text-sm text-gray-700">{feature.description}</p>
    </div>
  ))}
</div>


            </div>
        </WrapperContainer>
    )
}

export default SafetyPage
