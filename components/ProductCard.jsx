import React from "react";
import Image from "next/image";

const ProductCard = ({ name, description, variants }) => {
  return (
    <div className="w-1/2 lg:w-1/4 m-1 border rounded border-gray-400">
      <div className="w-full h-auto">
        <Image
          className="rounded"
          src={variants[0].image[0]}
          loading="lazy"
          width={500}
          height={500}
          quality={80}
          alt={description}
        />
      </div>
      <div className="p-2">
        <p className="font-medium">{name}</p>
        <p className="text-gray-600">{description}</p>
        <p className="font-semibold">${variants[0].price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
