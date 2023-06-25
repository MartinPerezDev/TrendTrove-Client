import { useRef } from "react";

import { ImageButtonForm } from "./Buttons";
import { notify } from "@/utils/notificationToastify";

const ImageForm = ({ saveImages, imagesList, setImagesList }) => {
  const imageInputRef = useRef(null);

  const handleSave = (newImage) => {
    notify({}, "success", "Imagen agregada");
    setImagesList((prevImages) => [...prevImages, newImage]);
    saveImages([...imagesList, newImage]);
    imageInputRef.current.value = "";
  };

  const addImage = () => {
    const newImage = imageInputRef.current.value.trim();
    if (!newImage) {
      notify({}, "error", "Ingrese al menos 1 imagen");
      return;
    }
    handleSave(newImage);
  };

  return (
    <>
      <hr />
      <div className="py-5">
        <h2>Imagenes de la variante: {imagesList.length}</h2>
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
