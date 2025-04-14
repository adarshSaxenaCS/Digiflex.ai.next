import WrapperContainer from "@/Layout/WrapperContainer";
import Image from "next/image";

const images = [
  "https://cdn.prod.website-files.com/5b0c471ddb589cf22d4477a4/5e92ece55f86784b405fbfee_5b9fde6091da1ce30617735f_07_pinduoduo_productscreen_sections-p-1080.png",
  "https://cdn.prod.website-files.com/5b0c471ddb589cf22d4477a4/5e92ecf065892b716212943a_5b9fdda223b9568401a13d7c_16_pinduoduo_mini_app_wechat-p-1080.png",
  "https://cdn.prod.website-files.com/5b0c471ddb589cf22d4477a4/5e92ecde4660cb7de6e0aa67_5ba0a1bb1cfed333f2195927_03_pinduoduo_home_page_elements-p-1080.png",
  "https://cdn.prod.website-files.com/5b0c471ddb589cf22d4477a4/5e92ecd9b499e56450d8f136_5ba0a8b0054e5e3415a55d68_Slide2.jpeg",
  "https://cdn.prod.website-files.com/5b0c471ddb589cf22d4477a4/5e92ecef96104642ed794a39_5b9fddb997d0393f1d425f3e_15_pinduoduo_daily_check_ins-p-1080.png",
  "https://cdn.prod.website-files.com/5b0c471ddb589cf22d4477a4/5e92ececc0e4bbadcc89b5ca_5b9fe065aa89c6dc69c0c596_12_pinduoduo_cards_gamification_function_cards-p-1080.png",
];

const WhatWeProvide = () => {
  return (
    <WrapperContainer>
      <h1 className="flex justify-center text-[40px] mb-[30px] font-bold text-blue-600">
        What We Provide
      </h1>

      <div className="overflow-x-auto w-full">
        <div className="flex gap-4">
          {images.map((img, i) => (
            <div key={i} className="min-w-[600px]">
              <Image
                src={img}
                alt={`Slide ${i}`}
                width={600}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default WhatWeProvide;
