import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import { ProductsContext } from "@/context/ProductsContext";
import LoadingProduct from "./LoadingProduct";

const DetailProductController = () => {
  const router = useRouter();
  const { idProduct } = router.query;
  const { getProductById } = useContext(ProductsContext);
  const [product, setProduct] = useState({});
  const [variant, setVariant] = useState({});
  const [posImage, setPosImage] = useState(0);

  const getProduct = async () => {
    const res = await getProductById(idProduct);
    setProduct(res);
    setVariant(res.variants[0]);
  };

  useEffect(() => {
    getProduct();
  }, [idProduct]);

  const handleVariant = (variant) => {
    setVariant(variant);
    setPosImage(0);
  };

  const handleImage = (index) => {
    setPosImage(index);
  };

  return (
    <div className="px-5 py-10">
      {product.name ? (
        <div title="box-detail">
          <h2 className="text-2xl pb-4">{product.name}</h2>
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
                  className="h-28 w-1/3 mr-1 pt-3 pr-5"
                  key={index}
                  onClick={() => handleImage(index)}
                >
                  <Image
                    src={image}
                    loading="lazy"
                    quality={50}
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
            <h3 className="py-2">Modelos disponibles:</h3>
            <div className="flex">
              {product.variants.map((variant, index) => (
                <div
                  className="h-auto w-28 mr-5 flex flex-col "
                  key={variant.name + index}
                  onClick={() => handleVariant(variant)}
                >
                  <Image
                    src={variant.images[0]}
                    loading="lazy"
                    quality={10}
                    width={100}
                    height={100}
                    style={{ width: "100%", height: "100%" }}
                    className="rounded"
                    alt={product.name}
                  />
                  <p className="p-1">${variant.price}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="sizes text-2xl mt-5">
            <h3 className="py-2 mb-2">Tallas disponibles:</h3>
            {variant.sizes.map((size, index) => (
              <div key={size + index} className="inline-block mr-2 text-lg">
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                  <span className="mr-1">{size}</span>
                </button>
              </div>
            ))}
          </div>

          <div title="quantity" className="mt-5">
            <h3 className="py-2 mb-2 text-2xl">Cantidad:</h3>
            <div className="flex items-center text-gray-100 text-xl">
              <button className="bg-gray-900 w-10 h-10 rounded">-</button>
              <p className="text-gray-900 px-7">{1}</p>
              <button className="bg-gray-900 w-10 h-10 rounded">+</button>
            </div>
          </div>

          <div title="button-comprar" className="flex mt-7">
            <div className=" rounded-sm px-5 py-2 bg-gray-900 text-gray-100">
              <p className="text-xl">Comprar</p>
            </div>
          </div>
          <p title="help" className="text-gray-500 mt-5 italic">
            Recuerde seleccionar el modelo de la prenda, la talla y la cantidad
            antes de presionar comprar
          </p>
        </div>
      ) : (
        <LoadingProduct />
      )}
    </div>
  );
};

export default DetailProductController;
