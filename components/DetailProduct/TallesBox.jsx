import React, { useState } from "react";

const TallesBox = ({ variant, setSize }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSize = (size) => {
    if (size === selectedSize) {
      setSelectedSize(null); // Deseleccionar el tamaño si ya está seleccionado
      setSize(null); // Limpiar el tamaño seleccionado en la función setSize
    } else {
      setSelectedSize(size);
      setSize(size);
    }
  };

  return (
    <div className="sizes text-2xl mt-5">
      <h3 className="py-2 mb-2">Tallas disponibles:</h3>
      {variant.sizes.map((size, index) => (
        <div key={size + index} className="inline-block mr-2 text-lg">
          <button
            onClick={() => handleSize(size)}
            className={`${
              selectedSize === size
                ? "border bg-gray-900 text-yellow-50"
                : "border border-gray-200"
            } hover:border-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center`}
          >
            <span className="mr-1">{size}</span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default TallesBox;
