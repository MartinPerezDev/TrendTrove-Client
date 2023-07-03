import { array, number, object, string } from "yup";

let userSignupSchema = object({
    name: string().required("El campo nombre no puede enviarse vacío").min(2, "El nombre debe tener al menos 2 caracteres"),
    email: string().email("Email no valido").required("El campo email no puede enviarse vacío").max(50, "El email debe tener menos de 50 caracteres"),
    password: string().required("El campo password no puede enviarse vacío").min(6, "El password debe tener al menos 6 caracteres")
})

let productCartSchema = object({
  _id: string().required("El campo id no puede enviarse vacío"),
  name : string().required("El campo nombre no puede enviarse vacío").min(2, "El nombre debe tener al menos 2 caracteres"),
  description : string().required("El campo descripción no puede enviarse vacío").min(2, "La descripción debe tener al menos 2 caracteres"),
  price : number().required("El campo precio no puede enviarse vacío").min(1, "El precio debe tener al menos 1 caracteres"), 
  size: string().required("El campo tamaño no puede enviarse vacío").min(1, "El tamaño debe tener al menos 1 caracteres"),
  images: array(),
  quantity: number().required("El campo cantidad no puede enviarse vacío").min(1, "La cantidad debe tener al menos 1 caracteres"),
})

export const validateAddProduct = async (data) => {
  try {
      await productCartSchema.validate(data, { strict: true })
      return true
  } catch (err) {
      return err.message
  }
}

export const validateForm = async (data, type) => {
    try {
        if(type === "login") {
          await userSignupSchema.validate(data, { strict: true })
        }else if(type === "signup"){
          await userSignupSchema.validate(data, { strict: true })
        }
        return true
    } catch (err) {
        return err.message
    }
}