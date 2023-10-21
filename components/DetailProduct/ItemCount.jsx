import { useEffect, useState } from "react";

const ItemCount = ({ stock, quantity, setQuantity }) => {

  useEffect(() => {
    setQuantity(1);
  }, [stock]);

  const handleAdd = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleSubtract = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div title="quantity" className="mt-5">
      <p className="py-2 mb-2 text-xl">Cantidad:</p>
      <div className="flex items-center text-gray-100 text-xl">
        <button
          onClick={handleSubtract}
          className="bg-gray-900 w-10 h-10 rounded"
        >
          -
        </button>
        <p className="text-gray-900 px-7">{quantity}</p>
        <button onClick={handleAdd} className="bg-gray-900 w-10 h-10 rounded">
          +
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
