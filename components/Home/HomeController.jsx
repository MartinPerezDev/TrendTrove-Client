import { useEffect, useState } from "react";

import StepsToBuy from "./StepsToBuy";
import Comments from "./Comments";
import Banner from "./Banner";
import SlideProducts from "./SlideProducts";

const HomeController = () => {

  const [isMobile, setIsMobile ] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsMobile(screenWidth >= 1024 ? false : true);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div title="home-controller">
      <div title="head-home">
        <Banner isMobile={isMobile} />
        <StepsToBuy />
        <Comments isMobile={isMobile} />
        <SlideProducts isMobile={isMobile} />
      </div>
    </div>
  );
};

export default HomeController;
