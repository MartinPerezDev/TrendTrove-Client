import { NextButtonForm } from "./Buttons";
import { notify } from "@/utils/notificationToastify";

const HeadForm = ({ dataForm, handleChange, setViewVariants }) => {
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
        <option value="remeras">Remeras</option>
        <option value="pantalones">Pantalones</option>
        <option value="zapatillas">Zapatillas</option>
        <option value="camperas">Camperas</option>
      </select>
      <NextButtonForm handleNext={handleNext} />
    </>
  );
};

export default HeadForm;
