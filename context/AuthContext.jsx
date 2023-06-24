import { createContext, useEffect, useState } from "react";

import axiosApiTrendTrove from "@/utils/axiosConfig";
import { notify } from "@/utils/notificationToastify";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isAdmin, setIsAdmin] =  useState(false)
  const [tokenCokie, setTokenCokie] = useState("")

  useEffect(() => {
    setTokenCokie(getToken())
  }, []);

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
      const messageError =
        error.response.status === 401 ? "Contraseña incorrecta" : error.message;
      notify(newUser, "error", messageError);
    }
  };

  const saveToken = (token) => {
    try {
      Cookies.set("token", token);
    } catch (error) {
      notify(user, "error", "Error al guardar su token");
    }
  };

  const getToken = () => {
    try {
      return Cookies.get("token");
    } catch (error) {
      notify(user, "error", "Error al obtener su token");
    }
  };

  const saveUser = async (newUser) => {
    try {
      const { isAdmin, token, ...userData } = newUser
      saveToken(token);
      setIsAdmin(isAdmin)
      setUser(userData)
    } catch (error) {
      const messageError =
        error.response.status === 401 ? "Contraseña incorrecta" : error.message;
      notify(user, "error", messageError);
    }
  };

  return (
    <AuthContext.Provider value={{ user, tokenCokie, isAdmin, registerUser, loginUser, saveUser }}>
      {children}
    </AuthContext.Provider>
  );
};
