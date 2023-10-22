import { useState } from "react";
import Image from "next/image";

const ImageBox = ({
  product,
  variant,
  posImage,
  handleImage,
  handleVariant,
}) => {
  const [variantSelected, setVariantSelected] = useState(variant.name);

  const handleSelectVariant = (variant) => {
    setVariantSelected(variant.name);
    handleVariant(variant);
  };

  const windowWidth = window.innerWidth

  return (
    <>
      <div className="w-full">
        <Image
          src={variant.images[posImage]}
          loading="lazy"
          width={400}
          height={400}
          style={{ width: "100%", height: "100%" }}
          alt={product.name}
          className="rounded-sm"
        />
      </div>
      <div title="model-box" className="mt-5">
        <div className="flex">
          {variant.images.map((image, index) => (
            <div
              className="h-auto w-1/3 mr-1 pt-3 pr-5 cursor-pointer"
              key={index}
              onMouseEnter={() => handleImage(index)}
            >
              <Image
                src={image}
                loading="lazy"
                quality={windowWidth < 768 ? 50 : 80}
                width={100}
                height={100}
                style={{ width: "100%", height: "100%" }}
                className="rounded"
                alt={product.name}
              />
            </div>
          ))}
        </div>
      </div>
      <div title="variants-box" className="mt-5">
        <h3 className="py-2 text-xl">Modelos disponibles:</h3>
        <div className="flex">
          {product.variants.map((variant, index) => (
            <div
              className="h-auto w-28 mr-5 flex flex-col cursor-pointer"
              key={variant.name + index}
              onClick={() => handleSelectVariant(variant)}
            >
              <Image
                src={variant.images[0]}
                loading="lazy"
                quality={windowWidth < 768 ? 10 : 40}
                width={100}
                height={100}
                style={{ width: "100%", height: "100%" }}
                className={
                  variantSelected === variant.name
                    ? "border-2 border-gray-900 rounded"
                    : "border-2 border-gray-100 rounded"
                }
                alt={product.name}
              />
              <p className="p-1">${variant.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageBox;
