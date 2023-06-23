import { object, string } from "yup";

let userSignupSchema = object({
    name: string().required("El campo nombre no puede enviarse vacío").min(2, "El nombre debe tener al menos 2 caracteres"),
    email: string().email("Email no valido").required("El campo email no puede enviarse vacío").max(50, "El email debe tener menos de 50 caracteres"),
    password: string().required("El campo password no puede enviarse vacío").min(6, "El password debe tener al menos 6 caracteres")
})

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