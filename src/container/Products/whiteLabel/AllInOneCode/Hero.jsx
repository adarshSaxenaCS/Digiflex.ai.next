import Paragraph from "@/Layout/Paragraph";
import Heading from "@/Layout/Heading";

function Hero({ title, description, videoSrc }) {
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
            src={videoSrc || "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/ProductWhiteLAbelHero.mp4"}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-40 z-[1]"></div>

      {/* Centered Content */}
      <div className="relative z-10 text-white px-6 max-w-4xl group">
        {/* Title */}
        <h1 className="text-[40px] font-bold mb-[30px] group-hover:italic group-hover:text-blue-200 transition-all duration-300">
          {title}
        </h1>

        {/* Description */}
        <h3 className="text-white text-[25px] group-hover:italic group-hover:text-blue-200 transition-all duration-300">
          {description}
        </h3>
      </div>
    </div>
  );
}

export default Hero;
