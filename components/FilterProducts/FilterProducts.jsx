import { useContext, useState } from "react";

import { ProductsContext } from "@/context/ProductsContext";
import ViewCategory from "./ViewCategory";
import { BiFilterAlt } from "react-icons/bi";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const FilterProducts = ({ products, changeProducts }) => {
  const [viewMenuCategory, setviewMenuCategory] = useState(false);
  const [viewMenuFilter, setViewMenuFilter] = useState(false);
  const { categories } = useContext(ProductsContext);

  const changeViewCategory = () => setviewMenuCategory(!viewMenuCategory);
  const changeViewFilter = () => setViewMenuFilter(!viewMenuFilter);

  const changeOrderProducts = (type) => {
    changeViewFilter()
    let productsFilter;
    if (type === "minor") {
      productsFilter = products.sort(
        (productA, productB) =>
          productA.variants[0].price - productB.variants[0].price
      );
    } else {
      productsFilter = products.sort(
        (productA, productB) =>
        productB.variants[0].price - productA.variants[0].price
      );
    }
    changeProducts(productsFilter);
  };

  return (
    <div title="box-filter-products" className="relative w-full flex mt-5 px-2">
      <ViewCategory
        categories={categories}
        viewMenuCategory={viewMenuCategory}
        changeViewCategory={changeViewCategory}
      />
      <div className="relative flex flex-col items-end w-1/2">
        <div
          className="flex items-center justify-center w-12 h-12 rounded-lg custom-gradient-buttons"
          onClick={changeViewFilter}
        >
          <BiFilterAlt color="white" size={20} />
        </div>
        {viewMenuFilter && (
          <div className="absolute flex flex-wrap px-2 text-white min-h-10 mt-14 border-gray-900 rounded-lg rounded-tr-none bg-gray-500 bg-opacity-75">
            <div
              className="rounded-lg custom-gradient-buttons px-3 py-2 mr-2 my-2 flex justify-center items-center"
              onClick={() => changeOrderProducts("minor")}
            >
              <MdKeyboardArrowDown size={20} />
              <p>Menor precio</p>
            </div>
            <div
              className="rounded-lg custom-gradient-buttons px-3 py-2 mr-2 my-2 flex justify-center items-center"
              onClick={() => changeOrderProducts("mayor")}
            >
              <MdKeyboardArrowUp size={20} />
              <p>Mayor precio</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterProducts;
