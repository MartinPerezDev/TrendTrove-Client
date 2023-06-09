import { ImAttachment } from "react-icons/im";
import { LuBoxes, LuPackageCheck } from "react-icons/lu";

export const ButtonForm = () => {
  return (
    <div className="flex">
      <button
        type="submit"
        className="flex items-center border border-gray-300 bg-gray-800 text-gray-100 rounded py-2 px-4 mt-5 hover:cursor-pointer"
      >
        <LuPackageCheck className="mr-2" />
        <p>Añadir Producto</p>
      </button>
    </div>
  );
};

export const VariantButtonForm = ({ addVariants }) => {
  return (
    <div className="flex">
      <div
        onClick={addVariants}
        className="flex items-center border border-gray-300 bg-gray-800 text-gray-100 rounded py-2 px-4 mt-5 hover:cursor-pointer"
      >
        <LuBoxes className="mr-2" />
        <p>Agregar Variante</p>
      </div>
    </div>
  );
};

export const ImageButtonForm = ({ addImage }) => {
  return (
    <div className="flex">
      <div
        className="flex items-center border border-gray-300 bg-gray-800 text-gray-100 rounded py-2 px-4 mt-5 hover:cursor-pointer"
        onClick={addImage}
      >
        <ImAttachment className="mr-2" />
        <p className="text-center">agregar imagen</p>
      </div>
    </div>
  );
};

export const NextButtonForm = ({ handleNext }) => {
  return (
    <div className="flex">
      <p
        className="border border-gray-300 bg-gray-800 text-gray-100 rounded py-2 px-4 mt-5 hover:cursor-pointer"
        onClick={handleNext}
      >
        Siguiente
      </p>
    </div>
  );
};
