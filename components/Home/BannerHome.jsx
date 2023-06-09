import React from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const BannerHome = () => {
  const settings = {
    autoPlay: true,
    infiniteLoop: true,
    showStatus: false,
    showThumbs: false,
    showIndicators: false,
    stopOnHover: false,
    interval: 5000,
    showArrows: false,
  }

  return (
    <div className="h-full w-full">
      <Carousel {...settings}>
          <img src="https://res.cloudinary.com/dvabcnlc4/image/upload/f_auto,q_auto/v1/TrendTrove/iss3tybx8sekysmwkri8" alt="banner nike" />
          <img src="https://res.cloudinary.com/dvabcnlc4/image/upload/f_auto,q_auto/v1/TrendTrove/mub2ktor6ybmjnwheofc" alt="banner adidas" />
      </Carousel>
    </div>
  );
};

export default BannerHome;
