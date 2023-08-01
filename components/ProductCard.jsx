import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ _id, name, category, description, variants }) => {
  return (
    <Link href={`/products/detail/${_id}`} className="w-1/2 lg:w-1/4 p-2 rounded">
      <div className="w-full h-auto">
        <Image
          className="rounded"
          src={variants[0].images[0]}
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
    </Link>
  );
};

export default ProductCard;
