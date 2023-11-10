import { toast } from "react-toastify"

export const notify = ({ name = "unnamed" }, type, msg = false) => {
    const toastifyOptions = {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        pauseOnFocusLoss: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
    }
    switch (type) {
        case "success":
            msg ? toast.success(msg, toastifyOptions) : toast.success(`Operación Realizada con exito!`, toastifyOptions)
            break
        case "info":
            msg ? toast.info(msg, toastifyOptions) : toast.info(`Operación Realizada con exito!`, toastifyOptions)
            break
        case "error":
            msg ? toast.error(msg, toastifyOptions) : toast.error(`Ups, ${name}. Algo salió mal. Por favor, inténtalo de nuevo.`, toastifyOptions)
            break
        default:
            break
    }
}