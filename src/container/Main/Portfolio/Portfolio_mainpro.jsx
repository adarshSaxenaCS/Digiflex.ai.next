import WrapperContainer from '@/Layout/WrapperContainer';
import React from 'react';

function PortfolioMainPro() {
  const data = {
    id: 3,
    category: "Tractor 24",
    title: "Snapshopy - An On-Demand Grocery Delivery App",
    description:
      "Discover the best high-performance tractors for modern farming. Tractor 24 offers durable, efficient, and affordable tractors designed to maximize productivity. Shop now for the latest models and unbeatable prices!",
    image:
      "https://media.istockphoto.com/id/491151340/photo/tractor-on-the-field.jpg?b=1&s=612x612&w=0&k=20&c=wwf8mN3xR5mNJLo4-bLL-r030XjiB1XeXlzGWZshgIg=",
    leftImage:
      "https://img.freepik.com/premium-photo/rear-view-man-standing-field_1048944-24397735.jpg?uid=R185211144&ga=GA1.1.710522061.1738221959&semt=ais_hybrid",
    logo: "/snapshopy-logo.png",
  };

  return (
    <WrapperContainer>
      <div className="relative flex w-full flex-col md:flex-row">
        {/* Background Image Covering Full Card */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${data.image})`, opacity: 0.5 }}
        ></div>

        {/* Content Section */}
        <div className="relative flex flex-col md:flex-row w-full h-full p-4 sm:p-6 md:p-10">
          {/* Left Side - Smaller Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center p-4">
            <img
              src={data.leftImage}
              alt="Left Side"
              className="w-full md:w-3/4 h-auto object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side - Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-4 md:p-10 bg-white/80 backdrop-blur-sm rounded-lg shadow-md">
            <img src={data.logo} alt="Logo" className="w-20 sm:w-24 mb-4" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              {data.title}
            </h2>
            <p className="text-gray-700 text-sm sm:text-base mb-6">{data.description}</p>

            {/* Bottom Right Button */}
            <div className="mt-auto w-full flex justify-start md:justify-end">
              <button className="bg-blue-500 text-white px-5 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
}

export default PortfolioMainPro;
