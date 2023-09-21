import BannerHomeController from "./Banner/BannerHomeController";
import StepsToBuy from "./StepsToBuy";
import Comments from "./Comments";

const HomeController = () => {

  return (
    <div title="home-controller">
      <div title="head-home">
        <BannerHomeController />
        <StepsToBuy />
        <Comments />
      </div>
      {/*
        <div className="mt-5 px-2" title="trending-products">
          <div className="flex items-center">
            <h3>Mas Comprados</h3>
            <MdOutlineKeyboardArrowDown className="text-2xl" />
          </div>
          <ProductsList products={products} trend={true} />
        </div>
      */}
    </div>
  );
};

export default HomeController;
