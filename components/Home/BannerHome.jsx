import { useEffect, useState } from "react";
import Image from "next/image";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const BannerHome = () => {
  

  return (
    <Carousel {...settings}>
      {images.map((image, index) => (
        <div className="h-full w-full" key={image.alt + index}>
          <Image
            src={image.src}
            width={1200}
            height={350}
            quality={quality}
            alt={image.alt}
            loading="lazy"
            className="object-cover h-full w-full rounded-bl-sm rounded-br-sm"
          />
        </div>
      ))}
    </Carousel>
  );
};

export default BannerHome;
