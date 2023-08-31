import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { ProductsContext } from "@/context/ProductsContext";
import ItemCount from "./ItemCount";
import ImageBox from "./ImageBox";
import TallesBox from "./TallesBox";
import { validateAddProduct } from "@/utils/validationsYup";
import { notify } from "@/utils/notificationToastify";
import { CartContext } from "@/context/cartContext";
import Loading from "../Loading";
import IconFavorite from "./IconFavorite";

const DetailProductController = () => {
  const router = useRouter();
  const { idProduct } = router.query;
  const { addCart } = useContext(CartContext);
  const { getProductById } = useContext(ProductsContext);

  const [product, setProduct] = useState({});
  const [variant, setVariant] = useState({});
  const [posImage, setPosImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(undefined);

  useEffect(() => {
    const getProduct = async () => {
      const res = await getProductById(idProduct);
      setProduct(res);
      setVariant(res.variants[0]);
    };
    getProduct();
  }, [idProduct, getProductById]);

  const handleVariant = (variant) => {
    setSize(undefined)
    setVariant(variant);
    setPosImage(0);
  };

  const handleImage = (index) => {
    setPosImage(index);
  };

  const handleAddToCart = async () => {
    try {
      if (!size) return notify({}, "error", "Debe seleccionar una talla")
      const newProduct = {
        _id: product._id,
        total: variant.price * quantity,
        _idVariant: variant._id + size,
        name: variant.name,
        description: product.description,
        price: variant.price,
        images: variant.images,
        size: size,
        quantity,
      };
      const res = await validateAddProduct(newProduct);
      if (res) {
        addCart(newProduct);
        setQuantity(1);
        notify({}, "success", "Producto añadido al carrito");
      }
    } catch (error) {
      notify({}, "error", "Error al añadir este producto al carrito");
    }
  };

  return (
    <div className="px-5 py-10">
      {product.name ? (
        <div title="box-detail">
          <div title="title & favorite" className="flex">
            <h2 className="text-2xl w-5/6 flex items-start">{variant.name}</h2>
            <IconFavorite idProduct={idProduct} product={product} />
          </div>
          <ImageBox
            product={product}
            variant={variant}
            posImage={posImage}
            handleImage={handleImage}
            handleVariant={handleVariant}
          />
          <TallesBox variant={variant} setSize={setSize} size={size} />
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
        <Loading />
      )}
    </div>
  );
};

export default DetailProductController;
