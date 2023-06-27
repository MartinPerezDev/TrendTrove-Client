import { useContext } from "react";
import { NextButtonForm } from "./Buttons";

import { ProductsContext } from "@/context/ProductsContext";
import { notify } from "@/utils/notificationToastify";

const HeadForm = ({ dataForm, handleChange, setViewVariants }) => {
  const { categories } = useContext(ProductsContext);
  const styleInput = "border border-gray-300 rounded p-1 mt-5";

  const handleNext = () => {
    if (
      dataForm.name === "" ||
      dataForm.description === "" ||
      dataForm.category === ""
    ) {
      notify({}, "error", "Complete todos los campos");
      return;
    }
    setViewVariants(true);
  };

  return (
    <>
      <h3>Añade la descripcion general de tu producto:</h3>
      <input
        type="text"
        className={styleInput}
        name="name"
        placeholder="nombre de producto"
        onChange={handleChange}
      />
      <input
        type="text"
        className={styleInput}
        name="description"
        placeholder="descripcion de producto"
        onChange={handleChange}
      />
      <select
        name="category"
        className={styleInput}
        onChange={handleChange}
        defaultValue="none"
      >
        <option value="none" disabled>
          Seleccione una categoría
        </option>
        {categories.map((category, index) => (
          <option key={category.name + index} value={category.value}>
            {category.name}
          </option>
        ))}
      </select>
      <NextButtonForm handleNext={handleNext} />
    </>
  );
};

export default HeadForm;
