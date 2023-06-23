import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Login from "./Login";
import Signup from "./Signup";
import { ToastContainer } from "react-toastify";
import axiosApiTrendTrove from "@/utils/axiosConfig";
import { notify } from "@/utils/notificationToastify";

const AuthController = () => {
  const router = useRouter();
  const { query } = router;
  const [typeAuth, setTypeAuth] = useState(query.type || "login");

  const registerUser = async (user) => {
    try {
      return await axiosApiTrendTrove.post("/api/users/signup", user);
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Error de registro";
      notify(user, "error", errorMessage);
    }
  };

  useEffect(() => {
    setTypeAuth(query.type || "login");
  }, [query.type]);

  return (
    <div>
      <ToastContainer />
      {typeAuth === "login" ? (
        <Login />
      ) : (
        <Signup registerUser={registerUser} />
      )}
    </div>
  );
};

export default AuthController;
