import { createContext, useEffect, useState } from "react";

import axiosApiTrendTrove, { setAuthToken } from "@/utils/axiosConfig";
import { notify } from "@/utils/notificationToastify";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isAdmin, setIsAdmin] = useState("");
  const [tokenCokie, setTokenCokie] = useState("");

  useEffect(()=>{
    const token = getToken();
    if (token) {
      getUser(token);
    }
  }, []);
  
  const getUser = async (token) => {
    try {
      setAuthToken(token);
      const user = await axiosApiTrendTrove.get('/api/users')
      setUser(user.data.data)
      setIsAdmin(user.data.data.isAdmin)
      setTokenCokie(token)
    } catch (error) {
      notify(user, "error", error);
    }
  }

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
      Cookies.set("token", token, { expires: 1 });
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
      const { isAdmin, token, ...userData } = newUser;
      saveToken(token);
      setIsAdmin(isAdmin);
      setUser(userData);
    } catch (error) {
      const messageError =
        error.response.status === 401 ? "Contraseña incorrecta" : error.message;
      notify(user, "error", messageError);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, tokenCokie, isAdmin, registerUser, loginUser, saveUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
