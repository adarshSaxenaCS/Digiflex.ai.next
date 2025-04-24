import Head from "next/head";
import WrapperContainer from "@/Layout/WrapperContainer";
import {
  FaLock,
  FaSearch,
  FaGlobe,
  FaPalette,
  FaUsers,
  FaBell,
  FaPoll,
  FaMicrophone,
  FaChartBar,
  FaCommentDots,
  FaThumbsUp,
  FaRobot,
} from "react-icons/fa";
import Paragraph from "@/Layout/Paragraph";

const features = [
  {
    icon: <FaLock size={30} />,
    title: "End-to-End Encryption",
    description: "Ensures private messages are only visible to sender and receiver.",
  },
  {
    icon: <FaSearch size={30} />,
    title: "Advanced Search Filters",
    description: "Filter tweets by hashtags, mentions, dates, and more.",
  },
  {
    icon: <FaGlobe size={30} />,
    title: "Global Language Support",
    description: "Use the platform in multiple languages globally.",
  },
  {
    icon: <FaPalette size={30} />,
    title: "Theme Customization",
    description: "Switch between light, dark, and custom themes.",
  },
  {
    icon: <FaUsers size={30} />,
    title: "Group Tweets",
    description: "Start private tweet groups for friends, teams, or fans.",
  },
  {
    icon: <FaBell size={30} />,
    title: "Priority Notifications",
    description: "Get notifications first from your favorite accounts.",
  },
  {
    icon: <FaPoll size={30} />,
    title: "Enhanced Polls",
    description: "Create longer and more interactive polls with scheduling.",
  },
  {
    icon: <FaMicrophone size={30} />,
    title: "Voice Tweets",
    description: "Let users post voice tweets directly from the app.",
  },
  {
    icon: <FaChartBar size={30} />,
    title: "Analytics Dashboard",
    description: "See how your tweets are performing in real-time.",
  },
  {
    icon: <FaCommentDots size={30} />,
    title: "Threaded Conversations",
    description: "Better organize tweet replies and follow-ups.",
  },
  {
    icon: <FaThumbsUp size={30} />,
    title: "Reactions",
    description: "React with emojis, not just likes and retweets.",
  },
  {
    icon: <FaRobot size={30} />,
    title: "AI-Powered Suggestions",
    description: "Auto-suggest hashtags, content, and people to follow.",
  },
];

export default function AdditionalFeatureWeProvide() {
  return (
    <>
      <Head>
        <title>Additional Features We Provide</title>
      </Head>

      <WrapperContainer>
        <section className="bg-gray-100 min-h-screen py-16 px-6">
          <h1 className="text-4xl font-bold text-center text-blue-700 mb-[30px]">
            Additional Features We Provide
          </h1>

          <Paragraph className="mb-[50px]">
          More control, more creativity — explore the extra features we bring to your Twitter clone.
          </Paragraph>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative bg-white p-6 rounded-xl shadow-md group overflow-hidden hover:shadow-xl transition duration-300"
              >
                {/* Top border animation */}
                <div className="absolute top-0 left-0 h-1 w-full bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="mb-4 text-blue-600">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </WrapperContainer>
    </>
  );
}
