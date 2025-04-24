import WrapperContainer from '@/Layout/WrapperContainer'
import React from 'react'
import { FaUsers, FaChartBar, FaMapMarkerAlt, FaGenderless, FaUserFriends } from 'react-icons/fa'
import Image from 'next/image'

const Line = () => (
  <div className="h-1 w-[250px] bg-pink-300 rounded-lg my-4 mx-auto" />
)

const TinderUsage = () => {
  return (
    <WrapperContainer>
      <div className="p-6 md:p-10 mt-[-60px]">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Tinder Usage Statistics
        </h1>

        {/* Responsive Layout */}
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <Image
              src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/TinderUsage-jpg.jpg"
              width={500}
              height={500}
              alt="TinderUsage-jpg"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 flex items-center">
              <FaUsers className="mr-2 text-blue-500" /> Global User Base
            </h2>
            <p className="text-base md:text-lg">
              As of 2021, Tinder has over <strong>75 million monthly active users</strong> and is available in <strong>190+ countries</strong>.
            </p>
            <Line />

            <h2 className="text-xl md:text-2xl font-semibold mb-4 mt-8 flex items-center">
              <FaGenderless className="mr-2 text-blue-500" /> Gender Distribution
            </h2>
            <p className="text-base md:text-lg">
              The gender distribution on Tinder is quite balanced, with <strong>60% male</strong> and <strong>40% female</strong> users.
            </p>
            <Line />

            <h2 className="text-xl md:text-2xl font-semibold mb-4 mt-8 flex items-center">
              <FaUserFriends className="mr-2 text-blue-500" /> Popularity Among Young Adults
            </h2>
            <p className="text-base md:text-lg">
              Tinder is especially popular among users between the ages of <strong>18-34</strong>.
            </p>
            <Line />

            <h2 className="text-xl md:text-2xl font-semibold mb-4 mt-8 flex items-center">
              <FaChartBar className="mr-2 text-blue-500" /> Market Penetration
            </h2>
            <p className="text-base md:text-lg">
              Tinder holds over <strong>50% of the U.S. dating app market share</strong>.
            </p>
            <Line />

            <h2 className="text-xl md:text-2xl font-semibold mb-4 mt-8 flex items-center">
              <FaMapMarkerAlt className="mr-2 text-blue-500" /> U.S. Age & Gender Breakdown
            </h2>
            <p className="text-base md:text-lg">
              Around <strong>30% of U.S. internet users</strong> have tried online dating. Tinder is most popular among <strong>18-34</strong> year olds.
            </p>
            <Line />

            <h2 className="text-xl md:text-2xl font-semibold mb-4 mt-8 flex items-center">
              <FaChartBar className="mr-2 text-blue-500" /> Global Growth
            </h2>
            <p className="text-base md:text-lg">
              Downloads are increasing rapidly in countries like <strong>India</strong>, <strong>Brazil</strong>, and across <strong>Europe</strong>.
            </p>
          </div>
        </div>
      </div>
    </WrapperContainer>
  )
}

export default TinderUsage
