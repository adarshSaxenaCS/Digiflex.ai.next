import WrapperContainer from "@/Layout/WrapperContainer";
import Image from "next/image";
import Heading from "@/Layout/Heading";

const images = [
  "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/PinduoWhatWeProvideImg1-png.jpg",
  "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/PinduoWhatWeProvideImg2-png.jpg",
  "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/PinduoWhatWeProvideImg3-png.jpg",
  "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/PinduoWhatWeProvideImg4-png.jpg",
  "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/PinduoWhatWeProvideImg5-png.jpg",
  "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/PinduoWhatWeProvideImg6-png.jpg",
];

const WhatWeProvide = () => {
  return (
    <WrapperContainer>
      <Heading className="flex justify-center text-[40px] mb-[30px] font-bold text-blue-600">
        What We Provide
      </Heading>

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
