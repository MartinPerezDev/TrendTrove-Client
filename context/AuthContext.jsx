import { createContext, useEffect, useState } from "react";

import axiosApiTrendTrove, { setAuthToken } from "@/utils/axiosConfig";
import { notify } from "@/utils/notificationToastify";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isAdmin, setIsAdmin] = useState("");
  const [tokenCokie, setTokenCokie] = useState("");
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const token = getToken();
    if (token) {
      getUser(token);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getWishList = async () => {
    try {
      const res = await axiosApiTrendTrove.get("/api/users/wishlist");
      setWishlist(res.data.data);
    } catch (error) {
      console.log(error);
      notify({}, "error", "Error al obtener sus productos favoritos");
    }
  };

  const getUser = async (token) => {
    try {
      const user = await axiosApiTrendTrove.get("/api/users");
      setUser(user.data.data);
      setIsAdmin(user.data.data.isAdmin);
      setTokenCokie(token);
      getWishList();
    } catch (error) {
      notify(user, "error", error);
    }
  };

  const registerUser = async (newUser) => {
    try {
      return await axiosApiTrendTrove.post("/api/users/signup", newUser);
    } catch (error) {
      notify(newUser, "error", `Usuario con email ${newUser.email} ya existe`);
    }
  };

  const loginUser = async (newUser) => {
    try {
      return await axiosApiTrendTrove.post("/api/users/login", newUser);
    } catch (error) {
      switch (error.response.status) {
        case 401:
          notify(newUser, "error", "Contraseña incorrecta");
          break;
        case 404:
          notify(newUser, "error", "Email no registrado");
          break;
        default:
          notify(newUser, "error", error.message);
          break;
      }
    }
  };

  const saveToken = (token) => {
    try {
      setAuthToken(token);
      setTokenCokie(token);
      Cookies.set("token", token, { expires: 1 });
    } catch (error) {
      notify(user, "error", "Error al guardar su token");
    }
  };

  const getToken = () => {
    try {
      const token = Cookies.get("token");
      setAuthToken(token);
      return token;
    } catch (error) {
      notify(user, "error", "Error al obtener su token");
    }
  };

  const deleteToken = () => {
    try {
      setAuthToken("");
      setTokenCokie("");
      Cookies.remove("token");
    } catch (error) {
      notify(user, "error", "Error al eliminar su token");
    }
  };

  const logout = () => {
    try {
      deleteToken();
      setUser({});
      setIsAdmin("");
      setWishlist([]);
      notify({}, "info", "Sesión cerrada correctamente")
    } catch (error) {
      notify(user, "error", "Error al cerrar sesión");
    }
  };

  const saveUser = async (newUser) => {
    try {
      const { isAdmin, token, ...userData } = newUser;
      saveToken(token);
      setIsAdmin(isAdmin);
      setUser(userData);
      getWishList();
    } catch (error) {
      const messageError =
        error.response.status === 401 ? "Contraseña incorrecta" : error.message;
      notify(user, "error", messageError);
    }
  };

  const getOrdersUser = async () => {
    try {
      if (user.email === "") throw Error;
      const orders = await axiosApiTrendTrove.get(
        `/api/orders/user/${user.email}`
      );
      return orders.data.data;
    } catch (error) {
      notify(
        user,
        "error",
        "Error al obtener sus ordenes, ingrese a su cuenta e intente nuevamente mas tarde"
      );
    }
  };

  const addProductInWishList = async (product) => {
    try {
      if (!user.email)
        return notify(
          {},
          "error",
          "Inicia sesion para usar el boton de favoritos"
        );
      await axiosApiTrendTrove.post("/api/users/wishlist", product);
      setWishlist((prev) => [...prev, product]);
      notify({}, "success", "Producto añadido a favoritos");
    } catch (error) {
      notify({}, "error", "Hubo un error al agregar este producto a favoritos");
    }
  };

  const deleteProductInWishList = async (product) => {
    try {
      if (!user.email)
        return notify(
          {},
          "error",
          "Inicia sesion para usar el boton de favoritos"
        );
      await axiosApiTrendTrove.put("/api/users/wishlist", product)
      const productsFiltered = wishlist.filter((prod)=> prod._id != product._id )
      setWishlist([...productsFiltered])
      notify({}, "success", "Producto eliminado de sus favoritos")
    } catch (error) {
      notify(
        {},
        "error",
        "Hubo un error al eliminar este producto de sus favoritos"
      );
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        tokenCokie,
        isAdmin,
        wishlist,
        registerUser,
        loginUser,
        saveUser,
        logout,
        getOrdersUser,
        addProductInWishList,
        deleteProductInWishList,
        getWishList,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
