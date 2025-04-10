'use client'
import WrapperContainer from "@/Layout/WrapperContainer";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "https://cdn.prod.website-files.com/5b0c471ddb589cf22d4477a4/5e92ece55f86784b405fbfee_5b9fde6091da1ce30617735f_07_pinduoduo_productscreen_sections-p-1080.png",
  "https://cdn.prod.website-files.com/5b0c471ddb589cf22d4477a4/5e92ecf065892b716212943a_5b9fdda223b9568401a13d7c_16_pinduoduo_mini_app_wechat-p-1080.png",
  "https://cdn.prod.website-files.com/5b0c471ddb589cf22d4477a4/5e92ecde4660cb7de6e0aa67_5ba0a1bb1cfed333f2195927_03_pinduoduo_home_page_elements-p-1080.png",
  "https://cdn.prod.website-files.com/5b0c471ddb589cf22d4477a4/5e92ecd9b499e56450d8f136_5ba0a8b0054e5e3415a55d68_Slide2.jpeg",
  "https://cdn.prod.website-files.com/5b0c471ddb589cf22d4477a4/5e92ecef96104642ed794a39_5b9fddb997d0393f1d425f3e_15_pinduoduo_daily_check_ins-p-1080.png",
  "https://cdn.prod.website-files.com/5b0c471ddb589cf22d4477a4/5e92ececc0e4bbadcc89b5ca_5b9fe065aa89c6dc69c0c596_12_pinduoduo_cards_gamification_function_cards-p-1080.png",
  "https://cdn.prod.website-files.com/5b0c471ddb589cf22d4477a4/5e92ece87859bc81db6e78d3_5b9fde3491da1ccd0c177338_09_pinduoduo_sharing_experience-p-1080.png",
  "https://cdn.prod.website-files.com/5b0c471ddb589cf22d4477a4/5e92ecdb36c30bc308e26c6e_5b9fdeab4359f47eec2aa979_02_pinduoduo_newuserexperience_onboarding-p-1080.png",
  "https://cdn.prod.website-files.com/5b0c471ddb589cf22d4477a4/5e92e9375f86788d315f9ffc_5b9fde9b4fd32dd239945aed_04_pinduoduo_top_level_navigation_tabs-p-1080.png",
  "https://cdn.prod.website-files.com/5b0c471ddb589cf22d4477a4/5e92ececb499e58a3bd8f152_5b9fde0db835970287292b79_11_pinduoduo_cards_gamification_overview-p-1080.png",
  "https://cdn.prod.website-files.com/5b0c471ddb589cf22d4477a4/5e92ecee06600f28c8d6a132_5b9fddcde68431af5ac1807e_14_pinduoduo_cards_gamification_category_cards-p-1080.png",
  "https://cdn.prod.website-files.com/5b0c471ddb589cf22d4477a4/5e92ecd8f70fbb865c09c8c9_5b9fdec64fd32df6d9945b02_01_pinduoduo_app_store_screenshots-p-1080.png",
];

const AutoImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 2) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <WrapperContainer>
      <h1 className="flex justify-center text-[40px] mb-[30px]">What We Provide</h1>
      <div className="flex space-x-4 overflow-hidden w-full">
      {[0, 1].map((offset) => (
        <Image
          key={offset}
          src={images[(currentIndex + offset) % images.length]}
          alt={`Sliding Image ${offset + 1}`}
          width={600}
          height={300}
          className="rounded-lg object-cover mb-[40px]"
          priority
        />
      ))}
    </div>
    </WrapperContainer>
  );
};

export default AutoImageSlider;
