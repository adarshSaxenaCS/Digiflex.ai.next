import Image from "next/image";
import React from "react";
import Heading from "@/Layout/Heading";
import WrapperContainer from "@/Layout/WrapperContainer";
import Paragraph from "@/Layout/Paragraph";

function Azure_info() {
  return (
    <>
      <WrapperContainer>
        <div className="flex flex-col items-center justify-center text-center">
          <Image
            src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Azore_intro.png"
            width={500}
            height={300}
            alt="AZURE MICROSOFT LOGO"
            className="w-40"
            priority={false}
          />
          <Heading>AZURE</Heading>
        </div>

        <div>
          <Paragraph className="text-center">
            
              Azure offers a comprehensive suite of cloud services that empower
              organizations to streamline operations, enhance scalability, and
              strengthen security while minimizing infrastructure costs.
              Digiflex.ai leverages Azure’s powerful capabilities to help
              businesses deploy applications globally, manage data efficiently,
              and integrate AI-driven solutions seamlessly. With a flexible
              cloud environment that supports diverse workloads—from web
              applications and databases to advanced analytics and IoT
              solutions—Digiflex.ai enables modern digital transformation with
              cutting-edge Azure services.
           
          </Paragraph>
        </div>
      </WrapperContainer>
    </>
  );
}

export default Azure_info;
