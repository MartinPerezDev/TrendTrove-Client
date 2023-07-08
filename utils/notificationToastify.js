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
        case "error":
            msg ? toast.error(msg, toastifyOptions) : toast.error(`Ups, ${name}. Algo salió mal. Por favor, inténtalo de nuevo.`, toastifyOptions)
            break
        default:
            break
    }
}

// export const successMessage = (message) => {
//   toast.success(message, {
//     position: "top-right",
//     autoClose: 5000,
//     hideProgressBar: true,
//     closeOnClick: true,
//     pauseOnHover: false,
//     draggable: true,
//     progress: undefined,
//     theme: "dark",
//   });
// }

// export const successFireMessage = (message) => {
//   toast.success(message, {
//     position: "top-right",
//     autoClose: 1500,
//     hideProgressBar: true,
//     closeOnClick: true,
//     pauseOnHover: false,
//     draggable: true,
//     progress: undefined,
//     theme: "dark",
//   });
// }

// export const errorMessage = (message) => {
//   toast.error(message, {
//     position: "top-right",
//     autoClose: 5000,
//     hideProgressBar: true,
//     closeOnClick: true,
//     pauseOnHover: false,
//     draggable: true,
//     progress: undefined,
//     theme: "dark",
//   });
// }