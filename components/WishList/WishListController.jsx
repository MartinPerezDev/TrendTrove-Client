import { useContext } from "react";

import { AuthContext } from "@/context/AuthContext";
import WishListEmpty from "./WishListEmpty";
import WishList from "./WishList";

const WishListController = () => {
  const { wishlist, deleteProductInWishList } = useContext(AuthContext);

  const removeProduct = (e, product) => {
    e.preventDefault()
    deleteProductInWishList(product);
  };

  return (
    <div className="w-full">
      {wishlist.length < 1 ? (
        <WishListEmpty />
      ) : (
        <WishList wishlist={wishlist} removeProduct={removeProduct} />
      )}
    </div>
  );
};

export default WishListController;
