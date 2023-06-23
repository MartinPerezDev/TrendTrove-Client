import { useContext, useState } from "react";

import { ToastContainer } from "react-toastify";

import { ProductsContext } from "@/context/ProductsContext";
import VariantForm from "./VariantForm";
import HeadForm from "./HeadForm";
import { ButtonForm } from "./Buttons";
import { errorMessage, successMessage } from "@/utils/notificationToastify";

const ProductForm = () => {
  const { addProduct } = useContext(ProductsContext);
  const [button, setButton] = useState(false);
  const [viewVariants, setViewVariants] = useState(false);
  const [dataForm, setDataForm] = useState({
    name: "",
    description: "",
    category: "",
    variants: [],
  });

  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      dataForm.name === "" ||
      dataForm.description === "" ||
      dataForm.category === "" ||
      dataForm.variants.length === 0
    ) {
      errorMessage("Por favor complete todos los campos");
      return;
    }
    successMessage("Producto agregado correctamente");
    addProduct(dataForm);
    setDataForm({
      name: "",
      description: "",
      category: "",
      variants: [],
    });
    setButton(false);
    setViewVariants(false);
  };

  const handleVariants = (variant) => {
    setButton(true);
    const newVariants = {
      ...dataForm,
      variants: [...dataForm.variants, variant],
    };
    setDataForm(newVariants);
  };

  return (
    <>
      <ToastContainer />
      <form className="max-w-lg flex flex-col p-5" onSubmit={handleSubmit}>
        {!viewVariants ? (
          <HeadForm
            dataForm={dataForm}
            handleChange={handleChange}
            setViewVariants={setViewVariants}
          />
        ) : (
          <VariantForm handleVariants={handleVariants} />
        )}
        {button && <ButtonForm />}
      </form>
    </>
  );
};

export default ProductForm;
