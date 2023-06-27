import { ProductsContext } from "@/context/ProductsContext";
import Image from "next/image";
import React, { useContext } from "react";
import { ScaleLoader } from "react-spinners";

const ProductsLoader = () => {
  return (
    <div className="max-w-screen-xl mx-auto h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <Image
          src="https://res.cloudinary.com/dvabcnlc4/image/upload/v1686273024/TrendTrove/tyika4hi8rvwvlrqh87w.webp"
          loading="lazy"
          width={70}
          height={70}
          style={{border: "1px solid white", borderRadius: "5px"}}
          className="my-2"
          alt="logo trendtrove"
        />
        <ScaleLoader
          color={"#0e747d"}
          loading={true}
          size={300}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        <h3>Cargando App TrendTrove...</h3>
        <h4 className="text-gray-500 mx-2 my-5 text-center">Recuerde iniciar sesion para disfrutar de todas las funcionalidades de nuestra app</h4>
      </div>
    </div>
  );
};

export default ProductsLoader;
