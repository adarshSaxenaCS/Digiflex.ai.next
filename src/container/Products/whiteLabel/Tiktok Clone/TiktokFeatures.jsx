import WrapperContainer from '@/Layout/WrapperContainer';
import {
  UserCircle,
  Video,
  Heart,
  Bell,
  Settings,
  Camera,
  ThumbsUp,
  Share2,
  LineChart,
  TrendingUp,
  Store
} from 'lucide-react';

export default function TiktokFeatures() {
  return (
    <WrapperContainer>
      <div>
        <header className="bg-gray-800 text-white text-center py-8">
          <h1 className="text-4xl font-semibold">TikTok Clone</h1>
          <p className="mt-2 text-lg">A Showcase of Features You Can Expect</p>
        </header>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2 mt-8">
            <Video className="w-10 h-10 text-gray-700" />
            Core Features
          </h2>
          <div className="space-y-4">
            {[
              {
                icon: <UserCircle className="text-indigo-500 w-10 h-10 mt-5 mr-4" />,
                title: 'User Authentication:',
                text:
                  'Sign up or log in securely using email or social platforms like Google or Facebook. Your data is encrypted, and sessions are managed seamlessly for a smooth user experience.'
              },
              {
                icon: <Camera className="text-pink-500 w-10 h-10 mt-5 mr-4" />,
                title: 'Video Upload & Streaming:',
                text:
                  'Users can upload videos in various formats and resolutions. Backend handles compression and CDN streaming, ensuring smooth playback even on slower connections.'
              },
              {
                icon: <ThumbsUp className="text-green-500 w-10 h-10 mt-5 mr-4" />,
                title: 'Personalized Feed:',
                text:
                  'Based on your watch history and interactions, our recommendation engine curates a feed that’s tailored to your interests and preferences.'
              },
              {
                icon: <Heart className="text-red-500 w-10 h-10 mt-5 mr-4" />,
                title: 'Engagement:',
                text:
                  'Viewers can like, comment, and share videos across platforms. Comments are real-time and sorted by relevance to foster active discussions.'
              },
              {
                icon: <UserCircle className="text-blue-500 w-10 h-10 mt-5 mr-4" />,
                title: 'Follow/Unfollow:',
                text:
                  'Users can follow their favorite creators to get updates and see content in their feed. All follow actions are reflected instantly in the UI.'
              },
              {
                icon: <Bell className="text-yellow-500 w-10 h-10 mt-5 mr-4" />,
                title: 'Real-time Notifications:',
                text:
                  'Instantly receive push alerts for likes, comments, follows, and more. Notifications are optimized for both desktop and mobile views.'
              },
              {
                icon: <Settings className="text-gray-600 w-10 h-10 mt-5 mr-4" />,
                title: 'Profile Customization:',
                text:
                  'Users can update their profile picture, bio, links, and manage privacy settings, giving them control over their public presence.'
              }
            ].map(({ icon, title, text }, index) => (
                <div
                key={index}
                className="bg-white p-5 rounded-lg shadow-md flex items-start gap-4 hover:bg-gray-100 transition group"
              >
                <div className="transition-transform duration-300 group-hover:-translate-y-1">
                  {icon}
                </div>
                <div>
                  <strong className="text-[20px] block">{title}</strong>
                  <span className="block text-[16px] mt-1">{text}</span>
                </div>
              </div>
              
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-2">
            <Store className="w-10 h-10 text-purple-700" />
            Additional Features
          </h2>
          <div className="space-y-4">
            {[
              {
                icon: <Video className="text-orange-500 w-10 h-10 mt-5 mr-4" />,
                title: 'Live Streaming:',
                text:
                  'Go live and interact with followers in real-time. Features like comments, reactions, and gifting are built-in for a rich live experience.'
              },
              {
                icon: <Camera className="text-pink-600 w-10 h-10 mt-5 mr-4" />,
                title: 'Video Editing Tools:',
                text:
                  'Use built-in tools to add filters, music, effects, transitions, and more — no need for external software to create viral content.'
              },
              {
                icon: <Share2 className="text-cyan-600 w-10 h-10 mt-5 mr-4" />,
                title: 'Recommendations:',
                text:
                  'Smart suggestions powered by AI and machine learning help users discover trending videos and creators aligned with their viewing habits.'
              },
              {
                icon: <Store className="text-emerald-600 w-10 h-10 mt-5 mr-4" />,
                title: 'In-App Purchases:',
                text:
                  'Monetization features allow users to buy video effects, premium filters, or boost video visibility with coins or tokens.'
              },
              {
                icon: <LineChart className="text-indigo-700 w-10 h-10 mt-5 mr-4" />,
                title: 'Admin Dashboard:',
                text:
                  'Admins get full control with analytics on user growth, content performance, reports, flagging, and system monitoring tools.'
              },
              {
                icon: <TrendingUp className="text-red-600 w-10 h-10 mt-5 mr-4" />,
                title: 'Trending Section:',
                text:
                  'A dynamic section showing the most viewed, liked, or shared videos in real-time. Algorithms ensure fresh and engaging content always surfaces.'
              }
            ].map(({ icon, title, text }, index) => (
                <div
                key={index}
                className="bg-white p-5 rounded-lg shadow-md flex items-start gap-4 hover:bg-gray-100 transition group"
              >
                <div className="transition-transform duration-300 group-hover:-translate-y-1">
                  {icon}
                </div>
                <div>
                  <strong className="text-[20px] block">{title}</strong>
                  <span className="block text-[16px] mt-1">{text}</span>
                </div>
              </div>
              
            ))}
          </div>
        </section>
      </div>
    </WrapperContainer>
  );
}
