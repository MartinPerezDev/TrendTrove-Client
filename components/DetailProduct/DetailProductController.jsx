import { useContext, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import { ProductsContext } from "@/context/ProductsContext";
import LoadingProduct from "./LoadingProduct";
import ItemCount from "./ItemCount";
import ImageBox from "./imageBox";
import TallesBox from "./TallesBox";
import { validateAddProduct } from "@/utils/validationsYup";
import { notify } from "@/utils/notificationToastify";

const DetailProductController = () => {
  const router = useRouter();
  const { idProduct } = router.query;
  const { getProductById } = useContext(ProductsContext);
  const [product, setProduct] = useState({});
  const [variant, setVariant] = useState({});
  const [posImage, setPosImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(undefined);

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

  const handleAddToCart = async () => {
    try {
      if(size === undefined) throw new Error("Debe seleccionar una talla");
      const newProduct = {
        _id: product._id,
        name: variant.name,
        description: product.description,
        price: String(variant.price),
        image: variant.images,
        size: size,
        quantity,
      };
      console.log(newProduct);
      const res = await validateAddProduct(newProduct);
      if (res) {
        notify({}, "success", "Producto añadido al carrito");
      }
    } catch (error) {
      notify({}, "error", error.message);
    }
  };

  return (
    <div className="px-5 py-10">
      {product.name ? (
        <div title="box-detail">
          <ImageBox
            product={product}
            variant={variant}
            posImage={posImage}
            handleImage={handleImage}
            handleVariant={handleVariant}
          />
          <TallesBox variant={variant} setSize={setSize} />
          <ItemCount
            stock={variant.stock}
            quantity={quantity}
            setQuantity={setQuantity}
          />
          <div title="button-comprar" className="flex mt-7">
            <div
              onClick={handleAddToCart}
              className="rounded-sm px-5 py-2 bg-gray-900 text-gray-100"
            >
              <p className="text-xl">Añadir al carrito</p>
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
