import { useState } from "react";

import CheckBoxForm from "./CheckBoxForm";
import ImageForm from "./ImageForm";
import { VariantButtonForm } from "./Buttons";
import { errorMessage, successFireMessage } from "@/utils/toastify";

const VariantForm = ({ handleVariants }) => {
  const [variant, setVariant] = useState({
    name: "",
    price: "",
    stock: "",
    image: [],
    size: [],
  });
  const [countVariants, setCountVariants] = useState(0);
  const [images, setImages] = useState([]);
  const [sizeSelected, setSizeSelected] = useState([]);

  const styleInput = "border border-gray-300 rounded p-1 mr-5 mt-5";
  const options = ["S", "M", "L", "XL", "XXL"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVariant((prevVariant) => ({
      ...prevVariant,
      [name]: value,
    }));
  };

  const handleSize = (sizesArray) => {
    setVariant((prevVariant) => ({
      ...prevVariant,
      size: sizesArray,
    }));
  };

  const saveImages = (images) => {
    setVariant((prevVariant) => ({
      ...prevVariant,
      image: images,
    }));
  };

  const addVariants = () => {
    if (
      variant.name === "" ||
      variant.price === "" ||
      variant.stock === "" ||
      variant.image.length === 0 ||
      variant.size.length === 0
    ) {
      errorMessage("Por favor llene todos los campos");
      return;
    }
    successFireMessage("Variante agregada correctamente");
    setCountVariants(countVariants + 1);
    handleVariants(variant);
    setVariant({
      name: variant.name,
      price: variant.price,
      stock: variant.stock,
      image: [],
      size: [],
    });
    setImages([]);
    setSizeSelected([]);
  };

  return (
    <div>
      <h3>Variantes añadidas: {countVariants}</h3>
      <hr />
      <div className="py-5 flex flex-wrap">
        <input
          type="text"
          name="name"
          placeholder="nombre de variante"
          value={variant.name}
          className={styleInput}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="precio de variante"
          value={variant.price}
          className={styleInput}
          onChange={handleChange}
        />
        <input
          type="number"
          name="stock"
          placeholder="stock de variante"
          value={variant.stock}
          className={styleInput}
          onChange={handleChange}
        />
      </div>
      <hr />
      <CheckBoxForm
        handleSize={handleSize}
        options={options}
        sizeSelected={sizeSelected}
        setSizeSelected={setSizeSelected}
      />
      <ImageForm
        saveImages={saveImages}
        images={images}
        setImages={setImages}
      />
      <VariantButtonForm addVariants={addVariants} />
    </div>
  );
};

export default VariantForm;
