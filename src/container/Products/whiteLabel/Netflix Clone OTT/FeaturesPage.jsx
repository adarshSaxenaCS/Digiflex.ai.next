import WrapperContainer from "@/Layout/WrapperContainer";
import React from "react";

const features = [
  {
    title: "User Authentication",
    description: "Secure sign-up, login, and profile management.",
    imageUrl: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/NetflixUserAuthentication-gif.gif",
    alt:"NetflixUserAuthentication-gif" 
  },
  {
    title: "Streaming",
    description: "Seamless video streaming with adaptive quality based on internet speed.",
    imageUrl: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/NetflixStreaming-gif.gif",
    alt:"NetflixStreaming-gif"
  },
  {
    title: "Search & Filters",
    description: "Search for movies, TV shows, and genres with advanced filtering options.",
    imageUrl: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/NetflixSearch&Filter-gif.gif",
    alt:"NetflixSearch&Filter-gif"
  },
  {
    title: "Personalized Recommendations",
    description: "Using algorithms to suggest content based on user preferences and watch history.",
    imageUrl: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/NetflixPersonalisedRecommendation-gif.gif",
    alt:"NetflixPersonalisedRecommendation-gif"
  },
  {
    title: "Payment Gateway Integration",
    description: "Allow users to subscribe to premium content with secure payment methods like Stripe, Razorpay, or PayPal.",
    imageUrl: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/NetflixPaymentGateway-gif.gif",
    alt:"NetflixPaymentGateway-gif"
  },
  {
    title: "User Profiles",
    description: "Multiple user profiles with personalized settings and watchlists.",
    imageUrl: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/NetflixUserProfile-gif.gif",
    alt:"NetflixUserProfile-gif"
  },
  {
    title: "Watch History & Continue Watching",
    description: "Track watched content and allow users to continue where they left off.",
    imageUrl: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/NetflixWatchHistory-gif.gif",
    alt:"NetflixWatchHistory-gif"
  },
  {
    title: "Content Management",
    description: "Admin panel to add and manage movies, TV shows, and series.",
    imageUrl: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/NetflixContentManagement-gif.gif",
    alt:"NetflixContentManagement-gif"
  },
  {
    title: "Video Player with Custom Controls",
    description: "Custom video player with play, pause, volume control, and full-screen options.",
    imageUrl: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/NetflixVideoPlayer-gif.gif",
    alt:"NetflixVideoPlayer-gif"
  },
  {
    title: "Multilingual Support",
    description: "Multi-language support for global accessibility.",
    imageUrl: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/NetflixMultilingualSupport-gif.gif",
    alt:"NetflixMultilingualSupport-gif"
  },
  {
    title: "Ratings & Reviews",
    description: "Users can rate and review content.",
    imageUrl: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/NetflixRatingReview-gif.gif",
    alt:"NetflixRatingReview-gif"
  },
  {
    title: "Notifications",
    description: "Notify users about new releases, promotions, or recommendations.",
    imageUrl: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/NetflixNotification-gif.gif",
    alt:"NetflixNotification-gif"
  },
  {
    title: "Dark Mode Support",
    description: "A sleek dark mode for users who prefer a darker interface.",
    imageUrl: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/NetflixDarkMode-gif.gif",
    alt:"NetflixDarkMode-gif"
  },
  {
    title: "Offline Download",
    description: "Option to download content and watch offline.",
    imageUrl: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/NetflixOfflineDownload-gif.gif",
    alt:"NetflixOfflineDownload-gif"
  },
];

function FeaturesPage() {
  return (
    <WrapperContainer>
        <section className="py-14 px-6 ">
      <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-10">
        Key Features
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
          key={index}
          className="relative group bg-white p-6 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105 min-h-[200px]"
        >
            <div className="absolute inset-0 bg-red-200 opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <img
                src={feature.imageUrl}
                alt={feature.title}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="relative z-10 text-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </WrapperContainer>
  );
}

export default FeaturesPage;
