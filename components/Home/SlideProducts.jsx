import { useContext, useMemo } from "react";
import Link from "next/link";

import { ProductsContext } from "@/context/ProductsContext";
import { AiOutlineFire } from "react-icons/ai";
import Slider from "react-slick";
import ProductCard from "../ProductCard";

const SlideProducts = ({ isMobile }) => {
  const { products } = useContext(ProductsContext);

  const listProductsTrending = useMemo(() => {
    return products.filter((product) => product.trending === true);
  }, [products]);

  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 2 : 4,
    slidesToScroll: 1,
  };

  return (
    <div title="box-slide-products" className="py-10 px-2">
      <div className="flex items-center">
        <AiOutlineFire size={20} />
        <h2 className="px-2 text-xl">
          Visita nuestros productos mas trending del momento
        </h2>
      </div>
      <div>
        <Slider {...settings}>
          {listProductsTrending.map((product, i) => (
            <div key={product.name + i} className="px-5">
              <ProductCard {...product} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex justify-center pt-10 text-gray-100">
        <Link
          href="/products"
          className="rounded-full py-4 px-6 my-10 bg-gradient-to-r from-sky-800 to-indigo-900"
        >
          <p className="font-bold">Ver todos los productos</p>
        </Link>
      </div>
    </div>
  );
};

export default SlideProducts;
