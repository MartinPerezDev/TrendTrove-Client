import Link from "next/link";

import { RiDislikeLine } from "react-icons/ri";
import Image from "next/image";

const WishList = ({ wishlist, removeProduct }) => {
  return (
    <div className="px-3 pt-5 w-full min-h-screen">
      <h2 className="text-xl pt-4">Listado de favoritos</h2>
      <p className="text-gray-500 pt-2 italic text-sm">
        Aqui se muestran los productos que guardaste
      </p>
      <div className="flex flex-wrap">
        {wishlist.map((product, i) => (
          <Link href={`/products/detail/${product._id}`} key={product.name + i}>
            <div className="border-2 rounded text-sm italic mt-4 relative w-full sm:max-w-sm sm:w-auto flex items-center mr-10">
              <div className="bg-red-400">
                <Image
                  src={product.variants[0].images[0]}
                  width={130}
                  height={130}
                  alt={product.name}
                />
              </div>
              <div
                title="dislike"
                onClick={(e) => removeProduct(e, product)}
                className="absolute right-0 top-0 rounded bg-red-500 w-10 h-10 hover:cursor-pointer z-10"
              >
                <RiDislikeLine className="w-10 h-10 p-2" color="white" />
              </div>
              <div className="flex flex-col items-start pl-5 pr-10">
                <p className="text-base font-bold not-italic">{product.name}</p>
                <p>Precio unitario: ${product.variants[0].price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WishList;
