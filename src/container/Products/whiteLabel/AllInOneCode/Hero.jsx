import Paragraph from "@/Layout/Paragraph";
import Heading from "@/Layout/Heading";

function Hero({ title, description, videoSrc}) {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black flex items-center justify-center text-center">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          className="object-cover w-full h-full"
          style={{ position: "absolute", top: "0", left: "0" }}
        >
          <source
            src={videoSrc || "https://cdn.pixabay.com/video/2024/06/21/217643_large.mp4"}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-40 z-[1]"></div>

      {/* Centered Content */}
      <div className="relative z-10 text-white px-6 max-w-4xl">
        {/* Title */}
        <Heading className="text-5xl md:text-5xl font-bold mb-4 leading-tight">
          {title}
        </Heading>

        {/* Description */}
        <Paragraph className="text-lg md:text-2xl text-gray-300 mb-8">
          {description}
        </Paragraph>

      </div>
    </div>
  );
}

export default Hero;
