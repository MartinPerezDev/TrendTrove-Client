import { useEffect, useState } from "react";
import Image from "next/image";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const BannerProducts = () => {
  const [quality, setQuality] = useState(80);
  const images = [
    {
      src: "https://res.cloudinary.com/dvabcnlc4/image/upload/v1686273025/TrendTrove/iss3tybx8sekysmwkri8.webp",
      alt: "banner adidas",
    },
    {
      src: "https://res.cloudinary.com/dvabcnlc4/image/upload/v1686273025/TrendTrove/mub2ktor6ybmjnwheofc.webp",
      alt: "banner nike",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setQuality(screenWidth > 1200 ? 100 : 80);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    autoPlay: true,
    infiniteLoop: true,
    showStatus: false,
    showThumbs: false,
    showIndicators: false,
    stopOnHover: false,
    interval: 5000,
    showArrows: false,
  };

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

export default BannerProducts;