import Head from 'next/head';
import { FaFeatherAlt, FaHeart, FaRetweet, FaComment, FaUser, FaHashtag, FaBell, FaSearch, FaMoon } from 'react-icons/fa';
import WrapperContainer from '@/Layout/WrapperContainer';

const features = [
  {
    icon: <FaFeatherAlt size={30} />,
    title: 'Tweeting',
    description: 'Post short messages (tweets) with text, images, or videos.',
  },
  {
    icon: <FaHeart size={30} />,
    title: 'Like Tweets',
    description: 'Users can like tweets to show appreciation.',
  },
  {
    icon: <FaRetweet size={30} />,
    title: 'Retweet',
    description: 'Share tweets with followers using the retweet feature.',
  },
  {
    icon: <FaComment size={30} />,
    title: 'Replies and Threads',
    description: 'Start conversations by replying to tweets and forming threads.',
  },
  {
    icon: <FaUser size={30} />,
    title: 'User Profiles',
    description: 'Each user has a public profile with bio, tweets, and stats.',
  },
  {
    icon: <FaHashtag size={30} />,
    title: 'Trending Hashtags',
    description: 'Use hashtags to make tweets discoverable and join trending topics.',
  },
  {
    icon: <FaBell size={30} />,
    title: 'Notifications',
    description: 'Get notified for likes, retweets, replies, and follows.',
  },
  {
    icon: <FaSearch size={30} />,
    title: 'Search',
    description: 'Search for users, tweets, and hashtags in real-time.',
  },
  {
    icon: <FaMoon size={30} />,
    title: 'Dark Mode',
    description: 'Switch between light and dark themes for better accessibility.',
  },
];

function FeatureCard({ feature }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl text-center transition duration-300 hover:scale-105">
      <div className="text-blue-500 mb-4 mx-auto">{feature.icon}</div>
      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </div>
  );
}

export default function TwitterCloneFeatures() {
  return (
    <>
      <Head>
        <title>Twitter Clone – Features</title>
      </Head>

      <WrapperContainer>
        <section className="py-16 px-6 bg-gray-50">
          <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-10">Twitter Clone Features</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </section>
      </WrapperContainer>
    </>
  );
}
