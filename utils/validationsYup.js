import { array, number, object, string } from "yup";

let userSignupSchema = object({
  name: string().required("El campo nombre no puede enviarse vacío").min(2, "El nombre debe tener al menos 2 caracteres"),
  email: string().email("Email no valido").required("El campo email no puede enviarse vacío").max(50, "El email debe tener menos de 50 caracteres"),
  password: string().required("El campo password no puede enviarse vacío").min(6, "El password debe tener al menos 6 caracteres")
})

let productCartSchema = object({
  _id: string().required("El campo id no puede enviarse vacío"),
  name: string().required("El campo nombre no puede enviarse vacío").min(2, "El nombre debe tener al menos 2 caracteres"),
  description: string().required("El campo descripción no puede enviarse vacío").min(2, "La descripción debe tener al menos 2 caracteres"),
  price: number().required("El campo precio no puede enviarse vacío").min(1, "El precio debe tener al menos 1 caracteres"),
  size: string().required("El campo tamaño no puede enviarse vacío").min(1, "El tamaño debe tener al menos 1 caracteres"),
  images: array(),
  quantity: number().required("El campo cantidad no puede enviarse vacío").min(1, "La cantidad debe tener al menos 1 caracteres"),
})

let orderCartUserSchema = object({
  name: string().required("El campo nombre no puede enviarse vacío").min(2, "El nombre debe tener al menos 2 caracteres"),
  email: string().email("Email no valido").required("El campo email no puede enviarse vacío").max(50, "El email debe tener menos de 50 caracteres"),
  address: string().required("El campo dirección no puede enviarse vacío").min(2, "La dirección debe tener al menos 2 caracteres"),
})

let orderCartPaymentSchema = object({
  method: string().required("El campo método de pago no puede enviarse vacío"),
  cardName: string().required("El campo nombre de tarjeta no puede enviarse vacío").min(2, "El nombre de tarjeta debe tener al menos 2 caracteres"),
  cardNumber: string().required("El campo número de tarjeta no puede enviarse vacío").min(16, "El número de tarjeta debe tener al menos 16 caracteres"),
  expireDate: string().required("El campo fecha de expiración no puede enviarse vacío").min(4, "La fecha de expiración debe tener al menos 4 caracteres"),
  cvv: string().required("El campo cvv no puede enviarse vacío").min(3, "El cvv debe tener al menos 3 caracteres"),
})

export const validateAddProduct = async (data) => {
  try {
    await productCartSchema.validate(data, { strict: true })
    return true
  } catch (error) {
    return error.message
  }
}

export const validateForm = async (data, type) => {
  try {
    if (type === "login") {
      await userSignupSchema.validate(data, { strict: true })
    } else if (type === "signup") {
      await userSignupSchema.validate(data, { strict: true })
    }
    return true
  } catch (error) {
    return error.message
  }
}

export const validateOrderUserForm = async (data) => {
  try {
    await orderCartUserSchema.validate(data, { strict: true })
    return true
  } catch (error) {
    return error.message
  }
}

export const validateOrderPaymentForm = async (data) => {
  try {
    await orderCartPaymentSchema.validate(data, { strict: true })
    return true
  } catch (error) {
    return error.message
  }
}