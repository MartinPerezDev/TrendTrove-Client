import { useRef } from "react";

import { ImageButtonForm } from "./Buttons";
import { errorMessage, successFireMessage } from "@/utils/toastify";

const ImageForm = ({ saveImages, images, setImages }) => {
  const imageInputRef = useRef(null);

  const handleSave = (newImage) => {
    successFireMessage("Imagen agregada correctamente");
    setImages((prevImages) => [...prevImages, newImage]);
    saveImages([...images, newImage]);
    imageInputRef.current.value = "";
  };

  const addImage = () => {
    const newImage = imageInputRef.current.value.trim();
    if (!newImage) {
      errorMessage("Por favor ingrese una url");
      return;
    }
    handleSave(newImage);
  };

  return (
    <>
      <hr />
      <div className="py-5">
        <h2>Imagenes de la variante: {images.length}</h2>
        <div className="flex flex-wrap">
          <input
            type="text"
            name="image"
            placeholder="url"
            className="border border-gray-300 rounded p-1 mt-5 mr-5"
            ref={imageInputRef}
          />
          <ImageButtonForm addImage={addImage} />
        </div>
      </div>
      <hr />
    </>
  );
};

export default ImageForm;
