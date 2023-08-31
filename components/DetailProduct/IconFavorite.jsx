import { AuthContext } from "@/context/AuthContext";
import { useContext, useEffect, useState } from "react";

import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

const IconFavorite = ({ idProduct, product }) => {
  const [isFavIcon, setIsFavIcon] = useState(false);
  const { wishlist, addProductInWishList, deleteProductInWishList } =
    useContext(AuthContext);

  useEffect(() => {
    if (wishlist.length > 0) {
      const res = wishlist.some((product) => product._id === idProduct);
      if (res) {
        setIsFavIcon(true);
      } else {
        setIsFavIcon(false);
      }
    }
  }, [wishlist, idProduct]);

  const toggleFavorite = () => {
    if (isFavIcon) {
      deleteProductInWishList(product);
    } else {
      addProductInWishList(product);
    }
  };

  return (
    <div
      title="favorite"
      className="w-1/6 flex items-start justify-end text-gray-900-500 cursor-pointer"
      onClick={toggleFavorite}
    >
      {isFavIcon ? (
        <MdFavorite className="h-9 w-9 p-1 rounded-full text-red-500" />
      ) : (
        <MdFavoriteBorder className="h-9 w-9 p-1 rounded-full" />
      )}
    </div>
  );
};

export default IconFavorite;
