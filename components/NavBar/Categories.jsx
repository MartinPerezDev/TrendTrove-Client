import { useContext, useState } from "react";
import Link from "next/link";

import { ProductsContext } from "@/context/ProductsContext";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BiCategory } from "react-icons/bi";
import { GrHomeOption } from "react-icons/gr";

const Categories = ({ toggleMenu }) => {
  const [showCategories, setShowCategories] = useState(false);
  const { categories } = useContext(ProductsContext);

  const handleShowCategories = () => setShowCategories((prev) => !prev);

  return (
    <div className="p-1 my-1">
      <div
        onClick={handleShowCategories}
        className="flex items-center py-1 hover:cursor-pointer hover:bg-gray-900"
      >
        <BiCategory className="mr-2" />
        <p>Categorias</p>
        {showCategories ? (
          <IoIosArrowUp className="ml-1" />
        ) : (
          <IoIosArrowDown className="ml-1" />
        )}
      </div>
      <div className="flex flex-col">
        {showCategories &&
          categories.map((categorie, index) => (
            <Link
              key={categorie + index}
              href={`/products/category/${String(categorie).toLowerCase()}`}
              className="p-1 my-1 ml-2 hover:bg-gray-900"
              onClick={toggleMenu}
            >
              - {categorie}
            </Link>
          ))}
      </div>
      {/* {} */}
    </div>
  );
};

export default Categories;
