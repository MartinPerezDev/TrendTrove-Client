import { useEffect, useState } from "react";

const TallesBox = ({ variant, size, setSize }) => {
  const [selectedSize, setSelectedSize] = useState(undefined);

  useEffect(()=>{
    setSelectedSize(size)
  }, [size])

  const handleSize = (size) => {
    if (size === selectedSize) {
      setSelectedSize(undefined);
      setSize(undefined);
    } else {
      setSelectedSize(size);
      setSize(size);
    }
  };

  return (
    <div className="sizes text-xl mt-5">
      <p className="py-2 mb-2">Tallas disponibles:</p>
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
