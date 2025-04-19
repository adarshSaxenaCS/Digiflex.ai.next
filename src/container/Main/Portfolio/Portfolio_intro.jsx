import React from 'react'
import WrapperContainer from '@/Layout/WrapperContainer'
import Paragraph from '@/Layout/Paragraph'
function Portfolio_intro() {
  return (
    <>
    <WrapperContainer>
        <div className='text-4xl text-center text-gray-400'>
            <h1>CASE STUDIES & OVER PROJECTS</h1>
        </div>
        <div className='text-2xl text-center  mt-5'>
            <h1> <span className="text-[#1D4ED8] font-bold">Discover</span> Our Latest Projects</h1>
        </div>
        <Paragraph>In today’s world, expectations are higher than ever. At <span className="text-[#365fcf] font-bold">Digiflex.ai</span>, we merge cutting-edge design with seamless customer experiences to create immersive solutions that leave a lasting impact. Our work isn’t just functional—it’s a journey of innovation and excellence. Scroll down to explore and experience it yourself.</Paragraph>
        </WrapperContainer>
    </>
  )
}

export default Portfolio_intro